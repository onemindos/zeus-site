"use client";

import { useState, useEffect, useRef } from "react";
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (item: NavItem) => {
    if (item.url && (pathname === item.url || (item.url !== "/" && pathname.startsWith(item.url)))) return true;
    if (item.children?.some((c) => pathname === c.url || pathname.startsWith(c.url))) return true;
    return false;
  };

  return (
    <>
      <nav ref={navRef} className={scrolled ? "nav-scrolled" : ""}>
        <Link href="/" className="nav-logo">
          Zeus <span>DeLaCruz</span>
        </Link>

        <ul className="nav-links">
          {items.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const active = isActive(item);

            if (hasChildren) {
              return (
                <li
                  key={item.label}
                  className="nav-dropdown-parent"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`nav-dropdown-trigger${active ? " active" : ""}`}
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                    aria-expanded={openDropdown === item.label}
                  >
                    {item.label}
                    <svg
                      className={`nav-chevron${openDropdown === item.label ? " open" : ""}`}
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <div className={`nav-dropdown${openDropdown === item.label ? " open" : ""}`}>
                    {item.url && (
                      <Link
                        href={item.url}
                        className="nav-dropdown-item nav-dropdown-overview"
                      >
                        Overview
                      </Link>
                    )}
                    {item.children!.map((child) => (
                      <Link
                        key={child.url}
                        href={child.url}
                        className={`nav-dropdown-item${pathname === child.url || pathname.startsWith(child.url) ? " active" : ""}`}
                        target={child.openInNewTab ? "_blank" : undefined}
                        rel={child.openInNewTab ? "noreferrer" : undefined}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </li>
              );
            }

            return (
              <li key={item.url ?? item.label}>
                <Link
                  href={item.url ?? "/"}
                  className={active ? "active" : ""}
                  target={item.openInNewTab ? "_blank" : undefined}
                  rel={item.openInNewTab ? "noreferrer" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
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

      {/* Mobile menu */}
      <div className={open ? "mobile-menu open" : "mobile-menu"}>
        {items.map((item) => {
          const hasChildren = item.children && item.children.length > 0;
          if (hasChildren) {
            const mobileOpen = openMobileSection === item.label;
            return (
              <div key={item.label} className="mobile-section">
                <button
                  className="mobile-section-trigger"
                  onClick={() =>
                    setOpenMobileSection(mobileOpen ? null : item.label)
                  }
                >
                  {item.label}
                  <svg
                    className={`nav-chevron${mobileOpen ? " open" : ""}`}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {mobileOpen && (
                  <div className="mobile-section-children">
                    {item.url && (
                      <Link href={item.url} className="mobile-child-link">
                        Overview
                      </Link>
                    )}
                    {item.children!.map((child) => (
                      <Link
                        key={child.url}
                        href={child.url}
                        className={`mobile-child-link${pathname.startsWith(child.url) ? " active" : ""}`}
                        target={child.openInNewTab ? "_blank" : undefined}
                        rel={child.openInNewTab ? "noreferrer" : undefined}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }
          return (
            <Link
              key={item.url ?? item.label}
              href={item.url ?? "/"}
              className={pathname === item.url ? "mobile-link active" : "mobile-link"}
              target={item.openInNewTab ? "_blank" : undefined}
              rel={item.openInNewTab ? "noreferrer" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
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
