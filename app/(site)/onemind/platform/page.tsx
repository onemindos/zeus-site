import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Platform",
  description: "The OneMind fabric — every layer, every service, every capability. Self-hosted situational awareness on the TAK ecosystem.",
};

const sections = [
  {
    id: "overwatch",
    num: "01",
    tag: "OVERWATCH",
    title: "Real-time common operating picture",
    desc: "Every operator, drone track, sensor alert, and imagery layer on one tactical map — live, from HQ or a phone in the field. Works with ATAK, iTAK, WinTAK, and any GPS tracker.",
    items: ["ATAK / iTAK / WinTAK clients", "Live drone tracks", "Biometric alerts", "Mission overlays", "External share links", "3D terrain"],
  },
  {
    id: "feeds",
    num: "02",
    tag: "TAK FEEDS",
    title: "Every sensor, on any TAK Server",
    desc: "ADS-B aircraft, AIS vessels, drone detection, GPS trackers, weather overlays, RF intelligence — every external feed converted to CoT and streamed to your TAK Server. Server agnostic.",
    items: ["ADS-B / AIS ingestion", "cUAS detection", "Weather + FEMA overlays", "GPS tracker feeds", "RF intelligence", "CoT native"],
  },
  {
    id: "agents",
    num: "03",
    tag: "AI AGENTS",
    title: "12-agent mesh on NATS",
    desc: "Legacy, Oracle, Guardian, Forge — 12 specialized AI agents living on the NATS bus. Pattern recognition, anomaly detection, and autonomous action at machine speed.",
    items: ["Legacy — sovereign cloud AI", "Oracle — intelligence", "Guardian — security", "Forge — orchestration", "Agent-to-agent comms", "Autonomous workflows"],
  },
  {
    id: "video",
    num: "04",
    tag: "TACTICAL VMS",
    title: "Every camera. One pane of glass.",
    desc: "Drones, body cams, fixed IP cameras, dash cams — every source in a single live dashboard with map context. RTSP, WebRTC, RTMP via MediaMTX.",
    items: ["RTSP / WebRTC / RTMP", "Drone video feeds", "Body cam ingestion", "Map-pinned sources", "Per-camera recording", "Instant clip share"],
  },
  {
    id: "geo",
    num: "05",
    tag: "GEO STACK",
    title: "Full sovereign GIS",
    desc: "TimescaleDB-HA, Tile38 geofencing, Valhalla routing, Nominatim geocoding, Martin + TileServer GL vector tiles, Overpass, WebODM, QGIS Server, STAC catalog — the complete geo layer, on your hardware.",
    items: ["TimescaleDB-HA", "Tile38 geofencing", "Valhalla routing", "Self-hosted vector tiles", "Nominatim + Overpass", "WebODM drone mapping"],
  },
  {
    id: "deploy",
    num: "06",
    tag: "DEPLOYMENT",
    title: "Kubernetes-native. Cloud or edge.",
    desc: "22 namespaces on DOKS. Runs identically on a homestead NUC or enterprise bare metal. Tailscale mesh connects every node — no open ports, no VPN config, Cloudflare Tunnel for zero-trust ingress.",
    items: ["DOKS cloud cluster", "Mac edge node", "Tailscale mesh", "Cloudflare Tunnel", "Air-gapped capable", "10yr ClickHouse retention"],
  },
];

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingTop: "10rem", paddingBottom: "4rem", background: "#050607", position: "relative", overflow: "hidden" }}>
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }} />
        <div className="bg-radial-red" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 10 }}>
          <span className="tag">Platform</span>
          <h1 className="display-lg" style={{ marginTop: "1.5rem" }}>
            Everything the<br />
            <span style={{ color: "#b91c1c" }}>fabric runs</span>
          </h1>
          <p className="subheading" style={{ marginTop: "1rem", maxWidth: "600px" }}>
            A sovereign, self-hosted operations stack — no SaaS dependencies, no vendor lock-in.
            Every service on your cluster, every byte on your hardware.
          </p>

          {/* Architecture layers quick view */}
          <div style={{ display: "flex", gap: "1rem", marginTop: "3rem", flexWrap: "wrap" }}>
            {[
              { l: "L1 — Chassis", d: "TAK ecosystem", c: "#6b7280" },
              { l: "L2 — Fabric", d: "NATS + ClickHouse + Geo", c: "#8B0000" },
              { l: "L3 — Mind", d: "12 AI agents", c: "#b91c1c" },
            ].map((layer) => (
              <div key={layer.l} style={{ padding: "1rem 1.5rem", background: "#0a0c0e", border: "1px solid " + layer.c + "33", borderLeft: "4px solid " + layer.c, borderRadius: "0.5rem" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: layer.c }}>{layer.l}</div>
                <div style={{ fontSize: "0.9rem", color: "white", marginTop: "0.25rem" }}>{layer.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live services strip */}
      <section className="section" style={{ background: "#0a0c0e", paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="container-wide">
          <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#6b7280", marginBottom: "1.25rem" }}>
            Live on the fabric right now
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "0.75rem" }}>
            {[
              { n: "CloudTAK", u: "atoc.onemindos.dev" },
              { n: "MediaMTX VMS", u: "cam.onemindos.dev" },
              { n: "Tile Server", u: "tiles.onemindos.dev" },
              { n: "Grafana", u: "grafana.onemindos.dev" },
              { n: "NATS 3-node HA", u: "nats://fabric:4222" },
              { n: "ClickHouse", u: "onemind · 10yr TTL" },
              { n: "TAK Server 5.7", u: "takserver ns" },
              { n: "Geo Stack", u: "TimescaleDB · Tile38 · Valhalla" },
            ].map((s) => (
              <div key={s.n} style={{ padding: "0.875rem 1rem", background: "#050607", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "0.5rem" }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "white" }}>{s.n}</div>
                <div style={{ fontFamily: "monospace", fontSize: "0.7rem", color: "#8B0000", marginTop: "0.25rem" }}>{s.u}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature sections */}
      {sections.map((s, i) => (
        <section key={s.id} id={s.id} className="section" style={{ background: i % 2 === 0 ? "#050607" : "#0a0c0e" }}>
          <div className="container-wide" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <span className="tag">{s.num} — {s.tag}</span>
              <h2 className="heading" style={{ marginTop: "1rem", marginBottom: "1rem" }}>{s.title}</h2>
              <p style={{ color: "#6b7280", lineHeight: 1.75, marginBottom: "2rem" }}>{s.desc}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                {s.items.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#6b7280" }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#b91c1c", flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Placeholder screenshot slot */}
            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", aspectRatio: "16/10", borderRadius: "0.75rem", overflow: "hidden", border: "1px solid rgba(139,0,0,0.2)", background: "#0a0c0e", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
                <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
                <div style={{ width: 48, height: 48, border: "2px dashed rgba(139,0,0,0.4)", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1, color: "#8B0000", fontSize: "1.25rem" }}>
                  ◱
                </div>
                <div style={{ fontFamily: "monospace", fontSize: "0.65rem", color: "#6b7280", textAlign: "center", position: "relative", zIndex: 1, lineHeight: 1.8 }}>
                  PLACEHOLDER_{s.tag.replace("-", "_")}_SCREENSHOT<br />
                  Drop: /public/img/{s.id}.png<br />
                  Spec: 1600×1000px
                </div>
              </div>
              <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", background: "rgba(5,6,7,0.85)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.25rem", padding: "0.25rem 0.5rem", fontSize: "0.6rem", fontFamily: "monospace", color: "#22c55e" }}>
                ● LIVE · {s.tag}
              </div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </>
  );
}
