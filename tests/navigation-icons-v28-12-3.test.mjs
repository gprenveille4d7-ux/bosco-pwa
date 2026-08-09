import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const css = readFileSync("assets/page-B7dK8B51.css", "utf8");

test("les icônes internes de Bosco sont plus petites et centrées", () => {
  assert.match(css, /_indicators_1twcm_584 button span\{[^}]*width:18px/);
  assert.match(css, /_indicators_1twcm_584 button span\{[^}]*place-items:center/);
  assert.match(css, /_indicators_1twcm_584 button span\{[^}]*font-size:14px!important/);
});

test("les icônes mères sont agrandies et le contenu disparaît sous leur barre", () => {
  assert.match(css, /_routeNav_1twcm_640\._routeNav_1twcm_640 button span\{[^}]*font-size:30px!important/);
  assert.match(css, /_routeNav_1twcm_640\._routeNav_1twcm_640:before\{[^}]*height:calc\(78px \+ env\(safe-area-inset-bottom\)\)/);
  assert.match(css, /_routeNav_1twcm_640\._routeNav_1twcm_640:before\{[^}]*background:#050b10/);
});
