import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { isAuthenticated } from "@/lib/admin-auth";
import { getAllPostsForAdmin, getDeletedPosts } from "@/lib/admin-posts";
import AdminTopBar from "@/components/admin/AdminTopBar";
import PostTable from "./PostTable";

export const metadata = {
  title: "All posts",
  robots: { index: false, follow: false },
};

export default async function AllPostsPage({ searchParams }) {
  if (!isAuthenticated(await cookies())) redirect("/admin/login");

  const params = await searchParams;
  const view = params?.status === "deleted" ? "deleted" : "live";

  // Both lists are read because the tabs need the deleted count either way. The
  // blog is small; this is two cheap queries, not a paging problem.
  const [posts, deletedPosts] = await Promise.all([
    getAllPostsForAdmin(),
    getDeletedPosts(),
  ]);

  const rows = view === "deleted" ? deletedPosts : posts;

  return (
    <>
      <AdminTopBar active="posts" />

      <main className="admin-wrap">
        <div className="admin-card-head">
          <div>
            <h2>All posts</h2>
            <p className="admin-meta">
              {posts.length} live · {deletedPosts.length} deleted
            </p>
          </div>
          <a className="admin-btn admin-btn-primary" href="/admin/posts/new">
            New post
          </a>
        </div>

        {/*
          Soft-deleted posts used to render in the same list as everything else,
          wearing a badge with no styling -- so deleting a post looked like it had
          done nothing. They get their own tab, which is also where Restore lives.
        */}
        <nav className="admin-tabs">
          <a
            href="/admin/posts"
            className={`admin-tab${view === "live" ? " is-active" : ""}`}
          >
            All posts <span>{posts.length}</span>
          </a>
          <a
            href="/admin/posts?status=deleted"
            className={`admin-tab${view === "deleted" ? " is-active" : ""}`}
          >
            Deleted <span>{deletedPosts.length}</span>
          </a>
        </nav>

        {params?.deleted && (
          <div className="admin-notice admin-notice-ok">
            Post deleted. It is out of the blog and the sitemap — restore it from
            the <a href="/admin/posts?status=deleted">Deleted</a> tab if that was a
            mistake.
          </div>
        )}
        {params?.restored && (
          <div className="admin-notice admin-notice-ok">
            Post restored as a draft. Publish it when you are ready for it to go
            live again.
          </div>
        )}

        {rows.length === 0 ? (
          <div className="admin-panel">
            <p className="admin-meta" style={{ margin: 0 }}>
              {view === "deleted"
                ? "Nothing deleted. Removed posts are kept here so a mis-click can be undone."
                : "No posts yet. Create one, or run node scripts/setup-db.mjs to load the seed articles."}
            </p>
          </div>
        ) : (
          <PostTable posts={rows} view={view} />
        )}
      </main>
    </>
  );
}
