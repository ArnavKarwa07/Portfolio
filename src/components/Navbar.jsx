import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: scrolled ? "1rem 2rem" : "1.5rem 2rem",
        transition: "all 0.3s ease",
        zIndex: 1000,
        backgroundColor: scrolled
          ? document.body.classList.contains("dark")
            ? "#121212"
            : "#ffffff"
          : "transparent",
        boxShadow: scrolled ? "0 4px 10px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <a
          href="#"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            textDecoration: "none",
            color: document.body.classList.contains("dark")
              ? "#e0e0e0"
              : "#333333",
          }}
        >
          AK
        </a>

        <div
          style={{
            display: "flex",
            gap: "2rem",
          }}
        >
          {["Home", "About", "Experience", "Skills", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  textDecoration: "none",
                  color: document.body.classList.contains("dark")
                    ? "#e0e0e0"
                    : "#333333",
                  fontWeight: "500",
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.color = "#4361ee")}
                onMouseOut={(e) =>
                  (e.target.style.color = document.body.classList.contains(
                    "dark"
                  )
                    ? "#e0e0e0"
                    : "#333333")
                }
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
