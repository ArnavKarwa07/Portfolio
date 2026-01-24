import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("featured");

  // Project data based on actual GitHub repositories
  const projects = [
    {
      title: "Agrotech",
      description:
        "Agriculture-focused solution that helps with smarter farming decisions using a tech-driven data/information workflow. Built with modern web technologies for data analysis and insights.",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
      github: "https://github.com/ArnavKarwa07/Agrotech",
      demo: "https://agro-tech-roan.vercel.app/login",
      tags: ["React", "Data Analysis", "Agriculture Tech", "Full-Stack"],
      category: "web",
      featured: true,
    },
    {
      title: "Prompt Master",
      description:
        "Web app that reviews and optimizes prompts to improve the quality and consistency of LLM outputs. Helps users craft better AI prompts for enhanced results.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
      github: "https://github.com/ArnavKarwa07/Prompt-Master",
      demo: "https://prompt-master-sepia.vercel.app/",
      tags: ["Python", "LLM", "AI", "Prompt Engineering"],
      category: "ai",
      featured: true,
    },
    {
      title: "Automated EDA",
      description:
        "Automated exploratory data analysis tool that generates key insights, statistics, and visualizations from datasets. Streamlines data discovery and analysis workflow.",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
      github: "https://github.com/ArnavKarwa07/Automated_EDA",
      demo: "",
      tags: ["Python", "Data Analysis", "Pandas", "Visualization"],
      category: "data",
      featured: true,
    },
    {
      title: "High Speed Face Recognition System",
      description:
        "Real-time face recognition system optimized for fast detection and identification. Implements advanced computer vision techniques for efficient facial analysis.",
      image:
        "https://images.unsplash.com/photo-1581091215367-59ab6b9314e1?auto=format&fit=crop&w=900&q=80",
      github: "https://github.com/ArnavKarwa07/High_Speed_Face_Recognition",
      demo: "",
      tags: ["Python", "OpenCV", "Computer Vision", "ML", "Face Recognition"],
      category: "ai",
    },
    {
      title: "Dynamic Personal Finance Agent",
      description:
        "AI-powered finance agent that tracks expenses and automates personal finance tasks with intelligent workflows. Provides smart financial insights and recommendations.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
      github: "https://github.com/ArnavKarwa07/Dynamic-Personal-Finance-Agent",
      demo: "",
      tags: ["Python", "AI Agent", "Finance", "Automation", "LLM"],
      category: "ai",
    },
    {
      title: "ClauseCraftAI",
      description:
        "GenAI solution that summarizes complex legal documents into easy-to-understand language. Demystifies legal content using advanced NLP and generative AI.",
      image:
        "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=900&q=80",
      github:
        "https://github.com/ArnavKarwa07/Generative_AI_for_Demystifying_Legal_Documents",
      demo: "",
      tags: ["JavaScript", "GenAI", "NLP", "Document Processing"],
      category: "ai",
    },
    {
      title: "AI Course Recommendation System",
      description:
        "Recommendation system that suggests relevant AI/tech courses based on user preferences and interest signals. Uses ML algorithms to match users with ideal learning paths.",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80",
      github: "https://github.com/ArnavKarwa07/AI-Course-Recommendation-System",
      demo: "",
      tags: [
        "JavaScript",
        "Machine Learning",
        "Recommendation Engine",
        "Education Tech",
      ],
      category: "web",
    },
    {
      title: "Real Estate Price Predictor",
      description:
        "ML model to predict property prices using key housing features and location-based factors. Analyzes real estate data to forecast market values accurately.",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
      github: "https://github.com/ArnavKarwa07",
      demo: "",
      tags: ["Python", "Machine Learning", "Scikit-learn", "Data Science"],
      category: "data",
    },
    {
      title: "Stock Market Predictor",
      description:
        "A 7-day stock market prediction system using LSTM neural networks and sentiment analysis. Built with Python, Keras, and data analysis libraries.",
      image:
        "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?auto=format&fit=crop&w=900&q=80",
      github: "https://github.com/ArnavKarwa07/Stock-Market-Predictor",
      demo: "",
      tags: ["Python", "LSTM", "Keras", "Pandas", "Data Analysis"],
      category: "data",
    },
    {
      title: "Handwritten Number Identifier",
      description:
        "Computer vision project for recognizing handwritten digits using Convolutional Neural Networks. Implements image preprocessing and pattern recognition.",
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?auto=format&fit=crop&w=900&q=80",
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
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
      github: "https://github.com/ArnavKarwa07/Pharmacy-Management-system",
      demo: "",
      tags: ["Python", "MySQL", "Tkinter", "Database Management"],
      category: "systems",
    },
    {
      title: "Inventory Management System",
      description:
        "Object-oriented inventory management system built in C++. Features product tracking, stock management, and reporting capabilities with efficient data structures.",
      image:
        "https://images.unsplash.com/photo-1582719471137-2ff50e8c0a6b?auto=format&fit=crop&w=900&q=80",
      github: "https://github.com/ArnavKarwa07/Inventory-Mangement-using-Cpp",
      demo: "",
      tags: ["C++", "OOP", "Data Structures", "File Management"],
      category: "systems",
    },
    {
      title: "Restaurant Management System",
      description:
        "Full-stack restaurant management solution to streamline ordering, menu handling, and table/customer flow operations. Built with web technologies and databases.",
      image:
        "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=900&q=80",
      github: "https://github.com/ArnavKarwa07/RESTAURANT-TTMM",
      demo: "",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "web",
    },
    {
      title: "YouTube Dislikes Data Analysis",
      description:
        "Data analysis on YouTube engagement datasets to extract trends, correlations, and meaningful insights. Statistical analysis of user engagement patterns.",
      image:
        "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=900&q=80",
      github: "https://github.com/ArnavKarwa07/Youtube_Dislikes_Data_Analysis",
      demo: "",
      tags: ["Python", "Data Analysis", "Pandas", "Seaborn", "Statistics"],
      category: "data",
    },
    {
      title: "Amazon Smartphone Data Analysis",
      description:
        "Analysis of smartphone listings data to identify trends in pricing, ratings, and brand-wise performance. Comprehensive market analysis using data science techniques.",
      image:
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80",
      github: "https://github.com/ArnavKarwa07/Amazon_Smartphone_Data_Analysis",
      demo: "",
      tags: ["Python", "Data Analysis", "Pandas", "Scikit-learn", "Matplotlib"],
      category: "data",
    },
  ];

  const categories = [
    { id: "featured", label: "Featured" },
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI & ML" },
    { id: "data", label: "Data Science" },
    { id: "web", label: "Web Development" },
    { id: "systems", label: "Systems" },
  ];

  const filteredProjects = (() => {
    if (activeCategory === "all") return projects;
    if (activeCategory === "featured")
      return projects.filter((project) => project.featured);
    return projects.filter((project) => project.category === activeCategory);
  })();

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
