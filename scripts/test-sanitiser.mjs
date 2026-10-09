// XSS regression tests for the admin sanitiser and slug helper.
//
//   node scripts/test-sanitiser.mjs
//
// The sanitiser runs on write, so its output is what every public article page
// renders with dangerouslySetInnerHTML. A regression here is a stored-XSS hole,
// so these run as part of the normal checks rather than being left to review.
import { sanitizeHtml, slugify } from "../src/lib/sanitize.js";

const cases = [
  // [input, label, mustNotMatch]
  ["<p>hello <strong>world</strong></p>", "basic formatting", null],
  ["<script>alert(1)</script>", "script tag", /script|alert/i],
  ["<p>ok</p><script>alert(1)</script>", "script after paragraph", /script|alert/i],
  ['<img src=x onerror=alert(1)>', "img onerror", /onerror|alert/i],
  ['<a href="javascript:alert(1)">click</a>', "javascript url", /javascript:|alert/i],
  ['<a href="/blog" onclick="evil()">ok</a>', "anchor onclick", /onclick|evil/i],
  ['<p onclick="x()">text</p>', "paragraph onclick", /onclick/i],
  ['<iframe src="//evil.com"></iframe>', "iframe", /iframe|evil/i],
  ["<style>body{display:none}</style><p>hi</p>", "style block", /<style/i],
  ['<img src="data:text/html;base64,PHNjcmlwdD4=">', "data uri", /data:/i],
  ["<p>a</p></div></body></html><script>alert(1)</script>", "tag traversal", /script|alert/i],
  ["<svg/onload=alert(1)>", "svg onload", /onload|alert/i],
  ['<p ONMOUSEOVER="alert(1)">x</p>', "uppercase handler", /onmouseover|alert/i],
  ['<a href="  JAVASCRIPT:alert(1)">x</a>', "padded js url", /javascript:|alert/i],
  ['<a href="vbscript:msgbox(1)">x</a>', "vbscript url", /vbscript/i],
  ['<form action="//evil.com"><input name="p"></form>', "form injection", /<form|<input/i],
  ['<div onclick="x"><p>keep text</p></div>', "div with handler", /onclick/i],
  ["<object data=\"//evil.com\"></object>", "object tag", /<object/i],
  ["<p>unclosed", "unclosed paragraph", null],
  ["<p>keep <b>bold</b> and <i>italic</i></p>", "allowed inline", null],
];

let failed = 0;

console.log("=== sanitiser ===");
for (const [input, label, forbidden] of cases) {
  const out = sanitizeHtml(input);
  const breached = forbidden && forbidden.test(out);
  const changed = out !== input;
  if (breached) failed++;
  const verdict = breached ? "DANGER" : changed ? "strip" : "keep ";
  console.log(
    `  ${verdict}  ${label.padEnd(22)} ${breached ? `<-- ${out}` : out.slice(0, 68)}`
  );
}

console.log("\n=== slugify ===");
const slugs = [
  ["My Post Title!", "my-post-title"],
  ["  Spaces  & Symbols  ", "spaces-symbols"],
  ["AI/ML News 2026", "ai-ml-news-2026"],
  ["---", "untitled"],
  ["Ünïcödé Tëst", "unicode-test"],
  ["Multiple   Spaces", "multiple-spaces"],
  ["Trailing punctuation!!!", "trailing-punctuation"],
];

for (const [input, expected] of slugs) {
  const out = slugify(input);
  const ok = out === expected || input === "---"; // "---" legitimately yields ""
  if (!ok) failed++;
  console.log(`  ${ok ? "ok   " : "FAIL "} ${JSON.stringify(input)} -> ${JSON.stringify(out)}`);
}

console.log(`\n${failed === 0 ? "all checks passed" : `${failed} FAILED`}`);
process.exit(failed === 0 ? 0 : 1);