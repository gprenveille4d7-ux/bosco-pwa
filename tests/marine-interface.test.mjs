import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import test from "node:test";
import {
  classifySeaState,
  degreesToCardinal,
  deriveTideEvents,
  finiteOrNull,
  interpolateHeight,
  metresPerSecondToKnots,
  nextTideEvent,
  tideTrendAt,
  weatherDescription,
} from "../lib/marine-math.mjs";

const ROOT = process.cwd();

function filesBelow(directory) {
  return readdirSync(directory)
    .flatMap((name) => {
      const path = join(directory, name);
      return statSync(path).isDirectory() ? filesBelow(path) : [path];
    })
    .sort();
}

test("les degrés utilisent les seize secteurs cardinaux français", () => {
  assert.deepEqual(degreesToCardinal(0), { short: "N", long: "Nord" });
  assert.deepEqual(degreesToCardinal(45), { short: "NE", long: "Nord-est" });
  assert.deepEqual(degreesToCardinal(180), { short: "S", long: "Sud" });
  assert.deepEqual(degreesToCardinal(270), { short: "O", long: "Ouest" });
  assert.deepEqual(degreesToCardinal(359), { short: "N", long: "Nord" });
  assert.equal(degreesToCardinal(null), null);
});

test("la conversion m/s vers nœuds reste exacte et les absences restent absentes", () => {
  assert.ok(Math.abs(metresPerSecondToKnots(10) - 19.438444924406) < 1e-10);
  assert.equal(metresPerSecondToKnots(undefined), null);
  assert.equal(finiteOrNull("not-a-number"), null);
});

test("la classification de mer reste compatible avec la hauteur significative", () => {
  assert.equal(classifySeaState(0.05), "Calme");
  assert.equal(classifySeaState(0.4), "Ridée");
  assert.equal(classifySeaState(0.8), "Belle");
  assert.equal(classifySeaState(1.8), "Peu agitée");
  assert.equal(classifySeaState(3), "Agitée");
  assert.equal(classifySeaState(null), null);
});

test("le mapping météo couvre les familles WMO utiles sans valeur fictive", () => {
  assert.equal(weatherDescription(0), "Ciel dégagé");
  assert.equal(weatherDescription(45), "Brouillard");
  assert.equal(weatherDescription(65), "Forte pluie");
  assert.equal(weatherDescription(95), "Orage");
  assert.equal(weatherDescription(undefined), "Indisponible");
});

const tideSamples = [
  { time: "2026-07-28T00:00", heightM: 1.0 },
  { time: "2026-07-28T03:00", heightM: 3.0 },
  { time: "2026-07-28T06:00", heightM: 5.0 },
  { time: "2026-07-28T09:00", heightM: 3.0 },
  { time: "2026-07-28T12:00", heightM: 1.0 },
  { time: "2026-07-28T15:00", heightM: 3.0 },
  { time: "2026-07-28T18:00", heightM: 5.0 },
  { time: "2026-07-28T21:00", heightM: 3.0 },
  { time: "2026-07-28T23:00", heightM: 1.5 },
];

test("les étales sont dérivées et ordonnées depuis les hauteurs réelles", () => {
  const events = deriveTideEvents(tideSamples);
  assert.deepEqual(
    events.map((event) => [event.type, event.time, event.heightM]),
    [
      ["high", "2026-07-28T06:00", 5],
      ["low", "2026-07-28T12:00", 1],
      ["high", "2026-07-28T18:00", 5],
    ],
  );
  assert.equal(
    nextTideEvent(events, "2026-07-28T07:00")?.time,
    "2026-07-28T12:00",
  );
});

test("hauteur interpolée et tendance utilisent la même série que le graphique", () => {
  assert.equal(interpolateHeight(tideSamples, "2026-07-28T04:30"), 4);
  assert.equal(tideTrendAt(tideSamples, "2026-07-28T04:30"), "rising");
  assert.equal(tideTrendAt(tideSamples, "2026-07-28T10:30"), "falling");
});

test("vent, rafales, vagues et houle conservent quatre champs distincts", () => {
  const source = readFileSync(join(ROOT, "lib/marine-data.ts"), "utf8");
  for (const field of ["windKt", "gustKt", "waveHeightM", "swellHeightM"]) {
    assert.match(source, new RegExp(`\\b${field}\\b`));
  }
  assert.doesNotMatch(source, /\?\?\s*0\b/);
});

test("la rose indique explicitement la provenance du vent", () => {
  const source = readFileSync(join(ROOT, "components/MarineDashboard.tsx"), "utf8");
  assert.match(source, /Le vent vient du/);
  assert.match(source, /degrés/);
  assert.match(source, /transform=\{`rotate\(\$\{rotation\} 130 130\)`\}/);
  assert.match(source, /<Compass degrees=\{weather\?\.windDirectionDeg\}/);
});

test("Conditions se parcourt par cellules horizontales sans masquer l’orientation du vent", () => {
  const source = readFileSync(join(ROOT, "components/MarineDashboard.tsx"), "utf8");
  const css = readFileSync(join(ROOT, "components/MarineDashboard.module.css"), "utf8");
  assert.match(source, /Conditions maritimes, quatre cellules à parcourir horizontalement/);
  assert.match(source, /VENT · ORIENTATION/);
  assert.match(source, /Vent de \$\{windDirection\.long\}/);
  assert.match(source, /Balaye horizontalement pour parcourir les conditions/);
  assert.match(css, /\.conditionCarousel[\s\S]*overflow-x:\s*auto/);
  assert.match(css, /scroll-snap-type:\s*x mandatory/);
  assert.match(css, /\.conditionSlide[\s\S]*flex:\s*0 0 100%/);
});

test("Conditions s’ouvre sur l’heure réelle sans ajouter de bandeau", () => {
  const source = readFileSync(join(ROOT, "components/MarineDashboard.tsx"), "utf8");
  const css = readFileSync(join(ROOT, "components/MarineDashboard.module.css"), "utf8");
  assert.match(source, /dateKey === parisDateKey\(\)/);
  assert.match(source, /selectedCell\.offsetLeft - \(strip\.clientWidth - selectedCell\.clientWidth\) \/ 2/);
  assert.match(source, /Prévisions heure par heure, centrées sur l’heure consultée/);
  assert.match(css, /\.hourCell[\s\S]*scroll-snap-align:\s*center/);
  assert.doesNotMatch(source, /Créneau consulté/);
  assert.doesNotMatch(source, /TimeSlotIndicator/);
});

test("Marées s’ouvre sur maintenant dans une fenêtre de douze heures balayable", () => {
  const source = readFileSync(join(ROOT, "components/MarineDashboard.tsx"), "utf8");
  const css = readFileSync(join(ROOT, "components/MarineDashboard.module.css"), "utf8");
  assert.match(source, /Courbe de marée sur une fenêtre de douze heures/);
  assert.match(source, /centerMinute \/ \(24 \* 60\)/);
  assert.match(source, /viewport\.scrollTo\(\{ left: target, behavior: "auto" \}\)/);
  assert.match(css, /\.tideChartViewport[\s\S]*overflow-x:\s*auto/);
  assert.match(css, /\.tideChart[\s\S]*width:\s*200%/);
});

test("les trois destinations et le retour vers Bosco sont reliés sans rechargement", () => {
  const navigation = readFileSync(join(ROOT, "lib/marine-navigation.ts"), "utf8");
  const page = readFileSync(join(ROOT, "app/page.tsx"), "utf8");
  assert.match(navigation, /#\/conditions/);
  assert.match(navigation, /#\/marees/);
  assert.match(navigation, /#\/carte/);
  assert.match(navigation, /#\/le-carre/);
  assert.match(navigation, /history\.pushState/);
  assert.match(page, /navigateMarine\(null\)/);
  assert.doesNotMatch(navigation, /location\.reload/);
});

test("le cache hors-ligne restitue la dernière donnée valide sans créer de zéro", () => {
  const source = readFileSync(join(ROOT, "lib/marine-data.ts"), "utf8");
  const component = readFileSync(join(ROOT, "components/MarineDashboard.tsx"), "utf8");
  assert.match(source, /readLocalRecord<MarineDashboardData>/);
  assert.match(source, /expiresAt/);
  assert.match(source, /stale:/);
  assert.match(source, /cached: true/);
  assert.match(source, /Promise\.allSettled/);
  assert.doesNotMatch(source, /seaLevelHeightMslM\s*\?\?\s*0/);
  assert.match(component, /hasRequested\.current/);
  assert.match(component, /Indisponible/);
});

test("le relevé courant et sept jours horaires sont demandés en Europe/Paris", () => {
  const source = readFileSync(join(ROOT, "lib/marine-data.ts"), "utf8");
  const component = readFileSync(join(ROOT, "components/MarineDashboard.tsx"), "utf8");
  assert.match(source, /timezone:\s*location\.timezone/);
  assert.match(source, /forecast_days:\s*"7"/);
  assert.match(source, /current:\s*currentVariables\.join/);
  assert.match(source, /currentWeather:\s*HourlyForecast \| null/);
  assert.match(source, /parseCurrentWeather/);
  assert.match(component, /const PARIS_TIMEZONE = "Europe\/Paris"/);
  assert.match(component, /PRÉVISIONS SUR 7 JOURS/);
  assert.match(component, /ForecastDateNavigator/);
  assert.doesNotMatch(component, /09 h — 13 h/);
  assert.match(component, /slice\(0, 24\)/);
});

test("l'application se remet à l'heure sans rester figée sur l'ouverture", () => {
  const component = readFileSync(join(ROOT, "components/MarineDashboard.tsx"), "utf8");
  const page = readFileSync(join(ROOT, "app/page.tsx"), "utf8");
  assert.match(component, /15 \* 60_000/);
  assert.match(component, /visibilitychange/);
  assert.match(component, /window\.addEventListener\("focus"/);
  assert.match(page, /const weather = currentWeather\(marineData\)/);
});

test("la feuille dédiée borne la largeur et empêche le débordement de page", () => {
  const css = readFileSync(
    join(ROOT, "components/MarineDashboard.module.css"),
    "utf8",
  );
  assert.match(css, /\.dashboard[\s\S]*overflow:\s*hidden/);
  assert.match(css, /\.scrollArea[\s\S]*overflow-x:\s*hidden/);
  assert.match(css, /width:\s*min\(1080px,\s*100%\)/);
  assert.match(css, /@media \(max-width:\s*620px\)/);
  assert.match(css, /@media \(max-width:\s*350px\)/);
  assert.match(css, /env\(safe-area-inset-bottom\)/);
});

test("les fichiers et assets hors dialogue de Bosco correspondent à la référence v22", () => {
  const protectedFiles = [
    "components/BoscoCompositor.tsx",
    "lib/bosco-animation-registry.ts",
    "lib/bosco-experience.ts",
    "lib/bosco-visual-context.ts",
    "app/globals.css",
    ...filesBelow(join(ROOT, "public/assets/bosco")).map((path) =>
      relative(ROOT, path),
    ),
  ].sort();
  const manifest = protectedFiles
    .map((path) => {
      const digest = createHash("sha256")
        .update(readFileSync(join(ROOT, path)))
        .digest("hex");
      return `${digest}  ${path}\n`;
    })
    .join("");
  const aggregate = createHash("sha256").update(manifest).digest("hex");
  assert.equal(
    aggregate,
    "00a57ddc0c816b361473dceae8ee9bfd3e6280b0813e6819c2fb303ee9399441",
  );
});
