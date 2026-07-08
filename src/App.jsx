import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Strengths from './components/Strengths';
import Contact from './components/Contact';
import './App.css';

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useReveal();
  return (
    <>
      <div className="scanlines" />
      <div className="noise-overlay" />
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
