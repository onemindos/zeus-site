"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const inquiryTypes = [
  { id: "deploy", label: "Deploy OneMind" },
  { id: "training", label: "Training / Course" },
  { id: "enterprise", label: "Enterprise" },
  { id: "speaking", label: "Speaking" },
  { id: "partnership", label: "Partnership" },
  { id: "other", label: "Other" },
];

export default function ContactForm() {
  const [type, setType] = useState("deploy");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // PLACEHOLDER: Wire to Formspree, Resend, or your own API route
    // Form action should POST to https://formspree.io/f/YOUR_ID or /api/contact
    setTimeout(() => { setLoading(false); setSent(true); }, 1000);
  };

  if (sent) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.5rem", padding: "4rem 2rem", background: "#0a0c0e", border: "1px solid rgba(139,0,0,0.2)", borderRadius: "0.75rem", textAlign: "center" }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(139,0,0,0.15)", border: "2px solid #8B0000", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.75rem" }}>✓</div>
        <div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>Message sent</h3>
          <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>We'll be in touch within 24 hours.</p>
        </div>
        <button onClick={() => setSent(false)} className="btn-ghost" style={{ fontSize: "0.85rem", padding: "0.6rem 1.25rem" }}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.5rem" }}>Send a message</h2>
      <p style={{ color: "#6b7280", fontSize: "0.9rem", marginBottom: "2rem" }}>
        Tell us what you're building and what you need.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

        {/* Inquiry type */}
        <div>
          <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#6b7280", marginBottom: "0.625rem" }}>
            What can we help with?
          </label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {inquiryTypes.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setType(t.id)}
                style={{
                  padding: "0.4rem 0.875rem",
                  borderRadius: "0.25rem",
                  border: "1px solid",
                  borderColor: type === t.id ? "#8B0000" : "rgba(255,255,255,0.1)",
                  background: type === t.id ? "rgba(139,0,0,0.2)" : "transparent",
                  color: type === t.id ? "#f5f5f5" : "#6b7280",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Name + email row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {[
            { id: "name", label: "Name", type: "text", placeholder: "Your name" },
            { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
          ].map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} style={{ display: "block", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#6b7280", marginBottom: "0.4rem" }}>
                {f.label}
              </label>
              <input
                id={f.id}
                name={f.id}
                type={f.type}
                placeholder={f.placeholder}
                required
                style={{
                  width: "100%",
                  background: "#0a0c0e",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "0.25rem",
                  padding: "0.7rem 0.875rem",
                  color: "#f5f5f5",
                  fontSize: "0.9rem",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#8B0000")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>
          ))}
        </div>

        {/* Organization */}
        <div>
          <label htmlFor="org" style={{ display: "block", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#6b7280", marginBottom: "0.4rem" }}>
            Organization <span style={{ color: "#6b7280", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>(optional)</span>
          </label>
          <input
            id="org"
            name="org"
            type="text"
            placeholder="Agency, company, or team"
            style={{
              width: "100%",
              background: "#0a0c0e",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "0.25rem",
              padding: "0.7rem 0.875rem",
              color: "#f5f5f5",
              fontSize: "0.9rem",
              outline: "none",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#8B0000")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" style={{ display: "block", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#6b7280", marginBottom: "0.4rem" }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder={
              type === "deploy" ? "Describe your team, use case, and current TAK setup..."
              : type === "enterprise" ? "Tell us about your agency, team size, and requirements..."
              : type === "training" ? "What does your team need to learn and by when?"
              : type === "speaking" ? "Tell us about the event — audience, date, format..."
              : "What are you working on?"
            }
            style={{
              width: "100%",
              background: "#0a0c0e",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "0.25rem",
              padding: "0.7rem 0.875rem",
              color: "#f5f5f5",
              fontSize: "0.9rem",
              outline: "none",
              resize: "vertical",
              transition: "border-color 0.2s",
              fontFamily: "inherit",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#8B0000")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
          />
        </div>

        <button type="submit" className="btn-primary" disabled={loading} style={{ alignSelf: "flex-start" }}>
          {loading ? "Sending..." : <>Send message <ArrowRight size={15} /></>}
        </button>
      </form>
    </div>
  );
}
