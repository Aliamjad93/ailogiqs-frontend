/**
 * Admin shell styles.
 *
 * Injected once from the admin layout rather than imported globally, so none of
 * it can reach the public site. Deliberately plain and functional: this is an
 * internal tool, and the public theme already carries the brand weight.
 */
export default function AdminStyles() {
  return (
    <style>{`
      .admin-shell {
        min-height: 100vh;
        background: #101114;
        color: #e8e9ed;
        font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
      }

      .admin-topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 16px 28px;
        border-bottom: 1px solid #26272d;
        background: #141519;
        position: sticky;
        top: 0;
        z-index: 20;
      }

      .admin-topbar h1 {
        font-size: 18px;
        font-weight: 700;
        margin: 0;
      }

      .admin-topbar nav {
        display: flex;
        gap: 18px;
        align-items: center;
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
        border: 1px solid #33353d;
        background: #1e2027;
        color: #e8e9ed;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        transition: background 0.2s ease, border-color 0.2s ease;
      }

      .admin-btn:hover { background: #262932; border-color: #454852; }

      .admin-btn-primary {
        background: #effb53;
        border-color: #effb53;
        color: #14151a;
      }
      .admin-btn-primary:hover { background: #f7ff8a; border-color: #f7ff8a; }

      .admin-btn-danger { border-color: #5c2b2b; color: #ff9b9b; }
      .admin-btn-danger:hover { background: #2a1516; }

      .admin-btn-small { padding: 6px 12px; font-size: 13px; }

      .admin-field { margin-bottom: 18px; }

      .admin-field label {
        display: block;
        font-size: 13px;
        font-weight: 600;
        color: #9ea1ab;
        margin-bottom: 6px;
      }

      .admin-field input,
      .admin-field select,
      .admin-field textarea {
        width: 100%;
        padding: 11px 13px;
        border-radius: 9px;
        border: 1px solid #33353d;
        background: #16181d;
        color: #e8e9ed;
        font-size: 15px;
        font-family: inherit;
      }

      .admin-field textarea { resize: vertical; min-height: 90px; }

      .admin-field input:focus,
      .admin-field select:focus,
      .admin-field textarea:focus {
        outline: 2px solid #effb53;
        outline-offset: -1px;
        border-color: transparent;
      }

      .admin-field-hint {
        font-size: 12px;
        color: #71747e;
        margin-top: 5px;
      }

      .admin-check {
        display: flex;
        align-items: center;
        gap: 9px;
        font-size: 14px;
        color: #c9cbd3;
      }

      .admin-check input { width: auto; }

      /* Labels that wrap onto two lines need the text aligned to the first
         line, or the radio ends up centred against the second one. */
      .admin-check { align-items: flex-start; line-height: 1.5; }
      .admin-check input { margin-top: 3px; }

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
        border: 1px solid #26272d;
        /* 16:10 matches the listing thumbnails, so the preview shows the crop
           that will actually appear on the blog. */
        aspect-ratio: 84 / 52;
        object-fit: cover;
        background: #0f1014;
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
        border: 1px solid #26272d;
        background: #141519;
      }

      .admin-login-card h1 {
        font-size: 21px;
        margin: 0 0 6px;
      }

      .admin-login-card p {
        color: #8d909a;
        font-size: 14px;
        margin: 0 0 24px;
      }

      /* --- post list ---------------------------------------------------- */
      .admin-table {
        width: 100%;
        border-collapse: collapse;
        background: #141519;
        border: 1px solid #26272d;
        border-radius: 14px;
        overflow: hidden;
      }

      .admin-table th,
      .admin-table td {
        padding: 14px 16px;
        text-align: left;
        font-size: 14px;
        border-bottom: 1px solid #23252b;
      }

      .admin-table th {
        background: #191b21;
        color: #9ea1ab;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }

      .admin-table tr:last-child td { border-bottom: 0; }
      .admin-table a { color: #e8e9ed; text-decoration: none; font-weight: 600; }
      .admin-table a:hover { color: #effb53; }

      .admin-thumb {
        width: 56px;
        height: 40px;
        object-fit: cover;
        border-radius: 7px;
        display: block;
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

      .admin-badge-published { background: #16351f; color: #6ee79a; }
      .admin-badge-draft { background: #3a3320; color: #ffd479; }

      .admin-notice {
        padding: 12px 16px;
        border-radius: 10px;
        font-size: 14px;
        margin-bottom: 20px;
      }

      .admin-notice-ok { background: #16351f; color: #8ff0ac; }
      .admin-notice-error { background: #3a1c1e; color: #ffb0b0; }

      /* --- editor -------------------------------------------------------- */
      .editor-wrap {
        border: 1px solid #33353d;
        border-radius: 12px;
        overflow: hidden;
        background: #16181d;
      }

      .editor-toolbar {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 4px;
        padding: 9px 11px;
        background: #1b1d23;
        border-bottom: 1px solid #2a2c33;
      }

      .editor-btn {
        min-width: 34px;
        height: 32px;
        padding: 0 9px;
        border-radius: 7px;
        border: 1px solid transparent;
        background: transparent;
        color: #c9cbd3;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
      }

      .editor-btn:hover { background: #262932; color: #fff; }
      .editor-btn.is-active { background: #effb53; color: #14151a; }

      .editor-sep {
        width: 1px;
        height: 20px;
        background: #33353d;
        margin: 0 5px;
      }

      .editor-stats {
        margin-left: auto;
        font-size: 12px;
        color: #71747e;
        padding-right: 6px;
      }

      .editor-loading {
        padding: 28px;
        color: #71747e;
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
        color: #d8d9de;
      }

      .editor-surface h2 {
        font-size: 24px;
        color: #fff;
        margin: 30px 0 12px;
        font-weight: 700;
      }

      .editor-surface h3 {
        font-size: 19px;
        color: #fff;
        margin: 24px 0 10px;
        font-weight: 700;
      }

      .editor-surface h4 {
        font-size: 16px;
        color: #fff;
        margin: 20px 0 8px;
        font-weight: 700;
      }

      .editor-surface ul,
      .editor-surface ol { padding-left: 24px; margin: 0 0 16px; }
      .editor-surface li { margin-bottom: 6px; }
      .editor-surface li::marker { color: #effb53; }

      .editor-surface blockquote {
        margin: 18px 0;
        padding: 12px 18px;
        border-left: 3px solid #effb53;
        background: #1b1d23;
        border-radius: 0 8px 8px 0;
        font-style: italic;
        color: #b9bbc3;
      }

      .editor-surface code {
        background: #1b1d23;
        border: 1px solid #2f313a;
        border-radius: 5px;
        padding: 1px 6px;
        font-size: 0.9em;
        color: #effb53;
      }

      .editor-surface pre {
        background: #1b1d23;
        border: 1px solid #2f313a;
        border-radius: 9px;
        padding: 14px 16px;
        overflow-x: auto;
      }

      .editor-surface pre code { background: none; border: 0; color: #d8d9de; }

      .editor-surface a { color: #effb53; text-decoration: underline; }

      .editor-surface img {
        max-width: 100%;
        border-radius: 10px;
        margin: 12px 0;
      }

      .editor-surface hr { border: 0; border-top: 1px solid #2f313a; margin: 24px 0; }

      .editor-surface p.is-editor-empty:first-child::before {
        content: attr(data-placeholder);
        color: #5c5f68;
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
        border: 1px solid #26272d;
        background: #141519;
        margin-bottom: 20px;
      }

      .admin-panel h3 {
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #9ea1ab;
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

      .admin-card-head h2 { font-size: 22px; margin: 0; }

      .admin-meta {
        color: #71747e;
        font-size: 13px;
        margin-top: 4px;
      }

      .admin-actions-inline { display: flex; gap: 8px; }
    `}</style>
  );
}