import { MANCHE_PORTS } from "@/data/manche-ports";
import { SQUARE_CONTENTS } from "@/data/square-content";

export const V25_LIBRARY_TARGETS = { ports: 30, realStoriesPerPort: 10, fictionalStoriesPerPort: 10, storiesPerPort: 20, totalStories: 600 } as const;
export type NarrativeStoryKind = "real" | "fictional";
export type NarrativeStorySlot = { slotId: string; portId: string; kind: NarrativeStoryKind; position: number; narrator: "emile" | "bosco"; status: "waiting-content" };
export type NarrativePortChapter = { chapter: number; portId: string; portName: string; batch: 1 | 2 | 3 | 4 | 5 | 6; slots: readonly NarrativeStorySlot[] };

function makeSlots(portId: string, kind: NarrativeStoryKind): NarrativeStorySlot[] {
  return Array.from({ length: 10 }, (_, index) => ({ slotId: `${portId}-${kind}-${String(index + 1).padStart(2, "0")}`, portId, kind, position: index + 1, narrator: kind === "real" ? "emile" : "bosco", status: "waiting-content" }));
}

export const V25_PORT_CHAPTERS: readonly NarrativePortChapter[] = MANCHE_PORTS.map((port, index) => ({ chapter: index + 1, portId: port.id, portName: port.name, batch: (Math.floor(index / 5) + 1) as NarrativePortChapter["batch"], slots: [...makeSlots(port.id, "real"), ...makeSlots(port.id, "fictional")] }));
export const V25_STORY_SLOTS: readonly NarrativeStorySlot[] = V25_PORT_CHAPTERS.flatMap((chapter) => chapter.slots);

export function narrativeStatsForPort(portId: string) {
  const real = SQUARE_CONTENTS.filter((content) => content.portId === portId && content.authorType === "emile" && content.publicationStatus === "published").length;
  const fictional = SQUARE_CONTENTS.filter((content) => content.portId === portId && content.authorType === "bosco" && content.publicationStatus === "published").length;
  return { real, fictional, total: real + fictional };
}

export const V25_LIBRARY_STATUS = (() => {
  const real = SQUARE_CONTENTS.filter((content) => content.authorType === "emile" && content.publicationStatus === "published").length;
  const fictional = SQUARE_CONTENTS.filter((content) => content.authorType === "bosco" && content.publicationStatus === "published").length;
  return { real, fictional, total: real + fictional, complete: real + fictional === V25_LIBRARY_TARGETS.totalStories };
})();

export const V25_NARRATIVE_STAGES = [
  { id: "tourbillon", title: "Le Tourbillon", description: "Rencontrer Bosco et découvrir le carnet resté derrière le comptoir." },
  { id: "ports", title: "Les ports", description: "Parcourir les 30 chapitres maritimes de la Manche." },
  { id: "transmission", title: "La transmission", description: "Lire les pages d’Émile, écouter Bosco et apprendre les gestes du marin." },
  { id: "own-carnet", title: "Mon carnet", description: "Conserver ses ports, ses lectures, ses favoris et ses propres notes." },
  { id: "window", title: "La fenêtre du large", description: "Regarder la mer par soi-même lorsque la transmission sera accomplie." },
] as const;
