import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './Projects.css';

/* ─── Project Card ──────────────────────────── */
const ProjectCard = ({ project, index, onBehind }) => {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      id={`project-${project.id}`}
      className={`proj-card card reveal ${visible ? 'visible' : ''} ${project.isActive ? 'proj-card--active' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      {/* Active badge */}
      {project.isActive && (
        <div className="proj-active-badge">
          <span className="proj-active-dot" />
          Currently Building
        </div>
      )}
      {/* Image / placeholder */}
      <div className="proj-img-wrap">
        {project.imageFallback ? (
          <img src={project.imageFallback} alt={project.title} className="proj-img" loading="lazy" />
        ) : (
          <div className="proj-img-placeholder">
            <i className="fas fa-code" />
          </div>
        )}
        <div className="proj-overlay">
          <div className="proj-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-link-btn">
                <i className="fab fa-github" /> Code
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="proj-link-btn proj-link-primary">
                <i className="fas fa-external-link-alt" /> Live
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="proj-info">
        <span className="proj-subtitle">{project.subtitle}</span>
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-desc">{project.description}</p>
        <div className="proj-tech">
          {project.tech.map((t, i) => <span key={i} className="badge">{t}</span>)}
        </div>
        <button className="btn btn--ghost proj-behind-btn" onClick={() => onBehind(project)}>
          <i className="fas fa-eye" /> Behind the Build →
        </button>
      </div>
    </div>
  );
};

/* ─── Behind the Build Modal ────────────────── */
const BehindModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <i className="fas fa-times" />
        </button>
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-tagline">{project.tagline}</p>

        <div className="modal-phases">
          {project.behindBuild.map((phase, i) => (
            <div key={i} className="modal-phase">
              <div className="phase-header">
                <span className="phase-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="phase-name">{phase.phase}</span>
              </div>
              <p className="phase-desc">{phase.desc}</p>
            </div>
          ))}
        </div>

        <div className="modal-footer">
          <div className="proj-tech">
            {project.tech.map((t, i) => <span key={i} className="badge">{t}</span>)}
          </div>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm">
              <i className="fab fa-github" /> View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─── Main Projects Section ─────────────────── */
const Projects = () => {
  const [headRef, headVisible] = useIntersectionObserver();
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="projects-section chapter">
      <div className="container">
        <div ref={headRef} className={`chapter-header reveal ${headVisible ? 'visible' : ''}`}>
          <span className="chapter-label">CHAPTER 05 — PROJECTS</span>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-body">
            Each project was a new challenge. Click "Behind the Build" to see
            how I approached the problem from idea to execution.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onBehind={setSelected} />
          ))}
        </div>
      </div>

      <BehindModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Projects;
