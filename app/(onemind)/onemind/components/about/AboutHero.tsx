"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const Globe3D = dynamic(() => import("../Globe3D"), { ssr: false });

export default function AboutHero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".animate-in");
    els?.forEach((el, i) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(24px)";
      setTimeout(() => {
        (el as HTMLElement).style.transition = "opacity 0.7s ease, transform 0.7s ease";
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      }, 150 + i * 100);
    });
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#050607",
        paddingTop: "5rem",
      }}
    >
      {/* Grid */}
      <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.6, pointerEvents: "none" }} />

      {/* Subtle globe background */}
      <div style={{ position: "absolute", right: 0, top: 0, width: "50%", height: "100%", opacity: 0.3, pointerEvents: "none" }}>
        <Globe3D />
      </div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #050607 50%, transparent)", pointerEvents: "none" }} />

      <div ref={ref} className="section container-wide" style={{ position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: "720px" }}>
          <div className="animate-in">
            <span className="tag">About OneMind OS</span>
          </div>
          <h1 className="display-lg animate-in" style={{ marginTop: "1.5rem" }}>
            We build the <span className="text-glow-red" style={{ color: "#b91c1c" }}>nervous system</span><br />
            for sovereign operations
          </h1>
          <p className="subheading animate-in" style={{ marginTop: "1.5rem", maxWidth: "600px" }}>
            OneMind OS is the extension layer that turns the open-source TAK ecosystem into a
            closed-loop operations platform. We build the senses, the memory, and the mind —
            everything the TAK chassis doesn't provide.
          </p>

          {/* Quick stats */}
          <div className="animate-in" style={{ display: "flex", gap: "3rem", marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.05)", flexWrap: "wrap" }}>
            {[
              { value: "2026", label: "Founded" },
              { value: "22", label: "DOKS namespaces" },
              { value: "12", label: "AI agents" },
              { value: "10yr", label: "Data retention" },
            ].map((s) => (
              <div key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "8rem", background: "linear-gradient(to top, #050607, transparent)", pointerEvents: "none" }} />
    </section>
  );
}
