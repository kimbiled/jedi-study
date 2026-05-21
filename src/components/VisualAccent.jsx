export function VisualAccent({ title, label, variant = "blue", items = [] }) {
  return (
    <div
      className={`visual-accent ${variant}`}
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) minmax(220px, 320px)",
        gap: 14,
        minHeight: 260,
        padding: 18,
        borderRadius: 28,
      }}
    >
      <div
        className="visual-accent-poster"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: 224,
          padding: 22,
          borderRadius: 22,
        }}
      >
        <span style={{ display: "block" }}>{label}</span>
        <strong style={{ display: "block" }}>{title}</strong>
      </div>
      <div className="visual-accent-stack" style={{ display: "grid", gap: 8 }}>
        {items.map((item) => (
          <span key={item} style={{ display: "flex", alignItems: "center" }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
