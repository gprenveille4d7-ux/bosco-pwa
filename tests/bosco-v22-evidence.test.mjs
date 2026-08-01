import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();
const evidence = JSON.parse(
  readFileSync(
    join(root, "deliverables/Bosco-Version-22/preuves-transitions.json"),
    "utf8",
  ),
);

test("the frame audit covers at least twenty consecutive pose changes", () => {
  assert.ok(evidence.poseChangesControlled >= 20);
  assert.ok(evidence.framesControlled >= 100);
  assert.equal(evidence.transitionDurationMs, 0);
});

test("every audited frame contains one fully opaque pose state", () => {
  assert.equal(evidence.emptyFramesDetected, 0);
  assert.equal(evidence.mixedFramesDetected, 0);
  assert.equal(evidence.minimumMeasuredOpacity, 1);
  assert.equal(evidence.visiblePoseStatesPerFrame, 1);
  for (const transition of evidence.transitions) {
    assert.equal(transition.transitionDurationMs, 0);
    assert.deepEqual(transition.opacityByFrame, [1, 1, 1, 1, 1]);
    assert.deepEqual(transition.visiblePoseStatesByFrame, [1, 1, 1, 1, 1]);
    assert.equal(transition.emptyFrameDetected, false);
    assert.equal(transition.mixedFrameDetected, false);
  }
});

test("production pose resources contain no embedded animation or fade frames", () => {
  assert.ok(Object.keys(evidence.productionAssetFrames).length >= 36);
  for (const frameCount of Object.values(evidence.productionAssetFrames)) {
    assert.equal(frameCount, 1);
  }
});
