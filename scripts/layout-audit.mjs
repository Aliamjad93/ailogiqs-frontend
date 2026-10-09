// Layout geometry audit. Reports computed box metrics for the sections that
// break between ~1350px and ~1500px CSS viewport width, so responsive fixes
// can be measured instead of guessed.
import puppeteer from "puppeteer-core";

const BASE = process.env.BASE ?? "http://localhost:3100";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PATHNAME = process.env.PATHNAME ?? "/";

// 1366px laptop: 100% zoom -> 1366 - 15px scrollbar; 90% zoom -> 1366/0.9
const WIDTHS = [
  { label: "90% zoom ", css: 1503 },
  { label: "100% zoom", css: 1351 },
  { label: "          ", css: 1280 },
  { label: "          ", css: 1199 },
];

const TARGETS = [
  ".container",
  ".section-title.ml-200",
  ".about-wrapper",
  ".about-wrapper .nav",
  ".about-wrapper .about-items",
  ".about-wrapper .about-content",
  ".about-wrapper .about-image",
  ".project-image",
  ".project-content",
  ".service-box-items",
];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox"],
});

const page = await browser.newPage();

for (const { label, css } of WIDTHS) {
  await page.setViewport({ width: css, height: 900, deviceScaleFactor: 1 });
  await page.goto(`${BASE}${PATHNAME}`, { waitUntil: "networkidle2" });
  // WOW hides elements until they scroll into view; force them visible so the
  // geometry reflects the final laid-out state.
  await page.evaluate(() => {
    document
      .querySelectorAll(".wow")
      .forEach((el) => el.style.setProperty("visibility", "visible", "important"));
    window.AiLogiQsInitTemplate();
  });
  await new Promise((r) => setTimeout(r, 700));

  const report = await page.evaluate((selectors) => {
    const out = { __width: window.innerWidth, __rows: [] };
    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (!el) {
        out.__rows.push({ sel, missing: true });
        continue;
      }
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      out.__rows.push({
        sel,
        x: Math.round(r.x),
        w: Math.round(r.width),
        h: Math.round(r.height),
        top: Math.round(r.y + window.scrollY),
        display: cs.display,
        wrap: cs.flexWrap,
        ml: cs.marginLeft,
        gap: cs.gap,
        maxW: cs.maxWidth,
      });
    }
    return out;
  }, TARGETS);

  console.log(`\n########## ${label}  (CSS viewport ${report.__width}px) ##########`);
  for (const row of report.__rows) {
    if (row.missing) {
      console.log(`  ${row.sel.padEnd(38)} -- not on this page`);
      continue;
    }
    console.log(
      `  ${row.sel.padEnd(38)} x=${String(row.x).padStart(5)} w=${String(row.w).padStart(5)} h=${String(row.h).padStart(4)}` +
        `  ${row.display.padEnd(6)} wrap=${row.wrap} ml=${row.ml} maxW=${row.maxW}`
    );
  }
}

await browser.close();
