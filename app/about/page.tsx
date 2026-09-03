import type { Metadata } from "next";
import Link from "next/link";
import { getPage } from "@/lib/payload";
import { ABOUT_PRINCIPLES, ABOUT_LINKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Zeus DeLaCruz — Builder, Founder, Operator. Founder of OneMind OS.",
};

export default async function About() {
  const page = await getPage("about");

  return (
    <>
      <section style={{ paddingTop: "calc(68px + 5rem)", paddingBottom: "5rem", paddingLeft: "clamp(1.5rem,5vw,4rem)", paddingRight: "clamp(1.5rem,5vw,4rem)", background: "var(--black-2)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "4rem", alignItems: "start" }}>
          <div style={{ width: "220px", height: "260px", borderRadius: "8px", background: "var(--black-3)", border: "2px solid var(--red)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "5rem", flexShrink: 0 }}>⚡</div>
          <div>
            <div className="tag">About</div>
            <h1 style={{ marginBottom: "0.5rem" }}>{page?.title || "Zeus DeLaCruz"}</h1>
            <div style={{ color: "var(--red-bright)", fontWeight: 600, marginBottom: "1.5rem", fontSize: "1rem" }}>Builder · Founder · Operator</div>
            {page?.excerpt ? (
              <p style={{ fontSize: "1.05rem", marginBottom: "1rem" }}>{page.excerpt}</p>
            ) : (
              <>
                <p style={{ fontSize: "1.05rem", marginBottom: "1rem" }}>
                  I build sovereign operations infrastructure — the kind of systems that work when everything else fails.
                  Founder of OneMind OS, the TAK-native situational awareness platform I always needed in the field.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  My background is in operations and systems integration. I've spent years watching teams lose the information war not because they lacked data — but because their tools couldn't fuse it into something actionable in real time.
                </p>
                <p>
                  OneMind is the answer I built for myself. Now I teach others how to run it.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section>
        <div className="container">
          <div className="tag">Philosophy</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <h2 style={{ marginBottom: "1.5rem" }}>Why I build in public</h2>
              <p style={{ marginBottom: "1rem" }}>
                The curriculum IS the product. Every system I teach is one I run in production. Every module is a real deployment, with real configs, real failure modes, real fixes.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Building in public is not a marketing strategy — it's an accountability structure. When I document what I build, I build better.
              </p>
              <p>
                And when students build what I run, they graduate with infrastructure that actually works — not a certificate and a toy project.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {ABOUT_PRINCIPLES.map(p => (
                <div key={p.label} style={{ borderLeft: "3px solid var(--red)", paddingLeft: "1.5rem" }}>
                  <div style={{ fontWeight: 700, color: "var(--white)", marginBottom: "0.3rem" }}>{p.label}</div>
                  <p style={{ fontSize: "0.9rem" }}>{p.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section style={{ background: "var(--black-2)" }}>
        <div className="container">
          <div className="tag">Find Me</div>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {ABOUT_LINKS.map(l => (
              <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="btn-ghost">{l.label} →</a>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />
      <footer>
        <p>© 2026 Zeus DeLaCruz.</p>
        <Link href="/contact" className="btn-primary">Work with me →</Link>
      </footer>
    </>
  );
}
