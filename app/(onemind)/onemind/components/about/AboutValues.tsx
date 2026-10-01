"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  {
    icon: "🔐",
    title: "Sovereignty first",
    desc: "Your data. Your hardware. Your infrastructure. Every system we build runs on your cluster, behind your firewall, under your control. No SaaS dependencies. No vendor lock-in. No exceptions.",
  },
  {
    icon: "🏗️",
    title: "Build in public",
    desc: "The curriculum is the product. Every system we teach is a system we run in production. Radical transparency isn't a marketing strategy — it's an accountability structure that makes us build better.",
  },
  {
    icon: "⚙️",
    title: "Ops-grade only",
    desc: "No toy demos. No contrived examples. If it doesn't run in production under real conditions, it doesn't make the curriculum or the platform. Real commands. Real deployments. Real configs.",
  },
  {
    icon: "🌐",
    title: "Open by default",
    desc: "Open-source where possible. MIT licensed. The TAK ecosystem is government-funded and open — we honor that by keeping our core open too. The business model is education and services, not lock-in.",
  },
  {
    icon: "🎯",
    title: "Mission first",
    desc: "Every feature exists because a real operation needed it. We build what we needed in the field and couldn't find anywhere else. Product decisions are made by operators, not product managers.",
  },
  {
    icon: "🔁",
    title: "Closed loop thinking",
    desc: "Sense → Fuse → Decide → Act. Every system we build closes the loop. Data without action is just noise. Action without data is just hope. The closed loop is the product.",
  },
];

export default function AboutValues() {
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
          <span className="tag">Values</span>
          <h2 className="display-md" style={{ marginTop: "1rem" }}>
            How we build
          </h2>
          <p className="subheading" style={{ marginTop: "1rem", maxWidth: "560px" }}>
            Six principles that govern every decision — from architecture choices to pricing models.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-feature"
            >
              <div style={{ fontSize: "2rem", marginBottom: "1.25rem" }}>{v.icon}</div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "white", marginBottom: "0.75rem" }}>
                {v.title}
              </h3>
              <p style={{ fontSize: "0.88rem", color: "#6b7280", lineHeight: 1.75 }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
