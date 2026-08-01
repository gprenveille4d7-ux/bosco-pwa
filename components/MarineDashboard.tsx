"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  fetchMarineDashboard,
  currentWeather,
  nearestSea,
  nearestWeather,
  readMarineCache,
  type HourlyForecast,
  type MarineDashboardData,
} from "@/lib/marine-data";
import {
  classifySeaState,
  degreesToCardinal,
  deriveTideEvents,
  formatValue,
  interpolateHeight,
  minutesUntil,
  nextTideEvent,
  tideTrendAt,
  weatherDescription,
  type TideEvent,
  type TideSample,
} from "@/lib/marine-math.mjs";
import type { BoscoScreen, MarineScreen } from "@/lib/marine-navigation";
import type { ManchePort } from "@/data/manche-ports";
import type { BoscoResult } from "@/lib/bosco-engine";
import { formatNauticalMiles, type NauticalContext } from "@/lib/v24/nautical";
import styles from "./MarineDashboard.module.css";

type Props = {
  activeScreen: MarineScreen | null;
  onNavigate: (screen: BoscoScreen | null) => void;
  onData?: (data: MarineDashboardData) => void;
  location: ManchePort;
  nauticalContext: NauticalContext;
  boscoResult: BoscoResult;
  enabled?: boolean;
};

const PARIS_TIMEZONE = "Europe/Paris";

function parisDateKey(date = new Date()): string {
  return new Intl.DateTimeFormat("fr-CA", {
    timeZone: PARIS_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function formatDate(dateKey: string, weekday = true): string {
  return new Intl.DateTimeFormat("fr-FR", {
    timeZone: PARIS_TIMEZONE,
    weekday: weekday ? "long" : undefined,
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${dateKey}T12:00:00+02:00`));
}

function formatTime(value: string): string {
  if (/T\d{2}:\d{2}/.test(value)) return value.slice(11, 16).replace(":", " h ");
  const parsed = new Date(value);
  if (!Number.isFinite(parsed.getTime())) return "Indisponible";
  return new Intl.DateTimeFormat("fr-FR", {
    timeZone: PARIS_TIMEZONE,
    hour: "2-digit",
    minute: "2-digit",
  })
    .format(parsed)
    .replace(":", " h ");
}

function formatUpdated(value: string): string {
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return "heure inconnue";
  return new Intl.DateTimeFormat("fr-FR", {
    timeZone: PARIS_TIMEZONE,
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function minuteOfDay(value: string): number {
  const hasExplicitTimezone = /(?:Z|[+-]\d{2}:\d{2})$/.test(value);
  const localMatch = value.match(/T(\d{2}):(\d{2})/);
  if (localMatch && !hasExplicitTimezone) {
    return Math.min(1439, Number(localMatch[1]) * 60 + Number(localMatch[2]));
  }
  const parsed = new Date(value);
  if (!Number.isFinite(parsed.getTime())) return 0;
  const parts = new Intl.DateTimeFormat("fr-FR", {
    timeZone: PARIS_TIMEZONE,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(parsed);
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0) % 24;
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);
  return hour * 60 + minute;
}

function Value({
  value,
  unit,
  digits = 0,
}: {
  value: number | null | undefined;
  unit?: string;
  digits?: number;
}) {
  const formatted = formatValue(value, digits);
  if (formatted === null) return <span className={styles.unavailable}>Indisponible</span>;
  return (
    <>
      {formatted}
      {unit ? <small>{unit}</small> : null}
    </>
  );
}

function WeatherGlyph({ code }: { code: number | null | undefined }) {
  const kind =
    code === 0
      ? "sun"
      : code !== null && code !== undefined && [45, 48].includes(code)
        ? "fog"
        : code !== null && code !== undefined && code >= 95
          ? "storm"
          : code !== null && code !== undefined && code >= 51
            ? "rain"
            : "cloud";
  return (
    <svg
      className={styles.weatherGlyph}
      viewBox="0 0 48 48"
      role="img"
      aria-label={weatherDescription(code)}
    >
      {kind === "sun" ? (
        <>
          <circle cx="24" cy="24" r="8" />
          <path d="M24 5v7M24 36v7M5 24h7M36 24h7M10.6 10.6l5 5M32.4 32.4l5 5M37.4 10.6l-5 5M15.6 32.4l-5 5" />
        </>
      ) : (
        <>
          <path d="M13 31h24a7 7 0 0 0 0-14 12 12 0 0 0-22-2A8 8 0 0 0 13 31Z" />
          {kind === "rain" ? <path d="m18 35-2 5m10-5-2 5m10-5-2 5" /> : null}
          {kind === "storm" ? <path d="m26 32-5 8h6l-3 6" /> : null}
          {kind === "fog" ? <path d="M10 36h28M14 41h20" /> : null}
        </>
      )}
    </svg>
  );
}

type ConditionIconName =
  | "wind"
  | "gust"
  | "wave"
  | "period"
  | "swell"
  | "air"
  | "rain"
  | "visibility"
  | "pressure"
  | "signal";

function ConditionIcon({ name }: { name: ConditionIconName }) {
  return (
    <svg className={styles.conditionIcon} viewBox="0 0 48 48" aria-hidden="true">
      {name === "wind" ? (
        <>
          <path d="M13 41V8m0 3 21 4-8 9-13-3" />
          <path className={styles.conditionIconSoft} d="M6 41h20" />
        </>
      ) : null}
      {name === "gust" ? (
        <>
          <path d="M6 16h25c8 0 8-10 1-10-4 0-6 2-6 5" />
          <path d="M6 25h34M6 34h24c8 0 8 9 1 9-4 0-6-2-6-5" />
        </>
      ) : null}
      {name === "wave" ? (
        <>
          <path d="M4 18c6 0 6-6 12-6s6 6 12 6 6-6 12-6" />
          <path d="M4 29c6 0 6-6 12-6s6 6 12 6 6-6 12-6" />
          <path className={styles.conditionIconSoft} d="M8 38h31" />
        </>
      ) : null}
      {name === "period" ? (
        <>
          <circle cx="24" cy="24" r="16" />
          <path d="M24 14v11l8 5" />
          <path className={styles.conditionIconSoft} d="M7 8h8M33 8h8" />
        </>
      ) : null}
      {name === "swell" ? (
        <>
          <path d="M4 31c6 0 8-14 17-14 8 0 8 14 17 14 3 0 5-2 6-4" />
          <path className={styles.conditionIconSoft} d="M7 38c7 0 9-8 16-8 6 0 8 8 15 8" />
        </>
      ) : null}
      {name === "air" ? (
        <>
          <path d="M20 30V10a5 5 0 0 1 10 0v20a10 10 0 1 1-10 0Z" />
          <path d="M25 16v19" />
          <circle cx="25" cy="37" r="4" />
        </>
      ) : null}
      {name === "rain" ? (
        <>
          <path d="M11 27h26a7 7 0 0 0-2-13 11 11 0 0 0-20 1 6 6 0 0 0-4 12Z" />
          <path d="m16 33-2 7m11-7-2 7m11-7-2 7" />
        </>
      ) : null}
      {name === "visibility" ? (
        <>
          <path d="M10 41h13l-2-29h-9Z" />
          <path d="M12 20h9M9 41h17" />
          <path className={styles.conditionIconBeam} d="m22 17 20-7v18l-20-7" />
        </>
      ) : null}
      {name === "pressure" ? (
        <>
          <circle cx="24" cy="25" r="17" />
          <path className={styles.conditionIconSoft} d="M15 11 12 7m21 4 3-4" />
          <path d="M24 25 34 17M13 27h3m16 0h3M24 14v3" />
          <circle cx="24" cy="25" r="2" />
        </>
      ) : null}
      {name === "signal" ? (
        <>
          <path d="M13 42V7" />
          <path className={styles.conditionIconFill} d="M14 9h24l-7 8 7 8H14Z" />
          <path className={styles.conditionIconSoft} d="M7 42h17" />
        </>
      ) : null}
    </svg>
  );
}

function SeaSketch({ level, label }: { level: number; label: string }) {
  return (
    <figure className={styles.seaSketch} data-level={level} aria-label={`Illustration indicative : ${label}`}>
      <svg viewBox="0 0 320 112" role="img">
        <path d="M2 69c26 0 26-30 52-30s26 30 52 30 26-30 52-30 26 30 52 30 26-30 52-30 26 30 52 30" />
        <path d="M2 88c26 0 26-20 52-20s26 20 52 20 26-20 52-20 26 20 52 20 26-20 52-20 26 20 52 20" />
        <path className={styles.seaSketchFoam} d="M2 100h316" />
      </svg>
    </figure>
  );
}

function MetricCard({
  label,
  children,
  note,
  icon,
}: {
  label: string;
  children: React.ReactNode;
  note?: React.ReactNode;
  icon?: ConditionIconName;
}) {
  return (
    <article className={styles.metricCard}>
      <span className={styles.metricLabel}>
        {icon ? <ConditionIcon name={icon} /> : null}
        <span>{label}</span>
      </span>
      <strong>{children}</strong>
      {note ? <p>{note}</p> : null}
    </article>
  );
}

function PageHeader({
  title,
  subtitle,
  onBack,
}: {
  title: string;
  subtitle: string;
  onBack: () => void;
}) {
  return (
    <header className={styles.pageHeader}>
      <button className={styles.backButton} onClick={onBack} aria-label="Revenir à Bosco">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <div>
        <span>{subtitle}</span>
        <h1>{title}</h1>
      </div>
      <span className={styles.harbourMark} aria-hidden="true">B</span>
    </header>
  );
}

function ContextHeader({
  title,
  context,
  onBack,
  onChangePort,
}: {
  title: string;
  context: NauticalContext;
  onBack: () => void;
  onChangePort: () => void;
}) {
  const samePort = context.homePort.id === context.activePort.id;
  return (
    <header className={styles.contextHeader}>
      <button className={styles.backButton} onClick={onBack} aria-label="Revenir à Bosco">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
      </button>
      <div>
        <span className={styles.kicker}>{title}</span>
        <h1>⚓ {context.activePort.name}</h1>
        <p>
          {samePort
            ? "Port d’attache"
            : `Port d’attache : ${context.homePort.name} · ${formatNauticalMiles(context.distanceNauticalMiles)}`}
        </p>
      </div>
      <button className={styles.changePortButton} onClick={onChangePort}>Changer de port</button>
    </header>
  );
}

function DataNotice({
  data,
  error,
  onRetry,
}: {
  data: MarineDashboardData | null;
  error: string | null;
  onRetry: () => void;
}) {
  if (!data && error) {
    return (
      <section className={styles.errorPanel} role="alert">
        <strong>La vigie ne reçoit plus les relevés.</strong>
        <p>{error}</p>
        <button onClick={onRetry}>Réessayer</button>
      </section>
    );
  }
  if (!data) return null;
  if (!data.cached && !data.partial && !error) return null;
  return (
    <section className={styles.dataNotice} aria-live="polite">
      <div>
        <strong>
          {data.stale
            ? "Données anciennes"
            : data.cached
              ? "Données enregistrées"
              : "Données partiellement disponibles"}
        </strong>
        <span>mise à jour {formatUpdated(data.fetchedAt)}</span>
      </div>
      {error ? <button onClick={onRetry}>Réessayer</button> : null}
    </section>
  );
}

function LoadingScreen({ onBack, locationName }: { onBack: () => void; locationName: string }) {
  return (
    <div className={styles.page}>
      <PageHeader title="Relevés en cours" subtitle={locationName} onBack={onBack} />
      <div className={styles.loadingGrid} aria-busy="true" aria-live="polite">
        <span />
        <span />
        <span />
        <p>Bosco relève les instruments…</p>
      </div>
    </div>
  );
}

function HourlyStrip({
  forecasts,
  dateKey,
  selectedTime,
  onSelect,
}: {
  forecasts: HourlyForecast[];
  dateKey: string;
  selectedTime: string | null;
  onSelect: (time: string) => void;
}) {
  const entries = useMemo(
    () => forecasts.filter((item) => item.time.startsWith(dateKey)).slice(0, 24),
    [dateKey, forecasts],
  );
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip || !selectedTime) return;
    const selectedIndex = entries.findIndex((item) => item.time === selectedTime);
    const selectedCell = selectedIndex >= 0 ? strip.children.item(selectedIndex) as HTMLElement | null : null;
    if (!selectedCell) return;
    strip.scrollTo({
      left: selectedCell.offsetLeft - (strip.clientWidth - selectedCell.clientWidth) / 2,
      behavior: "auto",
    });
  }, [dateKey, selectedTime, entries]);

  if (entries.length === 0) {
    return <p className={styles.empty}>Prévisions horaires indisponibles.</p>;
  }
  return (
    <div ref={stripRef} className={styles.hourlyStrip} aria-label="Prévisions heure par heure, centrées sur l’heure consultée">
      {entries.map((item) => {
        const selected = item.time === selectedTime;
        return (
          <button
            key={item.time}
            className={[styles.hourCell, selected ? styles.selectedHour : ""]
              .filter(Boolean)
              .join(" ")}
            onClick={() => onSelect(item.time)}
            aria-pressed={selected}
          >
            <time>{item.time.slice(11, 13)} h</time>
            <WeatherGlyph code={item.weatherCode} />
            <strong><Value value={item.temperatureC} unit="°" /></strong>
            <span>Vent <Value value={item.windKt} unit=" nd" /></span>
            <span>Raf. <Value value={item.gustKt} unit=" nd" /></span>
            <span>Pluie <Value value={item.precipitationProbabilityPct} unit=" %" /></span>
          </button>
        );
      })}
    </div>
  );
}

function availableDateKeys(samples: Array<{ time: string }>): string[] {
  return [...new Set(samples.map((item) => item.time.slice(0, 10)))].sort();
}

function closestTimeForDate(
  forecasts: HourlyForecast[],
  dateKey: string,
  targetHour = 12,
): string | null {
  const entries = forecasts.filter((item) => item.time.startsWith(dateKey));
  if (entries.length === 0) return null;
  const localHour = new Intl.DateTimeFormat("fr-FR", {
    timeZone: PARIS_TIMEZONE,
    hour: "2-digit",
    hour12: false,
  })
    .formatToParts(new Date())
    .find((part) => part.type === "hour")?.value;
  const requestedHour =
    dateKey === parisDateKey()
      ? Number(localHour ?? targetHour)
      : targetHour;
  return entries.reduce((best, item) =>
    Math.abs(Number(item.time.slice(11, 13)) - requestedHour) <
    Math.abs(Number(best.time.slice(11, 13)) - requestedHour)
      ? item
      : best,
  ).time;
}

function ForecastDateNavigator({
  dateKey,
  availableDates,
  onChange,
}: {
  dateKey: string;
  availableDates: string[];
  onChange: (dateKey: string) => void;
}) {
  const dateIndex = availableDates.indexOf(dateKey);
  return (
    <section className={styles.dateNavigator} aria-label="Prévisions sur sept jours">
      <button
        aria-label="Afficher les prévisions du jour précédent"
        disabled={dateIndex <= 0}
        onClick={() => onChange(availableDates[dateIndex - 1] ?? dateKey)}
      >‹</button>
      <div>
        <span className={styles.kicker}>PRÉVISIONS SUR 7 JOURS</span>
        <h2>{formatDate(dateKey)}</h2>
      </div>
      <button
        aria-label="Afficher les prévisions du jour suivant"
        disabled={dateIndex < 0 || dateIndex >= availableDates.length - 1}
        onClick={() => onChange(availableDates[dateIndex + 1] ?? dateKey)}
      >›</button>
    </section>
  );
}

function WeatherScreen({
  data,
  onBack,
  onNavigate,
}: {
  data: MarineDashboardData;
  onBack: () => void;
  onNavigate: (screen: MarineScreen) => void;
}) {
  const current = currentWeather(data);
  const availableDates = useMemo(() => availableDateKeys(data.weather), [data.weather]);
  const today = parisDateKey();
  const initialDate = availableDates.includes(today) ? today : availableDates[0] ?? today;
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [selectedTime, setSelectedTime] = useState<string | null>(
    closestTimeForDate(data.weather, initialDate),
  );
  const changeDate = (dateKey: string) => {
    setSelectedDate(dateKey);
    setSelectedTime(closestTimeForDate(data.weather, dateKey));
  };

  return (
    <div className={styles.page}>
      <PageHeader title="Détail météo" subtitle={data.location.name} onBack={onBack} />
      <div className={styles.segmented} role="tablist" aria-label="Météo et conditions marines">
        <button className={styles.segmentActive} role="tab" aria-selected="true">Météo</button>
        <button role="tab" aria-selected="false" onClick={() => onNavigate("sea")}>Vent &amp; Mer</button>
      </div>

      <section className={styles.weatherHero}>
        <div>
          <span className={styles.kicker}>{formatDate(parisDateKey())}</span>
          <h2>{weatherDescription(current?.weatherCode)}</h2>
          <p>Dernière mise à jour : {formatUpdated(data.fetchedAt)}</p>
        </div>
        <WeatherGlyph code={current?.weatherCode} />
        <strong className={styles.temperature}>
          <Value value={current?.temperatureC} unit="°C" />
        </strong>
        <span className={styles.feelsLike}>
          Ressenti <Value value={current?.apparentTemperatureC} unit=" °C" />
        </span>
      </section>

      <section className={styles.metricGrid} aria-label="Mesures météorologiques">
        <MetricCard label="Pression">
          <Value value={current?.pressureHPa} unit=" hPa" />
        </MetricCard>
        <MetricCard label="Humidité">
          <Value value={current?.humidityPct} unit=" %" />
        </MetricCard>
        <MetricCard label="Visibilité">
          <Value
            value={current?.visibilityM === null || current?.visibilityM === undefined
              ? null
              : current.visibilityM / 1000}
            unit=" km"
            digits={1}
          />
        </MetricCard>
        <MetricCard label="Risque de pluie">
          <Value value={current?.precipitationProbabilityPct} unit=" %" />
        </MetricCard>
        <MetricCard label="Précipitations">
          <Value value={current?.precipitationMm} unit=" mm" digits={1} />
        </MetricCard>
        <MetricCard label="Vent">
          <Value value={current?.windKt} unit=" nds" />
        </MetricCard>
      </section>

      <ForecastDateNavigator
        dateKey={selectedDate}
        availableDates={availableDates}
        onChange={changeDate}
      />

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.kicker}>PRÉVISIONS</span>
            <h2>Heure par heure</h2>
          </div>
          <span className={styles.windowBadge}>heure locale</span>
        </div>
        <HourlyStrip
          forecasts={data.weather}
          dateKey={selectedDate}
          selectedTime={selectedTime}
          onSelect={setSelectedTime}
        />
      </section>
    </div>
  );
}

function Compass({ degrees }: { degrees: number | null | undefined }) {
  const direction = degreesToCardinal(degrees);
  const rotation = direction ? Number(degrees) : 0;
  return (
    <figure className={styles.compass}>
      <svg viewBox="0 0 260 260" role="img" aria-label={
        direction
          ? `Le vent vient du ${direction.long}, ${Math.round(Number(degrees))} degrés`
          : "Direction du vent indisponible"
      }>
        <circle cx="130" cy="130" r="103" />
        <circle cx="130" cy="130" r="73" />
        <path className={styles.compassCross} d="M130 18v224M18 130h224M51 51l158 158M209 51 51 209" />
        <g className={styles.compassArrow} transform={`rotate(${rotation} 130 130)`}>
          <path d="M130 132 117 55l13-25 13 25-13 77Z" />
          <circle cx="130" cy="130" r="9" />
        </g>
        <text x="130" y="15">N</text>
        <text x="246" y="136">E</text>
        <text x="130" y="256">S</text>
        <text x="14" y="136">O</text>
      </svg>
      <figcaption>
        <strong>{direction?.long ?? "Indisponible"}</strong>
        <span>{direction ? `${Math.round(Number(degrees))}° · vient de` : "Angle non fourni"}</span>
      </figcaption>
    </figure>
  );
}

function DirectionLabel({ value }: { value: number | null | undefined }) {
  const direction = degreesToCardinal(value);
  if (!direction) return <span className={styles.unavailable}>Indisponible</span>;
  return <>{direction.long} · {Math.round(Number(value))}°</>;
}

function SeaScreen({
  data,
  onBack,
  onNavigate,
}: {
  data: MarineDashboardData;
  onBack: () => void;
  onNavigate: (screen: MarineScreen) => void;
}) {
  const availableDates = useMemo(() => availableDateKeys(data.weather), [data.weather]);
  const today = parisDateKey();
  const initialDate = availableDates.includes(today) ? today : availableDates[0] ?? today;
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [selectedTime, setSelectedTime] = useState<string | null>(
    closestTimeForDate(data.weather, initialDate),
  );
  const changeDate = (dateKey: string) => {
    setSelectedDate(dateKey);
    setSelectedTime(closestTimeForDate(data.weather, dateKey));
  };
  const target = selectedTime ? new Date(selectedTime) : new Date();
  const wind = nearestWeather(data, target);
  const sea = nearestSea(data, target);
  return (
    <div className={styles.page}>
      <PageHeader title="Vent & Mer" subtitle={data.location.name} onBack={onBack} />
      <div className={styles.segmented} role="tablist" aria-label="Météo et conditions marines">
        <button role="tab" aria-selected="false" onClick={() => onNavigate("weather")}>Météo</button>
        <button className={styles.segmentActive} role="tab" aria-selected="true">Vent &amp; Mer</button>
      </div>

      <ForecastDateNavigator
        dateKey={selectedDate}
        availableDates={availableDates}
        onChange={changeDate}
      />

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.kicker}>PRÉVISIONS</span>
            <h2>Choisir une heure</h2>
          </div>
          <span className={styles.windowBadge}>heure locale</span>
        </div>
        <HourlyStrip
          forecasts={data.weather}
          dateKey={selectedDate}
          selectedTime={selectedTime}
          onSelect={setSelectedTime}
        />
      </section>

      <section className={styles.windPanel}>
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.kicker}>VENT DE SURFACE</span>
            <h2>Le vent vient du {degreesToCardinal(wind?.windDirectionDeg)?.long ?? "secteur inconnu"}</h2>
          </div>
          <span className={styles.updated}>à {formatTime(wind?.time ?? data.fetchedAt)}</span>
        </div>
        <div className={styles.windLayout}>
          <Compass degrees={wind?.windDirectionDeg} />
          <div className={styles.windNumbers}>
            <MetricCard label="Vent moyen">
              <Value value={wind?.windKt} unit=" nds" />
            </MetricCard>
            <MetricCard label="Rafales">
              <Value value={wind?.gustKt} unit=" nds" />
            </MetricCard>
          </div>
        </div>
      </section>

      <div className={styles.seaGrid}>
        <section className={styles.seaPanel}>
          <div className={styles.seaIcon} aria-hidden="true">≋</div>
          <span className={styles.kicker}>ÉTAT DE LA MER</span>
          <h2>{classifySeaState(sea?.waveHeightM) ?? "Indisponible"}</h2>
          <strong><Value value={sea?.waveHeightM} unit=" m" digits={1} /></strong>
          <dl>
            <div><dt>Direction des vagues</dt><dd><DirectionLabel value={sea?.waveDirectionDeg} /></dd></div>
            <div><dt>Période des vagues</dt><dd><Value value={sea?.wavePeriodS} unit=" s" digits={1} /></dd></div>
          </dl>
        </section>
        <section className={styles.seaPanel}>
          <div className={styles.swellArrows} aria-hidden="true">⌁ ⌁ ⌁</div>
          <span className={styles.kicker}>HOULE</span>
          <h2><DirectionLabel value={sea?.swellDirectionDeg} /></h2>
          <strong><Value value={sea?.swellHeightM} unit=" m" digits={1} /></strong>
          <dl>
            <div><dt>Direction</dt><dd><DirectionLabel value={sea?.swellDirectionDeg} /></dd></div>
            <div><dt>Période de houle</dt><dd><Value value={sea?.swellPeriodS} unit=" s" digits={1} /></dd></div>
          </dl>
        </section>
      </div>

      <p className={styles.sourceLine}>
        Vagues et houle sont présentées séparément · Source Open-Meteo Marine
      </p>
    </div>
  );
}

function ConditionsScreen({
  data,
  context,
  boscoResult,
  onBack,
  onChangePort,
}: {
  data: MarineDashboardData;
  context: NauticalContext;
  boscoResult: BoscoResult;
  onBack: () => void;
  onChangePort: () => void;
}) {
  const availableDates = useMemo(() => availableDateKeys(data.weather), [data.weather]);
  const today = parisDateKey();
  const initialDate = availableDates.includes(today) ? today : availableDates[0] ?? today;
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [selectedTime, setSelectedTime] = useState<string | null>(closestTimeForDate(data.weather, initialDate));
  const [activeConditionPage, setActiveConditionPage] = useState(0);
  const conditionCarouselRef = useRef<HTMLDivElement>(null);
  const changeDate = (dateKey: string) => {
    setSelectedDate(dateKey);
    setSelectedTime(closestTimeForDate(data.weather, dateKey));
  };
  const target = selectedTime ? new Date(selectedTime) : new Date();
  const weather = selectedTime ? nearestWeather(data, target) : currentWeather(data);
  const sea = nearestSea(data, target);
  const seaState = classifySeaState(sea?.waveHeightM) ?? "État de la mer indisponible";
  const windDirection = degreesToCardinal(weather?.windDirectionDeg);
  const seaSketchLevel = sea?.waveHeightM == null
    ? 0
    : sea.waveHeightM < 0.3
      ? 1
      : sea.waveHeightM < 0.8
        ? 2
        : sea.waveHeightM < 1.5
          ? 3
          : 4;
  const conditionPageLabels = ["Vent", "Mer", "Atmosphère", "Avis de Bosco"];
  const showConditionPage = (index: number) => {
    const viewport = conditionCarouselRef.current;
    if (!viewport) return;
    viewport.scrollTo({
      left: viewport.clientWidth * index,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
    setActiveConditionPage(index);
  };

  return (
    <div className={styles.page}>
      <ContextHeader title="CONDITIONS" context={context} onBack={onBack} onChangePort={onChangePort} />

      <div className={styles.conditionCarouselShell}>
        <div
          ref={conditionCarouselRef}
          className={styles.conditionCarousel}
          aria-label="Conditions maritimes, quatre cellules à parcourir horizontalement"
          onScroll={(event) => {
            const viewport = event.currentTarget;
            if (!viewport.clientWidth) return;
            setActiveConditionPage(Math.max(0, Math.min(3, Math.round(viewport.scrollLeft / viewport.clientWidth))));
          }}
        >
          <section className={styles.conditionSlide} aria-label="Cellule 1 sur 4 : orientation et force du vent">
            <header className={styles.conditionSlideHeader}>
              <div>
                <span className={styles.kicker}>SYNTHÈSE MARITIME · VENT · ORIENTATION</span>
                <h2>{windDirection ? `Vent de ${windDirection.long}` : "Direction indisponible"}</h2>
                <p>{weatherDescription(weather?.weatherCode)} · mis à jour {formatUpdated(data.fetchedAt)}</p>
              </div>
              <span className={styles.conditionPageNumber}>1 / 4</span>
            </header>
            <div className={styles.conditionWindLayout}>
              <Compass degrees={weather?.windDirectionDeg} />
              <div className={styles.conditionMetricGrid}>
                <MetricCard label="Vent moyen" icon="wind"><Value value={weather?.windKt} unit=" nds" /></MetricCard>
                <MetricCard label="Rafales" icon="gust"><Value value={weather?.gustKt} unit=" nds" /></MetricCard>
              </div>
            </div>
          </section>

          <section className={styles.conditionSlide} aria-label="Cellule 2 sur 4 : état de la mer et houle">
            <header className={styles.conditionSlideHeader}>
              <div><span className={styles.kicker}>MER ET HOULE</span><h2>{seaState}</h2></div>
              <span className={styles.conditionPageNumber}>2 / 4</span>
            </header>
            <div className={styles.conditionSeaLayout}>
              <SeaSketch level={seaSketchLevel} label={seaState} />
              <div className={styles.conditionMetricGrid}>
                <MetricCard label="Vagues" icon="wave" note={<DirectionLabel value={sea?.waveDirectionDeg} />}><Value value={sea?.waveHeightM} unit=" m" digits={1} /></MetricCard>
                <MetricCard label="Période vagues" icon="period"><Value value={sea?.wavePeriodS} unit=" s" digits={1} /></MetricCard>
                <MetricCard label="Houle" icon="swell" note={<DirectionLabel value={sea?.swellDirectionDeg} />}><Value value={sea?.swellHeightM} unit=" m" digits={1} /></MetricCard>
                <MetricCard label="Période houle" icon="period"><Value value={sea?.swellPeriodS} unit=" s" digits={1} /></MetricCard>
              </div>
            </div>
          </section>

          <section className={styles.conditionSlide} aria-label="Cellule 3 sur 4 : atmosphère et visibilité">
            <header className={styles.conditionSlideHeader}>
              <div><span className={styles.kicker}>ATMOSPHÈRE</span><h2>{weatherDescription(weather?.weatherCode)}</h2></div>
              <span className={styles.conditionPageNumber}>3 / 4</span>
            </header>
            <div className={styles.conditionAtmosphereLayout}>
              <div className={styles.weatherStamp}>
                <WeatherGlyph code={weather?.weatherCode} />
                <span>Observation</span>
                <strong>{formatTime(weather?.time ?? data.fetchedAt)}</strong>
              </div>
              <div className={styles.conditionMetricGrid}>
                <MetricCard label="Air" icon="air" note={weather?.apparentTemperatureC === null ? undefined : <>Ressenti <Value value={weather?.apparentTemperatureC} unit=" °C" /></>}><Value value={weather?.temperatureC} unit=" °C" /></MetricCard>
                <MetricCard label="Risque de pluie" icon="rain" note={<><Value value={weather?.precipitationMm} unit=" mm" digits={1} /></>}><Value value={weather?.precipitationProbabilityPct} unit=" %" /></MetricCard>
                <MetricCard label="Visibilité" icon="visibility"><Value value={weather?.visibilityM == null ? null : weather.visibilityM / 1000} unit=" km" digits={1} /></MetricCard>
                <MetricCard label="Pression" icon="pressure"><Value value={weather?.pressureHPa} unit=" hPa" /></MetricCard>
              </div>
            </div>
          </section>

          <section className={styles.conditionSlide} aria-label="Cellule 4 sur 4 : avis de Bosco">
            <header className={styles.conditionSlideHeader}>
              <div><span className={styles.kicker}>AVIS DE BOSCO · LECTURE SEULE</span><h2>{boscoResult.label}</h2></div>
              <span className={styles.conditionPageNumber}>4 / 4</span>
            </header>
            <div className={styles.conditionBoscoScore}>
              <div className={styles.conditionScoreMedallion}>
                <ConditionIcon name="signal" />
                <strong>{Number.isFinite(boscoResult.score) ? `${boscoResult.score.toFixed(1).replace(".", ",")}/10` : "—"}</strong>
                <span>Lecture nautique</span>
              </div>
              <div className={styles.conditionBoscoCopy}>
                <p>{boscoResult.summary.replace(/^\d+\.\d\/10 — /, "")}</p>
                {boscoResult.reasons.length ? (
                  <ul aria-label="Points ayant pesé dans l’avis de Bosco">
                    {boscoResult.reasons.slice(0, 3).map((reason) => <li key={reason}>{reason}</li>)}
                  </ul>
                ) : <span>Aucun signal particulier sur le créneau.</span>}
              </div>
            </div>
          </section>
        </div>

        <nav className={styles.conditionCarouselNav} aria-label="Choisir une cellule de conditions">
          {conditionPageLabels.map((label, index) => (
            <button
              key={label}
              type="button"
              className={index === activeConditionPage ? styles.conditionDotActive : ""}
              aria-label={`Afficher ${label}`}
              aria-current={index === activeConditionPage ? "page" : undefined}
              onClick={() => showConditionPage(index)}
            ><span aria-hidden="true" /></button>
          ))}
        </nav>
        <p className={styles.conditionSwipeHint}>Balaye horizontalement pour parcourir les conditions</p>
      </div>

      <ForecastDateNavigator dateKey={selectedDate} availableDates={availableDates} onChange={changeDate} />
      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div><span className={styles.kicker}>ÉVOLUTION HORAIRE</span><h2>Les prochaines heures</h2></div>
          <span className={styles.windowBadge}>heure locale</span>
        </div>
        <HourlyStrip forecasts={data.weather} dateKey={selectedDate} selectedTime={selectedTime} onSelect={setSelectedTime} />
      </section>

      <p className={styles.safetyNotice}>
        Prévisions indicatives Open-Meteo et DWD. Elles ne conviennent pas à la navigation côtière et ne remplacent ni carte marine, ni avis officiels.
      </p>
    </div>
  );
}

function TideChart({
  samples,
  events,
  currentTime,
}: {
  samples: TideSample[];
  events: TideEvent[];
  currentTime: string;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const ordered = useMemo(
    () => [...samples].sort((a, b) => Date.parse(a.time) - Date.parse(b.time)),
    [samples],
  );

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || ordered.length < 2) return;
    const selectedDate = ordered[0].time.slice(0, 10);
    const isToday = parisDateKey(new Date(currentTime)) === selectedDate;
    const centerMinute = isToday ? minuteOfDay(currentTime) : 12 * 60;
    const chartWidth = viewport.scrollWidth;
    const target = (centerMinute / (24 * 60)) * chartWidth - viewport.clientWidth / 2;
    viewport.scrollTo({ left: target, behavior: "auto" });
  }, [currentTime, ordered]);

  if (samples.length < 2) {
    return <p className={styles.empty}>Courbe de marée indisponible pour cette date.</p>;
  }
  const width = 720;
  const height = 300;
  const plot = { left: 48, right: 18, top: 20, bottom: 42 };
  const min = Math.min(...ordered.map((item) => item.heightM));
  const max = Math.max(...ordered.map((item) => item.heightM));
  const amplitude = Math.max(0.2, max - min);
  const x = (index: number) =>
    plot.left + (index / Math.max(1, ordered.length - 1)) * (width - plot.left - plot.right);
  const y = (value: number) =>
    plot.top + ((max - value) / amplitude) * (height - plot.top - plot.bottom);
  const line = ordered.map((item, index) => `${index ? "L" : "M"}${x(index)},${y(item.heightM)}`).join(" ");
  const baseline = height - plot.bottom;
  const area = `${line} L${x(ordered.length - 1)},${baseline} L${x(0)},${baseline} Z`;
  const currentIndex = ordered.reduce((best, item, index) =>
    Math.abs(Date.parse(item.time) - Date.parse(currentTime)) <
    Math.abs(Date.parse(ordered[best].time) - Date.parse(currentTime))
      ? index
      : best, 0);

  return (
    <div ref={viewportRef} className={styles.tideChartViewport} aria-label="Courbe de marée sur une fenêtre de douze heures, balayable vers le passé et le futur">
    <svg className={styles.tideChart} viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Courbe estimée du niveau marin par rapport au niveau moyen sur 24 heures">
      <defs>
        <linearGradient id="tide-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b9bc4" stopOpacity=".42" />
          <stop offset="1" stopColor="#2b9bc4" stopOpacity=".03" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3, 4].map((tick) => {
        const tickY = plot.top + (tick / 4) * (height - plot.top - plot.bottom);
        const value = max - (tick / 4) * amplitude;
        return (
          <g key={tick}>
            <path className={styles.gridLine} d={`M${plot.left} ${tickY}H${width - plot.right}`} />
            <text className={styles.axisText} x="4" y={tickY + 4}>{formatValue(value, 1)} m</text>
          </g>
        );
      })}
      {[0, 6, 12, 18, 24].map((hour) => (
        <text
          className={styles.axisText}
          key={hour}
          x={plot.left + (hour / 24) * (width - plot.left - plot.right)}
          y={height - 12}
          textAnchor={hour === 0 ? "start" : hour === 24 ? "end" : "middle"}
        >
          {String(hour).padStart(2, "0")} h
        </text>
      ))}
      <path className={styles.tideArea} d={area} />
      <path className={styles.tideLine} d={line} />
      {events.map((event) => {
        const index = ordered.findIndex((sample) => sample.time === event.time);
        if (index < 0) return null;
        return <circle key={`${event.type}-${event.time}`} className={styles.extremePoint} cx={x(index)} cy={y(event.heightM)} r="6" />;
      })}
      {parisDateKey(new Date(currentTime)) === ordered[0].time.slice(0, 10) ? (
        <g>
          <path className={styles.nowLine} d={`M${x(currentIndex)} ${plot.top}V${baseline}`} />
          <circle className={styles.nowPoint} cx={x(currentIndex)} cy={y(ordered[currentIndex].heightM)} r="7" />
          <text className={styles.nowLabel} x={x(currentIndex)} y={plot.top + 13} textAnchor="middle">maintenant</text>
        </g>
      ) : null}
    </svg>
    </div>
  );
}

function addDays(dateKey: string, days: number): string {
  const date = new Date(`${dateKey}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function durationLabel(minutes: number | null): string {
  if (minutes === null) return "Indisponible";
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  if (hours === 0) return `${remainder} min`;
  return `${hours} h ${String(remainder).padStart(2, "0")}`;
}

function TidesScreen({
  data,
  context,
  onBack,
  onChangePort,
}: {
  data: MarineDashboardData;
  context: NauticalContext;
  onBack: () => void;
  onChangePort: () => void;
}) {
  const availableDates = useMemo(
    () => [...new Set(data.tides.map((item) => item.time.slice(0, 10)))].sort(),
    [data.tides],
  );
  const today = parisDateKey();
  const initial = availableDates.includes(today) ? today : availableDates[0] ?? today;
  const [selectedDate, setSelectedDate] = useState(initial);
  const effectiveDate = availableDates.includes(selectedDate)
    ? selectedDate
    : availableDates[0] ?? selectedDate;

  const samples = data.tides.filter((item) => item.time.startsWith(effectiveDate));
  const events = deriveTideEvents(samples);
  const now = new Date().toISOString();
  const trend = effectiveDate === today ? tideTrendAt(samples, now) : null;
  const heightNow = effectiveDate === today ? interpolateHeight(samples, now) : null;
  const next = effectiveDate === today ? nextTideEvent(events, now) : events[0] ?? null;
  const remaining = next ? minutesUntil(next.time, now) : null;
  const dateIndex = availableDates.indexOf(effectiveDate);

  return (
    <div className={styles.page}>
      <ContextHeader title="MARÉES" context={context} onBack={onBack} onChangePort={onChangePort} />
      <section className={styles.dateNavigator}>
        <button
          aria-label="Afficher le jour précédent"
          disabled={dateIndex <= 0}
          onClick={() => setSelectedDate(availableDates[dateIndex - 1] ?? addDays(effectiveDate, -1))}
        >‹</button>
        <div>
          <span className={styles.kicker}>JOUR SÉLECTIONNÉ</span>
          <h2>{formatDate(effectiveDate)}</h2>
        </div>
        <button
          aria-label="Afficher le jour suivant"
          disabled={dateIndex < 0 || dateIndex >= availableDates.length - 1}
          onClick={() => setSelectedDate(availableDates[dateIndex + 1] ?? addDays(effectiveDate, 1))}
        >›</button>
      </section>

      <section className={styles.tidePanel}>
        <div className={styles.tideSummary}>
          <div>
            <span>Niveau estimé · réf. MSL</span>
            <strong><Value value={heightNow} unit=" m" digits={1} /></strong>
          </div>
          <div>
            <span>Tendance</span>
            <strong>
              {trend === "rising" ? "↗ Marée montante" : trend === "falling" ? "↘ Marée descendante" : trend === "slack" ? "≈ Étale" : "Prévision du jour"}
            </strong>
          </div>
          <div>
            <span>Prochaine étale</span>
            <strong>{next ? `${next.type === "high" ? "Pleine mer" : "Basse mer"} · ${formatTime(next.time)}` : "Indisponible"}</strong>
            <small>{next && effectiveDate === today ? `dans ${durationLabel(remaining)}` : ""}</small>
          </div>
        </div>
        <TideChart samples={samples} events={events} currentTime={now} />
        <p className={styles.indicative}>
          Estimation depuis le point de grille Open-Meteo Marine aux coordonnées de {data.location.name} · référence MSL · pas une station officielle.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.kicker}>ÉTALES</span>
            <h2>Horaires du jour</h2>
          </div>
          <span className={styles.updated}>heure locale</span>
        </div>
        {events.length ? (
          <div className={styles.tideEvents}>
            {events.map((event) => (
              <article key={`${event.type}-${event.time}`}>
                <span className={event.type === "high" ? styles.highTide : styles.lowTide} aria-hidden="true">
                  {event.type === "high" ? "●" : "○"}
                </span>
                <div>
                  <span>{event.type === "high" ? "Pleine mer" : "Basse mer"}</span>
                  <strong>{formatTime(event.time)}</strong>
                </div>
                <b><Value value={event.heightM} unit=" m" digits={1} /></b>
              </article>
            ))}
          </div>
        ) : (
          <p className={styles.empty}>Aucune étale fiable détectée pour cette date.</p>
        )}
      </section>
      <p className={styles.safetyNotice}>
        La hauteur MSL tient compte des marées mais sa précision est limitée près des côtes. Données non adaptées à la navigation côtière.
      </p>
    </div>
  );
}

export function MarineDashboard({
  activeScreen,
  onNavigate,
  onData,
  location,
  nauticalContext,
  boscoResult,
  enabled = true,
}: Props) {
  const [data, setData] = useState<MarineDashboardData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hasRequested = useRef(false);
  const refreshInFlight = useRef(false);
  const lastRefreshAttempt = useRef(0);
  const requestRef = useRef<AbortController | null>(null);

  const refresh = useCallback(async () => {
    if (refreshInFlight.current) return;
    const controller = new AbortController();
    requestRef.current = controller;
    refreshInFlight.current = true;
    lastRefreshAttempt.current = Date.now();
    setLoading(true);
    setError(null);
    try {
      const fresh = await fetchMarineDashboard(location, controller.signal);
      setData(fresh);
    } catch (caught) {
      if (controller.signal.aborted) return;
      const cached = await readMarineCache(location);
      if (cached) setData(cached);
      setError(
        caught instanceof Error
          ? caught.message
          : "Erreur temporaire lors de la relève.",
      );
    } finally {
      setLoading(false);
      refreshInFlight.current = false;
    }
  }, [location]);

  useEffect(() => {
    requestRef.current?.abort();
    refreshInFlight.current = false;
    hasRequested.current = false;
    const reset = window.setTimeout(() => {
      setData(null);
      setError(null);
    }, 0);
    return () => {
      window.clearTimeout(reset);
      requestRef.current?.abort();
    };
  }, [location]);

  useEffect(() => {
    if (!enabled || loading || hasRequested.current) return;
    if (data && data.location.id === location.id && !data.cached && !data.stale) return;
    hasRequested.current = true;
    void readMarineCache(location).then((cached) => {
      if (cached) setData(cached);
      void refresh();
    });
  }, [data, enabled, loading, location, refresh]);

  useEffect(() => {
    const refreshIfStale = () => {
      if (Date.now() - lastRefreshAttempt.current >= 60_000) {
        void refresh();
      }
    };
    if (!enabled) return;
    const interval = window.setInterval(() => void refresh(), 15 * 60_000);
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") refreshIfStale();
    };
    window.addEventListener("focus", refreshIfStale);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      window.clearInterval(interval);
      window.removeEventListener("focus", refreshIfStale);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [enabled, refresh]);

  useEffect(() => {
    if (data) onData?.(data);
  }, [data, onData]);

  if (!activeScreen) return null;

  const close = () => onNavigate(null);
  const changePort = () => onNavigate("map");
  return (
    <section className={styles.dashboard} aria-label="Consultation météo et marine">
      <div className={styles.scrollArea}>
        {loading && !data ? (
          <LoadingScreen onBack={close} locationName={location.name} />
        ) : null}
        {!loading && !data ? (
          <div className={styles.page}>
            <PageHeader title="Relevés indisponibles" subtitle={location.name} onBack={close} />
            <DataNotice data={data} error={error} onRetry={() => void refresh()} />
          </div>
        ) : null}
        {data && activeScreen === "weather" ? (
          <WeatherScreen data={data} onBack={close} onNavigate={onNavigate} />
        ) : null}
        {data && activeScreen === "sea" ? (
          <SeaScreen data={data} onBack={close} onNavigate={onNavigate} />
        ) : null}
        {data && activeScreen === "conditions" ? (
          <ConditionsScreen
            data={data}
            context={nauticalContext}
            boscoResult={boscoResult}
            onBack={close}
            onChangePort={changePort}
          />
        ) : null}
        {data && activeScreen === "tides" ? (
          <TidesScreen data={data} context={nauticalContext} onBack={close} onChangePort={changePort} />
        ) : null}
        {data ? <DataNotice data={data} error={error} onRetry={() => void refresh()} /> : null}
      </div>
    </section>
  );
}
