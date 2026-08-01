import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();
const page = readFileSync(join(root, "app/page.tsx"), "utf8");
const css = readFileSync(join(root, "app/globals.css"), "utf8");
const compositor = readFileSync(join(root, "components/BoscoCompositor.tsx"), "utf8");
const visual = readFileSync(join(root, "lib/bosco-visual-context.ts"), "utf8");
const animations = readFileSync(
  join(root, "lib/bosco-animation-registry.ts"),
  "utf8"
);
const sw = readFileSync(join(root, "public/sw.js"), "utf8");

const times = ["morning", "day", "evening", "night"];
const weather = [
  "clear",
  "mainly-clear",
  "partly-cloudy",
  "overcast",
  "fog",
  "drizzle",
  "rain",
  "heavy-rain",
  "snow",
  "storm"
];

test("the complete 4 × 10 contextual décor matrix is present", () => {
  for (const time of times) {
    const directory = join(root, "public/assets/bosco/decors", time);
    assert.equal(readdirSync(directory).filter((name) => name.endsWith(".webp")).length, 10);
    for (const family of weather) {
      const asset = join(directory, `${family}.webp`);
      assert.ok(existsSync(asset), `${time}/${family} missing`);
      assert.ok(statSync(asset).size > 10_000, `${time}/${family} unexpectedly small`);
    }
  }
});

test("all requested WMO codes map to the correct visual family", () => {
  const expectations = {
    0: "clear",
    1: "mainly-clear",
    2: "partly-cloudy",
    3: "overcast",
    45: "fog",
    48: "fog",
    51: "drizzle",
    53: "drizzle",
    56: "drizzle",
    55: "rain",
    57: "rain",
    61: "rain",
    63: "rain",
    66: "rain",
    80: "rain",
    81: "rain",
    65: "heavy-rain",
    67: "heavy-rain",
    82: "heavy-rain",
    71: "snow",
    73: "snow",
    75: "snow",
    77: "snow",
    85: "snow",
    86: "snow",
    95: "storm",
    96: "storm",
    99: "storm"
  };
  for (const [code, family] of Object.entries(expectations)) {
    assert.match(visual, new RegExp(`\\b${code}: "${family}"`));
  }
  assert.match(visual, /precipitationMmH >= 5[\s\S]*"heavy-rain"/);
  assert.match(visual, /precipitationMmH >= 1[\s\S]*"rain"/);
  assert.match(visual, /precipitationMmH > 0[\s\S]*"drizzle"/);
});

test("the scene is only a baked décor, a cutout, and the functional barometer needle", () => {
  assert.match(compositor, /scene-decor-back/);
  assert.match(compositor, /scene-bosco/);
  assert.match(compositor, /barometer-needle/);
  assert.doesNotMatch(page, /window-atmosphere|weather-sky|rain-streaks|fog-bank|lightning-bolt|interior-ambience|lantern-glow|className="steam"/);
  assert.doesNotMatch(css, /\.window-atmosphere|\.weather-rain|\.weather-storm|\.lightning-bolt|\.interior-ambience|\.lantern-glow|\.steam/);
});

test("camera remains fixed and Bosco uses an instant cut without zoom", () => {
  assert.match(css, /\.scene-layer[\s\S]*object-fit:\s*contain/);
  assert.match(css, /\.scene-layer[\s\S]*transform:\s*none\s*!important/);
  assert.doesNotMatch(css, /@keyframes scene-(?:arrive|leave)\s*\{[\s\S]*?transform:/);
  assert.doesNotMatch(css, /\.scene-bosco-hidden|transition:\s*opacity|scene-pose-fade|crossfade/i);
  assert.match(css, /\.scene-bosco,[\s\S]*transition:\s*none\s*!important/);
  assert.match(compositor, /data-pose-transition-ms="0"/);
  assert.doesNotMatch(page, /scale\(|objectFit:\s*"cover"/);
  assert.match(compositor, /data-camera-transform="none"/);
});

test("Bosco stays text-only without blink, lip-sync, or speech synthesis", () => {
  const joined = `${page}\n${css}`;
  assert.doesNotMatch(joined, /speechSynthesis|blink-overlay|mouth-sync|lip-sync|Écouter Bosco|speak-button/);
});

test("the repaired sea pose is restored without a global animation kill switch", () => {
  assert.doesNotMatch(page, /SEA_ANIMATION_AVAILABLE\s*=\s*false/);
  assert.doesNotMatch(page, /disableAllAnimations|seaPoseInvalid/);
  assert.match(animations, /"look-sea"/);
  assert.match(animations, /pose:\s*"sea"/);
  assert.match(page, /Promise\.allSettled/);
  assert.match(page, /finally/);
});

test("time, weather, and decision remain independent axes", () => {
  assert.match(visual, /return `\$\{decision\}:\$\{weather\}:\$\{time\}`/);
  assert.match(page, /setManualDaytime\(item\.id\)/);
  assert.match(page, /WEATHER_REPRESENTATIVE_WMO\[code\]/);
  assert.match(page, /labDecision/);
});

test("the service worker versions the restored animation assets independently", () => {
  assert.match(sw, /bosco-pwa-v28-official-manche-map/);
  assert.match(sw, /resting-step9-v4\.png/);
  assert.match(sw, /sea-step9-v4\.png/);
  assert.match(sw, /hands-behind\/resting-step9-v4\.png/);
  assert.match(sw, /fingers-front\/resting-step9-v4\.png/);
  assert.match(sw, /occlusion-canonical-step9-v4\.png/);
  assert.match(sw, /polders-cup-step9-v4\.png/);
  assert.match(sw, /Promise\.allSettled/);
  assert.doesNotMatch(sw, /step8-v3|step7b-v2/);
  assert.doesNotMatch(sw, /assets\/bosco\/poses|assets\/bosco\/decisions/);
  const listedDecors = (sw.match(/assets\/bosco\/decors/g) ?? []).length;
  assert.ok(listedDecors <= 2);
});
