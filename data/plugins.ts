export interface Plugin {
  slug: string;
  category: "cloudtak" | "atak" | "tak-server" | "hermes";
  name: string;
  description: string;
  status: "live" | "development" | "planned";
  repo: string | null;
  location: string;
  capabilities: string[];
  buildSteps: string[];
  license: string;
}

export const plugins: Plugin[] = [
  // CloudTAK Plugins
  {
    slug: "legacy-ai",
    category: "cloudtak",
    name: "Legacy AI Panel",
    description: "AI-powered situational awareness panel inside CloudTAK. Brings Legacy directly into the operator dashboard.",
    status: "live",
    repo: "onemindos/cloudtak-plugin-legacy-ai",
    location: "WEB_PLUGINS build arg (CloudTAK plugin injection)",
    capabilities: [
      "Real-time AI analysis inside CloudTAK",
      "NATS bus integration for agent queries",
      "Live map annotations from Legacy",
      "Operator-LLM direct interface",
      "Geofence and AOI intelligence",
    ],
    buildSteps: [
      "cd cloudtak && docker build --build-arg WEB_PLUGINS=\"legacy-ai\" .",
    ],
    license: "MIT",
  },
  {
    slug: "omos-fabric",
    category: "cloudtak",
    name: "OneMind Fabric",
    description: "NATS substrate integration bringing all fabric services directly into CloudTAK.",
    status: "planned",
    repo: "onemindos/omos-fabric",
    location: "WEB_PLUGINS (planned)",
    capabilities: [
      "NATS bus directly on CloudTAK",
      "Agent query interface",
      "ClickHouse data viz",
      "Sensor status",
    ],
    buildSteps: [
      "npm install & build for plugin-ready Web Plugins",
    ],
    license: "MIT",
  },
  {
    slug: "omos-intel",
    category: "cloudtak",
    name: "OneMind Intel",
    description: "Intelligence feeds integration — ADS-B, AIS, cUAS data inside CloudTAK.",
    status: "planned",
    repo: "onemindos/omos-intel",
    location: "WEB_PLUGINS (planned)",
    capabilities: [
      "ADS-B aircraft tracking",
      "AIS maritime tracking",
      "cUAS drone detection",
    ],
    buildSteps: [
      "npm install & build for plugin-ready Web Plugins",
    ],
    license: "MIT",
  },
  {
    slug: "omos-video",
    category: "cloudtak",
    name: "OneMind Video",
    description: "MediaMTX + tactical VMS integration inside CloudTAK.",
    status: "planned",
    repo: "onemindos/omos-video",
    location: "WEB_PLUGINS (planned)",
    capabilities: [
      "Live RTSP/WebRTC feeds",
      "Video player with map context",
      "Bookmark and sharing",
    ],
    buildSteps: [
      "cd cloudtak && docker build --build-arg WEB_PLUGINS=\"cloudtak-plugin-video\" .",
    ],
    license: "MIT",
  },
  {
    slug: "omos-buildings",
    category: "cloudtak",
    name: "OneMind Buildings",
    description: "3D building models with GeoJSON integration for tactical planning.",
    status: "planned",
    repo: "onemindos/omos-buildings",
    location: "WEB_PLUGINS (planned)",
    capabilities: [
      "3D building models",
      "GeoJSON import",
      "Pre-mission planning",
    ],
    buildSteps: [
      "Install 3D models (GLB format)",
    ],
    license: "MIT",
  },
  {
    slug: "omos-community",
    category: "cloudtak",
    name: "OneMind Community",
    description: "Community features inside CloudTAK — member directory, event calendar, forum integration.",
    status: "planned",
    repo: "onemindos/omos-community",
    location: "WEB_PLUGINS (planned)",
    capabilities: [
      "Member directory inside CloudTAK",
      "Event calendar",
      "Circle integration",
    ],
    buildSteps: [
      "Integration via Circle API",
    ],
    license: "MIT",
  },
  // ATAK Plugins
  {
    slug: "hermes-plugin",
    category: "atak",
    name: "Hermes Plugin",
    description: "Android ATAK plugin for full NATS agent access from field devices.",
    status: "development",
    repo: "onemindos/hermes-plugin",
    location: "ATAK Plugin (Android APK)",
    capabilities: [
      "NATS integration on Android",
      "Full agent access",
      "Biometric monitoring",
    ],
    buildSteps: [
      "ATAC plugin approved via WARDEN MDM",
    ],
    license: "MIT",
  },
  {
    slug: "omos-buildings-atak",
    category: "atak",
    name: "OneMind Buildings (ATAK)",
    description: "ATAK-specific 3D buildings plugin for Android.",
    status: "planned",
    repo: "onemindos/omos-buildings-atak",
    location: "ATAK Plugin",
    capabilities: [
      "3D buildings on Android",
      "GLB model support",
    ],
    buildSteps: [
      "ATAC plugin approved",
    ],
    license: "MIT",
  },
  // Hermes Skills (MCP Plugins)
  {
    slug: "mcp-cloudflare",
    category: "hermes",
    name: "Cloudflare MCP",
    description: "Hermes MCP server for Cloudflare management — DNS, zones, Workers, observation.",
    status: "live",
    repo: null,
    location: "Hermes config (mcp.cloudflare.com/mcp)",
    capabilities: [
      "Cloudflare API access",
      "Zone management",
    ],
    buildSteps: [
      "Configured via Hermes MCP registration",
    ],
    license: "MIT",
  },
  {
    slug: "mcp-notion",
    category: "hermes",
    name: "Notion MCP",
    description: "Hermes MCP server for Notion integration — pages, databases, workspace sync.",
    status: "live",
    repo: null,
    location: "Hermes config (@notion MCP)",
    capabilities: [
      "Notion workspace control",
      "Page and DB management",
    ],
    buildSteps: [
      "Integrated via Hermes MCP registration",
    ],
    license: "MIT",
  },
  {
    slug: "mcp-composio",
    category: "hermes",
    name: "Composio MCP",
    description: "Hermes MCP integration via Composio for 200+ SaaS tools natively.",
    status: "live",
    repo: null,
    location: "Hermes config (Composio)",
    capabilities: [
      "200+ tool integrations",
    ],
    buildSteps: [
      "Authentication in Composio dashboard",
    ],
    license: "MIT",
  },
];
