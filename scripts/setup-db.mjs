// Creates the Turso schema and loads the seed articles.
//
// Idempotent: safe to re-run. Existing rows are left alone unless --force is
// passed, which deletes and reloads every post.
//
//   node scripts/setup-db.mjs              # schema only, never touches rows
//   node scripts/setup-db.mjs --seed      # load the seed articles
//   node scripts/setup-db.mjs --seed --force   # delete everything, then load
//
// Reads TURSO_DATABASE_URL / TURSO_AUTH_TOKEN from the environment or .env.local.
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// Minimal .env.local loader so this script behaves the same as `next dev`,
// which loads .env.local automatically.
try {
  const env = readFileSync(join(root, ".env.local"), "utf8");
  for (const line of env.split("\n")) {
    const match = /^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/.exec(line);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2].replace(/^["']|["']$/g, "");
    }
  }
} catch {
  // No .env.local -- rely on the ambient environment.
}

const { createClient } = await import("@libsql/client");
const { POSTS, CATEGORIES, AUTHOR } = await import("../src/content/posts.js");

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!url) {
  console.error(
    "TURSO_DATABASE_URL is not set.\n" +
      "Copy .env.example to .env.local and fill in the values from your Turso dashboard."
  );
  process.exit(1);
}

const client = createClient({ url, ...(authToken ? { authToken } : {}) });
const seed = process.argv.includes("--seed");
const force = process.argv.includes("--force");

console.log(`target: ${url}`);

// --- schema -----------------------------------------------------------------
// `status` is what separates a draft from a live post; every public read path
// filters on it. `tags` is a comma-separated string, which libSQL/SQLite has no
// array type for -- fine at this scale and avoids a join table for one field.
// libSQL rejects multi-statement strings over HTTP, so these are applied one
// at a time rather than as a single script.
const SCHEMA = [
  `CREATE TABLE IF NOT EXISTS posts (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  slug            TEXT    NOT NULL UNIQUE,
  title           TEXT    NOT NULL,
  excerpt         TEXT    NOT NULL DEFAULT '',
  image           TEXT    NOT NULL DEFAULT '',
  category_slug   TEXT    NOT NULL DEFAULT 'ai-agents',
  author          TEXT    NOT NULL DEFAULT '${AUTHOR}',
  published_at    TEXT    NOT NULL DEFAULT '',
  reading_minutes INTEGER,
  featured        INTEGER NOT NULL DEFAULT 0,
  tags            TEXT    NOT NULL DEFAULT '',
  body_html       TEXT    NOT NULL DEFAULT '',
  seo_title       TEXT,
  seo_description TEXT,
  status          TEXT    NOT NULL DEFAULT 'draft',
  created_at      TEXT    NOT NULL DEFAULT (datetime('now')),
  updated_at      TEXT    NOT NULL DEFAULT (datetime('now'))
)`,
  // getAllPosts orders by published_at DESC then id DESC; this covers it.
  `CREATE INDEX IF NOT EXISTS idx_posts_status_published
     ON posts (status, published_at DESC, id DESC)`,
  `CREATE INDEX IF NOT EXISTS idx_posts_category ON posts (category_slug)`,
];

console.log("creating schema...");
for (const statement of SCHEMA) {
  await client.execute(statement);
}
console.log(`  ${SCHEMA.length} statements applied`);

// --- migrations -------------------------------------------------------------
// Additive, applied only when missing, so re-running never errors on a database
// that already has the columns. SQLite has no "ADD COLUMN IF NOT EXISTS".
console.log("applying migrations...");

async function addColumnIfMissing(table, column, definition) {
  const info = await client.execute(`PRAGMA table_info(${table})`);
  const exists = info.rows.some((row) => row.name === column);
  if (exists) {
    console.log(`  = ${table}.${column}`);
    return;
  }
  await client.execute(`ALTER TABLE ${table} ADD COLUMN ${column} ${definition}`);
  console.log(`  + ${table}.${column}`);
}

// Cover images uploaded through the admin panel live in the database as BLOBs
// rather than being written to the filesystem, so they deploy with the data and
// need no writable disk or object store. `image` stays as the fallback for the
// seeded /public paths and for external URLs.
await addColumnIfMissing("posts", "image_blob", "BLOB");
await addColumnIfMissing("posts", "image_mime", "TEXT");

// --- seed -------------------------------------------------------------------
// Opt-in behind --seed. This script is also the schema/migration runner, and it
// gets re-run whenever the schema changes -- so seeding by default meant an
// unrelated migration silently republished every article that had been deleted
// from the database. Nothing here touches existing rows unless asked to.
if (!seed) {
  console.log("skipping seed (pass --seed to load the sample articles)");
  report();
  process.exit(0);
}

if (force) {
  console.log("--force: deleting existing posts");
  await client.execute("DELETE FROM posts");
}

// The category list is owned by the app (src/content/posts.js), so it is not
// stored as a table. It exists to give the sidebar stable ordering and copy.
console.log(`known categories: ${CATEGORIES.map((c) => c.slug).join(", ")}`);

console.log("seeding posts...");
let inserted = 0;
let skipped = 0;

for (const post of POSTS) {
  const existing = await client.execute({
    sql: "SELECT id FROM posts WHERE slug = ?",
    args: [post.slug],
  });

  if (existing.rows.length > 0 && !force) {
    skipped++;
    continue;
  }

  const params = [
    post.slug,
    post.title,
    post.excerpt,
    post.image,
    post.categorySlug,
    post.author,
    post.publishedAt,
    post.readingMinutes ?? null,
    post.featured ? 1 : 0,
    (post.tags ?? []).join(","),
    post.bodyHtml,
    post.seoTitle ?? null,
    post.seoDescription ?? null,
    "published",
  ];

  if (existing.rows.length > 0) {
    await client.execute({
      sql: `UPDATE posts SET title=?, excerpt=?, image=?, category_slug=?, author=?,
            published_at=?, reading_minutes=?, featured=?, tags=?, body_html=?,
            seo_title=?, seo_description=?, status=?, updated_at=datetime('now')
            WHERE slug=?`,
      args: [...params.slice(1), post.slug],
    });
  } else {
    await client.execute({
      sql: `INSERT INTO posts
            (slug, title, excerpt, image, category_slug, author, published_at,
             reading_minutes, featured, tags, body_html, seo_title, seo_description, status)
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      args: params,
    });
  }
  inserted++;
}

console.log(`  ${inserted} written, ${skipped} already present`);

report();
console.log("done.");

/** Final row counts, so every run ends with the same summary. */
async function report() {
  const total = await client.execute(
    "SELECT COUNT(*) AS n, SUM(status = 'published') AS pub FROM posts"
  );
  console.log(`\nposts: ${total.rows[0].n} total, ${total.rows[0].pub ?? 0} published`);
}