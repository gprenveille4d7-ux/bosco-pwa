import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL("..", import.meta.url)));
const read = (path) => readFileSync(join(ROOT, path), "utf8");

const page = read("app/page.tsx");
const carousel = read("components/BoscoHomeCarousel.tsx");
const dashboard = read("components/MarineDashboard.tsx");
const square = read("components/SquareScreen.tsx");
const squareData = read("data/square-content.ts");
const css = read("components/BoscoHomeCarousel.module.css");
const navigation = read("lib/marine-navigation.ts");

test("l'accueil comporte un seul carrousel et exactement cinq cellules ordonnées", () => {
  assert.equal((carousel.match(/data-home-slide=/g) ?? []).length, 5);
  assert.match(page, /<BoscoHomeCarousel[\s\S]*?scene=\{[\s\S]*?<BoscoCompositor/);
  assert.match(carousel, /data-testid="bosco-home-carousel"/);
  assert.match(
    carousel,
    /data-home-slide="Bosco"[\s\S]*data-home-slide="Briefing"[\s\S]*data-home-slide="Score Bosco"[\s\S]*data-home-slide="Conseils"[\s\S]*data-home-slide="Vigilances"/,
  );
  assert.match(css, /\.homeMain\s*\{[\s\S]*?position:\s*relative/);
  assert.match(css, /overflow-x:\s*auto/);
  assert.match(css, /overflow-y:\s*hidden/);
  assert.match(css, /scroll-snap-type:\s*x mandatory/);
  assert.match(css, /scroll-snap-align:\s*start/);
  assert.match(css, /scroll-snap-stop:\s*always/);
  assert.match(css, /touch-action:\s*pan-x/);
  assert.match(css, /\.slide\s*\{[\s\S]*?flex:\s*0 0 100%/);
  assert.doesNotMatch(css, /margin-top:\s*-\d|translateY\(\s*-/);
});

test("le carrousel est manuel, accessible et ne pilote pas Bosco", () => {
  assert.match(carousel, /ArrowLeft/);
  assert.match(carousel, /ArrowRight/);
  assert.match(carousel, /aria-label="Accueil de Bosco"/);
  assert.match(carousel, /prefers-reduced-motion/);
  assert.match(carousel, /ResizeObserver/);
  assert.match(carousel, /aria-label="Cellule précédente"/);
  assert.match(carousel, /aria-label="Cellule suivante"/);
  assert.match(carousel, /aria-live="polite"/);
  assert.match(carousel, /ACTIVE_SLIDE_KEY/);
  assert.match(carousel, /sessionStorage/);
  assert.doesNotMatch(carousel, /setInterval|setTimeout|autoplay|speechSynthesis|Audio\(/);
  assert.doesNotMatch(carousel, /transition\(|playAnimation|setState|setActiveImage/);
  assert.doesNotMatch(carousel, /Écouter Bosco|bouton audio/i);
});

test("les cellules décisionnelles réutilisent exclusivement les données et la décision reçues", () => {
  assert.match(carousel, /message:\s*string/);
  assert.match(carousel, /result:\s*BoscoResult/);
  assert.match(carousel, /input:\s*BoscoWeatherInput/);
  assert.match(carousel, /Indisponible/);
  assert.doesNotMatch(carousel, /fetch\(|open-meteo|marine-api/);
  assert.doesNotMatch(carousel, /temperatureC:\s*\d|meanKt:\s*\d|waveHeightM:\s*\d/);
  assert.doesNotMatch(carousel, /\?\?\s*0|\|\|\s*0/);
  assert.match(carousel, /value === "falling"/);
  assert.match(carousel, /return "Étale"/);
  assert.match(carousel, /Aucune vigilance particulière détectée/);
  assert.match(carousel, /Score indisponible/);
  assert.match(carousel, /CONDITIONS ACTUELLES/);
  assert.doesNotMatch(carousel, /09 H — 13 H/);
});

test("l'accueil reçoit le relevé déjà chargé par Météo sans second appel réseau", () => {
  assert.match(dashboard, /onData\?: \(data: MarineDashboardData\) => void/);
  assert.match(dashboard, /if \(data\) onData\?\.\(data\)/);
  assert.match(page, /const applyMarineData = useCallback/);
  assert.match(page, /currentWeather\(marineData\)/);
  assert.match(page, /nearestSea\(marineData, target\)/);
  assert.match(page, /onData=\{handleMarineData\}/);
  assert.doesNotMatch(page, /fetch\(/);
  assert.equal(
    (dashboard.match(/fetchMarineDashboard\(/g) ?? []).length,
    1,
  );
  assert.doesNotMatch(page, /\?\?\s*0|\|\|\s*0/);
});

test("le verrouillage vertical est local à Bosco et se nettoie en quittant la route", () => {
  assert.match(page, /active=\{marineScreen === null\}/);
  assert.match(carousel, /if \(!active\) return/);
  assert.match(carousel, /document\.documentElement\.classList\.add/);
  assert.match(carousel, /document\.documentElement\.classList\.remove/);
  assert.match(carousel, /document\.body\.classList\.remove/);
  assert.match(css, /height:\s*100vh/);
  assert.match(css, /height:\s*100svh/);
  assert.match(css, /height:\s*100dvh/);
  assert.match(css, /\.homeShell\.homeShell\s*\{[\s\S]*?min-height:\s*0/);
  assert.match(css, /\.viewportLocked\s*\{[\s\S]*?overflow:\s*hidden/);
  assert.doesNotMatch(read("app/globals.css"), /body\s*\{[^}]*overflow-y:\s*hidden/);
});

test("Le Carré expose Bosco, Émile, le Coin du marin et le Carnet par hash", () => {
  assert.match(square, /LE CARRÉ/);
  assert.match(square, /Bosco/);
  assert.match(square, /Émile/);
  assert.match(square, /Coin du marin/);
  assert.match(square, /Carnet/);
  assert.match(square, /readCarnet/);
  assert.match(square, /toggleFavourite/);
  assert.match(squareData, /publicationStatus/);
  assert.match(squareData, /reliability/);
  assert.match(navigation, /square:\s*"#\/le-carre"/);
  assert.match(navigation, /history\.pushState/);
  assert.doesNotMatch(navigation, /location\.reload/);
});

test("la navigation officielle à cinq onglets respecte la safe area", () => {
  assert.match(page, />Bosco<\/button>[\s\S]*>Carte<\/button>[\s\S]*>Marées<\/button>[\s\S]*>Conditions<\/button>[\s\S]*>Le Carré<\/button>/);
  assert.match(read("components/MarineDashboard.tsx"), /SYNTHÈSE MARITIME/);
  assert.match(css, /bottom:\s*calc\(env\(safe-area-inset-bottom\) \+ 8px\)/);
  assert.match(css, /min-height:\s*50px/);
  assert.match(css, /min-width:\s*48px/);
  assert.match(css, /font-size:\s*24px/);
  assert.match(css, /activeRoute/);
  assert.match(css, /box-shadow:\s*inset 0 2px/);
  assert.match(page, /aria-current=/);
  assert.doesNotMatch(page, /window\.location\.(assign|replace)|location\.reload/);
});

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const absolute = join(directory, name);
    return statSync(absolute).isDirectory()
      ? walk(absolute)
      : [relative(ROOT, absolute)];
  });
}

test("les 104 fichiers et assets hors dialogue correspondent à la référence v22", () => {
  const protectedFiles = [
    "components/BoscoCompositor.tsx",
    "lib/bosco-animation-registry.ts",
    "lib/bosco-visual-context.ts",
    "app/globals.css",
    ...walk(join(ROOT, "public/assets/bosco")),
  ].sort();
  assert.equal(protectedFiles.length, 104);
  const aggregate = createHash("sha256");
  for (const path of protectedFiles) {
    const digest = createHash("sha256")
      .update(readFileSync(join(ROOT, path)))
      .digest("hex");
    aggregate.update(`${path}\0${digest}\n`);
  }
  assert.equal(
    aggregate.digest("hex"),
    "a449280644d24e3b101a3ed29d4d98a015749fd61cba7a74933eb28973f48134",
  );
});
