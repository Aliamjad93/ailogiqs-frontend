// Article body styling for HTML authored in the admin panel.
//
// The theme styles .news-details-content h2/h3/p as direct children, so it
// covers the original template copy. TipTap output nests everything one level
// deeper inside the render container the article page emits, which is why
// `dangerouslySetInnerHTML` content was rendering completely unstyled.
export default function BlogProse() {
  return (
    <style>{`
      /* The article page renders bodyHtml into a bare wrapper inside
         .news-details-content. Scope to that wrapper so admin styles can never
         leak into the site chrome around it. */
      .news-details-content .article-body {
        color: var(--text);
        font-size: 18px;
        line-height: 1.75;
      }

      .news-details-content .article-body > *:first-child { margin-top: 0; }
      .news-details-content .article-body > *:last-child { margin-bottom: 0; }

      .news-details-content .article-body p { margin-bottom: 22px; }

      /* TipTap writes h2 for the section headings authors use; h3 for
         sub-sections. Both are in the body, distinct from the page's own
         .news-details-content h2 title.

         --white is the theme's global heading colour, authored for a dark body.
         The site is light, so body headings and <strong> take the dark ink
         token instead; --theme (yellow) is likewise swapped for the brand
         indigo, and --bg (white here) for a light tint so quotes, code and
         rules stay visible on the white page.

         The wrapper path is spelled out because the theme's own
         .news-details-wrapper .news-details-items .news-details-content h2/h3
         rules (55px/40px, written for the template's dark demo copy) out-specify
         a two-class .news-details-content .article-body selector. Matching
         their length puts the body sizes back in charge.
         (No backticks anywhere in this block: the whole stylesheet is a JS
         template literal, so one would end the string.) */
      .news-details-wrapper .news-details-items .news-details-content .article-body h2 {
        font-size: 34px;
        line-height: 1.25;
        font-weight: 700;
        color: var(--header);
        margin: 44px 0 18px;
      }

      .news-details-wrapper .news-details-items .news-details-content .article-body h3 {
        font-size: 25px;
        line-height: 1.3;
        font-weight: 700;
        color: var(--header);
        margin: 34px 0 14px;
      }

      .news-details-content .article-body ul,
      .news-details-content .article-body ol {
        margin: 0 0 22px;
        padding-left: 24px;
      }

      .news-details-content .article-body li { margin-bottom: 10px; }
      .news-details-content .article-body li::marker { color: var(--theme2); }

      .news-details-content .article-body a {
        color: var(--theme2);
        text-decoration: underline;
        text-underline-offset: 3px;
      }

      .news-details-content .article-body blockquote {
        margin: 28px 0;
        padding: 20px 24px;
        border-left: 3px solid var(--theme2);
        background: #f2f7fe;
        border-radius: 0 12px 12px 0;
        font-style: italic;
      }

      .news-details-content .article-body code {
        background: #f2f7fe;
        border: 1px solid rgba(207, 208, 212, 0.4);
        border-radius: 6px;
        padding: 2px 7px;
        font-size: 0.9em;
        color: var(--theme2);
      }

      .news-details-content .article-body pre {
        background: #f2f7fe;
        border: 1px solid rgba(207, 208, 212, 0.4);
        border-radius: 14px;
        padding: 20px 22px;
        overflow-x: auto;
        margin: 26px 0;
      }

      .news-details-content .article-body pre code {
        background: none;
        border: 0;
        padding: 0;
        color: var(--text);
      }

      .news-details-content .article-body img {
        width: 100%;
        height: auto;
        border-radius: 20px;
        margin: 26px 0;
      }

      .news-details-content .article-body hr {
        border: 0;
        border-top: 1px solid var(--border);
        margin: 38px 0;
      }

      .news-details-content .article-body strong { color: var(--header); }

      @media (max-width: 991px) {
        .news-details-wrapper .news-details-items .news-details-content .article-body h2 { font-size: 29px; }
        .news-details-wrapper .news-details-items .news-details-content .article-body h3 { font-size: 22px; }
        .news-details-content .article-body { font-size: 17px; }
      }

      @media (max-width: 575px) {
        .news-details-wrapper .news-details-items .news-details-content .article-body h2 { font-size: 25px; }
        .news-details-wrapper .news-details-items .news-details-content .article-body h3 { font-size: 20px; }
        .news-details-content .article-body { font-size: 16px; }
      }
    `}</style>
  );
}