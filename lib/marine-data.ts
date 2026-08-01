import {
  deriveTideEvents,
  finiteOrNull,
  weatherDescription,
  type TideEvent,
  type TideSample,
} from "@/lib/marine-math.mjs";
import type { ManchePort } from "@/data/manche-ports";
import { readLocalRecord, removeLocalRecord, writeLocalRecord } from "@/lib/v24/storage";

export type MarineLocation = Pick<
  ManchePort,
  "id" | "name" | "latitude" | "longitude"
> & {
  timezone: "Europe/Paris";
};

export const BOSCO_LOCATION: MarineLocation = {
  id: "jullouville",
  name: "Jullouville",
  latitude: 48.7757,
  longitude: -1.5686,
  timezone: "Europe/Paris",
};

const CACHE_KEY = "bosco.v24.cache.marine";
const LEGACY_CACHE_KEY = "bosco:marine-dashboard:v2";
const CACHE_VALIDITY_MS = 30 * 60_000;
const REQUEST_TIMEOUT_MS = 12_000;
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";
const MARINE_URL = "https://marine-api.open-meteo.com/v1/marine";

export type HourlyForecast = {
  time: string;
  temperatureC: number | null;
  apparentTemperatureC: number | null;
  humidityPct: number | null;
  pressureHPa: number | null;
  visibilityM: number | null;
  precipitationProbabilityPct: number | null;
  precipitationMm: number | null;
  weatherCode: number | null;
  windKt: number | null;
  gustKt: number | null;
  windDirectionDeg: number | null;
};

export type SeaForecast = {
  time: string;
  waveHeightM: number | null;
  waveDirectionDeg: number | null;
  wavePeriodS: number | null;
  swellHeightM: number | null;
  swellDirectionDeg: number | null;
  swellPeriodS: number | null;
  seaLevelHeightMslM: number | null;
};

export type MarineDashboardData = {
  location: MarineLocation;
  fetchedAt: string;
  expiresAt: string;
  cached: boolean;
  stale: boolean;
  partial: boolean;
  source: {
    weather: "open-meteo" | null;
    marine: "open-meteo-marine" | null;
    attribution: string;
    coastalNavigationSuitable: false;
  };
  currentWeather: HourlyForecast | null;
  weather: HourlyForecast[];
  sea: SeaForecast[];
  tides: TideSample[];
  tideEvents: TideEvent[];
};

type ApiRecord = Record<string, unknown>;

function asRecord(value: unknown): ApiRecord {
  return value && typeof value === "object" ? (value as ApiRecord) : {};
}

function asArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}

function valueAt(source: ApiRecord, key: string, index: number): number | null {
  return finiteOrNull(asArray(source[key])[index]);
}

function toMarineLocation(location: ManchePort | MarineLocation): MarineLocation {
  return {
    id: location.id,
    name: location.name,
    latitude: location.latitude,
    longitude: location.longitude,
    timezone: "Europe/Paris",
  };
}

function cacheKey(location: ManchePort | MarineLocation): string {
  return `${CACHE_KEY}:${location.id}`;
}

function buildWeatherUrl(location: MarineLocation): string {
  const currentVariables = [
    "temperature_2m",
    "apparent_temperature",
    "relative_humidity_2m",
    "precipitation",
    "weather_code",
    "surface_pressure",
    "visibility",
    "wind_speed_10m",
    "wind_direction_10m",
    "wind_gusts_10m",
  ];
  const params = new URLSearchParams({
    latitude: String(location.latitude),
    longitude: String(location.longitude),
    current: currentVariables.join(","),
    hourly: [
      "temperature_2m",
      "apparent_temperature",
      "relative_humidity_2m",
      "precipitation_probability",
      "precipitation",
      "weather_code",
      "surface_pressure",
      "visibility",
      "wind_speed_10m",
      "wind_direction_10m",
      "wind_gusts_10m",
    ].join(","),
    wind_speed_unit: "kn",
    timezone: location.timezone,
    forecast_days: "7",
  });
  return `${WEATHER_URL}?${params.toString()}`;
}

function buildMarineUrl(location: MarineLocation): string {
  const params = new URLSearchParams({
    latitude: String(location.latitude),
    longitude: String(location.longitude),
    hourly: [
      "wave_height",
      "wave_direction",
      "wave_period",
      "swell_wave_height",
      "swell_wave_direction",
      "swell_wave_period",
      "sea_level_height_msl",
    ].join(","),
    timezone: location.timezone,
    forecast_days: "7",
  });
  return `${MARINE_URL}?${params.toString()}`;
}

async function fetchJson(url: string, signal?: AbortSignal): Promise<ApiRecord> {
  const controller = new AbortController();
  const onAbort = () => controller.abort(signal?.reason);
  signal?.addEventListener("abort", onAbort, { once: true });
  const timeout = setTimeout(() => controller.abort(new DOMException("Request timeout", "TimeoutError")), REQUEST_TIMEOUT_MS);
  try {
  const response = await fetch(url, {
    signal: controller.signal,
    headers: { Accept: "application/json" },
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return asRecord(await response.json());
  } finally {
    clearTimeout(timeout);
    signal?.removeEventListener("abort", onAbort);
  }
}

function parseWeather(payload: ApiRecord): HourlyForecast[] {
  const hourly = asRecord(payload.hourly);
  return asArray(hourly.time)
    .filter((time): time is string => typeof time === "string")
    .map((time, index) => ({
      time,
      temperatureC: valueAt(hourly, "temperature_2m", index),
      apparentTemperatureC: valueAt(hourly, "apparent_temperature", index),
      humidityPct: valueAt(hourly, "relative_humidity_2m", index),
      pressureHPa: valueAt(hourly, "surface_pressure", index),
      visibilityM: valueAt(hourly, "visibility", index),
      precipitationProbabilityPct: valueAt(
        hourly,
        "precipitation_probability",
        index,
      ),
      precipitationMm: valueAt(hourly, "precipitation", index),
      weatherCode: valueAt(hourly, "weather_code", index),
      windKt: valueAt(hourly, "wind_speed_10m", index),
      windDirectionDeg: valueAt(hourly, "wind_direction_10m", index),
      gustKt: valueAt(hourly, "wind_gusts_10m", index),
    }));
}

function parseCurrentWeather(
  payload: ApiRecord,
  hourlyForecasts: HourlyForecast[],
): HourlyForecast | null {
  const current = asRecord(payload.current);
  const time = typeof current.time === "string" ? current.time : null;
  if (!time) return null;
  const nearestForecast = nearestByTime(hourlyForecasts, new Date(time));
  return {
    time,
    temperatureC: finiteOrNull(current.temperature_2m),
    apparentTemperatureC: finiteOrNull(current.apparent_temperature),
    humidityPct: finiteOrNull(current.relative_humidity_2m),
    pressureHPa: finiteOrNull(current.surface_pressure),
    visibilityM: finiteOrNull(current.visibility),
    precipitationProbabilityPct:
      nearestForecast?.precipitationProbabilityPct ?? null,
    precipitationMm: finiteOrNull(current.precipitation),
    weatherCode: finiteOrNull(current.weather_code),
    windKt: finiteOrNull(current.wind_speed_10m),
    windDirectionDeg: finiteOrNull(current.wind_direction_10m),
    gustKt: finiteOrNull(current.wind_gusts_10m),
  };
}

function parseSea(payload: ApiRecord): SeaForecast[] {
  const hourly = asRecord(payload.hourly);
  return asArray(hourly.time)
    .filter((time): time is string => typeof time === "string")
    .map((time, index) => ({
      time,
      waveHeightM: valueAt(hourly, "wave_height", index),
      waveDirectionDeg: valueAt(hourly, "wave_direction", index),
      wavePeriodS: valueAt(hourly, "wave_period", index),
      swellHeightM: valueAt(hourly, "swell_wave_height", index),
      swellDirectionDeg: valueAt(hourly, "swell_wave_direction", index),
      swellPeriodS: valueAt(hourly, "swell_wave_period", index),
      seaLevelHeightMslM: valueAt(hourly, "sea_level_height_msl", index),
    }));
}

function buildDataset(
  location: MarineLocation,
  currentWeather: HourlyForecast | null,
  weather: HourlyForecast[],
  sea: SeaForecast[],
  partial: boolean,
  cached = false,
): MarineDashboardData {
  const tides = sea
    .filter(
      (sample): sample is SeaForecast & { seaLevelHeightMslM: number } =>
        sample.seaLevelHeightMslM !== null,
    )
    .map((sample) => ({
      time: sample.time,
      heightM: sample.seaLevelHeightMslM,
    }));
  return {
    location,
    fetchedAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + CACHE_VALIDITY_MS).toISOString(),
    cached,
    stale: false,
    partial,
    source: {
      weather: weather.length || currentWeather ? "open-meteo" : null,
      marine: sea.length ? "open-meteo-marine" : null,
      attribution: "Open-Meteo · données marines DWD",
      coastalNavigationSuitable: false,
    },
    currentWeather,
    weather,
    sea,
    tides,
    tideEvents: deriveTideEvents(tides),
  };
}

function validDataset(value: unknown): value is MarineDashboardData {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<MarineDashboardData>;
  return Boolean(
    candidate.location?.id &&
      Number.isFinite(candidate.location.latitude) &&
      Number.isFinite(candidate.location.longitude) &&
      typeof candidate.fetchedAt === "string" &&
      Array.isArray(candidate.weather) &&
      Array.isArray(candidate.sea) &&
      Array.isArray(candidate.tides) &&
      Array.isArray(candidate.tideEvents),
  );
}

export async function readMarineCache(
  location: ManchePort | MarineLocation = BOSCO_LOCATION,
): Promise<MarineDashboardData | null> {
  if (typeof window === "undefined") return null;
  try {
    let parsed = await readLocalRecord<MarineDashboardData>("network-cache", cacheKey(location));
    if (!parsed) {
      const legacy = window.localStorage.getItem(`${LEGACY_CACHE_KEY}:${location.id}`);
      parsed = legacy ? JSON.parse(legacy) : null;
      if (parsed && validDataset(parsed)) {
        await writeLocalRecord("network-cache", cacheKey(location), parsed);
        window.localStorage.removeItem(`${LEGACY_CACHE_KEY}:${location.id}`);
      }
    }
    if (!validDataset(parsed)) {
      await removeLocalRecord("network-cache", cacheKey(location));
      return null;
    }
    const expiresAt = parsed.expiresAt ?? new Date(Date.parse(parsed.fetchedAt) + CACHE_VALIDITY_MS).toISOString();
    return {
      ...parsed,
      expiresAt,
      currentWeather: parsed.currentWeather ?? null,
      cached: true,
      stale: Date.parse(expiresAt) <= Date.now(),
      source: parsed.source ?? {
        weather: parsed.weather.length ? "open-meteo" : null,
        marine: parsed.sea.length ? "open-meteo-marine" : null,
        attribution: "Open-Meteo · données marines DWD",
        coastalNavigationSuitable: false,
      },
    } as MarineDashboardData;
  } catch {
    return null;
  }
}

async function writeMarineCache(data: MarineDashboardData): Promise<void> {
  if (typeof window === "undefined") return;
  await writeLocalRecord("network-cache", cacheKey(data.location), data);
}

export async function fetchMarineDashboard(
  requestedLocation: ManchePort | MarineLocation = BOSCO_LOCATION,
  signal?: AbortSignal,
): Promise<MarineDashboardData> {
  const location = toMarineLocation(requestedLocation);
  const [weatherResult, marineResult] = await Promise.allSettled([
    fetchJson(buildWeatherUrl(location), signal),
    fetchJson(buildMarineUrl(location), signal),
  ]);

  if (weatherResult.status === "rejected" && marineResult.status === "rejected") {
    throw new Error("Les services météo et marine sont temporairement indisponibles.");
  }

  const weather =
    weatherResult.status === "fulfilled" ? parseWeather(weatherResult.value) : [];
  const currentWeather =
    weatherResult.status === "fulfilled"
      ? parseCurrentWeather(weatherResult.value, weather)
      : null;
  const sea =
    marineResult.status === "fulfilled" ? parseSea(marineResult.value) : [];
  const data = buildDataset(
    location,
    currentWeather,
    weather,
    sea,
    weatherResult.status === "rejected" || marineResult.status === "rejected",
  );
  await writeMarineCache(data);
  return data;
}

export function nearestWeather(
  data: MarineDashboardData,
  target = new Date(),
): HourlyForecast | null {
  return nearestByTime(data.weather, target);
}

export function currentWeather(
  data: MarineDashboardData,
): HourlyForecast | null {
  return data.currentWeather ?? nearestWeather(data);
}

export function nearestSea(
  data: MarineDashboardData,
  target = new Date(),
): SeaForecast | null {
  return nearestByTime(data.sea, target);
}

function nearestByTime<T extends { time: string }>(
  samples: T[],
  target: Date,
): T | null {
  const targetMs = target.getTime();
  return (
    samples.reduce<T | null>((best, sample) => {
      if (!best) return sample;
      return Math.abs(Date.parse(sample.time) - targetMs) <
        Math.abs(Date.parse(best.time) - targetMs)
        ? sample
        : best;
    }, null) ?? null
  );
}

export function describeData(data: MarineDashboardData): string {
  const current = nearestWeather(data);
  return weatherDescription(current?.weatherCode);
}
