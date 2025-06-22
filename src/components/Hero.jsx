const Hero = () => {
  return (
    <section
      id="home"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "2rem",
        backgroundColor: document.body.classList.contains("dark")
          ? "#000000"
          : "#ffffff",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.05,
          zIndex: -1,
          backgroundImage: `radial-gradient(#4361ee 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div
        style={{
          textAlign: "center",
          maxWidth: "800px",
          padding: "0 2rem",
        }}
      >
        <p
          style={{
            fontSize: "1.2rem",
            color: "#4361ee",
            marginBottom: "1rem",
            fontWeight: "500",
          }}
        >
          Hello, I'm
        </p>
        <h1
          style={{
            fontSize: "3.5rem",
            marginBottom: "1rem",
            letterSpacing: "2px",
            fontWeight: "700",
          }}
        >
          Arnav Karwa
        </h1>
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "2rem",
            opacity: 0.8,
            fontWeight: "600",
          }}
        >
          Gen AI | Data Science | Full Stack
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.6,
            opacity: 0.9,
          }}
        >
          Building innovative web solutions and leveraging data science to
          create impactful applications.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-block",
              padding: "0.8rem 1.5rem",
              borderRadius: "5px",
              border: `2px solid ${
                document.body.classList.contains("dark") ? "#e0e0e0" : "#333333"
              }`,
              color: document.body.classList.contains("dark")
                ? "#e0e0e0"
                : "#333333",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.3s",
              textDecoration: "none",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = document.body.classList.contains(
                "dark"
              )
                ? "#e0e0e0"
                : "#333333";
              e.target.style.color = document.body.classList.contains("dark")
                ? "#121212"
                : "#ffffff";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = document.body.classList.contains("dark")
                ? "#e0e0e0"
                : "#333333";
            }}
          >
            Contact Me
          </a>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            marginTop: "3rem",
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
              fontSize: "1.5rem",
              transition: "color 0.3s",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
              fontSize: "1.5rem",
              transition: "color 0.3s",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
