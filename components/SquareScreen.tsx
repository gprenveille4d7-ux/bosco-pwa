"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MANCHE_PORTS } from "@/data/manche-ports";
import { V25_LIBRARY_STATUS, V25_LIBRARY_TARGETS, V25_NARRATIVE_STAGES, narrativeStatsForPort } from "@/data/narrative-v25";
import { selectSquareContents, type SquareAuthor, type SquareContent } from "@/data/square-content";
import { readCarnet, saveCarnet, type CarnetData } from "@/lib/v24/carnet";
import { formatNauticalMiles, type NauticalContext } from "@/lib/v24/nautical";
import styles from "./V24Screens.module.css";

type SquareTab = "bosco" | "emile" | "sailorCorner" | "carnet";
type Props = {
  context: NauticalContext;
  onChangePort: () => void;
  initialTab?: SquareTab;
  narrativeMode?: boolean;
  onCloseNarrative?: () => void;
};
const TABS: Array<{ id: SquareTab; label: string; icon: string }> = [
  { id: "bosco", label: "Bosco", icon: "♧" }, { id: "emile", label: "Émile", icon: "✒" },
  { id: "sailorCorner", label: "Coin du marin", icon: "⚓" }, { id: "carnet", label: "Mon carnet", icon: "▤" },
];
const AUTHOR_LABELS: Record<SquareAuthor, string> = { bosco: "BOSCO RACONTE", emile: "UNE PAGE D’ÉMILE", sailorCorner: "COIN DU MARIN", carnetSystem: "CARNET" };
const percent = (value: number, total: number) => total ? Math.max(0, Math.min(100, Math.round((value / total) * 100))) : 0;

export function SquareScreen({
  context,
  onChangePort,
  initialTab = "bosco",
  narrativeMode = false,
  onCloseNarrative,
}: Props) {
  const [tab, setTab] = useState<SquareTab>(initialTab);
  const [index, setIndex] = useState(0);
  const [carnet, setCarnet] = useState<CarnetData | null>(null);
  const [noteDraft, setNoteDraft] = useState("");
  const markedContentRef = useRef(new Set<string>());
  const author = tab === "carnet" ? null : tab;
  const contents = useMemo(() => author ? selectSquareContents(context.activePort.id, author) : [], [author, context.activePort.id]);
  const content = contents[index % Math.max(1, contents.length)] as SquareContent | undefined;
  const portStats = useMemo(() => narrativeStatsForPort(context.activePort.id), [context.activePort.id]);

  useEffect(() => {
    let cancelled = false;
    void readCarnet().then(async (current) => {
      if (cancelled) return;
      const now = new Date().toISOString();
      const previous = current.discoveredPorts[context.activePort.id];
      const next: CarnetData = {
        ...current,
        discoveredPorts: { ...current.discoveredPorts, [context.activePort.id]: previous ? { ...previous, lastViewedAt: now, viewCount: previous.viewCount + 1 } : { portId: context.activePort.id, discoveredAt: now, discoveryMethod: "square-opened", firstViewedAt: now, lastViewedAt: now, viewCount: 1 } },
        earnedMilestones: { ...current.earnedMilestones, tourbillon: current.earnedMilestones.tourbillon ?? { milestoneId: "tourbillon", earnedAt: now } },
        updatedAt: now,
      };
      setCarnet(next); setNoteDraft(next.portNotes[context.activePort.id] ?? ""); await saveCarnet(next);
    });
    return () => { cancelled = true; };
  }, [context.activePort.id]);

  useEffect(() => {
    if (!carnet || !content || markedContentRef.current.has(content.contentId)) return;
    markedContentRef.current.add(content.contentId);
    const now = new Date().toISOString();
    const previous = carnet.readContents[content.contentId];
    const next: CarnetData = { ...carnet, readContents: { ...carnet.readContents, [content.contentId]: previous ? { ...previous, lastReadAt: now, readCount: previous.readCount + 1 } : { contentId: content.contentId, portId: content.portId, firstReadAt: now, lastReadAt: now, readCount: 1 } }, updatedAt: now };
    setCarnet(next); void saveCarnet(next);
  }, [carnet, content]);

  const toggleFavourite = async () => {
    if (!carnet) return;
    const favourites = { ...carnet.favouritePorts };
    if (favourites[context.activePort.id]) delete favourites[context.activePort.id]; else favourites[context.activePort.id] = { portId: context.activePort.id, addedAt: new Date().toISOString() };
    const next = { ...carnet, favouritePorts: favourites, updatedAt: new Date().toISOString() }; setCarnet(next); await saveCarnet(next);
  };
  const saveNote = async () => {
    if (!carnet) return;
    const notes = { ...carnet.portNotes }; const cleaned = noteDraft.trim();
    if (cleaned) notes[context.activePort.id] = cleaned; else delete notes[context.activePort.id];
    const next = { ...carnet, portNotes: notes, updatedAt: new Date().toISOString() }; setCarnet(next); await saveCarnet(next);
  };

  const discoveredCount = carnet ? Object.keys(carnet.discoveredPorts).filter((id) => MANCHE_PORTS.some((port) => port.id === id && port.activePortAllowed && port.status === "active")).length : 0;
  const totalPorts = MANCHE_PORTS.filter((port) => port.activePortAllowed && port.status === "active").length;
  const readCount = carnet ? Object.keys(carnet.readContents).length : 0;
  const favourite = Boolean(carnet?.favouritePorts[context.activePort.id]);
  const windowUnlocked = discoveredCount === V25_LIBRARY_TARGETS.ports && readCount >= V25_LIBRARY_TARGETS.totalStories && V25_LIBRARY_STATUS.complete;
  const showTab = (next: SquareTab) => { setTab(next); setIndex(0); };

  return <section className={styles.screen} aria-label="Le Carré"><div className={styles.scroll}><div className={styles.squareShell}>
    <header className={styles.squareHeader}>
      <span>LE CARRÉ · LE TOURBILLON · VERSION 26</span><h1>LE CARNET D’ÉMILE</h1>
      <p>Bosco raconte la mer. Émile en garde la mémoire.</p>
      <div className={styles.chapterLine}><span>Chapitre {context.activePort.order + 1}/30</span><strong>⚓ {context.activePort.name}</strong><span>{context.activePort.id === context.homePort.id ? "Port d’attache" : `${formatNauticalMiles(context.distanceNauticalMiles)} depuis ${context.homePort.name}`}</span></div>
      {narrativeMode && onCloseNarrative ? (
        <button className={`${styles.nextButton} ${styles.closeNotebookButton}`} onClick={onCloseNarrative}>Refermer le carnet</button>
      ) : (
        <button className={styles.nextButton} onClick={onChangePort}>Choisir un autre port</button>
      )}
    </header>
    {narrativeMode ? <p className={styles.narrativeArrival}>Bosco t’a envoyé directement à la page de {context.activePort.name}. Ici, seules les traces réelles laissées par Émile ont leur place.</p> : null}
    <section className={styles.libraryRibbon} aria-label="État de la bibliothèque narrative">
      <div><span>Bibliothèque</span><strong>{V25_LIBRARY_STATUS.total}/600</strong></div><div><span>Pages d’Émile</span><strong>{V25_LIBRARY_STATUS.real}/300</strong></div><div><span>Récits de Bosco</span><strong>{V25_LIBRARY_STATUS.fictional}/300</strong></div><div><span>Ce port</span><strong>{portStats.total}/20</strong></div>
    </section>
    <nav className={styles.tabBar} aria-label="Sections du Carré">{TABS.map((item) => <button key={item.id} className={tab === item.id ? styles.activeTab : ""} onClick={() => showTab(item.id)} aria-current={tab === item.id ? "page" : undefined}><span aria-hidden="true">{item.icon}</span>{item.label}</button>)}</nav>

    {tab === "carnet" ? <div className={styles.carnetStack}>
      <article className={styles.contentCard}><span>MON CARNET · CONSERVÉ SUR CET APPAREIL</span><h2>Ma traversée</h2>
        <div className={styles.progressTrack} aria-label={`${discoveredCount} ports découverts sur ${totalPorts}`}><span style={{ width: `${percent(discoveredCount, totalPorts)}%` }} /></div>
        <div className={styles.carnetGrid}><article><span>Ports découverts</span><strong>{discoveredCount}/{totalPorts}</strong></article><article><span>Contenus lus</span><strong>{readCount}/600</strong></article><article><span>Chapitre actuel</span><strong>{context.activePort.order + 1}</strong></article><article><span>Port favori</span><strong>{favourite ? "Oui" : "Non"}</strong></article></div>
        <button className={styles.favouriteButton} onClick={() => void toggleFavourite()}>{favourite ? "Retirer le tampon favori" : "Ajouter le tampon favori"}</button>
      </article>
      <article className={styles.contentCard}><span>UNE NOTE POUR {context.activePort.name.toUpperCase()}</span><h2>Ce que je veux retenir</h2><textarea className={styles.noteArea} value={noteDraft} maxLength={800} onChange={(event) => setNoteDraft(event.target.value)} placeholder="Une observation, une impression, un détail de navigation…" /><button className={styles.nextButton} onClick={() => void saveNote()}>Enregistrer dans mon carnet</button></article>
      <article className={styles.contentCard}><span>LE CHEMIN DE TRANSMISSION</span><h2>Du comptoir jusqu’au large</h2><ol className={styles.journeyList}>{V25_NARRATIVE_STAGES.map((stage, stageIndex) => {
        const complete = stage.id === "tourbillon" || (stage.id === "ports" && discoveredCount === totalPorts) || (stage.id === "transmission" && readCount >= 600) || (stage.id === "own-carnet" && discoveredCount > 0);
        const locked = stage.id === "window" && !windowUnlocked;
        return <li key={stage.id} data-complete={complete ? "true" : "false"} data-locked={locked ? "true" : "false"}><b>{stageIndex + 1}</b><div><strong>{stage.title}</strong><p>{stage.description}</p></div><span>{complete ? "Acquis" : locked ? "Verrouillée" : "En cours"}</span></li>;
      })}</ol><p className={styles.safety}>La fenêtre du large restera verrouillée tant que les 30 ports et les 600 histoires n’auront pas accompli la transmission. Tu pourras ensuite toujours revenir retrouver Bosco.</p></article>
    </div> : content ? <article className={styles.contentCard} data-content-id={content.contentId}>
      <span>{AUTHOR_LABELS[content.authorType]}</span><h2>{content.title}</h2><p>{content.text}</p>
      <div className={styles.meta}><span>{content.category}</span><span>{content.reliability}</span>{content.historicalPeriod ? <span>{content.historicalPeriod}</span> : null}</div>
      {content.sources.length ? <ul className={styles.sourceList}>{content.sources.map((source) => <li key={source.sourceId}><a href={source.url} target="_blank" rel="noreferrer">{source.organisation} · {source.title}</a></li>)}</ul> : null}
      <div className={styles.storyFooter}><span>{tab === "emile" ? `${portStats.real}/10 pages intégrées` : tab === "bosco" ? `${portStats.fictional}/10 récits intégrés` : `${contents.length} repère${contents.length > 1 ? "s" : ""}`}</span>{contents.length > 1 ? <button className={styles.nextButton} onClick={() => setIndex((value) => value + 1)}>Tourner la page</button> : null}{narrativeMode && onCloseNarrative ? <button className={styles.nextButton} onClick={onCloseNarrative}>Refermer le carnet et retrouver Bosco</button> : null}</div>
    </article> : <article className={`${styles.contentCard} ${styles.waitingCard}`}><span>{tab === "emile" ? "UNE PAGE D’ÉMILE" : tab === "bosco" ? "BOSCO RACONTE" : "COIN DU MARIN"}</span><h2>Ce chapitre attend son premier récit</h2><p className={styles.empty}>{tab === "emile" ? "Les dix emplacements historiques de ce port sont prêts. Les pages seront intégrées et vérifiées progressivement." : tab === "bosco" ? "Les dix emplacements imaginaires de ce port sont prêts à recevoir les récits de Bosco." : "Les nœuds, mots, gestes et repères maritimes viendront compléter ce chapitre."}</p><div className={styles.slotPreview} aria-label="Emplacements de contenu en attente">{Array.from({ length: 10 }, (_, slot) => <span key={slot}>{slot + 1}</span>)}</div>{narrativeMode && onCloseNarrative ? <button className={styles.nextButton} onClick={onCloseNarrative}>Refermer le carnet et retrouver Bosco</button> : <button className={styles.nextButton} onClick={() => showTab("carnet")}>Voir ma progression</button>}</article>}
  </div></div></section>;
}
