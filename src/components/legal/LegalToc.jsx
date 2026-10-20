"use client";

/**
 * "On this page" index for the legal pages.
 *
 * A client component for one reason only: the active item. Which clause you are
 * reading cannot be known at build time, and an IntersectionObserver is cheaper
 * and steadier than a scroll handler. Everything else about the list is static
 * markup.
 *
 * The observer band is the top strip of the viewport (120px down to 38% up)
 * rather than "anything visible": the header is fixed, so a section is only
 * "current" once its heading has cleared the bar, and the last section keeps
 * the highlight instead of the list going blank at the end of the page.
 */
import { useEffect, useState } from "react";

export default function LegalToc({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  /* Keyed on the ids rather than the array: a parent that maps its sections
     inline hands down a fresh array on every render, which would tear the
     observer down and rebuild it for no reason. */
  const key = items.map((item) => item.id).join("|");

  useEffect(() => {
    const sections = key
      .split("|")
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0];

        if (first) setActiveId(first.target.id);
      },
      { rootMargin: "-120px 0px -62% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [key]);

  return (
    <nav className="legal-toc" aria-label="On this page">
      <p className="legal-toc-label">On this page</p>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={activeId === item.id ? "location" : undefined}
            >
              <span className="legal-toc-num">{item.number}</span>
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
