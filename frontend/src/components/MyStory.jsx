import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './MyStory.css';

const storyLines = [
  { text: 'Everything started with curiosity.', emphasis: false },
  { text: 'I wanted to know how software works.', emphasis: false },
  { text: 'That curiosity became a passion for development.', emphasis: false },
  { text: 'Today I build full-stack applications,', emphasis: false },
  { text: 'machine learning projects,', emphasis: true },
  { text: 'and scalable, production-ready software.', emphasis: false }
];

const StoryLine = ({ text, emphasis, index }) => {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.4 });
  return (
    <p
      ref={ref}
      className={`story-line ${visible ? 'visible' : ''} ${emphasis ? 'emphasis' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {text}
    </p>
  );
};

const MyStory = () => {
  const [headRef, headVisible] = useIntersectionObserver();

  return (
    <section id="my-story" className="my-story-section chapter">
      <div className="container">

        <div
          ref={headRef}
          className={`chapter-header reveal ${headVisible ? 'visible' : ''}`}
        >
          <span className="chapter-label">CHAPTER 02 — MY STORY</span>
          <h2 className="section-title">Why Software<br />Engineering?</h2>
        </div>

        <div className="story-text-block">
          {storyLines.map((line, i) => (
            <StoryLine key={i} {...line} index={i} />
          ))}
        </div>

        {/* Bio grid */}
        <BioGrid />
      </div>
    </section>
  );
};

const bioItems = [
  { icon: 'fas fa-university', label: 'University', value: 'Graphic Era Hill Univ., Bhimtal' },
  { icon: 'fas fa-star',       label: 'CGPA',       value: '8.47 / 10' },
  { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'India' },
  { icon: 'fas fa-code-branch', label: 'Focus',    value: 'Full-Stack + AI/ML' }
];

const BioGrid = () => {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <div ref={ref} className={`bio-grid reveal ${visible ? 'visible' : ''}`}>
      {bioItems.map((item, i) => (
        <div key={i} className="bio-card card" style={{ transitionDelay: `${i * 0.1}s` }}>
          <i className={item.icon} style={{ color: 'var(--blue)', fontSize: '1.3rem' }} />
          <div>
            <span className="bio-label">{item.label}</span>
            <span className="bio-value">{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyStory;
