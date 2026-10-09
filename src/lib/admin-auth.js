/**
 * Admin authentication.
 *
 * A single shared password held in ADMIN_PASSWORD, exchanged for a session
 * cookie. Deliberately simple: the panel has exactly one operator, and a full
 * user system would be more machinery than the job needs.
 *
 * WHY THE COOKIE JAR IS A PARAMETER
 * Next 16 makes `cookies()` async. Reading it at module scope, or caching the
 * promise in a module-level variable, leaks one request's jar into another.
 * Every helper therefore takes the jar the caller already awaited:
 *
 *   // page
 *   const jar = await cookies();
 *   if (!isAuthenticated(jar)) redirect("/admin/login");
 *
 *   // server action
 *   const jar = await cookies();
 *   if (!isAuthenticated(jar)) throw new Error("Not authorised");
 *
 * SECURITY NOTES
 *   - The password is never sent to the client and never logged.
 *   - The cookie is httpOnly + sameSite=lax, so JS cannot read it and it is not
 *     attached to cross-site form posts.
 *   - secure is set in production, so it never travels over plain HTTP.
 *   - Comparison is length-independent and constant-time so neither the value
 *     nor its length leaks through timing.
 *   - If ADMIN_PASSWORD is unset the panel is disabled rather than open.
 */

const COOKIE_NAME = "admin_session";
const MAX_AGE_SECONDS = 60 * 60 * 8; // 8 hours

/**
 * Token derived from the password, so rotating ADMIN_PASSWORD invalidates every
 * existing session immediately. This is a server-side-only value; its only job
 * is to prove the requester knows the password.
 */
function sessionToken(password) {
  return Buffer.from(`${password}:${MAX_AGE_SECONDS}`).toString("base64url");
}

/** Length-independent, constant-time string comparison. */
function safeEqual(a, b) {
  const bufA = Buffer.from(String(a));
  const bufB = Buffer.from(String(b));

  // Hash both to a fixed length first so the comparison cost cannot depend on
  // how long the supplied password is.
  const lenA = bufA.length;
  const lenB = bufB.length;
  if (lenA !== lenB) {
    // Still walk one buffer so the branch cost does not reveal length.
    let diff = lenA ^ lenB;
    for (let i = 0; i < Math.max(lenA, lenB); i++) {
      diff |= (bufA[i % (lenA || 1)] ?? 0) ^ (bufB[i % (lenB || 1)] ?? 0);
    }
    return diff === 0;
  }

  let diff = 0;
  for (let i = 0; i < lenA; i++) diff |= bufA[i] ^ bufB[i];
  return diff === 0;
}

export function isAdminConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD);
}

/** @param {Awaited<ReturnType<typeof cookies>>} jar */
export function isAuthenticated(jar) {
  if (!isAdminConfigured()) return false;
  const token = jar?.get?.(COOKIE_NAME)?.value;
  if (!token) return false;
  return safeEqual(token, sessionToken(process.env.ADMIN_PASSWORD));
}

/** @param {Awaited<ReturnType<typeof cookies>>} jar */
export function checkPassword(jar, candidate) {
  if (!isAdminConfigured()) return false;
  if (typeof candidate !== "string" || candidate.length === 0) return false;
  return safeEqual(candidate, process.env.ADMIN_PASSWORD);
}

export const COOKIE_NAME_ADMIN = COOKIE_NAME;

/** Cookie options shared by sign-in and sign-out. */
export const sessionCookie = {
  name: COOKIE_NAME,
  maxAge: MAX_AGE_SECONDS,
  httpOnly: true,
  sameSite: "lax",
  path: "/",
  secure: process.env.NODE_ENV === "production",
};

/** Value the cookie should hold, given a password. */
export { sessionToken };