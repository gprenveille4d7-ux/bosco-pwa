export const KNOTS_PER_METRE_PER_SECOND = 1.9438444924406;

export function finiteOrNull(value) {
  if (value === null || value === undefined || value === "") return null;
  const number = typeof value === "number" ? value : Number(value);
  return Number.isFinite(number) ? number : null;
}

export function metresPerSecondToKnots(value) {
  const number = finiteOrNull(value);
  return number === null ? null : number * KNOTS_PER_METRE_PER_SECOND;
}

export function normalizeDegrees(value) {
  const number = finiteOrNull(value);
  return number === null ? null : ((number % 360) + 360) % 360;
}

const CARDINALS = [
  { short: "N", long: "Nord" },
  { short: "NNE", long: "Nord-nord-est" },
  { short: "NE", long: "Nord-est" },
  { short: "ENE", long: "Est-nord-est" },
  { short: "E", long: "Est" },
  { short: "ESE", long: "Est-sud-est" },
  { short: "SE", long: "Sud-est" },
  { short: "SSE", long: "Sud-sud-est" },
  { short: "S", long: "Sud" },
  { short: "SSO", long: "Sud-sud-ouest" },
  { short: "SO", long: "Sud-ouest" },
  { short: "OSO", long: "Ouest-sud-ouest" },
  { short: "O", long: "Ouest" },
  { short: "ONO", long: "Ouest-nord-ouest" },
  { short: "NO", long: "Nord-ouest" },
  { short: "NNO", long: "Nord-nord-ouest" },
];

export function degreesToCardinal(value) {
  const degrees = normalizeDegrees(value);
  if (degrees === null) return null;
  return CARDINALS[Math.round(degrees / 22.5) % CARDINALS.length];
}

export function weatherDescription(code) {
  const value = finiteOrNull(code);
  if (value === null) return "Indisponible";
  if (value === 0) return "Ciel dégagé";
  if (value === 1) return "Principalement dégagé";
  if (value === 2) return "Partiellement nuageux";
  if (value === 3) return "Couvert";
  if (value === 45 || value === 48) return "Brouillard";
  if ([51, 53, 55, 56, 57].includes(value)) return "Bruine";
  if ([61, 63, 66].includes(value)) return "Pluie";
  if ([65, 67, 80, 81, 82].includes(value)) return "Forte pluie";
  if ([71, 73, 75, 77, 85, 86].includes(value)) return "Neige";
  if ([95, 96, 99].includes(value)) return "Orage";
  return "Conditions variables";
}

export function classifySeaState(value) {
  const height = finiteOrNull(value);
  if (height === null || height < 0) return null;
  if (height < 0.1) return "Calme";
  if (height < 0.5) return "Ridée";
  if (height < 1.25) return "Belle";
  if (height < 2.5) return "Peu agitée";
  if (height < 4) return "Agitée";
  if (height < 6) return "Forte";
  if (height < 9) return "Très forte";
  if (height < 14) return "Grosse";
  return "Énorme";
}

export function formatValue(value, digits = 0) {
  const number = finiteOrNull(value);
  if (number === null) return null;
  return new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(number);
}

export function sortSamples(samples) {
  return [...samples]
    .filter((sample) => sample && finiteOrNull(sample.heightM) !== null && sample.time)
    .sort((a, b) => Date.parse(a.time) - Date.parse(b.time));
}

export function interpolateHeight(samples, targetTime) {
  const ordered = sortSamples(samples);
  const target = Date.parse(targetTime);
  if (!Number.isFinite(target) || ordered.length === 0) return null;
  if (target <= Date.parse(ordered[0].time)) return finiteOrNull(ordered[0].heightM);
  if (target >= Date.parse(ordered.at(-1).time)) return finiteOrNull(ordered.at(-1).heightM);

  for (let index = 1; index < ordered.length; index += 1) {
    const previous = ordered[index - 1];
    const next = ordered[index];
    const start = Date.parse(previous.time);
    const end = Date.parse(next.time);
    if (target <= end) {
      const ratio = end === start ? 0 : (target - start) / (end - start);
      return previous.heightM + (next.heightM - previous.heightM) * ratio;
    }
  }
  return null;
}

export function deriveTideEvents(samples) {
  const ordered = sortSamples(samples);
  const events = [];
  for (let index = 1; index < ordered.length - 1; index += 1) {
    const previous = ordered[index - 1];
    const current = ordered[index];
    const next = ordered[index + 1];
    if (current.heightM > previous.heightM && current.heightM >= next.heightM) {
      events.push({ type: "high", time: current.time, heightM: current.heightM });
    } else if (
      current.heightM < previous.heightM &&
      current.heightM <= next.heightM
    ) {
      events.push({ type: "low", time: current.time, heightM: current.heightM });
    }
  }
  return events;
}

export function tideTrendAt(samples, targetTime) {
  const ordered = sortSamples(samples);
  const target = Date.parse(targetTime);
  if (!Number.isFinite(target) || ordered.length < 2) return null;
  let left = ordered[0];
  let right = ordered[1];
  for (let index = 1; index < ordered.length; index += 1) {
    right = ordered[index];
    left = ordered[index - 1];
    if (target <= Date.parse(right.time)) break;
  }
  const delta = right.heightM - left.heightM;
  if (Math.abs(delta) < 0.005) return "slack";
  return delta > 0 ? "rising" : "falling";
}

export function nextTideEvent(events, targetTime) {
  const target = Date.parse(targetTime);
  if (!Number.isFinite(target)) return null;
  return (
    [...events]
      .sort((a, b) => Date.parse(a.time) - Date.parse(b.time))
      .find((event) => Date.parse(event.time) > target) ?? null
  );
}

export function minutesUntil(time, targetTime) {
  const delta = Date.parse(time) - Date.parse(targetTime);
  return Number.isFinite(delta) && delta >= 0 ? Math.round(delta / 60000) : null;
}
