export type BoscoIntroState =
  | "greeting"
  | "thinking"
  | "verdict"
  | "completed";

export const BOSCO_INTRO_GREETING_MS = 2_500;
export const BOSCO_INTRO_THINKING_MS = 4_500;
export const BOSCO_INTRO_VERDICT_SETTLE_MS = 1_000;
export const BOSCO_INTRO_SESSION_KEY = "bosco:intro:v21";

export const BOSCO_INTRO_ORDER: BoscoIntroState[] = [
  "greeting",
  "thinking",
  "verdict",
  "completed",
];

export function boscoGreeting(firstName: string | null | undefined): string {
  const cleaned = firstName?.trim();
  return cleaned ? `Salut, ${cleaned}.` : "Salut.";
}

export function boscoIntroStateAt(elapsedMs: number): BoscoIntroState {
  if (elapsedMs < BOSCO_INTRO_GREETING_MS) return "greeting";
  if (elapsedMs < BOSCO_INTRO_GREETING_MS + BOSCO_INTRO_THINKING_MS) {
    return "thinking";
  }
  if (
    elapsedMs <
    BOSCO_INTRO_GREETING_MS +
      BOSCO_INTRO_THINKING_MS +
      BOSCO_INTRO_VERDICT_SETTLE_MS
  ) {
    return "verdict";
  }
  return "completed";
}

export function canAdvanceBoscoIntro(
  current: BoscoIntroState,
  next: BoscoIntroState,
): boolean {
  return BOSCO_INTRO_ORDER.indexOf(next) >= BOSCO_INTRO_ORDER.indexOf(current);
}
