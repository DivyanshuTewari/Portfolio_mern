import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <span className="footer-logo">DT.</span>
          <span className="footer-caption">Divyanshu Tewari — Software Engineer</span>
        </div>

        <div className="footer-links">
          <a href="https://github.com/DivyanshuTewari" target="_blank" rel="noopener noreferrer" className="footer-link">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/divyanshu-tewari" target="_blank" rel="noopener noreferrer" className="footer-link">
            <i className="fab fa-linkedin" />
          </a>
          <a href="mailto:divyanshutiwari500@gmail.com" className="footer-link">
            <i className="fas fa-envelope" />
          </a>
        </div>

        <p className="footer-copy">
          © {year} Divyanshu Tewari &nbsp;·&nbsp; Built with React + Node.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;
