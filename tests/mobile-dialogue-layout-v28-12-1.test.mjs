import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const css = readFileSync("assets/page-B7dK8B51.css", "utf8");
const index = readFileSync("index.html", "utf8");

test("la réponse mobile ne recouvre plus la note de navigabilité", () => {
  assert.match(css, /--bosco-message-height:clamp\(204px,34dvh,224px\)/);
  assert.match(css, /bosco-message-with-score blockquote\{[^}]*overflow-y:auto!important/);
  assert.match(css, /\.bosco-comment-score\{position:relative;z-index:1;flex:none\}/);
});

test("le nouveau style est chargé sans reprendre l'ancien cache", () => {
  assert.match(index, /page-B7dK8B51\.css\?v=28\.12\.3/);
  assert.match(index, /standalone-v28-14-1\.js\?v=28\.14\.2/);
});
