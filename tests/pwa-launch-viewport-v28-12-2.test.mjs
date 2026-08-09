import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const html = readFileSync("index.html", "utf8");
const css = readFileSync("assets/page-B7dK8B51.css", "utf8");
const sw = readFileSync("sw.js", "utf8");

test("the installed PWA synchronizes its full height before interaction", () => {
  assert.match(html, /--bosco-app-height/);
  assert.match(html, /window\.screen\.height/);
  assert.match(html, /requestAnimationFrame\(syncViewportHeight\)/);
  assert.match(html, /setTimeout\(syncViewportHeight,\s*650\)/);
  assert.match(html, /addEventListener\("pageshow",\s*syncViewportHeight\)/);
});

test("standalone layout keeps the largest available viewport", () => {
  assert.match(css, /display-mode:\s*standalone/);
  assert.match(css, /height:max\(100lvh,var\(--bosco-app-height,100dvh\)\)!important/);
});

test("the new viewport fix refreshes the offline application cache", () => {
  assert.match(html, /28\.12\.3/);
  assert.match(sw, /bosco-pwa-v28-gemini-3\.6/);
});

