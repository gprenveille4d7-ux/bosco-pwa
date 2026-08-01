import assert from "node:assert/strict";
import test from "node:test";
import { MANCHE_PORTS } from "../data/manche-ports.ts";
import { V25_LIBRARY_TARGETS, V25_PORT_CHAPTERS, V25_STORY_SLOTS } from "../data/narrative-v25.ts";

test("la V25 réserve exactement 600 histoires réparties sur les 30 ports", () => {
  assert.equal(MANCHE_PORTS.length, V25_LIBRARY_TARGETS.ports);
  assert.equal(V25_PORT_CHAPTERS.length, V25_LIBRARY_TARGETS.ports);
  assert.equal(V25_STORY_SLOTS.length, V25_LIBRARY_TARGETS.totalStories);
  assert.equal(new Set(V25_STORY_SLOTS.map((slot) => slot.slotId)).size, 600);
});
test("chaque port garde dix pages réelles d’Émile et dix récits fictifs de Bosco", () => {
  for (const chapter of V25_PORT_CHAPTERS) {
    assert.equal(chapter.slots.filter((slot) => slot.kind === "real").length, 10, chapter.portName);
    assert.equal(chapter.slots.filter((slot) => slot.kind === "fictional").length, 10, chapter.portName);
  }
});
test("les six lots progressifs contiennent chacun cinq ports", () => {
  for (let batch = 1; batch <= 6; batch += 1) assert.equal(V25_PORT_CHAPTERS.filter((chapter) => chapter.batch === batch).length, 5);
});
