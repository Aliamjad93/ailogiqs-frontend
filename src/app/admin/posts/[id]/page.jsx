import { notFound, redirect } from "next/navigation";
import { cookies } from "next/headers";
import { isAuthenticated } from "@/lib/admin-auth";
import { getPostForAdmin } from "@/lib/admin-posts";
import { getCategories } from "@/lib/posts";
import { removePost, changeStatus } from "@/app/admin/actions";
import PostForm from "./PostForm";

export const metadata = {
  title: "Edit post",
  robots: { index: false, follow: false },
};

export default async function EditPostPage({ params, searchParams }) {
  if (!isAuthenticated(await cookies())) redirect("/admin/login");

  const { id } = await params;
  const { saved } = await searchParams;

  const isNew = id === "new";
  const post = isNew ? null : await getPostForAdmin(Number(id));

  if (!isNew && !post) notFound();

  const categories = await getCategories();
  const nextStatus = post?.status === "published" ? "draft" : "published";

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
        </nav>
      </header>

      <main className="admin-wrap">
        <div className="admin-card-head">
          <div>
            <h2>{isNew ? "New post" : "Edit post"}</h2>
            {post && (
              <p className="admin-meta">
                <span className={`admin-badge admin-badge-${post.status}`}>
                  {post.status}
                </span>{" "}
                last updated {String(post.updated_at).slice(0, 16)}
              </p>
            )}
          </div>

          {!isNew && (
            <div className="admin-actions-inline">
              {post.status === "published" && (
                <a
                  className="admin-btn admin-btn-small"
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener"
                >
                  View live
                </a>
              )}

              {/* Publish/unpublish and delete are separate forms because they
                  are single-intent operations and should not be able to submit
                  the whole post body by accident. */}
              <form action={changeStatus}>
                <input type="hidden" name="id" value={post.id} />
                <input type="hidden" name="status" value={nextStatus} />
                <button className="admin-btn admin-btn-small" type="submit">
                  {post.status === "published" ? "Unpublish" : "Publish"}
                </button>
              </form>

              <form action={removePost}>
                <input type="hidden" name="id" value={post.id} />
                <button className="admin-btn admin-btn-small admin-btn-danger" type="submit">
                  Delete
                </button>
              </form>
            </div>
          )}
        </div>

        {saved && <div className="admin-notice admin-notice-ok">Saved.</div>}

        <PostForm post={post} categories={categories} />
      </main>
    </>
  );
}