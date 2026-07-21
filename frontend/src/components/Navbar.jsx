import React, { useState, useEffect } from 'react';
import ResumeModal from './ResumeModal';
import './Navbar.css';

const navLinks = [
  { id: 'hero',         label: 'Home' },
  { id: 'my-story',     label: 'Story' },
  { id: 'skills',       label: 'Skills' },
  { id: 'projects',     label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact',      label: 'Contact' }
];

const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleOpenResume = () => {
    setOpen(false);
    if (onOpenResume) {
      onOpenResume();
    } else {
      setResumeOpen(true);
    }
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
        <button onClick={handleOpenResume} className="btn btn--sm btn--primary navbar-resume">
          <i className="fas fa-file-pdf" style={{ marginRight: '6px' }} />
          Resume
        </button>

        {/* Hamburger */}
        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Backdrop overlay */}
      {open && <div className="mobile-overlay" onClick={() => setOpen(false)} />}

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${open ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <span className="drawer-title">Menu</span>
          <button
            className="drawer-close-btn"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="mobile-drawer-body">
          {navLinks.map(l => (
            <button key={l.id} className="mobile-link" onClick={() => goTo(l.id)}>
              {l.label}
            </button>
          ))}
          
          <div className="mobile-resume-actions" style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <button
              onClick={handleOpenResume}
              className="btn btn--outline"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <i className="fas fa-eye" style={{ marginRight: '6px' }} /> Preview Resume
            </button>
            <a
              href="/Data/Resume2025.pdf"
              download="Divyanshu_Tewari_Resume.pdf"
              className="btn btn--primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <i className="fas fa-download" style={{ marginRight: '6px' }} /> Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Standalone modal if not handled by parent */}
      {!onOpenResume && (
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      )}
    </header>
  );
};

export default Navbar;
