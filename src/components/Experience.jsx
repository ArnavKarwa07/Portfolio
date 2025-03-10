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
      <div className="container">
        <h2 className="section-title">Experience</h2>
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
              className="card"
              style={{
                padding: "2rem",
                display: "grid",
                gridTemplateColumns: "1fr 3fr",
                gap: "2rem",
                alignItems: "start",
                "@media (max-width: 768px)": {
                  gridTemplateColumns: "1fr",
                  padding: "1.5rem",
                },
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    marginBottom: "0.5rem",
                    color: "#4361ee",
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
              <div>
                <p
                  style={{
                    lineHeight: 1.7,
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
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
