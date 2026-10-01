"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

// Load 3D globe client-side only (no SSR)
const Globe3D = dynamic(() => import("./Globe3D"), { ssr: false });

const stats = [
  { value: "10yr", label: "Event retention" },
  { value: "TAK", label: "Ecosystem native" },
  { value: "12", label: "AI agents on fabric" },
  { value: "100%", label: "Self-hosted" },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entrance animation — stagger children
    const els = textRef.current?.querySelectorAll(".animate-in");
    els?.forEach((el, i) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(28px)";
      setTimeout(() => {
        (el as HTMLElement).style.transition = "opacity 0.7s ease, transform 0.7s ease";
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      }, 200 + i * 120);
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      {/* Radial red glow */}
      <div className="absolute inset-0 bg-radial-red pointer-events-none" />

      {/* PLACEHOLDER_HERO_VIDEO */}
      {/* To add a video background: uncomment below and drop hero-loop.mp4 in /public/media/ */}
      {/*
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/media/hero-loop.mp4" type="video/mp4" />
        <source src="/media/hero-loop.webm" type="video/webm" />
      </video>
      */}

      {/* 3D Globe — right side */}
      <div className="absolute right-0 top-0 w-full lg:w-[55%] h-full opacity-90 pointer-events-none">
        <Globe3D />
      </div>

      {/* Gradient fade left edge of globe */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] bg-gradient-to-r from-black via-black/60 to-transparent pointer-events-none" />

      {/* Content */}
      <div ref={textRef} className="relative z-10 section pt-32 max-w-3xl">

        <div className="animate-in">
          <span className="tag">Situational Awareness Platform</span>
        </div>

        <h1 className="display-xl mt-6 animate-in">
          The OS for<br />
          <span className="text-red-bright text-glow-red">Sovereign</span><br />
          Operations
        </h1>

        <p className="subheading mt-6 max-w-xl animate-in">
          OneMind fuses sensors, drones, AI agents, and field teams into one
          closed-loop operations platform — built on the TAK ecosystem,
          deployed on your infrastructure, owned by you.
        </p>

        <div className="flex flex-wrap gap-4 mt-10 animate-in">
          <Link href="/platform" className="btn-primary">
            Explore Platform <ArrowRight size={16} />
          </Link>
          {/* PLACEHOLDER: Link to real demo video or live platform */}
          <Link href="https://atoc.onemindos.dev" target="_blank" className="btn-ghost">
            <Play size={15} /> Live Demo
          </Link>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/5 animate-in">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Deployment bar */}
        <div className="mt-8 animate-in">
          <p className="text-xs text-dim uppercase tracking-widest mb-3">Deployed by</p>
          <div className="flex flex-wrap gap-2">
            {["Law Enforcement", "SAR Teams", "Fire & EMS", "Defense", "Agriculture", "Private Security"].map((t) => (
              <span key={t} className="text-xs text-dim border border-white/10 px-3 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
