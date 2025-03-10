const Experience = () => {
    const experiences = [
      {
        title: "MIT-CITE",
        role: "Software Engineer Intern",
        period: "Jan 2024 - Present",
        description: "Working on developing and maintaining web applications for MIT's CITE program. Technologies used include Django, React, and PostgreSQL.",
        skills: ["Django", "React", "PostgreSQL", "Git"]
      },
      {
        title: "Walmart Global Tech",
        role: "Walmart Technology Scholar",
        period: "May 2023 - Aug 2023",
        description: "Selected for the Walmart Global Tech Scholar Program, working on building data-driven solutions for retail technology problems.",
        skills: ["Python", "Machine Learning", "AWS", "Data Analysis"]
      },
      {
        title: "UMass Amherst",
        role: "Teaching Assistant - Computer Science Dept.",
        period: "Sep 2022 - Present",
        description: "Assisting professors with course delivery, lab demonstrations, and student evaluations for computer science courses.",
        skills: ["Java", "Data Structures", "Algorithms", "Teaching"]
      }
    ];
  
    return (
      <section id="experience" className="section" style={{
        backgroundColor: document.body.classList.contains('dark') ? '#0a0a0a' : '#f0f0f0'
      }}>
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="card"
                style={{
                  padding: '2rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 3fr',
                  gap: '2rem',
                  alignItems: 'start',
                  '@media (max-width: 768px)': {
                    gridTemplateColumns: '1fr',
                    padding: '1.5rem'
                  }
                }}
              >
                <div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    marginBottom: '0.5rem',
                    color: '#4361ee'
                  }}>
                    {exp.title}
                  </h3>
                  <p style={{
                    fontWeight: 'bold',
                    marginBottom: '0.5rem'
                  }}>
                    {exp.role}
                  </p>
                  <p style={{
                    opacity: 0.8,
                    marginBottom: '1rem'
                  }}>
                    {exp.period}
                  </p>
                </div>
                <div>
                  <p style={{
                    lineHeight: 1.7,
                    marginBottom: '1.5rem'
                  }}>
                    {exp.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {exp.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        style={{
                          backgroundColor: document.body.classList.contains('dark') ? '#2a2a2a' : '#e5e5e5',
                          color: document.body.classList.contains('dark') ? '#e0e0e0' : '#333333',
                          padding: '0.3rem 0.8rem',
                          borderRadius: '20px',
                          fontSize: '0.9rem'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;