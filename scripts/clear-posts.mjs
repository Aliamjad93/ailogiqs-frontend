// Removes every row from the posts table, leaving the schema in place.
//
//   node scripts/clear-posts.mjs
//   node scripts/clear-posts.mjs --yes    # skip the prompt
//
// Destructive, so it asks first unless --yes is passed. Used to reset the blog
// to an empty state without dropping the table or its indexes.
import { readFileSync } from "node:fs";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
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

const before = await client.execute("SELECT COUNT(*) AS n FROM posts");
const count = Number(before.rows[0].n);

if (count === 0) {
  console.log("posts table is already empty");
  process.exit(0);
}

// --yes for scripted runs; the prompt is the safety net for a human.
const assumeYes = process.argv.includes("--yes");

let answer = "y";
if (!assumeYes) {
  const rl = createInterface({ input: stdin, output: stdout });
  answer = await rl.question(`Delete all ${count} posts? This cannot be undone. [y/N] `);
  rl.close();
}

if (answer.trim().toLowerCase() !== "y") {
  console.log("cancelled, nothing deleted");
  process.exit(0);
}

await client.execute("DELETE FROM posts");

const after = await client.execute("SELECT COUNT(*) AS n FROM posts");
console.log(`deleted ${count - Number(after.rows[0].n)} posts, ${after.rows[0].n} remaining`);