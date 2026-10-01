import Link from "next/link";

const natsAccounts = [
  { name: "SYS", desc: "System account — cluster admin, monitoring, health", access: "Admin only" },
  { name: "CORE", desc: "Agent and meta services — Legacy, Forge, agenttap, envelope", access: "Agent mesh" },
  { name: "FABRIC", desc: "Telemetry and IoT — sensors, drones, environmental data", access: "Sensor network" },
  { name: "INTERFACE", desc: "Applications — omos-ui, apps, web services", access: "Application layer" },
] as const;

const natsServices = [
  { name: "Legacy Gateway", desc: "AI gateway on NATS", endpoint: "ai.hermes.gateway" },
  { name: "Task Engine", desc: "Task dispatch and execution", endpoint: "om_task" },
  { name: "Voice Bridge", desc: "Voice presence to NATS", endpoint: "om_presence" },
  { name: "Agent Registry", desc: "Agent discovery and routing", endpoint: "agenttap TUI" },
  { name: "ClickHouse Ingestion", desc: "Event routing to ClickHouse", endpoint: "om_clickhouse_clog" },
  { name: "Homestead IoT", desc: "HomeAssistant bridge", endpoint: "nats-ha-bridge" },
] as const;

const natsSubjects = [
  { pattern: "agents.prompt.<framework>.<owner>.<session>", desc: "Prompt routing to any agent", example: "nats req agents.prompt.hermes.zeus.legacy \"status\"" },
  { pattern: "ai.hermes.gateway.*", desc: "AI gateway envelope + presence", example: "Subscribe to gateway envelope events" },
  { pattern: "fabric.robot.<id>.*", desc: "Robot telemetry", example: "Drones, vehicles, robots" },
  { pattern: "env.sensor.<type>.<id>", desc: "Environmental sensors", example: "Temp, humidity, pressure, soil" },
  { pattern: "geo.stack.*", desc: "Geo stack events", example: "TimescaleDB, Valhalla, Nominatim" },
  { pattern: "tak.mission.*", desc: "Mission and operational updates", example: "CoT, tracks, operations" },
  { pattern: "om_task.*", desc: "Task engine", example: "Job dispatch, lifecycle" },
  { pattern: "followup.*", desc: "Agent-to-agent callbacks", example: "Inter-agent responses" },
] as const;

const connectExamples = [
  {
    label: "1. Install NATS CLI",
    example: "curl -LO https://raw.githubusercontent.com/nats-io/natscli/main/install.sh && chmod +x install.sh && ./install.sh",
  },
  {
    label: "2. Connect to fabric",
    example: "nats pub -s nats://fabric.onemindos.dev:4222 subject.body",
  },
  {
    label: "3. Prompt Legacy",
    example: "nats req -s nats://fabric.onemindos.dev agents.prompt.hermes.zeus.legacy \"status\"",
  },
  {
    label: "4. Subscribe to sensors",
    example: "nats sub -s nats://fabric.onemindos.dev env.sensor.temp.*",
  },
];

export default function NATSPage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingTop: "10rem", paddingBottom: "4rem", background: "#050607", position: "relative", overflow: "hidden" }}>
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 10 }}>
          <span className="tag">The Fabric Bus</span>
          <h1 className="display-lg" style={{ marginTop: "1.5rem" }}>
            <span style={{ color: "#b91c1c" }}>NATS</span> — the nervous system
          </h1>
          <p className="subheading" style={{ marginTop: "1rem", maxWidth: "640px" }}>
            The message substrate that owns truth. Every event, every agent, every sensor —
            routed via NATS. Here's how to connect and build on it.
          </p>
        </div>
      </section>

      {/* Accounts */}
      <section className="section" style={{ background: "#0a0c0e" }}>
        <div className="container-wide">
          <div style={{ marginBottom: "1.5rem" }}>
            <span className="tag-solid" style={{ background: "#8B0000" }}>Accounts</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {natsAccounts.map((acc) => (
              <div key={acc.name} className="card-feature">
                <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "white", marginBottom: "0.5rem" }}>{acc.name}</div>
                <p style={{ fontSize: "0.9rem", color: "#6b7280", marginBottom: "1rem" }}>{acc.desc}</p>
                <span className="tag" style={{ borderColor: "rgba(255,255,255,0.08)", color: "#6b7280", fontSize: "0.65rem" }}>
                  {acc.access}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" style={{ background: "#050607" }}>
        <div className="container-wide">
          <div style={{ marginBottom: "1.5rem" }}>
            <span className="tag-solid" style={{ background: "#8B0000" }}>Live Services</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {natsServices.map((svc) => (
              <div key={svc.name} className="card" style={{ borderLeft: "3px solid #8B0000", borderLeftColor: "#8B0000" }}>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "white", marginBottom: "0.375rem" }}>{svc.name}</div>
                <p style={{ fontSize: "0.85rem", color: "#6b7280", marginBottom: "0.875rem" }}>{svc.desc}</p>
                <div style={{ fontFamily: "monospace", fontSize: "0.72rem", color: "#6b7280", background: "#0a0c0e", padding: "0.375rem 0.5rem", borderRadius: "0.25rem" }}>
                  {svc.endpoint}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="section" style={{ background: "#0a0c0e" }}>
        <div className="container-wide">
          <div style={{ marginBottom: "1.5rem" }}>
            <span className="tag-solid" style={{ background: "#8B0000" }}>Subject Patterns</span>
          </div>
          <p style={{ color: "#6b7280", marginBottom: "2rem", fontSize: "0.95rem" }}>
            Subject naming in the fabric — <code style={{ fontFamily: "monospace", color: "#22c55e", fontSize: "0.85rem" }}>agents.prompt.*</code> for prompts,
            <code style={{ fontFamily: "monospace", color: "#22c55e", fontSize: "0.85rem" }}> env.sensor.*</code> for telemetry,
            <code style={{ fontFamily: "monospace", color: "#22c55e", fontSize: "0.85rem" }}> fabric.*</code> for operations.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {natsSubjects.map((sub) => (
              <div key={sub.pattern} style={{ background: "#050607", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "0.5rem", padding: "1.25rem" }}>
                <div style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "#22c55e", marginBottom: "0.375rem" }}>
                  {sub.pattern}
                </div>
                <p style={{ fontSize: "0.85rem", color: "#6b7280", marginBottom: "0.625rem" }}>{sub.desc}</p>
                <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>{sub.example}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect guide */}
      <section className="section" style={{ background: "#050607" }}>
        <div className="container-tight">
          <div style={{ marginBottom: "1.5rem" }}>
            <span className="tag-solid" style={{ background: "#8B0000" }}>Connect to the fabric</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {connectExamples.map((ex) => (
              <div key={ex.label} style={{ background: "#0a0c0e", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "0.5rem", padding: "1.5rem" }}>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "white", marginBottom: "1rem" }}>{ex.label}</div>
                <div style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "#22c55e", background: "#050607", padding: "1rem", borderRadius: "0.375rem", whiteSpace: "pre-wrap", lineHeight: 1.8 }}>
                  {ex.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
