import React, { useState, useEffect } from 'react';
import './ChapterProgress.css';

const chapters = [
  { id: 'hero',         label: 'Opening' },
  { id: 'my-story',     label: 'My Story' },
  { id: 'timeline',     label: 'Journey' },
  { id: 'skills',       label: 'Skills' },
  { id: 'projects',     label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'future',       label: 'Future' },
  { id: 'contact',      label: 'Contact' }
];

const ChapterProgress = () => {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      let current = chapters[0].id;
      for (const ch of chapters) {
        const el = document.getElementById(ch.id);
        if (el && el.offsetTop <= scrollY) current = ch.id;
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="chapter-progress" aria-label="Chapter navigation">
      {chapters.map((ch, i) => (
        <button
          key={ch.id}
          className={`cp-dot ${active === ch.id ? 'active' : ''}`}
          onClick={() => scrollTo(ch.id)}
          title={`Chapter ${i + 1}: ${ch.label}`}
          aria-label={ch.label}
        >
          <span className="cp-tooltip">Ch. {i + 1} — {ch.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default ChapterProgress;
