import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import {
  COMPLETE_BOSCO_COMBINATION_COUNT,
  COMPLETE_BOSCO_REPLIES,
  COMPLETE_BOSCO_REPLIES_BY_KEY,
  COMPLETE_BOSCO_REPLY_COUNT,
  COMPLETE_BOSCO_VARIANTS_PER_COMBINATION,
  SCORE_BANDS,
  WIND_BANDS,
  boscoReplyKey,
  type CompleteBoscoReply,
  type ScoreBand,
  type WindBand,
} from "../data/bosco/bosco-dialogue-library";
import {
  BOSCO_DIALOGUE_ABSOLUTE_MAX,
  BOSCO_DIALOGUE_HISTORY_LIMIT,
  BOSCO_DIALOGUE_TARGET_MAX,
  BOSCO_DIALOGUE_TARGET_MIN,
  boscoDialogueMeta,
  buildBoscoDialogue,
  classifyDialogueScore,
  classifyDialogueWind,
  dialogueAnalysisFingerprint,
  parseDialogueHistory,
  toDialogueHistoryEntry,
  type BoscoDialogueHistoryEntry,
} from "../lib/bosco-dialogue-engine";
import type {
  BoscoDecision,
  BoscoProfile,
  BoscoResult,
  BoscoWeatherInput,
} from "../lib/bosco-engine";
import {
  WEATHER_FAMILIES,
  type TimeOfDay,
  type WeatherFamily,
} from "../lib/bosco-visual-context";

const root = process.cwd();

const profile: BoscoProfile = {
  firstName: "Guillaume",
  craftType: "catamaran",
  level: "intermediaire",
  favoriteSpot: "Jullouville",
  units: "marine",
  consentToLocalMemory: true,
};

function inputFor(
  weatherFamily: WeatherFamily = "clear",
  meanKt = 9,
  gustKt = 13,
): BoscoWeatherInput {
  return {
    wind: { meanKt, gustKt, directionDeg: 220 },
    weather: {
      code: weatherFamily,
      wmoCode: 0,
      temperatureC: 18,
      precipitationMmH: 0,
      visibilityM: weatherFamily === "fog" ? 700 : 12_000,
      pressureHPa: 1016,
      pressureTrendHPa3h: 0,
      thunderstormRisk: weatherFamily === "storm" ? 0.8 : 0,
    },
    sea: {
      waveHeightM: 0.4,
      waveDirectionDeg: 280,
      wavePeriodS: 6,
      swellHeightM: 0.3,
      swellDirectionDeg: 285,
    },
    tide: {
      heightM: 5.8,
      trend: "rising",
      highWaterAt: "12:10",
      lowWaterAt: "18:20",
    },
    trend: { windKt3h: 1 },
    spot: { name: "Jullouville", shorelineDeg: 275 },
    connection: { online: true },
    data: {
      observedAt: "2026-07-29T09:00:00+02:00",
      targetAt: "2026-07-29T10:00:00+02:00",
      cached: false,
      status: "complete",
    },
  };
}

function resultFor(
  score: number,
  decision: BoscoDecision = "decision-pleasant",
): BoscoResult {
  return {
    decision,
    label: "Contrôle",
    score,
    confidence: 0.92,
    emotion: "concentre",
    pose: "resting",
    image: "/assets/bosco/cutouts/decision-pleasant.webp",
    effect: "none",
    dialogueCategory: "complete",
    dialogue: "",
    summary: "Contrôle",
    reasons: [],
    scenarioTags: [],
    observedAt: "2026-07-29T09:00:00+02:00",
  };
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function normalize(text: string): string[] {
  return text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase("fr-FR")
    .replace(/[^\p{Letter}\s]/gu, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2);
}

function tokenBigrams(text: string): Set<string> {
  const words = normalize(text);
  return new Set(words.slice(0, -1).map((word, index) => `${word} ${words[index + 1]}`));
}

function jaccard(left: Set<string>, right: Set<string>): number {
  let intersection = 0;
  for (const token of left) {
    if (right.has(token)) intersection += 1;
  }
  const union = left.size + right.size - intersection;
  return union ? intersection / union : 1;
}

function dialogueFor(
  weatherFamily: WeatherFamily,
  meanKt: number,
  gustKt: number,
  score: number,
  decision: BoscoDecision = "decision-pleasant",
  history: BoscoDialogueHistoryEntry[] = [],
  consultationId = "test",
  timeOfDay: TimeOfDay = "day",
) {
  const input = inputFor(weatherFamily, meanKt, gustKt);
  const result = resultFor(score, decision);
  return buildBoscoDialogue(
    {
      result,
      input,
      profile,
      timeOfDay,
      consultationId,
    },
    history,
    consultationId,
  );
}

test("la matrice contient exactement dix météos, cinq vents, cinq notes et huit variantes", () => {
  assert.equal(WEATHER_FAMILIES.length, 10);
  assert.equal(WIND_BANDS.length, 5);
  assert.equal(SCORE_BANDS.length, 5);
  assert.equal(COMPLETE_BOSCO_VARIANTS_PER_COMBINATION, 8);
  assert.equal(COMPLETE_BOSCO_COMBINATION_COUNT, 250);
  assert.equal(COMPLETE_BOSCO_REPLY_COUNT, 2_000);
  assert.equal(COMPLETE_BOSCO_REPLIES.length, 2_000);
  assert.equal(COMPLETE_BOSCO_REPLIES_BY_KEY.size, 250);
  assert.equal(boscoDialogueMeta.runtimeFragments, 0);
  assert.equal(boscoDialogueMeta.offline, true);

  for (const weatherFamily of WEATHER_FAMILIES) {
    for (const windBand of WIND_BANDS) {
      for (const scoreBand of SCORE_BANDS) {
        const key = boscoReplyKey(weatherFamily, windBand, scoreBand);
        const variants = COMPLETE_BOSCO_REPLIES_BY_KEY.get(key);
        assert.equal(variants?.length, 8, key);
        variants?.forEach((reply, index) => {
          assert.equal(
            reply.id,
            `${key}:${String(index + 1).padStart(2, "0")}`,
          );
        });
      }
    }
  }
});

test("les deux mille identifiants et textes sont uniques, complets et bornés", () => {
  const ids = new Set(COMPLETE_BOSCO_REPLIES.map((reply) => reply.id));
  const texts = new Set(COMPLETE_BOSCO_REPLIES.map((reply) => reply.text));
  assert.equal(ids.size, 2_000);
  assert.equal(texts.size, 2_000);

  for (const reply of COMPLETE_BOSCO_REPLIES) {
    assert.ok(reply.text.trim().length > 0, reply.id);
    assert.ok(countWords(reply.text) >= BOSCO_DIALOGUE_TARGET_MIN, reply.id);
    assert.ok(countWords(reply.text) <= BOSCO_DIALOGUE_TARGET_MAX, reply.id);
    assert.ok(countWords(reply.text) <= BOSCO_DIALOGUE_ABSOLUTE_MAX, reply.id);
    assert.doesNotMatch(reply.text, /undefined|null|NaN|\[object Object\]/);
    assert.doesNotMatch(reply.text, /\d/);
  }
});

test("le corpus ne contient aucune formulation ni information interdite", () => {
  const forbidden = [
    /la pression reste propre dans les écoutes/i,
    /la mer fait une place/i,
    /son pas serré/i,
    /avant que la plage commande/i,
    /la météo est favorable à/i,
    /les conditions sont globalement bonnes/i,
    /selon les données disponibles/i,
    /la note est de/i,
    /\bscore\b/i,
    /\balgorithme\b/i,
    /\bdonnée(?:s)?\b/i,
    /\bvignette\b/i,
    /weatherFamily/i,
    /\bmarée\b/i,
    /\bpleine mer\b/i,
    /\bbasse mer\b/i,
    /\btempérature\b/i,
    /\bdegrés?\b/i,
    /\bnord\b|\bsud\b|\bouest\b/i,
    /\bvagues?\b|\bhoule\b/i,
  ];
  for (const reply of COMPLETE_BOSCO_REPLIES) {
    for (const pattern of forbidden) {
      assert.doesNotMatch(reply.text, pattern, `${reply.id}: ${pattern}`);
    }
  }
});

test("les phénomènes météo restent strictement dans leur famille canonique", () => {
  const dryFamilies: WeatherFamily[] = [
    "clear",
    "mainly-clear",
    "partly-cloudy",
    "overcast",
  ];
  for (const reply of COMPLETE_BOSCO_REPLIES) {
    if (dryFamilies.includes(reply.weatherFamily)) {
      assert.doesNotMatch(
        reply.text,
        /\bpluie\b|\bbruine\b|\bcrachin\b|\baverse\b|\borage\b|\béclair/i,
        reply.id,
      );
    }
    if (reply.weatherFamily !== "fog") {
      assert.doesNotMatch(reply.text, /\bbrouillard\b|\bbrume\b/i, reply.id);
    } else {
      assert.match(reply.text, /\bbrouillard\b|\bbrume\b/, reply.id);
    }
    if (reply.weatherFamily !== "storm") {
      assert.doesNotMatch(
        reply.text,
        /\borage\b|\borages\b|\béclair|\bgrain orageux\b|\bTonnerre de Brest\b/i,
        reply.id,
      );
    } else {
      assert.match(reply.text, /orage|éclair|\bgrain orageux\b/i, reply.id);
    }
    if (!["drizzle", "rain", "heavy-rain"].includes(reply.weatherFamily)) {
      assert.doesNotMatch(reply.text, /\bpluie\b|\bbruine\b|\bcrachin\b/i, reply.id);
    }
  }
});

test("le vocabulaire du vent correspond à chaque bande", () => {
  for (const reply of COMPLETE_BOSCO_REPLIES) {
    if (reply.windBand === "calm") {
      assert.doesNotMatch(
        reply.text,
        /\brafales?\b|\bviolent(?:e|es)?\b|\bclaques?\b|\bfrappe trop fort\b/i,
        reply.id,
      );
    }
    if (reply.windBand === "dangerous") {
      assert.equal(reply.safetyPriority, true, reply.id);
      assert.equal(reply.decision, "refuse", reply.id);
      assert.match(
        reply.text,
        /reste|aucun départ|pas une coque|ne pars pas|range|quai|refus|laisse|garde|pas de bravoure|ferme la porte au départ|pas question/i,
        reply.id,
      );
      assert.doesNotMatch(
        reply.text,
        /largue les amarres|prends le large|mets les coques à l’eau|feu vert/i,
        reply.id,
      );
    }
  }
});

test("la note pilote le jugement, sauf lorsque la sécurité impose le refus", () => {
  for (const reply of COMPLETE_BOSCO_REPLIES) {
    const safety = reply.weatherFamily === "storm" || reply.windBand === "dangerous";
    if (safety) {
      assert.equal(reply.safetyPriority, true, reply.id);
      assert.equal(reply.decision, "refuse", reply.id);
      assert.doesNotMatch(
        reply.text,
        /largue les amarres|prends le large|mets les coques à l’eau|feu vert/i,
        reply.id,
      );
      continue;
    }
    if (reply.scoreBand === "critical") {
      assert.equal(reply.decision, "refuse", reply.id);
      assert.doesNotMatch(
        reply.text,
        /tu peux|largue les amarres|prends le large|mets les coques à l’eau|feu vert/i,
        reply.id,
      );
    }
    if (reply.scoreBand === "good" || reply.scoreBand === "excellent") {
      assert.ok(
        reply.decision === "favorable" || reply.decision === "excellent",
        reply.id,
      );
      assert.doesNotMatch(
        reply.text,
        /reste au sec|aucun départ|pas question de prendre le large|sortie est refusée|ne pars pas|garde les amarres en place/i,
        reply.id,
      );
    }
  }
});

test("les huit variantes d’une combinaison sont réellement différentes", () => {
  for (const variants of COMPLETE_BOSCO_REPLIES_BY_KEY.values()) {
    const starts = new Set(
      variants.map((reply) => normalize(reply.text).slice(0, 5).join(" ")),
    );
    assert.ok(starts.size >= 6, variants[0]?.id);
    const bigrams = variants.map((reply) => tokenBigrams(reply.text));
    for (let left = 0; left < bigrams.length; left += 1) {
      for (let right = left + 1; right < bigrams.length; right += 1) {
        assert.ok(
          jaccard(bigrams[left], bigrams[right]) < 0.72,
          `${variants[left].id} ressemble trop à ${variants[right].id}`,
        );
      }
    }
  }
});

test("le contrôle global de quasi-doublons ne trouve aucune paire critique", () => {
  const indexed = COMPLETE_BOSCO_REPLIES.map((reply) => ({
    reply,
    bigrams: tokenBigrams(reply.text),
  }));
  let quasiDuplicates = 0;
  for (let left = 0; left < indexed.length; left += 1) {
    for (let right = left + 1; right < indexed.length; right += 1) {
      if (jaccard(indexed[left].bigrams, indexed[right].bigrams) >= 0.86) {
        quasiDuplicates += 1;
      }
    }
  }
  assert.equal(quasiDuplicates, 0);
});

test("la classification du vent donne toujours la priorité aux rafales", () => {
  assert.equal(classifyDialogueWind(2, 5), "calm");
  assert.equal(classifyDialogueWind(2, 8), "light");
  assert.equal(classifyDialogueWind(5, 9), "light");
  assert.equal(classifyDialogueWind(9, 14), "favorable");
  assert.equal(classifyDialogueWind(9, 18), "sporty");
  assert.equal(classifyDialogueWind(14, 20), "sporty");
  assert.equal(classifyDialogueWind(9, 25), "dangerous");
  assert.equal(classifyDialogueWind(19, 20), "dangerous");
  assert.equal(classifyDialogueWind(Number.NaN, Number.NaN), null);
});

test("la classification de la note respecte les cinq bandes", () => {
  assert.equal(classifyDialogueScore(0), "critical");
  assert.equal(classifyDialogueScore(2), "critical");
  assert.equal(classifyDialogueScore(2.9), "critical");
  assert.equal(classifyDialogueScore(3), "poor");
  assert.equal(classifyDialogueScore(4), "poor");
  assert.equal(classifyDialogueScore(4.9), "poor");
  assert.equal(classifyDialogueScore(5), "mixed");
  assert.equal(classifyDialogueScore(6), "mixed");
  assert.equal(classifyDialogueScore(6.9), "mixed");
  assert.equal(classifyDialogueScore(7), "good");
  assert.equal(classifyDialogueScore(8), "good");
  assert.equal(classifyDialogueScore(8.9), "good");
  assert.equal(classifyDialogueScore(9), "excellent");
  assert.equal(classifyDialogueScore(10), "excellent");
  assert.equal(classifyDialogueScore(Number.NaN), null);
});

test("les dix cas fonctionnels retournent une seule réplique complète cohérente", () => {
  const cases: Array<{
    weather: WeatherFamily;
    mean: number;
    gust: number;
    score: number;
    decision?: BoscoDecision;
    expectedWeather: RegExp;
    expectedWind: WindBand;
  }> = [
    { weather: "clear", mean: 10, gust: 14, score: 9, expectedWeather: /ciel|horizon|lumière|large|clarté/, expectedWind: "favorable" },
    { weather: "partly-cloudy", mean: 10, gust: 14, score: 7, expectedWeather: /nuages|éclaircies|gris|bleu|lumière/, expectedWind: "favorable" },
    { weather: "overcast", mean: 4, gust: 7, score: 5, expectedWeather: /gris|nuages|couvert|ardoise|plafond|lumière/, expectedWind: "light" },
    { weather: "rain", mean: 4, gust: 7, score: 4, expectedWeather: /pluie|gouttes|ruisselle|eau/, expectedWind: "light" },
    { weather: "heavy-rain", mean: 14, gust: 20, score: 3, expectedWeather: /forte pluie|pluie|eau|averses/, expectedWind: "sporty" },
    { weather: "fog", mean: 10, gust: 14, score: 2, expectedWeather: /brume|brouillard/, expectedWind: "favorable" },
    { weather: "storm", mean: 20, gust: 28, score: 8, expectedWeather: /orage|éclair|grain/, expectedWind: "dangerous" },
    { weather: "clear", mean: 20, gust: 28, score: 8, expectedWeather: /ciel|horizon|lumière|large|clarté/, expectedWind: "dangerous" },
    { weather: "clear", mean: 2, gust: 5, score: 6, expectedWeather: /ciel|horizon|lumière|large|clarté/, expectedWind: "calm" },
    { weather: "drizzle", mean: 5, gust: 8, score: 5, expectedWeather: /bruine|crachin|gouttes|humide/, expectedWind: "light" },
  ];
  cases.forEach((item, index) => {
    const dialogue = dialogueFor(
      item.weather,
      item.mean,
      item.gust,
      item.score,
      item.decision,
      [],
      `case-${index}`,
    );
    assert.equal(dialogue.debug.fragments.length, 1);
    assert.equal(dialogue.debug.templateId, "complete-dialogue");
    assert.equal(dialogue.weatherFamily, item.weather);
    assert.equal(dialogue.windBand, item.expectedWind);
    assert.match(dialogue.message, item.expectedWeather);
    assert.equal(
      COMPLETE_BOSCO_REPLIES.find((reply) => reply.id === dialogue.id)?.text,
      dialogue.message,
    );
  });
});

test("l’orage, le vent dangereux et un refus existant écrasent une note haute", () => {
  const storm = dialogueFor("storm", 9, 14, 8, "decision-pleasant", [], "storm-high");
  const wind = dialogueFor("clear", 9, 25, 8, "decision-pleasant", [], "wind-high");
  const existingRefusal = dialogueFor(
    "clear",
    9,
    14,
    8,
    "decision-discouraged",
    [],
    "existing-refusal",
  );

  for (const dialogue of [storm, wind, existingRefusal]) {
    assert.equal(dialogue.safetyPriority, true);
    assert.match(
      dialogue.message,
      /reste|aucun départ|pas une coque|ne pars pas|range|quai|refus|laisse|garde|pas de bravoure|ferme la porte au départ|pas question/i,
    );
    assert.doesNotMatch(
      dialogue.message,
      /largue les amarres|prends le large|mets les coques à l’eau|feu vert/i,
    );
  }
  assert.equal(existingRefusal.selectedScoreBand, "critical");
});

test("l’anti-répétition parcourt les huit variantes puis reprend la plus ancienne", () => {
  let history: BoscoDialogueHistoryEntry[] = [];
  const ids: string[] = [];
  for (let index = 0; index < 9; index += 1) {
    const consultationId = `rotation-${index}`;
    const dialogue = dialogueFor(
      "partly-cloudy",
      10,
      14,
      7,
      "decision-pleasant",
      history,
      consultationId,
    );
    ids.push(dialogue.id);
    history = [
      ...history,
      toDialogueHistoryEntry(dialogue, `2026-07-29T10:${index}0:00+02:00`),
    ].slice(-BOSCO_DIALOGUE_HISTORY_LIMIT);
  }
  assert.equal(new Set(ids.slice(0, 8)).size, 8);
  assert.equal(ids[8], ids[0]);
});

test("une analyse identique reste stable et ne dépend pas d’un rendu React", () => {
  const input = inputFor("mainly-clear", 9, 13);
  const result = resultFor(8);
  const fingerprint = dialogueAnalysisFingerprint(result, input, "morning");
  const context = {
    result,
    input,
    profile,
    timeOfDay: "morning" as const,
    consultationId: fingerprint,
  };
  const first = buildBoscoDialogue(context, [], fingerprint);
  const second = buildBoscoDialogue(context, [], fingerprint);
  assert.deepEqual(second, first);
});

test("le repli reste local, lisible et sûr avec des entrées invalides", () => {
  const input = inputFor("clear", Number.NaN, Number.NaN);
  (input.weather as { code: string }).code = "unknown";
  input.data.status = "invalid";
  const result = resultFor(Number.NaN, "decision-unavailable");
  const dialogue = buildBoscoDialogue(
    {
      result,
      input,
      profile,
      timeOfDay: "day",
      consultationId: "invalid",
    },
    [],
    "invalid",
  );
  assert.equal(dialogue.debug.templateId, "safe-fallback");
  assert.match(dialogue.message, /sec|amarres|relevé fiable|terre|quai/i);
  assert.doesNotMatch(dialogue.message, /undefined|null|NaN|unknown/);
});

test("l’historique tolère un stockage absent, corrompu, ancien ou trop long", () => {
  assert.deepEqual(parseDialogueHistory(null), []);
  assert.deepEqual(parseDialogueHistory("not-json"), []);
  assert.deepEqual(parseDialogueHistory("{}"), []);
  const legacy = Array.from({ length: 30 }, (_, index) => ({
    id: `legacy-${index}`,
    message: `Message ${index}`,
    openingId: `opening-${index}`,
    templateId: "legacy",
    createdAt: "",
  }));
  const parsed = parseDialogueHistory(JSON.stringify(legacy));
  assert.equal(parsed.length, BOSCO_DIALOGUE_HISTORY_LIMIT);
  assert.equal(parsed[0].id, "legacy-10");
});

test("le moteur est entièrement local et l’ancien assemblage n’est plus actif", () => {
  const engine = readFileSync(join(root, "lib/bosco-dialogue-engine.ts"), "utf8");
  const decisionEngine = readFileSync(join(root, "lib/bosco-engine.ts"), "utf8");
  const library = readFileSync(
    join(root, "data/bosco/bosco-dialogue-library.ts"),
    "utf8",
  );
  assert.doesNotMatch(engine, /fetch\(|https?:\/\/|Math\.random/);
  assert.doesNotMatch(engine, /OPENINGS|SEA_FRAGMENTS|WIND_FRAGMENTS|TIDE_FRAGMENTS|CONCLUSIONS/);
  assert.doesNotMatch(engine, /rendered\.join|parts\.map|fragmentCompatible|selectFragment/);
  assert.doesNotMatch(decisionEngine, /selectDialogue|phraseHash|bosco-dialogues\.json/);
  assert.doesNotMatch(library, /expand\(|leads:|tails:/);
  assert.equal(existsSync(join(root, "data/bosco/bosco-dialogues.json")), false);
});

test("chaque fichier météo contient exactement deux cents répliques locales", () => {
  for (const weatherFamily of WEATHER_FAMILIES) {
    const path = join(
      root,
      "data",
      "bosco",
      "dialogues-v23",
      `${weatherFamily}.json`,
    );
    assert.equal(existsSync(path), true, path);
    const replies = JSON.parse(readFileSync(path, "utf8")) as CompleteBoscoReply[];
    assert.equal(replies.length, 200, weatherFamily);
    assert.ok(replies.every((reply) => reply.weatherFamily === weatherFamily));
  }
});

test("les tableaux de catégories restent canoniques et sans second mapping météo", () => {
  assert.deepEqual(WIND_BANDS, [
    "calm",
    "light",
    "favorable",
    "sporty",
    "dangerous",
  ] satisfies WindBand[]);
  assert.deepEqual(SCORE_BANDS, [
    "critical",
    "poor",
    "mixed",
    "good",
    "excellent",
  ] satisfies ScoreBand[]);
});
