"use server";

/**
 * Public contact-form handler.
 *
 * No auth here, unlike the admin actions: this endpoint is reached by any
 * visitor on /contact, and the write layer (src/lib/admin-leads.js) is the
 * boundary that clamps and validates the payload.
 *
 * It returns state instead of redirecting, because the form is a client
 * component using useActionState -- a redirect() from here would surface as a
 * swallowed error rather than a navigation, which is the same trap the post
 * editor documents.
 */
import { createLead } from "@/lib/admin-leads";

export async function submitLead(_prevState, formData) {
  try {
    const result = await createLead({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      // Lets a future form on another page distinguish its own submissions.
      source: formData.get("source") ?? "/contact",
      // Hidden field; only an automated submission fills it.
      honeypot: formData.get("website"),
    });

    // The write layer answers ok:true for a swallowed honeypot hit. Reporting
    // it as a success is deliberate: a bot learns nothing from the difference,
    // and a real visitor is never in this branch.
    return {
      ok: true,
      message: result?.ignored
        ? "Thanks — your message has been received."
        : "Thanks — your message has been received. Our team replies within one business day.",
    };
  } catch (error) {
    // The message is written for a human ("Name, email and message are
    // required."), so it is safe to show verbatim. Anything unexpected still
    // needs an answer, so the fallback covers the rest.
    return {
      error: error.message || "Something went wrong. Please try again.",
    };
  }
}
