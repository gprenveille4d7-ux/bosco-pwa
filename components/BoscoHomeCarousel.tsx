"use client";

import {
  KeyboardEvent,
  ReactNode,
  UIEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { BoscoResult, BoscoWeatherInput } from "@/lib/bosco-engine";
import type { V26PortVisit } from "@/data/narrative-v26";
import { degreesToCardinal, weatherDescription } from "@/lib/marine-math.mjs";
import styles from "./BoscoHomeCarousel.module.css";

const SLIDE_TABS = [
  { label: "Bosco", short: "Bosco", icon: "♧" },
  { label: "Briefing", short: "Brief.", icon: "≣" },
  { label: "Score", short: "Score", icon: "◉" },
  { label: "Conseils", short: "Conseil", icon: "⚓" },
  { label: "Vigilances", short: "Alertes", icon: "!" },
] as const;
const SLIDE_COUNT = SLIDE_TABS.length;
const ACTIVE_SLIDE_KEY = "bosco:home-slide:v1";

type Props = {
  active: boolean;
  scene: ReactNode;
  message: string;
  result: BoscoResult;
  input: BoscoWeatherInput;
  onRecordOuting: () => void;
  narrative: V26PortVisit | null;
  onOpenEmile: () => void;
  onExitStory: () => void;
  onBackToPort: () => void;
  resetToken: number;
};

type Metric = {
  label: string;
  value: string;
  note?: string;
};

function formatNumber(
  value: number | null | undefined,
  digits = 0,
  unit = "",
): string {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return "Indisponible";
  }
  const formatted = new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
  return unit ? `${formatted} ${unit}` : formatted;
}

function direction(value: number | null | undefined): string {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return "Indisponible";
  }
  const cardinal = degreesToCardinal(value);
  return cardinal ? `${cardinal.short} · ${Math.round(value)}°` : "Indisponible";
}

function tideTrend(value: BoscoWeatherInput["tide"]["trend"] | undefined): string {
  if (value === "rising") return "Montante";
  if (value === "falling") return "Descendante";
  if (value === "slack") return "Étale";
  return "Indisponible";
}

function meaningfulReasons(result: BoscoResult): string[] {
  return result.reasons.filter(
    (reason) =>
      !reason.startsWith("Sécurité ") &&
      !reason.startsWith("Confiance ") &&
      !reason.startsWith("Facteur de rafale ") &&
      !reason.startsWith("Dimension la plus faible "),
  );
}

export function BoscoHomeCarousel({
  active,
  scene,
  message,
  result,
  input,
  onRecordOuting,
  narrative,
  onOpenEmile,
  onExitStory,
  onBackToPort,
  resetToken,
}: Props) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const programmaticTargetRef = useRef<number | null>(null);
  const [page, setPage] = useState(() => {
    if (typeof window === "undefined") return 0;
    try {
      const saved = Number(window.sessionStorage.getItem(ACTIVE_SLIDE_KEY));
      return Number.isInteger(saved) && saved >= 0 && saved < SLIDE_COUNT
        ? saved
        : 0;
    } catch {
      return 0;
    }
  });
  const hasMeasuredData =
    input.data.status === "complete" || input.data.status === "partial";

  const briefing = useMemo<Metric[]>(
    () => [
      {
        label: "Température",
        value: formatNumber(
          hasMeasuredData ? input.weather?.temperatureC : undefined,
          0,
          "°C",
        ),
        note: hasMeasuredData
          ? weatherDescription(input.weather?.wmoCode)
          : "Indisponible",
      },
      {
        label: "Vent moyen",
        value: formatNumber(
          hasMeasuredData ? input.wind?.meanKt : undefined,
          0,
          "nds",
        ),
        note: direction(
          hasMeasuredData ? input.wind?.directionDeg : undefined,
        ),
      },
      {
        label: "Rafales",
        value: formatNumber(
          hasMeasuredData ? input.wind?.gustKt : undefined,
          0,
          "nds",
        ),
      },
      {
        label: "État de mer",
        value: formatNumber(
          hasMeasuredData ? input.sea?.waveHeightM : undefined,
          1,
          "m",
        ),
        note:
          formatNumber(
            hasMeasuredData ? input.sea?.wavePeriodS : undefined,
            0,
          ) === "Indisponible"
            ? "Période indisponible"
            : `Période ${formatNumber(
                hasMeasuredData ? input.sea?.wavePeriodS : undefined,
                0,
                "s",
              )}`,
      },
      {
        label: "Marée",
        value: tideTrend(hasMeasuredData ? input.tide?.trend : undefined),
        note:
          hasMeasuredData &&
          (input.tide?.highWaterAt || input.tide?.lowWaterAt)
            ? `PM ${input.tide.highWaterAt || "Indisponible"} · BM ${
                input.tide.lowWaterAt || "Indisponible"
              }`
            : "Horaires indisponibles",
      },
      {
        label: "Évolution",
        value:
          hasMeasuredData &&
          typeof input.trend?.windKt3h === "number" &&
          Number.isFinite(input.trend.windKt3h)
            ? input.trend.windKt3h > 0
              ? `Vent +${formatNumber(input.trend.windKt3h, 0, "nds")}`
              : input.trend.windKt3h < 0
                ? `Vent ${formatNumber(input.trend.windKt3h, 0, "nds")}`
                : "Vent stable"
            : "Indisponible",
      },
    ],
    [hasMeasuredData, input],
  );

  const vigilanceReasons = useMemo(() => meaningfulReasons(result), [result]);
  const scoreReasons = useMemo(() => result.reasons.slice(0, 4), [result.reasons]);

  const persistPage = useCallback((nextPage: number) => {
    try {
      window.sessionStorage.setItem(ACTIVE_SLIDE_KEY, String(nextPage));
    } catch {
      // The active page remains available for this render if storage is blocked.
    }
  }, []);

  const goTo = useCallback(
    (nextPage: number, behavior: ScrollBehavior = "smooth") => {
      const clamped = Math.max(0, Math.min(SLIDE_COUNT - 1, nextPage));
      const viewport = viewportRef.current;
      if (!viewport) return;
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      programmaticTargetRef.current = clamped;
      viewport.scrollTo({
        left: clamped * viewport.clientWidth,
        behavior: reducedMotion ? "auto" : behavior,
      });
      setPage(clamped);
      persistPage(clamped);
    },
    [persistPage],
  );

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const saved = Number(window.sessionStorage.getItem(ACTIVE_SLIDE_KEY));
        if (Number.isInteger(saved) && saved >= 0 && saved < SLIDE_COUNT) {
          setPage(saved);
          goTo(saved, "auto");
        }
      } catch {
        // Page zero is the safe fallback.
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [goTo]);

  useEffect(() => {
    if (!active) return;
    const frame = window.requestAnimationFrame(() => goTo(0, "auto"));
    return () => window.cancelAnimationFrame(frame);
  }, [active, goTo, resetToken]);

  useEffect(() => {
    if (!active) return;
    document.documentElement.classList.add(styles.viewportLocked);
    document.body.classList.add(styles.viewportLocked);
    return () => {
      document.documentElement.classList.remove(styles.viewportLocked);
      document.body.classList.remove(styles.viewportLocked);
    };
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const viewport = viewportRef.current;
    if (!viewport) return;
    const realign = () => goTo(page, "auto");
    realign();
    const observer = new ResizeObserver(realign);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [active, goTo, page]);

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const viewport = event.currentTarget;
    if (viewport.clientWidth === 0) return;
    if (programmaticTargetRef.current !== null) {
      const targetLeft = programmaticTargetRef.current * viewport.clientWidth;
      if (Math.abs(viewport.scrollLeft - targetLeft) <= 1) {
        programmaticTargetRef.current = null;
      }
      return;
    }
    const nextPage = Math.max(
      0,
      Math.min(
        SLIDE_COUNT - 1,
        Math.round(viewport.scrollLeft / viewport.clientWidth),
      ),
    );
    if (nextPage !== page) {
      setPage(nextPage);
      persistPage(nextPage);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(page - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(page + 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(SLIDE_COUNT - 1);
    }
  };

  const slideLabel = `${page + 1} sur ${SLIDE_COUNT}`;

  return (
    <section
      className={styles.homeMain}
      data-active={active ? "true" : "false"}
      data-testid="bosco-home-carousel"
      aria-roledescription="carrousel"
      aria-label="Accueil de Bosco"
    >
      <div
        ref={viewportRef}
        className={styles.viewport}
        tabIndex={0}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        aria-label="Parcourir les cinq pages de l’accueil"
      >
        <article
          className={`${styles.slide} ${styles.boscoSlide}`}
          data-narrative={narrative?.phase === "story" ? "true" : "false"}
          data-home-slide="Bosco"
          aria-label="Bosco, 1 sur 5"
        >
          <div className={styles.sceneFrame}>
            <div className={styles.sceneSurface}>{scene}</div>
          </div>
          {narrative?.phase === "story" ? (
            <section className={styles.storyCard} aria-label={`Histoire de Bosco à ${narrative.portName}`}>
              {narrative.story ? (
                <>
                  <div className={styles.storyMain}>
                    <header className={styles.storyHeader}>
                      <div>
                        <span className={styles.eyebrow}>LES VOIX DU LARGE · {narrative.portName.toUpperCase()}</span>
                        <strong>Légende {narrative.storyIndex + 1} sur {narrative.storyCount}</strong>
                      </div>
                      <button type="button" className={styles.emileShortcut} onClick={onOpenEmile}>
                        📖 Carnet d’Émile
                      </button>
                    </header>
                    <h1>{narrative.story.title}</h1>
                    <div className={styles.storyText}>
                      <p>{narrative.story.text}</p>
                    </div>
                  </div>
                  <aside className={styles.storyAside}>
                    <span className={styles.eyebrow}>BOSCO AJOUTE</span>
                    <p>{narrative.invitation}</p>
                    <button type="button" className={styles.emileButton} onClick={onOpenEmile}>
                      📖 Ouvrir le carnet d’Émile
                    </button>
                    <button type="button" className={styles.storyReturnButton} onClick={onExitStory}>
                      Retour à l’avis de navigabilité
                    </button>
                    <button type="button" className={styles.storyReturnButton} onClick={onBackToPort}>
                      Retour à la fiche du port
                    </button>
                  </aside>
                </>
              ) : (
                <div className={styles.storyMain}>
                  <span className={styles.eyebrow}>LES VOIX DU LARGE · {narrative.portName.toUpperCase()}</span>
                  <h1>Le récit n’est pas encore arrivé au comptoir</h1>
                  <p>Doucement, matelot. Les places sont prêtes pour ce port, mais je ne vais pas t’inventer une histoire à la va-vite.</p>
                  <button type="button" className={styles.storyReturnButton} onClick={onExitStory}>Retour à l’avis de navigabilité</button>
                </div>
              )}
            </section>
          ) : (
            <div className={styles.boscoMessage}>
              <div>
                <span className={styles.eyebrow}>LE MOT DE BOSCO</span>
                <strong>{result.label}</strong>
              </div>
              <blockquote>« {message} »</blockquote>
            </div>
          )}
        </article>

        <article
          className={styles.slide}
          data-home-slide="Briefing"
          aria-label="Briefing, 2 sur 5"
        >
          <div className={styles.contentPanel}>
            <header className={styles.panelHeader}>
              <div>
                <span className={styles.eyebrow}>CONDITIONS ACTUELLES</span>
                <h1>BRIEFING</h1>
              </div>
              <span className={styles.decisionPill}>{result.label}</span>
            </header>
            <p className={styles.lead}>
              {result.summary.replace(/^\d+\.\d\/10 — /, "")}
            </p>
            <div className={styles.metricGrid}>
              {briefing.map((metric) => (
                <div key={metric.label} className={styles.metric}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                  {metric.note ? <small>{metric.note}</small> : null}
                </div>
              ))}
            </div>
          </div>
        </article>

        <article
          className={styles.slide}
          data-home-slide="Score Bosco"
          aria-label="Score Bosco, 3 sur 5"
        >
          <div className={styles.contentPanel}>
            <header className={styles.panelHeader}>
              <div>
                <span className={styles.eyebrow}>DÉCISION ACTUELLE</span>
                <h1>SCORE BOSCO</h1>
              </div>
              <span className={styles.decisionPill}>{result.label}</span>
            </header>
            {result.decision !== "decision-unavailable" &&
            Number.isFinite(result.score) ? (
              <div className={styles.scoreLayout}>
                <div className={styles.scoreDial} aria-label={`${result.score} sur 10`}>
                  <strong>{formatNumber(result.score, 1)}</strong>
                  <span>/10</span>
                </div>
                <div>
                  <span className={styles.eyebrow}>
                    CONFIANCE {Math.round(result.confidence * 100)} %
                  </span>
                  <p>{result.summary.replace(/^\d+\.\d\/10 — /, "")}</p>
                </div>
              </div>
            ) : (
              <p className={styles.unavailable}>Score indisponible</p>
            )}
            <ul className={styles.factorList}>
              {scoreReasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>
        </article>

        <article
          className={styles.slide}
          data-home-slide="Conseils"
          aria-label="Conseils, 4 sur 5"
        >
          <div className={styles.contentPanel}>
            <header className={styles.panelHeader}>
              <div>
                <span className={styles.eyebrow}>AVIS DU VIEUX MARIN</span>
                <h1>CONSEILS</h1>
              </div>
              <span className={styles.decisionPill}>{result.label}</span>
            </header>
            <div className={styles.adviceCard}>
              <span>Conseil lié à la décision actuelle</span>
              <blockquote>« {result.dialogue} »</blockquote>
            </div>
            <div className={styles.adviceSummary}>
              <span>Cap à tenir</span>
              <p>{result.summary.replace(/^\d+\.\d\/10 — /, "")}</p>
            </div>
            <button
              type="button"
              className={styles.journalButton}
              onClick={onRecordOuting}
            >
              Ajouter au journal de bord
            </button>
          </div>
        </article>

        <article
          className={styles.slide}
          data-home-slide="Vigilances"
          aria-label="Vigilances, 5 sur 5"
        >
          <div className={styles.contentPanel}>
            <header className={styles.panelHeader}>
              <div>
                <span className={styles.eyebrow}>POINTS À SURVEILLER</span>
                <h1>VIGILANCES</h1>
              </div>
              <span className={styles.decisionPill}>{result.label}</span>
            </header>
            {vigilanceReasons.length ? (
              <ul className={styles.vigilanceList}>
                {vigilanceReasons.slice(0, 5).map((reason) => (
                  <li key={reason}>
                    <span aria-hidden="true">!</span>
                    <p>{reason}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className={styles.allClear}>
                <span aria-hidden="true">✓</span>
                <p>
                  Aucune vigilance particulière détectée sur le créneau
                  analysé.
                </p>
              </div>
            )}
          </div>
        </article>
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrow}
          aria-label="Cellule précédente"
          disabled={page === 0}
          onClick={() => goTo(page - 1)}
        >
          ‹
        </button>
        <div className={styles.indicators} aria-label={`Page ${slideLabel}`}>
          {SLIDE_TABS.map((tab, index) => (
            <button
              type="button"
              key={tab.label}
              className={page === index ? styles.activeIndicator : ""}
              aria-label={`Afficher ${tab.label}`}
              aria-current={page === index ? "page" : undefined}
              onClick={() => goTo(index)}
            >
              <span aria-hidden="true">{tab.icon}</span>
              <small>{tab.short}</small>
            </button>
          ))}
        </div>
        <button
          type="button"
          className={styles.arrow}
          aria-label="Cellule suivante"
          disabled={page === SLIDE_COUNT - 1}
          onClick={() => goTo(page + 1)}
        >
          ›
        </button>
      </div>
      <span className={styles.livePage} aria-live="polite">
        {slideLabel}
      </span>
    </section>
  );
}
