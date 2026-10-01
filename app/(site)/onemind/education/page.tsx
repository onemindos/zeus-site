import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Education",
  description: "The Sovereign Stack curriculum — learn by building the actual OneMind infrastructure. NATS, TAK, AI agents, geo stack.",
};

const modules = [
  { num: "01", title: "NATS Fundamentals", desc: "Accounts, subjects, streams, KV — the bus that owns truth." },
  { num: "02", title: "Kubernetes on DOKS", desc: "Namespaces, services, ingress, persistent volumes. The real cluster." },
  { num: "03", title: "TAK Server Deployment", desc: "TAK 5.7 on DOKS, certificate auth, WebTAK, mission ops." },
  { num: "04", title: "AI Agent Mesh", desc: "Hermes profiles, NATS agent protocol, agent-to-agent comms." },
  { num: "05", title: "ClickHouse Time Machine", desc: "Schema design, ingestion pipelines, 10-year retention queries." },
  { num: "06", title: "Geo Stack", desc: "TimescaleDB, Tile38, Valhalla, self-hosted tiles — full GIS sovereign." },
  { num: "07", title: "Cloudflare Zero Trust", desc: "Tunnel ingress, Access policies, no open ports." },
  { num: "08", title: "Live Operations", desc: "Running a real TAK mission. SA, comms, sensor fusion, AI assist." },
];

const tiers = [
  {
    title: "Founding Member",
    price: "$49",
    period: "/mo",
    tag: "Limited",
    features: ["Full community access", "All courses included", "Live cohort calls", "Direct access to Zeus", "Founding member badge"],
    highlight: false,
  },
  {
    title: "Pro Member",
    price: "$99",
    period: "/mo",
    tag: "Most Popular",
    features: ["Everything in Founding", "Priority support", "1:1 office hours (monthly)", "Enterprise license path", "Early access to new modules"],
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "$2,500",
    period: "/engagement",
    tag: "Custom",
    features: ["Private deployment", "Custom curriculum", "Team training (up to 20)", "Ongoing support contract", "Source code access"],
    highlight: false,
  },
];

export default function EducationPage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingTop: "10rem", paddingBottom: "4rem", background: "#050607", position: "relative", overflow: "hidden" }}>
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }} />
        <div className="bg-radial-red" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 10 }}>
          <span className="tag">Education</span>
          <h1 className="display-lg" style={{ marginTop: "1.5rem" }}>
            Build what<br />
            <span style={{ color: "#b91c1c" }}>we actually run</span>
          </h1>
          <p className="subheading" style={{ marginTop: "1rem", maxWidth: "600px" }}>
            The Sovereign Stack curriculum is the OneMind infrastructure documented as a course.
            No toy demos — you ship real NATS clusters, real AI agents, real geo stacks.
          </p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
            <Link href="https://community.onemindos.com" target="_blank" className="btn-primary">Join Community →</Link>
            <Link href="/contact" className="btn-ghost">Enterprise Training</Link>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="section" style={{ background: "#0a0c0e" }}>
        <div className="container-tight">
          <span className="tag">Flagship Course</span>
          <h2 className="display-md" style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>The Sovereign Stack</h2>
          <p style={{ color: "#6b7280", marginBottom: "3rem", maxWidth: "560px" }}>
            8 modules. From zero to a fully operational OneMind fabric. Every command is a real command.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {modules.map((m) => (
              <div key={m.num} style={{ display: "flex", gap: "2rem", alignItems: "flex-start", padding: "1.5rem", background: "#050607", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "0.5rem" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#8B0000", opacity: 0.4, fontVariantNumeric: "tabular-nums", minWidth: "3rem" }}>{m.num}</div>
                <div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.375rem" }}>{m.title}</h3>
                  <p style={{ fontSize: "0.88rem", color: "#6b7280" }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section" style={{ background: "#050607" }}>
        <div className="container-wide">
          <span className="tag">Pricing</span>
          <h2 className="display-md" style={{ marginTop: "1rem", marginBottom: "3rem" }}>One community. Multiple paths.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {tiers.map((p) => (
              <div key={p.title} className="card" style={p.highlight ? { borderColor: "#8B0000", background: "#0a0c0e" } : {}}>
                <span className={p.highlight ? "tag-solid" : "tag"}>{p.tag}</span>
                <h3 style={{ margin: "1rem 0 0.25rem", fontSize: "1.1rem" }}>{p.title}</h3>
                <div style={{ fontSize: "2.25rem", fontWeight: 800, color: "white", margin: "0.75rem 0 1.5rem" }}>
                  {p.price}<span style={{ fontSize: "0.9rem", color: "#6b7280", fontWeight: 400 }}>{p.period}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}>
                  {p.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.88rem", color: "#6b7280" }}>
                      <span style={{ color: "#b91c1c" }}>✓</span>{f}
                    </div>
                  ))}
                </div>
                <Link href="https://community.onemindos.com" target="_blank" className={p.highlight ? "btn-primary" : "btn-ghost"} style={{ justifyContent: "center" }}>
                  Get Started →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
