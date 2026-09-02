import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/courses", label: "Courses" },
  { to: "/speaking", label: "Speaking" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <nav className={scrolled ? "nav-scrolled" : ""}>
        <Link to="/" className="nav-logo">Zeus <span>DeLaCruz</span></Link>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to} className={pathname === l.to ? "active" : ""}>{l.label}</Link>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <Link to="/contact" className="btn-primary">Work With Me</Link>
          <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            <span className={open ? "burger-line top open" : "burger-line top"} />
            <span className={open ? "burger-line mid open" : "burger-line mid"} />
            <span className={open ? "burger-line bot open" : "burger-line bot"} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={open ? "mobile-menu open" : "mobile-menu"}>
        {links.map(l => (
          <Link key={l.to} to={l.to} className={pathname === l.to ? "mobile-link active" : "mobile-link"}>
            {l.label}
          </Link>
        ))}
        <Link to="/contact" className="btn-primary" style={{ marginTop: "1rem", width: "100%", justifyContent: "center" }}>
          Work With Me
        </Link>
      </div>
      {open && <div className="mobile-overlay" onClick={() => setOpen(false)} />}
    </>
  );
}
