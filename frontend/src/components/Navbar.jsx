import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { id: 'hero',         label: 'Home' },
  { id: 'my-story',     label: 'Story' },
  { id: 'skills',       label: 'Skills' },
  { id: 'projects',     label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact',      label: 'Contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <button className="navbar-logo" onClick={() => goTo('hero')}>DT.</button>

        {/* Desktop links */}
        <nav className="navbar-links">
          {navLinks.map(l => (
            <button key={l.id} className="nav-link" onClick={() => goTo(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>

        {/* Resume CTA */}
        <a href="/Data/Resume2025.pdf" target="_blank" rel="noopener noreferrer" className="btn btn--sm btn--primary navbar-resume">
          Resume
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${open ? 'open' : ''}`}>
        {navLinks.map(l => (
          <button key={l.id} className="mobile-link" onClick={() => goTo(l.id)}>
            {l.label}
          </button>
        ))}
        <a href="/Data/Resume2025.pdf" target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{ marginTop: '1rem' }}>
          Download Resume
        </a>
      </div>
    </header>
  );
};

export default Navbar;
