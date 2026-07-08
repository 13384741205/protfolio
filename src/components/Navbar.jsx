import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextScramble } from '../utils/textScramble';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const scramblerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      const links = navRef.current.querySelectorAll('.navbar__link, .navbar__cta');
      gsap.fromTo(links, {
        y: -20,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power3.out',
        delay: 4.3,
      });
    }

    // Logo scramble on hover
    if (logoRef.current) {
      scramblerRef.current = new TextScramble(logoRef.current);
    }
  }, []);

  const handleLogoHover = () => {
    if (scramblerRef.current) {
      scramblerRef.current.setText('Portfolio');
    }
  };

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Strengths', href: '#strengths' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo magnetic" onMouseEnter={handleLogoHover}>
          <span className="navbar__logo-dot">◆</span> <span ref={logoRef}>Portfolio</span>
        </a>
        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} className="navbar__link magnetic" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="navbar__cta magnetic" onClick={() => setMenuOpen(false)}>
            Get in Touch
          </a>
        </div>
        <button className="navbar__burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
