import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import {
  BOSCO_INTRO_GREETING_MS,
  BOSCO_INTRO_ORDER,
  BOSCO_INTRO_THINKING_MS,
  BOSCO_INTRO_VERDICT_SETTLE_MS,
  boscoGreeting,
  boscoIntroStateAt,
  canAdvanceBoscoIntro,
} from "../lib/bosco-intro-machine";

const ROOT = process.cwd();

test("l'introduction suit greeting → thinking → verdict → completed", () => {
  assert.deepEqual(BOSCO_INTRO_ORDER, [
    "greeting",
    "thinking",
    "verdict",
    "completed",
  ]);
  assert.equal(boscoIntroStateAt(0), "greeting");
  assert.equal(boscoIntroStateAt(BOSCO_INTRO_GREETING_MS - 1), "greeting");
  assert.equal(boscoIntroStateAt(BOSCO_INTRO_GREETING_MS), "thinking");
  assert.equal(
    boscoIntroStateAt(
      BOSCO_INTRO_GREETING_MS + BOSCO_INTRO_THINKING_MS - 1,
    ),
    "thinking",
  );
  assert.equal(
    boscoIntroStateAt(BOSCO_INTRO_GREETING_MS + BOSCO_INTRO_THINKING_MS),
    "verdict",
  );
  assert.equal(
    boscoIntroStateAt(
      BOSCO_INTRO_GREETING_MS +
        BOSCO_INTRO_THINKING_MS +
        BOSCO_INTRO_VERDICT_SETTLE_MS,
    ),
    "completed",
  );
});

test("les durées minimales de lecture sont garanties", () => {
  assert.ok(BOSCO_INTRO_GREETING_MS >= 2_500);
  assert.ok(BOSCO_INTRO_THINKING_MS >= 4_000);
});

test("le prénom réel est utilisé et le fallback n'en invente aucun", () => {
  assert.equal(boscoGreeting("Guillaume"), "Salut, Guillaume.");
  assert.equal(boscoGreeting("  Lucile  "), "Salut, Lucile.");
  assert.equal(boscoGreeting(""), "Salut.");
  assert.equal(boscoGreeting(undefined), "Salut.");
});

test("la machine ne peut jamais revenir automatiquement en arrière", () => {
  for (let current = 0; current < BOSCO_INTRO_ORDER.length; current += 1) {
    for (let next = 0; next < BOSCO_INTRO_ORDER.length; next += 1) {
      assert.equal(
        canAdvanceBoscoIntro(
          BOSCO_INTRO_ORDER[current],
          BOSCO_INTRO_ORDER[next],
        ),
        next >= current,
      );
    }
  }
});

test("le code de l'accueil ne possède qu'une entrée dans le regard fenêtre", () => {
  const page = readFileSync(join(ROOT, "app/page.tsx"), "utf8");
  const animations = readFileSync(
    join(ROOT, "lib/bosco-animation-registry.ts"),
    "utf8",
  );
  assert.equal((page.match(/nextStage === "thinking"/g) ?? []).length, 1);
  assert.equal((page.match(/setState\("sea"\)/g) ?? []).length, 1);
  assert.equal(
    (page.match(/setMessage\("Mmmmmh… laisse-moi deux minutes\."\)/g) ?? [])
      .length,
    1,
  );
  assert.doesNotMatch(page, /runBriefingSequence|pendingSequence|firstSequence/);
  assert.doesNotMatch(
    animations.match(/BOSCO_IDLE_ANIMATIONS[\s\S]*?\];/)?.[0] ?? "",
    /look-sea/,
  );
});

test("Strict Mode et les nouveaux rendus reprennent la même horloge de session", () => {
  const page = readFileSync(join(ROOT, "app/page.tsx"), "utf8");
  assert.match(page, /BOSCO_INTRO_SESSION_KEY/);
  assert.match(page, /status:\s*"running",\s*startedAt/);
  assert.match(page, /status:\s*"completed",\s*startedAt/);
  assert.match(page, /window\.setInterval\(tick,\s*100\)/);
  assert.doesNotMatch(page, /visibilitychange[\s\S]{0,500}applyIntroStage/);
});

test("le verdict reste affiché après completed sans minuterie de remplacement", () => {
  const page = readFileSync(join(ROOT, "app/page.tsx"), "utf8");
  assert.match(
    page,
    /const verdict = resultRef\.current;[\s\S]*setMessage\(verdict\.dialogue\)/,
  );
  assert.doesNotMatch(
    page,
    /nextStage === "verdict"[\s\S]{0,500}setTimeout[\s\S]{0,200}setMessage/,
  );
});

test("la géométrie est fixe et les poses changent par coupe instantanée", () => {
  const css = readFileSync(
    join(ROOT, "components/BoscoHomeCarousel.module.css"),
    "utf8",
  );
  const globals = readFileSync(join(ROOT, "app/globals.css"), "utf8");
  const compositor = readFileSync(
    join(ROOT, "components/BoscoCompositor.tsx"),
    "utf8",
  );
  assert.match(css, /grid-template-rows:\s*minmax\(0,\s*1fr\)\s+var\(--bosco-message-height\)/);
  assert.match(css, /width:\s*min\(100cqw,\s*100cqh\)/);
  assert.match(css, /height:\s*min\(100cqw,\s*100cqh\)/);
  assert.doesNotMatch(globals, /scene-pose-fade|crossfade|fade-in|fade-out/i);
  assert.match(globals, /\.scene-bosco,[\s\S]*transition:\s*none\s*!important/);
  assert.match(compositor, /data-pose-transition-ms="0"/);
  assert.doesNotMatch(compositor, /previousLayers|slowTransition/);
  assert.match(compositor, /width="1536"[\s\S]*height="1536"/);
  assert.match(compositor, /data-camera-transform="none"/);
});
