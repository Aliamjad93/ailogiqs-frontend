import { updateLeadStatus, deleteLead } from "@/app/admin/actions";
import ConfirmForm from "@/components/admin/ConfirmForm";

/**
 * Leads table for one triage bucket.
 *
 * Same shape and grammar as PostTable -- server-action forms behind
 * window.confirm, `redirectTo` to stay on the current tab -- so the two tables
 * behave identically to the operator.
 *
 * The message cell is clamped to two lines with the full text in `title`:
 * enquiries vary from one line to several paragraphs, and a paragraph-tall row
 * would push every other row off the screen.
 */
export default function LeadTable({ leads, view = "new" }) {
  // The tabs already say which bucket is on screen, so no status column.
  // `redirectTo` returns to the tab the action was taken on.
  const back = `/admin/leads?status=${view}`;

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Contact</th>
          <th>Subject</th>
          <th>Message</th>
          <th>Received</th>
          <th className="admin-col-actions">Actions</th>
        </tr>
      </thead>
      <tbody>
        {leads.map((lead) => (
          <tr key={lead.id}>
            <td>
              <strong>{lead.name}</strong>
              <div className="admin-meta">#{lead.id}</div>
            </td>
            <td>
              <a href={`mailto:${lead.email}`}>{lead.email}</a>
              {lead.phone && (
                <div className="admin-meta">
                  <a href={`tel:${lead.phone}`}>{lead.phone}</a>
                </div>
              )}
            </td>
            <td>{lead.subject || "—"}</td>
            <td>
              <div className="admin-cell-multiline" title={lead.message}>
                {lead.message}
              </div>
            </td>
            <td className="admin-meta">{String(lead.created_at).slice(0, 16)}</td>
            <td>
              <div className="admin-row-actions">
                {lead.status !== "contacted" ? (
                  <ConfirmForm
                    action={updateLeadStatus}
                    fields={{ id: lead.id, status: "contacted", redirectTo: back }}
                    label="Mark contacted"
                    className="admin-btn admin-btn-small"
                  />
                ) : (
                  <ConfirmForm
                    action={updateLeadStatus}
                    fields={{ id: lead.id, status: "new", redirectTo: back }}
                    label="Reopen"
                    className="admin-btn admin-btn-small"
                  />
                )}

                {lead.status === "archived" ? null : (
                  <ConfirmForm
                    action={updateLeadStatus}
                    fields={{ id: lead.id, status: "archived", redirectTo: back }}
                    label="Archive"
                    className="admin-btn admin-btn-small"
                  />
                )}

                <ConfirmForm
                  action={deleteLead}
                  fields={{ id: lead.id, redirectTo: back }}
                  label="Delete"
                  className="admin-btn admin-btn-small admin-btn-danger"
                  confirm={`Permanently delete the enquiry from ${lead.name}?\n\nThis cannot be undone. Archive it instead if you might need it later.`}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
