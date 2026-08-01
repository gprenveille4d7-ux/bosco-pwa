import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { DEFAULT_MANCHE_PORT, findManchePort, MANCHE_PORTS } from "../data/manche-ports";
import { bearingCardinal, deriveNauticalContext, distanceNauticalMiles } from "../lib/v24/nautical";

const ROOT = process.cwd();
const read = (path: string) => readFileSync(join(ROOT, path), "utf8");

test("Jullouville reste le port d’attache initial et les identifiants sont uniques", () => {
  assert.equal(DEFAULT_MANCHE_PORT.id, "jullouville");
  assert.equal(new Set(MANCHE_PORTS.map((port) => port.id)).size, MANCHE_PORTS.length);
  assert.equal(findManchePort("granville")?.name, "Granville");
  assert.equal(findManchePort("inconnu"), null);
});

test("distance, cap et temps utilisent un moteur nautique unique", () => {
  const granville = findManchePort("granville");
  assert.ok(granville);
  const distance = distanceNauticalMiles(DEFAULT_MANCHE_PORT, granville);
  assert.ok(distance > 1 && distance < 10);
  const context = deriveNauticalContext(DEFAULT_MANCHE_PORT, granville);
  assert.equal(context.distanceNauticalMiles, distance);
  assert.ok(context.bearingDegrees >= 0 && context.bearingDegrees < 360);
  assert.equal(context.travelHours.sailboat, distance / 5);
  assert.equal(bearingCardinal(270).short, "O");
});

test("les cinq routes officielles utilisent un unique port actif", () => {
  const page = read("app/page.tsx");
  const navigation = read("lib/marine-navigation.ts");
  assert.match(page, /homePort/);
  assert.match(page, /activePort/);
  assert.match(page, /nauticalContext/);
  for (const hash of ["#/carte", "#/marees", "#/conditions", "#/le-carre"]) assert.match(navigation, new RegExp(hash.replace("/", "\\/")));
  assert.doesNotMatch(page, />Météo<\/button>|>Histoire<\/button>|>Plus<\/button>/);
});

test("les caches réseau IndexedDB restent séparés du Carnet", () => {
  const storage = read("lib/v24/storage.ts");
  const marine = read("lib/marine-data.ts");
  const carnet = read("lib/v24/carnet.ts");
  assert.match(storage, /NETWORK_STORE = "network-cache"/);
  assert.match(storage, /CARNET_STORE = "carnet"/);
  assert.match(marine, /writeLocalRecord\("network-cache"/);
  assert.match(carnet, /writeLocalRecord\("carnet"/);
  assert.match(marine, /CACHE_VALIDITY_MS/);
  assert.match(marine, /REQUEST_TIMEOUT_MS/);
});

test("les écrans signalent les limites nautiques sans altérer Bosco", () => {
  const dashboard = read("components/MarineDashboard.tsx");
  const map = read("components/MancheMap.tsx");
  assert.match(dashboard, /ne conviennent pas à la navigation côtière/);
  assert.match(dashboard, /pas une station officielle/);
  assert.match(map, /sans calcul de route navigable/);
  assert.doesNotMatch(dashboard, /evaluateBosco/);
  assert.doesNotMatch(dashboard, /setActiveImage|playAnimation/);
});
