import { THEME_STYLESHEETS, THEME_SCRIPTS } from "@/lib/theme-assets";
import { SITE } from "@/lib/site.config";

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
  other: {
    "facebook-domain-verification": "8ojvrejsg6q357rxothm0lm0s7nqzw",
  },
  /*
    NO `alternates.canonical` here on purpose.

    Metadata is inherited: a canonical declared in the root layout is emitted on
    EVERY page that does not override it. Declaring the homepage's URL here
    therefore told search engines that /about, /pricing, /service, /team,
    /contact, /faq and /projects were all duplicates of "/", which is the one
    signal that reliably keeps a page out of the index. Each page now declares
    its own canonical instead.
  */
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
          The theme's vendor jQuery stack.

          React 19 warns whenever it encounters a <script> while rendering a
          component ("Encountered a script tag while rendering React component")
          -- which is exactly what a wrapper component containing these tags
          produced, on every page. Writing them directly into the root layout's
          <head> is also the correct loading strategy.

          `defer`, not a plain parser-blocking script. A classic script with
          `defer` still executes in document order -- jQuery before every plugin,
          swiper-bundle before main.js -- so the theme's ordering requirement is
          preserved, but the HTML parser is no longer stopped while ~700 KB of
          vendor JS downloads. That is what the old `async={false}` did: it made
          all eleven files block first paint.

          This is safe because nothing in the app depends on jQuery existing
          during parse. There are no inline scripts on any page (the only one is
          the article JSON-LD, which is inert), and TemplateRuntime already polls
          for `window.AiLogiQsInitTemplate` with a timeout precisely because the
          vendor stack can arrive after React hydrates.

          Rendered on the server only -- this is a Server Component -- so the
          markup is part of the initial document and never re-rendered on
          navigation, which is when the warning fired before.
        */}
        {THEME_SCRIPTS.map((src) => (
          <script key={src} src={src} defer />
        ))}
      </head>
      <body className="body-bg">
        {children}
      </body>
    </html>
  );
}
