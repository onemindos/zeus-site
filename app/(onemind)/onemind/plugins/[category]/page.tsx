import { plugins } from "@/data/plugins";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props { params: Promise<{ category: string }>; }

export function generateStaticParams() {
  const categories = [...new Set(plugins.map((p) => p.category))];
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  return { title: `${category} Plugins — OneMind OS` };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryPlugins = plugins.filter((p) => p.category === category);
  if (!categoryPlugins.length) return notFound();

  return (
    <main style={{ padding: "2rem", maxWidth: 900, margin: "0 auto" }}>
      <Link href="/onemind/plugins" style={{ color: "#888", fontSize: 14 }}>
        ← All Plugins
      </Link>
      <h1 style={{ marginTop: "1rem", textTransform: "capitalize" }}>
        {category} Plugins
      </h1>
      <div style={{ display: "grid", gap: "1rem", marginTop: "1.5rem" }}>
        {categoryPlugins.map((p) => (
          <Link
            key={p.slug}
            href={`/onemind/plugins/${category}/${p.slug}`}
            style={{
              display: "block",
              padding: "1rem 1.5rem",
              border: "1px solid #333",
              borderRadius: 8,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <strong>{p.name}</strong>
            <p style={{ margin: "0.25rem 0 0", color: "#aaa", fontSize: 14 }}>
              {p.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
