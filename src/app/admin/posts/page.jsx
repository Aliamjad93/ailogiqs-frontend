import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { isAuthenticated } from "@/lib/admin-auth";
import { getAllPostsForAdmin } from "@/lib/admin-posts";
import PostTable from "./PostTable";

export const metadata = {
  title: "All posts",
  robots: { index: false, follow: false },
};

export default async function AllPostsPage({ searchParams }) {
  if (!isAuthenticated(await cookies())) redirect("/admin/login");
  const { deleted } = await searchParams;
  const posts = await getAllPostsForAdmin();

  return (
    <>
      <header className="admin-topbar">
        <h1>AiLogiQs Admin</h1>
        <nav>
          <a className="admin-btn admin-btn-small" href="/blog" target="_blank" rel="noopener">
            View site
          </a>
          <a className="admin-btn admin-btn-small" href="/admin">
            Dashboard
          </a>
          <a className="admin-btn admin-btn-small" href="/admin/posts/new">
            New post
          </a>
        </nav>
      </header>

      <main className="admin-wrap">
        <div className="admin-card-head">
          <div>
            <h2>All posts</h2>
            <p className="admin-meta">{posts.length} total</p>
          </div>
        </div>

        {deleted && (
          <div className="admin-notice admin-notice-ok">
            Post removed. It is soft-deleted, so it can be restored from the database.
          </div>
        )}

        {posts.length === 0 ? (
          <div className="admin-panel">
            <p style={{ color: "#9ea1ab", margin: 0 }}>
              No posts yet. Run <code>node scripts/setup-db.mjs</code> to load the seed
              articles, or create one.
            </p>
          </div>
        ) : (
          <PostTable posts={posts} />
        )}
      </main>
    </>
  );
}