import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { isAuthenticated, isAdminConfigured } from "@/lib/admin-auth";
import { getAllPostsForAdmin } from "@/lib/admin-posts";
import PostTable from "./posts/PostTable";

export default async function AdminPage() {
  // No configuration means the panel stays closed rather than opening empty.
  if (!isAdminConfigured()) {
    return (
      <div className="admin-wrap">
        <div className="admin-panel">
          <h3>Not configured</h3>
          <p style={{ color: "#9ea1ab", fontSize: 14 }}>
            Set <code>ADMIN_PASSWORD</code> in <code>.env.local</code> to enable the
            admin panel. Copy <code>.env.example</code> to get started.
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated(await cookies())) redirect("/admin/login");

  const posts = await getAllPostsForAdmin();
  const published = posts.filter((p) => p.status === "published").length;
  const drafts = posts.filter((p) => p.status === "draft").length;

  return (
    <>
      <header className="admin-topbar">
        <h1>AiLogiQs Admin</h1>
        <nav>
          <a className="admin-btn admin-btn-small" href="/blog" target="_blank" rel="noopener">
            View site
          </a>
          <a className="admin-btn admin-btn-small" href="/admin/posts">
            All posts
          </a>
          <form action="/admin/actions" method="post">
            <input type="hidden" name="_action" value="signOut" />
            <button className="admin-btn admin-btn-small" type="submit">Sign out</button>
          </form>
        </nav>
      </header>

      <main className="admin-wrap">
        <div className="admin-card-head">
          <div>
            <h2>Posts</h2>
            <p className="admin-meta">
              {published} published · {drafts} draft{drafts === 1 ? "" : "s"}
            </p>
          </div>
          <a className="admin-btn admin-btn-primary" href="/admin/posts/new">
            New post
          </a>
        </div>

        {posts.length === 0 ? (
          <div className="admin-panel">
            <p style={{ color: "#9ea1ab", margin: 0 }}>
              No posts yet. Create one, or run{" "}
              <code>node scripts/setup-db.mjs</code> to load the seed articles.
            </p>
          </div>
        ) : (
          <PostTable posts={posts} />
        )}
      </main>
    </>
  );
}