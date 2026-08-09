import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const page = readFileSync("assets/page-GeminiSequence-v29.js", "utf8");
const helper = readFileSync("assets/bosco-gemini-client-v1.js", "utf8");
const worker = readFileSync("sw.js", "utf8");

test("la séquence explicite garde une seule réponse finale", () => {
  assert.match(page, /bosco:intro:v29-gemini-sequence/);
  assert.match(page, /\[`welcome`,`thinking`,`doubleCheck`,`answer`,`completed`\]/);
  assert.match(page, /w===`answer`\|\|w===`completed`\?p:\{\.\.\.p,dialogue:x\}/);
  assert.doesNotMatch(page, /W\.current===`verdict`/);
});

test("Gemini est tenté au maximum deux fois avec une double vérification courte", () => {
  assert.equal(page.split("requestBoscoGeneratedDialogue(").length - 1, 2);
  assert.match(page, /safetyPriority,5500/);
  assert.match(page, /safetyPriority,2e3/);
  assert.match(page, /window\.setTimeout\(e,1800\)/);
  assert.match(page, /Attends voir, matelot… j’aime pas trancher quand j’ai un doute\./);
  assert.match(helper, /timeoutMs = TIMEOUT_MS/);
});

test("le mode hors ligne ne lance aucune requête et le cache publie le nouveau bundle", () => {
  assert.match(page, /if\(!t\.online\)\{await new Promise/);
  assert.match(page, /i\(t\.local\.dialogue,!1\);return/);
  assert.match(worker, /bosco-pwa-v28-gemini-3\.3/);
  assert.match(worker, /page-GeminiSequence-v29\.js/);
});
