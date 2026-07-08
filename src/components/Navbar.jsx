import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Strengths', href: '#strengths' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-dot">◆</span> Portfolio
        </a>
        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} className="navbar__link" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="navbar__cta" onClick={() => setMenuOpen(false)}>
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
