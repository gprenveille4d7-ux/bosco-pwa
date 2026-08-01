export type BoscoReturnObservationState = {
  version: 1;
  localDate: string;
  returnCount: number;
  observationsToday: number;
  lastObservedAt: number | null;
  lastReturnObserved: boolean;
};

export type BoscoReturnObservationDecision = {
  shouldObserve: boolean;
  reason:
    | "selected"
    | "reduced-motion"
    | "animation-unavailable"
    | "consecutive-block"
    | "cooldown"
    | "daily-limit"
    | "not-selected";
  nextState: BoscoReturnObservationState;
};

export const BOSCO_RETURN_OBSERVATION_KEY = "bosco:return-observation:v1";
export const BOSCO_RETURN_OBSERVATION_COOLDOWN_MS = 30 * 60_000;
export const BOSCO_RETURN_OBSERVATION_DAILY_LIMIT = 3;

function hashText(text: string): number {
  let hash = 2166136261;
  for (const character of text) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function localDateKey(now: Date): string {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function emptyBoscoReturnObservationState(
  now = new Date(),
): BoscoReturnObservationState {
  return {
    version: 1,
    localDate: localDateKey(now),
    returnCount: 0,
    observationsToday: 0,
    lastObservedAt: null,
    lastReturnObserved: false,
  };
}

export function parseBoscoReturnObservationState(
  value: string | null,
  now = new Date(),
): BoscoReturnObservationState {
  const fallback = emptyBoscoReturnObservationState(now);
  if (!value) return fallback;
  try {
    const parsed = JSON.parse(value) as Partial<BoscoReturnObservationState>;
    if (
      parsed.version !== 1 ||
      typeof parsed.localDate !== "string" ||
      !Number.isInteger(parsed.returnCount) ||
      !Number.isInteger(parsed.observationsToday)
    ) {
      return fallback;
    }
    if (parsed.localDate !== fallback.localDate) {
      return fallback;
    }
    return {
      version: 1,
      localDate: parsed.localDate,
      returnCount: Math.max(0, parsed.returnCount ?? 0),
      observationsToday: Math.max(0, parsed.observationsToday ?? 0),
      lastObservedAt:
        typeof parsed.lastObservedAt === "number" && Number.isFinite(parsed.lastObservedAt)
          ? parsed.lastObservedAt
          : null,
      lastReturnObserved: parsed.lastReturnObserved === true,
    };
  } catch {
    return fallback;
  }
}

export function decideBoscoReturnObservation(
  previous: BoscoReturnObservationState,
  now: Date,
  stableSeed: string,
  options: {
    reducedMotion: boolean;
    animationAvailable: boolean;
  },
): BoscoReturnObservationDecision {
  const currentDate = localDateKey(now);
  const state =
    previous.localDate === currentDate
      ? previous
      : {
          ...emptyBoscoReturnObservationState(now),
          lastObservedAt: previous.lastObservedAt,
          lastReturnObserved: previous.lastReturnObserved,
        };
  const nextCount = state.returnCount + 1;
  const base: BoscoReturnObservationState = {
    ...state,
    returnCount: nextCount,
    lastReturnObserved: false,
  };

  if (options.reducedMotion) {
    return { shouldObserve: false, reason: "reduced-motion", nextState: base };
  }
  if (!options.animationAvailable) {
    return { shouldObserve: false, reason: "animation-unavailable", nextState: base };
  }
  if (state.lastReturnObserved) {
    return { shouldObserve: false, reason: "consecutive-block", nextState: base };
  }
  if (
    state.lastObservedAt !== null &&
    now.getTime() - state.lastObservedAt < BOSCO_RETURN_OBSERVATION_COOLDOWN_MS
  ) {
    return { shouldObserve: false, reason: "cooldown", nextState: base };
  }
  if (state.observationsToday >= BOSCO_RETURN_OBSERVATION_DAILY_LIMIT) {
    return { shouldObserve: false, reason: "daily-limit", nextState: base };
  }

  const selected = hashText(`${stableSeed}:${currentDate}:${nextCount}`) % 5 === 0;
  if (!selected) {
    return { shouldObserve: false, reason: "not-selected", nextState: base };
  }
  return {
    shouldObserve: true,
    reason: "selected",
    nextState: {
      ...base,
      observationsToday: state.observationsToday + 1,
      lastObservedAt: now.getTime(),
      lastReturnObserved: true,
    },
  };
}
