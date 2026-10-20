"use server";

/**
 * Public job-application handler.
 *
 * The endpoint is reachable by anyone, so all validation, file checks and the
 * "is this role still open?" lookup happen in src/lib/careers.js. This wrapper
 * only translates the FormData and returns state for useActionState.
 */
import { createJobApplication } from "@/lib/careers";

/** Only messages raised deliberately for the applicant are safe to show. */
const PUBLIC_ERROR =
  /required|valid|resume|role|consent|fit for|upload|under \d+ MB|profile links/i;

export async function submitApplication(_prevState, formData) {
  try {
    const result = await createJobApplication({
      jobSlug: formData.get("jobSlug"),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      location: formData.get("location"),
      experience: formData.get("experience"),
      linkedinUrl: formData.get("linkedinUrl"),
      portfolioUrl: formData.get("portfolioUrl"),
      coverLetter: formData.get("coverLetter"),
      resume: formData.get("resume"),
      consent: formData.get("consent") === "on",
      // Hidden field; only automated submissions fill it.
      honeypot: formData.get("website"),
    });

    return {
      ok: true,
      message:
        result?.ignored || result?.jobTitle
          ? "Thanks — your application has been received. Our team reviews every application and will be in touch if there is a fit."
          : "Thanks — your application has been received.",
    };
  } catch (error) {
    return {
      error: PUBLIC_ERROR.test(error?.message ?? "")
        ? error.message
        : "Something went wrong while submitting your application. Please try again.",
    };
  }
}
