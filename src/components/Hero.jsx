import { useEffect, useRef } from 'react';
import './Hero.css';

function GlitchCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let w, h;
    let particles = [];
    let time = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles that form a face-like shape
    const createParticles = () => {
      particles = [];
      const count = Math.floor((w * h) / 800);
      for (let i = 0; i < count; i++) {
        // Bias particles toward center to form a vague face silhouette
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * Math.min(w, h) * 0.45;
        const x = w / 2 + Math.cos(angle) * radius * (0.6 + Math.random() * 0.4);
        const y = h / 2 + Math.sin(angle) * radius * (0.8 + Math.random() * 0.3) - h * 0.05;

        // Color: cyan, magenta, white, with occasional accent
        const colorRoll = Math.random();
        let color;
        if (colorRoll < 0.35) {
          color = `rgba(0, 229, 255, ${0.1 + Math.random() * 0.5})`;
        } else if (colorRoll < 0.55) {
          color = `rgba(255, 0, 110, ${0.1 + Math.random() * 0.4})`;
        } else if (colorRoll < 0.85) {
          const brightness = 150 + Math.floor(Math.random() * 105);
          color = `rgba(${brightness}, ${brightness}, ${brightness + 20}, ${0.15 + Math.random() * 0.5})`;
        } else {
          color = `rgba(200, 200, 255, ${0.05 + Math.random() * 0.2})`;
        }

        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 2.5 + 0.5,
          color,
          speed: 0.3 + Math.random() * 0.7,
          phase: Math.random() * Math.PI * 2,
          glitchOffset: 0,
        });
      }
    };
    createParticles();

    const draw = () => {
      time += 0.016;
      ctx.fillStyle = 'rgba(5, 5, 8, 0.15)';
      ctx.fillRect(0, 0, w, h);

      // Occasional horizontal glitch line
      if (Math.random() < 0.008) {
        const glitchY = Math.random() * h;
        const glitchH = 1 + Math.random() * 3;
        const offset = (Math.random() - 0.5) * 20;
        ctx.fillStyle = `rgba(0, 229, 255, ${0.1 + Math.random() * 0.3})`;
        ctx.fillRect(offset, glitchY, w, glitchH);
      }

      for (const p of particles) {
        // Glitch displacement
        if (Math.random() < 0.003) {
          p.glitchOffset = (Math.random() - 0.5) * 30;
        } else {
          p.glitchOffset *= 0.9;
        }

        // Floating motion
        const floatX = Math.sin(time * p.speed + p.phase) * 1.5;
        const floatY = Math.cos(time * p.speed * 0.7 + p.phase) * 1;

        const drawX = p.baseX + floatX + p.glitchOffset;
        const drawY = p.baseY + floatY;

        ctx.fillStyle = p.color;
        ctx.fillRect(drawX, drawY, p.size, p.size);
      }

      animId = requestAnimationFrame(draw);
    };

    // Initial clear
    ctx.fillStyle = '#050508';
    ctx.fillRect(0, 0, w, h);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__canvas" />;
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <GlitchCanvas />
      <div className="hero__scanlines" />
      <div className="hero__vignette" />
      <div className="hero__glitch-line" />

      {/* Content */}
      <div className="hero__content container">
        <div className="hero__tag">
          <span className="hero__tag-dot" />
          UI Designer &nbsp;·&nbsp; Visual Designer &nbsp;·&nbsp; Web Designer &nbsp;·&nbsp; Brand Designer
        </div>
        <h1 className="hero__title">
          <span
            className="hero__glitch-title"
            data-text="Crafting Digital"
          >
            Crafting <em>Digital</em>
          </span>
          <br />
          Experiences That<br />
          <span className="hero__title-accent">Resonate</span>
        </h1>
        <p className="hero__subtitle">
          5年以上UI设计经验，专注于网站界面设计与用户体验优化。曾为英国Blackpool多家餐厅及国内企业打造兼具美感与实用性的数字产品，追求像素级完美。
        </p>
        <div className="hero__actions">
          <a href="#work" className="hero__btn hero__btn--primary">
            View Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="hero__btn hero__btn--ghost">Contact Me</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
