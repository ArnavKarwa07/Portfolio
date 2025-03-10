const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
            "@media (max-width: 768px)": {
              gridTemplateColumns: "1fr",
            },
          }}
        >
          <div>
            <img
              src="src\assets\1738399960837.jpeg"
              alt="Arnav Karwa"
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
          <div>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              I'm a Computer Science and Engineering (AI & Data Science) student
              at MIT-WPU, passionate about software development and data
              science. With expertise in full-stack development and AI-driven
              analytics, I specialize in building scalable applications and
              predictive models.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              Currently, I'm a Software Developer at Integrated Active
              Monitoring Pvt. Ltd. (IAM), where I work as a Full Stack Developer
              and Data Analyst.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              Beyond coding, I'm a Black Belt in Karate with international
              accolades, and I’ve played basketball at district-level
              championships, honing teamwork and leadership skills.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginTop: "2rem",
              }}
            >
              <div>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                  Education
                </h3>
                <p>MIT-WPU</p>
                <p>B.Tech in CSE (AI & Data Science)</p>
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                  Location
                </h3>
                <p>Pune, India</p>
              </div>
            </div>
            <a
              href="/Your_Resume.pdf"
              target="_blank"
              className="btn btn-primary"
              style={{
                marginTop: "2rem",
                display: "inline-block",
              }}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
