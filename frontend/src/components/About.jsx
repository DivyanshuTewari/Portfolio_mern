import React from 'react';
import './About.css';

const About = () => {
  const strengths = [
    'Persistent analytical problem-solver',
    'Self-motivated independent and collaborative contributor',
    'Committed to writing performant, optimized source code',
    'Active learner seeking constructive feedback'
  ];

  const certificates = [
    {
      title: 'Complete C++ Programming Course',
      platform: 'Udemy',
      icon: 'fas fa-terminal',
      link: '/certificate/C++.jpg'
    },
    {
      title: 'Responsive Websites with HTML/CSS',
      platform: 'Udemy',
      icon: 'fas fa-globe',
      link: '/certificate/HTML+CSS.jpg'
    },
    {
      title: 'Complete Python Bootcamp',
      platform: 'Udemy',
      icon: 'fab fa-python',
      link: '/certificate/Python.jpg'
    },
    {
      title: 'Complete SQL Bootcamp',
      platform: 'Udemy',
      icon: 'fas fa-database',
      link: '/certificate/SQL.jpg'
    },
    {
      title: 'Fundamentals of Cloud Computing',
      platform: 'Udemy',
      icon: 'fas fa-cloud',
      link: '/certificate/Cloud Computing.jpg'
    },
    {
      title: 'AWS Cloud Practitioner Essentials',
      platform: 'AWS / Udemy',
      icon: 'fab fa-aws',
      link: '/certificate/image.png'
    },
    {
      title: 'AI Agents & Artificial Intelligence Bootcamp',
      platform: 'Udemy',
      icon: 'fas fa-brain',
      link: '/certificate/Ai Agents for everyone.jpg'
    }
  ];

  return (
    <section id="about" className="about-container">
      <div className="container">
        <span className="section-subtitle-muted">BIOGRAPHY</span>
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          {/* Avatar Area */}
          <div className="about-avatar-column">
            <div className="avatar-frame-apple">
              <img
                src="/Data/IMG_20250617_205837[1].PNG"
                alt="Divyanshu Tewari Profile"
                className="avatar-img-apple"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop";
                }}
              />
            </div>
          </div>

          {/* Text Area */}
          <div className="about-text-column">
            <h3 className="about-greet-apple">Hello, I'm Divyanshu Tewari.</h3>
            <p className="about-bio-apple">
              I am a Computer Science student at <strong>Graphic Era Hill University Bhimtal</strong>, specializing in engineering efficient, secure, and scalable applications. With strong roots in program modeling and data logic, I focus on building refined, high-performance software.
            </p>

            <div className="about-strengths-box-apple">
              <h4 className="strengths-title-apple">Strengths</h4>
              <ul className="strengths-list-apple">
                {strengths.map((strength, idx) => (
                  <li key={idx} className="strength-item-apple">
                    <i className="fas fa-check check-blue-apple"></i>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Certs Grid */}
        <div className="about-certs-section-apple">
          <h3 className="certs-title-apple">Courses & Certifications</h3>
          <div className="certs-grid-apple">
            {certificates.map((cert, idx) => (
              <div key={idx} className="cert-card-apple card-luxury">
                <div className="cert-card-icon-wrapper">
                  <i className={cert.icon}></i>
                </div>
                <div className="cert-card-details">
                  <span className="cert-card-platform">{cert.platform}</span>
                  <h4 className="cert-card-title-apple">{cert.title}</h4>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-card-link"
                  >
                    View Credential <i className="fas fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
