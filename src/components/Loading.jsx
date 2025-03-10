import { useEffect, useState } from 'react';

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 5;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#121212',
      color: '#e0e0e0',
      zIndex: 9999
    }}>
      <h1 style={{ 
        fontSize: '2rem', 
        marginBottom: '1rem',
        letterSpacing: '2px'
      }}>ARNAV KARWA</h1>
      
      <div style={{ 
        width: '300px',
        height: '6px',
        backgroundColor: '#2a2a2a',
        borderRadius: '3px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: `${progress}%`,
          backgroundColor: '#4361ee',
          borderRadius: '3px',
          transition: 'width 0.1s ease'
        }}></div>
      </div>
      
      <p style={{ 
        marginTop: '1rem',
        fontSize: '0.9rem',
        opacity: 0.8
      }}>Loading Portfolio {progress}%</p>
    </div>
  );
};

export default Loading;