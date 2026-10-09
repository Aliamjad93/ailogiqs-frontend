// Aligns the theme's desktop breakpoint with Bootstrap's xxl step.
//
// WHY
// ---
// The theme is authored for Bootstrap's "xxl" desktop layout, but it signals
// that with `@media (max-width: 1399px)` compaction blocks, while its markup
// relies on `col-xxl-*` / `.container` for the actual column and container
// widths. Bootstrap only switches xxl on at 1400px, so every viewport in the
// 1200-1399px band gets a desktop container step applied together with the
// xxl grid classes switched OFF. Result: layouts silently collapse to the xl
// fallback (pricing drops from 4 cards to 3, .container shrinks 1320 -> 1140,
// fonts and indents step down) even though the screen is plainly desktop-sized.
//
// This is visible to anyone on a 1366x768 or 1440x900 laptop at 100% browser
// zoom, and disappears if you zoom out to ~90%. Hence "the whole site looks
// zoomed in".
//
// WHAT
// ---
//   bootstrap.min.css : xxl tier moves 1400 -> 1200, so `.container` is
//                       1320px and `col-xxl-*` are active from 1200 up.
//                       Bootstrap emits tiers in ascending breakpoint order,
//                       so xxl still wins over xl in the overlap.
//   main.css          : the 1399px compaction tier is retargeted to 1199px,
//                       restoring the base desktop presentation at
//                       1200-1399px.
//
// SCOPE
// -----
// Only 1200-1399px changes. Below 1200px both the old 1399 tier and the 1199
// tier already matched, and above 1400px neither matched, so both are
// untouched. Idempotent: a second run finds nothing to change.
//
// Safe to revert: git checkout public/assets/css

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const css = join(root, "public", "assets", "css");

const TARGETS = [
  {
    file: "bootstrap.min.css",
    edits: [
      // xxl min-width steps down so the desktop tier starts at xl.
      [/@media \(min-width:\s*1400px\)/g, "@media (min-width:1200px)"],
      // Keeps the -xxl-down utility variants consistent with the new step.
      [/@media \(max-width:\s*1399\.98px\)/g, "@media (max-width:1199.98px)"],
    ],
  },
  {
    file: "main.css",
    edits: [
      // Compaction tier drops from 1399 to 1199.
      [/@media \(max-width:\s*1399px\)/g, "@media (max-width:1199px)"],
    ],
  },
];

let totalChanges = 0;

for (const { file, edits } of TARGETS) {
  const path = join(css, file);
  const before = readFileSync(path, "utf8");
  let after = before;

  for (const [pattern, replacement] of edits) {
    const matches = after.match(pattern);
    if (matches) {
      after = after.replace(pattern, replacement);
      console.log(`  ${file}: ${matches.length} x ${pattern} -> ${replacement}`);
    }
  }

  if (after === before) {
    console.log(`  ${file}: already aligned, no change`);
    continue;
  }

  writeFileSync(path, after, "utf8");
  totalChanges += 1;
}

console.log(
  totalChanges === 0
    ? "\nnothing to do"
    : `\nrewrote ${totalChanges} file(s). restart the dev server to pick this up.`
);