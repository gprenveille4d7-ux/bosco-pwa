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

test("la carte sépare le choix de port du lancement volontaire et le carnet revient au récit", () => {
  const page = read("app/page.tsx");
  const carousel = read("components/BoscoHomeCarousel.tsx");
  const square = read("components/SquareScreen.tsx");
  const navigation = read("lib/marine-navigation.ts");
  assert.match(page, /type BoscoMode = "navigation" \| "story"/);
  assert.match(page, /handleChoosePort[\s\S]*setBoscoMode\("navigation"\)[\s\S]*navigateMarine\(null\)/);
  assert.match(page, /handleListenToBosco[\s\S]*createV26PortVisit[\s\S]*setBoscoMode\("story"\)/);
  assert.match(page, /initialTab=\{narrativeVisit\?\.phase === "emile" \? "emile"/);
  assert.match(carousel, /📖 Ouvrir le carnet d’Émile/);
  assert.match(square, /Retour aux histoires de Bosco/);
  assert.match(navigation, /selectPrimary/);
  assert.match(page, /selectBoscoTab[\s\S]*setBoscoMode\("navigation"\)[\s\S]*selectPrimary\(null/);
});

test("le récit conserve la taille normale de la scène et propose tous les retours", () => {
  const carousel = read("components/BoscoHomeCarousel.tsx");
  const css = read("components/BoscoHomeCarousel.module.css");
  assert.match(carousel, /Légende \{narrative\.storyIndex \+ 1\} sur \{narrative\.storyCount\}/);
  assert.match(carousel, /BOSCO AJOUTE/);
  assert.match(carousel, /Retour à l’avis de navigabilité/);
  assert.match(carousel, /Retour à la fiche du port/);
  assert.match(css, /--bosco-scene-height/);
  assert.match(css, /\.boscoSlide\[data-narrative="true"\] \.sceneFrame[\s\S]*flex:\s*0 0 var\(--bosco-scene-height\)/);
  assert.doesNotMatch(css, /\.boscoSlide\[data-narrative="true"\]\s*\{[^}]*--bosco-message-height/);
  assert.match(css, /\.storyCard[\s\S]*grid-template-columns:\s*minmax\(0, 2\.2fr\)/);
});
