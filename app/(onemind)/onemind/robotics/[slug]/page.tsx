import { robots } from "@/data/robots";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "../../components/Footer";

interface Props { params: { slug: string }; }

export function generateStaticParams() {
  return robots.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: Props) {
  const r = robots.find((x) => x.slug === params.slug);
  return { title: r ? `${r.name} — OneMind Robotics` : "Not Found" };
}

const typeIcon: Record<string, string> = { aerial: "🚁", ground: "🤖", aquatic: "🌊", fixed: "📡", simulation: "⚙️" };
const statusColor: Record<string, string> = { live: "#22c55e", development: "#f59e0b", planned: "#6b7280" };

export default function RobotDetailPage({ params }: Props) {
  const r = robots.find((x) => x.slug === params.slug);
  if (!r) notFound();

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "9rem", paddingBottom: "3rem", background: "#050607", borderBottom: "1px solid #1a1a1a" }}>
        <div className="container-wide">
          <Link href="/robotics" style={{ fontSize: "0.8rem", color: "#6b7280", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.375rem", marginBottom: "2rem" }}>
            ← All Systems
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "1.25rem" }}>
            <span style={{ fontSize: "3rem" }}>{typeIcon[r.type]}</span>
            <div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.5rem" }}>
                <span className="tag" style={{ color: statusColor[r.status], borderColor: `${statusColor[r.status]}44` }}>
                  {r.status.toUpperCase()}
                </span>
                <span className="tag">{r.type.toUpperCase()}</span>
              </div>
              <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "white", lineHeight: 1.1 }}>{r.name}</h1>
            </div>
          </div>
          <p style={{ fontSize: "1.05rem", color: "#b91c1c", marginBottom: "1rem" }}>{r.tagline}</p>
          <p style={{ color: "#9ca3af", maxWidth: "700px", lineHeight: 1.7 }}>{r.description}</p>
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem", flexWrap: "wrap" }}>
            {r.repo && (
              <a href={`https://github.com/${r.repo}`} target="_blank" rel="noopener noreferrer" className="btn-red" style={{ fontSize: "0.85rem" }}>
                View Repo →
              </a>
            )}
            <Link href="/nats" className="btn-outline-red" style={{ fontSize: "0.85rem" }}>NATS Bus →</Link>
            <Link href="/agents" className="btn-secondary" style={{ fontSize: "0.85rem" }}>Agent Mesh →</Link>
          </div>
        </div>
      </section>

      {/* Main grid */}
      <section style={{ background: "#0a0c0e", padding: "4rem 0" }}>
        <div className="container-wide" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
          {/* Left */}
          <div>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "white", marginBottom: "1.25rem" }}>Capabilities</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {r.capabilities.map((cap) => (
                <li key={cap} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.875rem", color: "#9ca3af" }}>
                  <span style={{ color: "#b91c1c", marginTop: "0.1rem", flexShrink: 0 }}>▸</span>
                  {cap}
                </li>
              ))}
            </ul>

            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "white", margin: "2.5rem 0 1.25rem" }}>Protocols</h2>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {r.protocols.map((p) => (
                <span key={p} style={{ fontSize: "0.78rem", background: "#1a1a1a", color: "#d1d5db", padding: "0.3rem 0.75rem", borderRadius: "0.25rem", border: "1px solid #2a2a2a" }}>{p}</span>
              ))}
            </div>

            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "white", margin: "2.5rem 0 1.25rem" }}>Hardware Required</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {r.hardwareRequired.map((hw) => (
                <li key={hw} style={{ fontSize: "0.83rem", color: "#6b7280" }}>· {hw}</li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "white", marginBottom: "1.25rem" }}>TAK Integration</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {r.takIntegration.map((t) => (
                <li key={t} style={{ display: "flex", gap: "0.75rem", fontSize: "0.875rem", color: "#9ca3af" }}>
                  <span style={{ color: "#22c55e", flexShrink: 0 }}>✓</span>{t}
                </li>
              ))}
            </ul>

            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "white", margin: "2.5rem 0 1rem" }}>NATS Subjects</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {r.natsSubjects.map((s) => (
                <div key={s} style={{ fontFamily: "monospace", fontSize: "0.78rem", color: "#b91c1c", background: "#050607", padding: "0.5rem 0.75rem", borderRadius: "0.375rem", border: "1px solid #1a1a1a" }}>
                  {s}
                </div>
              ))}
            </div>

            {r.location && (
              <>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "white", margin: "2.5rem 0 1rem" }}>Repo Location</h2>
                <div style={{ fontFamily: "monospace", fontSize: "0.78rem", color: "#6b7280", background: "#050607", padding: "0.75rem", borderRadius: "0.375rem", border: "1px solid #1a1a1a" }}>
                  <div style={{ color: "#9ca3af" }}>github.com/{r.repo}</div>
                  <div style={{ marginTop: "0.375rem" }}>→ {r.location}</div>
                </div>
              </>
            )}

            {r.relatedAgents.length > 0 && (
              <>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "white", margin: "2.5rem 0 1rem" }}>Related Agents</h2>
                <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
                  {r.relatedAgents.map((a) => (
                    <Link key={a} href={`/agents/${a}`} style={{ fontSize: "0.8rem", background: "#1a1a1a", color: "#9ca3af", padding: "0.3rem 0.75rem", borderRadius: "0.25rem", textDecoration: "none", border: "1px solid #2a2a2a" }}>
                      {a}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
