"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    word: "Sense",
    icon: "📡",
    color: "#8B0000",
    desc: "Environmental sensors, drones, cameras, wearables, ADS-B, AIS — every signal ingested onto the NATS fabric in real time.",
    items: ["Drone telemetry", "Body-worn sensors", "Fixed cameras", "Weather overlays", "RF intelligence", "GPS trackers"],
  },
  {
    num: "02",
    word: "Fuse",
    icon: "🧠",
    color: "#a10000",
    desc: "NATS substrate correlates every event. ClickHouse retains 10 years of history. Every timestamp, every sensor, queryable in milliseconds.",
    items: ["NATS 3-node HA", "ClickHouse time machine", "TimescaleDB geo", "Tile38 geofencing", "Event correlation", "10yr retention"],
  },
  {
    num: "03",
    word: "Decide",
    icon: "⚡",
    color: "#b91c1c",
    desc: "12 AI agents on the bus — Legacy, Oracle, Guardian, Forge. Pattern recognition, anomaly detection, and decision support at machine speed.",
    items: ["Legacy (sovereign AI)", "Oracle (intelligence)", "Guardian (security)", "Forge (orchestrator)", "Real-time alerts", "Mission planning"],
  },
  {
    num: "04",
    word: "Act",
    icon: "🎯",
    color: "#dc2626",
    desc: "Push to TAK, trigger automations, dispatch teams, update overlays. Closed loop from raw sensor to decisive action in milliseconds.",
    items: ["TAK CoT push", "Team dispatch", "Overlay updates", "Automated workflows", "Alert escalation", "Mission sync"],
  },
];

export default function ClosedLoopSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section bg-black-2 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-radial-red-left opacity-60 pointer-events-none" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="tag">Closed Loop</span>
          <h2 className="display-md mt-4">
            Four layers. <span className="text-red-bright">One mind.</span>
          </h2>
          <p className="subheading mt-4 max-w-xl">
            Every operation runs through a single closed loop — raw sensor data to decisive action.
            No tabs to switch. No tools to integrate. One fabric.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-red/40 to-transparent z-0" />
              )}

              <div className="card-feature h-full relative z-10">
                {/* Step number */}
                <div className="text-[3rem] font-black leading-none mb-4" style={{ color: s.color, opacity: 0.25 }}>
                  {s.num}
                </div>

                {/* Icon + word */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{s.icon}</div>
                  <h3 className="text-xl font-bold tracking-tight" style={{ color: s.color === "#8B0000" ? "#ef4444" : s.color }}>
                    {s.word}
                  </h3>
                </div>

                <p className="text-sm text-dim leading-relaxed mb-5">{s.desc}</p>

                {/* Item list */}
                <div className="flex flex-col gap-1.5">
                  {s.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-dim">
                      <div className="w-1.5 h-1.5 rounded-full bg-red flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
