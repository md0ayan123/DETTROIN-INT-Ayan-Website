import { useState } from "react";
import "./Navbar.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#path", label: "Academics" },
  { href: "#why", label: "Why Us" },
  { href: "#life", label: "School Life" },
  { href: "#faq", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="wrap navbar">
        <a href="#top" className="logo">
          <span className="logo-mark">EI</span>
          Excellence International
        </a>

        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="nav-cta">
          <a href="tel:+917055582117" className="nav-phone">
            📞 +91 70555 82117
          </a>
          <a href="#admissions" className="btn btn-primary">
            Enquire Now
          </a>
       <button
          className={`burger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
        </button>
        </div>
      </nav>

        <div className={`mobile-panel ${open ? "open" : ""}`}>
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}

        <a
          href="#admissions"
          className="btn btn-primary"
          onClick={() => setOpen(false)}
        >
          Enquire Now
        </a>
      </div>
    </header>
  );
}
