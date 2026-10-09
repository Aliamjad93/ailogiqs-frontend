"use server";

/**
 * Server actions for the admin panel.
 *
 * Every action re-checks the session cookie rather than trusting the page that
 * rendered the form. Page-level checks are a UI convenience; these are the
 * actual boundary, because a server action is a public HTTP endpoint that
 * anything can POST to.
 *
 * `revalidatePath` lives here rather than in src/lib/admin-posts.js so the data
 * layer stays free of Next-specific imports.
 *
 * NOTE: "use server" must be the FIRST statement in the file. Everything in the
 * module is treated as a server action, and any value that appears above the
 * directive is silently stripped from the compiled module -- which is how
 * `revalidatePath` ended up undefined at runtime despite being imported.
 */
// Namespace import, not a named one. Inside a "use server" module Turbopack
// rewrites the module for the action proxy, and a named binding from next/cache
// can end up undefined at runtime ("revalidatePath is not defined") even though
// the import is present and the build succeeds. Going through the namespace
// object keeps the lookup on the imported module itself.
import * as nextCache from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  checkPassword,
  sessionCookie,
  isAuthenticated,
  isAdminConfigured,
  sessionToken,
} from "@/lib/admin-auth";
import { createPost, updatePost, setPostStatus, deletePost, setCacheInvalidator, readUploadedImage } from "@/lib/admin-posts";

/**
 * Cache invalidation is wired in from here, once, rather than imported into
 * src/lib/admin-posts.js.
 *
 * Two reasons. `revalidatePath` referenced from inside the data layer resolved
 * to undefined at runtime, because that module is also loaded by plain Node
 * scripts which have no Next runtime. And keeping next/cache out of the data
 * layer is what lets scripts/test-sanitiser.mjs import the sanitiser from a
 * bare `node` process.
 *
 * Registered at module scope; the actions below run only inside a request, by
 * which point this has already executed.
 */
setCacheInvalidator((paths) => {
  for (const path of paths) nextCache.revalidatePath(path);
});

/** Throw unless the caller is signed in. */
async function requireAuth() {
  const jar = await cookies();
  if (!isAuthenticated(jar)) {
    throw new Error("Not authorised");
  }
}

export async function signIn(_prevState, formData) {
  if (!isAdminConfigured()) {
    return { error: "Admin panel is not configured. Set ADMIN_PASSWORD in .env.local." };
  }

  const jar = await cookies();
  const password = formData.get("password");
  if (!checkPassword(jar, password)) {
    // Deliberately vague: do not reveal whether the password was close.
    return { error: "Incorrect password." };
  }

  const jarOut = await cookies();
  jarOut.set(sessionCookie.name, sessionToken(process.env.ADMIN_PASSWORD), {
    httpOnly: sessionCookie.httpOnly,
    sameSite: sessionCookie.sameSite,
    path: sessionCookie.path,
    secure: sessionCookie.secure,
    maxAge: sessionCookie.maxAge,
  });

  redirect("/admin");
}

export async function signOut() {
  const jar = await cookies();
  jar.delete(sessionCookie.name);
  redirect("/admin/login");
}

/** Reads a form into the shape the write layer expects. */
function postFromForm(formData) {
  return {
    // The cover is uploaded as a file and stored as a BLOB. There is no URL field,
    // so `image` is never read from the form: on create it stays empty and
    // src/lib/posts.js serves /api/posts/image/<id> because the BLOB exists.
    imageUpload: readUploadedImage(formData.get("coverImage")),
    title: formData.get("title") ?? "",
    slug: formData.get("slug") ?? "",
    categorySlug: formData.get("categorySlug") ?? "",
    bodyHtml: formData.get("bodyHtml") ?? "",
    featured: formData.get("featured") === "on",
    // Absent on a new post; updatePost() reuses the stored date so editing an
    // article cannot silently re-order the listing.
    publishedAt: formData.get("publishedAt") ?? "",
    status: formData.get("status") ?? "draft",
    // Not read from the form at all, because the panel exposes no control for
    // them: `image` (always an upload), `author` (fixed at AiLogiQs), `tags`,
    // `excerpt`, `reading_minutes`, `seo_title` and `seo_description` are all
    // derived by the write layer. A forged field therefore cannot override any
    // of them.
  };
}

/**
 * Create or update a post.
 *
 * Does NOT redirect on success. It returns the id so the client can navigate.
 * redirect() inside a server action is fine for a plain form post, but it
 * surfaces to useActionState as a swallowed error rather than a navigation,
 * which made saving appear to do nothing. Returning a value keeps the
 * round-trip explicit and lets the form show real failure messages.
 */
export async function savePost(_prevState, formData) {
  await requireAuth();

  const existingId = formData.get("id");
  const payload = postFromForm(formData);

  let id;
  try {
    if (existingId) {
      await updatePost(Number(existingId), payload);
      id = Number(existingId);
    } else {
      id = await createPost(payload);
    }
  } catch (error) {
    return { error: error.message || "Could not save the post." };
  }

  // The public listing and every article route are prerendered at build time,
  // so a publish has to invalidate them or the change stays invisible until the
  // next deploy. /admin and /admin/posts are dynamic but revalidated too so a
  // second browser tab sees the change.
  nextCache.revalidatePath("/blog");
  nextCache.revalidatePath("/sitemap.xml");
  nextCache.revalidatePath("/admin");
  nextCache.revalidatePath("/admin/posts");

  return { id, saved: true };
}

export async function changeStatus(formData) {
  await requireAuth();
  const id = Number(formData.get("id"));
  const status = String(formData.get("status"));
  await setPostStatus(id, status);
  nextCache.revalidatePath("/blog");
  nextCache.revalidatePath("/sitemap.xml");
  nextCache.revalidatePath("/admin");
  nextCache.revalidatePath("/admin/posts");
  nextCache.revalidatePath(`/admin/posts/${id}`);
  redirect(`/admin/posts/${id}?saved=1`);
}

export async function removePost(formData) {
  await requireAuth();
  const id = Number(formData.get("id"));
  await deletePost(id);
  nextCache.revalidatePath("/blog");
  nextCache.revalidatePath("/sitemap.xml");
  nextCache.revalidatePath("/admin");
  nextCache.revalidatePath("/admin/posts");
  redirect("/admin/posts?deleted=1");
}