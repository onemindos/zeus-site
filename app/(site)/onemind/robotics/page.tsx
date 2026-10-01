import type { Metadata } from "next";
import Link from "next/link";
import { robots } from "@/data/robots";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Robotics & Drones — OneMind OS",
  description: "Autonomous drones, UGVs, and robot systems connected to the OneMind fabric — live on TAK, controlled by AI agents over NATS.",
};

const typeIcon: Record<string, string> = {
  aerial: "🚁",
  ground: "🤖",
  aquatic: "🌊",
  fixed: "📡",
  simulation: "⚙️",
};

const statusColor: Record<string, string> = {
  live: "#22c55e",
  development: "#f59e0b",
  planned: "#6b7280",
};

export default function RoboticsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingTop: "10rem", paddingBottom: "4rem", background: "#050607", borderBottom: "1px solid #1a1a1a" }}>
        <div className="container-wide">
          <span className="tag">Robotics & Drones</span>
          <h1 className="display-lg" style={{ marginTop: "1.5rem" }}>
            Machines on the <span style={{ color: "#b91c1c" }}>fabric</span>
          </h1>
          <p className="subheading" style={{ maxWidth: "640px", marginTop: "1rem" }}>
            Every drone, rover, and autonomous system connected to OneMind appears live on TAK — position, video, sensors, and alerts — while AI agents on the NATS bus command, fuse, and decide.
          </p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
            <Link href="/nats" className="btn-outline-red" style={{ fontSize: "0.85rem" }}>NATS Architecture →</Link>
            <Link href="/agents" className="btn-secondary" style={{ fontSize: "0.85rem" }}>Agent Mesh →</Link>
          </div>
        </div>
      </section>

      {/* TAK Integration diagram */}
      <section style={{ background: "#0a0c0e", padding: "4rem 0", borderBottom: "1px solid #1a1a1a" }}>
        <div className="container-wide">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>How robots connect to TAK</h2>
          <p style={{ color: "#6b7280", fontSize: "0.9rem", marginBottom: "3rem", maxWidth: "600px" }}>
            Every physical system flows through the same closed loop — sensor data in, agent decision out, TAK operator always in the picture.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {[
              { step: "01", icon: "🤖", label: "Robot / Drone", desc: "MAVLink, ROS 2, or custom firmware publishes telemetry" },
              { step: "02", icon: "⚡", label: "NATS Bus", desc: "fabric.robot.*.telemetry — sub-millisecond delivery" },
              { step: "03", icon: "🧠", label: "AI Agents", desc: "Legacy + Oracle fuse data, detect events, issue commands" },
              { step: "04", icon: "🗺️", label: "TAK / CloudTAK", desc: "CoT position tracks live on every operator's map" },
              { step: "05", icon: "📹", label: "MediaMTX", desc: "RTSP / WebRTC video from any camera into CloudTAK" },
            ].map((node) => (
              <div key={node.step} className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{node.icon}</div>
                <div style={{ fontSize: "0.65rem", color: "#b91c1c", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "0.375rem" }}>{node.step}</div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>{node.label}</div>
                <p style={{ fontSize: "0.8rem", color: "#6b7280", lineHeight: 1.6 }}>{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NATS subject map */}
      <section style={{ background: "#050607", padding: "3rem 0", borderBottom: "1px solid #1a1a1a" }}>
        <div className="container-wide">
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "white", marginBottom: "1.5rem" }}>NATS subject hierarchy</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {[
              { subject: "fabric.robot.<id>.telemetry", desc: "Position, speed, battery, health" },
              { subject: "fabric.robot.<id>.command", desc: "Waypoints, modes, emergency stop" },
              { subject: "fabric.robot.<id>.sensors", desc: "Camera, LiDAR, thermal, env data" },
              { subject: "fabric.robot.<id>.video", desc: "MediaMTX stream reference + metadata" },
              { subject: "fabric.robot.<id>.status", desc: "Online/offline, error states" },
              { subject: "fabric.robot.*.alert", desc: "Cross-fleet anomaly events" },
            ].map((s) => (
              <div key={s.subject} style={{ background: "#0a0c0e", border: "1px solid #1a1a1a", borderRadius: "0.5rem", padding: "1rem" }}>
                <div style={{ fontFamily: "monospace", fontSize: "0.78rem", color: "#b91c1c", marginBottom: "0.375rem" }}>{s.subject}</div>
                <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Robot cards */}
      <section className="section" style={{ background: "#0a0c0e" }}>
        <div className="container-wide">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>Systems on the fabric</h2>
          <p style={{ color: "#6b7280", fontSize: "0.9rem", marginBottom: "2.5rem" }}>Click any system for full integration docs, NATS subjects, and build guide.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {robots.map((r) => (
              <Link key={r.slug} href={`/robotics/${r.slug}`} style={{ textDecoration: "none" }}>
                <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "2rem" }}>{typeIcon[r.type]}</span>
                    <span className="tag" style={{ color: statusColor[r.status], borderColor: `${statusColor[r.status]}44` }}>
                      {r.status.toUpperCase()}
                    </span>
                  </div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "white", marginBottom: "0.375rem" }}>{r.name}</div>
                  <div style={{ fontSize: "0.8rem", color: "#b91c1c", marginBottom: "0.75rem" }}>{r.tagline}</div>
                  <p style={{ fontSize: "0.83rem", color: "#6b7280", lineHeight: 1.6, flex: 1 }}>{r.description}</p>
                  <div style={{ marginTop: "1.25rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {r.protocols.slice(0, 3).map((proto) => (
                      <span key={proto} style={{ fontSize: "0.7rem", background: "#1a1a1a", color: "#6b7280", padding: "0.2rem 0.5rem", borderRadius: "0.25rem" }}>{proto}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#050607", borderTop: "1px solid #1a1a1a", padding: "4rem 0" }}>
        <div className="container-wide" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "white", marginBottom: "1rem" }}>Connect your system</h2>
          <p style={{ color: "#6b7280", maxWidth: "500px", margin: "0 auto 2rem", fontSize: "0.9rem" }}>
            Any robot with network access can join the fabric. Publish to NATS, receive CoT-formatted position, appear live on TAK.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/nats" className="btn-red">Connect to NATS →</Link>
            <Link href="/agents" className="btn-outline-red">Meet the agents →</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
