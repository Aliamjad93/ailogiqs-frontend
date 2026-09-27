export default function Logo({ variant = "light", className = "" }) {
  const color = variant === "dark" ? "#161447" : "#FFFFFF";
  return (
    <span className={`ailogiqs-logo ${className}`} style={{ color }}>
      Ai<span style={{ color: "#EFFB53" }}>Logi</span>Qs
    </span>
  );
}
