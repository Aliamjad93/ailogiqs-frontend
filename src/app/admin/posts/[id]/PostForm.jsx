"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { savePost } from "@/app/admin/actions";
import PostEditor from "@/components/admin/PostEditor";

/**
 * Create / edit form.
 *
 * Deliberately one column, top to bottom, in the order an author fills it in:
 * title, cover image, category, body, SEO, then save. The earlier two-column
 * layout put the editor on the left and every setting in a sidebar on the right,
 * which meant the two halves were read in an order that made no sense on a
 * laptop.
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
 * THE SEO PANEL
 * Every SEO field is optional. Each one is a *hint* to the write layer, which
 * falls back to something derived when it is left blank:
 *
 *   slug            -> slugified title
 *   meta title      -> the post title
 *   meta description-> the generated excerpt (which is also the card summary)
 *   tags            -> none
 *
 * That keeps the panel honest: an author who ignores the panel entirely still
 * gets sensible metadata, and an author who wants control can override any of
 * it without the fallbacks fighting them. The placeholders show the value that
 * will actually be used, so the fallback is never a surprise.
 */

/** Mirrors slugify() in src/lib/sanitize.js. Display-only: the server re-does it. */
function slugifyPreview(text) {
  return String(text ?? "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/** Plain-text preview of the body, used as the meta-description placeholder. */
function plainSummary(html, limit = 160) {
  const text = String(html ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > limit ? `${text.slice(0, limit).trimEnd()}…` : text;
}

const TITLE_LIMIT = 60;
const DESC_LIMIT = 160;

export default function PostForm({ post, categories, canonicalBase = "https://ailogiqs.org" }) {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(savePost, {});

  const [title, setTitle] = useState(post?.title ?? "");
  const [bodyHtml, setBodyHtml] = useState(post?.body_html ?? "");

  // SEO fields. Held in state so the counters and the preview can react.
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [seoTitle, setSeoTitle] = useState(post?.seo_title ?? "");
  const [seoDescription, setSeoDescription] = useState(post?.seo_description ?? "");
  const [tags, setTags] = useState(post?.tags ?? "");

  // A new post tracks the title until the author edits the slug themselves, at
  // which point their input wins for good. An existing post is never auto-
  // rewritten: its slug is a live URL.
  const [slugTouched, setSlugTouched] = useState(Boolean(post?.slug));

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

  // What the write layer will actually store, shown live in the preview.
  const derivedSlug = slugifyPreview(slug || title) || "untitled";
  const summary = plainSummary(bodyHtml);
  const previewTitle = seoTitle.trim() || title.trim() || "Post title";
  const previewDescription = seoDescription.trim() || summary || "The opening of the article is used here when the meta description is left blank.";

  const titleOver = seoTitle.trim().length > TITLE_LIMIT;
  const descOver = seoDescription.trim().length > DESC_LIMIT;

  const host = canonicalBase.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <form className="admin-column" action={formAction}>
      {post?.id && <input type="hidden" name="id" value={post.id} />}
      {/* An existing post keeps its publish date; it is decided once, at
          creation. Re-sending it stops updatePost() re-dating the article. */}
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
            onChange={(e) => {
              const next = e.target.value;
              setTitle(next);
              // Only a brand-new post auto-fills its slug, and only until the
              // author types in the slug box themselves.
              if (!slugTouched) setSlug(slugifyPreview(next));
            }}
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
          {/* Worth stating plainly: this is the image search engines and social
              cards show, because the panel has no separate OG upload. */}
          <p className="admin-field-hint">
            Also used as the social share image (Open Graph / Twitter) and in
            Google&rsquo;s article rich results. A wide 16:10 crop works best.
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

      {/* ------------------------------------------------------------------
          SEO
          ------------------------------------------------------------------ */}
      <div className="admin-panel">
        <h3>SEO &amp; search</h3>

        <div className="admin-field">
          <label htmlFor="slug">URL slug</label>
          <input
            id="slug"
            name="slug"
            value={slug}
            onChange={(e) => {
              setSlugTouched(true);
              setSlug(e.target.value);
            }}
            placeholder="auto-generated-from-the-title"
            spellCheck={false}
          />
          <p className="admin-field-hint">
            The article lives at{" "}
            <strong>
              {host}/blog/{derivedSlug}
            </strong>
            . Leave blank to generate it from the title.
            {post?.slug
              ? " Changing this changes the live URL — existing links to the old address will stop working."
              : ""}
          </p>
        </div>

        <div className="admin-field">
          <label htmlFor="seoTitle">Meta title</label>
          <input
            id="seoTitle"
            name="seoTitle"
            value={seoTitle}
            onChange={(e) => setSeoTitle(e.target.value)}
            placeholder={title || "Defaults to the post title"}
            maxLength={120}
          />
          <span className={`admin-counter${titleOver ? " is-over" : seoTitle.trim().length >= 20 ? " is-good" : ""}`}>
            {seoTitle.trim().length} / {TITLE_LIMIT} characters
            {titleOver ? " — Google will cut this off" : ""}
          </span>
          <p className="admin-field-hint">
            The full title tag shown in search results. This is used verbatim, so
            add the brand yourself if you want it — for example
            &ldquo;How AI Agents Cut Support Costs | AiLogiQs&rdquo;. Leave blank
            to use the post title with the site name appended.
          </p>
        </div>

        <div className="admin-field">
          <label htmlFor="seoDescription">Meta description</label>
          <textarea
            id="seoDescription"
            name="seoDescription"
            value={seoDescription}
            onChange={(e) => setSeoDescription(e.target.value)}
            placeholder={summary || "Defaults to the opening of the article"}
            rows={3}
            maxLength={320}
          />
          <span className={`admin-counter${descOver ? " is-over" : seoDescription.trim().length >= 110 ? " is-good" : ""}`}>
            {seoDescription.trim().length} / {DESC_LIMIT} characters
            {descOver ? " — Google will cut this off" : ""}
          </span>
          <p className="admin-field-hint">
            The snippet shown under the title in search results. It is also used
            as the summary on the blog listing card.
          </p>
        </div>

        <div className="admin-field">
          <label htmlFor="tags">Tags</label>
          <input
            id="tags"
            name="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="agents, llm, automation"
            spellCheck={false}
          />
          <p className="admin-field-hint">
            Comma-separated. These feed the tag cloud in the blog sidebar, the
            article&rsquo;s hashtag row and its structured data. Leave blank to
            use the derived list.
          </p>
        </div>

        {/* A Google-shaped preview. The whole point of the meta fields is what
            the result looks like, and the truncation rules are invisible
            otherwise. */}
        <div className="admin-serp">
          <p className="admin-serp-label">Search result preview</p>
          <p className="admin-serp-url">
            {host} › blog › {derivedSlug}
          </p>
          <p className="admin-serp-title">{previewTitle.slice(0, 70)}</p>
          <p className="admin-serp-desc">{previewDescription.slice(0, 180)}</p>
        </div>
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
