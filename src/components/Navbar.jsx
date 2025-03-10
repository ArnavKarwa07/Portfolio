import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
      transition: 'all 0.3s ease',
      zIndex: 100,
      backgroundColor: scrolled 
        ? document.body.classList.contains('dark') ? '#121212' : '#ffffff' 
        : 'transparent',
      boxShadow: scrolled ? '0 4px 10px rgba(0, 0, 0, 0.1)' : 'none'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <a href="#" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textDecoration: 'none',
          color: document.body.classList.contains('dark') ? '#e0e0e0' : '#333333'
        }}>
          AK
        </a>

        {/* Desktop Menu */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          '@media (max-width: 768px)': {
            display: 'none'
          }
        }} className="desktop-menu">
          {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                textDecoration: 'none',
                color: document.body.classList.contains('dark') ? '#e0e0e0' : '#333333',
                fontWeight: '500',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#4361ee'}
              onMouseOut={(e) => e.target.style.color = document.body.classList.contains('dark') ? '#e0e0e0' : '#333333'}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div 
          style={{
            display: 'none',
            cursor: 'pointer',
            '@media (max-width: 768px)': {
              display: 'block'
            }
          }}
          onClick={toggleMobileMenu}
          className="mobile-toggle"
        >
          <div style={{
            width: '25px',
            height: '3px',
            backgroundColor: document.body.classList.contains('dark') ? '#e0e0e0' : '#333333',
            margin: '5px 0',
            transition: 'all 0.3s ease'
          }}></div>
          <div style={{
            width: '25px',
            height: '3px',
            backgroundColor: document.body.classList.contains('dark') ? '#e0e0e0' : '#333333',
            margin: '5px 0',
            transition: 'all 0.3s ease'
          }}></div>
          <div style={{
            width: '25px',
            height: '3px',
            backgroundColor: document.body.classList.contains('dark') ? '#e0e0e0' : '#333333',
            margin: '5px 0',
            transition: 'all 0.3s ease'
          }}></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          backgroundColor: document.body.classList.contains('dark') ? '#1a1a1a' : '#f5f5f5',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          zIndex: 99
        }}>
          {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: document.body.classList.contains('dark') ? '#e0e0e0' : '#333333',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(0,0,0,0.1)',
                fontWeight: '500'
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;