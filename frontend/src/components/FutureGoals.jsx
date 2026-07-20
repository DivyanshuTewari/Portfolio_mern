import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './FutureGoals.css';

const goals = [
  {
    icon:  'fas fa-briefcase',
    color: 'var(--blue)',
    short: 'Software Engineering Role',
    long:  'Land a full-time SWE position at a product company where I can build scalable systems that impact millions of users.'
  },
  {
    icon:  'fas fa-robot',
    color: 'var(--purple)',
    short: 'AI/ML Integration',
    long:  'Deepen my expertise in LLMs and RAG pipelines, and integrate intelligent AI features into production-grade web applications.'
  },
  {
    icon:  'fas fa-cloud',
    color: 'var(--cyan)',
    short: 'Cloud-Native Architecture',
    long:  'Master Kubernetes, Docker, and AWS services to design and deploy highly available, cloud-native applications.'
  },
  {
    icon:  'fas fa-users',
    color: '#22C55E',
    short: 'Open Source Contribution',
    long:  'Contribute meaningfully to open-source projects in the DevTools and AI ecosystem to give back to the community that shaped me.'
  }
];

const FutureGoals = () => {
  const [headRef, headVisible] = useIntersectionObserver();

  return (
    <section id="future" className="future-section chapter">
      <div className="container">
        <div ref={headRef} className={`chapter-header reveal ${headVisible ? 'visible' : ''}`}>
          <span className="chapter-label">CHAPTER 07 — FUTURE GOALS</span>
          <h2 className="section-title">Where I'm Going</h2>
          <p className="section-body">
            The best chapters are still unwritten. Here's where I'm headed.
          </p>
        </div>

        <div className="goals-list">
          {goals.map((g, i) => <GoalRow key={i} goal={g} index={i} />)}
        </div>
      </div>
    </section>
  );
};

const GoalRow = ({ goal, index }) => {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={`goal-row reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <span className="goal-num" style={{ color: goal.color }}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="goal-icon-wrap" style={{ background: `${goal.color}18`, color: goal.color }}>
        <i className={goal.icon} />
      </div>
      <div className="goal-text">
        <h3 className="goal-short">{goal.short}</h3>
        <p className="goal-long">{goal.long}</p>
      </div>
    </div>
  );
};

export default FutureGoals;
