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
  return (
    <nav>
      <Link to="/" className="nav-logo">Zeus <span>DeLaCruz</span></Link>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.to}>
            <Link to={l.to} className={pathname === l.to ? "active" : ""}>{l.label}</Link>
          </li>
        ))}
      </ul>
      <a href="/contact" className="btn-primary">Work With Me</a>
    </nav>
  );
}
