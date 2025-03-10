const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
      <button 
        onClick={toggleTheme} 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: theme === 'dark' ? '#e0e0e0' : '#121212',
          color: theme === 'dark' ? '#121212' : '#e0e0e0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          zIndex: 99,
          transition: 'background 0.3s, color 0.3s'
        }}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    );
  };
  
  export default ThemeToggle;