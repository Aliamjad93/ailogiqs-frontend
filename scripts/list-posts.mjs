// Prints every row in the posts table, including drafts and soft-deleted ones.
//
//   node scripts/list-posts.mjs
import { readFileSync } from "node:fs";
import { createClient } from "@libsql/client";

try {
  for (const line of readFileSync(".env.local", "utf8").split("\n")) {
    const m = /^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/.exec(line);
    if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
} catch {}

const client = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

const rows = await client.execute(
  `SELECT id, slug, status, published_at, featured,
          (image_blob IS NOT NULL) AS has_blob, image
   FROM posts ORDER BY id`
);

if (rows.rows.length === 0) {
  console.log("posts table is empty");
} else {
  console.table(rows.rows);
  const published = rows.rows.filter((r) => r.status === "published");
  console.log(`${rows.rows.length} total, ${published.length} published`);
}