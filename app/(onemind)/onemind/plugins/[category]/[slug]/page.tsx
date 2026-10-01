import Link from "next/link";
import { plugins } from "@/data/plugins";
import { notFound } from "next/navigation";

interface Props { params: { category: string; slug: string }; }

export function generateStaticParams() {
  return plugins.map((p) => ({
    category: p.category,
    slug: p.slug,
  }));
}

export default function PluginPage({ params }: Props) {
  const plugin = plugins.find((p) => p.category === params.category && p.slug === params.slug);
  if (!plugin) return notFound();

  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingTop: "10rem", paddingBottom: "4rem", background: "#050607" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
          <div style={{ fontFamily: "monospace", fontSize: "3rem", fontWeight: 900, color: "#8B0000", opacity: 0.5 }}>
            {plugin.name.charAt(0)}
          </div>
          <div>
            <div style={{ fontSize: "1.75rem", fontWeight: 900, color: "white" }}>{plugin.name}</div>
            <div style={{ fontSize: "0.9rem", color: "#6b7280" }}>{plugin.description}</div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1rem" }}>
          <span className="tag" style={{
            color: plugin.status === "live" ? "#22c55e" : plugin.status === "development" ? "#f59e0b" : "#6b7280",
            borderColor: plugin.status === "live" ? "rgba(34,197,94,0.3)" : plugin.status === "development" ? "rgba(245,158,11,0.3)" : "rgba(107,114,128,0.2)",
          }}>
            {plugin.status.toUpperCase()}
          </span>
          <span className="tag" style={{ borderColor: "rgba(255,255,255,0.1)", color: "#6b7280" }}>{plugin.license}</span>
          {plugin.repo && (
            <Link href={`https://github.com/${plugin.repo}`} target="_blank" className="btn-outline-red" style={{ fontSize: "0.8rem", padding: "0.375rem 1rem" }}>
              View Repo
            </Link>
          )}
        </div>

        {plugin.repo && (
          <div style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "#6b7280", background: "#0a0c0e", border: "1px solid rgba(255,255,255,0.06)", padding: "0.5rem", borderRadius: "0.25rem", marginTop: "1rem" }}>
            {plugin.location}
          </div>
        )}
      </section>

      {/* Content */}
      <section className="section" style={{ background: "#0a0c0e" }}>
        <div className="container-wide" style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: "4rem", alignItems: "start" }}>

          {/* Left: capabilities */}
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <span className="tag-solid" style={{ background: "#8B0000" }}>Capabilities</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {plugin.capabilities.map((cap) => (
                <div key={cap} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#b91c1c", flexShrink: 0, marginTop: "0.5rem" }} />
                  <p style={{ fontSize: "0.95rem", color: "#6b7280" }}>{cap}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: build steps */}
          {plugin.buildSteps.length > 0 && (
            <div style={{ background: "#050607", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "0.5rem", padding: "1.5rem" }}>
              <div style={{ marginBottom: "1.25rem" }}>
                <span className="tag-solid" style={{ background: "#8B0000" }}>Build / Configure</span>
              </div>
              <div style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "#22c55e", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>
                {plugin.buildSteps.map((step) => (
                  <div key={step}>{step}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
