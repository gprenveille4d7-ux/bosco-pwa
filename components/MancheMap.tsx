"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MANCHE_PORTS, type ManchePort } from "@/data/manche-ports";
import {
  MANCHE_DEPARTMENT_PATH,
  MANCHE_MAP_VIEWBOX,
  projectMancheCoordinates,
} from "@/data/manche-map-geometry";
import {
  currentWeather,
  fetchMarineDashboard,
  nearestSea,
  type MarineDashboardData,
} from "@/lib/marine-data";
import {
  classifySeaState,
  interpolateHeight,
  tideTrendAt,
} from "@/lib/marine-math.mjs";
import { deriveNauticalContext, formatNauticalMiles, formatTravelTime } from "@/lib/v24/nautical";
import styles from "./MancheMap.module.css";

type Props = {
  selectedPort: ManchePort;
  homePort: ManchePort;
  selectedData: MarineDashboardData | null;
  onChoosePort: (port: ManchePort, data: MarineDashboardData | null) => void;
  onListenToBosco: (port: ManchePort, data: MarineDashboardData | null) => void;
};

type PortTone = "green" | "yellow" | "orange" | "red" | "gray";

function seaTone(data: MarineDashboardData | null): PortTone {
  if (!data) return "gray";
  const weather = currentWeather(data);
  const sea = nearestSea(data);
  const wave = sea?.waveHeightM;
  const gust = weather?.gustKt;
  if (typeof wave !== "number") return "gray";
  if (wave >= 4 || (typeof gust === "number" && gust >= 30)) return "red";
  if (wave >= 2.5 || (typeof gust === "number" && gust >= 24)) return "orange";
  if (wave >= 1.25 || (typeof gust === "number" && gust >= 18)) return "yellow";
  return "green";
}

function format(value: number | null | undefined, digits = 1): string {
  if (typeof value !== "number" || !Number.isFinite(value)) return "Indisponible";
  return new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

function tideLabel(data: MarineDashboardData | null): string {
  if (!data) return "Indisponible";
  const now = new Date().toISOString();
  const trend = tideTrendAt(data.tides, now);
  const height = interpolateHeight(data.tides, now);
  const label =
    trend === "rising" ? "Montante" : trend === "falling" ? "Descendante" : trend === "slack" ? "Étale" : null;
  return label && typeof height === "number"
    ? `${label} · ${format(height)} m`
    : "Indisponible";
}

export function MancheMap({ selectedPort, homePort, selectedData, onChoosePort, onListenToBosco }: Props) {
  const [preview, setPreview] = useState<ManchePort>(selectedPort);
  const [datasets, setDatasets] = useState<Record<string, MarineDashboardData>>({});
  const [loadingPort, setLoadingPort] = useState<string | null>(null);
  const [errorPort, setErrorPort] = useState<string | null>(null);
  const requestRef = useRef<AbortController | null>(null);

  useEffect(() => () => requestRef.current?.abort(), []);

  const previewData =
    datasets[preview.id] ??
    (selectedData?.location.id === preview.id ? selectedData : null);
  const previewWeather = previewData ? currentWeather(previewData) : null;
  const previewSea = previewData ? nearestSea(previewData) : null;
  const previewTone = seaTone(previewData);
  const selectedIsPreview = preview.id === selectedPort.id;
  const previewNavigation = useMemo(
    () => deriveNauticalContext(homePort, preview),
    [homePort, preview],
  );

  const toneLabels = useMemo<Record<PortTone, string>>(
    () => ({
      green: "Mer belle",
      yellow: "Mer peu agitée",
      orange: "Mer agitée",
      red: "Conditions difficiles",
      gray: "Indisponible",
    }),
    [],
  );

  const openPort = (port: ManchePort) => {
    setPreview(port);
    setErrorPort(null);
    if (datasets[port.id] || selectedData?.location.id === port.id) return;
    requestRef.current?.abort();
    const controller = new AbortController();
    requestRef.current = controller;
    setLoadingPort(port.id);
    void fetchMarineDashboard(port, controller.signal)
      .then((data) => {
        setDatasets((current) => ({ ...current, [port.id]: data }));
      })
      .catch((error) => {
        if (controller.signal.aborted) return;
        setErrorPort(port.id);
        console.error(`[Bosco carte] Relevé indisponible pour ${port.name}`, error);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoadingPort(null);
      });
  };

  return (
    <section className={styles.mapCard} aria-label="Carte interactive des ports de la Manche">
      <header className={styles.heading}>
        <div>
          <span>CARTE MARINE LOCALE</span>
          <h1>LA MANCHE</h1>
        </div>
        <div className={styles.portPicker}>
          <small>Port d’attache · {homePort.name}</small>
          <select
            aria-label="Choisir un lieu sur la carte"
            value={preview.id}
            onChange={(event) => {
              const port = MANCHE_PORTS.find((item) => item.id === event.target.value);
              if (port) openPort(port);
            }}
          >
            {MANCHE_PORTS.filter((port) => port.status === "active" && port.activePortAllowed).map((port) => (
              <option key={port.id} value={port.id}>{port.name}</option>
            ))}
          </select>
        </div>
      </header>

      <div className={styles.mapViewport}>
        <svg
          className={styles.mapSvg}
          viewBox={`0 0 ${MANCHE_MAP_VIEWBOX.width} ${MANCHE_MAP_VIEWBOX.height}`}
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-labelledby="manche-map-title manche-map-description"
        >
          <title id="manche-map-title">Carte interactive du département de la Manche</title>
          <desc id="manche-map-description">
            Contour officiel IGN et ports positionnés depuis leurs coordonnées GPS.
          </desc>
          <defs>
            <linearGradient id="manche-sea" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#78909a" />
              <stop offset=".55" stopColor="#526d78" />
              <stop offset="1" stopColor="#314b57" />
            </linearGradient>
            <radialGradient id="manche-paper" cx=".42" cy=".35" r=".82">
              <stop offset="0" stopColor="#e0cb9d" />
              <stop offset=".7" stopColor="#b99b68" />
              <stop offset="1" stopColor="#8d6a41" />
            </radialGradient>
            <pattern
              id="manche-waves"
              width="54"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M2 18c9-8 18-8 27 0s18 8 27 0"
                fill="none"
                stroke="#e1d4ad"
                strokeWidth="1.5"
                opacity=".12"
              />
            </pattern>
            <filter id="manche-paper-grain" x="-6%" y="-6%" width="112%" height="112%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency=".028"
                numOctaves="3"
                seed="17"
                result="noise"
              />
              <feColorMatrix
                in="noise"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 .13 0"
              />
              <feBlend in="SourceGraphic" mode="multiply" />
            </filter>
            <path id="manche-department-path" d={MANCHE_DEPARTMENT_PATH} />
          </defs>

          <rect width="700" height="900" rx="28" fill="url(#manche-sea)" />
          <rect width="700" height="900" rx="28" fill="url(#manche-waves)" />
          <g aria-label="Contour géographique officiel de la Manche">
            <use
              href="#manche-department-path"
              fill="#252116"
              opacity=".2"
              transform="translate(5 7)"
            />
            <use
              href="#manche-department-path"
              fill="url(#manche-paper)"
              stroke="#523b24"
              strokeWidth="5"
              strokeLinejoin="round"
              filter="url(#manche-paper-grain)"
            />
            <use
              href="#manche-department-path"
              fill="none"
              stroke="#e1cb97"
              strokeWidth="1.4"
              strokeLinejoin="round"
              opacity=".7"
            />
          </g>

          <g className={styles.engraving} aria-hidden="true">
            <path d="M167 189c58 16 109 14 154-7M204 361c55 16 105 13 149-8M247 626c64 17 126 11 184-16" />
            <path d="M587 476c34-12 65-12 94 0M584 501c29-10 57-10 84 0M15 683c31-12 60-12 87 0" />
          </g>

          <g className={styles.cartographyLabels} aria-hidden="true">
            <text x="276" y="188" transform="rotate(-7 276 188)">Cotentin</text>
            <text x="469" y="538" transform="rotate(-82 469 538)">Baie des Veys</text>
            <text x="298" y="872">Baie du Mont-Saint-Michel</text>
            <text x="71" y="617">Chausey</text>
            <text x="376" y="126">Tatihou</text>
            <text x="604" y="405" className={styles.seaLabel}>La Manche</text>
          </g>

          <g
            className={styles.compass}
            transform="translate(624 117)"
            aria-hidden="true"
          >
            <circle r="48" />
            <circle r="12" />
            <path d="M0-64 11-15 0-7-11-15zM64 0 15 11 7 0 15-11zM0 64-11 15 0 7 11 15zM-64 0-15-11-7 0-15 11z" />
            <path d="M0-43V43M-43 0H43M-30-30l60 60M30-30l-60 60" />
            <text x="0" y="-71">N</text>
          </g>

          <g aria-label="Ports de la Manche">
            {MANCHE_PORTS.map((port) => {
              const data =
                datasets[port.id] ??
                (selectedData?.location.id === port.id ? selectedData : null);
              const tone = seaTone(data);
              const point = projectMancheCoordinates(port.latitude, port.longitude);
              const isPreviewed = preview.id === port.id;
              const isSelected = selectedPort.id === port.id;
              return (
                <g
                  key={port.id}
                  id={`map-port-${port.id}`}
                  className={`${styles.portMarker} ${styles[tone]} ${
                    isPreviewed ? styles.previewed : ""
                  } ${isSelected ? styles.selected : ""}`}
                  transform={`translate(${point.x.toFixed(2)} ${point.y.toFixed(2)})`}
                  role="button"
                  tabIndex={0}
                  aria-label={`${port.name} · ${toneLabels[tone]}`}
                  aria-pressed={isPreviewed}
                  onClick={() => openPort(port)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openPort(port);
                    }
                  }}
                >
                  <title>{`${port.name} · ${toneLabels[tone]}`}</title>
                  <circle className={styles.hitTarget} r="24" />
                  <circle className={styles.portHalo} r="12" />
                  <circle className={styles.portDot} r="5.5" />
                </g>
              );
            })}
          </g>

          <rect
            x="8"
            y="8"
            width="684"
            height="884"
            rx="22"
            fill="none"
            stroke="#ddc58f"
            strokeWidth="2"
            opacity=".5"
            aria-hidden="true"
          />
          <text className={styles.sourceLabel} x="18" y="882" aria-hidden="true">
            Tracé IGN · ADMIN EXPRESS COG · Licence Ouverte
          </text>
        </svg>

        <aside className={styles.portCard} aria-live="polite">
          <div className={styles.portTitle}>
            <div>
              <span className={`${styles.statusDot} ${styles[previewTone]}`} />
              <strong>{preview.name}</strong>
            </div>
            {selectedIsPreview ? <small>Port actuel</small> : null}
          </div>
          <dl>
            <div>
              <dt>Distance directe</dt>
              <dd>{preview.id === homePort.id ? "Port d’attache" : formatNauticalMiles(previewNavigation.distanceNauticalMiles)}</dd>
            </div>
            <div>
              <dt>Cap indicatif</dt>
              <dd>{preview.id === homePort.id ? "—" : `${Math.round(previewNavigation.bearingDegrees)}° · ${previewNavigation.bearingLong}`}</dd>
            </div>
            <div>
              <dt>État de la mer</dt>
              <dd>
                {loadingPort === preview.id
                  ? "Relève…"
                  : errorPort === preview.id
                    ? "Indisponible"
                    : previewData
                      ? classifySeaState(previewSea?.waveHeightM) ?? "Indisponible"
                      : toneLabels[previewTone]}
              </dd>
            </div>
            <div>
              <dt>Houle</dt>
              <dd>{previewData ? `${format(previewSea?.swellHeightM)} m` : "Indisponible"}</dd>
            </div>
            <div>
              <dt>Vent</dt>
              <dd>
                {previewData
                  ? `${format(previewWeather?.windKt, 0)} nds · raf. ${format(previewWeather?.gustKt, 0)}`
                  : "Indisponible"}
              </dd>
            </div>
            <div>
              <dt>Marée</dt>
              <dd>{tideLabel(previewData)}</dd>
            </div>
          </dl>
          {preview.id !== homePort.id ? (
            <div className={styles.travelTimes} aria-label="Temps théoriques en ligne directe">
              <span>Voilier 5 nds · {formatTravelTime(previewNavigation.travelHours.sailboat)}</span>
              <span>Semi-rigide 15 nds · {formatTravelTime(previewNavigation.travelHours.rib)}</span>
              <span>Vedette 20 nds · {formatTravelTime(previewNavigation.travelHours.motorboat)}</span>
            </div>
          ) : null}
          <div className={styles.portActions}>
            <button
              type="button"
              className={styles.chooseButton}
              disabled={loadingPort === preview.id}
              onClick={() => onChoosePort(preview, previewData)}
            >
              <strong>{selectedIsPreview ? "Voir l’avis de navigabilité" : "Choisir ce port"}</strong>
              <span>Conditions et score de navigation</span>
            </button>
            <button
              type="button"
              className={`${styles.chooseButton} ${styles.storyButton}`}
              disabled={loadingPort === preview.id}
              onClick={() => onListenToBosco(preview, previewData)}
            >
              <strong>Écouter Bosco</strong>
              <span>Découvrir une histoire de ce port</span>
            </button>
          </div>
          <p className={styles.indicative}>Distance géodésique et cap indicatif, sans calcul de route navigable.</p>
        </aside>
      </div>
    </section>
  );
}
