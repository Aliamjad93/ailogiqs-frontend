"use client";

/**
 * Contact form.
 *
 * Replaces the template's static form, which posted to a `contact.php` that
 * does not exist in this project -- so visiting /contact and pressing "Send
 * message" produced a 404 and the message was lost. The markup, classes and
 * layout are unchanged from the template; what changed is the submit path.
 *
 * The old Subject control was the theme's `nice-select` widget: a div faking a
 * dropdown with numbered dummy options ("01", "02", "03"). It is a real
 * <select> now, so the value is actually submitted, and the options name what
 * a visitor is likely to want.
 *
 * useActionState rather than a redirect: the visitor stays on the page with
 * their message intact and gets an inline answer either way.
 */
import { useActionState } from "react";
import { submitLead } from "@/app/(site)/(main)/contact/actions";

const SUBJECTS = [
  "General enquiry",
  "AI chatbot & sales agent",
  "BeeLens — bee virus detection",
  "Data analytics & BI",
  "Careers",
  "Other",
];

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitLead, {});

  // On success the form is replaced by the receipt, so an accidental second
  // submit of the same enquiry cannot happen.
  if (state.ok) {
    return (
      <div className="contact-form-success wow fadeInUp" role="status">
        <div className="icon">
          <i className="fa-sharp fa-solid fa-circle-check"></i>
        </div>
        <div className="content">
          <h3>Message received</h3>
          <p>{state.message}</p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} id="contact-form" method="POST" className="contact-form-items">
      <div className="row g-4">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
          <div className="form-clt">
            <div className="icon">
              <i className="fa-regular fa-user"></i>
            </div>
            <input type="text" name="name" id="name" placeholder="Your name" required />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
          <div className="form-clt">
            <div className="icon">
              <i className="fa-regular fa-phone"></i>
            </div>
            <input type="tel" name="phone" id="phone" placeholder="Phone" />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
          <div className="form-clt">
            <div className="icon">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <input type="email" name="email" id="email12" placeholder="Email here" required />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
          <div className="form-clt">
            <select name="subject" id="subject" defaultValue={SUBJECTS[0]}>
              {SUBJECTS.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            <div className="icon">
              <i className="fa-sharp fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
          <div className="form-clt">
            <textarea name="message" id="message" placeholder="Write your comment" required></textarea>
            <div className="icon">
              <i className="fa-regular fa-comment"></i>
            </div>
          </div>
        </div>
        {state.error && (
          <div className="col-12">
            <div className="contact-form-error" role="alert">
              <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
              {state.error}
            </div>
          </div>
        )}
        <div className="col-lg-7 wow fadeInUp" data-wow-delay=".5s">
          <button type="submit" className="theme-btn" disabled={pending}>
            {pending ? "Sending…" : "Send message"}{" "}
            <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
          </button>
        </div>
      </div>

      {/*
        Honeypot. Hidden off-screen rather than with display:none, which some
        bots recognise and skip. Hiding it from the a11y tree and the tab order
        keeps it invisible to real visitors. "website" is the classic field
        name autofill tools love to fill.
      */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="contact-form-honeypot"
      />
    </form>
  );
}
