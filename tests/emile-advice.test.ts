import assert from "node:assert/strict";
import test from "node:test";

import corpus from "../data/bosco/emile-advice.json";
import {
  EMILE_ADVICE_CORPUS_ID,
  EMILE_ADVICE_COUNT,
  selectDailyEmileAdvice,
} from "../lib/emile-advice";

type Advice = (typeof corpus.advices)[number];

const advices = corpus.advices as Advice[];
const generated = advices.filter((advice) => "sourceDomain" in advice);
const words = (text: string) =>
  text
    .trim()
    .split(/\s+/u)
    .filter(Boolean);

test("le corpus contient les 4 conseils canoniques et exactement 500 ajouts", () => {
  assert.equal(EMILE_ADVICE_COUNT, 504);
  assert.equal(advices.length, 504);
  assert.equal(generated.length, 500);
  assert.equal(advices.length - generated.length, 4);
  assert.equal(EMILE_ADVICE_CORPUS_ID, "emile-maritime-wisdom-v2-504");
});

test("la répartition des adaptations respecte les trois cultures de sécurité", () => {
  const counts = generated.reduce<Record<string, number>>((result, advice) => {
    result[advice.sourceDomain] = (result[advice.sourceDomain] ?? 0) + 1;
    return result;
  }, {});
  assert.deepEqual(counts, {
    marine: 200,
    alpinisme: 150,
    aviation: 150,
  });
});

test("les 500 adaptations représentent 100 principes et 5 formulations chacun", () => {
  const counts = generated.reduce<Record<string, number>>((result, advice) => {
    result[advice.principleId] = (result[advice.principleId] ?? 0) + 1;
    return result;
  }, {});
  assert.equal(Object.keys(counts).length, 100);
  for (const count of Object.values(counts)) {
    assert.equal(count, 5);
  }
});

test("tous les identifiants et tous les textes sont uniques", () => {
  assert.equal(new Set(advices.map((advice) => advice.id)).size, 504);
  assert.equal(new Set(advices.map((advice) => advice.text)).size, 504);
});

test("les adaptations sont lisibles sur mobile et n’exposent aucun vocabulaire étranger", () => {
  const foreignDomainWords =
    /\b(alpinisme|alpiniste|montagne|sommet|refuge|avalanche|aviation|aéronautique|avion|pilote|cockpit|décollage|atterrissage)\b/iu;

  for (const advice of generated) {
    const count = words(advice.text).length;
    assert.ok(count >= 12, `${advice.id} est trop court (${count} mots)`);
    assert.ok(count <= 42, `${advice.id} est trop long (${count} mots)`);
    assert.doesNotMatch(advice.text, foreignDomainWords, advice.id);
    assert.equal(advice.kind, "paraphrase");
    assert.ok(advice.provenance.startsWith("Sagesse maritime"));
  }
});

test("les jours consécutifs ne répètent ni texte ni principe adapté", () => {
  for (let index = 1; index < generated.length; index += 1) {
    assert.notEqual(generated[index].text, generated[index - 1].text);
    assert.notEqual(generated[index].principleId, generated[index - 1].principleId);
  }
});

test("la sélection quotidienne est stable et parcourt tout le corpus", () => {
  const start = new Date(2026, 0, 1, 12);
  const selections = Array.from({ length: 504 }, (_, offset) => {
    const date = new Date(start);
    date.setDate(start.getDate() + offset);
    return selectDailyEmileAdvice(date);
  });

  assert.equal(new Set(selections.map((advice) => advice.id)).size, 504);
  assert.equal(selectDailyEmileAdvice(start).id, selectDailyEmileAdvice(start).id);
  assert.equal(selectDailyEmileAdvice(start).localDate, "2026-01-01");
});

test("les références documentaires couvrent navigation, alpinisme et aviation", () => {
  const organisations = new Set(corpus.sources.map((source) => source.organisation));
  assert.deepEqual(organisations, new Set(["SNSM", "FFCAM", "FAA", "EASA"]));
  for (const source of corpus.sources) {
    assert.match(source.url, /^https:\/\//);
  }
});
