"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { savePost } from "@/app/admin/actions";
import PostEditor from "@/components/admin/PostEditor";

/**
 * Create / edit form.
 *
 * Deliberately one column, top to bottom, in the order an author fills it in:
 * title, cover image, category, body, then save. The earlier two-column layout
 * put the editor on the left and every setting in a sidebar on the right, which
 * meant the two halves were read in an order that made no sense on a laptop.
 *
 * The form is a single <form> whose action is a server action, so an uploaded
 * file travels as a real multipart body -- no base64 round trip and no
 * client-side fetch to undo server-side.
 *
 * No encType attribute: when the action is a function, React supplies the
 * encoding itself and warns if one is also declared ("Cannot specify an encType
 * or method for a form that specifies a function as the action"). The file still
 * arrives as multipart, which is what the body size limit in next.config.mjs is
 * sized for.
 *
 * TipTap owns its own document and mirrors its HTML into a hidden input, which
 * is what the action reads. Driving TipTap from a controlled value fights its
 * internal state on every keystroke.
 *
 * Nothing here that the author does not have to decide: the slug comes from the
 * title, the date is stamped automatically, the excerpt, reading time and meta
 * description are derived from the body, and the author name is fixed.
 */
export default function PostForm({ post, categories }) {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(savePost, {});

  const [title, setTitle] = useState(post?.title ?? "");
  const [bodyHtml, setBodyHtml] = useState(post?.body_html ?? "");

  // Preview of the chosen file, so the author sees the crop before saving. The
  // object URL is revoked when it is replaced or the form unmounts -- leaking one
  // per selection pins the whole image in memory for the life of the tab.
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!preview) return;
    return () => URL.revokeObjectURL(preview.url);
  }, [preview]);

  // A successful save means the row now exists; move to its edit route so a
  // refresh does not re-submit a create.
  useEffect(() => {
    if (state?.saved && state.id) {
      router.push(`/admin/posts/${state.id}?saved=1`);
    }
  }, [state, router]);

  function pickFile(event) {
    const file = event.target.files?.[0];
    setPreview((current) => {
      if (current) URL.revokeObjectURL(current.url);
      return file ? { url: URL.createObjectURL(file), name: file.name } : null;
    });
  }

  // A cover is required, so the button stays disabled until one exists. On edit
  // an already-stored cover counts, which is what lets a copy fix save without
  // re-picking the file.
  const hasCover = Boolean(preview) || Boolean(post?.has_image_blob);
  const canSave =
    title.trim().length > 0 &&
    bodyHtml.replace(/<[^>]*>/g, "").trim().length > 0 &&
    hasCover;

  return (
    <form className="admin-column" action={formAction}>
      {post?.id && <input type="hidden" name="id" value={post.id} />}
      {/* An existing post keeps its slug and its publish date; both are decided
          once, at creation. Re-sending them keeps updatePost() from
          regenerating a live URL or re-dating the article. */}
      {post?.slug && <input type="hidden" name="slug" value={post.slug} />}
      {post?.published_at && (
        <input type="hidden" name="publishedAt" value={post.published_at} />
      )}

      {state?.saved && <div className="admin-notice admin-notice-ok">Saved.</div>}
      {state?.error && (
        <div className="admin-notice admin-notice-error">{state.error}</div>
      )}

      <div className="admin-panel">
        <div className="admin-field">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What is this article about?"
            required
          />
        </div>
      </div>

      <div className="admin-panel">
        <h3>Cover image</h3>

        {/*
          Upload only. There is no URL field because a pasted path is a second
          way to end up with a broken cover, and it would be a string the author
          has to keep correct by hand. The file goes into the database, so it
          needs no writable disk and no deploy step to go live.
        */}
        <div className="admin-field">
          <label htmlFor="coverImage">Image file</label>
          <input
            id="coverImage"
            name="coverImage"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
            onChange={pickFile}
          />
          <p className="admin-field-hint">
            JPEG, PNG, WebP, GIF or AVIF, up to 5 MB.
            {post?.has_image_blob
              ? " Leave empty to keep the current image."
              : " Required — a post without a cover has no thumbnail."}
          </p>
        </div>

        {(preview || post?.has_image_blob) && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            className="admin-cover-preview"
            src={preview?.url ?? `/api/posts/image/${post.id}`}
            alt="Cover preview"
          />
        )}
      </div>

      <div className="admin-panel">
        <div className="admin-field">
          <label htmlFor="categorySlug">Category</label>
          <select
            id="categorySlug"
            name="categorySlug"
            defaultValue={post?.category_slug ?? categories[0]?.slug}
          >
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="admin-panel">
        <h3>Content</h3>
        {/* This hidden input is what the server action reads; the editor updates
            it on every change. */}
        <input type="hidden" name="bodyHtml" value={bodyHtml} />
        <PostEditor value={bodyHtml} onChange={setBodyHtml} />
      </div>

      <div className="admin-panel">
        <h3>Visibility</h3>

        {/*
          Two states only. "Live" is what the site serves; "Draft" is hidden
          everywhere but the admin list. Anything more granular was a distinction
          the panel never needed to draw.
        */}
        <div className="admin-radio-row">
          <label className="admin-check">
            <input
              type="radio"
              name="status"
              value="draft"
              defaultChecked={(post?.status ?? "draft") !== "published"}
            />
            Draft &mdash; not visible on the site
          </label>
          <label className="admin-check">
            <input
              type="radio"
              name="status"
              value="published"
              defaultChecked={post?.status === "published"}
            />
            Live &mdash; published to the blog
          </label>
        </div>

        <label className="admin-check">
          <input type="checkbox" name="featured" defaultChecked={Boolean(post?.featured)} />
          Show in the blog hero slider
        </label>
      </div>

      <div className="admin-actions">
        <button
          className="admin-btn admin-btn-primary"
          type="submit"
          disabled={pending || !canSave}
        >
          {pending ? "Saving..." : post?.status === "published" ? "Save changes" : "Save post"}
        </button>
        <a className="admin-btn" href="/admin/posts">
          Cancel
        </a>
      </div>
    </form>
  );
}