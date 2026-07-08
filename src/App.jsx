import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Strengths from './components/Strengths';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import './components/CustomCursor.css';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function useScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section reveals
      gsap.utils.toArray('.section-reveal').forEach((el) => {
        gsap.fromTo(el, {
          opacity: 0,
          y: 60,
        }, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Stagger children
      gsap.utils.toArray('.stagger-children').forEach((parent) => {
        const children = parent.querySelectorAll('.stagger-item');
        gsap.fromTo(children, {
          opacity: 0,
          y: 40,
        }, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: parent,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Parallax images
      gsap.utils.toArray('.parallax-img').forEach((el) => {
        gsap.to(el, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      // Horizontal scroll for work cards
      const workGrid = document.querySelector('.work__grid');
      if (workGrid && window.innerWidth > 768) {
        const cards = workGrid.querySelectorAll('.work__card');
        gsap.fromTo(cards, {
          opacity: 0,
          y: 80,
          rotateX: 5,
        }, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: workGrid,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Strengths cards stagger
      const strengthsGrid = document.querySelector('.strengths__grid');
      if (strengthsGrid) {
        const cards = strengthsGrid.querySelectorAll('.strengths__card');
        gsap.fromTo(cards, {
          opacity: 0,
          y: 50,
          scale: 0.95,
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: strengthsGrid,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Stats counter animation
      gsap.utils.toArray('.about__stat-value').forEach((el) => {
        const text = el.textContent;
        const num = parseInt(text);
        if (!isNaN(num)) {
          const suffix = text.replace(/[0-9]/g, '');
          const obj = { val: 0 };
          gsap.to(obj, {
            val: num,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            onUpdate: () => {
              el.textContent = Math.floor(obj.val) + suffix;
            },
          });
        }
      });

      // Contact heading split animation
      const contactHeading = document.querySelector('.contact__heading');
      if (contactHeading) {
        gsap.fromTo(contactHeading, {
          opacity: 0,
          y: 80,
          clipPath: 'inset(0 0 100% 0)',
        }, {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: contactHeading,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Progress bar
      gsap.to('.scroll-progress-bar', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      });

    });

    return () => ctx.revert();
  }, []);
}

export default function App() {
  useScrollAnimations();

  return (
    <>
      <div className="scanlines" />
      <div className="noise-overlay" />
      <CustomCursor />
      
      {/* Scroll progress bar */}
      <div className="scroll-progress">
        <div className="scroll-progress-bar" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Strengths />
        <Contact />
      </main>
    </>
  );
}
