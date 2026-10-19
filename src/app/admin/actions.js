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
import { createPost, updatePost, setPostStatus, deletePost, restorePost as restorePostData, setCacheInvalidator, readUploadedImage } from "@/lib/admin-posts";
import { setLeadStatus, deleteLead as deleteLeadData } from "@/lib/admin-leads";

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

/**
 * Where a row-level action should return to.
 *
 * The same Publish / Unpublish / Delete buttons render in the posts table and on
 * the edit screen, and the two want to stay put. A `redirectTo` field lets the
 * form say which. It is validated against a fixed prefix rather than followed
 * blindly: a hidden input is attacker-controlled, and an unchecked redirect
 * target turns these actions into an open redirect.
 */
function backTo(formData, fallback) {
  const target = String(formData.get("redirectTo") ?? "");
  return target.startsWith("/admin/") && !target.startsWith("//") ? target : fallback;
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
    // SEO hints. All three are optional: the write layer substitutes a derived
    // value for anything left blank, so an author who ignores the SEO panel
    // still gets correct metadata. These are the ONLY free-text fields the panel
    // accepts, and each is length-capped in the write layer before it is stored.
    seoTitle: formData.get("seoTitle") ?? "",
    seoDescription: formData.get("seoDescription") ?? "",
    tags: formData.get("tags") ?? "",
    // Still not read from the form, because the panel exposes no control for
    // them: `image` (always an upload), `author` (fixed at AiLogiQs), `excerpt`
    // and `reading_minutes` are derived by the write layer. A forged field
    // therefore cannot override any of them.
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
  redirect(backTo(formData, `/admin/posts/${id}?saved=1`));
}

/**
 * Soft-delete a post.
 *
 * Returns to the list either way: from the edit screen the post it was showing
 * is gone, so staying there would render a stale form.
 */
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

/**
 * Undo a soft delete.
 *
 * Restores as a draft -- see the note on restorePost() in the data layer.
 */
export async function restorePost(formData) {
  await requireAuth();
  const id = Number(formData.get("id"));
  await restorePostData(id);
  nextCache.revalidatePath("/blog");
  nextCache.revalidatePath("/sitemap.xml");
  nextCache.revalidatePath("/admin");
  nextCache.revalidatePath("/admin/posts");
  nextCache.revalidatePath(`/admin/posts/${id}`);
  redirect("/admin/posts?restored=1");
}

// --- leads ------------------------------------------------------------------

/**
 * Moves a lead between triage buckets (new -> contacted -> archived).
 *
 * `redirectTo` keeps the operator on the tab they were working rather than
 * bouncing them to the default New view after every action, which would make
 * triaging a batch of enquiries tedious.
 */
export async function updateLeadStatus(formData) {
  await requireAuth();
  const id = Number(formData.get("id"));
  const status = String(formData.get("status"));
  await setLeadStatus(id, status);
  nextCache.revalidatePath("/admin");
  nextCache.revalidatePath("/admin/leads");
  redirect(backTo(formData, "/admin/leads"));
}

/**
 * Removes a lead permanently.
 *
 * Hard delete, unlike posts: leads are personal data, so there is deliberately
 * no deleted-leads shelf to leave them sitting on. The confirm prompt in the
 * table spells out that it cannot be undone.
 */
export async function deleteLead(formData) {
  await requireAuth();
  const id = Number(formData.get("id"));
  await deleteLeadData(id);
  nextCache.revalidatePath("/admin");
  nextCache.revalidatePath("/admin/leads");
  redirect(backTo(formData, "/admin/leads"));
}