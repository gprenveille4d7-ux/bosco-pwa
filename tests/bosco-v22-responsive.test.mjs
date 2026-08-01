import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const css = readFileSync(
  join(process.cwd(), "components/BoscoHomeCarousel.module.css"),
  "utf8",
);

const IPHONE_VIEWPORTS = [
  ["iPhone SE portrait", 375, 667],
  ["iPhone SE paysage", 667, 375],
  ["iPhone 13 portrait", 390, 844],
  ["iPhone 13 paysage", 844, 390],
  ["iPhone 16 portrait", 393, 852],
  ["iPhone 16 paysage", 852, 393],
  ["iPhone 16 Pro Max portrait", 430, 932],
  ["iPhone 16 Pro Max paysage", 932, 430],
  ["iPad portrait", 768, 1024],
  ["iPad paysage", 1024, 768],
];

function sceneBudget(width, height) {
  const horizontalPadding = 24;
  const header = 56;
  const navigationAndSafeSpace = 82;
  const slideChrome = height <= 600 ? 98 : 126;
  const message = Math.min(136, Math.max(104, height * 0.16));
  const availableWidth = Math.max(0, width - horizontalPadding);
  const availableHeight = Math.max(
    0,
    height - header - navigationAndSafeSpace - slideChrome - message,
  );
  return Math.min(availableWidth, availableHeight);
}

test("the home route keeps the viewport vertically locked", () => {
  assert.match(css, /height:\s*100dvh/);
  assert.match(css, /\.homeShell\.homeShell[\s\S]*overflow:\s*hidden/);
  assert.match(css, /\.viewport[\s\S]*overflow-y:\s*hidden/);
  assert.match(css, /\.slide[\s\S]*height:\s*100%[\s\S]*overflow:\s*hidden/);
});

test("recent iPhone portrait and landscape contracts keep a bounded square scene", () => {
  assert.match(css, /width:\s*min\(100cqw,\s*100cqh\)/);
  assert.match(css, /height:\s*min\(100cqw,\s*100cqh\)/);
  assert.match(css, /@media \(max-height:\s*700px\)/);
  assert.match(css, /@media \(max-width:\s*430px\), \(max-height:\s*600px\)/);
  for (const [name, width, height] of IPHONE_VIEWPORTS) {
    const side = sceneBudget(width, height);
    assert.ok(side > 0, `${name}: scene has no remaining height`);
    assert.ok(side <= width, `${name}: scene exceeds viewport width`);
    assert.ok(side <= height, `${name}: scene exceeds viewport height`);
  }
});
