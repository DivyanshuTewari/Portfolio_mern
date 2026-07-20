import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './Achievements.css';

const achievements = [
  {
    icon: 'fas fa-star',
    color: '#F59E0B',
    title: 'Campus Placement — 3 Offers',
    sub:   'Class of 2026 · Infosys · Cognizant · LTI Mindtree',
    detail: 'Secured job offers from three leading IT companies — Infosys, Cognizant, and LTI Mindtree — during campus recruitment in 2026, before graduation.'
  },
  {
    icon: 'fas fa-trophy',
    color: '#A78BFA',
    title: '8.47 CGPA',
    sub:   'Academic Excellence · B.Tech CSE',
    detail: 'Consistently ranked in the top students of the Computer Science department at Graphic Era Hill University.'
  },
  {
    icon: 'fas fa-brain',
    color: 'var(--purple)',
    title: 'AI Medical Chatbot',
    sub:   'Real-World AI Application',
    detail: 'Built a production-level RAG pipeline using Llama-2 and FAISS for medical document Q&A.'
  },
  {
    icon: 'fas fa-shield-alt',
    color: 'var(--cyan)',
    title: 'HIDS Security System',
    sub:   'Windows Security Engineering',
    detail: 'Developed a real-time Host Intrusion Detection System using YARA rules and WMI monitoring.'
  },
  {
    icon: 'fas fa-microchip',
    color: 'var(--blue)',
    title: 'JIT Compiler',
    sub:   'Compiler Engineering',
    detail: 'Built a Just-In-Time compiler targeting x86_64 assembly with a custom lexer and parser in Python.'
  },
  {
    icon: 'fab fa-aws',
    color: '#FF9900',
    title: 'AWS Cloud Certified',
    sub:   'Cloud Computing',
    detail: 'Certified in AWS Cloud fundamentals — deploying and managing scalable cloud infrastructure.'
  },
  {
    icon: 'fas fa-layer-group',
    color: '#22C55E',
    title: 'MERN Stack Projects',
    sub:   'Full-Stack Development',
    detail: 'Designed and shipped multiple end-to-end MERN applications including a full job portal platform.'
  }
];

const AchievementCard = ({ item, index }) => {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.15 });
  return (
    <div
      ref={ref}
      className={`achievement-card card reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="ach-icon-wrap" style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}>
        <i className={item.icon} style={{ color: item.color }} />
      </div>
      <div className="ach-info">
        <h3 className="ach-title">{item.title}</h3>
        <span className="ach-sub">{item.sub}</span>
        <p className="ach-detail">{item.detail}</p>
      </div>
    </div>
  );
};

const Achievements = () => {
  const [headRef, headVisible] = useIntersectionObserver();
  return (
    <section id="achievements" className="achievements-section chapter">
      <div className="container">
        <div ref={headRef} className={`chapter-header reveal ${headVisible ? 'visible' : ''}`}>
          <span className="chapter-label">CHAPTER 06 — ACHIEVEMENTS</span>
          <h2 className="section-title">What I've Accomplished</h2>
          <p className="section-body">
            Milestones, placement offers, certifications, and notable projects that define my engineering journey.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <AchievementCard key={i} item={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
