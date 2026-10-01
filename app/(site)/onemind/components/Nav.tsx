"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, X, Menu } from "lucide-react";

type NavItem = { href: string; label: string; desc?: string };
type NavSection = {
  id: string;
  label: string;
  columns: { heading: string; items: NavItem[] }[];
};

const navSections: NavSection[] = [
  {
    id: "platform",
    label: "Platform",
    columns: [
      {
        heading: "Operations",
        items: [
          { href: "/platform#overwatch", label: "Overwatch", desc: "Real-time common operating picture" },
          { href: "/platform#tak-feeds", label: "TAK Feeds", desc: "Sensor & data feeds to any TAK server" },
          { href: "/platform#vms", label: "Tactical VMS", desc: "Multi-camera video management" },
          { href: "/platform#geo-stack", label: "Geo Stack", desc: "Maps, routing, and spatial intelligence" },
        ],
      },
      {
        heading: "Infrastructure",
        items: [
          { href: "/nats", label: "NATS Bus", desc: "The fabric backbone" },
          { href: "/platform#deployment", label: "Deployment", desc: "Self-hosted or cloud — your choice" },
          { href: "/tools", label: "Tools", desc: "CLI, dashboards, dev utilities" },
        ],
      },
    ],
  },
  {
    id: "agents",
    label: "Agents",
    columns: [
      {
        heading: "Sovereign Agents",
        items: [
          { href: "/agents/legacy", label: "Legacy", desc: "Mother — cloud sovereign AI" },
          { href: "/agents/oracle", label: "Oracle", desc: "Intelligence & recon" },
          { href: "/agents/guardian", label: "Guardian", desc: "Security & perimeter" },
          { href: "/agents/forge", label: "Forge", desc: "Master dev orchestrator" },
          { href: "/agents/empire", label: "Empire", desc: "Business operations" },
          { href: "/agents/haven", label: "Haven", desc: "Health & wellness" },
        ],
      },
      {
        heading: "Specialist Agents",
        items: [
          { href: "/agents/heritage", label: "Heritage", desc: "History & knowledge" },
          { href: "/agents/grid", label: "Grid", desc: "Infrastructure & power" },
          { href: "/agents/spartan", label: "Spartan", desc: "Physical training" },
          { href: "/agents/trinity", label: "Trinity", desc: "Finance & resources" },
          { href: "/agents/eden", label: "Eden", desc: "Homestead & agriculture" },
          { href: "/agents", label: "All Agents →", desc: "" },
        ],
      },
    ],
  },
  {
    id: "plugins",
    label: "Plugins",
    columns: [
      {
        heading: "Platform Plugins",
        items: [
          { href: "/plugins#cloudtak", label: "CloudTAK Plugins", desc: "OneMind platform extensions" },
          { href: "/plugins#atak", label: "ATAK Plugins", desc: "Android field device plugins" },
          { href: "/plugins#tak-server", label: "TAK Server Plugins", desc: "Server-side extensions" },
        ],
      },
      {
        heading: "Developer",
        items: [
          { href: "/plugins#hermes", label: "Hermes Plugins", desc: "Skills & MCP servers" },
          { href: "/plugins", label: "All Plugins →", desc: "" },
        ],
      },
    ],
  },
  {
    id: "robotics",
    label: "Robotics",
    columns: [
      {
        heading: "Systems",
        items: [
          { href: "/robotics/drone-sentinel", label: "Sentinel Drone", desc: "Aerial ISR over the fabric" },
          { href: "/robotics/ugv-rover", label: "Ground Rover", desc: "Autonomous perimeter patrol" },
          { href: "/robotics/robot-gateway", label: "Robot Gateway", desc: "ROS 2 ↔ NATS bridge" },
          { href: "/robotics/dimos", label: "DimOS", desc: "Sovereign robot OS" },
        ],
      },
      {
        heading: "Integration",
        items: [
          { href: "/robotics#tak-integration", label: "TAK Integration", desc: "How robots appear on TAK" },
          { href: "/nats#robot-subjects", label: "NATS Subjects", desc: "fabric.robot.* subject map" },
          { href: "/robotics", label: "All Systems →", desc: "" },
        ],
      },
    ],
  },
];

const simpleLinks = [
  { href: "/education", label: "Education" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  /* scroll shadow */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* close on outside click */
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  /* close on route change */
  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, []);

  const toggle = (id: string) => setOpen((prev) => (prev === id ? null : id));

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(5,6,7,0.97)" : "rgba(5,6,7,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid #1f1f1f" : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", height: "64px", gap: "0.25rem" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", marginRight: "2rem", flexShrink: 0 }} onClick={() => setOpen(null)}>
          <span style={{ fontSize: "1rem", fontWeight: 800, color: "white", letterSpacing: "-0.02em" }}>
            ONE<span style={{ color: "#b91c1c" }}>MIND</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.125rem", flex: 1 }} className="nav-desktop">
          {navSections.map((section) => (
            <div key={section.id} style={{ position: "relative" }}>
              <button
                onClick={() => toggle(section.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "0.375rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: open === section.id ? "white" : "#9ca3af",
                  backgroundColor: open === section.id ? "rgba(255,255,255,0.05)" : "transparent",
                  transition: "color 0.15s, background 0.15s",
                }}
                aria-expanded={open === section.id}
              >
                {section.label}
                <ChevronDown
                  size={14}
                  style={{
                    transition: "transform 0.2s",
                    transform: open === section.id ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              {/* Dropdown */}
              {open === section.id && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#0d0d0d",
                    border: "1px solid #1f1f1f",
                    borderRadius: "0.75rem",
                    padding: "1.25rem",
                    minWidth: "480px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                    zIndex: 1001,
                  }}
                >
                  {section.columns.map((col, ci) => (
                    <div
                      key={col.heading}
                      style={{
                        padding: "0 1rem",
                        borderRight: ci === 0 ? "1px solid #1f1f1f" : "none",
                      }}
                    >
                      <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "#4b5563", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                        {col.heading}
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.125rem" }}>
                        {col.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(null)}
                            style={{ textDecoration: "none", display: "block", padding: "0.5rem 0.5rem", borderRadius: "0.375rem" }}
                            className="nav-dropdown-item"
                          >
                            <div style={{ fontSize: "0.83rem", fontWeight: 600, color: "#e5e7eb" }}>{item.label}</div>
                            {item.desc && <div style={{ fontSize: "0.72rem", color: "#6b7280", marginTop: "0.125rem" }}>{item.desc}</div>}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Simple links */}
          {simpleLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(null)}
              style={{ fontSize: "0.875rem", fontWeight: 500, color: "#9ca3af", padding: "0.5rem 0.75rem", textDecoration: "none", borderRadius: "0.375rem" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link href="/contact" className="btn-red" style={{ fontSize: "0.8rem", padding: "0.5rem 1.25rem", flexShrink: 0 }} onClick={() => setOpen(null)}>
          Get Started
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "white", marginLeft: "0.75rem", padding: "0.25rem" }}
          className="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", padding: "1rem 1.5rem 2rem", maxHeight: "80vh", overflowY: "auto" }}>
          {navSections.map((section) => (
            <div key={section.id} style={{ marginBottom: "1.5rem" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#4b5563", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.625rem" }}>
                {section.label}
              </div>
              {section.columns.flatMap((col) => col.items).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ display: "block", padding: "0.5rem 0", fontSize: "0.9rem", color: "#d1d5db", textDecoration: "none", borderBottom: "1px solid #111" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          {simpleLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{ display: "block", padding: "0.5rem 0", fontSize: "0.9rem", color: "#d1d5db", textDecoration: "none", borderBottom: "1px solid #111" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .nav-desktop { display: flex !important; }
        .nav-mobile-toggle { display: none !important; }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
        .nav-dropdown-item:hover { background: rgba(255,255,255,0.04) !important; }
        .nav-dropdown-item:hover div:first-child { color: white !important; }
      `}</style>
    </nav>
  );
}
