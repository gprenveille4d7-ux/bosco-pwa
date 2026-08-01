import type { BoscoDecision, BoscoPose } from "@/lib/bosco-engine";

export const WEATHER_FAMILIES = [
  "clear",
  "mainly-clear",
  "partly-cloudy",
  "overcast",
  "fog",
  "drizzle",
  "rain",
  "heavy-rain",
  "snow",
  "storm"
] as const;

export const TIME_OF_DAY = ["morning", "day", "evening", "night"] as const;

export type WeatherFamily = (typeof WEATHER_FAMILIES)[number];
export type TimeOfDay = (typeof TIME_OF_DAY)[number];

const WMO_TO_FAMILY: Record<number, WeatherFamily> = {
  0: "clear",
  1: "mainly-clear",
  2: "partly-cloudy",
  3: "overcast",
  45: "fog",
  48: "fog",
  51: "drizzle",
  53: "drizzle",
  56: "drizzle",
  55: "rain",
  57: "rain",
  61: "rain",
  63: "rain",
  66: "rain",
  80: "rain",
  81: "rain",
  65: "heavy-rain",
  67: "heavy-rain",
  82: "heavy-rain",
  71: "snow",
  73: "snow",
  75: "snow",
  77: "snow",
  85: "snow",
  86: "snow",
  95: "storm",
  96: "storm",
  99: "storm"
};

export const WEATHER_REPRESENTATIVE_WMO: Record<WeatherFamily, number> = {
  clear: 0,
  "mainly-clear": 1,
  "partly-cloudy": 2,
  overcast: 3,
  fog: 45,
  drizzle: 51,
  rain: 61,
  "heavy-rain": 65,
  snow: 71,
  storm: 95
};

export function classifyWmoWeather(
  wmoCode: number | null | undefined,
  precipitationMmH = 0
): WeatherFamily | null {
  if (typeof wmoCode === "number" && Number.isFinite(wmoCode)) {
    const coded = WMO_TO_FAMILY[wmoCode] ?? null;
    if (!coded) return null;
    if (coded === "drizzle" || coded === "rain" || coded === "heavy-rain") {
      const measured =
        precipitationMmH >= 5
          ? "heavy-rain"
          : precipitationMmH >= 1
            ? "rain"
            : precipitationMmH > 0
              ? "drizzle"
              : coded;
      const precipitationRank: Record<WeatherFamily, number> = {
        clear: 0,
        "mainly-clear": 0,
        "partly-cloudy": 0,
        overcast: 0,
        fog: 0,
        drizzle: 1,
        rain: 2,
        "heavy-rain": 3,
        snow: 4,
        storm: 5
      };
      return precipitationRank[measured] > precipitationRank[coded] ? measured : coded;
    }
    return coded;
  }
  if (precipitationMmH >= 5) return "heavy-rain";
  if (precipitationMmH >= 1) return "rain";
  if (precipitationMmH > 0) return "drizzle";
  return null;
}

export function localTimeOfDay(date = new Date()): TimeOfDay {
  if (!Number.isFinite(date.getTime())) date = new Date();
  const hour = date.getHours();
  if (hour < 7 || hour >= 22) return "night";
  if (hour < 11) return "morning";
  if (hour < 18) return "day";
  return "evening";
}

export function decorAsset(time: TimeOfDay, weather: WeatherFamily): string {
  return `/assets/bosco/decors/${time}/${weather}.webp`;
}

const DECISION_POSES: Record<BoscoDecision, string> = {
  "decision-ideal": "/assets/bosco/compositing/poses/satisfied-step9-v4.png",
  "decision-pleasant": "/assets/bosco/compositing/poses/resting-step9-v4.png",
  "decision-low-sport": "/assets/bosco/compositing/poses/speaking-step9-v4.png",
  "decision-cautious": "/assets/bosco/compositing/poses/thinking-step9-v4.png",
  "decision-discouraged": "/assets/bosco/compositing/poses/protective-step9-v4.png",
  "decision-unavailable": "/assets/bosco/compositing/poses/annoyed-step9-v4.png"
};

export function poseAsset(pose: BoscoPose): string {
  return `/assets/bosco/compositing/poses/${pose}-step9-v4.png`;
}

export function handBehindAsset(pose: BoscoPose): string {
  return `/assets/bosco/compositing/hands-behind/${pose}-step9-v4.png`;
}

export function fingersFrontAsset(pose: BoscoPose): string {
  return `/assets/bosco/compositing/fingers-front/${pose}-step9-v4.png`;
}

export function handBehindForPoseAsset(posePath: string): string {
  return posePath.replace(
    "/compositing/poses/",
    "/compositing/hands-behind/"
  );
}

export function fingersFrontForPoseAsset(posePath: string): string {
  return posePath.replace(
    "/compositing/poses/",
    "/compositing/fingers-front/"
  );
}

export function decisionPoseAsset(decision: BoscoDecision): string {
  return DECISION_POSES[decision];
}

export function contextKey(
  decision: BoscoDecision,
  weather: WeatherFamily,
  time: TimeOfDay
): string {
  return `${decision}:${weather}:${time}`;
}

export const wmoMapping = WMO_TO_FAMILY;
