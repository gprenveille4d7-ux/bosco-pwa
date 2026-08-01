export type Cardinal = { short: string; long: string };
export type TideSample = { time: string; heightM: number };
export type TideEvent = TideSample & { type: "low" | "high" };
export function finiteOrNull(value: unknown): number | null;
export function metresPerSecondToKnots(value: unknown): number | null;
export function normalizeDegrees(value: unknown): number | null;
export function degreesToCardinal(value: unknown): Cardinal | null;
export function weatherDescription(code: unknown): string;
export function classifySeaState(value: unknown): string | null;
export function formatValue(value: unknown, digits?: number): string | null;
export function sortSamples(samples: TideSample[]): TideSample[];
export function interpolateHeight(samples: TideSample[], targetTime: string): number | null;
export function deriveTideEvents(samples: TideSample[]): TideEvent[];
export function tideTrendAt(
  samples: TideSample[],
  targetTime: string,
): "rising" | "falling" | "slack" | null;
export function nextTideEvent(events: TideEvent[], targetTime: string): TideEvent | null;
export function minutesUntil(time: string, targetTime: string): number | null;
