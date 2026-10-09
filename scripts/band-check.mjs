// Overflow + band-affinity check.
//
// 1. Asserts nothing inside .container overflows its container horizontally, at
//    every desktop width. Catches layout that "fits" at one width and spills
//    at the next.
// 2. Reports the components whose layout the theme's 25 `max-width: 1399px`
//    blocks change, so we know which ones still need a band override.
import puppeteer from "puppeteer-core";

const BASE = process.env.BASE ?? "http://localhost:3100";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const PAGES = ["/", "/home-2", "/home-3", "/home-4", "/home-5", "/home-6", "/about"];
const WIDTHS = [1200, 1280, 1351, 1399, 1400, 1503];

// Components the theme restyles below 1400px.
const BAND_SENSITIVE = [
  ".about-wrapper",
  ".about-wrapper .nav",
  ".project-wrapper",
  ".project-wrapper .project-content",
  ".how-to-work-wrapper",
  ".hero-1 .hero-content h1",
  ".hero-1 .hero-content h1 b",
];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox"],
});
const page = await browser.newPage();

const reveal = `
  .wow, .wow.animated, [data-animation], [class*="fadeIn"], [class*="zoomIn"] {
    visibility: visible !important; opacity: 1 !important;
    transform: none !important; animation: none !important;
  }`;

let overflowProblems = 0;

console.log("=== horizontal overflow inside .container ===");
for (const path of PAGES) {
  const row = [];
  for (const w of WIDTHS) {
    await page.setViewport({ width: w, height: 900 });
    await page.goto(`${BASE}${path}`, { waitUntil: "networkidle2" });
    await page.addStyleTag({ content: reveal });
    await new Promise((r) => setTimeout(r, 300));

    const bad = await page.evaluate(() => {
      const CLIPPED = /(hidden|clip|auto|scroll)/;
      // An element only counts as overflowing if nothing between it and the
      // container clips it. Swiper parks slides outside the wrapper on purpose
      // and relies on overflow:hidden to crop them, so an unclipped check
      // would flag every carousel as broken.
      const isClipped = (el, stopAt) => {
        for (let p = el.parentElement; p && p !== stopAt; p = p.parentElement) {
          if (CLIPPED.test(getComputedStyle(p).overflowX)) return true;
        }
        return false;
      };

      const out = [];
      for (const c of document.querySelectorAll(".container")) {
        const limit = c.getBoundingClientRect().right + 1;
        for (const el of c.querySelectorAll("*")) {
          const r = el.getBoundingClientRect();
          if (r.width === 0 || r.height === 0) continue;
          if (r.right <= limit) continue;
          // Decorative overlays are positioned off-canvas by design.
          if (getComputedStyle(el).position === "absolute") continue;
          if (isClipped(el, c)) continue;
          out.push(
            `${el.tagName.toLowerCase()}.${
              (el.className || "").toString().split(" ").filter(Boolean)[0] || "?"
            } +${Math.round(r.right - limit)}px`
          );
        }
      }
      return [...new Set(out)];
    });
    row.push(`${w}:${bad.length ? bad.slice(0, 3).join(",") : "ok"}`);
    if (bad.length) overflowProblems += bad.length;
  }
  console.log(`  ${path.padEnd(10)} ${row.join("  ")}`);
}

console.log("\n=== band-sensitive components: do they differ across 1351 / 1503? ===");
await page.setViewport({ width: 1351, height: 900 });
await page.goto(`${BASE}/`, { waitUntil: "networkidle2" });
await page.addStyleTag({ content: reveal });
await new Promise((r) => setTimeout(r, 400));
const at1351 = await page.evaluate(
  (sels) =>
    sels.map((sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        sel,
        key: `${cs.display}|${cs.flexWrap}|ml=${cs.marginLeft}|fs=${cs.fontSize}`,
        w: Math.round(r.width),
      };
    }),
  BAND_SENSITIVE
);

await page.setViewport({ width: 1503, height: 900 });
await page.goto(`${BASE}/`, { waitUntil: "networkidle2" });
await page.addStyleTag({ content: reveal });
await new Promise((r) => setTimeout(r, 400));
const at1503 = await page.evaluate(
  (sels) =>
    sels.map((sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        sel,
        key: `${cs.display}|${cs.flexWrap}|ml=${cs.marginLeft}|fs=${cs.fontSize}`,
        w: Math.round(r.width),
      };
    }),
  BAND_SENSITIVE
);

for (let i = 0; i < BAND_SENSITIVE.length; i++) {
  const a = at1351[i];
  const b = at1503[i];
  if (!a || !b) {
    console.log(`  ${BAND_SENSITIVE[i].padEnd(34)} not on page`);
    continue;
  }
  const same = a.key === b.key;
  console.log(
    `  ${a.sel.padEnd(34)} ${same ? "same" : "DIFF"}  1351[${a.key} w=${a.w}]  1503[${b.key} w=${b.w}]`
  );
}

await browser.close();
console.log(
  `\noverflow problems found: ${overflowProblems}${
    overflowProblems ? "" : "  (none)"
  }`
);
