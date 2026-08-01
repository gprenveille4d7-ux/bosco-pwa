import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();
const dataDir = join(root, "data", "bosco");
const requiredFiles = [
  "bosco-brain.json",
  "bosco-rules.json",
  "bosco-emotions.json",
  "bosco-user-profile.json",
  "bosco-navigation-score.json",
  "bosco-weather-engine.json",
  "bosco-assets-map.json",
  "bosco-events.json",
  "bosco-memory.json"
];

const load = (name) => JSON.parse(readFileSync(join(dataDir, name), "utf8"));

test("the ten Step 4 deliverables exist and contain valid JSON", () => {
  for (const file of requiredFiles) {
    assert.equal(existsSync(join(dataDir, file)), true, `${file} is missing`);
    assert.doesNotThrow(() => load(file));
  }
});

test("navigation score weights sum to one and safety is dominant", () => {
  const data = load("bosco-navigation-score.json");
  const weights = Object.values(data.dimensions).map((dimension) => dimension.weight);
  const total = weights.reduce((sum, value) => sum + value, 0);
  assert.ok(Math.abs(total - 1) < 1e-9);
  assert.equal(data.dimensions.safety.weight, Math.max(...weights));
});

test("every decision maps to an existing immutable asset", () => {
  const data = load("bosco-assets-map.json");
  assert.equal(Object.keys(data.decisions).length, 6);
  for (const [decision, mapping] of Object.entries(data.decisions)) {
    const localPath = join(root, "public", mapping.image.replace(/^\//, ""));
    assert.equal(existsSync(localPath), true, `${decision} points to missing ${mapping.image}`);
  }
  assert.equal(Object.keys(data.poses).length, 12);
  for (const [pose, path] of Object.entries(data.poses)) {
    const localPath = join(root, "public", path.replace(/^\//, ""));
    assert.equal(existsSync(localPath), true, `${pose} points to missing ${path}`);
  }
});

test("real-time reactions remain between one and three seconds", () => {
  const data = load("bosco-events.json");
  for (const [event, config] of Object.entries(data.events)) {
    assert.ok(config.durationMs >= 1000, `${event} is too short`);
    assert.ok(config.durationMs <= 3000, `${event} is too long`);
  }
});

test("memory can only use explicitly allowed facts", () => {
  const data = load("bosco-memory.json");
  assert.ok(data.allowedFacts.includes("firstName"));
  assert.ok(data.allowedFacts.includes("craftType"));
  assert.ok(data.allowedFacts.includes("level"));
  assert.ok(data.allowedFacts.includes("favoriteSpot"));
  assert.equal(data.allowedFacts.includes("imaginedMemory"), false);
  assert.ok(data.forbiddenInferences.length >= 4);
});

test("safety gates precede ordinary decisions", () => {
  const data = load("bosco-rules.json");
  const minimumSafetyPriority = Math.min(...data.safetyGates.map((rule) => rule.priority));
  const maximumDecisionPriority = Math.max(...data.decisionRules.map((rule) => rule.priority));
  assert.ok(minimumSafetyPriority > maximumDecisionPriority);
  assert.ok(data.safetyGates.some((rule) => rule.id === "thunderstorm"));
  assert.ok(data.safetyGates.some((rule) => rule.id === "data-unavailable"));
});
