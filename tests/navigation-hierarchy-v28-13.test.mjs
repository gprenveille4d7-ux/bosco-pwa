import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const css = readFileSync("assets/ui-navigation-v28-14.css", "utf8");
const boot = readFileSync("assets/standalone-v28-9-4.js", "utf8");
const index = readFileSync("index.html", "utf8");
const sw = readFileSync("sw.js", "utf8");

test("la zone de navigation principale est opaque et indÃ©pendante", () => {
  assert.match(css, /\.bosco-route-nav-backdrop\s*\{[\s\S]*z-index:\s*19;[\s\S]*background:\s*#0b1822;/);
  assert.match(css, /backdrop-filter:\s*none !important/);
  assert.match(css, /font-size:\s*clamp\(34px, 9vw, 38px\) !important/);
  assert.match(css, /font-size:\s*clamp\(36px, 9\.5vw, 40px\) !important/);
  assert.match(css, /calc\(110px \+ env\(safe-area-inset-bottom\)\)/);
  assert.match(boot, /bosco-route-nav-backdrop/);
});

test("le chevron suit le vrai dÃ©bordement et le dÃ©part du scroll", () => {
  assert.match(boot, /scrollHeight > observedScrollRoot\.clientHeight \+ 8/);
  assert.match(boot, /observedScrollRoot\.scrollTop <= 2/);
  assert.match(boot, /nextScrollRoot\.scrollTop = 0/);
  assert.match(boot, /hint\.classList\.remove\("is-visible"\)/);
  assert.match(boot, /addEventListener\("scroll", updateScrollHint/);
  assert.match(css, /\.bosco-scroll-hint\.is-visible\s*\{\s*opacity:\s*1;/);
  assert.match(css, /2\.8s ease-in-out infinite/);
});

test("la sous-navigation du CarrÃ© est restaurÃ©e sans duplication", () => {
  assert.match(boot, /library\.before\(contextual\)/);
  assert.match(css, /nav\[aria-label="Sections du CarrÃ©"\][\s\S]*width:\s*min\(620px, 88vw, 100%\)/);
  assert.match(css, /@media \(max-width: 360px\)/);
});

test("la nouvelle feuille est chargÃ©e et prÃ©cachÃ©e", () => {
  assert.match(index, /ui-navigation-v28-14\.css\?v=28\.14\.0/);
  assert.match(sw, /ui-navigation-v28-14\.css/);
  assert.match(sw, /bosco-pwa-v28-gemini-3\.7/);
});

