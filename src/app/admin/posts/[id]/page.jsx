import { notFound, redirect } from "next/navigation";
import { cookies } from "next/headers";
import { isAuthenticated } from "@/lib/admin-auth";
import { getPostForAdmin } from "@/lib/admin-posts";
import { getCategories } from "@/lib/posts";
import { SITE } from "@/lib/site.config";
import { removePost, changeStatus, restorePost } from "@/app/admin/actions";
import AdminTopBar from "@/components/admin/AdminTopBar";
import ConfirmForm from "@/components/admin/ConfirmForm";
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
  // A soft-deleted post is reachable from the Deleted tab. Offering it Publish
  // would be wrong -- it is not in the blog to publish, it needs restoring first.
  const isDeleted = post?.status === "deleted";

  return (
    <>
      <AdminTopBar active="blogs" />

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

              {/*
                Publish/unpublish, restore and delete are separate forms because
                they are single-intent operations and should not be able to submit
                the whole post body by accident.

                `redirectTo` keeps the user on this screen after a status change;
                without it the action bounced to the same URL anyway, but the
                field is what lets the identical buttons work from the table.
              */}
              {isDeleted ? (
                <ConfirmForm
                  action={restorePost}
                  fields={{ id: post.id }}
                  label="Restore"
                  className="admin-btn admin-btn-small admin-btn-primary"
                  confirm={`Restore "${post.title}"? It comes back as a draft, so nothing goes live until you publish it.`}
                />
              ) : (
                <>
                  <ConfirmForm
                    action={changeStatus}
                    fields={{ id: post.id, status: nextStatus, redirectTo: `/admin/posts/${post.id}` }}
                    label={post.status === "published" ? "Unpublish" : "Publish"}
                    className="admin-btn admin-btn-small"
                    confirm={
                      post.status === "published"
                        ? `Unpublish "${post.title}"? It disappears from the blog immediately.`
                        : `Publish "${post.title}" to the live blog?`
                    }
                  />

                  <ConfirmForm
                    action={removePost}
                    fields={{ id: post.id }}
                    label="Delete"
                    className="admin-btn admin-btn-small admin-btn-danger"
                    confirm={`Delete "${post.title}"?\n\nIt is removed from the blog and the sitemap. You can undo this from the Deleted tab.`}
                  />
                </>
              )}
            </div>
          )}
        </div>

        {saved && <div className="admin-notice admin-notice-ok">Saved.</div>}

        {isDeleted && (
          <div className="admin-notice admin-notice-error">
            This post is deleted — it is not on the blog. Restore it to edit and
            publish it again.
          </div>
        )}

        <PostForm post={post} categories={categories} canonicalBase={SITE.url} />
      </main>
    </>
  );
}