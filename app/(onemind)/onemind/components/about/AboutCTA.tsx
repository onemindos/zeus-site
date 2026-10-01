import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="section" style={{ background: "#050607", position: "relative", overflow: "hidden" }}>
      <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }} />
      <div className="bg-radial-red" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      <div className="container-tight" style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
        <span className="tag">Get Involved</span>
        <h2 className="display-md" style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
          Build with us
        </h2>
        <p className="subheading" style={{ maxWidth: "540px", margin: "0 auto 2.5rem" }}>
          Whether you're deploying a sovereign ops stack, learning the Sovereign Stack curriculum,
          or exploring an enterprise engagement — start here.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="https://community.onemindos.com" target="_blank" className="btn-primary">
            Join the Community →
          </Link>
          <Link href="/contact" className="btn-ghost">
            Talk to us
          </Link>
          <Link href="https://github.com/onemindos" target="_blank" className="btn-ghost">
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
