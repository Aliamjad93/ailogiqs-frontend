"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

/**
 * The /faq page body: a search box that actually searches, and the answers
 * grouped by topic.
 *
 * The accordion is driven by React rather than Bootstrap's collapse plugin.
 * The page used to be a static template -- twelve questions, every answer the
 * same paragraph about a chatbot -- and the search box submitted to "#", so it
 * did nothing. Filtering means the list re-renders, and Bootstrap's plugin
 * writes classes onto the DOM it owns; letting React own the open/closed
 * state keeps the two from fighting over the same elements.
 *
 * The markup keeps the theme's class names, so the CSS is unchanged.
 */

/** Stable id per question, so the open state survives a filter change. */
function slugify(text) {
  return (
    "faq-" +
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  );
}

export default function FaqBrowser({ sections }) {
  const [query, setQuery] = useState("");
  const [openIds, setOpenIds] = useState([]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sections;
    return sections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) =>
          `${item.question} ${item.answer}`.toLowerCase().includes(q)
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [query, sections]);

  const toggle = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="faq-wrapper style-inner-page">
      <div className="row g-4">
        <div className="col-lg-4">
          <div className="faq-sidebar">
            <div className="search-widget">
              <form role="search" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search questions..."
                  aria-label="Search questions"
                />
                <button type="submit" aria-label="Search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
            <div className="contact-info-box">
              <div className="icon">
                <i className="fa-regular fa-phone-volume"></i>
              </div>
              <h2>
                Still have a <span>question</span>
              </h2>
              <Link href="/contact" className="theme-btn">
                contact us <i className="fa-solid fa-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="faq-content">
            {results.length === 0 && (
              <p className="faq-empty">
                No question matches &ldquo;{query}&rdquo;. Try a different word, or
                ask us directly.
              </p>
            )}
            {results.map((section, i) => (
              <div key={section.heading}>
                <h2 className={i === 0 ? "" : "mb-3 mt-5"}>{section.heading}</h2>
                <div className="faq-accordion">
                  <div className="accordion" id={`faq-group-${i}`}>
                    {section.items.map((item) => {
                      const id = slugify(item.question);
                      const open = openIds.includes(id);
                      return (
                        <div className="accordion-item" key={id}>
                          <h5 className="accordion-header">
                            <button
                              className={`accordion-button ${open ? "" : "collapsed"}`}
                              type="button"
                              aria-expanded={open ? "true" : "false"}
                              aria-controls={id}
                              onClick={() => toggle(id)}
                            >
                              {item.question}
                            </button>
                          </h5>
                          <div
                            id={id}
                            className={`accordion-collapse collapse ${open ? "show" : ""}`}
                          >
                            <div className="accordion-body">{item.answer}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
