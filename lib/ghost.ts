export type GhostPost = {
  id: string;
  slug: string;
  title: string;
  html?: string | null;
  excerpt?: string | null;
  feature_image?: string | null;
  published_at?: string | null;
  reading_time?: number;
  primary_tag?: { name: string } | null;
};

export type GhostPage = {
  id: string;
  slug: string;
  title: string;
  html?: string | null;
  excerpt?: string | null;
  custom_excerpt?: string | null;
  feature_image?: string | null;
  updated_at?: string | null;
};

const GHOST_URL = process.env.GHOST_URL || "https://cms.zeusdelacruz.com";
const GHOST_KEY = process.env.GHOST_CONTENT_API_KEY || "";

async function ghostFetch(path: string): Promise<unknown> {
  const url = `${GHOST_URL}/ghost/api/content/${path}&key=${GHOST_KEY}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) return null;
  return res.json();
}

export async function getPosts(): Promise<GhostPost[]> {
  try {
    const data = (await ghostFetch(
      "posts/?limit=all&include=tags&fields=id,slug,title,excerpt,feature_image,published_at,reading_time,primary_tag"
    )) as { posts?: GhostPost[] } | null;
    return data?.posts ?? [];
  } catch {
    return [];
  }
}

export async function getPost(slug: string): Promise<GhostPost | null> {
  try {
    const data = (await ghostFetch(
      `posts/slug/${slug}/?include=tags`
    )) as { posts?: GhostPost[] } | null;
    return data?.posts?.[0] ?? null;
  } catch {
    return null;
  }
}

export async function getLatestPosts(limit = 3): Promise<GhostPost[]> {
  try {
    const data = (await ghostFetch(
      `posts/?limit=${limit}&include=tags&fields=id,slug,title,excerpt,published_at,reading_time,primary_tag`
    )) as { posts?: GhostPost[] } | null;
    return data?.posts ?? [];
  } catch {
    return [];
  }
}

export async function getPage(slug: string): Promise<GhostPage | null> {
  try {
    const data = (await ghostFetch(
      `pages/slug/${slug}/?`
    )) as { pages?: GhostPage[] } | null;
    return data?.pages?.[0] ?? null;
  } catch {
    return null;
  }
}

export function formatDate(iso: string | null | undefined): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
