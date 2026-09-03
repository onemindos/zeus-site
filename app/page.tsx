import type { Metadata } from "next";
import Link from "next/link";
import { getLatestPosts, getPage, formatDate, toPostCard, fallbackToCard, type PostCardData } from "@/lib/payload";
import { PILLARS, FALLBACK_POSTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Zeus DeLaCruz — Builder, Operator, Architect",
};

export default async function Home() {
  const [payloadPosts, heroPage] = await Promise.all([
    getLatestPosts(3),
    getPage("home"),
  ]);

  const posts: PostCardData[] = payloadPosts.length > 0
    ? payloadPosts.map(toPostCard)
    : FALLBACK_POSTS.map(fallbackToCard);

  const heroTitle = heroPage?.title || "I build systems that don't fail when it matters";
  const heroExcerpt = heroPage?.excerpt || "Zeus DeLaCruz — founder of OneMind OS. I build sovereign operations infrastructure, teach the Sovereign Stack, and document the entire process in public.";

  return (
    <>
      <section className="hero-full">
        <div className="hero-bg" />
        <div style={{ maxWidth: "800px", zIndex: 1 }}>
          <div className="tag">Builder · Operator · Architect</div>
          <h1>
            {heroTitle.includes("don't fail") ? (
              <>I build systems<br />that <span className="accent">don't fail</span><br />when it matters</>
            ) : (
              heroTitle
            )}
          </h1>
          <p style={{ fontSize: "1.15rem", maxWidth: "560px", margin: "1.5rem 0 2.5rem" }}>
            {heroExcerpt}
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/courses" className="btn-primary">Start Learning →</Link>
            <Link href="/about" className="btn-ghost">My Story</Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section style={{ background: "var(--black-2)" }}>
        <div className="container">
          <div className="tag">What I Do</div>
          <h2 style={{ marginBottom: "3rem" }}>Six pillars. One mission.</h2>
          <div className="card-grid">
            {PILLARS.map(c => (
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
                      {p.tag}
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "var(--dim)" }}>
                      {formatDate(p.publishedAt)} · {p.readingTime} min
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
