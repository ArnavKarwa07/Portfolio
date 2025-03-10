const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        "JavaScript",
        "Python",
        "C++",
        "C",
        "HTML/CSS",
        "TypeScript",
        "SQL",
        "PL/SQL",
        "PHP",
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        "React",
        "React Hooks",
        "React Native",
        "Angular",
        "AngularJS",
        "Tailwind CSS",
        "Bootstrap",
        "Redux.js",
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        "Node.js",
        "Express",
        "Django",
        "FastAPI",
        "REST APIs",
        "SQLAlchemy",
        "SQLite",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
      ],
    },
    {
      title: "Data Science",
      skills: [
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Tableau",
        "Microsoft Power BI",
        "Data Analysis",
        "Statistical Data Analysis",
        "Data Visualization",
      ],
    },
    {
      title: "Machine Learning",
      skills: [
        "TensorFlow",
        "Keras",
        "PyTorch",
        "Scikit-learn",
        "Deep Learning",
        "Machine Learning",
        "Artificial Intelligence (AI)",
        "LSTM",
      ],
    },
    {
      title: "Developer Tools",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "AWS",
        "Postman API",
        "Jupyter",
        "Firebase",
      ],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card"
              style={{
                padding: "2rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "1.5rem",
                  color: "#4361ee",
                  textAlign: "center",
                }}
              >
                {category.title}
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.7rem",
                  justifyContent: "center",
                }}
              >
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    style={{
                      backgroundColor: document.body.classList.contains("dark")
                        ? "#2a2a2a"
                        : "#e5e5e5",
                      color: document.body.classList.contains("dark")
                        ? "#e0e0e0"
                        : "#333333",
                      padding: "0.5rem 1rem",
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
