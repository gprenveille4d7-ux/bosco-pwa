import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();
const compositor = readFileSync(
  join(root, "components/BoscoCompositor.tsx"),
  "utf8",
);
const css = readFileSync(join(root, "app/globals.css"), "utf8");

function deferred() {
  let resolve;
  let reject;
  const promise = new Promise((onResolve, onReject) => {
    resolve = onResolve;
    reject = onReject;
  });
  return { promise, resolve, reject };
}

function createAtomicSwapHarness(initialPose = "idle") {
  let activeId = 0;
  let renderedPose = initialPose;
  const commits = [];
  const frames = [];

  async function request(pose, readiness) {
    const requestId = ++activeId;
    try {
      await readiness;
      if (requestId !== activeId) return false;
      await new Promise((resolve) => setImmediate(resolve));
      if (requestId !== activeId) return false;
      const before = renderedPose;
      renderedPose = pose;
      commits.push(pose);
      frames.push({
        frameN: { pose: before, opacity: 1, visiblePoseCount: 1 },
        frameNPlus1: { pose, opacity: 1, visiblePoseCount: 1 },
      });
      return true;
    } catch {
      return false;
    }
  }

  return {
    request,
    renderedPose: () => renderedPose,
    commits: () => [...commits],
    frames: () => [...frames],
  };
}

test("the compositor has a strict zero-millisecond atomic-cut contract", () => {
  assert.doesNotMatch(
    compositor,
    /previousLayers|fadeCleanup|transitionSerial|slowTransition/,
  );
  assert.doesNotMatch(
    `${compositor}\n${css}`,
    /scene-pose-fade|crossfade|fade-in|fade-out|AnimatePresence|globalAlpha/,
  );
  assert.doesNotMatch(css, /@keyframes[^{]*(?:fade|cross)/i);
  assert.doesNotMatch(
    compositor,
    /setDisplayedLayers\(\s*\{[^}]*?(?:pose|handBehind|fingersFront)\s*:\s*["']["']/s,
  );
  assert.match(compositor, /data-pose-visible="true"/);
  assert.match(compositor, /data-pose-swap="decoded-atomic"/);
  assert.match(compositor, /data-pose-transition-ms="0"/);
  assert.match(
    css,
    /\.scene-bosco,[\s\S]*?opacity:\s*1\s*!important;[\s\S]*?transition:\s*none\s*!important;[\s\S]*?animation:\s*none\s*!important;/,
  );
  assert.equal((compositor.match(/data-bosco-element="unique"/g) ?? []).length, 1);
  assert.equal((compositor.match(/scene-pose-atomic/g) ?? []).length, 3);
});

test("all three moving layers decode before one atomic frame commit", () => {
  const decodeStart = compositor.indexOf("void Promise.all([");
  const poseDecode = compositor.indexOf("decodeImage(poseSrc)", decodeStart);
  const handDecode = compositor.indexOf("decodeImage(handBehindSrc)", decodeStart);
  const fingersDecode = compositor.indexOf(
    "decodeImage(fingersFrontSrc)",
    decodeStart,
  );
  const frameStart = compositor.indexOf("window.requestAnimationFrame", decodeStart);
  const atomicCommit = compositor.indexOf(
    "setDisplayedLayers(nextLayers)",
    frameStart,
  );

  assert.ok(decodeStart >= 0);
  assert.ok(poseDecode > decodeStart);
  assert.ok(handDecode > poseDecode);
  assert.ok(fingersDecode > handDecode);
  assert.ok(frameStart > fingersDecode);
  assert.ok(atomicCommit > frameStart);
});

test("the previous pose stays painted while the next pose is decoding", async () => {
  const harness = createAtomicSwapHarness("resting");
  const slowDecode = deferred();
  const request = harness.request("thinking", slowDecode.promise);

  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(harness.renderedPose(), "resting");
  assert.deepEqual(harness.commits(), []);

  slowDecode.resolve();
  assert.equal(await request, true);
  assert.equal(harness.renderedPose(), "thinking");
  assert.deepEqual(harness.frames(), [
    {
      frameN: { pose: "resting", opacity: 1, visiblePoseCount: 1 },
      frameNPlus1: { pose: "thinking", opacity: 1, visiblePoseCount: 1 },
    },
  ]);
});

test("twenty rapid requests commit only the latest decoded pose", async () => {
  const harness = createAtomicSwapHarness();
  const gates = Array.from({ length: 20 }, deferred);
  const requests = gates.map((gate, index) =>
    harness.request(`pose-${index + 1}`, gate.promise),
  );

  for (let index = 0; index < 19; index += 1) gates[index].resolve();
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(harness.renderedPose(), "idle");

  gates[19].resolve();
  const results = await Promise.all(requests);
  assert.deepEqual(results, [...Array(19).fill(false), true]);
  assert.equal(harness.renderedPose(), "pose-20");
  assert.deepEqual(harness.commits(), ["pose-20"]);
  assert.equal(harness.frames()[0].frameN.opacity, 1);
  assert.equal(harness.frames()[0].frameNPlus1.opacity, 1);
});

test("an interrupted return to idle never creates an empty intermediate frame", async () => {
  const harness = createAtomicSwapHarness("sea");
  const returning = deferred();
  const latestIdle = deferred();
  const returnRequest = harness.request("thinking", returning.promise);
  const idleRequest = harness.request("resting", latestIdle.promise);

  returning.resolve();
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(harness.renderedPose(), "sea");

  latestIdle.resolve();
  assert.equal(await idleRequest, true);
  assert.equal(await returnRequest, false);
  assert.equal(harness.renderedPose(), "resting");
});

test("a failed pose keeps the last valid pose fully visible", async () => {
  const harness = createAtomicSwapHarness("resting");
  const failed = deferred();
  const request = harness.request("missing-pose", failed.promise);
  failed.reject(new Error("intentional decode failure"));

  assert.equal(await request, false);
  assert.equal(harness.renderedPose(), "resting");
  assert.deepEqual(harness.commits(), []);
});

test("a stale completion cannot restore an older pose", async () => {
  const harness = createAtomicSwapHarness("resting");
  const oldGate = deferred();
  const latestGate = deferred();
  const oldRequest = harness.request("thinking", oldGate.promise);
  const latestRequest = harness.request("sea", latestGate.promise);

  latestGate.resolve();
  assert.equal(await latestRequest, true);
  oldGate.resolve();
  assert.equal(await oldRequest, false);
  assert.equal(harness.renderedPose(), "sea");
  assert.deepEqual(harness.commits(), ["sea"]);
});

test("twenty consecutive completed cuts contain exactly two full-opacity frames", async () => {
  const harness = createAtomicSwapHarness("resting");
  const poses = [
    "thinking", "sea", "satisfied", "resting", "protective",
    "listening", "worried", "chart", "annoyed", "barometer",
    "preparing", "speaking", "resting", "sea", "thinking",
    "satisfied", "protective", "chart", "listening", "resting",
  ];
  for (const pose of poses) {
    assert.equal(await harness.request(pose, Promise.resolve()), true);
  }
  assert.equal(harness.frames().length, 20);
  for (const cut of harness.frames()) {
    assert.deepEqual(
      [cut.frameN.opacity, cut.frameNPlus1.opacity],
      [1, 1],
    );
    assert.deepEqual(
      [cut.frameN.visiblePoseCount, cut.frameNPlus1.visiblePoseCount],
      [1, 1],
    );
    assert.notEqual(cut.frameN.pose, "");
    assert.notEqual(cut.frameNPlus1.pose, "");
  }
});
