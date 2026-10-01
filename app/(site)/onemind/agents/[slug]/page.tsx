import { agents } from "@/data/agents";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props { params: Promise<{ slug: string }>; }

export function generateStaticParams() {
  return agents.map((a) => ({ slug: a.slug }));
}

export default async function AgentPage({ params }: Props) {
  const { slug } = await params;
  const agent = agents.find((a) => a.slug === slug);
  if (!agent) return notFound();

  const related = agents.filter((a) => agent.relatedAgents.includes(a.slug) && a.slug !== agent.slug);

  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingTop: "10rem", paddingBottom: "4rem", background: "#050607", position: "relative", overflow: "hidden" }}>
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 10 }}>
          {/* Status */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: agent.status === "live" ? "#22c55e" : agent.status === "development" ? "#f59e0b" : "#6b7280", boxShadow: agent.status === "live" ? "0 0 6px rgba(34,197,94,0.6)" : agent.status === "development" ? "0 0 6px rgba(245,158,11,0.6)" : "none" }} />
            <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: agent.status === "live" ? "#22c55e" : agent.status === "development" ? "#f59e0b" : "#6b7280" }}>
              {agent.status.toUpperCase()}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <div style={{ fontFamily: "monospace", fontSize: "4rem", fontWeight: 900, color: "#8B0000", opacity: 0.5 }}>{agent.name.slice(0, 1)}</div>
            <div>
              <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "white" }}>{agent.callsign}</div>
              <div style={{ fontSize: "0.9rem", color: "#6b7280" }}>{agent.role}</div>
            </div>
          </div>

          <p className="subheading" style={{ maxWidth: "640px", marginTop: "1rem" }}>{agent.tagline}</p>

          <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {agent.repo && (
              <Link href={`https://github.com/${agent.repo}`} target="_blank" className="btn-outline-red" style={{ fontSize: "0.85rem" }}>
                View Repo →
              </Link>
            )}
            <div style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "#6b7280", background: "#0a0c0e", border: "1px solid rgba(255,255,255,0.08)", padding: "0.5rem 0.75rem", borderRadius: "0.25rem" }}>
              {agent.busAddress}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section" style={{ background: "#0a0c0e" }}>
        <div className="container-wide" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "4rem", alignItems: "start" }}>

          {/* Left: What it does + How it works */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>

            {/* What it does */}
            <div>
              <div style={{ marginBottom: "1.5rem" }}>
                <span className="tag-solid" style={{ background: "#8B0000" }}>What it does</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {agent.capabilities.map((cap) => (
                  <div key={cap} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#b91c1c", flexShrink: 0, marginTop: "0.5rem" }} />
                    <p style={{ fontSize: "0.95rem", color: "#6b7280", lineHeight: 1.65 }}>{cap}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How it works */}
            <div>
              <div style={{ marginBottom: "1.5rem" }}>
                <span className="tag-solid" style={{ background: "#8B0000" }}>How it works</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {agent.howItWorks.map((step) => (
                  <div key={step.title} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                    <div style={{ width: 40, fontFamily: "monospace", fontSize: "0.75rem", fontWeight: 700, color: "#8B0000", flexShrink: 0, paddingTop: "0.25rem" }}>
                      {step.title}
                    </div>
                    <p style={{ fontSize: "0.9rem", color: "#6b7280", lineHeight: 1.7 }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Use cases */}
            <div>
              <div style={{ marginBottom: "1.5rem" }}>
                <span className="tag-solid" style={{ background: "#8B0000" }}>Use cases</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {agent.useCases.map((uc) => (
                  <div key={uc.title} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "1rem", alignItems: "start" }}>
                    <div>
                      <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "white", marginBottom: "0.375rem" }}>{uc.title}</div>
                      <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>{uc.desc}</p>
                    </div>
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#b91c1c", border: "1px solid #8B0000", padding: "3px 8px", borderRadius: 2, whiteSpace: "nowrap" }}>
                      {uc.user}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Connect + Tools */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

            {/* How to connect */}
            <div style={{ background: "#050607", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "0.5rem", padding: "1.5rem" }}>
              <div style={{ marginBottom: "1.25rem" }}>
                <span className="tag-solid" style={{ background: "#8B0000" }}>Connect</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {agent.connect.map((c, i) => (
                  <div key={i}>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>{c.label}</div>
                    <p style={{ fontSize: "0.8rem", color: "#6b7280", marginBottom: "0.75rem" }}>{c.desc}</p>
                    <div style={{ fontFamily: "monospace", fontSize: "0.72rem", background: "#0a0c0e", padding: "0.625rem 0.75rem", borderRadius: "0.25rem", color: "#22c55e", overflow: "auto", wordBreak: "break-all" }}>
                      {c.example}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div style={{ background: "#050607", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "0.5rem", padding: "1.5rem" }}>
              <div style={{ marginBottom: "1.25rem" }}>
                <span className="tag-solid" style={{ background: "#8B0000" }}>Tools</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {agent.tools.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      fontSize: "0.75rem",
                      padding: "0.375rem 0.75rem",
                      background: "#0a0c0e",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "0.375rem",
                      color: "#6b7280",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related agents */}
      {related.length > 0 && (
        <section className="section" style={{ background: "#050607" }}>
          <div className="container-wide">
            <div style={{ marginBottom: "1.5rem" }}>
              <span className="tag-solid" style={{ background: "#8B0000" }}>Related agents</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
              {related.map((r) => (
                <Link key={r.slug} href={`/agents/${r.slug}`} style={{ textDecoration: "none" }}>
                  <div className="card" style={{ padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "white", marginBottom: "0.375rem" }}>{r.callsign}</div>
                    <div style={{ fontSize: "0.72rem", color: "#6b7280" }}>{r.role}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
