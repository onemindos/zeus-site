import Link from "next/link";

const capabilities = [
  "Unlimited connections",
  "On-premise / air-gapped deployment",
  "Custom TAK Server federation",
  "SSO / Active Directory / LDAP",
  "NDAA / ITAR-aware architecture",
  "Custom AI agent development",
  "ArcGIS / CAD integration",
  "24/7 priority support",
  "Dedicated onboarding engineer",
  "NDA-ready custom integrations",
];

export default function ContactEnterprise() {
  return (
    <section className="section" style={{ background: "#0a0c0e" }}>
      <div className="container-wide">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
          padding: "3rem",
          background: "#111418",
          border: "1px solid rgba(139,0,0,0.2)",
          borderRadius: "1rem",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Glow */}
          <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "radial-gradient(ellipse at 100% 50%, rgba(139,0,0,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <span className="tag-solid">Enterprise & Government</span>
            <h2 className="display-md" style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
              Mission requirements,<br />
              <span style={{ color: "#b91c1c" }}>met directly.</span>
            </h2>
            <p style={{ color: "#6b7280", lineHeight: 1.75, marginBottom: "2rem", fontSize: "1rem" }}>
              Purpose-built deployments for law enforcement, defense, and government agencies.
              We work directly with your team to architect solutions that meet your operational
              and compliance requirements — on-premise, air-gapped, or hybrid.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="mailto:zeus@onemindos.com?subject=Enterprise%20Inquiry" className="btn-primary">
                Start a conversation →
              </Link>
              <Link href="/platform" className="btn-ghost">
                Platform overview
              </Link>
            </div>
          </div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#6b7280", marginBottom: "1.25rem" }}>
              Enterprise capabilities
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem" }}>
              {capabilities.map((c) => (
                <div key={c} style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.82rem", color: "#6b7280" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8B0000", flexShrink: 0 }} />
                  {c}
                </div>
              ))}
            </div>

            {/* Response time badge */}
            <div style={{ marginTop: "2rem", display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.875rem 1.25rem", background: "rgba(139,0,0,0.1)", border: "1px solid rgba(139,0,0,0.2)", borderRadius: "0.5rem" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px rgba(34,197,94,0.6)", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "white" }}>Direct response within 24 hours</div>
                <div style={{ fontSize: "0.72rem", color: "#6b7280" }}>No sales queues. Talk to the builder.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
