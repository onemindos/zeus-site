"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const modules = [
  "NATS substrate + agent mesh",
  "TAK Server on Kubernetes",
  "AI agent orchestration",
  "ClickHouse time machine",
  "Geo stack: Tile38, Valhalla",
  "Cloudflare Zero Trust ingress",
  "Live mission operations",
  "Building in public",
];

export default function EducationCTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section bg-black-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="tag">Education</span>
            <h2 className="display-md mt-4 mb-6">
              Learn by building<br />
              <span className="text-red-bright">what we actually run</span>
            </h2>
            <p className="text-dim leading-relaxed mb-8 text-lg">
              The Sovereign Stack curriculum is the OneMind infrastructure documented as a course.
              No toy demos. Every command is a real command. Every deployment is a real deployment.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/education" className="btn-primary">
                View Curriculum <ArrowRight size={15} />
              </Link>
              <Link href="https://community.onemindos.com" target="_blank" className="btn-ghost">
                Join Community
              </Link>
            </div>

            {/* Social proof placeholder */}
            {/* PLACEHOLDER: Add real student count + testimonial */}
            <div className="mt-10 flex items-center gap-4 pt-8 border-t border-white/5">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-9 h-9 rounded-full bg-black-4 border-2 border-black-2 flex items-center justify-center text-xs text-dim">
                    {/* PLACEHOLDER_AVATAR: Replace with real student avatars */}
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Founding cohort open</div>
                <div className="text-xs text-dim">Limited spots — founding member pricing</div>
              </div>
            </div>
          </motion.div>

          {/* Right — curriculum list */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-2"
          >
            {modules.map((mod, i) => (
              <motion.div
                key={mod}
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                className="flex items-center gap-4 p-4 bg-black-3 border border-white/5 rounded-lg hover:border-red/30 transition-colors group"
              >
                <span className="text-[0.7rem] font-bold text-red font-mono min-w-[2rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-dim group-hover:text-white transition-colors">{mod}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
