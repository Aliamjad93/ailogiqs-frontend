# AiLogiQs — Frontend

Marketing site and blog for AiLogiQs, built on the AiLogiQs Bootstrap/jQuery
design template. Next.js App Router on the front, Turso (libSQL) for content, a
password-protected admin panel for writing blog posts.

---

## Stack

| Layer     | Choice                                                       |
| --------- | ------------------------------------------------------------ |
| Framework | Next.js 16 (App Router, Turbopack), React 19                  |
| Styling   | The original theme CSS, plus `public/css/overrides.css`        |
| Content   | Turso / libSQL (`@libsql/client`)                              |
| Editor    | TipTap (rich text, WYSIWYG)                                    |
| Uploads   | Cover images stored as BLOBs in the database                   |
| Lint      | oxlint                                                         |

The theme is not rewritten. Its markup, CSS and jQuery plugins are preserved and
the page components render that markup, so the design is pixel-identical to the
template.

---

## Getting started

```bash
npm install
cp .env.example .env.local    # fill in the values, see below
npm run dev                   # http://localhost:3000
```

### Environment

`.env.local` is gitignored and must never be committed. `.env.example` is the
committed template.

| Variable               | Required | Purpose                                     |
| ---------------------- | -------- | ------------------------------------------- |
| `TURSO_DATABASE_URL`   | yes      | `libsql://…` URL of the Turso database      |
| `TURSO_AUTH_TOKEN`     | yes      | Write token from the Turso dashboard        |
| `ADMIN_PASSWORD`       | yes      | Password for `/admin`                       |

If `TURSO_DATABASE_URL` is unset the site still builds, using the seed content
in `src/content/posts.js`. That fallback exists so a build never depends on a
network round trip — it is not a substitute for a configured database.

---

## Routes

### Public

| Route          | Notes                                                   |
| -------------- | ------------------------------------------------------- |
| `/`            | Home variant 1 (there are 6 templates, `home-2`…`home-6`) |
| `/blog`        | Listing: hero carousel, cards, sidebar, filters          |
| `/blog/[slug]` | Article page                                              |
| `/about`, `/service`, `/team`, `/project`, `/project-details`, `/pricing`, `/faq`, `/contact`, `/login`, `/register` | Migrated template pages |

Legacy template paths `/news` and `/news-details` redirect to `/blog` — see
`next.config.mjs`.

### Admin

Deliberately **outside** the `(site)` route group, so it loads none of the public
header, footer, preloader, cursor or jQuery runtime.

| Route              | Purpose                          |
| ------------------ | -------------------------------- |
| `/admin/login`     | Password prompt                  |
| `/admin`           | Dashboard + post table           |
| `/admin/posts/new` | Create a post                    |
| `/admin/posts/[id]`| Edit, publish/unpublish, delete  |
| `/api/posts/image/[id]` | Serves a cover image BLOB   |

---

## Writing a post

The admin form has exactly four inputs:

1. **Title** — the slug is generated from it.
2. **Cover image** — uploaded as a file. Required.
3. **Category** — chosen from the fixed list.
4. **Content** — TipTap editor: bold, italic, H2, H3, bullet list, numbered
   list, quote, inline code, link, undo, redo.

Everything else is derived, not typed:

| Field              | Source                                     |
| ------------------ | ------------------------------------------ |
| Slug               | Generated from the title; made unique      |
| Publish date       | Set automatically to today on create       |
| Excerpt            | First ~180 characters of the body          |
| Reading time       | Word count                                  |
| Meta description   | The generated excerpt                       |
| Author             | `AUTHOR` in `src/content/posts.js`          |
| Status             | Draft or live                              |

### Two details worth knowing

**Cover images are BLOBs, not files.** An uploaded image goes into the
`posts.image_blob` column and is served back through `/api/posts/image/[id]`.
Nothing is written to disk, so there is no writable-filesystem requirement and
no deploy step to publish an image. `bodySizeLimit` in `next.config.mjs` is sized
for this; the per-file cap (5 MB, images only) is enforced in
`src/lib/admin-posts.js`.

**HTML is sanitised on write**, not on read — see `src/lib/sanitize.js`. The
article page renders it with a single `dangerouslySetInnerHTML`, which is why the
allowlist is the thing to audit when adding an element to the editor. Run
`npm run test:sanitiser` after changing it.

---

## Database

```bash
npm run db:setup     # create/alter schema. Never touches rows.
npm run db:seed      # load the sample articles (--seed is required)
npm run db:list      # every row, including drafts
node scripts/clear-posts.mjs   # empty the table (prompts first)
```

Schema and seed live in `scripts/setup-db.mjs`. Migrations are additive and
applied only when a column is missing.

> Seeding is **opt-in**. An earlier version seeded by default, which meant an
> unrelated schema migration silently republished every deleted article.

Reads go through `src/lib/posts.js`, which returns the database contents when
configured and seed content otherwise. An empty result is a real answer and
renders the empty state — it does not fall back to the seeds.

---

## Scripts

| Script                      | Purpose                                          |
| --------------------------- | ------------------------------------------------ |
| `npm run dev`               | Dev server on :3000                              |
| `npm run build`             | Production build                                 |
| `npm run lint`              | oxlint over `src`                                |
| `npm run test:smoke`        | Drives real Chrome against the built site        |
| `npm run test:sanitiser`    | XSS and slug regression tests                    |
| `npm run db:setup` / `db:seed` / `db:list` | Schema, seed, inspect            |

> **`scripts/` is gitignored.** The tooling above lives in `scripts/` and is local
> only, so a fresh clone has none of it. Anything referencing those commands —
> CI, onboarding, the database section below — assumes you have copied `scripts/`
> across yourself.

---

## How the theme is wired

| File                              | Role                                            |
| --------------------------------- | ----------------------------------------------- |
| `src/app/layout.jsx`              | Root layout. Theme CSS and vendor JS in `<head>` |
| `src/lib/theme-assets.js`         | Load order for both lists                       |
| `src/components/layout/TemplateRuntime.jsx` | Re-initialises jQuery plugins per route |
| `public/css/overrides.css`        | **Must load last**                              |

Vendor scripts are plain `<script async={false}>` tags in the root layout's
`<head>`. That is deliberate: a parser-blocking classic script guarantees jQuery
is defined before its plugins and swiper before `main.js`, which is an ordering
`next/script`'s `beforeInteractive` does not express.

`overrides.css` loads after everything in `public/assets/css/`. Do not add rules
to the theme CSS for new work — put them there.

### Breakpoints

Bootstrap's `xxl` step and the theme's desktop step were both realigned from
1400px to 1200px, so the 1200–1399px band matches the desktop layout instead of
falling back to tablet. `scripts/align-breakpoints.mjs` applied it and
`scripts/verify-alignment.mjs` checks it. **Do not add component-level
`max-width: 1399px` overrides** — that reintroduces the bug.

---

## Deploying

Any Node host that runs `npm run build && npm start`.

Set `TURSO_DATABASE_URL`, `TURSO_AUTH_TOKEN` and `ADMIN_PASSWORD` in the host's
environment. Nothing is written to disk at runtime.

> **Before going live:** `ADMIN_PASSWORD` in `.env.local` is a placeholder and the
> session cookie is currently derived from the password rather than signed with a
> separate secret. Both should be changed. See `src/lib/admin-auth.js`.