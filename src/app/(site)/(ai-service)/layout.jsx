/**
 * Chrome + stylesheet for the AI-service showcase pages.
 *
 * This route group is deliberately isolated from the rest of the site. It holds
 * the indigo "AI sales agent" design, which is ONE of the services AiLogiQs
 * sells -- not the site's own theme. The main site runs on the template's
 * black/yellow theme (see public/css/overrides.css); everything indigo lives
 * here and in public/css/ai-service.css.
 *
 * Deliberately a pass-through: no <Header> or <Footer>.
 *
 * The two pages in this group need different chrome -- the landing page uses the
 * `home2` header (burger-only, no CTAs), the service page the `aiService` one --
 * so each page renders its own header and footer. That also makes every page
 * here self-contained: to turn this design into a page for another service,
 * copy the folder and change the copy, with nothing to unpick from a parent
 * layout.
 *
 * The group holds two routes, and note they do NOT share a URL prefix:
 *
 *   (ai-service)/ai-services/chatbot/page.jsx -> /ai-services/chatbot (landing)
 *   (ai-service)/projects/chatbot/page.jsx    -> /projects/chatbot (the service
 *                                                page, reached from the Projects
 *                                                card on /projects)
 *
 * That is why the `route-ai-service` flag below has to list both prefixes: the
 * body class is keyed off the PATHNAME, not off membership of this group.
 *
 * `body.route-ai-service` is set by TemplateRuntime for everything under
 * /ai-services/* and for /projects/chatbot. It is the hook every rule in
 * ai-service.css is scoped under, which is what keeps this design from reaching
 * the main site.
 */
export default function AiServiceLayout({ children }) {
  return (
    <>
      {/*
        The indigo design's entire stylesheet, and the only place it is linked.

        Linked from this layout rather than the root one so main-site pages never
        download it. Leaking is impossible either way: every rule in the file is
        scoped under `body.route-ai-service` or an `.aiq-*` class, so it cannot
        match anything on the black/yellow site even if the browser holds on to
        the file after a client-side navigation back to "/".

        `precedence` keeps it after the theme + overrides links React hoists from
        the root layout; the scoping means the order is not load-bearing.
      */}
      <link rel="stylesheet" href="/css/ai-service.css" precedence="ai-service" />
      {children}
    </>
  );
}
