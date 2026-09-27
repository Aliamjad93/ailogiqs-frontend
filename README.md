# AiLogiQs

This is a React (Vite + React Router) conversion of the "AIForge" HTML/CSS template,
rebranded to **AiLogiQs** throughout (page titles, the preloader animation, the nav
logo, footer copyright, etc.).

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview   # serve the production build locally to sanity-check it
```

## What's inside

- **React 19 + Vite + React Router 7** — a normal client-rendered SPA.
- **19 pages**, matching the original template 1:1: 6 homepage variants
  (`/`, `/home-2` … `/home-6`) plus About, Contact, FAQ, Login, Register, News,
  News Details, Pricing, Service, Team, Project, Project Details, and a 404
  catch-all.
- `src/pages/` — one component per page.
- `src/components/` — `Header` / `Footer` (shared by the 13 pages that used the
  same markup in the original template) plus `HeaderHome1–6` / `FooterHome2–6`
  for the homepage variants that had their own header/footer styling. Internal
  navigation (`<a href="about.html">` etc.) was converted to React Router
  `<Link>`s.
- `src/layout/` — pieces that appear on every page: the preloader, the custom
  mouse cursor, the "back to top" button, the offcanvas mobile menu, and the
  search popup. `Layout.jsx` wraps the whole app and re-runs the template's
  jQuery plugins (sliders, WOW.js scroll animations, the mobile menu,
  nice-select, counters, etc.) after every route change, since React swaps the
  page content out from under them on client-side navigation.
- `src/components/Logo.jsx` — a small text wordmark that replaces the old
  vector "AIForge" logo images site-wide (light/dark variants for use on dark
  or light headers/footers).
- `public/assets/` — the original template's CSS, images, fonts, and vendor JS
  (jQuery, Bootstrap, Swiper, WOW.js, meanmenu, nice-select, magnific-popup,
  etc.), copied over unchanged and loaded the same way the original HTML did
  (plain `<link>`/`<script>` tags in `index.html`), so the visual design is
  identical to the source template.

## How the vendor jQuery plugins are wired up

`public/assets/js/main.js` was lightly modified: its original
`$(document).ready(...)` block was wrapped into a function,
`window.AiLogiQsInitTemplate()`, that `src/layout/Layout.jsx` calls once on
mount and again after every route change (instead of once on page load, which
is all a plain HTML site needs). Everything inside that function — sliders,
counters, WOW animations, the mobile menu, nice-select, magnific-popup — is
otherwise untouched from the original template.

## Known limitations / things worth double-checking

This was converted mechanically from the original HTML (19 pages, ~17,000
lines), verified to build cleanly and to server-render without errors on
every page. It has **not** been checked pixel-by-pixel in a real browser, so
before shipping it's worth clicking through each page and, in particular:

- The mobile menu, sliders, and scroll animations, since they depend on the
  jQuery plugins re-running correctly after client-side navigation.
- The contact/login/register forms don't currently submit anywhere — the
  original template didn't wire them to a real backend either (there was a
  `contact.php` in the source template that this conversion doesn't include).
- One malformed tag in the original template (`index-6.html`, a footer email
  link missing its closing `>`) was fixed during conversion.
- A few decorative background/watermark logo images (in the footers of the
  Home 2 / Home 4 variants) were replaced with the same text `Logo` component
  used for the main nav logo — worth a glance to make sure the sizing still
  looks right in context.

## Brand replacement

"AIForge" -> "AiLogiQs" was applied throughout, including the letter-by-letter
preloader animation (now spells A-I-L-O-G-I-Q-S), page titles, meta tags, and
the footer copyright line.
