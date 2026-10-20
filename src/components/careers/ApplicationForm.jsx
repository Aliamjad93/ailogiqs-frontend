"use client";

import { useState, useTransition } from "react";
import { submitApplication } from "@/app/(site)/(main)/careers/actions";

/**
 * Application form for one open role.
 *
 * The job slug travels in a hidden field, but the server does not trust it: the
 * action re-reads the role and refuses an application to anything not currently
 * open. Fields are controlled and the action is invoked directly on submit,
 * rather than through <form action>, so a validation response keeps the cover
 * letter, file selection and consent intact for a correction.
 *
 * Resume files are capped on the server (3 MB) as well as hinted here. The
 * browser-side `accept` list is a convenience, not a security control.
 */

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  location: "",
  experience: "",
  linkedinUrl: "",
  portfolioUrl: "",
  coverLetter: "",
  consent: false,
};

export default function ApplicationForm({ job }) {
  const [state, setState] = useState({});
  const [values, setValues] = useState(EMPTY);
  const [resumeName, setResumeName] = useState("");
  const [pending, startTransition] = useTransition();

  function update(field) {
    return (event) => {
      const { type, value, checked } = event.target;
      setValues((current) => ({
        ...current,
        [field]: type === "checkbox" ? checked : value,
      }));
    };
  }

  // Call the action ourselves instead of assigning it to <form action>. React
  // resets a form after a form action, which would erase the cover letter and
  // file selection on a validation error. This path keeps every field intact.
  function handleSubmit(event) {
    event.preventDefault();
    if (pending) return;

    const formData = new FormData(event.currentTarget);
    startTransition(async () => {
      const result = await submitApplication({}, formData);
      setState(result);
    });
  }

  if (state?.ok) {
    return (
      <div className="careers-form-success" role="status">
        <span className="careers-form-success-icon">
          <i className="fas fa-check" aria-hidden="true" />
        </span>
        <div>
          <h3>Application received</h3>
          <p>
            {state.message} We have your details for <strong>{job.title}</strong>.
          </p>
          <p className="careers-form-success-note">
            If your experience matches what the team needs, we will contact you
            using the email or phone number you supplied.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="careers-apply-form" onSubmit={handleSubmit}>
      <input type="hidden" name="jobSlug" value={job.slug} />

      {/* Bots fill every field they find. People never see this one. */}
      <div className="careers-honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {state?.error && (
        <div className="careers-form-error" role="alert">
          <i className="fas fa-circle-exclamation" aria-hidden="true" />
          <span>{state.error}</span>
        </div>
      )}

      <div className="careers-form-grid">
        <div className="careers-field">
          <label htmlFor="applicant-name">Full name</label>
          <input
            id="applicant-name"
            name="name"
            value={values.name}
            onChange={update("name")}
            autoComplete="name"
            placeholder="Your full name"
            maxLength={120}
            required
          />
        </div>

        <div className="careers-field">
          <label htmlFor="applicant-email">Email</label>
          <input
            id="applicant-email"
            name="email"
            type="email"
            value={values.email}
            onChange={update("email")}
            autoComplete="email"
            placeholder="you@example.com"
            maxLength={200}
            required
          />
        </div>

        <div className="careers-field">
          <label htmlFor="applicant-phone">Phone</label>
          <input
            id="applicant-phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={update("phone")}
            autoComplete="tel"
            placeholder="+92 300 0000000"
            maxLength={60}
            required
          />
        </div>

        <div className="careers-field">
          <label htmlFor="applicant-location">Current location</label>
          <input
            id="applicant-location"
            name="location"
            value={values.location}
            onChange={update("location")}
            autoComplete="address-level2"
            placeholder="City, country"
            maxLength={120}
            required
          />
        </div>

        <div className="careers-field">
          <label htmlFor="applicant-experience">Relevant experience</label>
          <input
            id="applicant-experience"
            name="experience"
            value={values.experience}
            onChange={update("experience")}
            placeholder="e.g. 3 years"
            maxLength={80}
          />
        </div>

        <div className="careers-field">
          <label htmlFor="applicant-linkedin">LinkedIn</label>
          <input
            id="applicant-linkedin"
            name="linkedinUrl"
            type="url"
            value={values.linkedinUrl}
            onChange={update("linkedinUrl")}
            placeholder="https://linkedin.com/in/you"
            maxLength={300}
          />
        </div>

        <div className="careers-field careers-field-wide">
          <label htmlFor="applicant-portfolio">Portfolio or GitHub</label>
          <input
            id="applicant-portfolio"
            name="portfolioUrl"
            type="url"
            value={values.portfolioUrl}
            onChange={update("portfolioUrl")}
            placeholder="https://github.com/you or your portfolio"
            maxLength={300}
          />
        </div>

        <div className="careers-field careers-field-wide">
          <label htmlFor="applicant-resume">Resume</label>
          <label className="careers-file" htmlFor="applicant-resume">
            <i className="fas fa-paperclip" aria-hidden="true" />
            <span>{resumeName || "Attach a PDF, DOC or DOCX (max 3 MB)"}</span>
            <input
              id="applicant-resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={(event) =>
                setResumeName(event.target.files?.[0]?.name ?? "")
              }
              required
            />
          </label>
        </div>

        <div className="careers-field careers-field-wide">
          <label htmlFor="applicant-cover">Why this role?</label>
          <textarea
            id="applicant-cover"
            name="coverLetter"
            value={values.coverLetter}
            onChange={update("coverLetter")}
            placeholder="Tell us what you have built, what you want to work on, and why this role at AiLogiQs is the right next step."
            maxLength={5000}
            rows={7}
            required
          />
          <span className="careers-field-hint">
            A short, specific note is more useful than a generic template.
          </span>
        </div>
      </div>

      <label className="careers-consent">
        <input
          type="checkbox"
          name="consent"
          checked={values.consent}
          onChange={update("consent")}
          required
        />
        <span>
          I agree that AiLogiQs may store my application and resume for this
          recruitment process.
        </span>
      </label>

      <div className="careers-form-submit">
        <button className="theme-btn" type="submit" disabled={pending}>
          {pending ? "Submitting…" : "Submit application"}{" "}
          <i className="fas fa-arrow-right" aria-hidden="true" />
        </button>
        <p>
          We review every application. If there is a fit, we usually reply within
          10 working days.
        </p>
      </div>
    </form>
  );
}
