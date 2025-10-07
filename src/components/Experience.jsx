import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Harbinger Group",
      role: "Intern",
      period: "June 2025 - Present",
      description:
        "Working as a Gen AI developer intern, focusing on building and deploying AI models. Involved in developing AI-driven solutions, enhancing model performance, and integrating AI capabilities into existing systems.",
      skills: ["Python", "Langgraph", "LangChain", "Ollama", "SQL"],
      status: "ACTIVE",
      type: "AI Development",
    },
    {
      title: "Integrated Active Monitoring Pvt. Ltd. (IAM)",
      role: "Software Developer Intern",
      period: "Jan 2025 - April 2025",
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
      status: "COMPLETED",
      type: "Full-Stack Development",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="section-title cyber-title"
          >
            Experience
          </motion.h2>

          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="experience-card"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px var(--glow-purple)",
                }}
              >
                <div className="card-header">
                  <div className="company-info">
                    <h3 className="company-name">{exp.title}</h3>
                    <div className="role-info">
                      <span className="role-title">{exp.role}</span>
                      <span className="experience-type">{exp.type}</span>
                    </div>
                  </div>

                  <div className="status-info">
                    <div className="period">{exp.period}</div>
                  </div>
                </div>

                <div className="card-content">
                  <div className="description-panel">
                    <div className="panel-border"></div>
                    <p className="description">{exp.description}</p>
                  </div>

                  <div className="skills-section">
                    <div className="skills-header">
                      <span className="skills-label">TECH_STACK:</span>
                      <div className="skills-scanner"></div>
                    </div>
                    <div className="skills-grid">
                      {exp.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          className="skill-chip"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{
                            scale: 1.1,
                            boxShadow: "0 0 15px var(--neon-cyan)",
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .experience-timeline {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          position: relative;
        }

        .experience-timeline::before {
          content: "";
          position: absolute;
          left: 2rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(
            180deg,
            var(--neon-cyan) 0%,
            var(--neon-purple) 50%,
            var(--neon-pink) 100%
          );
          box-shadow: 0 0 10px var(--glow-cyan);
        }

        .experience-card {
          background: rgba(26, 13, 46, 0.6);
          backdrop-filter: blur(20px);
          border: 2px solid var(--neon-purple);
          border-radius: 20px;
          padding: 2rem;
          margin-left: 4rem;
          position: relative;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .experience-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            transparent 0%,
            rgba(191, 0, 255, 0.05) 50%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .experience-card:hover::before {
          opacity: 1;
        }

        .experience-card::after {
          content: "";
          position: absolute;
          left: -4rem;
          top: 2rem;
          width: 20px;
          height: 20px;
          background: var(--neon-cyan);
          border: 4px solid var(--primary-bg);
          border-radius: 50%;
          box-shadow: 0 0 20px var(--glow-cyan),
            inset 0 0 10px rgba(255, 255, 255, 0.3);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
          gap: 2rem;
        }

        .company-info {
          flex: 1;
        }

        .company-name {
          font-family: "Orbitron", monospace;
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--neon-cyan);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 0 10px var(--neon-cyan);
        }

        .role-info {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .role-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--neon-purple);
          text-shadow: 0 0 5px var(--neon-purple);
        }

        .experience-type {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-style: italic;
        }

        .status-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-family: "Share Tech Mono", monospace;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .status-indicator.active {
          background: rgba(0, 255, 65, 0.2);
          border: 1px solid var(--neon-green);
          color: var(--neon-green);
        }

        .status-indicator.completed {
          background: rgba(0, 255, 255, 0.2);
          border: 1px solid var(--neon-cyan);
          color: var(--neon-cyan);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: currentColor;
          box-shadow: 0 0 10px currentColor;
        }

        .status-indicator.active .status-dot {
          animation: pulse 2s infinite;
        }

        .period {
          font-family: "Share Tech Mono", monospace;
          font-size: 0.9rem;
          color: var(--text-secondary);
          padding: 0.3rem 0.8rem;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .card-content {
          display: grid;
          gap: 2rem;
        }

        .description-panel {
          position: relative;
          padding: 1.5rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid var(--neon-cyan);
          border-radius: 10px;
          border-left: 4px solid var(--neon-cyan);
        }

        .panel-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--neon-cyan), transparent);
        }

        .description {
          line-height: 1.8;
          color: var(--text-secondary);
          font-size: 1.05rem;
          margin: 0;
        }

        .skills-section {
          padding: 1.5rem;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--neon-purple);
          border-radius: 10px;
        }

        .skills-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .skills-label {
          font-family: "Share Tech Mono", monospace;
          color: var(--neon-purple);
          font-weight: 700;
          font-size: 0.9rem;
          text-shadow: 0 0 5px var(--neon-purple);
        }

        .skills-scanner {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, var(--neon-purple), transparent);
          position: relative;
          overflow: hidden;
        }

        .skills-scanner::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--neon-purple);
          animation: scan 2s linear infinite;
        }

        @keyframes scan {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .skill-chip {
          padding: 0.5rem 1rem;
          background: rgba(191, 0, 255, 0.1);
          border: 1px solid var(--neon-purple);
          border-radius: 20px;
          color: var(--neon-purple);
          font-size: 0.9rem;
          font-weight: 600;
          font-family: "Orbitron", monospace;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .skill-chip::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(191, 0, 255, 0.3),
            transparent
          );
          transition: left 0.5s ease;
        }

        .skill-chip:hover::before {
          left: 100%;
        }

        .skill-chip:hover {
          transform: translateY(-2px);
          text-shadow: 0 0 10px var(--neon-purple);
          border-color: var(--neon-cyan);
          color: var(--neon-cyan);
        }

        .neural-connections {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .connection-line {
          position: absolute;
          width: 1px;
          height: 20px;
          background: var(--neon-cyan);
          top: 10%;
          left: 10%;
          opacity: 0.3;
          animation: connectionPulse 3s infinite ease-in-out;
        }

        @keyframes connectionPulse {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.5) rotate(45deg);
          }
        }

        @media (max-width: 768px) {
          .experience-timeline::before {
            left: 1rem;
          }

          .experience-card {
            margin-left: 2rem;
            padding: 1.5rem;
          }

          .experience-card::after {
            left: -2rem;
            width: 15px;
            height: 15px;
          }

          .card-header {
            flex-direction: column;
            gap: 1rem;
          }

          .status-info {
            align-items: flex-start;
          }

          .company-name {
            font-size: 1.5rem;
          }

          .skills-grid {
            gap: 0.6rem;
          }

          .skill-chip {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .experience-timeline::before {
            display: none;
          }

          .experience-card {
            margin-left: 0;
          }

          .experience-card::after {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
