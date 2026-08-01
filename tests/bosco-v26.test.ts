import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { createV26PortVisit, moveV26Visit } from "../data/narrative-v26.ts";

const read = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("Bosco ne sélectionne que ses récits fictifs publiés", () => {
  const visit = createV26PortVisit("jullouville", "Jullouville", 0);
  assert.equal(visit.story?.authorType, "bosco");
  assert.equal(visit.story?.reliability, "fictionalised");
  assert.equal(visit.phase, "story");
});

test("un port encore vide reste honnêtement en attente", () => {
  const visit = createV26PortVisit("granville", "Granville", 0);
  assert.equal(visit.story, null);
  assert.match(visit.invitation, /Émile/);
});

test("le parcours garde le même port de Bosco à Émile puis au retour", () => {
  const story = createV26PortVisit("jullouville", "Jullouville", 2);
  const emile = moveV26Visit(story, "emile");
  const closing = moveV26Visit(emile, "closing");
  assert.equal(emile.portId, story.portId);
  assert.equal(closing.story?.contentId, story.story?.contentId);
  assert.equal(closing.phase, "closing");
  assert.ok(closing.closingLine.length > 10);
});

test("la sélection Carte revient chez Bosco et le carnet s’ouvre sur Émile", () => {
  const page = read("app/page.tsx");
  const carousel = read("components/BoscoHomeCarousel.tsx");
  const square = read("components/SquareScreen.tsx");
  const navigation = read("lib/marine-navigation.ts");
  assert.match(page, /handleSelectPort[\s\S]*createV26PortVisit[\s\S]*navigateMarine\(null\)/);
  assert.match(page, /initialTab=\{narrativeVisit\?\.phase === "emile" \? "emile"/);
  assert.match(carousel, /📖 Voir le carnet d’Émile/);
  assert.match(square, /Refermer le carnet et retrouver Bosco/);
  assert.match(navigation, /selectPrimary/);
  assert.match(page, /selectPrimary\(null, \(\) => setHomeResetToken/);
});
