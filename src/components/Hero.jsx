import { useEffect, useRef, useState } from 'react';
import './Hero.css';

function CyberpunkIntro() {
  const canvasRef = useRef(null);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let w, h;
    let startTime = Date.now();
    const INTRO_DURATION = 4000; // 4 seconds intro

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particle system for face silhouette
    const particles = [];
    const particleCount = Math.floor((w * h) / 600);
    
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * Math.min(w, h) * 0.4;
      const x = w / 2 + Math.cos(angle) * radius * (0.5 + Math.random() * 0.5);
      const y = h / 2 + Math.sin(angle) * radius * (0.7 + Math.random() * 0.3) - h * 0.05;

      const colorRoll = Math.random();
      let color;
      if (colorRoll < 0.4) {
        color = { r: 0, g: 229, b: 255 }; // Cyan
      } else if (colorRoll < 0.6) {
        color = { r: 255, g: 0, b: 110 }; // Magenta
      } else {
        const brightness = 180 + Math.floor(Math.random() * 75);
        color = { r: brightness, g: brightness, b: brightness + 20 };
      }

      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        size: Math.random() * 2 + 0.5,
        color,
        speed: 0.2 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        alpha: 0,
        targetAlpha: 0.3 + Math.random() * 0.7,
      });
    }

    // Glitch blocks
    const glitchBlocks = [];
    for (let i = 0; i < 8; i++) {
      glitchBlocks.push({
        x: Math.random() * w,
        y: Math.random() * h,
        width: 50 + Math.random() * 200,
        height: 2 + Math.random() * 4,
        alpha: 0,
        speed: 0.5 + Math.random() * 1,
      });
    }

    const draw = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / INTRO_DURATION, 1);

      // Fade to black at end
      if (progress > 0.85) {
        const fadeProgress = (progress - 0.85) / 0.15;
        ctx.fillStyle = `rgba(5, 5, 8, ${fadeProgress})`;
        ctx.fillRect(0, 0, w, h);
      } else {
        ctx.fillStyle = 'rgba(5, 5, 8, 0.1)';
        ctx.fillRect(0, 0, w, h);
      }

      // Draw particles with reveal animation
      const revealRadius = progress * Math.max(w, h) * 0.8;
      
      for (const p of particles) {
        const distFromCenter = Math.sqrt(
          Math.pow(p.baseX - w / 2, 2) + Math.pow(p.baseY - h / 2, 2)
        );
        
        if (distFromCenter < revealRadius) {
          p.alpha += (p.targetAlpha - p.alpha) * 0.05;
        }

        // Glitch displacement
        if (Math.random() < 0.002) {
          p.glitchOffset = (Math.random() - 0.5) * 40;
        } else {
          p.glitchOffset = (p.glitchOffset || 0) * 0.9;
        }

        const floatX = Math.sin(elapsed * 0.001 * p.speed + p.phase) * 2;
        const floatY = Math.cos(elapsed * 0.0007 * p.speed + p.phase) * 1.5;

        const drawX = p.baseX + floatX + (p.glitchOffset || 0);
        const drawY = p.baseY + floatY;

        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`;
        ctx.fillRect(drawX, drawY, p.size, p.size);
      }

      // Draw glitch blocks
      for (const block of glitchBlocks) {
        if (Math.random() < 0.01) {
          block.alpha = 0.3 + Math.random() * 0.4;
          block.x = Math.random() * w;
          block.y = Math.random() * h;
        } else {
          block.alpha *= 0.95;
        }

        if (block.alpha > 0.01) {
          const isCyan = Math.random() > 0.5;
          ctx.fillStyle = isCyan
            ? `rgba(0, 229, 255, ${block.alpha})`
            : `rgba(255, 0, 110, ${block.alpha})`;
          ctx.fillRect(block.x, block.y, block.width, block.height);
        }
      }

      // Horizontal scan line
      const scanY = (elapsed * 0.1) % h;
      ctx.fillStyle = 'rgba(0, 229, 255, 0.1)';
      ctx.fillRect(0, scanY, w, 2);

      // Occasional full-screen glitch
      if (Math.random() < 0.003) {
        ctx.fillStyle = `rgba(0, 229, 255, ${0.05 + Math.random() * 0.1})`;
        ctx.fillRect(0, 0, w, h);
      }

      if (progress < 1) {
        animId = requestAnimationFrame(draw);
      } else {
        setIntroComplete(true);
      }
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

  return (
    <canvas 
      ref={canvasRef} 
      className={`hero__canvas ${introComplete ? 'hero__canvas--faded' : ''}`} 
    />
  );
}

function AnimatedText({ children, className, delay = 0 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={`${className} ${visible ? 'visible' : ''}`}>
      {children}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <CyberpunkIntro />
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
          <AnimatedText className="hero__title-line" delay={4200}>
            <span
              className="hero__glitch-title"
              data-text="Crafting Digital"
            >
              Crafting <em>Digital</em>
            </span>
          </AnimatedText>
          <br />
          <AnimatedText className="hero__title-line" delay={4400}>
            Experiences That
          </AnimatedText>
          <br />
          <AnimatedText className="hero__title-line hero__title-line--accent" delay={4600}>
            <span className="hero__title-accent">Resonate</span>
          </AnimatedText>
        </h1>
        
        <AnimatedText className="hero__subtitle" delay={4800}>
          5年以上UI设计经验，专注于网站界面设计与用户体验优化。曾为英国Blackpool多家餐厅及国内企业打造兼具美感与实用性的数字产品，追求像素级完美。
        </AnimatedText>
        
        <div className="hero__actions">
          <AnimatedText delay={5000}>
            <a href="#work" className="hero__btn hero__btn--primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </AnimatedText>
          <AnimatedText delay={5100}>
            <a href="#contact" className="hero__btn hero__btn--ghost">Contact Me</a>
          </AnimatedText>
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
