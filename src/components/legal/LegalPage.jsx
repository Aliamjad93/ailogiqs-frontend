import Link from "next/link";
import LegalIcon from "./LegalIcon";
import LegalToc from "./LegalToc";
import { CONTACT } from "@/content/contact";
import { LEGAL_UPDATED } from "@/content/legal";

/**
 * Shared shell for /privacy-policy and /terms-of-service.
 *
 * The two pages differ only in their copy, so they render through this one
 * component: hero, sticky "on this page" index, numbered document, closing CTA.
 * Anything visual belongs in the `Legal pages` block of overrides.css.
 *
 * Why a document layout rather than the site's usual marketing sections: these
 * are read top to bottom, often with a search, and sometimes printed. A
 * 260px index that follows the scroll and a 760px measure is what makes that
 * work; full-bleed hero cards would not.
 */

/* `[label](href)` in the copy becomes a real anchor. Deliberately tiny — the
   copy only ever needs a link to an address, never nested markup. */
const INLINE_LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

function RichText({ text }) {
  const nodes = [];
  let cursor = 0;
  let match;

  INLINE_LINK.lastIndex = 0;

  while ((match = INLINE_LINK.exec(text)) !== null) {
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index));

    const [, label, href] = match;
    nodes.push(
      href.startsWith("http") ? (
        <a key={match.index} href={href} target="_blank" rel="noreferrer">
          {label}
        </a>
      ) : (
        <a key={match.index} href={href}>
          {label}
        </a>
      )
    );

    cursor = match.index + match[0].length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));

  return <>{nodes}</>;
}

/* Studio details come from src/content/contact.js — the same source the
   footer, the drawer and /contact print. Never re-inline them. */
function ContactBlock() {
  return (
    <div className="legal-contact">
      <p className="legal-contact-name">{CONTACT.name}</p>
      <p className="legal-contact-row">
        <LegalIcon name="location" />
        <a href={CONTACT.mapsHref} target="_blank" rel="noreferrer">
          {CONTACT.address}
        </a>
      </p>
      <p className="legal-contact-row">
        <LegalIcon name="mail" />
        <a href={CONTACT.emailHref}>{CONTACT.email}</a>
      </p>
      <p className="legal-contact-row">
        <LegalIcon name="phone" />
        <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
      </p>
    </div>
  );
}

function Block({ block }) {
  if (block.type === "p") {
    return (
      <p>
        <RichText text={block.text} />
      </p>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="legal-list">
        {block.items.map((item, index) => (
          <li key={index}>
            {item.label ? (
              <>
                <strong>{item.label}</strong>
                {item.text ? (
                  <>
                    {" — "}
                    <RichText text={item.text} />
                  </>
                ) : null}
              </>
            ) : (
              <RichText text={item.text} />
            )}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "contact") return <ContactBlock />;

  return null;
}

export default function LegalPage({ page }) {
  return (
    <>
      <section className="legal-hero">
        <div className="container">
          <nav className="legal-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>{page.title}</span>
          </nav>

          <span className="legal-eyebrow">
            <LegalIcon name={page.icon} />
            {page.eyebrow}
          </span>

          <h1>
            {page.heroLead}{" "}
            <span>
              <b>{page.heroAccent}</b>
            </span>
          </h1>

          <p className="legal-hero-copy">{page.intro}</p>

          <div className="legal-hero-meta">
            <span className="legal-meta-item">
              <LegalIcon name="calendar" />
              Last updated{" "}
              <time dateTime={LEGAL_UPDATED.iso}>{LEGAL_UPDATED.label}</time>
            </span>
            <a className="legal-meta-item" href={CONTACT.emailHref}>
              <LegalIcon name="mail" />
              {CONTACT.email}
            </a>
          </div>
        </div>
      </section>

      <section className="legal-body">
        <div className="container">
          <div className="legal-layout">
            <aside className="legal-aside">
              <LegalToc
                items={page.sections.map(({ id, number, title }) => ({
                  id,
                  number,
                  title,
                }))}
              />

              <div className="legal-help">
                <LegalIcon name="message" />
                <h2>{page.helpTitle}</h2>
                <p>{page.helpText}</p>
                <a className="legal-help-btn" href={CONTACT.emailHref}>
                  {CONTACT.email}
                  <LegalIcon name="arrowRight" />
                </a>
              </div>
            </aside>

            <article className="legal-doc">
              {page.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="legal-section"
                >
                  <h2>
                    <span className="legal-num" aria-hidden="true">
                      {section.number}
                    </span>
                    {section.title}
                  </h2>
                  {section.blocks.map((block, index) => (
                    <Block key={index} block={block} />
                  ))}
                </section>
              ))}
            </article>
          </div>
        </div>
      </section>

      <section className="legal-cta">
        <div className="container">
          <div className="legal-cta-inner">
            <div>
              <h2>Still have questions?</h2>
              <p>Talk to our team — we reply within one business day.</p>
            </div>
            <Link href="/contact" className="theme-btn">
              Contact us
              <LegalIcon name="arrowRight" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
