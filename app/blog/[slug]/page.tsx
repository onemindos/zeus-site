import type { Metadata } from "next";
import Link from "next/link";
import { getPost, formatDate } from "@/lib/payload";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt ?? undefined,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const tagName = Array.isArray(post.tags) && post.tags.length > 0
    ? (post.tags[0] as { tag?: string }).tag ?? null
    : null;

  return (
    <>
      <section style={{ paddingTop: "calc(68px + 5rem)", paddingBottom: "4rem", paddingLeft: "clamp(1.5rem,5vw,4rem)", paddingRight: "clamp(1.5rem,5vw,4rem)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <Link href="/blog" style={{ color: "var(--dim)", textDecoration: "none", fontSize: "0.88rem", marginBottom: "2rem", display: "inline-block" }}>← Back to blog</Link>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "1.5rem 0 1rem", flexWrap: "wrap" }}>
            {tagName && (
              <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--red-bright)", border: "1px solid var(--red)", padding: "3px 8px", borderRadius: "3px" }}>
                {tagName}
              </span>
            )}
            <span style={{ fontSize: "0.82rem", color: "var(--dim)" }}>
              {formatDate(post.publishedAt ?? undefined)}{post.readingTime ? ` · ${post.readingTime} min read` : ""}
            </span>
          </div>

          <h1 style={{ marginBottom: "2.5rem" }}>{post.title}</h1>

          {post.excerpt && !post.content && (
            <p style={{ fontSize: "1.05rem" }}>{post.excerpt}</p>
          )}

          {post.content && (
            <div className="post-content" />
          )}
        </div>
      </section>

      <div className="divider" />
      <footer>
        <p>© 2026 Zeus DeLaCruz.</p>
        <Link href="/blog" style={{ color: "var(--dim)", textDecoration: "none", fontSize: "0.85rem" }}>← All posts</Link>
      </footer>
    </>
  );
}
