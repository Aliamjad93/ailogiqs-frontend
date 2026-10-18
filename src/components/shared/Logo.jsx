/**
 * The AiLogiQs wordmark: "Ai" and "Qs" in the inherited colour, "Logi" in the
 * accent.
 *
 * `accent` defaults to the template's theme yellow (#EFFB53), which is what the
 * black/yellow site wants everywhere. The AI-service pages pass white instead --
 * see SiteHeader's `logoAccent` -- because their header is indigo and a yellow
 * wordmark there would read as a leftover from the template.
 *
 * The colour is written inline rather than through a class, so CSS cannot change
 * it without `!important`: change the prop, not a stylesheet.
 */
export default function Logo({ variant = "light", className = "", accent = "#EFFB53" }) {
  const color = variant === "dark" ? "#161447" : "#FFFFFF";
  return (
    <span className={`ailogiqs-logo ${className}`} style={{ color }}>
      Ai<span style={{ color: accent }}>Logi</span>Qs
    </span>
  );
}
