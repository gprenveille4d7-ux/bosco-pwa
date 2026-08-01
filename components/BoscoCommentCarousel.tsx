"use client";

import {
  CSSProperties,
  KeyboardEvent,
  UIEvent,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { BoscoResult, BoscoWeatherInput } from "@/lib/bosco-engine";
import { degreesToCardinal, weatherDescription } from "@/lib/marine-math.mjs";
import styles from "./BoscoShellExtensions.module.css";

type Props = {
  message: string;
  result: BoscoResult;
  input: BoscoWeatherInput;
  onDetails: () => void;
};

function finite(value: number | null | undefined, digits = 0): string {
  if (typeof value !== "number" || !Number.isFinite(value)) return "Indisponible";
  return new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

function directionLabel(value: number | null | undefined): string {
  const cardinal = degreesToCardinal(value);
  if (!cardinal || typeof value !== "number" || !Number.isFinite(value)) {
    return "Indisponible";
  }
  return `${cardinal.short} · ${Math.round(value)}°`;
}

function tideLabel(input: BoscoWeatherInput): string {
  if (!input.tide?.trend) return "Indisponible";
  const trend =
    input.tide.trend === "rising"
      ? "Montante"
      : input.tide.trend === "falling"
        ? "Descendante"
        : "Étale";
  const reference = input.data?.targetAt
    ? new Date(input.data.targetAt)
    : new Date();
  const referenceMinutes = reference.getHours() * 60 + reference.getMinutes();
  const events = [
    { label: "PM", time: input.tide.highWaterAt },
    { label: "BM", time: input.tide.lowWaterAt },
  ]
    .filter(
      (event): event is { label: string; time: string } =>
        typeof event.time === "string" && /^\d{2}:\d{2}$/.test(event.time),
    )
    .map((event) => {
      const [hours, minutes] = event.time.split(":").map(Number);
      const eventMinutes = hours * 60 + minutes;
      return {
        ...event,
        distance:
          eventMinutes >= referenceMinutes
            ? eventMinutes - referenceMinutes
            : eventMinutes + 24 * 60 - referenceMinutes,
      };
    })
    .sort((a, b) => a.distance - b.distance);
  const next = events[0];
  return next ? `${trend} · ${next.label} ${next.time}` : trend;
}

export function BoscoCommentCarousel({ message, result, input, onDetails }: Props) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);
  const [page, setPage] = useState(0);
  const [slideHeight, setSlideHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    const activeSlide = slideRefs.current[page];
    if (!activeSlide) return;

    const measure = () => {
      const nextHeight = Math.ceil(activeSlide.getBoundingClientRect().height);
      setSlideHeight((current) => (current === nextHeight ? current : nextHeight));
    };

    measure();
    if (!("ResizeObserver" in window)) return;
    const observer = new ResizeObserver(measure);
    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });
    return () => observer.disconnect();
  }, [page, message, result.label, result.summary]);

  const goTo = (nextPage: number) => {
    const clamped = Math.max(0, Math.min(1, nextPage));
    const viewport = viewportRef.current;
    if (!viewport) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    viewport.scrollTo({
      left: clamped * viewport.clientWidth,
      behavior: reducedMotion ? "auto" : "smooth",
    });
    setPage(clamped);
  };

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const viewport = event.currentTarget;
    if (viewport.clientWidth === 0) return;
    setPage(Math.max(0, Math.min(1, Math.round(viewport.scrollLeft / viewport.clientWidth))));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(page - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(page + 1);
    }
  };

  const weather = weatherDescription(input.weather?.wmoCode);
  const wavePeriod = finite(input.sea?.wavePeriodS, 0);

  return (
    <section
      className={styles.carousel}
      aria-roledescription="carrousel"
      aria-label="Commentaire et conditions de Bosco"
      data-testid="bosco-comment-carousel"
      data-carousel-page={page}
    >
      <div
        ref={viewportRef}
        className={styles.carouselViewport}
        role="group"
        aria-label="Navigation du carrousel"
        style={
          slideHeight
            ? ({ "--carousel-slide-height": `${slideHeight}px` } as CSSProperties)
            : undefined
        }
        tabIndex={0}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
      >
        <article
          ref={(node) => {
            slideRefs.current[0] = node;
          }}
          className={styles.carouselSlide}
          aria-label="Page 1 sur 2 : Le mot de Bosco"
          data-carousel-slide
        >
          <span className={styles.eyebrow}>LE MOT DE BOSCO</span>
          <blockquote>« {message} »</blockquote>
        </article>

        <article
          ref={(node) => {
            slideRefs.current[1] = node;
          }}
          className={styles.carouselSlide}
          aria-label="Page 2 sur 2 : Conditions en bref"
          data-carousel-slide
        >
          <div className={styles.summaryHeading}>
            <div>
              <span className={styles.eyebrow}>CONDITIONS EN BREF</span>
              <h2>{result.label}</h2>
            </div>
            <span className={styles.watchWindow}>09 h — 13 h</span>
          </div>
          <p className={styles.summarySentence}>
            {weather} · {result.summary.replace(/^\d+\.\d\/10 — /, "")}
          </p>
          <div className={styles.summaryGrid}>
            <div>
              <span>Température</span>
              <strong>{finite(input.weather?.temperatureC, 0)} <small>°C</small></strong>
            </div>
            <div>
              <span>Vent moyen</span>
              <strong>{finite(input.wind?.meanKt, 0)} <small>nds</small></strong>
              <em>{directionLabel(input.wind?.directionDeg)}</em>
            </div>
            <div>
              <span>Rafales</span>
              <strong>{finite(input.wind?.gustKt, 0)} <small>nds</small></strong>
            </div>
            <div>
              <span>Vagues</span>
              <strong>{finite(input.sea?.waveHeightM, 1)} <small>m</small></strong>
              <em>Période {wavePeriod === "Indisponible" ? wavePeriod : `${wavePeriod} s`}</em>
            </div>
            <div>
              <span>Houle</span>
              <strong>{finite(input.sea?.swellHeightM, 1)} <small>m</small></strong>
            </div>
            <div>
              <span>Marée</span>
              <strong className={styles.tideValue}>{tideLabel(input)}</strong>
            </div>
          </div>
          <button type="button" className={styles.detailsButton} onClick={onDetails}>
            Voir les détails
          </button>
        </article>
      </div>

      <div className={styles.carouselControls}>
        <button
          type="button"
          aria-label="Page précédente"
          onClick={() => goTo(page - 1)}
          disabled={page === 0}
        >
          ‹
        </button>
        <div className={styles.pageIndicators} aria-label={`Page ${page + 1} sur 2`}>
          {[0, 1].map((index) => (
            <button
              type="button"
              key={index}
              className={page === index ? styles.activeIndicator : ""}
              aria-label={`Afficher la page ${index + 1}`}
              aria-current={page === index ? "page" : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Page suivante"
          onClick={() => goTo(page + 1)}
          disabled={page === 1}
        >
          ›
        </button>
      </div>
    </section>
  );
}
