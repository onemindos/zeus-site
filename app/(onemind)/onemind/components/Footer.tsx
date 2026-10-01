import Link from "next/link";

const footerLinks = {
  Platform: [
    { label: "Overwatch", href: "/platform#overwatch" },
    { label: "TAK Feeds", href: "/platform#feeds" },
    { label: "AI Agents", href: "/platform#agents" },
    { label: "Tactical VMS", href: "/platform#video" },
    { label: "Geo Stack", href: "/platform#geo" },
    { label: "Deployment", href: "/platform#deploy" },
  ],
  Education: [
    { label: "Sovereign Stack Course", href: "/education" },
    { label: "Community", href: "https://community.onemindos.com" },
    { label: "Pricing", href: "/education#pricing" },
    { label: "Enterprise Training", href: "/contact" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "GitHub", href: "https://github.com/onemindos" },
    { label: "Zeus DeLaCruz", href: "https://zeusdelacruz.com" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#0a0c0e", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="container-wide" style={{ padding: "4rem 1.5rem" }}>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "4rem" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{ width: 32, height: 32, background: "#8B0000", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "0.75rem", color: "white" }}>OM</div>
              <span style={{ fontWeight: 900, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
                One<span style={{ color: "#b91c1c" }}>Mind</span> OS
              </span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "#6b7280", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              The open-source sovereign operations platform built on TAK. Self-hosted. Privacy-first. Yours.
            </p>
            <Link
              href="https://github.com/onemindos"
              target="_blank"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, background: "#111418", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, color: "#6b7280", textDecoration: "none", fontSize: "0.75rem", fontWeight: 700 }}
            >
              GH
            </Link>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 style={{ fontSize: "0.7rem", fontWeight: 700, color: "white", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
                {section}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      style={{ fontSize: "0.875rem", color: "#6b7280", textDecoration: "none", transition: "color 0.2s" }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider" style={{ marginBottom: "2rem" }} />

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
          <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>© 2026 OneMind OS. Open-source. MIT License where applicable.</p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/contact" style={{ fontSize: "0.75rem", color: "#6b7280", textDecoration: "none" }}>Contact</Link>
            <Link href="https://github.com/onemindos" target="_blank" style={{ fontSize: "0.75rem", color: "#6b7280", textDecoration: "none" }}>GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
