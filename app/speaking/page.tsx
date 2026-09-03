import type { Metadata } from "next";
import Link from "next/link";
import { getPage } from "@/lib/payload";
import { SPEAKING_TOPICS, SPEAKING_FORMATS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Speaking",
  description: "Keynotes, panels, and workshops on sovereign ops, AI agent architecture, and situational awareness infrastructure.",
};

export default async function Speaking() {
  const page = await getPage("speaking");

  return (
    <>
      <section style={{ paddingTop: "calc(68px + 5rem)", paddingBottom: "4rem", paddingLeft: "clamp(1.5rem,5vw,4rem)", paddingRight: "clamp(1.5rem,5vw,4rem)" }}>
        <div className="container">
          <div className="tag">Speaking</div>
          <h1>I talk about what<br /><span className="accent">I actually build</span></h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "560px", marginTop: "1rem", marginBottom: "2.5rem" }}>
            {page?.excerpt || "Keynotes, panels, and workshops on sovereign ops, AI agent architecture, and the future of situational awareness infrastructure."}
          </p>
          <Link href="/contact" className="btn-primary">Book Me →</Link>
        </div>
      </section>

      <div className="divider" />

      <section style={{ background: "var(--black-2)" }}>
        <div className="container">
          <div className="tag">Topics</div>
          <h2 style={{ marginBottom: "2.5rem" }}>What I speak on</h2>
          <div className="card-grid">
            {SPEAKING_TOPICS.map(c => (
              <div className="card" key={c.title}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{c.icon}</div>
                <h3 style={{ marginBottom: "0.6rem" }}>{c.title}</h3>
                <p style={{ fontSize: "0.9rem" }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section>
        <div className="container">
          <div className="tag">Formats</div>
          <h2 style={{ marginBottom: "2.5rem" }}>How I show up</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.5rem" }}>
            {SPEAKING_FORMATS.map(c => (
              <div key={c.title} style={{ padding: "2rem", background: "var(--black-3)", border: "1px solid var(--line)", borderRadius: "8px" }}>
                <h3 style={{ marginBottom: "0.3rem" }}>{c.title}</h3>
                <div style={{ fontSize: "0.78rem", color: "var(--red-bright)", marginBottom: "1rem" }}>{c.duration}</div>
                <p style={{ fontSize: "0.9rem" }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/contact" className="btn-primary">Book a Speaking Engagement →</Link>
          </div>
        </div>
      </section>

      <div className="divider" />
      <footer>
        <p>© 2026 Zeus DeLaCruz.</p>
        <Link href="/contact" className="btn-primary">Get in touch →</Link>
      </footer>
    </>
  );
}
