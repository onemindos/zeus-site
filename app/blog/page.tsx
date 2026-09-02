import type { Metadata } from "next";
import Link from "next/link";
import { getPosts, formatDate } from "@/lib/ghost";

export const metadata: Metadata = {
  title: "Blog",
  description: "Field notes on sovereign operations, AI agents, homesteading, finance, and security.",
};

const FALLBACK_POSTS = [
  { slug: "tak-on-kubernetes", primary_tag: { name: "Operations" }, title: "How I run a TAK server on Kubernetes for under $100/mo", excerpt: "TAK Server 5.7 on DOKS with cert auth, WebTAK, and a full NATS bridge — the exact setup powering OneMind OS in production.", published_at: "2026-09-01", reading_time: 8 },
  { slug: "12-agent-mesh", primary_tag: { name: "AI Agents" }, title: "Building a 12-agent mesh on NATS — what I learned", excerpt: "After running 12 Hermes profiles as autonomous agents on one NATS cluster, here's the architecture, the failures, and what actually works.", published_at: "2026-08-28", reading_time: 12 },
  { slug: "sovereign-sensors", primary_tag: { name: "Homesteading" }, title: "Sovereign sensors: building a geo-aware farm", excerpt: "Environmental sensors, Tile38 geofencing, and Node-RED automations — how I turned 5 acres into a living data platform.", published_at: "2026-08-22", reading_time: 6 },
  { slug: "cloudtak-deep-dive", primary_tag: { name: "TAK" }, title: "CloudTAK deep dive: browser-native SA without ATAK", excerpt: "The dfpc-coe CloudTAK fork running on DOKS — plugins, AI panel integration, and why MapLibre beats Mapbox for sovereign deployments.", published_at: "2026-08-15", reading_time: 10 },
  { slug: "nats-truth", primary_tag: { name: "Infrastructure" }, title: "Why NATS is the only message bus that makes sense for edge ops", excerpt: "After running Kafka, MQTT, and Redis Streams for field operations, here's why NATS won and the others got cut.", published_at: "2026-08-08", reading_time: 7 },
  { slug: "sovereign-finance", primary_tag: { name: "Finance" }, title: "The sovereign wealth stack: DeFi without the casino", excerpt: "Multi-sig, self-custody, and DeFi infrastructure that isn't gambling — building financial sovereignty for builders who operate.", published_at: "2026-08-01", reading_time: 9 },
];

export default async function Blog() {
  const ghostPosts = await getPosts();
  const posts = ghostPosts.length > 0 ? ghostPosts : FALLBACK_POSTS;

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
                        {p.primary_tag?.name ?? "Writing"}
                      </span>
                      <span style={{ fontSize: "0.78rem", color: "var(--dim)" }}>
                        {formatDate(p.published_at)} · {p.reading_time ?? 5} min read
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
