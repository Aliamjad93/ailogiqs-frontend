"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { saveJob } from "@/app/admin/careers/actions";
import PostEditor from "@/components/admin/PostEditor";
import { DEPARTMENT_SUGGESTIONS } from "@/content/careers";

/**
 * Create / edit a job opening.
 *
 * The form is ordered the way a recruiter writes a role: title and public URL,
 * where the job sits, the copy people read, then visibility. The rich body uses
 * the same TipTap editor as blog posts, so the editor behaves the same and the
 * sanitiser's allowlist is already known to match what the toolbar can emit.
 *
 * No encType attribute: React supplies multipart encoding for a server action.
 */

/** Mirrors slugify() in src/lib/sanitize.js. Display-only; the server re-does it. */
function slugifyPreview(text) {
  return String(text ?? "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

const WORK_MODES = ["On-site", "Hybrid", "Remote"];
const EMPLOYMENT_TYPES = ["Full-time", "Part-time", "Contract", "Internship"];

const STATUS_OPTIONS = [
  {
    value: "draft",
    label: "Draft",
    help: "Panel only. Nothing appears on the careers page.",
  },
  {
    value: "open",
    label: "Open",
    help: "Listed on /careers and accepting applications.",
  },
  {
    value: "closed",
    label: "Closed",
    help: "Kept for reference, but removed from the site and sitemap.",
  },
];

export default function JobForm({ job }) {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(saveJob, {});

  const [title, setTitle] = useState(job?.title ?? "");
  const [slug, setSlug] = useState(job?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(Boolean(job?.slug));
  const [summary, setSummary] = useState(job?.summary ?? "");
  const [descriptionHtml, setDescriptionHtml] = useState(
    job?.description_html ?? ""
  );

  // A successful save means the row now exists; move to its edit route so a
  // refresh does not re-submit a create.
  useEffect(() => {
    if (state?.saved && state.id) {
      router.push(`/admin/careers/${state.id}?saved=1`);
    }
  }, [state, router]);

  const derivedSlug = slugifyPreview(slug || title) || "role";
  const canSave =
    title.trim().length > 0 &&
    descriptionHtml.replace(/<[^>]*>/g, "").trim().length > 0;

  return (
    <form className="admin-column" action={formAction}>
      {job?.id && <input type="hidden" name="id" value={job.id} />}

      {state?.error && (
        <div className="admin-notice admin-notice-error">{state.error}</div>
      )}

      <div className="admin-panel">
        <h3>Role basics</h3>
        <div className="admin-field">
          <label htmlFor="title">Role title</label>
          <input
            id="title"
            name="title"
            value={title}
            onChange={(event) => {
              const next = event.target.value;
              setTitle(next);
              if (!slugTouched) setSlug(slugifyPreview(next));
            }}
            placeholder="e.g. Senior AI/ML Engineer"
            maxLength={160}
            required
          />
        </div>

        <div className="admin-field">
          <label htmlFor="slug">Public URL</label>
          <input
            id="slug"
            name="slug"
            value={slug}
            onChange={(event) => {
              setSlug(event.target.value);
              setSlugTouched(true);
            }}
            placeholder={slugifyPreview(title) || "senior-ai-ml-engineer"}
            maxLength={80}
          />
          <p className="admin-field-hint">
            /careers/<strong>{derivedSlug}</strong>
            {job?.slug
              ? ". Changing this changes the live URL and breaks existing links to the old address."
              : ". Leave blank to generate it from the title."}
          </p>
        </div>
      </div>

      <div className="admin-panel">
        <h3>Placement</h3>

        <div className="admin-grid-2">
          <div className="admin-field">
            <label htmlFor="department">Department</label>
            <input
              id="department"
              name="department"
              list="department-options"
              defaultValue={job?.department ?? ""}
              placeholder="Engineering"
              maxLength={120}
            />
            <datalist id="department-options">
              {DEPARTMENT_SUGGESTIONS.map((department) => (
                <option key={department} value={department} />
              ))}
            </datalist>
          </div>

          <div className="admin-field">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              name="location"
              defaultValue={job?.location ?? "Lahore, Pakistan"}
              placeholder="Lahore, Pakistan"
              maxLength={160}
            />
          </div>

          <div className="admin-field">
            <label htmlFor="workMode">Work mode</label>
            <select
              id="workMode"
              name="workMode"
              defaultValue={job?.work_mode ?? "On-site"}
            >
              {WORK_MODES.map((mode) => (
                <option key={mode} value={mode}>
                  {mode}
                </option>
              ))}
            </select>
          </div>

          <div className="admin-field">
            <label htmlFor="employmentType">Employment type</label>
            <select
              id="employmentType"
              name="employmentType"
              defaultValue={job?.employment_type ?? "Full-time"}
            >
              {EMPLOYMENT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="admin-field">
            <label htmlFor="experienceLevel">Experience</label>
            <input
              id="experienceLevel"
              name="experienceLevel"
              defaultValue={job?.experience_level ?? ""}
              placeholder="e.g. 3+ years"
              maxLength={120}
            />
          </div>

          <div className="admin-field">
            <label htmlFor="salaryRange">Compensation</label>
            <input
              id="salaryRange"
              name="salaryRange"
              defaultValue={job?.salary_range ?? ""}
              placeholder="Optional — e.g. Competitive, or a range"
              maxLength={160}
            />
          </div>
        </div>
      </div>

      <div className="admin-panel">
        <h3>Description</h3>

        <div className="admin-field">
          <label htmlFor="summary">Short summary</label>
          <textarea
            id="summary"
            name="summary"
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
            placeholder="One or two lines shown on the careers listing card."
            maxLength={320}
            rows={3}
          />
          <span className="admin-counter">
            {summary.trim().length} / 320 characters
          </span>
          <p className="admin-field-hint">
            Leave blank to generate a summary from the first part of the description.
          </p>
        </div>

        <div className="admin-field">
          <label>Job description</label>
          <PostEditor
            value={descriptionHtml}
            onChange={setDescriptionHtml}
            placeholder="Describe the role, what the person will own, and what you are looking for. Use H2 headings for sections and lists for responsibilities."
            ariaLabel="Job description"
          />
          <input
            type="hidden"
            name="descriptionHtml"
            value={descriptionHtml}
          />
          <p className="admin-field-hint">
            The body is sanitised with the same allowlist as blog articles before
            it is stored.
          </p>
        </div>
      </div>

      <div className="admin-panel">
        <h3>Visibility</h3>
        <div className="admin-status-options">
          {STATUS_OPTIONS.map((option) => (
            <label key={option.value} className="admin-status-option">
              <input
                type="radio"
                name="status"
                value={option.value}
                defaultChecked={(job?.status ?? "draft") === option.value}
              />
              <span>
                <strong>{option.label}</strong>
                <small>{option.help}</small>
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="admin-actions">
        <button
          className="admin-btn admin-btn-primary"
          type="submit"
          disabled={pending || !canSave}
        >
          {pending ? "Saving…" : job?.id ? "Save changes" : "Create opening"}
        </button>
        <a className="admin-btn" href="/admin/careers">
          Cancel
        </a>
      </div>
    </form>
  );
}
