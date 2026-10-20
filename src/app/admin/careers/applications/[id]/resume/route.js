import { cookies } from "next/headers";
import { isAuthenticated } from "@/lib/admin-auth";
import { getApplicationResume } from "@/lib/admin-careers";

/**
 * Protected resume download.
 *
 * The file lives in the database and is personal data, so it is never served
 * from /public. Route handlers do not inherit the admin layout's auth check, so
 * the session is verified here explicitly. A missing row and a signed-out
 * request both return 404: an anonymous caller learns nothing about whether an
 * application exists.
 */
export const dynamic = "force-dynamic";

const MIME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export async function GET(_request, { params }) {
  if (!isAuthenticated(await cookies())) {
    return new Response("Not found", { status: 404 });
  }

  const { id } = await params;
  const row = await getApplicationResume(Number(id));

  if (!row?.resume_blob) {
    return new Response("Not found", { status: 404 });
  }

  const fallback = `resume-${id}.pdf`;
  const filename =
    String(row.resume_filename || fallback)
      .replace(/[\\/:*?"<>|\r\n]/g, "_")
      .slice(0, 160) || fallback;

  const mime = MIME_TYPES.has(row.resume_mime)
    ? row.resume_mime
    : "application/octet-stream";

  const body =
    row.resume_blob instanceof Uint8Array
      ? row.resume_blob
      : new Uint8Array(row.resume_blob);

  return new Response(body, {
    headers: {
      "Content-Type": mime,
      "Content-Length": String(body.byteLength),
      "Content-Disposition": `attachment; filename="${filename}"; filename*=UTF-8''${encodeURIComponent(
        filename
      )}`,
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
