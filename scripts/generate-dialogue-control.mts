import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  COMPLETE_BOSCO_COMBINATION_COUNT,
  COMPLETE_BOSCO_REPLIES,
  COMPLETE_BOSCO_REPLIES_BY_KEY,
  COMPLETE_BOSCO_REPLY_COUNT,
  COMPLETE_BOSCO_VARIANTS_PER_COMBINATION,
  SCORE_BANDS,
  WIND_BANDS,
  boscoReplyKey,
} from "../data/bosco/bosco-dialogue-library";
import { WEATHER_FAMILIES } from "../lib/bosco-visual-context";

const root = process.cwd();
const output = join(root, "deliverables", "Bosco-Version-23");
mkdirSync(output, { recursive: true });

function words(text: string): string[] {
  return text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase("fr-FR")
    .replace(/[^\p{Letter}\s]/gu, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2);
}

function bigrams(text: string): Set<string> {
  const tokens = words(text);
  return new Set(
    tokens.slice(0, -1).map((token, index) => `${token} ${tokens[index + 1]}`),
  );
}

function similarity(left: Set<string>, right: Set<string>): number {
  let intersection = 0;
  for (const token of left) {
    if (right.has(token)) intersection += 1;
  }
  const union = left.size + right.size - intersection;
  return union ? intersection / union : 1;
}

const ids = COMPLETE_BOSCO_REPLIES.map((reply) => reply.id);
const texts = COMPLETE_BOSCO_REPLIES.map((reply) => reply.text);
const wordCounts = texts.map((text) => text.trim().split(/\s+/).length);
const exactDuplicateIds = ids.length - new Set(ids).size;
const exactDuplicateTexts = texts.length - new Set(texts).size;
const indexedBigrams = texts.map(bigrams);
const quasiDuplicatePairs: Array<{
  left: string;
  right: string;
  similarity: number;
}> = [];

for (let left = 0; left < indexedBigrams.length; left += 1) {
  for (let right = left + 1; right < indexedBigrams.length; right += 1) {
    const value = similarity(indexedBigrams[left], indexedBigrams[right]);
    if (value >= 0.86) {
      quasiDuplicatePairs.push({
        left: ids[left],
        right: ids[right],
        similarity: Number(value.toFixed(3)),
      });
    }
  }
}

const requiredKeys = WEATHER_FAMILIES.flatMap((weatherFamily) =>
  WIND_BANDS.flatMap((windBand) =>
    SCORE_BANDS.map((scoreBand) =>
      boscoReplyKey(weatherFamily, windBand, scoreBand),
    ),
  ),
);
const missingKeys = requiredKeys.filter(
  (key) =>
    COMPLETE_BOSCO_REPLIES_BY_KEY.get(key)?.length !==
    COMPLETE_BOSCO_VARIANTS_PER_COMBINATION,
);

const representativeIds = [
  "clear:favorable:excellent:01",
  "partly-cloudy:favorable:good:02",
  "overcast:light:mixed:03",
  "rain:light:poor:04",
  "heavy-rain:sporty:poor:05",
  "fog:favorable:critical:06",
  "storm:dangerous:good:07",
  "clear:dangerous:good:08",
  "clear:calm:mixed:01",
  "drizzle:light:mixed:02",
];
const representativeReplies = representativeIds.map((id) => {
  const reply = COMPLETE_BOSCO_REPLIES.find((candidate) => candidate.id === id);
  if (!reply) throw new Error(`Réplique de contrôle absente : ${id}`);
  return reply;
});

const protectedPaths = [
  ".openai/hosting.json",
  "app/globals.css",
  "components/BoscoCompositor.tsx",
  "components/BoscoHomeCarousel.tsx",
  "components/BoscoHomeCarousel.module.css",
  "lib/bosco-visual-context.ts",
  "lib/marine-data.ts",
  "lib/marine-navigation.ts",
  "data/bosco/bosco-rules.json",
  "data/bosco/bosco-navigation-score.json",
  "data/bosco/bosco-weather-engine.json",
  "public/manifest.webmanifest",
  "public/sw.js",
];
const protectedHashes = Object.fromEntries(
  protectedPaths.map((path) => [
    path,
    createHash("sha256")
      .update(readFileSync(join(root, path)))
      .digest("hex"),
  ]),
);

const coherenceErrors = [
  exactDuplicateIds,
  exactDuplicateTexts,
  quasiDuplicatePairs.length,
  missingKeys.length,
  COMPLETE_BOSCO_REPLY_COUNT === 2_000 ? 0 : 1,
  COMPLETE_BOSCO_COMBINATION_COUNT === 250 ? 0 : 1,
].reduce((sum, value) => sum + value, 0);

const report = {
  version: 23,
  architecture: "complete-local-replies",
  totalReplies: COMPLETE_BOSCO_REPLY_COUNT,
  totalCombinations: COMPLETE_BOSCO_COMBINATION_COUNT,
  variantsPerCombination: COMPLETE_BOSCO_VARIANTS_PER_COMBINATION,
  weatherFamilies: WEATHER_FAMILIES.length,
  windBands: WIND_BANDS.length,
  scoreBands: SCORE_BANDS.length,
  exactDuplicateIds,
  exactDuplicateTexts,
  quasiDuplicateThreshold: 0.86,
  quasiDuplicatePairs,
  quasiDuplicatesCorrected: 0,
  missingKeys,
  remainingCoherenceErrors: coherenceErrors,
  wordCount: {
    minimum: Math.min(...wordCounts),
    maximum: Math.max(...wordCounts),
    average: Number(
      (wordCounts.reduce((sum, value) => sum + value, 0) / wordCounts.length).toFixed(
        1,
      ),
    ),
  },
  safetyReplies: COMPLETE_BOSCO_REPLIES.filter(
    (reply) => reply.safetyPriority,
  ).length,
  rareMarineExclamations: COMPLETE_BOSCO_REPLIES.filter((reply) =>
    /Mille sabords|Nom d’une pipe|Par ma vieille ancre|barbe du vieux phare|Tonnerre de Brest/i.test(
      reply.text,
    ),
  ).length,
  offline: true,
  runtimeFragments: 0,
  protectedHashes,
  representativeReplies,
  result: coherenceErrors === 0 ? "PASS" : "FAIL",
};

writeFileSync(
  join(output, "rapport-validation.json"),
  `${JSON.stringify(report, null, 2)}\n`,
);
writeFileSync(
  join(output, "exemples-representatifs.md"),
  [
    "# Bosco — Version 23 — Exemples représentatifs",
    "",
    ...representativeReplies.flatMap((reply) => [
      `## ${reply.id}`,
      "",
      reply.text,
      "",
    ]),
  ].join("\n"),
);

console.log(
  JSON.stringify({
    totalReplies: report.totalReplies,
    totalCombinations: report.totalCombinations,
    exactDuplicates: report.exactDuplicateTexts,
    quasiDuplicates: report.quasiDuplicatePairs.length,
    remainingCoherenceErrors: report.remainingCoherenceErrors,
    result: report.result,
  }),
);
