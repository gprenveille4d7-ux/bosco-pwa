import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const deliverables = join(root, "deliverables", "Bosco-Etape-5");

const expected = [
  "ui-audit-report.md",
  "design-system.json",
  "voice-profile-bosco.json",
  "animation-timeline.json",
  "notification-engine.json",
  "ambient-sound-map.json",
  "lip-sync-config.json",
  "responsive-report.json",
  "performance-report.md",
  "integration-checklist.md"
];

test("the ten Step 5 deliverables exist", () => {
  for (const filename of expected) {
    assert.ok(existsSync(join(deliverables, filename)), `${filename} is missing`);
  }
});

test("every Step 5 JSON deliverable is valid and versioned", () => {
  for (const filename of expected.filter((name) => name.endsWith(".json"))) {
    const parsed = JSON.parse(readFileSync(join(deliverables, filename), "utf8"));
    assert.equal(parsed.schemaVersion, "5.0.0", `${basename(filename)} has the wrong schema`);
  }
});

test("the design system preserves the master identity", () => {
  const design = JSON.parse(
    readFileSync(join(deliverables, "design-system.json"), "utf8")
  );
  assert.equal(design.assetPolicy.newPrincipalArtworkAllowed, false);
  assert.deepEqual(design.assetPolicy.immutableTexts, [
    "BOSCO",
    "LE TOURBILLON",
    "POLDERS"
  ]);
  assert.ok(design.component.touchTargetPx >= 44);
});

test("voice and lip-sync never request an imitation or new face asset", () => {
  const voice = JSON.parse(
    readFileSync(join(deliverables, "voice-profile-bosco.json"), "utf8")
  );
  const lipSync = JSON.parse(
    readFileSync(join(deliverables, "lip-sync-config.json"), "utf8")
  );
  assert.ok(voice.identity.exclusions.some((value) => value.includes("imitation")));
  assert.match(lipSync.assetPolicy, /do not generate a new face/i);
  assert.ok(lipSync.mouth.maximumScaleY <= 1.035);
});

test("notifications remain rare, opt-in and honest about background delivery", () => {
  const notifications = JSON.parse(
    readFileSync(join(deliverables, "notification-engine.json"), "utf8")
  );
  assert.equal(notifications.deliveryPolicy.optInRequired, true);
  assert.equal(notifications.deliveryPolicy.defaultEnabled, false);
  assert.ok(notifications.deliveryPolicy.maximumPerDay <= 3);
  assert.match(notifications.backgroundRequirement, /require/i);
});

test("the offline cache references only existing core Bosco assets", () => {
  const serviceWorker = readFileSync(join(root, "public", "sw.js"), "utf8");
  const assetPaths = [...serviceWorker.matchAll(/"\/assets\/bosco\/([^"]+)"/g)].map(
    (match) => join(root, "public", "assets", "bosco", match[1])
  );
  assert.ok(assetPaths.length >= 19);
  for (const path of assetPaths) assert.ok(existsSync(path), `${path} is missing`);
});
