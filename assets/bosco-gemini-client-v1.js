const ENDPOINT = "https://bosco-vivant.able-hake-4182.chatgpt.site/api/bosco-dialogue";
const TIMEOUT_MS = 5500;
const MAX_RESPONSE_CHARS = 850;
const cache = new Map();
const inFlight = new Map();
const numberKey = (value) => Number.isFinite(value) ? String(Math.round(value * 100) / 100) : "invalid";
const normalized = (value) => (value || "").trim().toLocaleLowerCase("fr-FR");

export function boscoGenerativeFingerprint(result, input, profile, timeOfDay) {
  return [
    "gemini-v1", result.decision, numberKey(result.score), numberKey(result.confidence), input.data.status,
    input.data.targetAt || input.data.observedAt, normalized(input.spot.name), normalized(profile.firstName),
    normalized(profile.craftType), profile.level, timeOfDay, numberKey(input.wind.meanKt),
    numberKey(input.wind.gustKt), numberKey(input.wind.directionDeg), input.weather.code,
    numberKey(input.weather.visibilityM), numberKey(input.weather.precipitationMmH),
    numberKey(input.weather.thunderstormRisk), numberKey(input.sea.waveHeightM),
    numberKey(input.sea.wavePeriodS), numberKey(input.sea.swellHeightM), numberKey(input.tide.heightM),
    input.tide.trend, input.tide.highWaterAt, input.tide.lowWaterAt, numberKey(input.trend.windKt3h),
  ].join("|");
}

export function buildBoscoGenerativeContext(result, input, profile, timeOfDay, safetyPriority) {
  return {
    version: 1,
    fingerprint: boscoGenerativeFingerprint(result, input, profile, timeOfDay),
    verdict: {
      decision: result.decision, label: result.label, score: result.score, confidence: result.confidence,
      summary: result.summary, reasons: result.reasons.slice(0, 8), safetyPriority,
    },
    user: {
      ...(profile.firstName.trim() ? { firstName: profile.firstName.trim().slice(0, 40) } : {}),
      craftType: profile.craftType.slice(0, 80), level: profile.level,
    },
    conditions: {
      spot: input.spot.name.slice(0, 100), observedAt: input.data.observedAt,
      ...(input.data.targetAt ? { targetAt: input.data.targetAt } : {}),
      dataStatus: input.data.status, timeOfDay, wind: { ...input.wind }, weather: { ...input.weather },
      sea: { ...input.sea }, tide: { ...input.tide }, windTrendKt3h: input.trend.windKt3h,
    },
  };
}

const refusal = /\b(aucun départ|reste à terre|restes? à terre|ne pars pas|n'y va pas|sortie déconseillée|impossible de conclure|attends? des relevés|pas de sortie)\b/i;
const permission = /\b(tu peux (?:sortir|y aller|partir|prendre la mer)|sors? les voiles|file préparer ton bateau|départ autorisé)\b/i;
const caution = /\b(pruden|surveill|reste près|au premier doute|rentre|rafales?|danger|vigilance)\w*/i;
const missingData = /\b(instruments?|relevés?|données?|mesures?|suppositions?|impossible de conclure|attends?)\b/i;

export function isBoscoGeneratedParagraphValid(text, context) {
  if (typeof text !== "string") return false;
  const value = text.trim();
  const sentences = value.match(/[.!?…]+(?=\s|$|[»\"”'])/g)?.length || 0;
  if (value.length < 80 || value.length > MAX_RESPONSE_CHARS || sentences < 3 || sentences > 5 ||
      /<[^>]+>|```|^\s*[-*#]\s/m.test(value) ||
      /\b(json|api|algorithme|modèle de langage|prompt système|score calculé)\b/i.test(value)) return false;
  const decision = context.verdict.decision;
  if (decision === "decision-unavailable") return missingData.test(value) && refusal.test(value) && !permission.test(value);
  if (decision === "decision-discouraged" || context.verdict.safetyPriority) return refusal.test(value) && !permission.test(value);
  if (decision === "decision-cautious") return caution.test(value) && !refusal.test(value);
  return !refusal.test(value);
}

export async function requestBoscoGeneratedDialogue(result, input, profile, timeOfDay, safetyPriority, timeoutMs = TIMEOUT_MS) {
  if (!input.connection.online || input.data.status !== "complete" || navigator.onLine === false) return null;
  const context = buildBoscoGenerativeContext(result, input, profile, timeOfDay, safetyPriority);
  const cached = cache.get(context.fingerprint);
  if (cached) return cached;
  const pending = inFlight.get(context.fingerprint);
  if (pending) return pending;
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), timeoutMs);
  const request = (async () => {
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(context),
        signal: controller.signal, cache: "no-store",
      });
      if (!response.ok) return null;
      const payload = await response.json();
      if (!isBoscoGeneratedParagraphValid(payload.text, context)) return null;
      const text = payload.text.trim();
      cache.set(context.fingerprint, text);
      return text;
    } catch { return null; }
    finally { window.clearTimeout(timeout); inFlight.delete(context.fingerprint); }
  })();
  inFlight.set(context.fingerprint, request);
  return request;
}
