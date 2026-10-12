"use client";

/**
 * A server-action form whose submit asks for confirmation first.
 *
 * The Publish / Unpublish / Delete buttons sit in a dense table row, where a
 * mis-click is easy and the consequence is not obvious from the button label
 * alone. `window.confirm` is deliberate rather than a custom modal: it is
 * synchronous, needs no state, no portal and no focus management, and it blocks
 * the submit before the server action is ever called.
 *
 * Server actions can be passed to a client component as a prop, which is what
 * keeps the action itself on the server.
 */
export default function ConfirmForm({ action, fields, label, className, confirm }) {
  return (
    <form
      action={action}
      onSubmit={(event) => {
        if (confirm && !window.confirm(confirm)) event.preventDefault();
      }}
    >
      {Object.entries(fields).map(([name, value]) => (
        <input key={name} type="hidden" name={name} value={value} />
      ))}
      <button className={className} type="submit">
        {label}
      </button>
    </form>
  );
}
