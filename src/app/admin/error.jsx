"use client";

/**
 * Error boundary for the admin area.
 *
 * A dropped connection to Turso throws out of the data layer, and without this
 * the browser gets a raw "Application error: a server-side exception" page with
 * no way back. Turning it into a message with a retry gives the author a way to
 * try again without knowing a reload was the answer.
 *
 * This is scoped to /admin deliberately. A public page hitting the same error
 * falls through to the seed-content fallback in src/lib/posts.js instead, which
 * is the right behaviour there and the wrong one here -- the admin list must not
 * quietly show seed content as if it were the real list.
 */
export default function AdminError({ error, reset }) {
  // The digest is the only safe thing to surface: `error.message` can contain
  // query text or connection strings, which must not reach the browser.
  const isConnection =
    /fetch|network|timeout|timed out|ECONN|503|502/i.test(error?.message ?? "");

  return (
    <main className="admin-wrap">
      <div className="admin-panel">
        <h3>{isConnection ? "Could not reach the database" : "Something went wrong"}</h3>

        <p style={{ color: "#9ea1ab", fontSize: 14, lineHeight: 1.6 }}>
          {isConnection
            ? "The connection to Turso dropped. This is usually temporary — try again, and if it keeps happening check that the database is reachable."
            : "The request could not be completed."}
        </p>

        {error?.digest && (
          <p style={{ color: "#71747e", fontSize: 12 }}>Reference: {error.digest}</p>
        )}

        <div className="admin-actions">
          <button className="admin-btn admin-btn-primary" type="button" onClick={reset}>
            Try again
          </button>
          <a className="admin-btn" href="/admin">
            Back to dashboard
          </a>
        </div>
      </div>
    </main>
  );
}