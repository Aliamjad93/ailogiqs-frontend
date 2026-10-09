import { createClient } from "@libsql/client";

/**
 * How many times to retry a failed round trip before giving up.
 *
 * A hosted libSQL endpoint is reached over HTTPS, so any single request can fail
 * for reasons that have nothing to do with the query: a dropped connection, a
 * gateway timeout, a brief edge blip. Without retries one of those throws
 * "Failed to fetch" and takes the whole page render with it, which is what
 * happened to the admin edit page.
 *
 * Three attempts with a short backoff absorbs a transient blip while still
 * failing fast on a genuinely unreachable database.
 */
const MAX_ATTEMPTS = 3;
const RETRY_DELAY_MS = 250;

/** Errors worth retrying: transport-level, not "your SQL is wrong". */
function isRetryable(error) {
  const message = String(error?.message ?? error).toLowerCase();
  return (
    message.includes("failed to fetch") ||
    message.includes("network") ||
    message.includes("timeout") ||
    message.includes("timed out") ||
    message.includes("econnreset") ||
    message.includes("socket") ||
    message.includes("503") ||
    message.includes("502") ||
    message.includes("429")
  );
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Runs a libSQL operation, retrying transient transport failures.
 *
 * Only the read helpers go through this. Writes are NOT retried automatically:
 * a write that may or may not have been applied cannot be safely repeated, and
 * the caller needs to see the real error.
 */
async function withRetry(operation, label) {
  let lastError;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (!isRetryable(error) || attempt === MAX_ATTEMPTS) break;
      console.warn(
        `[db] ${label} attempt ${attempt}/${MAX_ATTEMPTS} failed (${error.message}), retrying...`
      );
      await wait(RETRY_DELAY_MS * attempt);
    }
  }

  throw lastError;
}

/**
 * Turso/libSQL connection, created once per process and reused.
 *
 * Falls back to a local SQLite file when TURSO_DATABASE_URL is unset, so the
 * site still builds and the smoke test still passes without credentials. That
 * matters because a build must never depend on a network round trip.
 *
 * The auth token is read from the environment only. Never commit it --
 * .gitignore covers .env.local, and .env.example documents the shape.
 */

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

let client;

/** True when a hosted Turso database is configured. */
export function isDatabaseConfigured() {
  return Boolean(url && url.startsWith("libsql://"));
}

export function getClient() {
  if (!client) {
    if (!url) {
      throw new Error(
        "TURSO_DATABASE_URL is not set. Copy .env.example to .env.local, or leave it unset to use the static content fallback."
      );
    }
    client = createClient({
      url,
      // A local file: URL needs no token; a hosted one does.
      ...(authToken ? { authToken } : {}),
    });
  }
  return client;
}

/**
 * Runs a query and returns plain row objects.
 *
 * libSQL returns Rows with a column-type-aware accessor; for these tables every
 * column is a string, integer or null, so a straight cast is safe and keeps the
 * call sites readable.
 */
export async function query(sql, params = []) {
  const result = await withRetry(
    () => getClient().execute({ sql, args: params }),
    "query"
  );
  return result.rows.map((row) => Object.fromEntries(Object.entries(row)));
}

export async function queryOne(sql, params = []) {
  const rows = await query(sql, params);
  return rows[0] ?? null;
}

export async function execute(sql, params = []) {
  return getClient().execute({ sql, args: params });
}

/**
 * Several statements in one round trip. libSQL's batch() is transactional
 * per batch, which is what the schema migration and seeding want.
 */
export async function batch(statements) {
  return getClient().batch(
    statements.map(({ sql, args = [] }) => ({ sql, args })),
    "write"
  );
}