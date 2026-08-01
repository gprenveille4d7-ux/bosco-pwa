import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { MANCHE_PORTS } from "../data/manche-ports.ts";
import { MONT_SAINT_MICHEL_V27_CONTENTS, MONT_SAINT_MICHEL_V27_COUNTS } from "../data/mont-saint-michel-v27.ts";
import { createV26PortVisit } from "../data/narrative-v26.ts";
import { selectNarrativeContents } from "../data/square-content.ts";
import { emptyCarnet, narrativeIndexForPort, withNarrativeIndex } from "../lib/v24/carnet.ts";

const read = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("le Mont-Saint-Michel reste un port unique", () => {
  assert.equal(MANCHE_PORTS.filter((port) => port.id === "mont-saint-michel").length, 1);
});

test("la v27 contient exactement dix fictions Bosco et dix récits réels Émile", () => {
  assert.deepEqual(MONT_SAINT_MICHEL_V27_COUNTS, { fiction: 10, real: 10, total: 20 });
  assert.equal(new Set(MONT_SAINT_MICHEL_V27_CONTENTS.map((content) => content.contentId)).size, 20);

  const fiction = MONT_SAINT_MICHEL_V27_CONTENTS.filter((content) => content.narrativeCategory === "fiction");
  const real = MONT_SAINT_MICHEL_V27_CONTENTS.filter((content) => content.narrativeCategory === "real");
  assert.equal(selectNarrativeContents("mont-saint-michel", "fiction").length, 10);
  assert.equal(selectNarrativeContents("mont-saint-michel", "real").length, 10);
  assert.ok(fiction.every((content) => content.authorType === "bosco" && content.reliability === "fictionalised" && content.sources.length === 0));
  assert.ok(real.every((content) => content.authorType === "emile" && content.reliability !== "fictionalised" && content.sources.length > 0));
  assert.ok(MONT_SAINT_MICHEL_V27_CONTENTS.every((content) => content.portId === "mont-saint-michel" && content.offlineAvailable));
});

test("chaque légende ouvre la page réelle correspondante sans changer de port", () => {
  for (let index = 0; index < 10; index += 1) {
    const visit = createV26PortVisit("mont-saint-michel", "Le Mont-Saint-Michel", index);
    assert.equal(visit.story?.narrativeCategory, "fiction");
    assert.equal(visit.emileStory?.narrativeCategory, "real");
    assert.equal(visit.story?.contentId.endsWith(String(index + 1).padStart(2, "0")), true);
    assert.equal(visit.emileStory?.contentId.endsWith(String(index + 1).padStart(2, "0")), true);
    assert.equal(visit.story?.portId, visit.emileStory?.portId);
  }
});

test("les positions de lecture Bosco et Émile progressent indépendamment", () => {
  const empty = emptyCarnet();
  const afterBosco = withNarrativeIndex(empty, "mont-saint-michel", "fiction", 4, "2026-08-02T10:00:00Z");
  assert.equal(narrativeIndexForPort(afterBosco, "mont-saint-michel", "fiction"), 4);
  assert.equal(narrativeIndexForPort(afterBosco, "mont-saint-michel", "real"), 0);

  const afterEmile = withNarrativeIndex(afterBosco, "mont-saint-michel", "real", 7, "2026-08-02T10:01:00Z");
  assert.equal(narrativeIndexForPort(afterEmile, "mont-saint-michel", "fiction"), 4);
  assert.equal(narrativeIndexForPort(afterEmile, "mont-saint-michel", "real"), 7);
});

test("l’interface transmet la page contextuelle, conserve le port et revient devant Bosco", () => {
  const page = read("app/page.tsx");
  const square = read("components/SquareScreen.tsx");
  const nautical = read("hooks/useNauticalContext.ts");
  assert.match(page, /initialContentId=\{narrativeVisit\?\.phase === "emile" \? narrativeVisit\.emileStory\?\.contentId/);
  assert.match(page, /selectBoscoTab[\s\S]*navigateMarine\(null\)|selectBoscoTab[\s\S]*selectPrimary\(null/);
  assert.match(square, /Progression indépendante des récits/);
  assert.match(square, /FICTION · BOSCO/);
  assert.match(square, /RÉEL · ÉMILE/);
  assert.match(nautical, /ACTIVE_PORT_KEY/);
  assert.match(nautical, /localStorage\.setItem\(ACTIVE_PORT_KEY, port\.id\)/);
});

test("le service worker précache le bundle qui embarque les vingt récits", () => {
  const serviceWorker = read("public/sw.js");
  assert.match(serviceWorker, /bosco-pwa-v27-mont-saint-michel/);
  assert.match(serviceWorker, /precacheApplication/);
  assert.match(serviceWorker, /html\.matchAll/);
  assert.match(serviceWorker, /url\.pathname\.startsWith\("\/assets\/"\)/);
});
