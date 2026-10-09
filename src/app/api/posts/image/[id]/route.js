import { isDatabaseConfigured, queryOne } from "@/lib/db";

/**
 * Serves cover images stored in the database.
 *
 * Uploaded covers are BLOBs in the `posts` table rather than files in /public,
 * so the admin panel needs no writable disk, no object store, and no deploy
 * step to publish an image. This route is the only place the bytes leave the
 * database; src/lib/posts.js points `post.image` here for any post that has one.
 *
 * Only the bytes and the mime type are selected. Fetching a row's columns
 * without listing image_blob keeps this safe to run even if a future post
 * carries a multi-megabyte upload.
 */

export const dynamic = "force-dynamic";

/**
 * Trusting the browser-supplied type on an upload is how a stored-XSS hole gets
 * in, so only image types we actually render are accepted, and only formats that
 * cannot carry script. Anything else falls back to octet-stream, which browsers
 * will download rather than execute.
 */
const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"]);

export async function GET(_request, { params }) {
  const { id } = await params;
  const numericId = Number(id);

  if (!Number.isInteger(numericId) || numericId < 1 || !isDatabaseConfigured()) {
    return new Response("Not found", { status: 404 });
  }

  let row;
  try {
    row = await queryOne(
      "SELECT image_blob, image_mime FROM posts WHERE id = ? AND image_blob IS NOT NULL",
      [numericId]
    );
  } catch {
    return new Response("Not found", { status: 404 });
  }

  if (!row?.image_blob) {
    return new Response("Not found", { status: 404 });
  }

  // libSQL hands BLOBs back as Uint8Array.
  const bytes = row.image_blob instanceof Uint8Array ? row.image_blob : new Uint8Array(row.image_blob);
  const mime = ALLOWED.has(row.image_mime) ? row.image_mime : "application/octet-stream";

  // A cover URL is immutable once written: uploading a replacement replaces the
  // bytes on the same id, so a long max-age would pin visitors to the old image.
  // A day keeps listing pages snappy without showing a stale cover for long.
  return new Response(bytes, {
    headers: {
      "Content-Type": mime,
      "Content-Length": String(bytes.byteLength),
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      "X-Content-Type-Options": "nosniff",
    },
  });
}