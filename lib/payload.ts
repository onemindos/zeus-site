import { getPayload } from "payload";
import config from "@payload-config";
import type { Post, Page } from "@/payload-types";
import type { FallbackPost } from "@/lib/content";

export type { Post, Page };
export type PostCardData = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string | null;
  publishedAt: string;
  readingTime: number;
};

export function toPostCard(post: Post): PostCardData {
  const tag = Array.isArray(post.tags) && post.tags.length > 0
    ? (post.tags[0] as { tag?: string }).tag ?? "Writing"
    : "Writing";
  return {
    slug: post.slug,
    tag,
    title: post.title,
    excerpt: post.excerpt ?? null,
    publishedAt: post.publishedAt ?? "",
    readingTime: post.readingTime ?? 5,
  };
}

export function fallbackToCard(p: FallbackPost): PostCardData {
  return { slug: p.slug, tag: p.tag, title: p.title, excerpt: p.excerpt, publishedAt: p.publishedAt, readingTime: p.readingTime };
}

export function formatDate(dateStr: string | null | undefined): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function getPosts(): Promise<Post[]> {
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "posts",
      where: { status: { equals: "published" } },
      sort: "-publishedAt",
      limit: 100,
    });
    return result.docs as unknown as Post[];
  } catch {
    return [];
  }
}

export async function getLatestPosts(limit = 3): Promise<Post[]> {
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "posts",
      where: { status: { equals: "published" } },
      sort: "-publishedAt",
      limit,
    });
    return result.docs as unknown as Post[];
  } catch {
    return [];
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "posts",
      where: { slug: { equals: slug }, status: { equals: "published" } },
      limit: 1,
    });
    return (result.docs[0] as unknown as Post) ?? null;
  } catch {
    return null;
  }
}

export async function getPage(slug: string): Promise<Page | null> {
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "pages",
      where: { slug: { equals: slug }, status: { equals: "published" } },
      limit: 1,
    });
    return (result.docs[0] as unknown as Page) ?? null;
  } catch {
    return null;
  }
}
