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
} from "@/data/bosco/bosco-dialogue-library";
import type {
  BoscoDecision,
  BoscoProfile,
  BoscoResult,
  BoscoWeatherInput,
} from "@/lib/bosco-engine";
import {
  WEATHER_FAMILIES,
  type TimeOfDay,
  type WeatherFamily,
} from "@/lib/bosco-visual-context";

export type BoscoDialogueHistoryEntry = {
  id: string;
  message: string;
  analysisKey?: string;
  combinationKey?: string;
  createdAt: string;
};

export type BoscoDialogueContext = {
  result: BoscoResult;
  input: BoscoWeatherInput;
  profile: BoscoProfile;
  timeOfDay: TimeOfDay;
  consultationId: string;
};

export type BoscoDialogueDebug = {
  dialogueId: string;
  family: ScoreBand | "fallback";
  templateId: "complete-dialogue" | "safe-fallback";
  fragments: string[];
  selectionReasons: string[];
  constraints: {
    decision: BoscoDecision;
    weather: WeatherFamily | "invalid";
    wind: WindBand | "invalid";
    sea: "not-used";
    tide: "not-used";
    time: TimeOfDay;
    mood: "satisfied" | "serene" | "wary" | "protective";
    register: "bosco-complete";
    prudence: ScoreBand | "safety";
  };
  length: number;
  wordCount: number;
  sentenceCount: number;
  factsUsed: string[];
  history: {
    completeDialoguesAvoided: number;
    openingsAvoided: 0;
    seaAvoided: 0;
    windAvoided: 0;
    tideAvoided: 0;
    conclusionsAvoided: 0;
    haddockReferencesAvoided: 0;
  };
};

export type BoscoDialogue = {
  id: string;
  analysisKey: string;
  message: string;
  combinationKey: string;
  weatherFamily: WeatherFamily | "invalid";
  windBand: WindBand | "invalid";
  scoreBand: ScoreBand | "invalid";
  selectedScoreBand: ScoreBand | "fallback";
  safetyPriority: boolean;
  debug: BoscoDialogueDebug;
};

export const BOSCO_DIALOGUE_HISTORY_KEY =
  "bosco:dialogue-history:v23-complete";
export const BOSCO_DIALOGUE_HISTORY_LIMIT = 20;
export const BOSCO_DIALOGUE_TARGET_MIN = 22;
export const BOSCO_DIALOGUE_TARGET_MAX = 55;
export const BOSCO_DIALOGUE_ABSOLUTE_MAX = 70;

const FALLBACK_REPLIES: Record<
  ScoreBand | "safety" | "invalid",
  { id: string; text: string }
> = {
  critical: {
    id: "fallback:critical",
    text:
      "Mes instruments ne me donnent pas une lecture assez nette. Les coques restent au sec, matelot, car Bosco ne t’enverra jamais au large sur une supposition.",
  },
  poor: {
    id: "fallback:poor",
    text:
      "Je distingue mal ce qui se prépare dehors. Garde les coques au quai, moussaillon, et attends une lecture plus franche avant de décider.",
  },
  mixed: {
    id: "fallback:mixed",
    text:
      "La fenêtre ne me raconte pas toute l’histoire. Reste prudent, matelot, et ne mets à l’eau qu’après avoir retrouvé une lecture fiable.",
  },
  good: {
    id: "fallback:good",
    text:
      "Le tableau paraît encourageant, mais il me manque une lecture propre. Vérifie avant de larguer, moussaillon, Bosco préfère un départ certain à un joli doute.",
  },
  excellent: {
    id: "fallback:excellent",
    text:
      "Tout semble prometteur, mais mes instruments gardent une carte cachée. Confirme la lecture avant de partir, matelot, puis profite si elle revient propre.",
  },
  safety: {
    id: "fallback:safety",
    text:
      "Je n’ai pas besoin d’en savoir davantage pour trancher. Les coques restent au sec, matelot, et Bosco ne négocie jamais avec un danger signalé.",
  },
  invalid: {
    id: "fallback:invalid",
    text:
      "La lecture est trop incomplète pour parler honnêtement du large. Attends un relevé fiable, moussaillon, et laisse les amarres tranquilles jusque-là.",
  },
};

function finite(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

function hashText(text: string): number {
  let hash = 2166136261;
  for (const character of text) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function sentenceCount(text: string): number {
  return (text.match(/[.!?…](?=\s|$)/g) ?? []).length;
}

export function resolveDialogueWeatherFamily(
  input: BoscoWeatherInput,
): WeatherFamily | null {
  return WEATHER_FAMILIES.includes(input.weather.code as WeatherFamily)
    ? (input.weather.code as WeatherFamily)
    : null;
}

export function classifyDialogueWind(
  meanKt: unknown,
  gustKt: unknown,
): WindBand | null {
  const hasMean = finite(meanKt);
  const hasGust = finite(gustKt);
  if (!hasMean && !hasGust) return null;

  const mean = hasMean ? Math.max(0, meanKt) : 0;
  const gust = hasGust ? Math.max(0, gustKt) : mean;

  if (mean >= 19 || gust >= 25) return "dangerous";
  if (mean >= 13 || gust >= 17) return "sporty";
  if (mean >= 7) return "favorable";
  if (mean >= 3 || gust >= 6) return "light";
  return "calm";
}

export function classifyDialogueScore(score: unknown): ScoreBand | null {
  if (!finite(score)) return null;
  if (score < 3) return "critical";
  if (score < 5) return "poor";
  if (score < 7) return "mixed";
  if (score < 9) return "good";
  return "excellent";
}

export function hasDialogueSafetyPriority(
  result: BoscoResult,
  input: BoscoWeatherInput,
  weatherFamily: WeatherFamily | null,
  windBand: WindBand | null,
): boolean {
  if (weatherFamily === "storm" || windBand === "dangerous") return true;
  if (result.decision === "decision-discouraged") return true;
  if (result.decision === "decision-unavailable") return true;
  if (input.data.status === "invalid" || input.data.status === "unavailable") {
    return true;
  }
  return (
    finite(input.weather.thunderstormRisk) &&
    input.weather.thunderstormRisk >= 0.35
  );
}

function moodFor(
  scoreBand: ScoreBand | null,
  safetyPriority: boolean,
): BoscoDialogueDebug["constraints"]["mood"] {
  if (safetyPriority || scoreBand === "critical" || scoreBand === "poor") {
    return "protective";
  }
  if (scoreBand === "mixed" || !scoreBand) return "wary";
  return scoreBand === "excellent" ? "satisfied" : "serene";
}

function leastRecentlyUsed(
  variants: readonly CompleteBoscoReply[],
  history: BoscoDialogueHistoryEntry[],
  seed: string,
): CompleteBoscoReply {
  const recent = history.slice(-BOSCO_DIALOGUE_HISTORY_LIMIT);
  const lastUsed = new Map<string, number>();
  recent.forEach((entry, index) => lastUsed.set(entry.id, index));

  const unseen = variants.filter((variant) => !lastUsed.has(variant.id));
  if (unseen.length) {
    return unseen[hashText(seed) % unseen.length];
  }

  const oldestIndex = Math.min(
    ...variants.map((variant) => lastUsed.get(variant.id) ?? -1),
  );
  const oldest = variants.filter(
    (variant) => (lastUsed.get(variant.id) ?? -1) === oldestIndex,
  );
  return oldest[hashText(`${seed}:oldest`) % oldest.length];
}

function fallbackDialogue(
  context: BoscoDialogueContext,
  scoreBand: ScoreBand | null,
  safetyPriority: boolean,
  weatherFamily: WeatherFamily | null,
  windBand: WindBand | null,
  recentHistory: BoscoDialogueHistoryEntry[],
): BoscoDialogue {
  const fallbackKey =
    safetyPriority
      ? "safety"
      : scoreBand ?? "invalid";
  const fallback = FALLBACK_REPLIES[fallbackKey];
  const mood = moodFor(scoreBand, safetyPriority);
  const weather = weatherFamily ?? "invalid";
  const wind = windBand ?? "invalid";
  return {
    id: fallback.id,
    analysisKey: context.consultationId,
    message: fallback.text,
    combinationKey: `fallback:${weather}:${wind}:${scoreBand ?? "invalid"}`,
    weatherFamily: weather,
    windBand: wind,
    scoreBand: scoreBand ?? "invalid",
    selectedScoreBand: "fallback",
    safetyPriority,
    debug: {
      dialogueId: fallback.id,
      family: "fallback",
      templateId: "safe-fallback",
      fragments: [fallback.id],
      selectionReasons: [
        "repli local complet",
        "aucune météo différente n’est inventée",
        safetyPriority
          ? "priorité de sécurité conservée"
          : "niveau de prudence conservé",
      ],
      constraints: {
        decision: context.result.decision,
        weather,
        wind,
        sea: "not-used",
        tide: "not-used",
        time: context.timeOfDay,
        mood,
        register: "bosco-complete",
        prudence: safetyPriority ? "safety" : scoreBand ?? "safety",
      },
      length: fallback.text.length,
      wordCount: wordCount(fallback.text),
      sentenceCount: sentenceCount(fallback.text),
      factsUsed: [],
      history: {
        completeDialoguesAvoided: recentHistory.length,
        openingsAvoided: 0,
        seaAvoided: 0,
        windAvoided: 0,
        tideAvoided: 0,
        conclusionsAvoided: 0,
        haddockReferencesAvoided: 0,
      },
    },
  };
}

export function dialogueAnalysisFingerprint(
  result: BoscoResult,
  input: BoscoWeatherInput,
  _timeOfDay: TimeOfDay,
): string {
  void _timeOfDay;
  return [
    "v23-complete",
    result.decision,
    finite(result.score) ? result.score : "invalid",
    input.data.status,
    input.data.targetAt || input.data.observedAt || "undated",
    resolveDialogueWeatherFamily(input) ?? "invalid",
    finite(input.wind.meanKt) ? input.wind.meanKt : "invalid",
    finite(input.wind.gustKt) ? input.wind.gustKt : "invalid",
    finite(input.weather.thunderstormRisk)
      ? input.weather.thunderstormRisk
      : "invalid",
  ].join("|");
}

export function buildBoscoDialogue(
  context: BoscoDialogueContext,
  history: BoscoDialogueHistoryEntry[] = [],
  seed: string,
): BoscoDialogue {
  const relevantHistory = history
    .filter((entry) => entry.analysisKey !== context.consultationId)
    .slice(-BOSCO_DIALOGUE_HISTORY_LIMIT);
  const weatherFamily = resolveDialogueWeatherFamily(context.input);
  const windBand = classifyDialogueWind(
    context.input.wind.meanKt,
    context.input.wind.gustKt,
  );
  const scoreBand = classifyDialogueScore(context.result.score);
  const safetyPriority = hasDialogueSafetyPriority(
    context.result,
    context.input,
    weatherFamily,
    windBand,
  );

  if (
    !weatherFamily ||
    !windBand ||
    !scoreBand ||
    context.input.data.status === "invalid" ||
    context.input.data.status === "unavailable"
  ) {
    return fallbackDialogue(
      context,
      scoreBand,
      safetyPriority,
      weatherFamily,
      windBand,
      relevantHistory,
    );
  }

  const selectedScoreBand =
    safetyPriority &&
    weatherFamily !== "storm" &&
    windBand !== "dangerous" &&
    scoreBand !== "critical" &&
    scoreBand !== "poor"
      ? "critical"
      : scoreBand;
  const key = boscoReplyKey(weatherFamily, windBand, selectedScoreBand);
  const variants = COMPLETE_BOSCO_REPLIES_BY_KEY.get(key);

  if (!variants?.length) {
    if (process.env.NODE_ENV !== "production") {
      console.error(`[Bosco dialogue] combinaison absente : ${key}`);
    }
    return fallbackDialogue(
      context,
      scoreBand,
      safetyPriority,
      weatherFamily,
      windBand,
      relevantHistory,
    );
  }

  const selected = leastRecentlyUsed(
    variants,
    relevantHistory,
    `${context.consultationId}:${seed}:${key}`,
  );
  const mood = moodFor(scoreBand, safetyPriority);
  return {
    id: selected.id,
    analysisKey: context.consultationId,
    message: selected.text,
    combinationKey: key,
    weatherFamily,
    windBand,
    scoreBand,
    selectedScoreBand,
    safetyPriority,
    debug: {
      dialogueId: selected.id,
      family: scoreBand,
      templateId: "complete-dialogue",
      fragments: [selected.id],
      selectionReasons: [
        `météo visible ${weatherFamily}`,
        `vent classé ${windBand}`,
        `note classée ${scoreBand}`,
        safetyPriority
          ? "priorité de sécurité appliquée"
          : "aucune priorité de sécurité",
        "réplique complète retournée sans recomposition",
      ],
      constraints: {
        decision: context.result.decision,
        weather: weatherFamily,
        wind: windBand,
        sea: "not-used",
        tide: "not-used",
        time: context.timeOfDay,
        mood,
        register: "bosco-complete",
        prudence: safetyPriority ? "safety" : scoreBand,
      },
      length: selected.text.length,
      wordCount: wordCount(selected.text),
      sentenceCount: sentenceCount(selected.text),
      factsUsed: [weatherFamily, windBand, scoreBand],
      history: {
        completeDialoguesAvoided: relevantHistory.length,
        openingsAvoided: 0,
        seaAvoided: 0,
        windAvoided: 0,
        tideAvoided: 0,
        conclusionsAvoided: 0,
        haddockReferencesAvoided: 0,
      },
    },
  };
}

export function toDialogueHistoryEntry(
  dialogue: BoscoDialogue,
  createdAt: string,
): BoscoDialogueHistoryEntry {
  return {
    id: dialogue.id,
    message: dialogue.message,
    analysisKey: dialogue.analysisKey,
    combinationKey: dialogue.combinationKey,
    createdAt,
  };
}

export function parseDialogueHistory(
  value: string | null,
): BoscoDialogueHistoryEntry[] {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (entry): entry is BoscoDialogueHistoryEntry =>
          Boolean(
            entry &&
              typeof entry === "object" &&
              typeof entry.id === "string" &&
              typeof entry.message === "string",
          ),
      )
      .map((entry) => ({
        id: entry.id,
        message: entry.message,
        analysisKey:
          typeof entry.analysisKey === "string"
            ? entry.analysisKey
            : undefined,
        combinationKey:
          typeof entry.combinationKey === "string"
            ? entry.combinationKey
            : undefined,
        createdAt:
          typeof entry.createdAt === "string" ? entry.createdAt : "",
      }))
      .slice(-BOSCO_DIALOGUE_HISTORY_LIMIT);
  } catch {
    return [];
  }
}

export const boscoDialogueMeta = {
  replies: COMPLETE_BOSCO_REPLY_COUNT,
  combinations: COMPLETE_BOSCO_COMBINATION_COUNT,
  variantsPerCombination: COMPLETE_BOSCO_VARIANTS_PER_COMBINATION,
  weatherFamilies: WEATHER_FAMILIES.length,
  windBands: WIND_BANDS.length,
  scoreBands: SCORE_BANDS.length,
  runtimeFragments: 0,
  fragments: 0,
  compatible: COMPLETE_BOSCO_REPLY_COUNT,
  offline: true,
  source: COMPLETE_BOSCO_REPLIES,
};
