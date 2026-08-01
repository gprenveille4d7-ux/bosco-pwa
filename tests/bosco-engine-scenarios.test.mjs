import assert from "node:assert/strict";
import test from "node:test";

const enginePath = process.env.BOSCO_ENGINE_BUNDLE ?? "/tmp/bosco-engine.mjs";
const { evaluateBosco } = await import(enginePath);

const profile = {
  firstName: "Pierre",
  craftType: "catamaran",
  level: "intermediaire",
  favoriteSpot: "Jullouville",
  units: "marine",
  consentToLocalMemory: true
};

function baseInput() {
  return {
    wind: { meanKt: 13, gustKt: 16, directionDeg: 220 },
    weather: {
      code: "clear",
      temperatureC: 19,
      precipitationMmH: 0,
      visibilityM: 12000,
      pressureHPa: 1017,
      pressureTrendHPa3h: 0,
      thunderstormRisk: 0
    },
    sea: {
      waveHeightM: 0.4,
      waveDirectionDeg: 280,
      wavePeriodS: 6,
      swellHeightM: 0.3,
      swellDirectionDeg: 285
    },
    tide: {
      heightM: 6.2,
      trend: "rising",
      highWaterAt: "12:18",
      lowWaterAt: "18:42"
    },
    trend: { windKt3h: 1 },
    spot: { name: "Jullouville", shorelineDeg: 275 },
    connection: { online: true },
    data: {
      observedAt: new Date().toISOString(),
      cached: false,
      status: "complete"
    }
  };
}

test("ideal conditions select the ideal asset with a high score", () => {
  const result = evaluateBosco(baseInput(), profile);
  assert.equal(result.decision, "decision-ideal");
  assert.ok(result.score >= 8);
  assert.match(result.image, /decision-ideal\.webp$/);
  assert.equal(result.dialogue, "");
});

test("safe but weak wind produces a low-sport decision", () => {
  const input = baseInput();
  input.wind.meanKt = 4;
  input.wind.gustKt = 6;
  const result = evaluateBosco(input, profile);
  assert.equal(result.decision, "decision-low-sport");
  assert.match(result.summary, /vent trop faible/i);
});

test("storm overrides sporting interest and caps the score", () => {
  const input = baseInput();
  input.weather.code = "storm";
  input.weather.thunderstormRisk = 0.8;
  const result = evaluateBosco(input, profile);
  assert.equal(result.decision, "decision-discouraged");
  assert.ok(result.score <= 2);
  assert.ok(result.reasons.some((reason) => /orageux/i.test(reason)));
});

test("violent wind and very rough sea select the protective decision asset", () => {
  const input = baseInput();
  input.wind.meanKt = 28;
  input.wind.gustKt = 36;
  input.sea.waveHeightM = 2.2;
  const result = evaluateBosco(input, profile);
  assert.equal(result.decision, "decision-discouraged");
  assert.equal(result.pose, "protective");
  assert.ok(result.score <= 2.5);
});

test("missing data never invents a score or a memory", () => {
  const input = baseInput();
  input.data.status = "unavailable";
  const result = evaluateBosco(input, profile);
  assert.equal(result.decision, "decision-unavailable");
  assert.equal(result.score, 0);
  assert.equal(result.confidence, 0);
});

test("offline cached data lowers confidence without pretending it is live", () => {
  const input = baseInput();
  input.connection.online = false;
  input.data.cached = true;
  const result = evaluateBosco(input, profile);
  assert.ok(result.confidence <= 0.42);
  assert.ok(result.reasons.some((reason) => /Confiance des données/i.test(reason)));
});

test("the decision engine no longer runs a competing dialogue selector", () => {
  const result = evaluateBosco(baseInput(), profile, []);
  assert.equal(result.dialogue, "");
});
