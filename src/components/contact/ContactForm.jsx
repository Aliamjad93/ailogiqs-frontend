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

/*
  Icons here are inline SVG, not the Font Awesome classes the form used to
  carry.

  The theme loads `all.min.css` (Font Awesome Pro 6.0.0), but every file in
  public/assets/webfonts/ is a 7-9KB subset rather than the real ~400KB face, so
  most glyphs resolve to .notdef -- a tofu box. That is why
  `fa-sharp fa-solid fa-circle-check` rendered as a box with an X in it, and why
  switching the class to `fa-solid` changed nothing.

  These are Lucide's paths (ISC licence) on a 24px grid, drawn at 1em with
  `currentColor`, so the theme's existing `.icon { font-size / color }` rules
  size and colour them exactly as they did the <i>.
*/
const ICON_PATHS = {
  check: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m8.4 12.2 2.5 2.5 4.7-5.2" />
    </>
  ),
  user: (
    <>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2.6 6.4 8.3 5.9a2 2 0 0 0 2.2 0l8.3-5.9" />
    </>
  ),
  chevron: <path d="m6 9 6 6 6-6" />,
  comment: <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  alert: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 7.4v5.8" />
      <path d="M12 16.8h.01" />
    </>
  ),
  arrow: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
};

function Icon({ name, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {ICON_PATHS[name]}
    </svg>
  );
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitLead, {});

  // On success the form is replaced by the receipt, so an accidental second
  // submit of the same enquiry cannot happen.
  if (state.ok) {
    return (
      <div className="contact-form-success wow fadeInUp" role="status">
        <div className="icon">
          <Icon name="check" />
        </div>
        <div className="content">
          <h3>Message received</h3>
          <p>{state.message}</p>
        </div>
      </div>
    );
  }

  return (
    /* No `method` or `encType` here. When `action` is a function React owns
       both -- it submits the form itself and sets them on the way through -- so
       declaring `method="POST"` (which this carried over from the template's
       static form) only earns a console warning telling you it is ignored. */
    <form action={formAction} id="contact-form" className="contact-form-items">
      <div className="row g-4">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
          <div className="form-clt">
            <div className="icon">
              <Icon name="user" />
            </div>
            <input type="text" name="name" id="name" placeholder="Your name" required />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
          <div className="form-clt">
            <div className="icon">
              <Icon name="phone" />
            </div>
            <input type="tel" name="phone" id="phone" placeholder="Phone" />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
          <div className="form-clt">
            <div className="icon">
              <Icon name="mail" />
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
              <Icon name="chevron" />
            </div>
          </div>
        </div>
        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
          <div className="form-clt">
            <textarea name="message" id="message" placeholder="Write your comment" required></textarea>
            <div className="icon">
              <Icon name="comment" />
            </div>
          </div>
        </div>
        {state.error && (
          <div className="col-12">
            <div className="contact-form-error" role="alert">
              <Icon name="alert" />
              {state.error}
            </div>
          </div>
        )}
        <div className="col-lg-7 wow fadeInUp" data-wow-delay=".5s">
          <button type="submit" className="theme-btn" disabled={pending}>
            {pending ? "Sending…" : "Send message"}{" "}
            <Icon name="arrow" />
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
