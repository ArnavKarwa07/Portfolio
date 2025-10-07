import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Cyberpunk particles and effects
    const particles = [];
    const maxParticles = 15; // Drastically reduced for less distraction
    const dataStreams = [];
    const glitchLines = [];

    // Particle class with cyberpunk effects
    class CyberParticle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.vz = Math.random() * 3 + 1;
        this.life = Math.random() * 200 + 100;
        this.maxLife = this.life;
        this.color = this.getRandomColor();
        this.size = Math.random() * 3 + 1;
        this.pulse = Math.random() * Math.PI * 2;
        this.type = Math.random() < 0.7 ? "normal" : "special";
      }

      getRandomColor() {
        const colors = [
          "#bf00ff", // neon-purple
          "#00ffff", // neon-cyan
          "#ff0080", // neon-pink
          "#00ff41", // neon-green
          "#0080ff", // electric-blue
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.z -= this.vz;
        this.life--;
        this.pulse += 0.15;

        // Add some randomness to movement
        if (Math.random() < 0.01) {
          this.vx += (Math.random() - 0.5) * 0.1;
          this.vy += (Math.random() - 0.5) * 0.1;
        }

        // Reset particle when it goes off screen or dies
        if (
          this.z <= 0 ||
          this.life <= 0 ||
          this.x < -50 ||
          this.x > canvas.width + 50 ||
          this.y < -50 ||
          this.y > canvas.height + 50
        ) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.z = 1000;
          this.life = this.maxLife;
          this.color = this.getRandomColor();
          this.type = Math.random() < 0.7 ? "normal" : "special";
        }
      }

      draw() {
        const screenX =
          (this.x - canvas.width / 2) * (1000 / this.z) + canvas.width / 2;
        const screenY =
          (this.y - canvas.height / 2) * (1000 / this.z) + canvas.height / 2;
        const screenSize = this.size * (1000 / this.z);
        const alpha =
          (Math.sin(this.pulse) * 0.5 + 0.5) * (this.life / this.maxLife);

        if (
          screenX >= -20 &&
          screenX <= canvas.width + 20 &&
          screenY >= -20 &&
          screenY <= canvas.height + 20
        ) {
          ctx.save();
          ctx.globalAlpha = alpha;

          // Main particle
          ctx.shadowColor = this.color;
          ctx.shadowBlur = this.type === "special" ? 25 : 15;

          ctx.beginPath();
          ctx.fillStyle = this.color;
          ctx.arc(screenX, screenY, screenSize, 0, Math.PI * 2);
          ctx.fill();

          // Add extra glow for special particles
          if (this.type === "special") {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.globalAlpha = alpha * 0.3;
            ctx.arc(screenX, screenY, screenSize * 4, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.restore();
        }
      }
    }

    // Matrix-style data streams
    class DataStream {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = -100;
        this.speed = Math.random() * 4 + 2;
        this.length = Math.random() * 80 + 40;
        this.opacity = Math.random() * 0.8 + 0.3;
        this.color = Math.random() < 0.6 ? "#00ff41" : "#00ffff";
        this.characters = this.generateCharacters();
        this.glitchChance = 0.02;
      }

      generateCharacters() {
        const chars =
          "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
        let result = "";
        for (let i = 0; i < 15; i++) {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
      }

      update() {
        this.y += this.speed;

        // Occasionally change characters for glitch effect
        if (Math.random() < this.glitchChance) {
          this.characters = this.generateCharacters();
        }

        if (this.y > canvas.height + this.length) {
          this.x = Math.random() * canvas.width;
          this.y = -this.length;
          this.speed = Math.random() * 4 + 2;
          this.opacity = Math.random() * 0.8 + 0.3;
          this.characters = this.generateCharacters();
        }
      }

      draw() {
        ctx.save();
        ctx.font = "14px monospace";
        ctx.textAlign = "center";

        for (let i = 0; i < this.characters.length; i++) {
          const y = this.y - i * 18;
          const opacity = this.opacity * (1 - i / this.characters.length) * 0.4; // Reduced for better readability

          if (y > -30 && y < canvas.height + 30) {
            ctx.globalAlpha = opacity;
            ctx.fillStyle = this.color;
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 8;
            ctx.fillText(this.characters[i], this.x, y);
          }
        }

        ctx.restore();
      }
    }

    // Cyberpunk glitch lines
    class GlitchLine {
      constructor() {
        this.reset();
      }

      reset() {
        this.y = Math.random() * canvas.height;
        this.height = Math.random() * 4 + 1;
        this.life = Math.random() * 30 + 20;
        this.maxLife = this.life;
        this.color = Math.random() < 0.5 ? "#ff0080" : "#bf00ff";
        this.offset = 0;
      }

      update() {
        this.life--;
        this.offset = (Math.random() - 0.5) * 10;
        if (this.life <= 0) {
          this.reset();
        }
      }

      draw() {
        if (Math.random() < 0.15) {
          // Only draw occasionally for glitch effect
          ctx.save();
          ctx.globalAlpha = (this.life / this.maxLife) * 0.6;
          ctx.fillStyle = this.color;
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 10;

          // Main glitch line
          ctx.fillRect(0, this.y, canvas.width, this.height);

          // Add offset lines for extra glitch effect
          ctx.fillRect(this.offset, this.y + 1, canvas.width, this.height);
          ctx.fillRect(-this.offset, this.y - 1, canvas.width, this.height);

          ctx.restore();
        }
      }
    }

    // Initialize arrays
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new CyberParticle());
    }

    for (let i = 0; i < 3; i++) {
      // Drastically reduced for less distraction
      dataStreams.push(new DataStream());
    }

    for (let i = 0; i < 0; i++) {
      // Disabled glitch lines completely for better readability
      glitchLines.push(new GlitchLine());
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with very subtle trail effect
      ctx.fillStyle = "rgba(10, 0, 21, 0.15)"; // Increased for faster clearing and less distraction
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw cyberpunk grid background
      drawCyberGrid();

      // Update and draw data streams (background layer)
      dataStreams.forEach((stream) => {
        stream.update();
        stream.draw();
      });

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw neural connections
      drawNeuralConnections();

      // Update and draw glitch lines (top layer)
      glitchLines.forEach((line) => {
        line.update();
        line.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Draw cyberpunk grid background
    const drawCyberGrid = () => {
      ctx.save();
      ctx.strokeStyle = "rgba(0, 255, 255, 0.015)"; // Much more subtle
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += 60) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 60) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Add some random highlighted grid sections
      if (Math.random() < 0.005) {
        const gridX = Math.floor(Math.random() * (canvas.width / 60)) * 60;
        const gridY = Math.floor(Math.random() * (canvas.height / 60)) * 60;

        ctx.strokeStyle = "rgba(191, 0, 255, 0.3)";
        ctx.lineWidth = 2;
        ctx.strokeRect(gridX, gridY, 60, 60);
      }

      ctx.restore();
    };

    // Draw neural connections between particles
    const drawNeuralConnections = () => {
      ctx.save();

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const distance = Math.sqrt(
            Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
          );

          if (distance < 120 && Math.random() < 0.03) {
            const alpha = (120 - distance) / 120;

            ctx.globalAlpha = alpha * 0.4;
            ctx.strokeStyle = "#00ffff";
            ctx.lineWidth = 1;
            ctx.shadowColor = "#00ffff";
            ctx.shadowBlur = 8;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            // Add small connection nodes
            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2;

            ctx.beginPath();
            ctx.fillStyle = "#00ffff";
            ctx.arc(midX, midY, 1, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      ctx.restore();
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-background"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticleBackground;
