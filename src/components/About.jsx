import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image-container">
            <img
              src="src/assets/1738399960837.jpeg"
              alt="Arnav Karwa"
              className="profile-image"
            />
          </div>
          <div className="about-text-container">
            <p className="about-paragraph">
              I'm a Computer Science and Engineering (AI & Data Science) student
              at MIT-WPU, passionate about software development and data
              science. With expertise in full-stack development and AI-driven
              analytics, I specialize in building scalable applications and
              predictive models.
            </p>
            <p className="about-paragraph">
              Currently, I'm a Software Developer at Integrated Active
              Monitoring Pvt. Ltd. (IAM), where I work as a Full Stack Developer
              and Data Analyst.
            </p>
            <p className="about-paragraph">
              Beyond coding, I'm a Black Belt in Karate with international
              accolades, and I've played basketball at district-level
              championships, honing teamwork and leadership skills.
            </p>
            <div className="info-grid">
              <div className="info-block">
                <h3 className="info-title">Education</h3>
                <p>MIT-WPU</p>
                <p>B.Tech in CSE (AI & Data Science)</p>
              </div>
              <div className="info-block">
                <h3 className="info-title">Location</h3>
                <p>Pune, India</p>
              </div>
            </div>
            <a
              href="/Your_Resume.pdf"
              target="_blank"
              className="download-button"
              rel="noopener noreferrer"
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
