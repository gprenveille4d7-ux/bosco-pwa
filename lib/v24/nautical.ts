import type { ManchePort } from "@/data/manche-ports";

const EARTH_RADIUS_M = 6_371_008.8;
export const METRES_PER_NAUTICAL_MILE = 1_852;

function radians(value: number): number {
  return (value * Math.PI) / 180;
}

function degrees(value: number): number {
  return (value * 180) / Math.PI;
}

export function distanceNauticalMiles(origin: ManchePort, destination: ManchePort): number {
  const lat1 = radians(origin.latitude);
  const lat2 = radians(destination.latitude);
  const deltaLat = lat2 - lat1;
  const deltaLon = radians(destination.longitude - origin.longitude);
  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) ** 2;
  const metres = 2 * EARTH_RADIUS_M * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return metres / METRES_PER_NAUTICAL_MILE;
}

export function initialBearingDegrees(origin: ManchePort, destination: ManchePort): number {
  if (origin.id === destination.id) return 0;
  const lat1 = radians(origin.latitude);
  const lat2 = radians(destination.latitude);
  const deltaLon = radians(destination.longitude - origin.longitude);
  const y = Math.sin(deltaLon) * Math.cos(lat2);
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLon);
  return (degrees(Math.atan2(y, x)) + 360) % 360;
}

const CARDINALS = [
  ["N", "Nord"], ["NNE", "Nord-nord-est"], ["NE", "Nord-est"], ["ENE", "Est-nord-est"],
  ["E", "Est"], ["ESE", "Est-sud-est"], ["SE", "Sud-est"], ["SSE", "Sud-sud-est"],
  ["S", "Sud"], ["SSO", "Sud-sud-ouest"], ["SO", "Sud-ouest"], ["OSO", "Ouest-sud-ouest"],
  ["O", "Ouest"], ["ONO", "Ouest-nord-ouest"], ["NO", "Nord-ouest"], ["NNO", "Nord-nord-ouest"],
] as const;

export function bearingCardinal(bearing: number): { short: string; long: string } {
  const item = CARDINALS[Math.round(((bearing % 360) + 360) % 360 / 22.5) % 16];
  return { short: item[0], long: item[1] };
}

export type NauticalContext = {
  homePort: ManchePort;
  activePort: ManchePort;
  distanceNauticalMiles: number;
  distanceKilometres: number;
  bearingDegrees: number;
  bearingShort: string;
  bearingLong: string;
  travelHours: { sailboat: number; rib: number; motorboat: number };
  algorithmVersion: 1;
};

export function deriveNauticalContext(homePort: ManchePort, activePort: ManchePort): NauticalContext {
  const distance = distanceNauticalMiles(homePort, activePort);
  const bearing = initialBearingDegrees(homePort, activePort);
  const cardinal = bearingCardinal(bearing);
  return {
    homePort,
    activePort,
    distanceNauticalMiles: distance,
    distanceKilometres: distance * 1.852,
    bearingDegrees: bearing,
    bearingShort: cardinal.short,
    bearingLong: cardinal.long,
    travelHours: {
      sailboat: distance / 5,
      rib: distance / 15,
      motorboat: distance / 20,
    },
    algorithmVersion: 1,
  };
}

export function formatNauticalMiles(value: number): string {
  return `${new Intl.NumberFormat("fr-FR", { maximumFractionDigits: value < 100 ? 1 : 0 }).format(value)} MN`;
}

export function formatTravelTime(hours: number): string {
  if (!Number.isFinite(hours)) return "Indisponible";
  const minutes = Math.max(0, Math.round(hours * 60));
  const wholeHours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  if (wholeHours === 0) return `${remainder} min`;
  return `${wholeHours} h ${String(remainder).padStart(2, "0")}`;
}
