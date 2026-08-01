export type ManchePlaceType =
  | "port"
  | "harbour"
  | "slipway"
  | "anchorage"
  | "bay"
  | "island"
  | "cape"
  | "shelter"
  | "maritime-station"
  | "heritage-site";

export type ManchePortStatus = "active" | "inactive" | "planned" | "hidden" | "deprecated";

export type ManchePort = {
  id: string;
  name: string;
  shortName: string;
  aliases: readonly string[];
  department: "Manche";
  commune: string;
  latitude: number;
  longitude: number;
  type: ManchePlaceType;
  status: ManchePortStatus;
  order: number;
  zone: "baie-mont" | "cote-ouest" | "cotentin" | "cote-est";
  activePortAllowed: boolean;
  homePortAllowed: boolean;
  weatherAvailable: boolean;
  marineAvailable: boolean;
  tideAvailable: boolean;
  squareAvailable: boolean;
  tideRelation: {
    type: "forecast-grid" | "direct" | "reference" | "corrected" | "unavailable";
    sourceId: string;
    sourceLabel: string;
    verifiedAt: string;
    reliability: "indicative" | "verified" | "unavailable";
  };
  version: 1;
};

type PortSeed = Pick<
  ManchePort,
  "id" | "name" | "commune" | "latitude" | "longitude" | "type" | "zone"
> &
  Partial<Pick<ManchePort, "shortName" | "aliases" | "homePortAllowed" | "squareAvailable">>;

const PORT_SEEDS: readonly PortSeed[] = [
  { id: "mont-saint-michel", name: "Le Mont-Saint-Michel", commune: "Le Mont-Saint-Michel", latitude: 48.636, longitude: -1.5115, type: "heritage-site", zone: "baie-mont", shortName: "Mont-Saint-Michel", squareAvailable: true },
  { id: "genets", name: "Genêts", commune: "Genêts", latitude: 48.684, longitude: -1.478, type: "slipway", zone: "baie-mont" },
  { id: "carolles", name: "Carolles", commune: "Carolles", latitude: 48.751, longitude: -1.566, type: "shelter", zone: "baie-mont" },
  { id: "jullouville", name: "Jullouville", commune: "Jullouville", latitude: 48.7757, longitude: -1.5686, type: "slipway", zone: "baie-mont", squareAvailable: true },
  { id: "saint-pair", name: "Saint-Pair-sur-Mer", commune: "Saint-Pair-sur-Mer", latitude: 48.8145, longitude: -1.569, type: "slipway", zone: "baie-mont" },
  { id: "granville", name: "Granville", commune: "Granville", latitude: 48.8375, longitude: -1.597, type: "port", zone: "cote-ouest", squareAvailable: true },
  { id: "herel", name: "Port du Hérel", commune: "Granville", latitude: 48.836, longitude: -1.606, type: "port", zone: "cote-ouest", aliases: ["Port de plaisance de Granville"] },
  { id: "chausey", name: "Chausey", commune: "Granville", latitude: 48.871, longitude: -1.82, type: "island", zone: "cote-ouest", squareAvailable: true },
  { id: "brehal", name: "Bréhal", commune: "Bréhal", latitude: 48.899, longitude: -1.566, type: "slipway", zone: "cote-ouest" },
  { id: "hauteville", name: "Hauteville", commune: "Hauteville-sur-Mer", latitude: 48.975, longitude: -1.555, type: "slipway", zone: "cote-ouest" },
  { id: "regneville", name: "Regnéville", commune: "Regnéville-sur-Mer", latitude: 49.007, longitude: -1.58, type: "harbour", zone: "cote-ouest" },
  { id: "agon-coutainville", name: "Agon-Coutainville", commune: "Agon-Coutainville", latitude: 49.04, longitude: -1.6, type: "slipway", zone: "cote-ouest" },
  { id: "blainville", name: "Blainville", commune: "Blainville-sur-Mer", latitude: 49.066, longitude: -1.606, type: "slipway", zone: "cote-ouest" },
  { id: "gouville", name: "Gouville", commune: "Gouville-sur-Mer", latitude: 49.097, longitude: -1.615, type: "slipway", zone: "cote-ouest" },
  { id: "pirou", name: "Pirou", commune: "Pirou", latitude: 49.166, longitude: -1.596, type: "slipway", zone: "cote-ouest" },
  { id: "saint-germain-sur-ay", name: "Saint-Germain-sur-Ay", commune: "Saint-Germain-sur-Ay", latitude: 49.229, longitude: -1.62, type: "harbour", zone: "cote-ouest" },
  { id: "portbail", name: "Portbail", commune: "Port-Bail-sur-Mer", latitude: 49.335, longitude: -1.696, type: "harbour", zone: "cote-ouest" },
  { id: "carteret", name: "Barneville-Carteret", commune: "Barneville-Carteret", latitude: 49.377, longitude: -1.79, type: "port", zone: "cote-ouest", shortName: "Carteret" },
  { id: "dielette", name: "Diélette", commune: "Flamanville", latitude: 49.553, longitude: -1.856, type: "port", zone: "cotentin" },
  { id: "goury", name: "Goury", commune: "La Hague", latitude: 49.716, longitude: -1.947, type: "shelter", zone: "cotentin" },
  { id: "cherbourg", name: "Cherbourg", commune: "Cherbourg-en-Cotentin", latitude: 49.642, longitude: -1.622, type: "port", zone: "cotentin", squareAvailable: true },
  { id: "port-chantereyne", name: "Port Chantereyne", commune: "Cherbourg-en-Cotentin", latitude: 49.646, longitude: -1.626, type: "port", zone: "cotentin" },
  { id: "becquet", name: "Becquet", commune: "Digosville", latitude: 49.672, longitude: -1.476, type: "shelter", zone: "cotentin" },
  { id: "fermanville", name: "Fermanville", commune: "Fermanville", latitude: 49.69, longitude: -1.46, type: "shelter", zone: "cotentin" },
  { id: "barfleur", name: "Barfleur", commune: "Barfleur", latitude: 49.67, longitude: -1.264, type: "port", zone: "cote-est", squareAvailable: true },
  { id: "saint-vaast", name: "Saint-Vaast-la-Hougue", commune: "Saint-Vaast-la-Hougue", latitude: 49.588, longitude: -1.264, type: "port", zone: "cote-est", shortName: "Saint-Vaast", squareAvailable: true },
  { id: "tatihou", name: "Tatihou", commune: "Saint-Vaast-la-Hougue", latitude: 49.587, longitude: -1.244, type: "island", zone: "cote-est" },
  { id: "quineville", name: "Quinéville", commune: "Quinéville", latitude: 49.51, longitude: -1.285, type: "slipway", zone: "cote-est" },
  { id: "utah-beach", name: "Utah Beach", commune: "Sainte-Marie-du-Mont", latitude: 49.414, longitude: -1.175, type: "heritage-site", zone: "cote-est", homePortAllowed: false },
  { id: "carentan", name: "Carentan", commune: "Carentan-les-Marais", latitude: 49.303, longitude: -1.248, type: "port", zone: "cote-est" },
] as const;

export const MANCHE_PORTS: readonly ManchePort[] = PORT_SEEDS.map((port, order) => ({
  ...port,
  shortName: port.shortName ?? port.name,
  aliases: port.aliases ?? [],
  department: "Manche",
  status: "active",
  order,
  activePortAllowed: true,
  homePortAllowed: port.homePortAllowed ?? true,
  weatherAvailable: true,
  marineAvailable: true,
  tideAvailable: true,
  squareAvailable: port.squareAvailable ?? false,
  tideRelation: {
    type: "forecast-grid",
    sourceId: "open-meteo-marine-grid",
    sourceLabel: "Open-Meteo Marine · prévision sur point de grille",
    verifiedAt: "2026-08-01",
    reliability: "indicative",
  },
  version: 1,
}));

export const PORT_REGISTRY_VERSION = 1;

export function findManchePort(portId: string | null | undefined): ManchePort | null {
  return MANCHE_PORTS.find((port) => port.id === portId) ?? null;
}

export const DEFAULT_MANCHE_PORT =
  findManchePort("jullouville") ?? MANCHE_PORTS[0];
