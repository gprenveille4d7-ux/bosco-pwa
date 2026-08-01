import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const read = (path) => readFileSync(join(process.cwd(), path), "utf8");
const ports = read("data/manche-ports.ts");
const geometry = read("data/manche-map-geometry.ts");
const map = read("components/MancheMap.tsx");
const mapCss = read("components/MancheMap.module.css");
const carousel = read("components/BoscoHomeCarousel.tsx");
const mapScreen = read("components/NauticalMapScreen.tsx");
const marine = read("lib/marine-data.ts");
const nauticalContext = read("hooks/useNauticalContext.ts");

test("la base locale contient exactement les trente ports demandés", () => {
  assert.equal((ports.match(/\{ id:/g) ?? []).length, 30);
  for (const name of [
    "Le Mont-Saint-Michel",
    "Jullouville",
    "Granville",
    "Chausey",
    "Barneville-Carteret",
    "Goury",
    "Cherbourg",
    "Port Chantereyne",
    "Barfleur",
    "Saint-Vaast-la-Hougue",
    "Tatihou",
    "Utah Beach",
    "Carentan",
  ]) {
    assert.match(ports, new RegExp(`name: "${name}"`));
  }
  assert.match(ports, /id: "jullouville"[\s\S]*latitude: 48\.7757/);
  assert.match(ports, /DEFAULT_MANCHE_PORT/);
});

test("le registre central versionne les identités, statuts, types et sources de marée", () => {
  for (const field of ["status", "type", "activePortAllowed", "homePortAllowed", "tideRelation", "version"]) {
    assert.match(ports, new RegExp(field));
  }
  assert.match(ports, /PORT_REGISTRY_VERSION/);
  assert.match(ports, /forecast-grid/);
  assert.match(ports, /findManchePort/);
});

test("la carte est un SVG local fondé sur le contour IGN et la projection GPS", () => {
  assert.doesNotMatch(carousel, /data-home-slide="Carte"/);
  assert.match(mapScreen, /<MancheMap/);
  assert.match(mapScreen, /homePort/);
  assert.match(carousel, /const SLIDE_COUNT = SLIDE_TABS\.length/);
  assert.match(map, /<svg/);
  assert.match(map, /MANCHE_DEPARTMENT_PATH/);
  assert.match(map, /projectMancheCoordinates\(port\.latitude, port\.longitude\)/);
  assert.match(map, /id=\{`map-port-\$\{port\.id\}`\}/);
  assert.match(geometry, /IGN ADMIN EXPRESS COG/);
  assert.match(geometry, /MANCHE_GEO_BOUNDS/);
  assert.ok(geometry.length > 10_000);
  assert.doesNotMatch(`${map}\n${carousel}`, /leaflet|google maps|mapbox/i);
  assert.match(mapCss, /overflow:\s*hidden/);
});

test("les relevés sont chargés uniquement pour le port touché puis réutilisés", () => {
  assert.equal((map.match(/fetchMarineDashboard\(/g) ?? []).length, 1);
  assert.match(map, /datasets\[port\.id\]/);
  assert.match(map, /requestRef\.current\?\.abort/);
  assert.match(map, /Choisir ce port/);
  assert.match(map, /État de la mer/);
  assert.match(map, /Houle/);
  assert.match(map, /Vent/);
  assert.match(map, /Marée/);
  assert.match(marine, /cacheKey\(location\)/);
  assert.match(marine, /latitude:\s*String\(location\.latitude\)/);
  assert.match(marine, /longitude:\s*String\(location\.longitude\)/);
});

test("port d’attache et port actif sont persistés séparément avec migration contrôlée", () => {
  assert.match(nauticalContext, /HOME_PORT_KEY/);
  assert.match(nauticalContext, /ACTIVE_PORT_KEY/);
  assert.match(nauticalContext, /LEGACY_SELECTED_PORT_KEY/);
  assert.match(nauticalContext, /localStorage\.getItem/);
  assert.match(nauticalContext, /localStorage\.setItem/);
  assert.match(nauticalContext, /DEFAULT_MANCHE_PORT/);
});
