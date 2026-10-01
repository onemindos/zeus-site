export default function ContactHero() {
  return (
    <section
      style={{
        paddingTop: "10rem",
        paddingBottom: "4rem",
        paddingLeft: "clamp(1.5rem, 5vw, 6rem)",
        paddingRight: "clamp(1.5rem, 5vw, 6rem)",
        background: "#050607",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }} />
      <div className="bg-radial-red" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      <div className="container-wide" style={{ position: "relative", zIndex: 10 }}>
        <span className="tag">Contact</span>
        <h1 className="display-lg" style={{ marginTop: "1.5rem", maxWidth: "700px" }}>
          Let's build<br />
          <span style={{ color: "#b91c1c" }}>something real</span>
        </h1>
        <p className="subheading" style={{ marginTop: "1rem", maxWidth: "560px" }}>
          Enterprise deployments, training engagements, partnerships, or just getting started —
          we respond to every message within 24 hours.
        </p>
      </div>
    </section>
  );
}
