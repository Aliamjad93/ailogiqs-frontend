"use client";

import { useActionState } from "react";
import { signIn } from "../actions";

/**
 * Sign-in form. useActionState carries the server-returned error back to the
 * client, so a wrong password shows inline instead of navigating away.
 */
export default function LoginForm() {
  const [state, action, pending] = useActionState(signIn, {});

  return (
    <form action={action}>
      <div className="admin-field">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          autoFocus
          required
        />
      </div>

      {state?.error && <div className="admin-notice admin-notice-error">{state.error}</div>}

      <button className="admin-btn admin-btn-primary" type="submit" disabled={pending}>
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}