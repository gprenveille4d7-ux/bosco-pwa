import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
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
const animations = readFileSync(
  join(root, "lib/bosco-animation-registry.ts"),
  "utf8"
);
const sw = readFileSync(join(root, "public/sw.js"), "utf8");
const emotions = readFileSync(
  join(root, "data/bosco/bosco-emotions.json"),
  "utf8"
);
const metadata = JSON.parse(
  readFileSync(
    join(root, "public/assets/bosco/compositing/pose-metadata.json"),
    "utf8"
  )
);

test("the definitive compositor uses only versioned cup, mask and pose resources", () => {
  assert.equal(metadata.version, "bosco-step9-v4");
  assert.match(metadata.foregroundMask, /occlusion-canonical-step9-v4\.png$/);
  assert.match(metadata.fixedObjects.poldersCup, /polders-cup-step9-v4\.png$/);
  assert.ok(existsSync(join(root, "public", metadata.foregroundMask)));
  assert.ok(existsSync(join(root, "public", metadata.fixedObjects.poldersCup)));
  for (const pose of metadata.poses) {
    assert.match(pose.assetPath, /-step9-v4\.png$/);
    assert.match(pose.handBehindPath, /-step9-v4\.png$/);
    assert.match(pose.fingersFrontPath, /-step9-v4\.png$/);
    assert.ok(existsSync(join(root, "public", pose.assetPath)));
    assert.ok(existsSync(join(root, "public", pose.handBehindPath)));
    assert.ok(existsSync(join(root, "public", pose.fingersFrontPath)));
  }
  for (const directory of [
    "poses",
    "masks",
    "objects",
    "hands-behind",
    "fingers-front",
  ]) {
    const obsolete = readdirSync(
      join(root, "public/assets/bosco/compositing", directory)
    ).filter((name) => /step7b-v2|step8-v3/.test(name));
    assert.deepEqual(obsolete, []);
  }
  const production = `${compositor}\n${visual}\n${sw}`;
  assert.doesNotMatch(
    production,
    /compositing\/(?:poses\/(?:resting|satisfied|protective)\.png|masks\/occlusion-canonical\.png|objects\/polders-cup\.png)/
  );
});

test("one fixed POLDERS cup is rendered above one complete Bosco", () => {
  assert.equal((compositor.match(/data-bosco-element="unique"/g) ?? []).length, 1);
  assert.equal((compositor.match(/data-fixed-object="polders-cup"/g) ?? []).length, 1);
  assert.doesNotMatch(compositor, /mobileCup|movingCup|cupSwap/);
  assert.match(css, /\.scene-bosco\s*\{[\s\S]*?z-index:\s*10/);
  assert.match(css, /\.scene-hand-behind\s*\{[\s\S]*?z-index:\s*12/);
  assert.match(css, /\.scene-fixed-object\s*\{[\s\S]*?z-index:\s*20/);
  assert.match(css, /\.scene-fingers-front\s*\{[\s\S]*?z-index:\s*25/);
  assert.match(css, /\.scene-decor-foreground\s*\{[\s\S]*?z-index:\s*30/);
});

test("background and foreground share the same displayed contextual source", () => {
  assert.equal((compositor.match(/src=\{displayedDecor\}/g) ?? []).length, 2);
  assert.match(css, /\.scene-layer[\s\S]*?position:\s*absolute/);
  assert.match(css, /\.scene-layer[\s\S]*?inset:\s*0/);
  assert.match(css, /\.scene-layer[\s\S]*?object-fit:\s*contain/);
  assert.match(css, /\.scene-layer[\s\S]*?object-position:\s*center center/);
  assert.match(css, /mask-mode:\s*alpha/);
});

test("animations are restored independently at the canonical anchor", () => {
  assert.match(page, /sequenceRunning\.current/);
  assert.doesNotMatch(page, /pendingSequence\.current/);
  assert.match(page, /if \(sequenceRunning\.current\)/);
  assert.match(page, /setSeaAnimationPhase\("idle"\)/);
  assert.doesNotMatch(page, /SEA_ANIMATION_AVAILABLE\s*=\s*false/);
  assert.match(page, /Promise\.allSettled/);
  assert.match(page, /finally/);
  assert.match(page, /\[id\]: false/);
  assert.match(page, /neutralisée sans bloquer les autres/);
  assert.match(page, /scheduleNextIdleRef\.current/);
  assert.match(page, /handBehindForPoseAsset\(activeImage\)/);
  assert.match(page, /fingersFrontForPoseAsset\(activeImage\)/);
  assert.match(compositor, /Promise\.all\([\s\S]*decodeImage\(poseSrc\)/);
  assert.match(compositor, /requestAnimationFrame[\s\S]*setDisplayedLayers\(nextLayers\)/);
  assert.match(compositor, /activePoseTransition\.current !== transitionId/);
  assert.doesNotMatch(
    compositor,
    /\}, \[\s*displayedFingersFront[\s\S]*displayedPose/
  );
  assert.match(page, /25_000/);
  assert.match(page, /20_000/);
  assert.match(page, /document\.hidden/);
  assert.match(page, /visibilitychange/);
  assert.match(animations, /duration:\s*5750/);
  assert.match(animations, /at:\s*450/);
  assert.match(animations, /at:\s*2100/);
  assert.match(animations, /at:\s*4100/);
  assert.match(animations, /at:\s*4925/);
  assert.match(animations, /pose:\s*"sea"/);
  assert.match(emotions, /"pose":\s*"sea"/);
  assert.match(emotions, /"animation":\s*"look-sea"/);
  const seaPose = metadata.poses.find((pose) => pose.poseId === "sea");
  assert.equal(seaPose.productionAllowed, true);
  assert.equal(seaPose.validationStatus, "validated");
  assert.equal(metadata.maxAnchorDeltaPx, 0);
  for (const pose of metadata.poses) {
    assert.equal(pose.anchorX, 768);
    assert.equal(pose.anchorY, 1252);
    assert.equal(pose.scale, 1);
  }
});

test("camera and scene remain fixed with no animated global transform", () => {
  assert.match(css, /\.scene-layer[\s\S]*?transform:\s*none\s*!important/);
  assert.doesNotMatch(
    `${page}\n${compositor}\n${css}`,
    /(^|[^a-z])scale\(|Ken Burns|parallax/i
  );
  assert.doesNotMatch(css, /scene-pose-fade|crossfade/i);
  assert.match(compositor, /data-pose-transition-ms="0"/);
  assert.match(compositor, /data-camera-transform="none"/);
});

test("all 40 existing decors remain present and untouched in count", () => {
  for (const time of ["morning", "day", "evening", "night"]) {
    const files = readdirSync(
      join(root, "public/assets/bosco/decors", time)
    ).filter((name) => name.endsWith(".webp"));
    assert.equal(files.length, 10);
  }
});

test("the new service worker precaches restored assets without obsolete resources", () => {
  assert.match(sw, /bosco-pwa-v27-mont-saint-michel/);
  assert.doesNotMatch(sw, /step7b-v2|step8-v3/);
  assert.match(sw, /sea-step9-v4/);
  assert.match(sw, /hands-behind\/resting-step9-v4/);
  assert.match(sw, /fingers-front\/resting-step9-v4/);
  assert.doesNotMatch(sw, /poses\/resting\.png/);
  assert.doesNotMatch(sw, /masks\/occlusion-canonical\.png/);
  assert.doesNotMatch(sw, /objects\/polders-cup\.png/);
});
