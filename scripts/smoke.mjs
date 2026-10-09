// Post-migration smoke test. Drives a real Chrome against the production
// build to confirm the theme boots, and that client-side navigation re-runs
// the jQuery layer without duplicating handlers or leaking Swiper instances.
import puppeteer from "puppeteer-core";

const BASE = process.env.BASE ?? "http://localhost:3100";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const problems = [];
const note = (msg) => console.log(msg);
const fail = (msg) => {
  problems.push(msg);
  console.log(`  FAIL  ${msg}`);
};
const pass = (msg) => console.log(`  ok    ${msg}`);

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1370, height: 900 });

const consoleErrors = [];
page.on("console", (m) => {
  if (m.type() === "error") consoleErrors.push(m.text());
});
page.on("pageerror", (e) => consoleErrors.push(`pageerror: ${e.message}`));

// Ignore 404s for assets we know are absent from the original template.
const asset404s = new Set();
page.on("response", (r) => {
  if (r.status() === 404 && !r.url().startsWith(`${BASE}/_next`)) {
    asset404s.add(new URL(r.url()).pathname);
  }
});

/** Snapshot of everything the teardown logic is responsible for. */
const probe = () =>
  page.evaluate(() => {
    const $ = window.jQuery;
    const events = $._data ? $._data(window, "events") : null;
    const bodyEvents = $._data ? $._data(document.body, "events") : null;
    const count = (bucket, type) =>
      bucket && bucket[type] ? bucket[type].length : 0;
    return {
      path: location.pathname,
      hasInit: typeof window.AiLogiQsInitTemplate === "function",
      swipersInitialized: document.querySelectorAll(
        ".swiper-initialized"
      ).length,
      meanContainers: document.querySelectorAll(".mean-container").length,
      niceSelects: document.querySelectorAll(".nice-select").length,
      windowScrollHandlers: count(events, "scroll"),
      windowClickHandlers: count(events, "click"),
      bodyClickHandlers: count(bodyEvents, "click"),
      bodyMouseenterHandlers: count(bodyEvents, "mouseenter"),
      mousemoveAssigned: typeof window.onmousemove === "function",
      preloaderDisplay:
        document.querySelector("#preloader")?.style.display || "unset",
      hasHeader: !!document.querySelector("#header-sticky"),
      hasFooter: !!document.querySelector("footer"),
      // textContent, not innerText: WOW.js sets visibility:hidden on below-fold
      // .wow elements, so innerText under-reports what is actually rendered.
      mainContentChars: document.body.textContent.replace(/\s+/g, " ").trim()
        .length,
      textVisibleChars: document.body.innerText.replace(/\s+/g, " ").trim().length,
    };
  });

const nav = async (label) => {
  await page.evaluate((text) => {
    const link = [...document.querySelectorAll("#header-sticky a")].find(
      (a) => a.textContent.trim() === text
    );
    if (!link) throw new Error(`nav link not found: ${text}`);
    link.click();
  }, label);
  // Let the route commit and the plugins re-init.
  await new Promise((r) => setTimeout(r, 1400));
};

note("\n=== 1. Cold load: / ===");
await page.goto(`${BASE}/`, { waitUntil: "networkidle2", timeout: 60000 });
const home = await probe();
home.hasInit ? pass("vendor stack loaded, init fn present") : fail("no init fn");
home.swipersInitialized > 0
  ? pass(`swipers initialised (${home.swipersInitialized})`)
  : fail("no swiper initialised");
home.preloaderDisplay === "none"
  ? pass("preloader dismissed")
  : fail(`preloader not dismissed (${home.preloaderDisplay})`);
home.hasHeader && home.hasFooter
  ? pass("header + footer present")
  : fail("missing header or footer");
home.mainContentChars > 2000
  ? pass(`SSR content rendered (${home.mainContentChars} chars)`)
  : fail(`page looks empty (${home.mainContentChars} chars)`);
note(`  innerText (visibility-aware) = ${home.textVisibleChars} chars`);

note("\n=== 2. Client-side navigation (no full page load) ===");
const navigations = [
  ["About Us", "/about"],
  ["Pricing", "/pricing"],
  ["Contact", "/contact"],
  ["Home", "/"],
];
const snapshots = [];
for (const [label, expected] of navigations) {
  const before = page.url();
  await nav(label);
  const snap = await probe();
  snapshots.push({ label, expected, url: new URL(page.url()).pathname, snap });
  const clientRouted = page.url() !== before || snap.path === expected;
  snap.path === expected
    ? pass(`${label.padEnd(10)} -> ${snap.path}`)
    : fail(`${label} landed on ${snap.path}, expected ${expected}`);
  if (!snap.hasInit) fail(`${label}: init fn missing after nav`);
  if (!snap.hasHeader) fail(`${label}: header missing`);
  if (!snap.hasFooter) fail(`${label}: footer missing`);
  clientRouted ? null : fail(`${label}: unexpected url ${before}`);
}

note("\n=== 3. Leak check: revisit the same pages repeatedly ===");
// Swiper/handler counts are legitimately page-dependent (/pricing has no
// sliders, /about has two). What must not happen is the count GROWING for the
// same page across repeat visits, which is what a leaked instance looks like.
const roundTrip = ["About Us", "Home", "About Us", "Home", "About Us", "Home"];
const byRoute = new Map();
for (const label of roundTrip) {
  await nav(label);
  const snap = await probe();
  const key = snap.path;
  const list = byRoute.get(key) ?? [];
  list.push(snap);
  byRoute.set(key, list);
}

for (const [route, visits] of byRoute) {
  const scroll = visits.map((v) => v.windowScrollHandlers);
  const click = visits.map((v) => v.bodyClickHandlers);
  const swipers = visits.map((v) => v.swipersInitialized);
  const nice = visits.map((v) => v.niceSelects);
  const grows = (a) => a.some((v, i) => i > 0 && v > a[i - 1]);
  note(`  ${route.padEnd(8)} scroll=${scroll.join(",")} bodyClick=${click.join(",")} swipers=${swipers.join(",")} niceSelect=${nice.join(",")}`);
  grows(scroll) ? fail(`${route}: scroll handlers grew ${scroll.join(" -> ")}`) : pass(`${route}: scroll handlers stable`);
  grows(click) ? fail(`${route}: body click handlers grew ${click.join(" -> ")}`) : pass(`${route}: body click handlers stable`);
  grows(swipers) ? fail(`${route}: swiper instances grew ${swipers.join(" -> ")}`) : pass(`${route}: swiper instances stable`);
  grows(nice) ? fail(`${route}: nice-select instances grew ${nice.join(" -> ")}`) : pass(`${route}: nice-select instances stable`);
}

note("\n=== 4. Repeated re-init (StrictMode double-mount, HMR, retries) ===");
// Compare before/after rather than against a guessed baseline: bootstrap's
// scrollspy and viewport.jquery.js contribute handlers we do not own.
const before = await probe();
await page.evaluate(async () => {
  for (let i = 0; i < 5; i++) window.AiLogiQsInitTemplate();
  await new Promise((r) => setTimeout(r, 600));
});
const after = await probe();
note(`  scroll  ${before.windowScrollHandlers} -> ${after.windowScrollHandlers}`);
note(`  click   ${before.bodyClickHandlers} -> ${after.bodyClickHandlers}`);
note(`  swipers ${before.swipersInitialized} -> ${after.swipersInitialized}`);
after.windowScrollHandlers === before.windowScrollHandlers
  ? pass("scroll handlers unchanged after 5x re-init")
  : fail(`scroll handlers changed ${before.windowScrollHandlers} -> ${after.windowScrollHandlers}`);
after.bodyClickHandlers === before.bodyClickHandlers
  ? pass("body click handlers unchanged after 5x re-init")
  : fail(`body click changed ${before.bodyClickHandlers} -> ${after.bodyClickHandlers}`);
after.swipersInitialized === before.swipersInitialized
  ? pass("swiper instances unchanged after 5x re-init")
  : fail(`swipers changed ${before.swipersInitialized} -> ${after.swipersInitialized}`);
after.hasHeader && after.hasFooter
  ? pass("header + footer survive re-init")
  : fail("re-init destroyed chrome");

note("\n=== 4b. Repeated re-init at mobile width (meanmenu must not duplicate) ===");
await page.setViewport({ width: 420, height: 820 });
await page.goto(`${BASE}/about`, { waitUntil: "networkidle2" });
await new Promise((r) => setTimeout(r, 1000));
const mobileBefore = await probe();
await page.evaluate(async () => {
  for (let i = 0; i < 5; i++) window.AiLogiQsInitTemplate();
  await new Promise((r) => setTimeout(r, 600));
});
const mobileAfter = await probe();
note(`  mean-container ${mobileBefore.meanContainers} -> ${mobileAfter.meanContainers}`);
note(`  nice-select     ${mobileBefore.niceSelects} -> ${mobileAfter.niceSelects}`);
const bars = await page.evaluate(
  () => document.querySelectorAll(".mean-bar").length
);
note(`  mean-bar        1 -> ${bars}`);
mobileAfter.meanContainers === mobileBefore.meanContainers
  ? pass("meanmenu container not duplicated")
  : fail(`meanmenu duplicated: ${mobileBefore.meanContainers} -> ${mobileAfter.meanContainers}`);
bars === 1
  ? pass("exactly one mean-bar after 6 total inits")
  : fail(`mean-bar duplicated (${bars})`);
await page.setViewport({ width: 1370, height: 900 });

note("\n=== 5. Mobile viewport: offcanvas nav builds ===");
await page.setViewport({ width: 420, height: 820 });
await page.goto(`${BASE}/about`, { waitUntil: "networkidle2" });
await new Promise((r) => setTimeout(r, 1200));
const mobile = await page.evaluate(() => ({
  meanContainers: document.querySelectorAll(".mean-container").length,
  meanLinks: document.querySelectorAll(".mean-container a").length,
  hamburgerVisible: (() => {
    const el = document.querySelector(".sidebar__toggle");
    if (!el) return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  })(),
}));
mobile.meanLinks > 5
  ? pass(`meanmenu built ${mobile.meanLinks} links`)
  : fail(`meanmenu did not build (${mobile.meanLinks} links)`);
mobile.hamburgerVisible ? pass("hamburger visible at 420px") : fail("hamburger hidden");

note("\n=== 6. Blog: SSR content + metadata ===");
await page.setViewport({ width: 1370, height: 900 });
await page.goto(`${BASE}/blog`, { waitUntil: "networkidle2" });
const blog = await page.evaluate(() => ({
  title: document.title,
  description: document.querySelector('meta[name="description"]')?.content,
  ogTitle: document.querySelector('meta[property="og:title"]')?.content,
  canonical: document.querySelector('link[rel="canonical"]')?.href,
  postCards: document.querySelectorAll(".news-standard-items article").length,
  postLinks: [...document.querySelectorAll('a[href^="/blog/"]')].length,
}));
note(`  title:       ${blog.title}`);
note(`  description: ${blog.description}`);
note(`  og:title:    ${blog.ogTitle}`);
note(`  canonical:   ${blog.canonical}`);
blog.postCards >= 6
  ? pass(`${blog.postCards} post cards rendered`)
  : fail(`expected >=6 post cards, got ${blog.postCards}`);
blog.title === "Blog | AiLogiQs"
  ? pass("title template applied correctly")
  : fail(`unexpected title: ${blog.title}`);

await page.goto(`${BASE}/blog/blending-technology-and-creativity`, {
  waitUntil: "networkidle2",
});
const post = await page.evaluate(() => ({
  title: document.title,
  ogType: document.querySelector('meta[property="og:type"]')?.content,
  published: document.querySelector('meta[property="article:published_time"]')
    ?.content,
  ogImage: document.querySelector('meta[property="og:image"]')?.content,
  h1: document.querySelector("h1, .news-details-content h2")?.textContent.trim(),
  bodyHtmlInDom: !!document.querySelector(".news-details-content p"),
  rawHtmlEscaped:
    document.body.innerHTML.includes("&lt;p&gt;") ? "ESCAPED (bug)" : "rendered",
  prevNext: document.querySelectorAll(".prev-next-button a").length,
}));
note(`  post title: ${post.title}`);
note(`  og:type:    ${post.ogType}`);
note(`  og:image:   ${post.ogImage}`);
note(`  published:  ${post.published}`);
post.ogType === "article" ? pass("article OG type set") : fail("no og:type=article");
post.rawHtmlEscaped === "rendered"
  ? pass("bodyHtml rendered as real markup")
  : fail("bodyHtml was escaped");
post.bodyHtmlInDom ? pass("post body present") : fail("post body missing");

note("\n=== 7. Homepage title ===");
await page.goto(`${BASE}/`, { waitUntil: "networkidle2" });
const homeTitle = await page.title();
homeTitle === "AiLogiQs – AI Startup & Technology"
  ? pass(`"${homeTitle}"`)
  : fail(`duplicated/wrong title: "${homeTitle}"`);

note("\n=== 8. Missing assets ===");
if (asset404s.size === 0) pass("no 404 assets");
else {
  note(`  404s: ${[...asset404s].join(", ")}`);
  fail(`${asset404s.size} asset(s) 404`);
}

const realErrors = consoleErrors.filter(
  (e) => !/Failed to load resource/.test(e)
);
if (realErrors.length === 0) pass("no JS console errors");
else {
  note(`  ${realErrors.slice(0, 8).join("\n  ")}`);
  fail(`${realErrors.length} JS error(s)`);
}

await browser.close();

console.log("\n" + "=".repeat(60));
if (problems.length === 0) {
  console.log("ALL CHECKS PASSED");
} else {
  console.log(`${problems.length} PROBLEM(S):`);
  problems.forEach((p) => console.log(`  - ${p}`));
}
process.exit(problems.length === 0 ? 0 : 1);
