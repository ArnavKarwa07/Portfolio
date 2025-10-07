import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Original project data based on actual GitHub repositories
  const projects = [
    {
      title: "Stock Market Predictor",
      description:
        "A 7-day stock market prediction system using LSTM neural networks and sentiment analysis. Built with Python, Keras, and data analysis libraries.",
      image:
        "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?w=600&auto=format&fit=crop&q=60",
      github: "https://github.com/ArnavKarwa07/Stock-Market-Predictor",
      demo: "",
      tags: ["Python", "LSTM", "Keras", "Pandas", "Data Analysis"],
      category: "data",
    },
    {
      title: "Amazon Smartphone Data Analysis",
      description:
        "Comprehensive smartphone data analysis project using machine learning techniques. Analyzes pricing trends, features, and customer preferences.",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60",
      github: "https://github.com/ArnavKarwa07/Amazon_Smartphone_Data_Analysis",
      demo: "",
      tags: ["Python", "Data Analysis", "Pandas", "Scikit-learn", "Matplotlib"],
      category: "data",
    },
    {
      title: "YouTube Dislikes Data Analysis",
      description:
        "Data analysis project examining YouTube engagement patterns and trends. Uses statistical analysis and visualization to understand user behavior.",
      image:
        "https://images.unsplash.com/photo-1521302200778-33500795e128?w=600&auto=format&fit=crop&q=60",
      github: "https://github.com/ArnavKarwa07/Youtube_Dislikes_Data_Analysis",
      demo: "",
      tags: ["Python", "Data Analysis", "Pandas", "Seaborn", "Statistics"],
      category: "data",
    },
    {
      title: "Handwritten Number Identifier",
      description:
        "Computer vision project for recognizing handwritten digits using Convolutional Neural Networks. Implements image preprocessing and pattern recognition.",
      image:
        "https://images.unsplash.com/photo-1520413766594-6e635f8d9908?w=600&auto=format&fit=crop&q=60",
      github: "https://github.com/ArnavKarwa07/Handwritten_Number_Identifier",
      demo: "",
      tags: [
        "Python",
        "CNN",
        "TensorFlow",
        "Computer Vision",
        "Image Processing",
      ],
      category: "ai",
    },
    {
      title: "Pharmacy Management System",
      description:
        "Complete pharmacy management system with inventory tracking, customer management, and billing features. Built with Python and MySQL.",
      image:
        "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=600&auto=format&fit=crop&q=60",
      github: "https://github.com/ArnavKarwa07/Pharmacy-Management-system",
      demo: "",
      tags: ["Python", "MySQL", "Tkinter", "Database Management"],
      category: "web",
    },
    {
      title: "Inventory Management System (C++)",
      description:
        "Object-oriented inventory management system built in C++. Features product tracking, stock management, and reporting capabilities.",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=600&auto=format&fit=crop&q=60",
      github: "https://github.com/ArnavKarwa07/Inventory-Mangement-using-Cpp",
      demo: "",
      tags: ["C++", "OOP", "Data Structures", "File Management"],
      category: "systems",
    },
    {
      title: "Restaurant Management System",
      description:
        "Full-stack restaurant ordering system with table management, menu handling, and bill generation. Built with web technologies.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60",
      github: "https://github.com/ArnavKarwa07/RESTAURANT-TTMM",
      demo: "",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "web",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI & ML" },
    { id: "data", label: "Data Science" },
    { id: "web", label: "Web Development" },
    { id: "systems", label: "Systems" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/ArnavKarwa07?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-large"
          >
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
