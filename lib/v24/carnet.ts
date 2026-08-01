import { readLocalRecord, writeLocalRecord } from "@/lib/v24/storage";
import { narrativeCategoryForContent, type NarrativeCategory, type SquareContent } from "@/data/square-content";

export type DiscoveredPort = {
  portId: string;
  discoveredAt: string;
  discoveryMethod: "square-opened";
  firstViewedAt: string;
  lastViewedAt: string;
  viewCount: number;
};

export type CarnetData = {
  schemaVersion: 3;
  discoveredPorts: Record<string, DiscoveredPort>;
  favouritePorts: Record<string, { portId: string; addedAt: string }>;
  readContents: Record<string, { contentId: string; portId: string; firstReadAt: string; lastReadAt: string; readCount: number }>;
  portNotes: Record<string, string>;
  earnedMilestones: Record<string, { milestoneId: string; earnedAt: string }>;
  narrativePositions: Record<string, {
    portId: string;
    fictionIndex: number;
    realIndex: number;
    updatedAt: string;
  }>;
  updatedAt: string;
};

const CARNET_KEY = "bosco.v24.carnet";

export function emptyCarnet(): CarnetData {
  return { schemaVersion: 3, discoveredPorts: {}, favouritePorts: {}, readContents: {}, portNotes: {}, earnedMilestones: {}, narrativePositions: {}, updatedAt: new Date().toISOString() };
}

export async function readCarnet(): Promise<CarnetData> {
  const value = await readLocalRecord<Partial<CarnetData> & { schemaVersion?: number }>("carnet", CARNET_KEY);
  if (!value || ![1, 2, 3].includes(value.schemaVersion ?? 0) || typeof value.discoveredPorts !== "object" || typeof value.favouritePorts !== "object") {
    return emptyCarnet();
  }
  return {
    ...emptyCarnet(),
    ...value,
    schemaVersion: 3,
    discoveredPorts: value.discoveredPorts,
    favouritePorts: value.favouritePorts,
    readContents: typeof value.readContents === "object" ? value.readContents : {},
    portNotes: typeof value.portNotes === "object" ? value.portNotes : {},
    earnedMilestones: typeof value.earnedMilestones === "object" ? value.earnedMilestones : {},
    narrativePositions: typeof value.narrativePositions === "object" ? value.narrativePositions : {},
    updatedAt: typeof value.updatedAt === "string" ? value.updatedAt : new Date().toISOString(),
  };
}

export async function saveCarnet(carnet: CarnetData): Promise<boolean> {
  return writeLocalRecord("carnet", CARNET_KEY, { ...carnet, updatedAt: new Date().toISOString() });
}

export function narrativeIndexForPort(
  carnet: CarnetData,
  portId: string,
  category: NarrativeCategory,
): number {
  const position = carnet.narrativePositions[portId];
  const value = category === "fiction" ? position?.fictionIndex : position?.realIndex;
  return Number.isInteger(value) ? Math.max(0, value ?? 0) : 0;
}

export function withNarrativeIndex(
  carnet: CarnetData,
  portId: string,
  category: NarrativeCategory,
  index: number,
  updatedAt = new Date().toISOString(),
): CarnetData {
  const current = carnet.narrativePositions[portId] ?? {
    portId,
    fictionIndex: 0,
    realIndex: 0,
    updatedAt,
  };
  return {
    ...carnet,
    narrativePositions: {
      ...carnet.narrativePositions,
      [portId]: {
        ...current,
        [category === "fiction" ? "fictionIndex" : "realIndex"]: Math.max(0, index),
        updatedAt,
      },
    },
    updatedAt,
  };
}

export async function recordNarrativeReading(
  content: SquareContent,
  index: number,
): Promise<CarnetData> {
  const carnet = await readCarnet();
  const now = new Date().toISOString();
  const previous = carnet.readContents[content.contentId];
  let next: CarnetData = {
    ...carnet,
    readContents: {
      ...carnet.readContents,
      [content.contentId]: previous
        ? { ...previous, lastReadAt: now, readCount: previous.readCount + 1 }
        : { contentId: content.contentId, portId: content.portId, firstReadAt: now, lastReadAt: now, readCount: 1 },
    },
    updatedAt: now,
  };
  const category = narrativeCategoryForContent(content);
  if (category) next = withNarrativeIndex(next, content.portId, category, index, now);
  await saveCarnet(next);
  return next;
}
