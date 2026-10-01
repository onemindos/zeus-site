"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const capabilities = [
  {
    id: "overwatch",
    tag: "01 — Overwatch",
    title: "Real-time common operating picture",
    desc: "Every operator, drone track, sensor alert, and imagery layer on one tactical map — live, from HQ or a phone in the field. Works with ATAK, iTAK, WinTAK, and any GPS tracker.",
    // PLACEHOLDER_OVERWATCH_SCREENSHOT: Replace src with /img/overwatch.png
    img: null,
    imgAlt: "CloudTAK common operating picture screenshot",
    imgPlaceholder: "CloudTAK / Overwatch Screenshot\n1600×900px\nDrop as /public/img/overwatch.png",
    items: ["ATAK / iTAK / WinTAK", "Live drone tracks", "Biometric alerts", "Mission overlays", "External share links", "3D terrain"],
    link: "/platform#overwatch",
  },
  {
    id: "feeds",
    tag: "02 — TAK Feeds",
    title: "Every sensor, on any TAK Server",
    desc: "ADS-B aircraft, AIS vessels, drone detection, GPS trackers, weather overlays, RF intelligence — every external feed converted to CoT and streamed to your TAK Server. Server agnostic.",
    img: null,
    imgAlt: "TAK Feeds sensor dashboard",
    imgPlaceholder: "TAK Feeds Dashboard Screenshot\n1600×900px\nDrop as /public/img/tak-feeds.png",
    items: ["ADS-B / AIS", "cUAS detection", "Weather + FEMA overlays", "GPS tracker feeds", "RF intelligence", "CoT native"],
    link: "/platform#feeds",
  },
  {
    id: "agents",
    tag: "03 — AI Agents",
    title: "12-agent mesh on NATS",
    desc: "Legacy, Oracle, Guardian, Forge — 12 specialized AI agents living on the NATS bus. Pattern recognition, anomaly detection, and autonomous action at machine speed.",
    img: null,
    imgAlt: "AI agent mesh dashboard",
    imgPlaceholder: "Agent Mesh / Agenttap Screenshot\n1600×900px\nDrop as /public/img/agents.png",
    items: ["Legacy (sovereign AI)", "Oracle (intel)", "Guardian (security)", "Forge (orchestrator)", "Agent-to-agent comms", "Autonomous workflows"],
    link: "/platform#agents",
  },
  {
    id: "video",
    tag: "04 — Tactical VMS",
    title: "Every camera. One pane of glass.",
    desc: "Drones, body cams, fixed IP cameras, dash cams — every source in a single live dashboard with map context. RTSP, WebRTC, RTMP. Per-camera recording with instant clip sharing.",
    img: null,
    imgAlt: "MediaMTX video management system",
    imgPlaceholder: "MediaMTX / Tactical VMS Screenshot\n1600×900px\nDrop as /public/img/tactical-vms.png",
    items: ["RTSP / WebRTC / RTMP", "Drone video feeds", "Body cam ingestion", "Map-pinned sources", "Per-camera recording", "Instant clip share"],
    link: "/platform#video",
  },
];

export default function CapabilitiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section bg-black">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="tag">Capabilities</span>
            <h2 className="display-md mt-4">
              What's on<br />the fabric
            </h2>
          </div>
          <Link href="/platform" className="btn-ghost self-start md:self-auto">
            Full platform overview <ArrowRight size={15} />
          </Link>
        </motion.div>

        <div className="flex flex-col gap-24">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.id}
              id={cap.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              style={{ direction: i % 2 === 1 ? "rtl" : "ltr" }}
            >
              {/* Text */}
              <div style={{ direction: "ltr" }}>
                <span className="tag">{cap.tag}</span>
                <h3 className="heading mt-4 mb-4">{cap.title}</h3>
                <p className="text-dim leading-relaxed mb-8">{cap.desc}</p>

                <div className="grid grid-cols-2 gap-2 mb-8">
                  {cap.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-dim">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-bright flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <Link href={cap.link} className="btn-outline-red">
                  Learn more <ArrowRight size={15} />
                </Link>
              </div>

              {/* Image / Placeholder */}
              <div style={{ direction: "ltr" }} className="relative">
                <div className="relative rounded-xl overflow-hidden border border-red/20 bg-black-3 aspect-video flex items-center justify-center group hover:border-red/50 transition-colors">

                  {cap.img ? (
                    // Real image - uncomment when available:
                    // <Image src={cap.img} alt={cap.imgAlt} fill className="object-cover" />
                    <div />
                  ) : (
                    /* PLACEHOLDER — shows instructions until real screenshot added */
                    <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
                      <div className="w-16 h-16 rounded-lg border-2 border-dashed border-red/40 flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-red/40 rounded" />
                      </div>
                      <div className="font-mono text-xs text-dim leading-relaxed whitespace-pre-line">
                        {cap.imgPlaceholder}
                      </div>
                    </div>
                  )}

                  {/* Corner badge */}
                  <div className="absolute top-3 left-3 bg-black/80 border border-white/10 rounded px-2 py-1 text-[10px] font-mono text-dim">
                    LIVE · {cap.tag.split("—")[1]?.trim().toUpperCase()}
                  </div>
                </div>

                {/* Glow */}
                <div className="absolute -inset-1 bg-red/5 rounded-xl blur-xl -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
