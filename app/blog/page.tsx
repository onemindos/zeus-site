import type { Metadata } from "next";
import Link from "next/link";
import { getPosts, formatDate, toPostCard, fallbackToCard, type PostCardData } from "@/lib/payload";
import { FALLBACK_POSTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Field notes on sovereign operations, AI agents, homesteading, finance, and security.",
};

export default async function Blog() {
  const payloadPosts = await getPosts();
  const posts: PostCardData[] = payloadPosts.length > 0
    ? payloadPosts.map(toPostCard)
    : FALLBACK_POSTS.map(fallbackToCard);

  return (
    <>
      <section style={{ paddingTop: "calc(68px + 5rem)", paddingBottom: "3rem", paddingLeft: "clamp(1.5rem,5vw,4rem)", paddingRight: "clamp(1.5rem,5vw,4rem)" }}>
        <div className="container">
          <div className="tag">Blog</div>
          <h1 style={{ marginBottom: "1rem" }}>Field notes & <span className="accent">dispatches</span></h1>
          <p style={{ maxWidth: "560px", fontSize: "1.05rem" }}>Operations, AI, homesteading, finance, security — everything I'm building, testing, and thinking about.</p>
        </div>
      </section>

      <div className="divider" />

      <section style={{ paddingTop: "4rem" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {posts.map(p => (
              <Link href={`/blog/${p.slug}`} key={p.slug} style={{ textDecoration: "none" }}>
                <div className="card" style={{ cursor: "pointer", display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--red-bright)", border: "1px solid var(--red)", padding: "3px 8px", borderRadius: "3px" }}>
                        {p.tag}
                      </span>
                      <span style={{ fontSize: "0.78rem", color: "var(--dim)" }}>
                        {formatDate(p.publishedAt)} · {p.readingTime} min read
                      </span>
                    </div>
                    <h3 style={{ fontSize: "1.15rem", marginBottom: "0.6rem", lineHeight: "1.35", color: "var(--white)" }}>{p.title}</h3>
                    {p.excerpt && <p style={{ fontSize: "0.9rem" }}>{p.excerpt}</p>}
                  </div>
                  <span style={{ color: "var(--red-bright)", fontSize: "1.5rem", marginTop: "0.5rem" }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />
      <footer>
        <p>© 2026 Zeus DeLaCruz.</p>
        <Link href="/" style={{ color: "var(--dim)", textDecoration: "none", fontSize: "0.85rem" }}>← Home</Link>
      </footer>
    </>
  );
}
