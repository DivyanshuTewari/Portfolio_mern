import React from 'react';
import { timelineData } from '../data/timeline';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './Education.css';

const TimelineItem = ({ item, index }) => {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.25 });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`tl-item ${visible ? 'visible' : ''} ${isEven ? 'reveal-left' : 'reveal-right'} ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.07}s` }}
    >
      {/* Node */}
      <div className="tl-node" style={{ '--node-color': item.color }}>
        <i className={item.icon} />
      </div>

      {/* Card */}
      <div className="tl-card card">
        <span className="tl-year">{item.year}</span>
        <h3 className="tl-milestone">{item.milestone}</h3>
        <p className="tl-detail">{item.detail}</p>
      </div>
    </div>
  );
};

const Education = () => {
  const [headRef, headVisible] = useIntersectionObserver();

  return (
    <section id="timeline" className="education-section chapter">
      <div className="container">
        <div ref={headRef} className={`chapter-header reveal ${headVisible ? 'visible' : ''}`}>
          <span className="chapter-label">CHAPTER 03 — EDUCATION</span>
          <h2 className="section-title">My Journey</h2>
          <p className="section-body">
            Every milestone shaped the engineer I'm becoming.
          </p>
        </div>

        <div className="tl-wrapper">
          <div className="tl-track" />
          <div className="tl-items">
            {timelineData.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
