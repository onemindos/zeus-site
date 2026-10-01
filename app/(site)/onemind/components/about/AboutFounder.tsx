"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function AboutFounder() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section" style={{ background: "#050607" }}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "4rem" }}
        >
          <span className="tag">Founder</span>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: "5rem", alignItems: "start" }}>

          {/* Photo block */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* PLACEHOLDER_ZEUS_HEADSHOT */}
            {/* Replace with: <Image src="/img/zeus-headshot.jpg" alt="Zeus DeLaCruz" fill className="object-cover" /> */}
            <div style={{
              width: "100%",
              aspectRatio: "3/4",
              background: "#111418",
              border: "1px solid rgba(139,0,0,0.3)",
              borderRadius: "0.75rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Grid overlay on placeholder */}
              <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
              <div style={{ fontSize: "5rem", position: "relative", zIndex: 1 }}>⚡</div>
              <div style={{ fontFamily: "monospace", fontSize: "0.7rem", color: "#6b7280", textAlign: "center", position: "relative", zIndex: 1, lineHeight: 1.8 }}>
                PLACEHOLDER_ZEUS_HEADSHOT<br />
                Drop: /public/img/zeus-headshot.jpg<br />
                Spec: 800×1067px portrait
              </div>
              {/* Red glow corner */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(139,0,0,0.15), transparent)" }} />
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
              {[
                { label: "zeusdelacruz.com", href: "https://zeusdelacruz.com" },
                { label: "GitHub", href: "https://github.com/onemindos" },
                { label: "Email", href: "mailto:zeus@onemindos.com" },
              ].map((l) => (
                <Link key={l.label} href={l.href} target="_blank" className="btn-ghost" style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="display-md" style={{ marginBottom: "0.5rem" }}>Zeus DeLaCruz</h2>
            <div style={{ color: "#b91c1c", fontWeight: 600, fontSize: "1rem", marginBottom: "2rem" }}>
              Founder & Architect — OneMind OS
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "Builder, operator, and architect of the OneMind fabric. Background in operations and systems integration — now building the sovereign SA platform he always needed in the field.",
                "Believes the most dangerous advantage isn't firepower — it's situational awareness. OneMind is the system that gives any team that edge, without surrendering data sovereignty to a cloud vendor.",
                "Builds entirely in public. The curriculum is the product — every system taught is a system running in production. No demos, no toy projects. Real deployments.",
              ].map((p, i) => (
                <p key={i} style={{ color: "#6b7280", lineHeight: 1.8, fontSize: "1rem" }}>{p}</p>
              ))}
            </div>

            {/* What he's building */}
            <div style={{ marginTop: "3rem" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#6b7280", marginBottom: "1.25rem" }}>
                Six pillars
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {[
                  { icon: "🛡️", label: "OneMind OS", desc: "Sovereign ops platform on TAK" },
                  { icon: "📡", label: "Education", desc: "Sovereign Stack curriculum" },
                  { icon: "🌾", label: "Homesteading", desc: "Off-grid tech integration" },
                  { icon: "💰", label: "Finance", desc: "Sovereign wealth infrastructure" },
                  { icon: "🤸", label: "Wellness", desc: "Performance for builders" },
                  { icon: "🔒", label: "Security", desc: "Guardian protocols" },
                ].map((p) => (
                  <div key={p.label} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.875rem 1rem", background: "#0a0c0e", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "0.5rem" }}>
                    <span style={{ fontSize: "1.1rem" }}>{p.icon}</span>
                    <div>
                      <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "white" }}>{p.label}</div>
                      <div style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "0.15rem" }}>{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
