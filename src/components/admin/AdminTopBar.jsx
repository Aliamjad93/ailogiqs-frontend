import { signOut } from "@/app/admin/actions";

/**
 * Shared admin top bar.
 *
 * Previously this markup was copy-pasted into the dashboard, the all-posts
 * screen and the edit screen, and the three copies had already drifted apart --
 * the edit screen offered no way to reach the dashboard, and the dashboard's
 * sign-out button posted to /admin/actions, a route that does not exist, so it
 * 404'd instead of signing the user out. One component removes the drift.
 *
 * `active` highlights the current section. Links are plain <a> rather than
 * <Link>: the admin sits outside the public route group, so a client-side
 * router prefetch here would fetch route payloads no client component consumes.
 */
export default function AdminTopBar({ active = "" }) {
  return (
    <header className="admin-topbar">
      <h1>AiLogiQs Admin</h1>
      <nav>
        <a className="admin-btn admin-btn-small" href="/blog" target="_blank" rel="noopener">
          View site
        </a>
        <a className="admin-btn admin-btn-small" href="/admin">
          {active === "dashboard" ? <strong>Dashboard</strong> : "Dashboard"}
        </a>
        <a className="admin-btn admin-btn-small" href="/admin/posts">
          {active === "posts" ? <strong>All posts</strong> : "All posts"}
        </a>
        <a className="admin-btn admin-btn-small" href="/admin/posts/new">
          New post
        </a>
        {/* signOut is a server action, so the form must post through it rather
            than to a URL. */}
        <form action={signOut}>
          <button className="admin-btn admin-btn-small" type="submit">
            Sign out
          </button>
        </form>
      </nav>
    </header>
  );
}
