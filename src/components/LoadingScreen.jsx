import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentSystem, setCurrentSystem] = useState("INITIALIZING");

  const systemStates = [
    "INITIALIZING...",
    "LOADING NEURAL NETWORK...",
    "ESTABLISHING CONNECTION...",
    "SECURITY PROTOCOLS ACTIVE...",
    "SYSTEM READY",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1;

        // Update system state based on progress
        if (newProgress < 20) setCurrentSystem(systemStates[0]);
        else if (newProgress < 40) setCurrentSystem(systemStates[1]);
        else if (newProgress < 60) setCurrentSystem(systemStates[2]);
        else if (newProgress < 80) setCurrentSystem(systemStates[3]);
        else if (newProgress >= 100) setCurrentSystem(systemStates[4]);

        if (newProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return newProgress;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="cyber-loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Matrix Background Effect */}
      <div className="matrix-bg">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="matrix-column" style={{ left: `${i * 5}%` }}>
            {Array.from({ length: 30 }).map((_, j) => (
              <span key={j} className="matrix-char">
                {Math.random() > 0.5 ? "1" : "0"}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="loading-content">
        {/* Cyber Logo */}
        <motion.div
          className="cyber-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="logo-frame">
            <div className="logo-inner">
              <span className="logo-text">AK</span>
              <div className="scan-line-logo"></div>
            </div>
            <div className="corner-brackets">
              <div className="bracket top-left"></div>
              <div className="bracket top-right"></div>
              <div className="bracket bottom-left"></div>
              <div className="bracket bottom-right"></div>
            </div>
          </div>
        </motion.div>

        {/* Terminal Identity */}
        <motion.div
          className="terminal-identity"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="terminal-line">
            <span className="prompt">root@portfolio:~$</span>
            <span className="command">whoami</span>
          </div>
          <div className="identity-output">
            <div className="name-display">ARNAV_KARWA.EXE</div>
            <div className="role-display">FULL_STACK_DEVELOPER</div>
          </div>
        </motion.div>

        {/* System Status */}
        <motion.div
          className="system-status"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="status-line">
            <span className="status-label">STATUS:</span>
            <span className="status-text">{currentSystem}</span>
          </div>
        </motion.div>

        {/* Cyber Progress Bar */}
        <motion.div
          className="cyber-progress-container"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="progress-frame">
            <div className="progress-bar-cyber">
              <motion.div
                className="progress-fill-cyber"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
              <div className="progress-overlay"></div>
            </div>
            <div className="progress-data">
              <span className="progress-percent">
                {progress.toString().padStart(3, "0")}%
              </span>
              <span className="progress-status">LOADING</span>
            </div>
          </div>

          {/* Data Stream */}
          <div className="data-stream">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="data-bit"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {Math.random() > 0.5 ? "█" : "▓"}
              </span>
            ))}
          </div>
        </motion.div>

        {/* System Info */}
        <motion.div
          className="system-info-loading"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">KERNEL:</span>
              <span className="info-value">REACT_v19.0.0</span>
            </div>
            <div className="info-item">
              <span className="info-label">PROTOCOL:</span>
              <span className="info-value">HTTPS_SECURE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
