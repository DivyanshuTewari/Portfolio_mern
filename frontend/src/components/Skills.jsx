import React from 'react';
import { skillsData } from '../data/skills';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './Skills.css';

const SkillCategory = ({ category, icon, color, skills, index }) => {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.15 });
  const fromLeft = index % 2 === 0;
  return (
    <div
      ref={ref}
      className={`skill-block ${fromLeft ? 'reveal-left' : 'reveal-right'} ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="skill-block-header">
        <span className="skill-block-icon" style={{ background: `${color}18`, color }}>
          <i className={icon} />
        </span>
        <h3 className="skill-block-title">{category}</h3>
      </div>
      <div className="skills-chip-grid">
        {skills.map((s, i) => (
          <div key={i} className="skill-chip">
            <i className={s.icon} style={{ color }} />
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [headRef, headVisible] = useIntersectionObserver();
  return (
    <section id="skills" className="skills-section chapter">
      <div className="container">
        <div ref={headRef} className={`chapter-header reveal ${headVisible ? 'visible' : ''}`}>
          <span className="chapter-label">CHAPTER 04 — SKILLS</span>
          <h2 className="section-title">My Toolkit</h2>
          <p className="section-body">The technologies I use to build great software.</p>
        </div>

        <div className="skills-grid">
          {skillsData.map((cat, i) => (
            <SkillCategory key={i} {...cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
