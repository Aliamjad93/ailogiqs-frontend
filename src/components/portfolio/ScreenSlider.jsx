"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * The product screens of one case study, shown in a single frame.
 *
 * The page used to lay the screens out as separate cards -- five for
 * ShopAgent, two for ChadBot -- so a case study was a long scroll of
 * near-identical boxes, and the reader had to hold the project in their head
 * while scrolling past it. One frame reads as a product being demonstrated.
 *
 * The track is a native scroll-snap container: a swipe on a phone works with
 * no JavaScript at all, and the arrows just scroll it. The active index is
 * measured from the scroll position, so the counter, the caption and the tab
 * rail can never disagree with what is actually on screen.
 */

const pad = (value) => String(value).padStart(2, "0");

export default function ScreenSlider({ images, projectName }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const count = images.length;

  /** Scroll so that the given slide sits in the middle of the frame. */
  const goTo = useCallback(
    (target) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = (target + count) % count;
      const slide = track.children[clamped];
      if (!slide) return;
      track.scrollTo({
        left: slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2,
        behavior: "smooth",
      });
    },
    [count]
  );

  /** The slide closest to the middle of the frame is the one being read. */
  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const middle = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let closestDistance = Infinity;
    for (let i = 0; i < track.children.length; i += 1) {
      const slide = track.children[i];
      const centre = slide.offsetLeft + slide.clientWidth / 2;
      const distance = Math.abs(centre - middle);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = i;
      }
    }
    setIndex((current) => (current === closest ? current : closest));
  }, []);

  // Track the scroll position, throttled to one measurement per frame.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        sync();
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  // Warm the neighbours so an arrow press never lands on an empty frame.
  useEffect(() => {
    [index - 1, index + 1].forEach((offset) => {
      const neighbour = images[(index + offset + count) % count];
      if (!neighbour) return;
      const preload = new Image();
      preload.src = neighbour.src;
    });
  }, [index, images, count]);

  const onKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(count - 1);
    }
  };

  const active = images[index];

  return (
    <div
      className="pf-slider"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${projectName} product screens`}
    >
      <div className="pf-slider-frame">
        <div className="pf-slider-chrome">
          <span className="pf-slider-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="pf-slider-caption">{active?.caption}</span>
          <span className="pf-slider-tools">
            <span className="pf-slider-counter">
              <b>{pad(index + 1)}</b>
              {` / ${pad(count)}`}
            </span>
          </span>
        </div>

        <div
          className="pf-slider-track"
          ref={trackRef}
          onKeyDown={onKeyDown}
          tabIndex={0}
          role="group"
          aria-label={`${projectName} screens, use the arrow keys to browse`}
        >
          {images.map((image, imageIndex) => (
            <figure
              className="pf-slide"
              key={image.src}
              aria-hidden={imageIndex === index ? "false" : "true"}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading={imageIndex === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </figure>
          ))}
        </div>

        {/*
          The arrows sit on the edges of the frame, not in the bar above it:
          the site header is sticky, and when the frame sits high in the
          viewport the bar -- and any control in it -- ends up underneath it.
        */}
        <button
          type="button"
          className="pf-slider-nav pf-slider-nav--prev"
          onClick={() => goTo(index - 1)}
          aria-label="Previous screen"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M10 3 5 8l5 5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          className="pf-slider-nav pf-slider-nav--next"
          onClick={() => goTo(index + 1)}
          aria-label="Next screen"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="m6 3 5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="pf-slider-tabs" role="tablist" aria-label="Screens">
        {images.map((image, imageIndex) => (
          <button
            type="button"
            role="tab"
            aria-selected={imageIndex === index}
            className="pf-slider-tab"
            key={image.src}
            onClick={() => goTo(imageIndex)}
          >
            <span>{pad(imageIndex + 1)}</span>
            {image.caption}
          </button>
        ))}
      </div>
    </div>
  );
}
