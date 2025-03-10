const Projects = () => {
    // Based on GitHub repositories
    const projects = [
      {
        title: "AI-Powered Writing Tool",
        description: "An AI-powered writing tool that helps users generate high-quality content. Built with React, Node.js, and OpenAI API.",
        image: "/api/placeholder/400/250",
        github: "https://github.com/ArnavKarwa07/AI-Writer",
        demo: "#",
        tags: ["React", "Node.js", "OpenAI API", "Express"]
      },
      {
        title: "Expense Tracker",
        description: "A full-stack expense tracking application with data visualization and budget management features.",
        image: "/api/placeholder/400/250",
        github: "https://github.com/ArnavKarwa07/ExpenseTracker",
        demo: "#",
        tags: ["React", "MongoDB", "Express", "Chart.js"]
      },
      {
        title: "Traffic Sign Recognition",
        description: "A deep learning model for traffic sign recognition using CNN architecture with high accuracy.",
        image: "/api/placeholder/400/250",
        github: "https://github.com/ArnavKarwa07/Traffic-Sign-Recognition",
        demo: "#",
        tags: ["Python", "TensorFlow", "CNN", "Computer Vision"]
      },
      {
        title: "Stock Market Predictor",
        description: "Stock market prediction tool using machine learning algorithms and time series analysis.",
        image: "/api/placeholder/400/250",
        github: "https://github.com/ArnavKarwa07/Stock-Predictor",
        demo: "#",
        tags: ["Python", "Pandas", "LSTM", "Scikit-learn"]
      }
    ];
  
    return (
      <section id="projects" className="section" style={{
        backgroundColor: document.body.classList.contains('dark') ? '#0a0a0a' : '#f0f0f0'
      }}>
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem',
            '@media (max-width: 768px)': {
              gridTemplateColumns: '1fr'
            }
          }}>
            {projects.map((project, index) => (
              <div 
                key={index}
                className="card"
                style={{
                  overflow: 'hidden'
                }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  padding: '1.5rem'
                }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    marginBottom: '0.8rem'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    marginBottom: '1.5rem',
                    lineHeight: 1.6,
                    opacity: 0.9
                  }}>
                    {project.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        style={{
                          backgroundColor: '#4361ee',
                          color: 'white',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '20px',
                          fontSize: '0.8rem'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{
                    display: 'flex',
                    gap: '1rem'
                  }}>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        textDecoration: 'none',
                        color: document.body.classList.contains('dark') ? '#e0e0e0' : '#333333',
                        fontWeight: '500'
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      Code
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        textDecoration: 'none',
                        color: document.body.classList.contains('dark') ? '#e0e0e0' : '#333333',
                        fontWeight: '500'
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <a 
              href="https://github.com/ArnavKarwa07" 
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