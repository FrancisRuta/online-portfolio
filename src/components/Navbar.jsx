import { useState, useEffect } from "react";
import { profile } from "../data/portfolioData";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Companies", href: "#companies" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.querySelector(item.href),
      );
      const scrollPos = window.scrollY + 100;

      let current = "#home";
      sections.forEach((section, index) => {
        if (section && section.offsetTop <= scrollPos) {
          current = navItems[index].href;
        }
      });
      setActive(current);
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href) => {
    setOpen(false);
    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a
          href="#home"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
        >
          <svg
            className="logo-mark"
            viewBox="0 0 512 512"
            width="58"
            height="58"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="logo-badge" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#1e293b" />
                <stop offset="1" stop-color="#141c2f" />
              </linearGradient>
            </defs>
            <circle cx="256" cy="256" r="244" fill="url(#logo-badge)" />
            <circle
              className="logo-ring"
              cx="256"
              cy="256"
              r="244"
              fill="none"
              stroke="var(--accent-cyan)"
              stroke-width="10"
            />
            <g fill="#e2e8f0">
              <rect x="176" y="150" width="52" height="212" rx="26" />
              <rect x="176" y="150" width="150" height="52" rx="26" />
              <rect x="176" y="250" width="120" height="52" rx="26" />
            </g>
            <circle cx="326" cy="276" r="18" fill="var(--accent-cyan)" />
          </svg>
        </a>

        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={active === item.href ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.href);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
