"use client";
import Link from "next/link";

const channels = [
  {
    icon: "📧",
    label: "Email",
    value: "zeus@onemindos.com",
    href: "mailto:zeus@onemindos.com",
    desc: "Direct line. Response within 24 hours.",
  },
  {
    icon: "🌐",
    label: "Community",
    value: "community.onemindos.com",
    href: "https://community.onemindos.com",
    desc: "Join the founding cohort. Courses, live calls, direct access.",
  },
  {
    icon: "💻",
    label: "GitHub",
    value: "github.com/onemindos",
    href: "https://github.com/onemindos",
    desc: "Open-source repos, issues, and contributions.",
  },
  {
    icon: "🔴",
    label: "Live Platform",
    value: "atoc.onemindos.dev",
    href: "https://atoc.onemindos.dev",
    desc: "CloudTAK running live on the OneMind fabric.",
  },
];

const faqs = [
  {
    q: "Do you work with government and defense teams?",
    a: "Yes. We scope purpose-built deployments for law enforcement, military, and federal agencies — air-gapped, on-premise, and compliance-aligned (NDAA, ITAR-aware, CMMC-aligned).",
  },
  {
    q: "Can I bring my own TAK Server?",
    a: "Yes. OneMind works with any TAK Server — government, OpenTAKServer, Sit(X), or any CoT-compliant endpoint. We extend it, not replace it.",
  },
  {
    q: "What's the minimum engagement for enterprise?",
    a: "We start with a scoping call to understand your team, use case, and compliance requirements. Engagements typically start at $2,500 for training and go up from there for full deployments.",
  },
  {
    q: "Is the platform open-source?",
    a: "The core fabric components are open-source (MIT). The AI agent mesh, education curriculum, and enterprise support are commercial offerings.",
  },
];

export default function ContactChannels() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

      {/* Direct channels */}
      <div>
        <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#6b7280", marginBottom: "1.25rem" }}>
          Direct channels
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {channels.map((c) => (
            <Link
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1.25rem", background: "#0a0c0e", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "0.5rem", textDecoration: "none", transition: "border-color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(139,0,0,0.4)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)")}
            >
              <div style={{ width: 44, height: 44, borderRadius: "0.5rem", background: "#111418", border: "1px solid rgba(139,0,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>
                {c.icon}
              </div>
              <div>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#6b7280", marginBottom: "0.2rem" }}>{c.label}</div>
                <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#f5f5f5", marginBottom: "0.3rem" }}>{c.value}</div>
                <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>{c.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div>
        <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#6b7280", marginBottom: "1.25rem" }}>
          Common questions
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqs.map((f) => (
            <div key={f.q} style={{ padding: "1.25rem", background: "#0a0c0e", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "0.5rem" }}>
              <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "white", marginBottom: "0.5rem" }}>{f.q}</div>
              <p style={{ fontSize: "0.85rem", color: "#6b7280", lineHeight: 1.65 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
