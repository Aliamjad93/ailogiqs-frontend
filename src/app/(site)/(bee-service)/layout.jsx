/**
 * Chrome + stylesheet for the BeeLens showcase page.
 *
 * Same contract as the sibling `(ai-service)` group: deliberately a
 * pass-through, with no <Header> or <Footer>, because each showcase page
 * renders its own chrome. That is what keeps a showcase self-contained --
 * building the next service is "copy the folder, change the copy".
 *
 * The group currently holds one route:
 *
 *   (bee-service)/projects/bee-virus-detection/page.jsx
 *     -> /projects/bee-virus-detection
 *
 * Note the URL does NOT sit under the group name. The group is invisible in
 * the URL, and the page is reached from a card on /projects rather than from the
 * nav -- exactly like /projects/chatbot. `route-bee` in TemplateRuntime has to
 * list the real pathname for that reason.
 *
 * `body.route-bee` is the hook every rule in bee-service.css is scoped under.
 * Without it the page renders completely unstyled: the stylesheet is written
 * against a dark surface, and the site's own theme is light.
 */
export default function BeeServiceLayout({ children }) {
  return (
    <>
      {/*
        The BeeLens stylesheet, linked here and nowhere else, so main-site
        pages never download it. Every rule in the file is scoped under
        `body.route-bee` or a `.bee-*` class, so it cannot reach the rest of the
        site even if the browser keeps the file cached after a client-side
        navigation away.
      */}
      <link rel="stylesheet" href="/css/bee-service.css" precedence="bee-service" />
      {children}
    </>
  );
}
