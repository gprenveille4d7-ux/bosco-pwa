import notificationConfig from "@/deliverables/Bosco-Etape-5/notification-engine.json";
import type {
  BoscoProfile,
  BoscoResult,
  BoscoWeatherInput
} from "@/lib/bosco-engine";

const NOTIFICATION_HISTORY_KEY = "bosco:notification-history:v5";

type AudioContextWithWebkit = Window & {
  webkitAudioContext?: typeof AudioContext;
};

type NotificationHistory = Record<string, number>;

export class BoscoAmbientSoundscape {
  private context: AudioContext | null = null;
  private master: GainNode | null = null;
  private fireGain: GainNode | null = null;
  private windGain: GainNode | null = null;
  private rainGain: GainNode | null = null;
  private sources: AudioBufferSourceNode[] = [];

  private makeNoise(filterType: BiquadFilterType, frequency: number) {
    if (!this.context || !this.master) return null;
    const length = this.context.sampleRate * 2;
    const buffer = this.context.createBuffer(1, length, this.context.sampleRate);
    const channel = buffer.getChannelData(0);
    let brown = 0;
    for (let index = 0; index < length; index += 1) {
      const white = Math.random() * 2 - 1;
      brown = (brown + 0.02 * white) / 1.02;
      channel[index] = filterType === "lowpass" ? brown * 3.2 : white * 0.55;
    }

    const source = this.context.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    const filter = this.context.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.value = frequency;
    const gain = this.context.createGain();
    gain.gain.value = 0;
    source.connect(filter).connect(gain).connect(this.master);
    source.start();
    this.sources.push(source);
    return gain;
  }

  async start(input: BoscoWeatherInput) {
    if (typeof window === "undefined") return;
    const saveData = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection?.saveData;
    if (saveData) return;

    if (!this.context) {
      const AudioContextConstructor =
        window.AudioContext ?? (window as AudioContextWithWebkit).webkitAudioContext;
      if (!AudioContextConstructor) return;
      this.context = new AudioContextConstructor();
      this.master = this.context.createGain();
      this.master.gain.value = 0.07;
      this.master.connect(this.context.destination);
      this.fireGain = this.makeNoise("bandpass", 520);
      this.windGain = this.makeNoise("lowpass", 860);
      this.rainGain = this.makeNoise("highpass", 2600);
    }
    await this.context.resume();
    this.update(input);
  }

  update(input: BoscoWeatherInput) {
    if (!this.context) return;
    const now = this.context.currentTime;
    const fire = input.connection.online ? 0.018 : 0.024;
    const wind = Math.min(0.034, Math.max(0, (input.wind.meanKt - 4) * 0.0017));
    const rain = Math.min(0.04, input.weather.precipitationMmH * 0.004);
    this.fireGain?.gain.setTargetAtTime(fire, now, 0.7);
    this.windGain?.gain.setTargetAtTime(wind, now, 0.8);
    this.rainGain?.gain.setTargetAtTime(rain, now, 0.45);
  }

  async suspend() {
    if (this.context?.state === "running") await this.context.suspend();
  }

  async resume() {
    if (this.context?.state === "suspended") await this.context.resume();
  }

  async stop() {
    this.sources.forEach((source) => {
      try {
        source.stop();
      } catch {
        // A source may already have stopped while Safari is suspending the page.
      }
    });
    this.sources = [];
    if (this.context && this.context.state !== "closed") await this.context.close();
    this.context = null;
    this.master = null;
    this.fireGain = null;
    this.windGain = null;
    this.rainGain = null;
  }
}

function isQuietHour(date: Date) {
  const minutes = date.getHours() * 60 + date.getMinutes();
  const [startHour, startMinute] = notificationConfig.deliveryPolicy.quietHoursLocal.start
    .split(":")
    .map(Number);
  const [endHour, endMinute] = notificationConfig.deliveryPolicy.quietHoursLocal.end
    .split(":")
    .map(Number);
  const start = startHour * 60 + startMinute;
  const end = endHour * 60 + endMinute;
  return minutes >= start || minutes < end;
}

function readNotificationHistory(): NotificationHistory {
  try {
    return JSON.parse(window.localStorage.getItem(NOTIFICATION_HISTORY_KEY) ?? "{}");
  } catch {
    return {};
  }
}

export async function requestBoscoNotificationPermission() {
  if (!("Notification" in window)) return false;
  if (Notification.permission === "granted") return true;
  if (Notification.permission === "denied") return false;
  return (await Notification.requestPermission()) === "granted";
}

export function maybeNotifyBosco(
  input: BoscoWeatherInput,
  result: BoscoResult,
  profile: BoscoProfile
) {
  if (!("Notification" in window) || Notification.permission !== "granted") return false;
  const now = new Date();
  if (isQuietHour(now)) return false;

  const selected =
    input.weather.thunderstormRisk >= 0.35
      ? notificationConfig.rules.find((rule) => rule.id === "storm-risk")
      : input.wind.gustKt >= 28
        ? notificationConfig.rules.find((rule) => rule.id === "gust-danger")
        : result.score >= 7 && input.trend.windKt3h >= 3
          ? notificationConfig.rules.find((rule) => rule.id === "weather-window")
          : undefined;
  if (!selected) return false;

  const history = readNotificationHistory();
  const lastAt = history[selected.id] ?? 0;
  if (now.getTime() - lastAt < selected.cooldownMinutes * 60_000) return false;

  const firstName = profile.firstName || "Marin";
  const interpolate = (value: string) =>
    value
      .replaceAll("{{firstName}}", firstName)
      .replaceAll("{{gustKt}}", String(input.wind.gustKt))
      .replaceAll("{{spot}}", profile.favoriteSpot)
      .replaceAll("{{craftType}}", profile.craftType);

  new Notification(interpolate(selected.title), {
    body: interpolate(selected.body),
    icon: "/assets/bosco/master.webp",
    tag: `bosco-${selected.id}`,
    silent: false
  });
  history[selected.id] = now.getTime();
  window.localStorage.setItem(NOTIFICATION_HISTORY_KEY, JSON.stringify(history));
  return true;
}
