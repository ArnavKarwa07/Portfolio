import { motion } from "framer-motion";
import data from "../data/data.json";

const Skills = () => {
  const { skills } = data;
  const skillCategories = skills.categories;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert":
        return "var(--agent-cyan)";
      case "Proficient":
        return "var(--agent-blue)";
      case "Intermediate":
        return "var(--agent-purple)";
      case "Beginner":
        return "var(--neural-orange)";
      default:
        return "var(--text-secondary)";
    }
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="section-title gradient-text"
          >
            {skills.sectionTitle}
          </motion.h2>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="skill-category-card"
              >
                <h3 className="skill-category-title">{category.title}</h3>

                <div className="skill-levels">
                  {Object.entries(category.skills).map(([level, skillList]) => (
                    <div key={level} className="skill-level-group">
                      <h4
                        className="skill-level-title"
                        style={{ color: getLevelColor(level) }}
                      >
                        {level}:
                      </h4>
                      <div className="skill-tags">
                        {skillList.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            className="skill-tag"
                            style={{
                              borderColor: getLevelColor(level),
                              color: getLevelColor(level),
                            }}
                            whileHover={{
                              scale: 1.05,
                              boxShadow: `0 0 15px ${getLevelColor(level)}40`,
                            }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
