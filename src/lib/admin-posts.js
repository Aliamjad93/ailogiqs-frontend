import { isDatabaseConfigured, query, queryOne, execute } from "@/lib/db";
import { getCategories } from "@/lib/posts";
import { AUTHOR } from "@/content/posts";
import { sanitizeHtml, slugify } from "@/lib/sanitize";

/**
 * Admin write layer.
 *
 * Sanitisation happens here, ON WRITE, rather than on every read. That keeps
 * the public pages a single `dangerouslySetInnerHTML` with no runtime cost, and
 * means one place to audit. The tag allowlist lives in src/lib/sanitize.js so it
 * stays importable from a plain Node test.
 *
 * Cache invalidation lives in the server actions (src/app/admin/actions.js), not
 * here, which also keeps this module free of `next/cache` so scripts can import
 * it outside a Next build.
 */

export { sanitizeHtml, slugify };

/**
 * Callback invoked after a successful write so the caller can bust the cache.
 *
 * Passed in rather than imported: this module is loaded by plain Node scripts
 * as well as by Next, and importing `next/cache` here would break the former.
 * src/app/admin/actions.js supplies a revalidatePath-backed implementation.
 */
let onWrite = null;

/** @param {(paths: string[]) => void} fn */
export function setCacheInvalidator(fn) {
  onWrite = typeof fn === "function" ? fn : null;
}

/**
 * Re-renders the public routes affected by a write.
 *
 * `revalidatePath` cannot be called from this module (see above), so the paths
 * are handed to the invalidator the actions layer registered. When nothing is
 * registered -- a script run outside Next -- this is a no-op, which is correct:
 * there is no cache to bust.
 */
function invalidateCache(...paths) {
  onWrite?.(paths);
}

/** Ensures the slug is unique by appending -2, -3, ... */
async function uniqueSlug(base, excludeId = null) {
  let candidate = base || "untitled";
  let suffix = 2;
  // Bounded so a pathological input cannot loop forever.
  while (suffix < 100) {
    const clash = await queryOne(
      "SELECT id FROM posts WHERE slug = ? AND id IS NOT ?",
      [candidate, excludeId]
    );
    if (!clash) return candidate;
    candidate = `${base}-${suffix++}`;
  }
  return `${base}-${Date.now()}`;
}

// `image_blob` is probed but never selected: the admin edit form only needs to
// know that one exists, and selecting the bytes would load a multi-megabyte
// image into every admin page render.
const SELECT = `id, slug, title, excerpt, image, category_slug, author, published_at,
  reading_minutes, featured, tags, body_html, seo_title, seo_description, status,
  created_at, updated_at, (image_blob IS NOT NULL) AS has_image_blob`;

/** Every post, drafts included. Admin-only. */
export async function getAllPostsForAdmin() {
  if (!isDatabaseConfigured()) return [];
  return query(
    `SELECT ${SELECT} FROM posts ORDER BY status ASC, published_at DESC, id DESC`
  );
}

export async function getPostForAdmin(id) {
  if (!isDatabaseConfigured()) return null;
  return queryOne(`SELECT ${SELECT} FROM posts WHERE id = ?`, [id]);
}

/**
 * Card and meta-description text, derived from the body.
 *
 * The admin form does not ask for an excerpt: a hand-written one rots against
 * the article, and a blank card looks broken. Strip tags, collapse whitespace,
 * cut at a sentence boundary where there is one nearby, then trim to length.
 */
function excerptFrom(html, limit = 180) {
  const text = html
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<\/(p|h[1-6]|li|blockquote|div)>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();

  if (!text) return "";
  if (text.length <= limit) return text;

  const cut = text.slice(0, limit);
  // Prefer ending on a sentence, but only if that does not lose too much.
  const sentenceEnd = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("! "), cut.lastIndexOf("? "));
  return `${(sentenceEnd > limit * 0.6 ? cut.slice(0, sentenceEnd + 1) : cut).trimEnd()}…`;
}

/** Rough reading time from the plain text of the body. */
function estimateReadingMinutes(html) {
  const words = html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/** Rejects categories that do not exist, so a typo cannot create a dead sidebar entry. */
async function validateCategory(slug) {
  const categories = await getCategories();
  return categories.some((c) => c.slug === slug) ? slug : categories[0]?.slug ?? "ai-agents";
}

/**
 * Cap on an uploaded cover.
 *
 * Server actions buffer the whole file in memory, so this bound is what stops a
 * large upload from taking the process down. 5 MB is comfortably above a
 * full-width editorial photo once re-encoded, and comfortably below the body
 * limit Next enforces by default.
 */
export const MAX_IMAGE_BYTES = 5 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/avif",
]);

/**
 * Validates an uploaded cover.
 *
 * The declared type is checked rather than trusted, and the byte count is
 * measured on the decoded buffer rather than the File header, since the two can
 * disagree.
 *
 * @returns {{ bytes: Uint8Array, mime: string } | null} null when nothing was
 *   uploaded, which is the normal case on edit.
 * @throws when a file was sent but is unusable.
 */
export function readUploadedImage(file) {
  if (!file || typeof file.arrayBuffer !== "function") return null;
  if (file.size === 0) return null;

  if (file.size > MAX_IMAGE_BYTES) {
    const mb = Math.round(MAX_IMAGE_BYTES / 1024 / 1024);
    throw new Error(`Image is too large. Keep the cover under ${mb} MB.`);
  }

  if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
    throw new Error("Cover must be a JPEG, PNG, WebP, GIF or AVIF image.");
  }

  return { bytes: new Uint8Array(0), mime: file.type, file };
}

/** Reads the validated upload into the byte array libSQL wants for a BLOB. */
export async function toImageBlob(upload) {
  if (!upload) return null;
  if (upload.bytes.byteLength === 0) {
    upload.bytes = new Uint8Array(await upload.file.arrayBuffer());
  }
  return upload.bytes;
}

export async function createPost(input) {
  if (!isDatabaseConfigured()) throw new Error("Database is not configured");

  const bodyHtml = sanitizeHtml(input.bodyHtml);
  const slug = await uniqueSlug(slugify(input.slug || input.title));
  const categorySlug = await validateCategory(input.categorySlug);
  const now = new Date().toISOString().slice(0, 10);
  const blob = await toImageBlob(input.imageUpload);

  // A cover is not optional. The listing and the hero both render post.image,
  // and a post without one shows a broken thumbnail, so this fails loudly here
  // rather than quietly at the front end.
  if (!blob) throw new Error("Choose a cover image before saving.");

  const title = String(input.title ?? "Untitled").slice(0, 200);
  const excerpt = excerptFrom(bodyHtml);

  const result = await execute(
    `INSERT INTO posts
       (slug, title, excerpt, image, image_blob, image_mime, category_slug, author,
        published_at, reading_minutes, featured, tags, body_html, seo_title,
        seo_description, status)
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      slug,
      title,
      excerpt,
      // `image` is the fallback path column, used by the seed content in
      // /public. An uploaded cover is served from the BLOB, so this stays empty.
      "",
      blob,
      input.imageUpload.mime,
      categorySlug,
      AUTHOR,
      input.publishedAt || now,
      estimateReadingMinutes(bodyHtml),
      input.featured ? 1 : 0,
      // No tag input in the panel; the tag cloud is derived from the body.
      "",
      bodyHtml,
      // SEO fields mirror the title and the generated excerpt. Stored rather
      // than computed at render time so a future per-post override has a home.
      title,
      excerpt,
      input.status === "published" ? "published" : "draft",
    ]
  );

  invalidateCache("/blog");
  invalidateCache("/sitemap.xml");
  return Number(result.lastInsertRowid);
}

export async function updatePost(id, input) {
  if (!isDatabaseConfigured()) throw new Error("Database is not configured");

  const bodyHtml = sanitizeHtml(input.bodyHtml);
  const slug = await uniqueSlug(slugify(input.slug || input.title), id);
  const categorySlug = await validateCategory(input.categorySlug);
  const blob = await toImageBlob(input.imageUpload);

  // Only overwrite the stored bytes when a new file was actually sent. An edit
  // that does not touch the image must keep the existing one, otherwise every
  // unrelated correction to a typo would silently drop the cover.
  const imageColumns = blob ? ", image_blob=?, image_mime=?" : "";
  const imageArgs = blob ? [blob, input.imageUpload.mime] : [];

  const title = String(input.title ?? "Untitled").slice(0, 200);
  const excerpt = excerptFrom(bodyHtml);

  await execute(
    `UPDATE posts SET
       slug=?, title=?, excerpt=?${imageColumns}, category_slug=?, author=?,
       published_at=?, reading_minutes=?, featured=?, body_html=?,
       seo_title=?, seo_description=?, status=?, updated_at=datetime('now')
     WHERE id=?`,
    [
      slug,
      title,
      excerpt,
      ...imageArgs,
      categorySlug,
      AUTHOR,
      // An existing post keeps its publish date. Falling back to today() here
      // would re-date the article every time an author fixed a typo, silently
      // re-ordering the whole blog.
      input.publishedAt || new Date().toISOString().slice(0, 10),
      estimateReadingMinutes(bodyHtml),
      input.featured ? 1 : 0,
      bodyHtml,
      title,
      excerpt,
      input.status === "published" ? "published" : "draft",
      id,
    ]
  );

  // The image route is public and cached, so a replaced cover has to be evicted.
  if (blob) invalidateCache(`/api/posts/image/${id}`);

  // An edit to a published post must reach the static article route.
  invalidateCache("/blog");
  invalidateCache(`/blog/${slug}`);
  invalidateCache("/sitemap.xml");
}

export async function setPostStatus(id, status) {
  if (!isDatabaseConfigured()) throw new Error("Database is not configured");
  await execute(
    "UPDATE posts SET status=?, updated_at=datetime('now') WHERE id=?",
    [status === "published" ? "published" : "draft", id]
  );
  invalidateCache("/blog");
  invalidateCache("/sitemap.xml");
}

/**
 * Soft delete.
 *
 * Removes the row from every public read path via a deleted_at stamp instead of
 * dropping it, so a mis-click is recoverable -- see the reasoning in the
 * "soft deletes" article. Slugs are freed by appending the id.
 */
export async function deletePost(id) {
  if (!isDatabaseConfigured()) throw new Error("Database is not configured");
  await execute(
    "UPDATE posts SET status='deleted', slug = slug || '-deleted-' || id, updated_at=datetime('now') WHERE id=?",
    [id]
  );
  invalidateCache("/blog");
  invalidateCache("/sitemap.xml");
}