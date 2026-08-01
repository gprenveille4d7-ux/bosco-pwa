import { readLocalRecord, writeLocalRecord } from "@/lib/v24/storage";

export type DiscoveredPort = {
  portId: string;
  discoveredAt: string;
  discoveryMethod: "square-opened";
  firstViewedAt: string;
  lastViewedAt: string;
  viewCount: number;
};

export type CarnetData = {
  schemaVersion: 2;
  discoveredPorts: Record<string, DiscoveredPort>;
  favouritePorts: Record<string, { portId: string; addedAt: string }>;
  readContents: Record<string, { contentId: string; portId: string; firstReadAt: string; lastReadAt: string; readCount: number }>;
  portNotes: Record<string, string>;
  earnedMilestones: Record<string, { milestoneId: string; earnedAt: string }>;
  updatedAt: string;
};

const CARNET_KEY = "bosco.v24.carnet";

export function emptyCarnet(): CarnetData {
  return { schemaVersion: 2, discoveredPorts: {}, favouritePorts: {}, readContents: {}, portNotes: {}, earnedMilestones: {}, updatedAt: new Date().toISOString() };
}

export async function readCarnet(): Promise<CarnetData> {
  const value = await readLocalRecord<CarnetData | (Omit<CarnetData, "schemaVersion" | "portNotes" | "earnedMilestones"> & { schemaVersion: 1 })>("carnet", CARNET_KEY);
  if (!value || (value.schemaVersion !== 1 && value.schemaVersion !== 2) || typeof value.discoveredPorts !== "object" || typeof value.favouritePorts !== "object") {
    return emptyCarnet();
  }
  return { ...value, schemaVersion: 2, readContents: typeof value.readContents === "object" ? value.readContents : {}, portNotes: "portNotes" in value && typeof value.portNotes === "object" ? value.portNotes : {}, earnedMilestones: "earnedMilestones" in value && typeof value.earnedMilestones === "object" ? value.earnedMilestones : {} };
}

export async function saveCarnet(carnet: CarnetData): Promise<boolean> {
  return writeLocalRecord("carnet", CARNET_KEY, { ...carnet, updatedAt: new Date().toISOString() });
}
