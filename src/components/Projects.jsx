const Projects = () => {
  // Based on GitHub repositories
  const projects = [
    {
      title: "Stock Market Predictor",
      description:
        "7-day stock market predictor utilizing advanced machine learning techniques and sentiment analysis.",
      image:
        "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/ArnavKarwa07/Stock-Market-Predictor",
      tags: ["Keras", "NLTK", "LSTM", "Python", "Pandas"],
    },
    {
      title: "Amazon Smartphone Dataset Analysis",
      description:
        "Exploring Amazon Top Smartphones 2021, including data preprocessing, handling missing values, outliers, and visualization.",
      image:
        "https://images.pexels.com/photos/31059294/pexels-photo-31059294/free-photo-of-close-up-of-modern-smartphone-and-laptop.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "https://github.com/ArnavKarwa07/Amazon_Smartphone_Data_Analysis",
      tags: ["Numpy", "Pandas", "Jupyter", "Scikit-learn"],
    },
    {
      title: "Youtube Dislikes Dataset Analysis",
      description:
        "Exploring trends, video popularity, and user engagement using Python, Pandas, and Seaborn.",
      image:
        "https://images.unsplash.com/photo-1521302200778-33500795e128?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHlvdXR1YmUlMjBkaXNsaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
      github: "https://github.com/ArnavKarwa07/Youtube_Dislikes_Data_Analysis",
      tags: ["Jupyter", "Pandas", "Seaborn", "Matplotlib", "Python"],
    },
    {
      title: "Handwritten Number Identifier",
      description:
        "Identifying handwritten numbers using Convolutional Neural Networks (CNN) with Keras and Tensorflow.",
      image:
        "https://images.unsplash.com/photo-1520413766594-6e635f8d9908?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhbmR3cml0dGVuJTIwbnVtYmVyc3xlbnwwfHwwfHx8MA%3D%3D",
      github: "https://github.com/ArnavKarwa07/Handwritten_Number_Identifier",
      tags: ["Keras", "Tensorflow", "Seaborn", "Numpy", "Python"],
    },
    {
      title: "Pharmacy Management System",
      description:
        "Pharmacy Management System using Tkinter & MySQL for inventory and order management.",
      image:
        "https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/ArnavKarwa07/Pharmacy-Management-system",
      tags: ["Python", "MySQL", "Tkinter", "PL/SQL"],
    },
    {
      title: "Inventory Management System",
      description:
        "Object-Oriented Inventory Management System with File I/O and Low Stock Report Generation.",
      image:
        "https://images.unsplash.com/photo-1709804668113-8b2453ae129a?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/ArnavKarwa07/Inventory-Mangement-using-Cpp",
      tags: ["C++", "OOP", "File Handling"],
    },
    {
      title: "Restuarant Menu ordering with Bill splitting",
      description: "Menu ordering system with Bill splitting feature.",
      image:
        "https://images.pexels.com/photos/4921260/pexels-photo-4921260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      github: "https://github.com/ArnavKarwa07/RESTAURANT-TTMM",
      tags: ["HTML", "CSS", "Javascript", "PHP", "MySQL", "PL/SQL"],
    },
  ];

  return (
    <section
      id="projects"
      className="section"
      style={{
        backgroundColor: document.body.classList.contains("dark")
          ? "#0a0a0a"
          : "#f0f0f0",
      }}
    >
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "2rem",
            "@media (max-width: 768px)": {
              gridTemplateColumns: "1fr",
            },
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="card"
              style={{
                overflow: "hidden",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.3rem",
                    marginBottom: "0.8rem",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    marginBottom: "1.5rem",
                    lineHeight: 1.6,
                    opacity: 0.9,
                  }}
                >
                  {project.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: "#4361ee",
                        color: "white",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "20px",
                        fontSize: "0.8rem",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      textDecoration: "none",
                      color: document.body.classList.contains("dark")
                        ? "#e0e0e0"
                        : "#333333",
                      fontWeight: "500",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
          }}
        >
          <a
            href="https://github.com/ArnavKarwa07?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
