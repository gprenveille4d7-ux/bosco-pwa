import { selectNarrativeContents, type SquareContent } from "@/data/square-content";

export const BOSCO_PORT_VISITS_KEY = "bosco:narrative-port-visits:v26";

export type V26NarrativePhase = "story" | "emile" | "closing";

export type V26PortVisit = {
  phase: V26NarrativePhase;
  portId: string;
  portName: string;
  visitOrdinal: number;
  storyIndex: number;
  storyCount: number;
  emileStoryIndex: number;
  story: SquareContent | null;
  emileStory: SquareContent | null;
  invitation: string;
  closingLine: string;
};

const INVITATIONS = [
  "Bon… ça, c’est ce qu’on racontait ici depuis des générations. Mais l’ancien Émile avait écrit deux ou trois trucs sur ce coin-là. Va donc jeter un œil à son carnet… tu risques d’apprendre quelque chose.",
  "Moi, je te raconte les histoires des vieux du port. Émile, lui, notait les faits. Allez… ouvre donc son carnet, il avait la plume aussi solide que les amarres.",
  "Si j’étais toi, je lirais aussi ce qu’Émile a laissé. Ce vieux bougre avait toujours le nez là où les autres regardaient pas.",
] as const;

const CLOSING_LINES = [
  "Tu vois… la mer cache toujours quelque chose.",
  "Sacré Émile… il en savait des choses.",
  "Bon… maintenant tu connais les deux versions. À toi de te faire ton idée.",
  "Voilà. La légende d’un côté, les faits de l’autre… et la mer au milieu.",
] as const;

function stableIndex(portId: string, visitOrdinal: number, length: number): number {
  const portSeed = Array.from(portId).reduce((sum, character) => sum + character.charCodeAt(0), 0);
  return Math.abs(portSeed + visitOrdinal) % length;
}

export function boscoStoriesForPort(portId: string): SquareContent[] {
  return selectNarrativeContents(portId, "fiction");
}

export function emileStoriesForPort(portId: string): SquareContent[] {
  return selectNarrativeContents(portId, "real");
}

export function nextBoscoVisitOrdinal(portId: string): number {
  if (typeof window === "undefined") return 0;
  try {
    const parsed = JSON.parse(window.localStorage.getItem(BOSCO_PORT_VISITS_KEY) ?? "{}") as Record<string, number>;
    const ordinal = Number.isInteger(parsed[portId]) ? Math.max(0, parsed[portId]) : 0;
    window.localStorage.setItem(
      BOSCO_PORT_VISITS_KEY,
      JSON.stringify({ ...parsed, [portId]: ordinal + 1 }),
    );
    return ordinal;
  } catch {
    return 0;
  }
}

export function createV26PortVisit(
  portId: string,
  portName: string,
  visitOrdinal: number,
): V26PortVisit {
  const stories = boscoStoriesForPort(portId);
  const emileStories = emileStoriesForPort(portId);
  const storyIndex = stories.length ? visitOrdinal % stories.length : 0;
  return {
    phase: "story",
    portId,
    portName,
    visitOrdinal,
    storyIndex,
    storyCount: stories.length,
    emileStoryIndex: emileStories.length ? storyIndex % emileStories.length : 0,
    story: stories.length ? stories[storyIndex] : null,
    emileStory: emileStories.length ? emileStories[storyIndex % emileStories.length] : null,
    invitation: INVITATIONS[stableIndex(portId, visitOrdinal, INVITATIONS.length)],
    closingLine: CLOSING_LINES[stableIndex(portId, visitOrdinal + 1, CLOSING_LINES.length)],
  };
}

export function moveV26Visit(
  visit: V26PortVisit,
  phase: V26NarrativePhase,
): V26PortVisit {
  return { ...visit, phase };
}
