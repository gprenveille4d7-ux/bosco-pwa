"use client";

import { useMemo } from "react";
import { selectDailyEmileAdvice } from "@/lib/emile-advice";
import styles from "./BoscoShellExtensions.module.css";

type Props = {
  onBack: () => void;
};

export function BoscoStoryScreen({ onBack }: Props) {
  const dailyEmileAdvice = useMemo(() => selectDailyEmileAdvice(new Date()), []);

  return (
    <section
      className={styles.storyScreen}
      aria-labelledby="bosco-story-title"
      data-testid="bosco-story-screen"
    >
      <div className={styles.storyScroll}>
        <header className={styles.storyHeader}>
          <button type="button" onClick={onBack} aria-label="Retour à Bosco">
            ‹ <span>Retour</span>
          </button>
          <div className={styles.storyMark} aria-hidden="true">
            <svg viewBox="0 0 64 64" role="img">
              <circle cx="32" cy="32" r="29" />
              <path d="M32 12v37M22 22h20M17 39c5 10 25 10 30 0M25 49h14" />
              <circle cx="32" cy="13" r="4" />
            </svg>
          </div>
          <span className={styles.storyKicker}>LES RÉCITS DU TOURBILLON</span>
          <h1 id="bosco-story-title">L’histoire de Bosco</h1>
          <p>Bosco et le vieux loup de mer Émile</p>
        </header>

        <div className={styles.storyContent}>
          <article>
            <span>01</span>
            <div>
              <h2>La rencontre</h2>
              <p>
                Bosco était alors un jeune marin de Jullouville, solide sur ses
                jambes et beaucoup trop pressé de larguer les amarres. Un matin,
                il rencontra Émile, un vieux loup de mer qui regardait le ciel
                avec l’air de lui poser une question.
              </p>
              <p>
                Bosco annonça fièrement que les chiffres étaient bons. Émile
                désigna un nuage au large et répondit que les chiffres, eux,
                n’avaient jamais eu à rentrer au port.
              </p>
            </div>
          </article>

          <article>
            <span>02</span>
            <div>
              <h2>Les leçons d’Émile</h2>
              <p>
                Émile lui apprit à observer le ciel avant l’écran, à reconnaître
                d’où vient le vent et à distinguer la mer qu’il soulève d’une
                houle déjà installée. Il lui enseigna aussi le respect des
                horaires de marée et l’art très marin de préparer le retour
                avant même le départ.
              </p>
              <p>
                « Le courage garde les yeux ouverts, l’imprudence les ferme »,
                grognait-il en vérifiant pour la troisième fois un bout déjà
                parfaitement noué.
              </p>
            </div>
          </article>

          <aside className={styles.dailyAdvice} aria-labelledby="daily-advice-title">
            <span>CONSEIL DU JOUR</span>
            <h2 id="daily-advice-title">Conseil du jour</h2>
            {dailyEmileAdvice.kind === "quote" ? (
              <blockquote>« {dailyEmileAdvice.text} »</blockquote>
            ) : (
              <p>{dailyEmileAdvice.attributionLabel} : {dailyEmileAdvice.text}</p>
            )}
            <small>{dailyEmileAdvice.provenance}</small>
          </aside>

          <blockquote data-advice-id={dailyEmileAdvice.id}>
            <span>La règle du vieux marin</span>
            {dailyEmileAdvice.kind === "quote"
              ? `« ${dailyEmileAdvice.text} »`
              : dailyEmileAdvice.text}
            <cite>{dailyEmileAdvice.attributionLabel}</cite>
          </blockquote>

          <article>
            <span>03</span>
            <div>
              <h2>Savoir renoncer</h2>
              <p>
                La plus rude leçon fut aussi la plus utile : certaines journées
                demandent de rester à terre. Émile ne parlait jamais d’échec.
                Il disait qu’un bon marin sait remettre sa sortie à demain pour
                être encore là quand demain arrive.
              </p>
            </div>
          </article>

          <article>
            <span>04</span>
            <div>
              <h2>Ce que Bosco transmet aujourd’hui</h2>
              <p>
                Les années ont passé. Bosco veille désormais au Tourbillon,
                avec son baromètre, sa tasse POLDERS et son air légèrement
                contrarié quand quelqu’un confond enthousiasme et sécurité.
              </p>
              <p>
                À chaque navigateur venu consulter la météo, il transmet un peu
                de ce qu’Émile lui a appris : écouter la mer, protéger le retour
                et choisir la prudence quand les conditions l’exigent.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
