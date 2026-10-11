export default function Logo({ variant = "light", className = "", accent = "#EFFB53" }) {
  const color = variant === "dark" ? "#161447" : "#FFFFFF";
  return (
    <span className={`ailogiqs-logo ${className}`} style={{ color }}>
      Ai<span style={{ color: accent }}>Logi</span>Qs
    </span>
  );
}
