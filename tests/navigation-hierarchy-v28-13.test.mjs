import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const css = readFileSync("assets/ui-navigation-v28-13.css", "utf8");
const boot = readFileSync("assets/standalone-v28-9-4.js", "utf8");
const index = readFileSync("index.html", "utf8");
const sw = readFileSync("sw.js", "utf8");

test("la zone de navigation principale est opaque et indÃ©pendante", () => {
  assert.match(css, /\.bosco-route-nav-backdrop\s*\{[\s\S]*z-index:\s*19;[\s\S]*background:\s*#050b10;/);
  assert.match(css, /backdrop-filter:\s*none !important/);
  assert.match(css, /font-size:\s*31px !important/);
  assert.match(css, /font-size:\s*33px !important/);
  assert.match(css, /calc\(110px \+ env\(safe-area-inset-bottom\)\)/);
  assert.match(boot, /bosco-route-nav-backdrop/);
});

test("la sous-navigation du CarrÃ© est restaurÃ©e sans duplication", () => {
  assert.match(boot, /library\.before\(contextual\)/);
  assert.match(css, /nav\[aria-label="Sections du CarrÃ©"\][\s\S]*width:\s*min\(620px, 88vw, 100%\)/);
  assert.match(css, /@media \(max-width: 360px\)/);
});

test("la nouvelle feuille est chargÃ©e et prÃ©cachÃ©e", () => {
  assert.match(index, /ui-navigation-v28-13\.css\?v=28\.13\.0/);
  assert.match(sw, /ui-navigation-v28-13\.css/);
  assert.match(sw, /bosco-pwa-v28-gemini-3\.5/);
});

