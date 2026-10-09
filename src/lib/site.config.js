/**
 * Single source of truth for site-wide metadata, used by the root layout's
 * metadata export and as the fallback for every page that does not override it.
 */
export const SITE = {
  name: "AiLogiQs",
  tagline: "AI Startup & Technology",
  description:
    "AiLogiQs is an AI startup building intelligent products and technology for tomorrow's businesses.",
  /** Canonical origin. Override with NEXT_PUBLIC_SITE_URL on Vercel. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ailogiqs.com",
  locale: "en_US",
  twitter: "@ailogiqs",
};

/** Builds an absolute URL for canonical links and Open Graph images. */
export function absoluteUrl(path = "/") {
  return new URL(path, SITE.url).toString();
}
