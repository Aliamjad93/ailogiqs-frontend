"use server";

/**
 * Admin server actions for the careers section.
 *
 * Every action re-checks the session cookie: a server action is a public POST
 * endpoint, and the fact that a form was rendered on an authenticated page is
 * not a security boundary.
 *
 * `revalidatePath` is imported as a namespace for the reason documented in
 * src/app/admin/actions.js: inside a "use server" module Turbopack's action
 * proxy can leave named next/cache bindings undefined at runtime.
 */
import * as nextCache from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/admin-auth";
import {
  createJob,
  updateJob,
  setJobStatus,
  deleteJob as deleteJobData,
  setApplicationStatus,
  deleteApplication as deleteApplicationData,
} from "@/lib/admin-careers";

async function requireAuth() {
  const jar = await cookies();
  if (!isAuthenticated(jar)) throw new Error("Not authorised");
}

/** Only admin URLs can be supplied as a return target. */
function backTo(formData, fallback) {
  const target = String(formData.get("redirectTo") ?? "");
  return target.startsWith("/admin/") && !target.startsWith("//")
    ? target
    : fallback;
}

/** The public routes affected by any job write. */
function revalidateCareers(slug) {
  nextCache.revalidatePath("/careers");
  nextCache.revalidatePath("/sitemap.xml");
  // Invalidates every rendered /careers/<slug> page, including a slug that was
  // just changed and therefore no longer matches the new value.
  nextCache.revalidatePath("/careers/[slug]", "page");
  if (slug) nextCache.revalidatePath(`/careers/${slug}`);
  nextCache.revalidatePath("/admin/careers");
}

function revalidateApplications() {
  nextCache.revalidatePath("/admin");
  nextCache.revalidatePath("/admin/careers");
  nextCache.revalidatePath("/admin/careers/applications");
}

function jobFromForm(formData) {
  return {
    title: formData.get("title") ?? "",
    slug: formData.get("slug") ?? "",
    department: formData.get("department") ?? "",
    location: formData.get("location") ?? "",
    workMode: formData.get("workMode") ?? "",
    employmentType: formData.get("employmentType") ?? "",
    experienceLevel: formData.get("experienceLevel") ?? "",
    salaryRange: formData.get("salaryRange") ?? "",
    summary: formData.get("summary") ?? "",
    descriptionHtml: formData.get("descriptionHtml") ?? "",
    status: formData.get("status") ?? "draft",
  };
}

/**
 * Create or update a job.
 *
 * Returns `{ id, saved }` instead of redirecting, because the form uses
 * useActionState; redirect() from an action invoked that way surfaces as a
 * swallowed error rather than a navigation. The client navigates on success.
 */
export async function saveJob(_prevState, formData) {
  await requireAuth();

  const existingId = formData.get("id");
  const payload = jobFromForm(formData);

  try {
    let result;
    if (existingId) {
      result = await updateJob(Number(existingId), payload);
    } else {
      result = await createJob(payload);
    }

    revalidateCareers(result.slug);
    nextCache.revalidatePath(`/admin/careers/${result.id}`);
    return { id: result.id, slug: result.slug, saved: true };
  } catch (error) {
    return {
      error: error.message || "Could not save the opening.",
    };
  }
}

export async function changeJobStatus(formData) {
  await requireAuth();
  const id = Number(formData.get("id"));
  const status = String(formData.get("status"));
  await setJobStatus(id, status);
  revalidateCareers("");
  nextCache.revalidatePath(`/admin/careers/${id}`);
  redirect(backTo(formData, "/admin/careers"));
}

export async function removeJob(formData) {
  await requireAuth();
  const id = Number(formData.get("id"));
  await deleteJobData(id);
  revalidateCareers("");
  redirect("/admin/careers?deleted=1");
}

export async function updateApplicationStatus(formData) {
  await requireAuth();
  const id = Number(formData.get("id"));
  const status = String(formData.get("status"));
  await setApplicationStatus(id, status);
  revalidateApplications();
  nextCache.revalidatePath(`/admin/careers/applications/${id}`);
  redirect(backTo(formData, "/admin/careers/applications"));
}

export async function deleteApplication(formData) {
  await requireAuth();
  const id = Number(formData.get("id"));
  await deleteApplicationData(id);
  revalidateApplications();
  redirect(backTo(formData, "/admin/careers/applications"));
}
