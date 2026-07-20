import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollDown = () => {
    document.getElementById('my-story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section chapter">
      <div className="container hero-content">

        {/* Code-flavored eyebrow */}
        <span className="hero-eyebrow">
          <span className="hero-bracket">&lt;</span>
          hello world
          <span className="hero-bracket">/&gt;</span>
        </span>

        {/* Main headline — staggered fade-in lines */}
        <h1 className="hero-title">
          <span className="hero-line fade-line-1">I'm Divyanshu</span>
          <span className="hero-line fade-line-2">
            Tewari<span className="hero-dot">.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-sub fade-line-3">
          I build software that solves<br className="br-desktop" /> real‑world problems.
        </p>

        {/* CTA buttons */}
        <div className="hero-ctas fade-line-4">
          <button className="btn btn--primary" onClick={scrollDown}>
            Begin my journey <i className="fas fa-arrow-down" />
          </button>
          <a href="https://github.com/DivyanshuTewari" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
            <i className="fab fa-github" /> GitHub
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" onClick={scrollDown} aria-label="Scroll down">
        <span className="scroll-label">Scroll to begin my journey</span>
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  );
};

export default Hero;
