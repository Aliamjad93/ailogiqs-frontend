import { changeStatus, removePost, restorePost } from "@/app/admin/actions";
import ConfirmForm from "@/components/admin/ConfirmForm";

const CATEGORY_LABELS = {
  "ai-agents": "AI Agents",
  "machine-learning": "Machine Learning",
  "data-analytics": "Data Analytics",
  automation: "Automation",
  infrastructure: "Infrastructure",
  "ai-design": "AI Design",
};

/**
 * Shared post table for the dashboard and the all-posts screen.
 *
 * Row actions live here rather than only on the edit screen. They used to be on
 * the edit screen alone, which meant deleting a post required opening it first --
 * and nothing in the list hinted that a delete existed at all.
 *
 * `view` selects which set of actions makes sense: the live list gets
 * Publish/Unpublish and Delete, the deleted list gets Restore.
 *
 * Links are plain <a> rather than <Link>: the admin is outside the public route
 * group, so a client-side router prefetch here would fetch route payloads that
 * no client component ever consumes.
 */
export default function PostTable({ posts, view = "live", redirectTo }) {
  const isDeletedView = view === "deleted";

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Cover</th>
          <th>Title</th>
          <th>Category</th>
          <th>Status</th>
          <th>Updated</th>
          <th className="admin-col-actions">Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>
              <img className="admin-thumb" src={post.image} alt="" />
            </td>
            <td>
              <a href={`/admin/posts/${post.id}`}>{post.title}</a>
              <div className="admin-meta">/{post.slug}</div>
            </td>
            <td>{CATEGORY_LABELS[post.category_slug] ?? post.category_slug}</td>
            <td>
              <span className={`admin-badge admin-badge-${post.status}`}>
                {post.status}
              </span>
            </td>
            <td className="admin-meta">{String(post.updated_at).slice(0, 16)}</td>
            <td>
              <div className="admin-row-actions">
                {isDeletedView ? (
                  <ConfirmForm
                    action={restorePost}
                    fields={{ id: post.id }}
                    label="Restore"
                    className="admin-btn admin-btn-small"
                    confirm={`Restore "${post.title}"? It comes back as a draft, so nothing goes live until you publish it.`}
                  />
                ) : (
                  <>
                    <ConfirmForm
                      action={changeStatus}
                      fields={{
                        id: post.id,
                        status: post.status === "published" ? "draft" : "published",
                        ...(redirectTo ? { redirectTo } : {}),
                      }}
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
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
