import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { isAuthenticated, isAdminConfigured } from "@/lib/admin-auth";
import { getAllPostsForAdmin } from "@/lib/admin-posts";
import AdminTopBar from "@/components/admin/AdminTopBar";
import PostTable from "./posts/PostTable";

export default async function AdminPage() {
  // No configuration means the panel stays closed rather than opening empty.
  if (!isAdminConfigured()) {
    return (
      <div className="admin-wrap">
        <div className="admin-panel">
          <h3>Not configured</h3>
          <p className="admin-meta" style={{ fontSize: 14 }}>
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
      <AdminTopBar active="blogs" />

      <main className="admin-wrap">
        <div className="admin-card-head">
          <div>
            <h2>Blogs</h2>
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
            <p className="admin-meta" style={{ margin: 0 }}>
              No posts yet. Create one, or run{" "}
              <code>node scripts/setup-db.mjs</code> to load the seed articles.
            </p>
          </div>
        ) : (
          // redirectTo keeps Publish/Unpublish on the dashboard instead of
          // bouncing to the edit screen.
          <PostTable posts={posts} redirectTo="/admin" />
        )}
      </main>
    </>
  );
}