import { motion } from "framer-motion";

const About = () => {
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
    <section id="about" className="about section-padding">
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
            About Me
          </motion.h2>

          <div className="about-content">
            <motion.div
              variants={itemVariants}
              className="about-image-container"
            >
              <div className="cyber-frame">
                <div className="frame-corners">
                  <div className="corner top-left"></div>
                  <div className="corner top-right"></div>
                  <div className="corner bottom-left"></div>
                  <div className="corner bottom-right"></div>
                </div>

                <div className="image-wrapper">
                  <img
                    src="Public/assets/ME.jpeg"
                    alt="Arnav Karwa"
                    className="about-image"
                  />
                  <div className="image-overlay"></div>
                  <div className="scan-line"></div>
                </div>

                <div className="data-display">
                  <div className="data-line">
                    <span className="data-label">STATUS:</span>
                    <span className="data-value">ONLINE</span>
                  </div>
                  <div className="data-line">
                    <span className="data-label">LOCATION:</span>
                    <span className="data-value">INDIA</span>
                  </div>
                  <div className="data-line">
                    <span className="data-label">ROLE:</span>
                    <span className="data-value">DEVELOPER</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="about-text-container"
            >
              <div className="text-panel">
                <div className="panel-header">
                  <div className="header-lights">
                    <div className="light active"></div>
                    <div className="light"></div>
                    <div className="light"></div>
                  </div>
                  <span className="panel-title">PERSONAL_DATA.txt</span>
                </div>

                <div className="panel-content">
                  <motion.h3 className="about-subtitle" variants={itemVariants}>
                    Computer Science Student & Developer
                  </motion.h3>

                  <motion.p variants={itemVariants}>
                    I'm Arnav Karwa, a passionate Computer Science and
                    Engineering student at MIT-WPU, specializing in Artificial
                    Intelligence and Data Science. I love building applications
                    that solve real-world problems.
                  </motion.p>

                  <motion.p variants={itemVariants}>
                    With experience in both frontend and backend development, I
                    enjoy creating full-stack applications using modern
                    technologies like React, Node.js, Python, and various
                    databases. I'm always eager to learn new technologies and
                    take on challenging projects.
                  </motion.p>

                  <motion.p variants={itemVariants}>
                    Beyond coding, I have a black belt in Karate and played
                    basketball at the district level, which taught me
                    discipline, teamwork, and perseverance - qualities I bring
                    to my development work.
                  </motion.p>

                  <motion.div
                    className="skills-preview"
                    variants={itemVariants}
                  >
                    <div className="skills-header">
                      <span className="terminal-prompt">~/skills$</span>
                      <span className="blinking-cursor">_</span>
                    </div>
                    <div className="skills-grid">
                      {[
                        "Python",
                        "JavaScript",
                        "React",
                        "Node.js",
                        "Data Science",
                        "Machine Learning",
                      ].map((skill, index) => (
                        <motion.span
                          key={skill}
                          className="cyber-skill"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{
                            scale: 1.1,
                            boxShadow: "0 0 20px var(--neon-cyan)",
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: start;
          margin-top: 2rem;
        }

        .about-image-container {
          position: relative;
        }

        .cyber-frame {
          position: relative;
          background: rgba(26, 13, 46, 0.6);
          backdrop-filter: blur(20px);
          border: 2px solid var(--neon-purple);
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 0 30px var(--glow-purple),
            inset 0 0 30px rgba(191, 0, 255, 0.1);
        }

        .frame-corners {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 3px solid var(--neon-cyan);
        }

        .corner.top-left {
          top: -2px;
          left: -2px;
          border-right: none;
          border-bottom: none;
        }

        .corner.top-right {
          top: -2px;
          right: -2px;
          border-left: none;
          border-bottom: none;
        }

        .corner.bottom-left {
          bottom: -2px;
          left: -2px;
          border-right: none;
          border-top: none;
        }

        .corner.bottom-right {
          bottom: -2px;
          right: -2px;
          border-left: none;
          border-top: none;
        }

        .image-wrapper {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          border: 2px solid var(--neon-cyan);
          box-shadow: 0 0 20px var(--glow-cyan);
        }

        .about-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.3s ease;
        }

        .image-wrapper:hover .about-image {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(0, 255, 255, 0.1) 50%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .image-wrapper:hover .image-overlay {
          opacity: 1;
        }

        .scan-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--neon-cyan);
          box-shadow: 0 0 10px var(--neon-cyan);
          animation: scanLine 3s linear infinite;
        }

        @keyframes scanLine {
          0% {
            transform: translateY(-2px);
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(400px);
            opacity: 1;
          }
        }

        .data-display {
          margin-top: 1.5rem;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid var(--neon-green);
          border-radius: 8px;
          font-family: "Share Tech Mono", monospace;
        }

        .data-line {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .data-label {
          color: var(--neon-green);
          text-shadow: 0 0 5px var(--neon-green);
        }

        .data-value {
          color: var(--neon-cyan);
          text-shadow: 0 0 5px var(--neon-cyan);
        }

        .about-text-container {
          height: fit-content;
        }

        .text-panel {
          background: rgba(26, 13, 46, 0.6);
          backdrop-filter: blur(20px);
          border: 2px solid var(--neon-cyan);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 0 30px var(--glow-cyan),
            inset 0 0 30px rgba(0, 255, 255, 0.1);
        }

        .panel-header {
          background: rgba(0, 0, 0, 0.5);
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--neon-cyan);
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .header-lights {
          display: flex;
          gap: 0.5rem;
        }

        .light {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--text-muted);
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
        }

        .light.active {
          background: var(--neon-green);
          box-shadow: 0 0 10px var(--neon-green),
            inset 0 0 5px rgba(255, 255, 255, 0.3);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .panel-title {
          font-family: "Share Tech Mono", monospace;
          color: var(--neon-cyan);
          font-size: 0.9rem;
          text-shadow: 0 0 5px var(--neon-cyan);
        }

        .panel-content {
          padding: 2rem;
        }

        .about-subtitle {
          font-family: "Orbitron", monospace;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--neon-purple);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 0 10px var(--neon-purple);
        }

        .panel-content p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: var(--text-secondary);
          font-size: 1.05rem;
        }

        .skills-preview {
          margin-top: 2rem;
          padding: 1.5rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid var(--neon-green);
          border-radius: 10px;
        }

        .skills-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          font-family: "Share Tech Mono", monospace;
          color: var(--neon-green);
          font-size: 0.9rem;
        }

        .terminal-prompt {
          color: var(--neon-green);
          text-shadow: 0 0 5px var(--neon-green);
        }

        .blinking-cursor {
          color: var(--neon-cyan);
          animation: blink 1s infinite;
          margin-left: 0.2rem;
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .cyber-skill {
          padding: 0.5rem 1rem;
          background: rgba(0, 255, 255, 0.1);
          border: 1px solid var(--neon-cyan);
          border-radius: 20px;
          color: var(--neon-cyan);
          font-size: 0.9rem;
          font-weight: 600;
          font-family: "Orbitron", monospace;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cyber-skill::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s ease;
        }

        .cyber-skill:hover::before {
          left: 100%;
        }

        .cyber-skill:hover {
          transform: translateY(-2px);
          text-shadow: 0 0 10px var(--neon-cyan);
        }

        @media (max-width: 1024px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .about-image-container {
            max-width: 400px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .cyber-frame {
            padding: 1.5rem;
          }

          .panel-content {
            padding: 1.5rem;
          }

          .about-subtitle {
            font-size: 1.3rem;
          }

          .skills-grid {
            gap: 0.6rem;
          }

          .cyber-skill {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .cyber-frame {
            padding: 1rem;
          }

          .data-display {
            font-size: 0.8rem;
          }

          .panel-header {
            padding: 0.8rem 1rem;
          }

          .panel-content {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
