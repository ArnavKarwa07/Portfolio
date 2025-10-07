import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="cyber-progress-bar"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #bf00ff, #00ffff, #ff0080)",
          transformOrigin: "0%",
          zIndex: 1001,
          boxShadow: "0 0 20px rgba(0, 255, 255, 0.8)",
        }}
      />

      <style jsx>{`
        @media (max-width: 768px) {
          .cyber-progress-bar {
            height: 3px;
          }
        }

        @media (max-width: 480px) {
          .cyber-progress-bar {
            height: 2px;
          }
        }
      `}</style>
    </>
  );
};

export default ScrollProgress;
