import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
];

function SiteHeader({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const menuToggleRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 920) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const closeOnPointerDown = (event) => {
      if (!menuOpen) {
        return;
      }

      const target = event.target;
      const clickedHeader = headerRef.current?.contains(target);
      const clickedToggle = menuToggleRef.current?.contains(target);

      if (!clickedHeader && !clickedToggle) {
        setMenuOpen(false);
      }
    };

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOnPointerDown);
    document.addEventListener("touchstart", closeOnPointerDown);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnPointerDown);
      document.removeEventListener("touchstart", closeOnPointerDown);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="site-header-inner">
        <NavLink to="/" className="brand-mark">
          <span className="brand-initial">AK</span>
          <span className="brand-text">Arnav Karwa</span>
        </NavLink>

        <button
          type="button"
          className="menu-toggle"
          ref={menuToggleRef}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
        >
          <span />
          <span />
        </button>

        <nav id="site-nav" className={`site-nav ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "is-active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              <span className="nav-text">{item.label}</span>
              <span className="nav-active-indicator" />
            </NavLink>
          ))}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
