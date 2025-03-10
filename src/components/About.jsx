const About = () => {
    return (
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
            '@media (max-width: 768px)': {
              gridTemplateColumns: '1fr'
            }
          }}>
            <div>
              <img 
                src="/api/placeholder/400/400" 
                alt="Arnav Karwa" 
                style={{
                  width: '100%',
                  borderRadius: '10px',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
                }}
              />
            </div>
            <div>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                marginBottom: '1.5rem'
              }}>
                I'm a Computer Science student at the University of Massachusetts, Amherst, passionate about creating innovative solutions using code. With expertise in both front-end and back-end development, I specialize in building responsive web applications and leveraging data science techniques.
              </p>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                marginBottom: '1.5rem'
              }}>
                My technical journey includes internships at prestigious organizations like MIT-CITE and the Walmart Global Tech Scholarship, where I've developed practical skills working on real-world problems.
              </p>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                marginBottom: '1.5rem'
              }}>
                I enjoy tackling complex challenges and am particularly interested in the intersection of software development and artificial intelligence.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginTop: '2rem'
              }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Education</h3>
                  <p>University of Massachusetts, Amherst</p>
                  <p>Computer Science, B.S.</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Location</h3>
                  <p>Amherst, Massachusetts</p>
                </div>
              </div>
              <a 
                href="/Arnav_Karwa_Resume.pdf" 
                target="_blank"
                className="btn btn-primary"
                style={{
                  marginTop: '2rem',
                  display: 'inline-block'
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
  