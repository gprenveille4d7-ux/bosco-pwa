import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";

const root = process.cwd();
const page = readFileSync(join(root, "app/page.tsx"), "utf8");
const compositor = readFileSync(
  join(root, "components/BoscoCompositor.tsx"),
  "utf8"
);
const css = readFileSync(join(root, "app/globals.css"), "utf8");
const visual = readFileSync(
  join(root, "lib/bosco-visual-context.ts"),
  "utf8"
);
const metadata = JSON.parse(
  readFileSync(
    join(root, "public/assets/bosco/compositing/pose-metadata.json"),
    "utf8"
  )
);

test("all twelve production poses share the exact canonical anchor", () => {
  assert.equal(metadata.poses.length, 12);
  for (const pose of metadata.poses) {
    assert.equal(pose.canvasWidth, 1536);
    assert.equal(pose.canvasHeight, 1536);
    assert.equal(pose.anchorX, 768);
    assert.equal(pose.anchorY, 1252);
    assert.equal(pose.pivotX, 768);
    assert.equal(pose.pivotY, 1252);
    assert.equal(pose.scale, 1);
    assert.ok(existsSync(join(root, "public", pose.assetPath)));
    assert.ok(existsSync(join(root, "public", pose.handBehindPath)));
    assert.ok(existsSync(join(root, "public", pose.fingersFrontPath)));
  }
  assert.equal(metadata.maxAnchorDeltaPx, 0);
});

test("the source alpha audit rejects rectangles and out-of-zone pixels", () => {
  const audit = spawnSync("python3", ["scripts/audit-step7-assets.py"], {
    cwd: root,
    encoding: "utf8",
  });
  assert.equal(audit.status, 0, audit.stderr || audit.stdout);
  const result = JSON.parse(audit.stdout);
  assert.deepEqual(result.errors, []);
  assert.equal(result.poses, 12);
});

test("the compositor renders one and only one complete Bosco element", () => {
  assert.equal((compositor.match(/data-bosco-element=/g) ?? []).length, 1);
  assert.doesNotMatch(
    `${page}\n${compositor}`,
    /previousImage|scene-image-outgoing|scene-image-current/
  );
  assert.doesNotMatch(compositor, /setPoseVisible|poseSwapTimer/);
  assert.match(compositor, /Promise\.all\(/);
  assert.match(compositor, /requestAnimationFrame/);
  assert.match(compositor, /setDisplayedLayers\(nextLayers\)/);
});

test("the depth stack is décor, Bosco, hand, cup, fingers, foreground, interface", () => {
  assert.match(css, /\.scene-decor-back\s*\{\s*z-index:\s*0/);
  assert.match(css, /\.scene-bosco\s*\{[\s\S]*?z-index:\s*10/);
  assert.match(css, /\.scene-hand-behind\s*\{[\s\S]*?z-index:\s*12/);
  assert.match(css, /\.scene-fixed-object\s*\{[\s\S]*?z-index:\s*20/);
  assert.match(css, /\.scene-fingers-front\s*\{[\s\S]*?z-index:\s*25/);
  assert.match(css, /\.scene-decor-foreground\s*\{[\s\S]*?z-index:\s*30/);
  assert.match(compositor, /data-occlusion-mask="canonical"/);
  assert.equal((compositor.match(/data-hand-layer=/g) ?? []).length, 2);
  assert.equal((compositor.match(/data-fixed-object="polders-cup"/g) ?? []).length, 1);
});

test("the scene has no camera transform or dynamic crop", () => {
  assert.match(css, /\.scene-layer[\s\S]*?object-fit:\s*contain/);
  assert.match(css, /\.scene-layer[\s\S]*?object-position:\s*center center/);
  assert.match(css, /\.scene-layer[\s\S]*?transform:\s*none\s*!important/);
  assert.doesNotMatch(
    compositor,
    /object-fit:\s*cover|scale\(|translate\(|perspective\(|Ken Burns|parallax/i
  );
  assert.doesNotMatch(css, /scene-pose-fade|crossfade/i);
  assert.match(compositor, /data-pose-transition-ms="0"/);
  assert.match(compositor, /data-camera-transform="none"/);
});

test("legacy composite cutouts are no longer used by the render mapping", () => {
  assert.doesNotMatch(visual, /assets\/bosco\/cutouts/);
  assert.match(visual, /assets\/bosco\/compositing\/poses/);
});

test("the hidden laboratory exposes technical views and deterministic animations", () => {
  assert.match(page, /data-production-navigation="hidden"/);
  assert.match(page, /Canal alpha/);
  assert.match(page, /Masque d’occlusion/);
  assert.match(page, /Boîte et ancre/);
  assert.match(page, /Damier/);
  assert.match(page, /Object\.values\(BOSCO_ANIMATIONS\)/);
  assert.match(page, /Animation active/);
  assert.match(page, /Décor seul/);
  assert.match(page, /Bosco seul/);
  assert.match(page, /Premier plan seul/);
  assert.match(page, /Tasse seule/);
  assert.match(page, /Vue de différence/);
});
