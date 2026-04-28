export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "2rem",
        fontSize: "0.8rem",
        color: "var(--text3)",
        borderTop: "1px solid var(--border)",
        letterSpacing: "0.05em",
        background: "var(--bg)",
      }}
    >
      Conçu &amp; développé par{" "}
      <span style={{ color: "var(--accent)", fontWeight: 500 }}>
        MARA Mahavonjy
      </span>{" "}
      · Full Stack JavaScript Developer · Antananarivo, Madagascar
    </footer>
  );
}