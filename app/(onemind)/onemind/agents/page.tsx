import Link from "next/link";
import { agents } from "@/data/agents";

const pillars = [
  { icon: "🧠", label: "Intelligence" },
  { icon: "⚡", label: "Operations" },
  { icon: "🔒", label: "Security" },
  { icon: "💰", label: "Finance" },
  { icon: "📝", label: "Content" },
  { icon: "✨", label: "Creative" },
  { icon: "📡", label: "Sensors" },
  { icon: "💪", label: "Wellness" },
  { icon: "🔗", label: "Integration" },
] as const;

export default function AgentsIndexPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: "10rem", paddingBottom: "4rem", background: "#050607", position: "relative", overflow: "hidden" }}>
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 10 }}>
          <span className="tag">AI Agent Directory</span>
          <h1 className="display-lg" style={{ marginTop: "1.5rem", maxWidth: "700px" }}>
            The <span style={{ color: "#b91c1c" }}>12-agent</span> mesh
          </h1>
          <p className="subheading" style={{ marginTop: "1rem", maxWidth: "600px" }}>
            Every agent on the OneMind fabric — their role, capabilities, how to connect,
            and what they're for. Browse by pillar or search by name.
          </p>
        </div>

        {/* Pillar filter */}
        <div style={{ position: "relative", zIndex: 10, marginTop: "2rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {pillars.map((p) => (
            <Link
              key={p.icon}
              href={`/agents?pillar=${p.label.toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              <span className="tag" style={{ textDecoration: "none", borderColor: "#8B0000" }}>
                {p.icon} {p.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: "#0a0c0e" }}>
        <div className="container-wide">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {agents.map((agent) => (
              <Link
                key={agent.slug}
                href={`/agents/${agent.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div className="card" style={{ position: "relative", padding: "2rem", overflow: "hidden" }}>
                  {/* Status badge */}
                  <div style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: agent.status === "live" ? "#22c55e" : agent.status === "development" ? "#f59e0b" : "#6b7280",
                    background: agent.status === "live" ? "rgba(34,197,94,0.1)" : agent.status === "development" ? "rgba(245,158,11,0.1)" : "rgba(107,114,128,0.1)",
                    border: agent.status === "live" ? "1px solid rgba(34,197,94,0.3)" : agent.status === "development" ? "1px solid rgba(245,158,11,0.3)" : "1px solid rgba(107,114,128,0.2)",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "0.25rem",
                  }}>
                    {agent.status.toUpperCase()}
                  </div>

                  <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>
                    {agent.callsign}
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", lineHeight: 1.6, marginBottom: "1rem" }}>
                    {agent.tagline}
                  </p>
                  <div style={{ fontSize: "0.72rem", color: "#6b7280", fontFamily: "monospace", marginBottom: "1rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {agent.busAddress}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>
                    {agent.pillar} · {agent.framework}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
