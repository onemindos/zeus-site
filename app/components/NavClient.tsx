"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/lib/payload";

export default function NavClient({
  items,
  ctaLabel,
  ctaUrl,
}: {
  items: NavItem[];
  ctaLabel: string;
  ctaUrl: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={scrolled ? "nav-scrolled" : ""}>
        <Link href="/" className="nav-logo">
          Zeus <span>DeLaCruz</span>
        </Link>

        <ul className="nav-links">
          {items.map((l) => (
            <li key={l.url}>
              <Link
                href={l.url}
                className={pathname === l.url || (l.url !== "/" && pathname.startsWith(l.url)) ? "active" : ""}
                target={l.openInNewTab ? "_blank" : undefined}
                rel={l.openInNewTab ? "noreferrer" : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <Link href={ctaUrl} className="btn-primary">
            {ctaLabel}
          </Link>
          <button
            className="nav-burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={open ? "burger-line top open" : "burger-line top"} />
            <span className={open ? "burger-line mid open" : "burger-line mid"} />
            <span className={open ? "burger-line bot open" : "burger-line bot"} />
          </button>
        </div>
      </nav>

      <div className={open ? "mobile-menu open" : "mobile-menu"}>
        {items.map((l) => (
          <Link
            key={l.url}
            href={l.url}
            className={pathname === l.url ? "mobile-link active" : "mobile-link"}
            target={l.openInNewTab ? "_blank" : undefined}
            rel={l.openInNewTab ? "noreferrer" : undefined}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href={ctaUrl}
          className="btn-primary"
          style={{ marginTop: "1rem", width: "100%", justifyContent: "center" }}
        >
          {ctaLabel}
        </Link>
      </div>
      {open && (
        <div className="mobile-overlay" onClick={() => setOpen(false)} />
      )}
    </>
  );
}
