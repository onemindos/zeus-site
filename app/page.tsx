import type { Metadata } from "next";
import Link from "next/link";
import { getLatestPosts, formatDate } from "@/lib/ghost";

export const metadata: Metadata = {
  title: "Zeus DeLaCruz — Builder, Operator, Architect",
};

const FALLBACK_POSTS = [
  { slug: "tak-on-kubernetes", primary_tag: { name: "Operations" }, title: "How I run a TAK server on Kubernetes for under $100/mo", published_at: "2026-09-01", reading_time: 8 },
  { slug: "12-agent-mesh", primary_tag: { name: "AI Agents" }, title: "Building a 12-agent mesh on NATS — what I learned", published_at: "2026-08-28", reading_time: 12 },
  { slug: "sovereign-sensors", primary_tag: { name: "Homesteading" }, title: "Sovereign sensors: building a geo-aware farm", published_at: "2026-08-22", reading_time: 6 },
];

export default async function Home() {
  const ghostPosts = await getLatestPosts(3);
  const posts = ghostPosts.length > 0 ? ghostPosts : FALLBACK_POSTS;

  return (
    <>
      {/* HERO */}
      <section className="hero-full">
        <div className="hero-bg" />
        <div style={{ maxWidth: "800px", zIndex: 1 }}>
          <div className="tag">Builder · Operator · Architect</div>
          <h1>I build systems<br />that <span className="accent">don't fail</span><br />when it matters</h1>
          <p style={{ fontSize: "1.15rem", maxWidth: "560px", margin: "1.5rem 0 2.5rem" }}>
            Zeus DeLaCruz — founder of OneMind OS. I build sovereign operations infrastructure,
            teach the Sovereign Stack, and document the entire process in public.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/courses" className="btn-primary">Start Learning →</Link>
            <Link href="/about" className="btn-ghost">My Story</Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* WHAT I DO */}
      <section style={{ background: "var(--black-2)" }}>
        <div className="container">
          <div className="tag">What I Do</div>
          <h2 style={{ marginBottom: "3rem" }}>Six pillars. One mission.</h2>
          <div className="card-grid">
            {[
              { icon: "🛡️", title: "OneMind OS", desc: "Sovereign ops platform on TAK. Sense → Fuse → Decide → Act. Built in public, deployed in production." },
              { icon: "📡", title: "The Sovereign Stack", desc: "Flagship course. NATS, TAK, AI agents, geo stack — you build what I run." },
              { icon: "🌾", title: "Homesteading", desc: "Off-grid tech integration. Sensors, automation, and resilient systems for the land." },
              { icon: "💰", title: "Finance", desc: "Sovereign wealth. DeFi infrastructure, multi-sig, and financial independence frameworks." },
              { icon: "🤸", title: "Wellness", desc: "Optimized performance for builders who operate under pressure." },
              { icon: "🔒", title: "Security", desc: "Guardian protocols. Physical and digital security for sovereign living." },
            ].map(c => (
              <div className="card" key={c.title}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{c.icon}</div>
                <h3 style={{ marginBottom: "0.6rem" }}>{c.title}</h3>
                <p style={{ fontSize: "0.9rem" }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* LATEST POSTS */}
      <section>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div className="tag">Latest Writing</div>
              <h2>From the field</h2>
            </div>
            <Link href="/blog" className="btn-ghost">All posts →</Link>
          </div>
          <div className="card-grid">
            {posts.map(p => (
              <Link href={`/blog/${p.slug}`} key={p.slug} style={{ textDecoration: "none" }}>
                <div className="card" style={{ cursor: "pointer", height: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--red-bright)" }}>
                      {p.primary_tag?.name ?? "Writing"}
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "var(--dim)" }}>
                      {formatDate(p.published_at)} · {p.reading_time ?? 5} min
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.05rem", lineHeight: "1.4", color: "var(--white)" }}>{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section style={{ background: "var(--black-2)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div className="tag">Community</div>
          <h2 style={{ marginBottom: "1rem" }}>Build with me</h2>
          <p style={{ fontSize: "1.05rem", marginBottom: "2rem" }}>
            Join the OneMind community — founding members get full course access, live cohort calls, and direct line to me.
          </p>
          <a href="https://community.onemindos.com" className="btn-primary" target="_blank" rel="noreferrer">Join the Community →</a>
        </div>
      </section>

      <div className="divider" />
      <footer>
        <p>© 2026 Zeus DeLaCruz.</p>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Link href="/blog" style={{ color: "var(--dim)", textDecoration: "none", fontSize: "0.85rem" }}>Blog</Link>
          <a href="https://onemindos.com" style={{ color: "var(--dim)", textDecoration: "none", fontSize: "0.85rem" }}>OneMind OS</a>
          <Link href="/contact" style={{ color: "var(--dim)", textDecoration: "none", fontSize: "0.85rem" }}>Contact</Link>
        </div>
      </footer>
    </>
  );
}
