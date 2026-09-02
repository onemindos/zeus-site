// Structural data — layout config, not editorial prose.
// Edit here for structural changes (adding a module, reordering cards).
// Editorial copy (text, descriptions) lives in Ghost Pages.

export const PILLARS = [
  { icon: "🛡️", title: "OneMind OS", desc: "Sovereign ops platform on TAK. Sense → Fuse → Decide → Act. Built in public, deployed in production." },
  { icon: "📡", title: "The Sovereign Stack", desc: "Flagship course. NATS, TAK, AI agents, geo stack — you build what I run." },
  { icon: "🌾", title: "Homesteading", desc: "Off-grid tech integration. Sensors, automation, and resilient systems for the land." },
  { icon: "💰", title: "Finance", desc: "Sovereign wealth. DeFi infrastructure, multi-sig, and financial independence frameworks." },
  { icon: "🤸", title: "Wellness", desc: "Optimized performance for builders who operate under pressure." },
  { icon: "🔒", title: "Security", desc: "Guardian protocols. Physical and digital security for sovereign living." },
];

export const COURSE_MODULES = [
  "NATS substrate + agent mesh",
  "TAK Server on Kubernetes",
  "AI agent orchestration",
  "ClickHouse time machine",
  "Geo stack: Tile38, Valhalla, TimescaleDB",
  "Cloudflare Zero Trust ingress",
  "Live mission operations",
  "Building in public workflow",
];

export const COURSES_COMING_SOON = [
  { title: "Guardian Protocol", tag: "Security", desc: "Physical + digital security for sovereign operators. Threat modeling, comms security, home hardening." },
  { title: "Sovereign Finance", tag: "Finance", desc: "Multi-sig wallets, DeFi infrastructure, and financial independence stacks for builders." },
  { title: "Homestead OS", tag: "Homesteading", desc: "Sensor networks, automated irrigation, geo-aware farming — the smart sovereign land stack." },
];

export const SPEAKING_TOPICS = [
  { icon: "🧠", title: "The Sovereign Stack", desc: "Building self-hosted operations infrastructure — NATS, TAK, AI agents, and the closed-loop SA platform." },
  { icon: "🤖", title: "AI Agent Orchestration", desc: "Multi-agent meshes on NATS: how 12 autonomous agents collaborate in real time without human routing." },
  { icon: "🌐", title: "The TAK Ecosystem", desc: "Why TAK is the most important open-source platform most people have never heard of — and what comes next." },
  { icon: "🏡", title: "Sovereign Infrastructure", desc: "From homestead to enterprise: building resilient, privacy-first systems that don't depend on cloud vendors." },
  { icon: "📡", title: "Sensor Fusion & Situational Awareness", desc: "Turning raw data from drones, sensors, and cameras into decision-grade intelligence." },
  { icon: "💰", title: "Building in Public", desc: "The economics of radical transparency — how documenting the build IS the product." },
];

export const SPEAKING_FORMATS = [
  { title: "Keynote", duration: "30–60 min", desc: "High-signal, story-driven talk with live demos where possible. Conferences, summits, corporate events." },
  { title: "Workshop", duration: "Half/Full day", desc: "Hands-on build session. Attendees leave with a running system, not just notes." },
  { title: "Panel", duration: "45–90 min", desc: "Operational perspective on AI, autonomy, and resilient systems. No fluff." },
  { title: "Podcast", duration: "60–90 min", desc: "Deep technical conversation. I go wherever the thread leads." },
];

export const ABOUT_PRINCIPLES = [
  { label: "Sovereignty first", val: "Your data. Your hardware. Your infrastructure. No SaaS dependencies." },
  { label: "Build in public", val: "Every system documented. Transparent process, real outcomes." },
  { label: "Education as product", val: "The course IS the infrastructure. You ship real systems." },
  { label: "Ops-grade only", val: "No toy demos. If it doesn't run in production, it doesn't make the curriculum." },
];

export const ABOUT_LINKS = [
  { label: "OneMind OS", url: "https://onemindos.com" },
  { label: "GitHub", url: "https://github.com/onemindos" },
  { label: "Community", url: "https://community.onemindos.com" },
  { label: "Email", url: "mailto:zeus@onemindos.com" },
];

export const CONTACT_CHANNELS = [
  { icon: "📧", label: "Direct Email", val: "zeus@onemindos.com" },
  { icon: "🌐", label: "Community", val: "community.onemindos.com" },
  { icon: "💻", label: "GitHub", val: "github.com/onemindos" },
];

// Fallback blog posts shown when Ghost has no published content yet
export const FALLBACK_POSTS = [
  { slug: "tak-on-kubernetes", primary_tag: { name: "Operations" }, title: "How I run a TAK server on Kubernetes for under $100/mo", excerpt: "TAK Server 5.7 on DOKS with cert auth, WebTAK, and a full NATS bridge — the exact setup powering OneMind OS in production.", published_at: "2026-09-01", reading_time: 8 },
  { slug: "12-agent-mesh", primary_tag: { name: "AI Agents" }, title: "Building a 12-agent mesh on NATS — what I learned", excerpt: "After running 12 Hermes profiles as autonomous agents on one NATS cluster, here's the architecture, the failures, and what actually works.", published_at: "2026-08-28", reading_time: 12 },
  { slug: "sovereign-sensors", primary_tag: { name: "Homesteading" }, title: "Sovereign sensors: building a geo-aware farm", excerpt: "Environmental sensors, Tile38 geofencing, and Node-RED automations — how I turned 5 acres into a living data platform.", published_at: "2026-08-22", reading_time: 6 },
  { slug: "cloudtak-deep-dive", primary_tag: { name: "TAK" }, title: "CloudTAK deep dive: browser-native SA without ATAK", excerpt: "The dfpc-coe CloudTAK fork running on DOKS — plugins, AI panel integration, and why MapLibre beats Mapbox for sovereign deployments.", published_at: "2026-08-15", reading_time: 10 },
  { slug: "nats-truth", primary_tag: { name: "Infrastructure" }, title: "Why NATS is the only message bus that makes sense for edge ops", excerpt: "After running Kafka, MQTT, and Redis Streams for field operations, here's why NATS won and the others got cut.", published_at: "2026-08-08", reading_time: 7 },
  { slug: "sovereign-finance", primary_tag: { name: "Finance" }, title: "The sovereign wealth stack: DeFi without the casino", excerpt: "Multi-sig, self-custody, and DeFi infrastructure that isn't gambling — building financial sovereignty for builders who operate.", published_at: "2026-08-01", reading_time: 9 },
];
