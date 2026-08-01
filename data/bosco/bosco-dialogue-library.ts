import clearReplies from "@/data/bosco/dialogues-v23/clear.json";
import mainlyClearReplies from "@/data/bosco/dialogues-v23/mainly-clear.json";
import partlyCloudyReplies from "@/data/bosco/dialogues-v23/partly-cloudy.json";
import overcastReplies from "@/data/bosco/dialogues-v23/overcast.json";
import fogReplies from "@/data/bosco/dialogues-v23/fog.json";
import drizzleReplies from "@/data/bosco/dialogues-v23/drizzle.json";
import rainReplies from "@/data/bosco/dialogues-v23/rain.json";
import heavyRainReplies from "@/data/bosco/dialogues-v23/heavy-rain.json";
import snowReplies from "@/data/bosco/dialogues-v23/snow.json";
import stormReplies from "@/data/bosco/dialogues-v23/storm.json";
import {
  WEATHER_FAMILIES,
  type WeatherFamily,
} from "@/lib/bosco-visual-context";

export const WIND_BANDS = [
  "calm",
  "light",
  "favorable",
  "sporty",
  "dangerous",
] as const;

export const SCORE_BANDS = [
  "critical",
  "poor",
  "mixed",
  "good",
  "excellent",
] as const;

export type WindBand = (typeof WIND_BANDS)[number];
export type ScoreBand = (typeof SCORE_BANDS)[number];
export type CompleteDialogueDecision =
  | "refuse"
  | "discouraged"
  | "cautious"
  | "favorable"
  | "excellent";

export type CompleteBoscoReply = {
  id: string;
  weatherFamily: WeatherFamily;
  windBand: WindBand;
  scoreBand: ScoreBand;
  text: string;
  decision: CompleteDialogueDecision;
  safetyPriority: boolean;
};

export type BoscoReplyKey =
  `${WeatherFamily}:${WindBand}:${ScoreBand}`;

const CORPUS = [
  ...clearReplies,
  ...mainlyClearReplies,
  ...partlyCloudyReplies,
  ...overcastReplies,
  ...fogReplies,
  ...drizzleReplies,
  ...rainReplies,
  ...heavyRainReplies,
  ...snowReplies,
  ...stormReplies,
] as CompleteBoscoReply[];

export const COMPLETE_BOSCO_REPLIES: readonly CompleteBoscoReply[] =
  Object.freeze(CORPUS);

export const COMPLETE_BOSCO_REPLY_COUNT = COMPLETE_BOSCO_REPLIES.length;
export const COMPLETE_BOSCO_COMBINATION_COUNT =
  WEATHER_FAMILIES.length * WIND_BANDS.length * SCORE_BANDS.length;
export const COMPLETE_BOSCO_VARIANTS_PER_COMBINATION = 8;

export function boscoReplyKey(
  weatherFamily: WeatherFamily,
  windBand: WindBand,
  scoreBand: ScoreBand,
): BoscoReplyKey {
  return `${weatherFamily}:${windBand}:${scoreBand}`;
}

export const COMPLETE_BOSCO_REPLIES_BY_KEY: ReadonlyMap<
  BoscoReplyKey,
  readonly CompleteBoscoReply[]
> = new Map(
  WEATHER_FAMILIES.flatMap((weatherFamily) =>
    WIND_BANDS.flatMap((windBand) =>
      SCORE_BANDS.map((scoreBand) => {
        const key = boscoReplyKey(weatherFamily, windBand, scoreBand);
        const variants = COMPLETE_BOSCO_REPLIES.filter(
          (reply) =>
            reply.weatherFamily === weatherFamily &&
            reply.windBand === windBand &&
            reply.scoreBand === scoreBand,
        );
        return [key, Object.freeze(variants)] as const;
      }),
    ),
  ),
);
