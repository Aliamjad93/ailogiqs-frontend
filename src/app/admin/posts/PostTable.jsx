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
 * Links are plain <a> rather than <Link>: the admin is outside the public route
 * group, so a client-side router prefetch here would fetch route payloads that
 * no client component ever consumes.
 */
export default function PostTable({ posts }) {
  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Cover</th>
          <th>Title</th>
          <th>Category</th>
          <th>Status</th>
          <th>Updated</th>
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
              <span
                className={`admin-badge admin-badge-${
                  post.status === "published" ? "published" : "draft"
                }`}
              >
                {post.status}
              </span>
            </td>
            <td className="admin-meta">{String(post.updated_at).slice(0, 16)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}