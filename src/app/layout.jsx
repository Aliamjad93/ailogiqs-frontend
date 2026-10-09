import { THEME_STYLESHEETS, THEME_SCRIPTS } from "@/lib/theme-assets";
import { SITE, absoluteUrl } from "@/lib/site.config";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} – ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  authors: [{ name: "ailogiqs-team" }],
  creator: "ailogiqs-team",
  keywords: [
    "AI startup",
    "artificial intelligence",
    "machine learning",
    "AI technology",
    "AiLogiQs",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    // Templated so a page's own `metadata.title` flows into og:title. Without
    // the template every route would advertise the homepage title to social
    // scrapes, because a plain string here overrides child titles.
    title: {
      default: `${SITE.name} – ${SITE.tagline}`,
      template: `%s | ${SITE.name}`,
    },
    description: SITE.description,
    url: SITE.url,
    locale: SITE.locale,
  },
  twitter: {
    card: "summary_large_image",
    site: SITE.twitter,
    title: {
      default: `${SITE.name} – ${SITE.tagline}`,
      template: `%s | ${SITE.name}`,
    },
    description: SITE.description,
  },
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: absoluteUrl("/") },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b12",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/*
          The theme's stylesheets are loaded as plain <link> tags, exactly as
          the original HTML template did. `precedence` lets React 19 hoist them
          into <head> while preserving the declared cascade order, which matters
          because Bootstrap must load before main.css.
        */}
        {THEME_STYLESHEETS.map(({ href, precedence }) => (
          <link key={href} rel="stylesheet" href={href} precedence={precedence} />
        ))}

        {/*
          The theme's vendor jQuery stack, inlined here rather than rendered by a
          component.

          React 19 warns whenever it encounters a <script> while rendering a
          component ("Encountered a script tag while rendering React component")
          -- which is exactly what a wrapper component containing these tags
          produced, on every page. Writing them directly into the root layout's
          <head> is also the correct loading strategy: a parser-inserted classic
          script blocks the parser until it evaluates, so jQuery is guaranteed to
          be defined before any plugin, and swiper-bundle before main.js. That
          ordering is what the theme requires, and next/script's beforeInteractive
          does not express it.

          Rendered on the server only -- this is a Server Component -- so the
          markup is part of the initial document and never re-rendered on
          navigation, which is when the warning fired before.
        */}
        {THEME_SCRIPTS.map((src) => (
          <script key={src} src={src} async={false} />
        ))}
      </head>
      <body className="body-bg">
        {children}
      </body>
    </html>
  );
}
