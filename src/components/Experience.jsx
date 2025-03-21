const Experience = () => {
  const experiences = [
    {
      title: "Integrated Active Monitoring Pvt. Ltd. (IAM)",
      role: "Software Engineer Intern",
      period: "Jan 2025 - Present",
      description:
        "Lead & solo developer for a sales web app, managing full-stack development with React.js, Angular, Redux, FastAPI, and Django. Optimized database performance by 500%, improved system stability, and built data visualization solutions with Pandas. Implemented authentication, API security, and access controls.",
      skills: [
        "React",
        "PostgreSQL",
        "FastAPI",
        "SQLAlchemy",
        "Postman API",
        "React Native",
        "Redux.js",
        "REST APIs",
        "SQLite",
        "Pandas",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="section"
      style={{
        backgroundColor: document.body.classList.contains("dark")
          ? "#0a0a0a"
          : "#f0f0f0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            fontSize: "1.75rem",
            fontWeight: "bold",
          }}
        >
          Experience
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              style={{
                padding: "1.5rem",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                backgroundColor: document.body.classList.contains("dark")
                  ? "#1a1a1a"
                  : "#ffffff",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1.5rem",
                  "@media (min-width: 768px)": {
                    gridTemplateColumns: "1fr 3fr",
                  },
                }}
                className="experience-card-content"
              >
                {/* Left column (info) */}
                <div>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      marginBottom: "0.5rem",
                      color: "#4361ee",
                      fontWeight: "600",
                    }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    style={{
                      fontWeight: "bold",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {exp.role}
                  </p>
                  <p
                    style={{
                      opacity: 0.8,
                      marginBottom: "1rem",
                    }}
                  >
                    {exp.period}
                  </p>
                </div>

                {/* Right column (description and skills) */}
                <div>
                  <p
                    style={{
                      lineHeight: "1.7",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {exp.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        style={{
                          backgroundColor: document.body.classList.contains(
                            "dark"
                          )
                            ? "#2a2a2a"
                            : "#e5e5e5",
                          color: document.body.classList.contains("dark")
                            ? "#e0e0e0"
                            : "#333333",
                          padding: "0.3rem 0.8rem",
                          borderRadius: "20px",
                          fontSize: "0.9rem",
                          display: "inline-block",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add CSS for responsive grid layout */}
      <style jsx>{`
        @media (min-width: 768px) {
          .experience-card-content {
            grid-template-columns: 1fr 3fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
