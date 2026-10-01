"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const layers = [
  {
    num: "L1",
    label: "Chassis",
    color: "#6b7280",
    title: "TAK Ecosystem",
    desc: "Government-funded, battle-tested, open-source. TAK Server, ATAK, iTAK, WinTAK — the most deployed SA platform on earth. We don't fork it. We build above it.",
    items: ["TAK Server 5.7/5.8", "ATAK / iTAK / WinTAK", "CoT protocol", "Mission sync", "Team federation"],
    owned: false,
  },
  {
    num: "L2",
    label: "Fabric",
    color: "#8B0000",
    title: "OneMind Fabric",
    desc: "The nervous system. NATS 3-node HA cluster carries every event — sensors, agents, telemetry, commands. ClickHouse retains 10 years of operational history. Everything queryable in milliseconds.",
    items: ["NATS 3-node HA", "ClickHouse (10yr TTL)", "TimescaleDB geo", "Tile38 geofencing", "MQTT IoT bridge"],
    owned: true,
  },
  {
    num: "L3",
    label: "Mind",
    color: "#b91c1c",
    title: "AI Agent Mesh",
    desc: "12 specialized AI agents living on the NATS bus. Legacy (cloud sovereign), Oracle (intelligence), Guardian (security), Forge (orchestrator), and 8 more. Pattern recognition and autonomous action at machine speed.",
    items: ["Legacy — sovereign AI", "Oracle — intelligence", "Guardian — security", "Forge — orchestrator", "Agent-to-agent comms"],
    owned: true,
  },
];

export default function AboutThesis() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section" style={{ background: "#0a0c0e" }}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "4rem" }}
        >
          <span className="tag">The Thesis</span>
          <h2 className="display-md" style={{ marginTop: "1rem", maxWidth: "700px" }}>
            TAK is the chassis.<br />
            <span style={{ color: "#b91c1c" }}>OneMind is the mind.</span>
          </h2>
          <p className="subheading" style={{ marginTop: "1rem", maxWidth: "640px" }}>
            The TAK ecosystem is tracks, chat, and maps — a chassis. OneMind adds new senses,
            persistent memory, and an AI mind that decides and acts. We don't compete with TAK.
            We complete it.
          </p>
        </motion.div>

        {/* Architecture stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {layers.map((l, i) => (
            <motion.div
              key={l.num}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr 2fr auto",
                gap: "2rem",
                alignItems: "center",
                padding: "2rem",
                background: "#111418",
                border: `1px solid ${l.color}33`,
                borderLeft: `4px solid ${l.color}`,
                borderRadius: "0.5rem",
              }}
            >
              {/* Layer badge */}
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 900, color: l.color, opacity: 0.5 }}>{l.num}</div>
                <div style={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: l.color, marginTop: "0.25rem" }}>{l.label}</div>
              </div>

              {/* Title + desc */}
              <div>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>{l.title}</div>
                <p style={{ fontSize: "0.85rem", color: "#6b7280", lineHeight: 1.65 }}>{l.desc}</p>
              </div>

              {/* Items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {l.items.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "#6b7280" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: l.color, flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>

              {/* Ownership badge */}
              <div>
                {l.owned ? (
                  <span style={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#b91c1c", border: "1px solid #8B0000", padding: "4px 10px", borderRadius: 2 }}>
                    Owned
                  </span>
                ) : (
                  <span style={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#6b7280", border: "1px solid rgba(255,255,255,0.1)", padding: "4px 10px", borderRadius: 2 }}>
                    Open Source
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Thesis statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ marginTop: "3rem", padding: "2rem", background: "rgba(139,0,0,0.08)", border: "1px solid rgba(139,0,0,0.2)", borderRadius: "0.5rem" }}
        >
          <p style={{ fontSize: "1.05rem", color: "white", lineHeight: 1.75, fontStyle: "italic" }}>
            "TAK is the most battle-tested SA chassis on earth — government-funded, open-source,
            deployed in every major operation since 2010. OneMind is the extension layer that turns
            that chassis into a closed-loop operations platform. Not a competitor. Not a Palantir clone.
            The mind that runs on top."
          </p>
          <div style={{ marginTop: "1rem", fontSize: "0.8rem", color: "#6b7280" }}>— Zeus DeLaCruz, Founder</div>
        </motion.div>
      </div>
    </section>
  );
}
