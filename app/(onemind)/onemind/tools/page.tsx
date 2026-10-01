import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Tools",
  description: "The fabric toolkit — agenttap, NATS CLI, and the tools that run the OneMind ecosystem.",
};

const tools = [
  {
    name: "agenttap",
    status: "live",
    desc: "Terminal UI dashboard for the NATS agent mesh. Watch every agent, every prompt, every response in real time.",
    install: "./nats/ai-agents/agenttap/agenttap -view dash -servers nats://localhost:4222",
    category: "Observability",
  },
  {
    name: "NATS CLI",
    status: "live",
    desc: "The primary interface to the fabric. Publish, subscribe, request — every agent reachable from one command.",
    install: "curl -LO https://raw.githubusercontent.com/nats-io/natscli/main/install.sh && chmod +x install.sh && ./install.sh",
    category: "Core",
  },
  {
    name: "om_task",
    status: "live",
    desc: "Task engine service on the bus — job dispatch, lifecycle, execution across the fabric.",
    install: "nats micro ls --server nats://localhost:4222",
    category: "Services",
  },
  {
    name: "om_presence",
    status: "live",
    desc: "Voice bridge — push-to-talk presence on the NATS fabric via Murmur.",
    install: "murmur.takserver.svc:64738",
    category: "Services",
  },
  {
    name: "ai.hermes.gateway",
    status: "live",
    desc: "The AI gateway — envelope routing for every prompt hitting the mesh.",
    install: "nats sub ai.hermes.gateway.>",
    category: "Services",
  },
  {
    name: "CloudTAK",
    status: "live",
    desc: "Browser-native TAK client. Full situational awareness with zero ATAK install.",
    install: "https://atoc.onemindos.dev",
    category: "Platform",
  },
  {
    name: "MediaMTX",
    status: "live",
    desc: "Video ingestion engine — RTSP/WebRTC/RTMP for drones, cams, body feeds.",
    install: "https://cam.onemindos.dev",
    category: "Platform",
  },
  {
    name: "Grafana",
    status: "live",
    desc: "Ops dashboards, telemetry, NATS stream monitoring for the whole fabric.",
    install: "https://grafana.onemindos.dev",
    category: "Observability",
  },
  {
    name: "Tailscale",
    status: "live",
    desc: "The private mesh connecting every node — no open ports, no VPN config.",
    install: "https://tailscale.com",
    category: "Infrastructure",
  },
];

export default function ToolsPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: "10rem", paddingBottom: "4rem", background: "#050607" }}>
        <span className="tag">Fabric Toolkit</span>
        <h1 className="display-lg" style={{ marginTop: "1.5rem" }}>
          The <span style={{ color: "#b91c1c" }}>tools</span> of the trade
        </h1>
        <p className="subheading" style={{ marginTop: "1rem", maxWidth: "600px" }}>
          Every tool that runs, observes, and operates the OneMind fabric — with install commands and live endpoints.
        </p>
      </section>

      <section className="section" style={{ background: "#0a0c0e", paddingTop: "2rem" }}>
        <div className="container-wide">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {tools.map((t) => (
              <div key={t.name} className="card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "white" }}>{t.name}</div>
                  <span className="tag" style={{ color: t.status === "live" ? "#22c55e" : "#6b7280", borderColor: t.status === "live" ? "rgba(34,197,94,0.3)" : "rgba(107,114,128,0.2)" }}>
                    {t.status.toUpperCase()}
                  </span>
                </div>
                <span className="tag" style={{ borderColor: "rgba(255,255,255,0.08)", color: "#6b7280", fontSize: "0.6rem", marginBottom: "0.75rem" }}>
                  {t.category}
                </span>
                <p style={{ fontSize: "0.88rem", color: "#6b7280", lineHeight: 1.65, marginBottom: "1.25rem" }}>{t.desc}</p>
                <div style={{ fontFamily: "monospace", fontSize: "0.72rem", color: "#22c55e", background: "#050607", padding: "0.625rem 0.75rem", borderRadius: "0.375rem", overflow: "auto", whiteSpace: "nowrap" }}>
                  {t.install}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
