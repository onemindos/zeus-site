export interface Robot {
  slug: string;
  name: string;
  type: "ground" | "aerial" | "aquatic" | "fixed" | "simulation";
  status: "live" | "development" | "planned";
  tagline: string;
  description: string;
  takIntegration: string[];
  natsSubjects: string[];
  capabilities: string[];
  protocols: string[];
  repo: string | null;
  location: string;
  hardwareRequired: string[];
  relatedAgents: string[];
}

export const robots: Robot[] = [
  {
    slug: "drone-sentinel",
    name: "Sentinel Drone",
    type: "aerial",
    status: "development",
    tagline: "Autonomous aerial ISR over the fabric",
    description: "Fixed-wing or quadcopter drone integrated directly into the OneMind NATS bus. Streams live telemetry as CoT to any TAK client, pushes video to MediaMTX, and accepts autonomous tasking from Legacy.",
    takIntegration: ["CoT position broadcasts", "Video via MediaMTX → CloudTAK", "Mission waypoints from ATAK", "Geofence enforcement via TAK Server"],
    natsSubjects: ["fabric.robot.drone.*.telemetry", "fabric.robot.drone.*.command", "fabric.robot.drone.*.video"],
    capabilities: ["Real-time position CoT", "Autonomous waypoint nav", "Live RTSP/WebRTC video feed", "NATS command ingestion", "Geofence alerts", "Battery + health telemetry"],
    protocols: ["MAVLink 2.0", "RTSP", "WebRTC", "CoT (TAK)", "NATS"],
    repo: "onemindos/omos-robotics",
    location: "src/drones/sentinel/",
    hardwareRequired: ["Pixhawk FC or ArduPilot-compatible", "Companion computer (Raspberry Pi 5 / Jetson Orin)", "Video transmitter (HDMI → USB capture or native camera)"],
    relatedAgents: ["legacy", "oracle", "grid"],
  },
  {
    slug: "ugv-rover",
    name: "Ground Rover (UGV)",
    type: "ground",
    status: "planned",
    tagline: "Autonomous ground patrol and recon",
    description: "Unmanned ground vehicle that patrols a defined perimeter, streams sensor data over NATS, and appears as a TAK track on any operator's map. Sensor fusion: cameras, LiDAR, thermal, and environmental.",
    takIntegration: ["Continuous position CoT", "Sensor alerts as TAK markers", "Mission routes from ATAK", "Contact reports to TAK chat"],
    natsSubjects: ["fabric.robot.ugv.*.telemetry", "fabric.robot.ugv.*.sensors", "fabric.robot.ugv.*.command"],
    capabilities: ["Perimeter patrol", "Obstacle avoidance", "Thermal imaging", "LiDAR SLAM mapping", "Environmental sensing (air, soil)", "Two-way NATS command channel"],
    protocols: ["ROS 2", "CoT (TAK)", "NATS", "RTSP"],
    repo: "onemindos/omos-robotics",
    location: "src/ugv/rover/",
    hardwareRequired: ["ROS 2-compatible chassis", "Jetson Orin or similar", "LiDAR (optional)", "Thermal camera (optional)"],
    relatedAgents: ["legacy", "guardian", "grid"],
  },
  {
    slug: "robot-gateway",
    name: "Robot Gateway",
    type: "simulation",
    status: "development",
    tagline: "Bridge between ROS 2 and the OneMind NATS bus",
    description: "The omos-robotics gateway translates ROS 2 topics to NATS subjects and CoT. Any robot running ROS 2 can join the fabric in minutes — telemetry flows to TAK, commands flow from agents.",
    takIntegration: ["ROS 2 odometry → CoT position", "ROS 2 diagnostics → TAK sensor alerts", "Agent commands → ROS 2 action servers"],
    natsSubjects: ["fabric.robot.*.telemetry", "fabric.robot.*.command", "fabric.robot.*.status"],
    capabilities: ["ROS 2 ↔ NATS bridge", "CoT generation from odometry", "Agent command passthrough", "Multi-robot fleet management", "Simulation (Gazebo / Isaac Sim) support"],
    protocols: ["ROS 2 (DDS)", "NATS", "CoT (TAK)", "WebRTC (sim video)"],
    repo: "onemindos/omos-robotics",
    location: "src/gateway/",
    hardwareRequired: ["Any ROS 2 compatible system", "Network access to NATS cluster"],
    relatedAgents: ["legacy", "oracle"],
  },
  {
    slug: "dimos",
    name: "DimOS Robot OS",
    type: "simulation",
    status: "development",
    tagline: "OneMind's sovereign robot operating system",
    description: "DimOS is the OneMind native robot OS layer — purpose-built for field robotics on the fabric. It manages sensor fusion, navigation stacks, agent command interfaces, and TAK integration in one cohesive runtime.",
    takIntegration: ["Native CoT publisher", "TAK mission plan executor", "Direct CloudTAK map overlay"],
    natsSubjects: ["fabric.robot.<id>.*"],
    capabilities: ["Sensor fusion pipeline", "Navigation stack (Nav2)", "NATS-native command bus", "TAK-native position + alerting", "OTA firmware updates via NATS"],
    protocols: ["ROS 2", "NATS", "CoT", "MAVLink"],
    repo: "onemindos/omos-robotics",
    location: "src/dimos/",
    hardwareRequired: ["ARM64 SBC (Jetson / Pi 5)", "ROS 2 Jazzy or Humble"],
    relatedAgents: ["legacy", "grid"],
  },
];
