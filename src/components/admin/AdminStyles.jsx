/**
 * Admin shell styles.
 *
 * Injected once from the admin layout rather than imported globally, so none of
 * it can reach the public site.
 *
 * LIGHT THEME
 * The panel used to be a dark surface with the template's yellow accent, which
 * made it read as a different product from the site it edits. It now uses the
 * same palette as the public pages -- white surfaces on a soft blue-grey page,
 * the brand indigo (--theme2 / #514DE0) for every accent, and the dark ink
 * #161447 for text. The two palettes are kept in sync by hand because the admin
 * deliberately does not load the theme's stylesheets (see the admin layout
 * notes), so there is no shared token to inherit from.
 *
 * Every class name here is unchanged from the previous version, so no markup in
 * the panel needed touching.
 */
export default function AdminStyles() {
  return (
    <style>{`
      .admin-shell {
        min-height: 100vh;
        background: #f4f6fb;
        color: #161447;
        font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
        /* Form controls do not inherit the page font on their own. */
        --admin-accent: #514de0;
        --admin-accent-hover: #3f3ac2;
        --admin-accent-soft: #eef0ff;
        --admin-ink: #161447;
        --admin-muted: #5f6480;
        --admin-faint: #8b90a8;
        --admin-border: #e3e7f2;
        --admin-border-strong: #cdd4e8;
        --admin-surface: #ffffff;
        --admin-surface-2: #f7f8fc;
      }

      .admin-topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 16px 28px;
        border-bottom: 1px solid var(--admin-border);
        background: var(--admin-surface);
        position: sticky;
        top: 0;
        z-index: 20;
      }

      .admin-topbar h1 {
        font-size: 18px;
        font-weight: 700;
        margin: 0;
        color: var(--admin-ink);
      }

      .admin-topbar nav {
        display: flex;
        gap: 18px;
        align-items: center;
        flex-wrap: wrap;
      }

      /* --- section nav (Blogs / Leads / Careers) ---------------------------
         Pill links inside the top bar rather than a separate strip, so the
         panel reads as three tabs under one roof. The active pill is the only
         place the brand indigo is used at full strength in the bar, which is
         what makes "where am I" answerable without reading. */
      .admin-sections {
        display: flex;
        gap: 6px;
        align-items: center;
        flex-wrap: wrap;
      }

      .admin-section-link {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 7px 14px;
        border-radius: 9px;
        border: 1px solid transparent;
        color: var(--admin-muted);
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        white-space: nowrap;
        transition: background 0.2s ease, color 0.2s ease;
      }

      .admin-section-link:hover {
        color: var(--admin-ink);
        background: var(--admin-surface-2);
      }

      .admin-section-link.is-active {
        color: var(--admin-accent);
        background: var(--admin-accent-soft);
      }

      .admin-section-link span {
        display: inline-block;
        min-width: 20px;
        padding: 1px 6px;
        border-radius: 999px;
        background: var(--admin-surface);
        color: var(--admin-accent);
        font-size: 11px;
        text-align: center;
      }

      /* The right-hand group (View site + Sign out) keeps its spacing from the
         section nav instead of hugging it. */
      .admin-topbar-end {
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
      }

      /* Narrow screens: the bar stacks brand, then sections, then the end
         group. Two lines is fewer surprises than five squished pills. */
      @media (max-width: 900px) {
        .admin-topbar {
          flex-wrap: wrap;
          row-gap: 12px;
        }
        .admin-sections {
          order: 3;
          width: 100%;
        }
        .admin-topbar-end {
          margin-left: auto;
        }
      }

      .admin-wrap {
        max-width: 1180px;
        margin: 0 auto;
        padding: 32px 28px 80px;
      }

      /* --- generic bits ------------------------------------------------- */
      .admin-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 18px;
        border-radius: 10px;
        border: 1px solid var(--admin-border-strong);
        background: var(--admin-surface);
        color: var(--admin-ink);
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
      }

      .admin-btn:hover { background: var(--admin-accent-soft); border-color: var(--admin-accent); }

      .admin-btn-primary {
        background: var(--admin-accent);
        border-color: var(--admin-accent);
        color: #ffffff;
      }
      .admin-btn-primary:hover {
        background: var(--admin-accent-hover);
        border-color: var(--admin-accent-hover);
        color: #ffffff;
      }

      /* Disabled primary buttons (the save button before the form is complete)
         would otherwise still read as "click me". */
      .admin-btn-primary:disabled {
        background: #c9cbe4;
        border-color: #c9cbe4;
        color: #ffffff;
        cursor: not-allowed;
      }

      .admin-btn-danger { border-color: #f0c3c2; color: #c0322f; background: var(--admin-surface); }
      .admin-btn-danger:hover { background: #fdeaea; border-color: #c0322f; }

      .admin-btn-small { padding: 6px 12px; font-size: 13px; }

      .admin-field { margin-bottom: 18px; }

      .admin-field label {
        display: block;
        font-size: 13px;
        font-weight: 600;
        color: var(--admin-muted);
        margin-bottom: 6px;
      }

      .admin-field input,
      .admin-field select,
      .admin-field textarea {
        width: 100%;
        padding: 11px 13px;
        border-radius: 9px;
        border: 1px solid var(--admin-border-strong);
        background: var(--admin-surface);
        color: var(--admin-ink);
        font-size: 15px;
        font-family: inherit;
      }

      .admin-field input::placeholder,
      .admin-field textarea::placeholder { color: var(--admin-faint); }

      .admin-field textarea { resize: vertical; min-height: 90px; }

      .admin-field input:focus,
      .admin-field select:focus,
      .admin-field textarea:focus {
        outline: 2px solid var(--admin-accent);
        outline-offset: -1px;
        border-color: transparent;
      }

      .admin-field-hint {
        font-size: 12px;
        color: var(--admin-faint);
        margin-top: 5px;
      }

      .admin-check {
        display: flex;
        align-items: center;
        gap: 9px;
        font-size: 14px;
        color: var(--admin-ink);
      }

      .admin-check input { width: auto; }

      /* Labels that wrap onto two lines need the text aligned to the first
         line, or the radio ends up centred against the second one. */
      .admin-check { align-items: flex-start; line-height: 1.5; }
      .admin-check input { margin-top: 3px; }

      /* --- SEO panel ------------------------------------------------------ */

      /* Character counters under the meta fields. The theme has no equivalent,
         so the state colours are defined here. */
      .admin-counter {
        display: block;
        font-size: 12px;
        margin-top: 5px;
        color: var(--admin-faint);
      }

      .admin-counter.is-good { color: #0f7b4f; }
      .admin-counter.is-over { color: #c0322f; }

      /* A Google-shaped preview. Worth the space: the whole point of the meta
         fields is what the result looks like, and the truncation rules are
         invisible otherwise. */
      .admin-serp {
        margin-top: 6px;
        padding: 16px 18px;
        border: 1px solid var(--admin-border);
        border-radius: 12px;
        background: var(--admin-surface-2);
      }

      .admin-serp-label {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--admin-faint);
        margin: 0 0 10px;
      }

      .admin-serp-url {
        font-size: 13px;
        color: #4b5a6b;
        margin: 0 0 4px;
        word-break: break-all;
      }

      .admin-serp-title {
        font-size: 19px;
        line-height: 1.3;
        color: #1a0dab;
        margin: 0 0 4px;
      }

      .admin-serp-desc {
        font-size: 14px;
        line-height: 1.5;
        color: #4d5156;
        margin: 0;
      }

      /* --- cover image ---------------------------------------------------- */

      /* Upload vs URL is a radio pair, so the two sit side by side rather than
         the whole control swapping height under the cursor. */
      .admin-radio-row {
        display: flex;
        flex-wrap: wrap;
        gap: 10px 22px;
        margin-bottom: 16px;
      }

      .admin-cover-preview {
        display: block;
        width: 100%;
        margin-top: 14px;
        border-radius: 12px;
        border: 1px solid var(--admin-border);
        /* 16:10 matches the listing thumbnails, so the preview shows the crop
           that will actually appear on the blog. */
        aspect-ratio: 84 / 52;
        object-fit: cover;
        background: var(--admin-surface-2);
      }

      /* --- login -------------------------------------------------------- */
      .admin-login {
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 24px;
      }

      .admin-login-card {
        width: 100%;
        max-width: 380px;
        padding: 34px;
        border-radius: 18px;
        border: 1px solid var(--admin-border);
        background: var(--admin-surface);
        box-shadow: 0 18px 50px rgba(22, 20, 71, 0.08);
      }

      .admin-login-card h1 {
        font-size: 21px;
        margin: 0 0 6px;
        color: var(--admin-ink);
      }

      .admin-login-card p {
        color: var(--admin-muted);
        font-size: 14px;
        margin: 0 0 24px;
      }

      /* --- post list ---------------------------------------------------- */
      .admin-table {
        width: 100%;
        border-collapse: collapse;
        background: var(--admin-surface);
        border: 1px solid var(--admin-border);
        border-radius: 14px;
        overflow: hidden;
      }

      .admin-table th,
      .admin-table td {
        padding: 14px 16px;
        text-align: left;
        font-size: 14px;
        border-bottom: 1px solid var(--admin-border);
      }

      .admin-table th {
        background: var(--admin-surface-2);
        color: var(--admin-muted);
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }

      .admin-table tr:last-child td { border-bottom: 0; }
      .admin-table a { color: var(--admin-ink); text-decoration: none; font-weight: 600; }
      .admin-table a:hover { color: var(--admin-accent); }

      .admin-thumb {
        width: 56px;
        height: 40px;
        object-fit: cover;
        border-radius: 7px;
        display: block;
        background: var(--admin-surface-2);
      }

      .admin-badge {
        display: inline-block;
        padding: 3px 10px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.03em;
      }

      .admin-badge-published { background: #e6f7ee; color: #0f7b4f; }
      .admin-badge-draft { background: #fff5d9; color: #8a6100; }
      /* Was missing entirely, so a deleted post rendered an unstyled badge. */
      .admin-badge-deleted { background: #fdeaea; color: #b3261e; }

      /* Lead triage states. The "new" state wears the brand accent because it
         is the one that wants a reply; the other two recede. */
      .admin-badge-new { background: var(--admin-accent-soft); color: var(--admin-accent); }
      .admin-badge-contacted { background: #e6f7ee; color: #0f7b4f; }
      .admin-badge-archived { background: #eef0f5; color: #5f6480; }

      /* Job visibility and application stages. Open and hired share the green
         "settled" treatment; interview and shortlisted use warmer colours so
         the pipeline reads down a list without needing labels. */
      .admin-badge-job-open,
      .admin-badge-application-hired { background: #e6f7ee; color: #0f7b4f; }
      .admin-badge-job-draft { background: #fff5d9; color: #8a6100; }
      .admin-badge-job-closed,
      .admin-badge-application-archived { background: #eef0f5; color: #5f6480; }
      .admin-badge-application-new { background: var(--admin-accent-soft); color: var(--admin-accent); }
      .admin-badge-application-shortlisted { background: #e7f0ff; color: #2457c5; }
      .admin-badge-application-interview { background: #fff2d9; color: #8a5a00; }
      .admin-badge-application-rejected { background: #fdeaea; color: #b3261e; }

      .admin-meta-link {
        color: var(--admin-accent) !important;
        text-decoration: none;
        font-weight: 600;
      }
      .admin-meta-link:hover { text-decoration: underline; }

      /* --- row actions and tabs ------------------------------------------ */

      /* Publish + Delete side by side in a table cell. Wrapping is allowed but
         the pair is kept on one line where there is room, and the column is
         right-aligned so the buttons do not shift with the title length. */
      .admin-row-actions {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        justify-content: flex-end;
      }

      .admin-col-actions { text-align: right; }

      .admin-tabs {
        display: flex;
        gap: 6px;
        margin-bottom: 20px;
        border-bottom: 1px solid var(--admin-border);
      }

      .admin-tab {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 10px 16px;
        margin-bottom: -1px;
        border-bottom: 2px solid transparent;
        color: var(--admin-muted);
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
      }

      .admin-tab:hover { color: var(--admin-ink); }

      .admin-tab.is-active {
        color: var(--admin-accent);
        border-bottom-color: var(--admin-accent);
      }

      .admin-tab span {
        display: inline-block;
        min-width: 20px;
        padding: 1px 6px;
        border-radius: 999px;
        background: var(--admin-surface-2);
        color: var(--admin-faint);
        font-size: 11px;
        text-align: center;
      }

      .admin-tab.is-active span {
        background: var(--admin-accent-soft);
        color: var(--admin-accent);
      }

      .admin-notice {
        padding: 12px 16px;
        border-radius: 10px;
        font-size: 14px;
        margin-bottom: 20px;
      }

      .admin-notice-ok { background: #e6f7ee; color: #0f7b4f; }
      .admin-notice-error { background: #fdeaea; color: #b3261e; }

      /* --- editor -------------------------------------------------------- */
      .editor-wrap {
        border: 1px solid var(--admin-border-strong);
        border-radius: 12px;
        overflow: hidden;
        background: var(--admin-surface);
      }

      .editor-toolbar {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 4px;
        padding: 9px 11px;
        background: var(--admin-surface-2);
        border-bottom: 1px solid var(--admin-border);
      }

      .editor-btn {
        min-width: 34px;
        height: 32px;
        padding: 0 9px;
        border-radius: 7px;
        border: 1px solid transparent;
        background: transparent;
        color: var(--admin-muted);
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
      }

      .editor-btn:hover { background: var(--admin-accent-soft); color: var(--admin-ink); }
      .editor-btn.is-active { background: var(--admin-accent); color: #ffffff; }

      .editor-sep {
        width: 1px;
        height: 20px;
        background: var(--admin-border-strong);
        margin: 0 5px;
      }

      .editor-stats {
        margin-left: auto;
        font-size: 12px;
        color: var(--admin-faint);
        padding-right: 6px;
      }

      .editor-loading {
        padding: 28px;
        color: var(--admin-faint);
        font-size: 14px;
        text-align: center;
      }

      /* The editable surface. ProseMirror owns .ProseMirror; the class comes
         from editorProps.attributes.class above. */
      .editor-surface {
        min-height: 420px;
        padding: 20px 22px;
        outline: none;
        font-size: 16px;
        line-height: 1.7;
        color: var(--admin-ink);
      }

      .editor-surface h2 {
        font-size: 24px;
        color: var(--admin-ink);
        margin: 30px 0 12px;
        font-weight: 700;
      }

      .editor-surface h3 {
        font-size: 19px;
        color: var(--admin-ink);
        margin: 24px 0 10px;
        font-weight: 700;
      }

      .editor-surface h4 {
        font-size: 16px;
        color: var(--admin-ink);
        margin: 20px 0 8px;
        font-weight: 700;
      }

      .editor-surface ul,
      .editor-surface ol { padding-left: 24px; margin: 0 0 16px; }
      .editor-surface li { margin-bottom: 6px; }
      .editor-surface li::marker { color: var(--admin-accent); }

      .editor-surface blockquote {
        margin: 18px 0;
        padding: 12px 18px;
        border-left: 3px solid var(--admin-accent);
        background: var(--admin-surface-2);
        border-radius: 0 8px 8px 0;
        font-style: italic;
        color: var(--admin-muted);
      }

      .editor-surface code {
        background: var(--admin-surface-2);
        border: 1px solid var(--admin-border);
        border-radius: 5px;
        padding: 1px 6px;
        font-size: 0.9em;
        color: var(--admin-accent);
      }

      .editor-surface pre {
        background: var(--admin-surface-2);
        border: 1px solid var(--admin-border);
        border-radius: 9px;
        padding: 14px 16px;
        overflow-x: auto;
      }

      .editor-surface pre code { background: none; border: 0; color: var(--admin-ink); }

      .editor-surface a { color: var(--admin-accent); text-decoration: underline; }

      .editor-surface img {
        max-width: 100%;
        border-radius: 10px;
        margin: 12px 0;
      }

      .editor-surface hr { border: 0; border-top: 1px solid var(--admin-border-strong); margin: 24px 0; }

      .editor-surface p.is-editor-empty:first-child::before {
        content: attr(data-placeholder);
        color: var(--admin-faint);
        float: left;
        height: 0;
        pointer-events: none;
      }

      /* --- form layout ---------------------------------------------------- */
      /* One column, stacked top to bottom. The panels carry their own spacing,
         so no wrapper grid is needed at all. */
      .admin-form-grid {
        display: grid;
        grid-template-columns: 1fr 320px;
        gap: 26px;
        align-items: start;
      }

      @media (max-width: 900px) {
        .admin-form-grid { grid-template-columns: 1fr; }
      }

      /* The editor is the one field that benefits from width, so the column is
         capped rather than left to stretch across a wide monitor. */
      .admin-column {
        max-width: 860px;
      }

      .admin-panel {
        padding: 20px;
        border-radius: 14px;
        border: 1px solid var(--admin-border);
        background: var(--admin-surface);
        margin-bottom: 20px;
      }

      /* Two-up field rows inside the job editor. The grid gap is owned by the
         row, not the individual fields, so labels line up across columns. */
      .admin-grid-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0 18px;
      }
      @media (max-width: 700px) {
        .admin-grid-2 { grid-template-columns: 1fr; }
      }

      /* Visibility radios: cards rather than a bare radio list, because the
         difference between Draft, Open and Closed is the important part. */
      .admin-status-options {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
      }
      @media (max-width: 760px) {
        .admin-status-options { grid-template-columns: 1fr; }
      }
      .admin-status-option {
        display: flex;
        gap: 10px;
        align-items: flex-start;
        padding: 14px;
        border: 1px solid var(--admin-border-strong);
        border-radius: 10px;
        cursor: pointer;
        background: var(--admin-surface);
      }
      .admin-status-option input { width: auto; margin-top: 3px; }
      .admin-status-option strong { display: block; font-size: 14px; color: var(--admin-ink); }
      .admin-status-option small {
        display: block;
        margin-top: 4px;
        color: var(--admin-faint);
        font-size: 12px;
        line-height: 1.45;
      }

      /* Application review: candidate facts left, role facts right, with the
         cover letter and pipeline below. */
      .admin-detail-grid {
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 20px;
        align-items: start;
      }
      @media (max-width: 860px) {
        .admin-detail-grid { grid-template-columns: 1fr; }
      }

      .admin-kv {
        display: grid;
        grid-template-columns: 130px minmax(0, 1fr);
        gap: 11px 18px;
        margin: 0;
        font-size: 14px;
        line-height: 1.5;
      }
      .admin-kv dt { color: var(--admin-faint); }
      .admin-kv dd {
        margin: 0;
        color: var(--admin-ink);
        word-break: break-word;
      }
      .admin-kv a { color: var(--admin-accent); text-decoration: none; font-weight: 600; }
      .admin-kv a:hover { text-decoration: underline; }

      .admin-cover-letter {
        white-space: pre-wrap;
        color: var(--admin-muted);
        font-size: 15px;
        line-height: 1.7;
      }

      .admin-panel h3 {
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--admin-muted);
        margin: 0 0 16px;
      }

      .admin-actions {
        display: flex;
        gap: 12px;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 22px;
      }

      .admin-card-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        margin-bottom: 24px;
        flex-wrap: wrap;
      }

      .admin-card-head h2 { font-size: 22px; margin: 0; color: var(--admin-ink); }

      .admin-meta {
        color: var(--admin-faint);
        font-size: 13px;
        margin-top: 4px;
      }

      /* Lead messages are clamped to two lines so one long enquiry cannot
         push the rest of the table off screen; the full text sits in the
         cell's title attribute. */
      .admin-cell-multiline {
        max-width: 340px;
        color: var(--admin-muted);
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      /* Body copy inside a panel, for the Careers placeholder and any other
         screen that needs a sentence rather than a meta line. */
      .admin-empty-lead {
        color: var(--admin-muted);
        font-size: 15px;
        line-height: 1.65;
        max-width: 640px;
        margin: 0 0 14px;
      }

      .admin-actions-inline { display: flex; gap: 8px; flex-wrap: wrap; }

      /* Inline <code> inside the empty-state and not-configured notices.

         Scoped to a DIRECT child paragraph on purpose. A bare .admin-shell code
         rule ties on specificity with .editor-surface code above and wins on
         source order, which silently restyled inline code inside the editor's
         own content. .admin-panel > p code cannot reach into the editor,
         because the editor's paragraphs are nested one level deeper.

         NOTE: this whole component is one JS template literal, so no backtick
         may appear anywhere in here -- not even inside a CSS comment. One
         terminates the string and the module stops parsing. */
      .admin-panel > p code,
      .admin-login-card p code {
        background: var(--admin-surface-2);
        border: 1px solid var(--admin-border);
        border-radius: 5px;
        padding: 1px 6px;
        font-size: 0.92em;
        color: var(--admin-ink);
      }
    `}</style>
  );
}
