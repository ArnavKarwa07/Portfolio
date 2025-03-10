const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: document.body.classList.contains("dark")
          ? "#0a0a0a"
          : "#f0f0f0",
        padding: "2rem 0",
        textAlign: "center",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginBottom: "1.5rem",
          }}
        >
          <a
            href="https://www.linkedin.com/in/arnav-karwa/"
            target="_blank"
            rel="noreferrer"
            style={{
              color: document.body.classList.contains("dark")
                ? "#e0e0e0"
                : "#333333",
              transition: "color 0.3s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: document.body.classList.contains("dark")
                ? "#2a2a2a"
                : "#e5e5e5",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="https://github.com/ArnavKarwa07"
            target="_blank"
            rel="noreferrer"
            style={{
              color: document.body.classList.contains("dark")
                ? "#e0e0e0"
                : "#333333",
              transition: "color 0.3s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: document.body.classList.contains("dark")
                ? "#2a2a2a"
                : "#e5e5e5",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href="mailto:arnavkarwa07@gmail.com"
            style={{
              color: document.body.classList.contains("dark")
                ? "#e0e0e0"
                : "#333333",
              transition: "color 0.3s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: document.body.classList.contains("dark")
                ? "#2a2a2a"
                : "#e5e5e5",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
        <div
          style={{
            marginTop: "1rem",
          }}
        >
          <p>© {currentYear} Arnav Karwa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
