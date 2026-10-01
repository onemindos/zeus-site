import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Zeus DeLaCruz. All rights reserved.</p>
      <nav style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        <Link href="/about" style={{ color: "var(--dim)", textDecoration: "none", fontSize: "0.85rem" }}>About</Link>
        <Link href="/courses" style={{ color: "var(--dim)", textDecoration: "none", fontSize: "0.85rem" }}>Courses</Link>
        <Link href="/blog" style={{ color: "var(--dim)", textDecoration: "none", fontSize: "0.85rem" }}>Blog</Link>
        <Link href="/contact" style={{ color: "var(--dim)", textDecoration: "none", fontSize: "0.85rem" }}>Contact</Link>
        <a href="https://community.onemindos.com" target="_blank" rel="noreferrer" style={{ color: "var(--dim)", textDecoration: "none", fontSize: "0.85rem" }}>Community ↗</a>
      </nav>
    </footer>
  );
}
