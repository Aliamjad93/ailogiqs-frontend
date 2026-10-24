"use client";

import { useEffect, useState } from "react";

/**
 * Scroll-down cue for the home hero.
 *
 * Shown in the bottom-left corner while the page is at the top, as a prompt
 * that there is more below, then fades out on the first scroll. It hides itself
 * too when the document is not scrollable, where the cue would be a dead end.
 *
 * Client-side on purpose: React lets this react to scroll without editing the
 * theme's jQuery layer in main.js, which is kept pristine.
 */
export default function ScrollCue({ targetSelector = ".about-section" }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const update = () => {
      const atTop = window.scrollY < 60;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight > 120;
      setHidden(!atTop || !scrollable);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollDown = () => {
    const target = document.querySelector(targetSelector);
    const top = target
      ? target.getBoundingClientRect().top + window.scrollY
      : window.innerHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`scroll-cue${hidden ? " is-hidden" : ""}`}
      onClick={scrollDown}
      aria-label="Scroll down"
    >
      <span className="scroll-cue-icon" aria-hidden="true">
        <i className="fa-solid fa-arrow-down-long" />
      </span>
      <span className="scroll-cue-label">Scroll</span>
    </button>
  );
}
