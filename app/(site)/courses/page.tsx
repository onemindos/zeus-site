export const dynamic = 'force-dynamic';
import type { Metadata } from "next";
import { getPage, getOffers } from "@/lib/payload";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courses",
  description: "Learn the Sovereign Stack — OneMind OS education and training programs.",
};

export default async function CoursesPage() {
  const [page, offers] = await Promise.all([
    getPage("courses"),
    getOffers("course"),
  ]);

  return (
    <>
      <section style={{ paddingTop: "calc(68px + 5rem)", paddingBottom: "5rem", paddingLeft: "clamp(1.5rem,5vw,4rem)", paddingRight: "clamp(1.5rem,5vw,4rem)", background: "var(--black-2)", textAlign: "center" }}>
        <div className="tag">Education</div>
        <h1 style={{ marginBottom: "1rem" }}>{(page as any)?.heroTitle || page?.title || "Learn the Sovereign Stack"}</h1>
        <p style={{ maxWidth: 600, margin: "0 auto 2rem", fontSize: "1.1rem" }}>{page?.excerpt || "Operator-grade training for builders who run their own infrastructure."}</p>
        <Link href="/contact" className="btn-primary">Enroll now →</Link>
      </section>

      <section style={{ paddingLeft: "clamp(1.5rem,5vw,4rem)", paddingRight: "clamp(1.5rem,5vw,4rem)", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          {offers.length > 0 ? (
            <div className="card-grid">
              {offers.map((offer) => (
                <div key={offer.id} className="card">
                  <div className="tag">{offer.type}</div>
                  <h3 style={{ marginBottom: "0.5rem", color: "var(--white)" }}>{offer.title}</h3>
                  {offer.tagline && <p style={{ marginBottom: "1.5rem" }}>{offer.tagline}</p>}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "1.5rem", borderTop: "1px solid var(--line)" }}>
                    <div>
                      <div style={{ color: "var(--red-bright)", fontWeight: 700, fontSize: "1.1rem" }}>
                        {offer.priceLabel || (offer.price ? `$${offer.price.toLocaleString()}` : "Custom")}
                      </div>
                      {offer.duration && <div style={{ fontSize: "0.8rem", color: "var(--dim)" }}>{offer.duration}</div>}
                    </div>
                    <Link href={offer.checkoutUrl || offer.bookingUrl || "/contact"} className="btn-primary" style={{ padding: "10px 20px" }}>
                      {offer.checkoutUrl ? "Enroll →" : "Book a call →"}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Fallback static cards until offers are added in CMS
            <div className="card-grid">
              {[
                { tag: "Course", title: "Sovereign Stack Foundations", tagline: "NATS, Kubernetes, TAK, and AI agents from scratch.", price: "$497", duration: "Self-paced · 8 modules" },
                { tag: "Cohort", title: "OneMind Operator Bootcamp", tagline: "10-week live cohort. Build your stack, deploy your ops.", price: "$2,497", duration: "10 weeks · cohort" },
                { tag: "1:1", title: "Private Coaching", tagline: "Direct access. Weekly 1:1s, async support, full roadmap.", price: "$5,000/mo", duration: "3-month minimum" },
              ].map((o) => (
                <div key={o.title} className="card">
                  <div className="tag">{o.tag}</div>
                  <h3 style={{ marginBottom: "0.5rem", color: "var(--white)" }}>{o.title}</h3>
                  <p style={{ marginBottom: "1.5rem" }}>{o.tagline}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "1.5rem", borderTop: "1px solid var(--line)" }}>
                    <div>
                      <div style={{ color: "var(--red-bright)", fontWeight: 700 }}>{o.price}</div>
                      <div style={{ fontSize: "0.8rem", color: "var(--dim)" }}>{o.duration}</div>
                    </div>
                    <Link href="/contact" className="btn-primary" style={{ padding: "10px 20px" }}>Apply →</Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <div className="divider" />
    </>
  );
}
