import brain from "@/data/bosco/bosco-brain.json";
import rules from "@/data/bosco/bosco-rules.json";
import { COMPLETE_BOSCO_REPLY_COUNT } from "@/data/bosco/bosco-dialogue-library";
import emotions from "@/data/bosco/bosco-emotions.json";
import scoreConfig from "@/data/bosco/bosco-navigation-score.json";
import assets from "@/data/bosco/bosco-assets-map.json";

export type BoscoDecision =
  | "decision-ideal"
  | "decision-pleasant"
  | "decision-low-sport"
  | "decision-cautious"
  | "decision-discouraged"
  | "decision-unavailable";

export type BoscoPose =
  | "resting"
  | "listening"
  | "thinking"
  | "sea"
  | "barometer"
  | "chart"
  | "preparing"
  | "speaking"
  | "satisfied"
  | "worried"
  | "annoyed"
  | "protective";

export type UserLevel = "debutant" | "intermediaire" | "confirme" | "expert";

export interface BoscoProfile {
  firstName: string;
  craftType: string;
  level: UserLevel;
  favoriteSpot: string;
  units: "marine" | "metric";
  consentToLocalMemory: boolean;
}

export interface BoscoWeatherInput {
  wind: {
    meanKt: number;
    gustKt: number;
    directionDeg: number;
  };
  weather: {
    code:
      | "clear"
      | "mainly-clear"
      | "partly-cloudy"
      | "overcast"
      | "fog"
      | "drizzle"
      | "rain"
      | "heavy-rain"
      | "snow"
      | "storm";
    wmoCode?: number | null;
    temperatureC: number;
    precipitationMmH: number;
    visibilityM: number;
    pressureHPa: number;
    pressureTrendHPa3h: number;
    thunderstormRisk: number;
  };
  sea: {
    waveHeightM: number;
    waveDirectionDeg: number;
    wavePeriodS: number;
    swellHeightM: number;
    swellDirectionDeg: number;
  };
  tide: {
    heightM: number;
    trend: "rising" | "falling" | "slack";
    highWaterAt: string;
    lowWaterAt: string;
  };
  trend: {
    windKt3h: number;
  };
  spot: {
    name: string;
    shorelineDeg: number;
  };
  connection: {
    online: boolean;
  };
  data: {
    observedAt: string;
    targetAt?: string;
    cached: boolean;
    status: "complete" | "partial" | "invalid" | "unavailable";
  };
}

export interface BoscoResult {
  decision: BoscoDecision;
  label: string;
  score: number;
  confidence: number;
  emotion: string;
  pose: BoscoPose;
  image: string;
  effect: string;
  dialogueCategory: string;
  dialogue: string;
  summary: string;
  reasons: string[];
  scenarioTags: string[];
  observedAt: string;
}

type UnknownRecord = Record<string, unknown>;
type Condition = { field: string; op: string; value?: unknown };
type Rule = {
  id: string;
  priority: number;
  when: { all: Condition[]; any: Condition[]; none: Condition[] };
  output: UnknownRecord;
  explanation: string;
};

const decisionLabels: Record<BoscoDecision, string> = {
  "decision-ideal": "Sortie idéale",
  "decision-pleasant": "Sortie favorable",
  "decision-low-sport": "Favorable · peu sportive",
  "decision-cautious": "Sortie prudente",
  "decision-discouraged": "Sortie déconseillée",
  "decision-unavailable": "Impossible de conclure"
};

const clamp = (value: number, min = 0, max = 10) =>
  Math.min(max, Math.max(min, value));

const round = (value: number, precision = 1) => {
  const factor = 10 ** precision;
  return Math.round(value * factor) / factor;
};

function getPath(source: UnknownRecord, path: string): unknown {
  return path.split(".").reduce<unknown>((current, key) => {
    if (!current || typeof current !== "object") return undefined;
    return (current as UnknownRecord)[key];
  }, source);
}

function matchesCondition(context: UnknownRecord, condition: Condition): boolean {
  const actual = getPath(context, condition.field);
  const expected = condition.value;
  switch (condition.op) {
    case "eq":
      return actual === expected;
    case "neq":
      return actual !== expected;
    case "gt":
      return Number(actual) > Number(expected);
    case "gte":
      return Number(actual) >= Number(expected);
    case "lt":
      return Number(actual) < Number(expected);
    case "lte":
      return Number(actual) <= Number(expected);
    case "in":
      return Array.isArray(expected) && expected.includes(actual);
    case "notIn":
      return Array.isArray(expected) && !expected.includes(actual);
    case "exists":
      return actual !== undefined && actual !== null;
    case "missing":
      return actual === undefined || actual === null;
    default:
      return false;
  }
}

function matchesRule(context: UnknownRecord, candidate: Rule): boolean {
  const { all = [], any = [], none = [] } = candidate.when;
  const allMatch = all.every((condition) => matchesCondition(context, condition));
  const anyMatch = any.length === 0 || any.some((condition) => matchesCondition(context, condition));
  const noneMatch = none.every((condition) => !matchesCondition(context, condition));
  return allMatch && anyMatch && noneMatch;
}

function smallestAngle(a: number, b: number): number {
  const difference = Math.abs(((a - b + 540) % 360) - 180);
  return round(difference, 0);
}

function windRelation(windDirectionDeg: number, shorelineDeg: number) {
  const relative = smallestAngle(windDirectionDeg, shorelineDeg);
  if (relative <= 45) return "onshore";
  if (relative >= 135) return "offshore";
  return "cross-shore";
}

function dataAgeMinutes(observedAt: string): number {
  const timestamp = Date.parse(observedAt);
  if (!Number.isFinite(timestamp)) return 9999;
  return Math.max(0, (Date.now() - timestamp) / 60000);
}

function dataConfidence(input: BoscoWeatherInput, ageMinutes: number): number {
  if (input.data.status === "unavailable" || input.data.status === "invalid") return 0;
  let confidence = input.data.status === "partial" ? brain.confidence.partial : brain.confidence.complete;
  if (ageMinutes > 360) confidence = 0;
  else if (ageMinutes > 90) confidence = Math.min(confidence, brain.confidence.stale);
  if (!input.connection.online) {
    confidence = input.data.cached ? Math.min(confidence, brain.confidence.offlineCached) : 0;
  }
  return round(confidence, 2);
}

function dimensionScores(input: BoscoWeatherInput, gustFactor: number, crossAngle: number) {
  const safetyWind =
    input.wind.meanKt >= 25 || input.wind.gustKt >= 32
      ? 1
      : input.wind.meanKt >= 22 || input.wind.gustKt >= 28
        ? 4
        : input.wind.meanKt >= 18 || input.wind.gustKt >= 24
          ? 7
          : 10;
  const safetySea =
    input.sea.waveHeightM >= 2 || input.sea.swellHeightM >= 1.8
      ? 1
      : input.sea.waveHeightM >= 1.2 || input.sea.swellHeightM >= 1.1
        ? 5
        : input.sea.waveHeightM >= 0.8
          ? 7
          : 10;
  const safetyVisibility =
    input.weather.visibilityM < 800
      ? 1
      : input.weather.visibilityM < 3000
        ? 5
        : input.weather.visibilityM < 8000
          ? 8
          : 10;
  const stormPenalty =
    input.weather.code === "storm" || input.weather.thunderstormRisk >= 0.35 ? 0 : 10;
  const safety = Math.min(safetyWind, safetySea, safetyVisibility, stormPenalty);
  const sportingInterest = clamp(10 - Math.abs(input.wind.meanKt - 13) * 1.15);
  const thermalComfort = clamp(10 - Math.abs(input.weather.temperatureC - 19) * 0.55);
  const rainComfort = clamp(10 - input.weather.precipitationMmH * 1.4);
  const seaComfort = clamp(10 - input.sea.waveHeightM * 3.8);
  const comfort = (thermalComfort + rainComfort + seaComfort) / 3;
  const windStability = clamp(10 - Math.max(0, gustFactor - 1.15) * 12);
  const seaRegularity = clamp(10 - input.sea.waveHeightM * 2.7 - Math.max(0, crossAngle - 35) * 0.055);
  const weather = clamp(
    10 -
      input.weather.precipitationMmH * 1.1 -
      (input.weather.visibilityM < 8000 ? 2 : 0) -
      (input.weather.pressureTrendHPa3h <= -3 ? 1.5 : 0)
  );
  const tide =
    input.tide.trend === "rising" ? 8.2 : input.tide.trend === "slack" ? 7.2 : 6.4;
  return {
    safety,
    sportingInterest,
    comfort,
    windStability,
    seaRegularity,
    weather,
    tide
  };
}

function computeBaseScore(scores: Record<string, number>): number {
  const dimensions = scoreConfig.dimensions as Record<string, { weight: number }>;
  return Object.entries(dimensions).reduce(
    (total, [key, config]) => total + (scores[key] ?? 0) * config.weight,
    0
  );
}

function scoreDecision(score: number, meanWindKt: number): BoscoDecision {
  if (score <= 0) return "decision-unavailable";
  if (score < 4) return "decision-discouraged";
  if (score < 6) return "decision-cautious";
  if (meanWindKt < 7 && score <= 7.2) return "decision-low-sport";
  if (score < 8) return "decision-pleasant";
  return "decision-ideal";
}

function reasonSummary(decision: BoscoDecision, input: BoscoWeatherInput): string {
  if (decision === "decision-unavailable") return "données insuffisantes pour un avis fiable.";
  if (decision === "decision-discouraged") return "la sécurité ne conserve pas une marge suffisante.";
  if (decision === "decision-cautious") return "créneau envisageable, mais plusieurs facteurs imposent de la prudence.";
  if (decision === "decision-low-sport") return "conditions sûres, mais vent trop faible pour une navigation sportive.";
  if (decision === "decision-ideal") return "vent régulier, mer propre et excellente visibilité.";
  if (input.tide.trend === "falling") return "conditions favorables avec un retour à anticiper sur la marée descendante.";
  return "conditions globalement sûres et agréables.";
}

export function evaluateBosco(
  input: BoscoWeatherInput,
  profile: BoscoProfile,
  _recentDialogues: string[] = []
): BoscoResult {
  void _recentDialogues;
  const ageMinutes = dataAgeMinutes(input.data.observedAt);
  const confidence = dataConfidence(input, ageMinutes);
  const gustFactor = round(input.wind.gustKt / Math.max(input.wind.meanKt, 1), 2);
  const crossSeaAngleDeg = smallestAngle(
    input.sea.waveDirectionDeg,
    input.sea.swellDirectionDeg
  );
  const context = {
    ...input,
    user: profile,
    data: { ...input.data, ageMinutes },
    derived: {
      gustFactor,
      crossSeaAngleDeg,
      windRelation: windRelation(input.wind.directionDeg, input.spot.shorelineDeg)
    }
  } as unknown as UnknownRecord;

  const safetyRules = [...(rules.safetyGates as Rule[])].sort((a, b) => b.priority - a.priority);
  const decisionRules = [...(rules.decisionRules as Rule[])].sort((a, b) => b.priority - a.priority);
  const advisoryRules = [...(rules.advisoryRules as Rule[])].sort((a, b) => b.priority - a.priority);
  const safetyMatch = safetyRules.find((candidate) => matchesRule(context, candidate));
  const decisionMatch = decisionRules.find((candidate) => matchesRule(context, candidate));
  const advisories = advisoryRules.filter((candidate) => matchesRule(context, candidate));
  const primaryRule = safetyMatch ?? decisionMatch;

  const scores = dimensionScores(input, gustFactor, crossSeaAngleDeg);
  let score = computeBaseScore(scores);
  let scoreCap = 10;
  let scoreFloor = 0;
  let forcedDecision: BoscoDecision | undefined;
  let emotion = "concentre";
  let category = "prudence";

  const applyOutput = (output: UnknownRecord) => {
    if (typeof output.scoreDelta === "number") score += output.scoreDelta;
    if (typeof output.scoreCap === "number") scoreCap = Math.min(scoreCap, output.scoreCap);
    if (typeof output.scoreFloor === "number") scoreFloor = Math.max(scoreFloor, output.scoreFloor);
    if (typeof output.confidenceCap === "number" && output.confidenceCap === 0) scoreCap = 0;
    if (typeof output.decision === "string") forcedDecision = output.decision as BoscoDecision;
    if (typeof output.emotion === "string") emotion = output.emotion;
    if (typeof output.dialogue === "string") category = output.dialogue;
  };

  if (primaryRule) applyOutput(primaryRule.output);
  for (const advisory of advisories) applyOutput(advisory.output);
  score *= confidence;
  score = round(clamp(score, scoreFloor, scoreCap), 1);

  let decision = forcedDecision ?? scoreDecision(score, input.wind.meanKt);
  if (!safetyMatch) {
    const bandDecision = scoreDecision(score, input.wind.meanKt);
    const severity: BoscoDecision[] = [
      "decision-unavailable",
      "decision-discouraged",
      "decision-cautious",
      "decision-low-sport",
      "decision-pleasant",
      "decision-ideal"
    ];
    decision =
      severity.indexOf(bandDecision) < severity.indexOf(decision) ? bandDecision : decision;
  }
  if (confidence === 0) decision = "decision-unavailable";

  const asset = assets.decisions[decision] as {
    image: string;
    pose: BoscoPose;
    effect: string;
    emotion: string;
  };
  if (!primaryRule?.output.emotion) emotion = asset.emotion;
  if (!primaryRule?.output.dialogue) {
    category =
      decision === "decision-ideal"
        ? "navigation-ideale"
        : decision === "decision-pleasant"
          ? "navigation-agreable"
          : decision === "decision-low-sport"
            ? "vent-faible"
            : decision === "decision-discouraged"
              ? "sortie-deconseillee"
              : decision === "decision-unavailable"
                ? "aucune-donnee"
                : "prudence";
  }

  const scoredReasons = Object.entries(scores).sort((a, b) => a[1] - b[1]);
  const reasons = [
    ...(primaryRule ? [primaryRule.explanation] : []),
    ...advisories.map((advisory) => advisory.explanation),
    `Sécurité ${round(scores.safety, 1)}/10 ; intérêt sportif ${round(scores.sportingInterest, 1)}/10.`,
    `Confiance des données : ${Math.round(confidence * 100)} %.`,
    `Facteur de rafale : ${gustFactor.toFixed(2)} ; angle vagues/houle : ${crossSeaAngleDeg}°.`
  ];
  const weakest = scoredReasons[0];
  if (weakest && scores.safety > 3) {
    reasons.push(`Dimension la plus faible : ${weakest[0]} (${round(weakest[1], 1)}/10).`);
  }

  const summary = `${score.toFixed(1)}/10 — ${reasonSummary(decision, input)}`;
  return {
    decision,
    label: decisionLabels[decision],
    score,
    confidence,
    emotion,
    pose: asset.pose,
    image: asset.image,
    effect: asset.effect,
    dialogueCategory: category,
    dialogue: "",
    summary,
    reasons,
    scenarioTags: [
      primaryRule?.id ?? "fallback",
      ...advisories.map((advisory) => advisory.id),
      `wind:${input.wind.meanKt < 7 ? "light" : input.wind.meanKt < 18 ? "useful" : "fresh"}`,
      `sea:${input.sea.waveHeightM < 0.3 ? "flat" : input.sea.waveHeightM < 1.2 ? "moderate" : "rough"}`
    ],
    observedAt: input.data.observedAt
  };
}

export const boscoEngineMeta = {
  version: brain.schemaVersion,
  phraseCount: COMPLETE_BOSCO_REPLY_COUNT,
  scenarioCombinations: brain.scenarioSpace.theoreticalCombinations,
  emotions: Object.keys(emotions.emotions),
  decisions: decisionLabels
};
