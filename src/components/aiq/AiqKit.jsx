import Link from "next/link";

/*
 * Shared building blocks for the AiLogiQs "AI WhatsApp sales agent" sections.
 * Used by /service-details. All visual styling lives in public/css/overrides.css
 * under the .aiq-* prefix (white surfaces, royal-blue accents, no yellow).
 *
 * CURRENTLY UNREFERENCED: PhoneMock, ProductRow and OrderCard.
 *
 * Those three built the "One chat. One confirmed sale." chat out of markup.
 * That section now uses a supplied artwork export (agent-chat.webp) instead,
 * because it carries WhatsApp's real type, spacing and bubble tails, which
 * these could only approximate.
 *
 * They are kept rather than deleted because the artwork bakes its copy in:
 * changing a price or a product name there means a new export, whereas these
 * are editable in place. If the markup approach is not coming back, this block
 * and the .aiq-phone / .aiq-prod / .aiq-order rules can go together -- note
 * that .aiq-phone-mic is still live, used by the voice-note panel.
 */

export function RobotMark({ size = 44, tone = "blue" }) {
  const body = tone === "blue" ? "#2B5CF6" : "#9DB8FF";
  const ink = tone === "blue" ? "#FFFFFF" : "#2B5CF6";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="aiq-robot"
    >
      <line x1="32" y1="4" x2="32" y2="13" stroke={body} strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="4" r="3" fill={ink} />
      <rect x="5" y="22" width="8" height="16" rx="4" fill={body} />
      <rect x="51" y="22" width="8" height="16" rx="4" fill={body} />
      <rect x="12" y="12" width="40" height="36" rx="13" fill={body} />
      <rect x="18" y="21" width="8" height="9" rx="4" fill={ink} />
      <rect x="38" y="21" width="8" height="9" rx="4" fill={ink} />
      <path d="M23 37c2.5 3.2 5.6 4.8 9 4.8s6.5-1.6 9-4.8" stroke={ink} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneMock({ title, children, input = true }) {
  return (
    <div className="aiq-phone">
      <div className="aiq-phone-head">
        <span className="aiq-phone-ava">
          <RobotMark size={34} />
        </span>
        <span className="aiq-phone-meta">
          <b>{title}</b>
          <i>
            <em className="aiq-dot" /> AI AGENT · ONLINE
          </i>
        </span>
      </div>
      <div className="aiq-phone-body">{children}</div>
      {input ? (
        <div className="aiq-phone-input">
          <span className="aiq-phone-field">Type a message</span>
          <span className="aiq-phone-mic">
            <i className="fa-solid fa-microphone" />
          </span>
        </div>
      ) : null}
    </div>
  );
}

export function Time({ children }) {
  return <p className="aiq-time">{children}</p>;
}

export function Bubble({ dir = "in", className = "", children }) {
  return <div className={`aiq-bubble aiq-bubble-${dir} ${className}`.trim()}>{children}</div>;
}

/**
 * A product card inside the chat mockup.
 *
 * `image` is optional on purpose. Without it the tile falls back to the
 * dashed placeholder every other image slot on the page uses, so a card can be
 * added before its photograph exists without the layout shifting.
 */
export function ProductRow({ name, price, stock, image, alt }) {
  return (
    <div className="aiq-prod">
      {image ? (
        <img className="aiq-prod-img" src={image} alt={alt || name} />
      ) : (
        <span className="aiq-prod-img" />
      )}
      <span className="aiq-prod-meta">
        <b>{name}</b>
        <i>{price}</i>
        {stock ? <u>{stock}</u> : null}
      </span>
    </div>
  );
}

export function OrderCard({ name, price }) {
  return (
    <div className="aiq-order">
      <span className="aiq-order-title">Order summary</span>
      <p className="aiq-order-row">
        {name} <b>{price}</b>
      </p>
      <p className="aiq-order-row">
        Delivery <b>Free</b>
      </p>
      <span className="aiq-order-actions">
        <b className="aiq-order-confirm">Confirm</b>
        <b className="aiq-order-edit">Edit</b>
      </span>
    </div>
  );
}

export function OkLine({ children }) {
  return (
    <p className="aiq-ok">
      <i className="fa-solid fa-check" /> {children}
    </p>
  );
}

export function ImageSpace({ ratio = "4 / 3", label }) {
  return <div className="aiq-img-ph" style={{ aspectRatio: ratio }} data-label={label || "Image"} />;
}

export function SectionHead({ eyebrow, title, accent, center = false, intro }) {
  return (
    <div className={center ? "aiq-head text-center mx-auto" : "aiq-head"}>
      <p className="aiq-eyebrow">
        <RobotMark size={28} />
        {eyebrow}
      </p>
      <h2>
        {title} <span className="aiq-accent">{accent}</span>
      </h2>
      {intro ? <p className="aiq-intro">{intro}</p> : null}
    </div>
  );
}

export function Waveform({ bars = 22 }) {
  const heights = [10, 18, 26, 14, 30, 22, 12, 24, 32, 18, 10, 16, 28, 20, 34, 14, 24, 12, 20, 28, 16, 10];
  return (
    <span className="aiq-wave" aria-hidden="true">
      {heights.slice(0, bars).map((h, i) => (
        <i key={i} style={{ height: `${h}px` }} />
      ))}
    </span>
  );
}

export function CtaLink({ href, children }) {
  return (
    <Link href={href} className="aiq-link">
      {children}
      <i className="fa-sharp fa-regular fa-arrow-up-right" />
    </Link>
  );
}
