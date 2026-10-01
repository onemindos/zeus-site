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

export type NavChild = {
  label: string;
  url: string;
  openInNewTab?: boolean;
};

export type NavItem = {
  label: string;
  url?: string;
  openInNewTab?: boolean;
  cta?: boolean;
  children?: NavChild[];
};

export type NavData = {
  items: NavItem[];
  ctaLabel: string;
  ctaUrl: string;
};

export type OfferData = {
  id: string;
  title: string;
  type: string;
  tagline?: string | null;
  priceLabel?: string | null;
  price?: number | null;
  duration?: string | null;
  bookingUrl?: string | null;
  checkoutUrl?: string | null;
  features?: { feature: string }[];
};

export function toPostCard(post: Post): PostCardData {
  const tag =
    Array.isArray(post.tags) && post.tags.length > 0
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
  return {
    slug: p.slug,
    tag: p.tag,
    title: p.title,
    excerpt: p.excerpt,
    publishedAt: p.publishedAt,
    readingTime: p.readingTime,
  };
}

export function formatDate(dateStr: string | null | undefined): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ─── Posts ────────────────────────────────────────────────────────────────────

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

// ─── Pages ────────────────────────────────────────────────────────────────────

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

// ─── Navigation global ────────────────────────────────────────────────────────

const DEFAULT_NAV: NavData = {
  items: [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Courses", url: "/courses" },
    { label: "Speaking", url: "/speaking" },
    { label: "Blog", url: "/blog" },
    { label: "OneMind", url: "/onemind" },
    { label: "Contact", url: "/contact" },
  ],
  ctaLabel: "Work With Me",
  ctaUrl: "/contact",
};

export async function getNavigation(): Promise<NavData> {
  try {
    const payload = await getPayload({ config });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const nav = await (payload as any).findGlobal({ slug: "navigation" });
    if (!nav?.items?.length) return DEFAULT_NAV;
    return {
      items: nav.items as NavItem[],
      ctaLabel: nav.ctaLabel ?? DEFAULT_NAV.ctaLabel,
      ctaUrl: nav.ctaUrl ?? DEFAULT_NAV.ctaUrl,
    };
  } catch {
    return DEFAULT_NAV;
  }
}

// ─── Offers ───────────────────────────────────────────────────────────────────

export async function getOffers(type?: string): Promise<OfferData[]> {
  try {
    const payload = await getPayload({ config });
    const where: import("payload").Where = { status: { equals: "published" } };
    if (type) (where as Record<string, unknown>).type = { equals: type };
    const result = await payload.find({
      collection: "offers",
      where,
      limit: 50,
    });
    return result.docs as unknown as OfferData[];
  } catch {
    return [];
  }
}

// ─── Leads (contact form) ─────────────────────────────────────────────────────

export async function createLead(data: {
  name: string;
  email: string;
  message: string;
  type: string;
}): Promise<boolean> {
  try {
    const payload = await getPayload({ config });
    await payload.create({
      collection: "leads",
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
        type: data.type,
        status: "new",
      },
    });
    return true;
  } catch {
    return false;
  }
}
