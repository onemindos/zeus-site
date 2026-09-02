import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Speaking",
  description: "Keynotes, panels, and workshops on sovereign ops, AI agent architecture, and situational awareness infrastructure.",
};

const TOPICS = [
  { icon: "🧠", title: "The Sovereign Stack", desc: "Building self-hosted operations infrastructure — NATS, TAK, AI agents, and the closed-loop SA platform." },
  { icon: "🤖", title: "AI Agent Orchestration", desc: "Multi-agent meshes on NATS: how 12 autonomous agents collaborate in real time without human routing." },
  { icon: "🌐", title: "The TAK Ecosystem", desc: "Why TAK is the most important open-source platform most people have never heard of — and what comes next." },
  { icon: "🏡", title: "Sovereign Infrastructure", desc: "From homestead to enterprise: building resilient, privacy-first systems that don't depend on cloud vendors." },
  { icon: "📡", title: "Sensor Fusion & Situational Awareness", desc: "Turning raw data from drones, sensors, and cameras into decision-grade intelligence." },
  { icon: "💰", title: "Building in Public", desc: "The economics of radical transparency — how documenting the build IS the product." },
];

const FORMATS = [
  { title: "Keynote", duration: "30–60 min", desc: "High-signal, story-driven talk with live demos where possible. Conferences, summits, corporate events." },
  { title: "Workshop", duration: "Half/Full day", desc: "Hands-on build session. Attendees leave with a running system, not just notes." },
  { title: "Panel", duration: "45–90 min", desc: "Operational perspective on AI, autonomy, and resilient systems. No fluff." },
  { title: "Podcast", duration: "60–90 min", desc: "Deep technical conversation. I go wherever the thread leads." },
];

export default function Speaking() {
  return (
    <>
      <section style={{ paddingTop: "calc(68px + 5rem)", paddingBottom: "4rem", paddingLeft: "clamp(1.5rem,5vw,4rem)", paddingRight: "clamp(1.5rem,5vw,4rem)" }}>
        <div className="container">
          <div className="tag">Speaking</div>
          <h1>I talk about what<br /><span className="accent">I actually build</span></h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "560px", marginTop: "1rem", marginBottom: "2.5rem" }}>
            Keynotes, panels, and workshops on sovereign ops, AI agent architecture, and the future of situational awareness infrastructure.
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
            {TOPICS.map(c => (
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
            {FORMATS.map(c => (
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
