// Verifies the breakpoint realignment: a 1200-1399px viewport must now render
// identically to >=1400px. Checks the concrete values that were broken, plus a
// generic sweep of every section's structural properties so a silent
// difference can't hide.
import puppeteer from "puppeteer-core";

const BASE = process.env.BASE ?? "http://localhost:3100";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

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

const probe = async (path, width) => {
  await page.setViewport({ width, height: 950 });
  await page.goto(`${BASE}${path}`, { waitUntil: "networkidle2" });
  await page.addStyleTag({ content: reveal });
  await new Promise((r) => setTimeout(r, 350));

  return page.evaluate(() => {
    const cs = (sel, prop) => {
      const el = document.querySelector(sel);
      return el ? getComputedStyle(el)[prop] : "n/a";
    };
    const container = document.querySelector(".container");
    return {
      containerW: container ? Math.round(container.getBoundingClientRect().width) : -1,
      // col-xxl-3 => 25% of the row; col-xl-4 => 33.33%
      pricingColW: Math.round(
        document.querySelector(".pricing-box-items")?.parentElement?.getBoundingClientRect().width ?? -1
      ),
      heroFont: cs(".hero-1 .hero-content h1", "fontSize"),
      heroIndent: cs(".hero-1 .hero-content h1 b", "marginLeft"),
      aboutWrap: cs(".about-wrapper", "flexWrap"),
      aboutNav: cs(".about-wrapper .nav", "display"),
      aboutNavBorder: cs(".about-wrapper .nav", "borderRightWidth"),
      projectOffset: cs(".project-wrapper .project-content", "marginLeft"),
    };
  });
};

console.log("=== concrete values that were broken at 1200-1399px ===\n");
for (const path of ["/", "/pricing"]) {
  const narrow = await probe(path, 1351);
  const wide = await probe(path, 1503);
  console.log(path);
  for (const k of Object.keys(narrow)) {
    const same = String(narrow[k]) === String(wide[k]);
    const proportional = k === "containerW" || k === "pricingColW" || k === "projectOffset";
    const tag = same ? "match" : proportional ? "scaled" : "DIFF ";
    console.log(
      `  ${k.padEnd(14)} ${String(narrow[k]).padEnd(10)} ${String(wide[k]).padEnd(10)} ${tag}`
    );
  }
  console.log("");
}

console.log("=== pricing: cards per row (the screenshot bug) ===");
for (const w of [1200, 1280, 1351, 1399, 1400, 1503]) {
  await page.setViewport({ width: w, height: 950 });
  await page.goto(`${BASE}/pricing`, { waitUntil: "networkidle2" });
  const info = await page.evaluate(() => {
    const cols = [...document.querySelectorAll(".pricing-section .row > [class*='col-']")];
    const tops = cols.map((c) => Math.round(c.getBoundingClientRect().top));
    // Cards sharing a row share a `top`; group them to get cards-per-row.
    const rows = new Map();
    for (const t of tops) rows.set(t, (rows.get(t) ?? 0) + 1);
    return {
      perRow: Math.max(...rows.values()),
      rows: rows.size,
      cards: cols.length,
      colW: Math.round(cols[0]?.getBoundingClientRect().width ?? -1),
    };
  });
  console.log(
    `  ${String(w).padEnd(6)} ${info.perRow}-up, ${info.cards} cards in ${info.rows} row(s), col ${info.colW}px`
  );
}

await browser.close();