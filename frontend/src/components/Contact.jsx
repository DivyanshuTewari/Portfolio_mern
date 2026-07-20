import React, { useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './Contact.css';

const contactInfo = [
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    value: 'divyanshutiwari500@gmail.com',
    href:  'mailto:divyanshutiwari500@gmail.com'
  },
  {
    icon: 'fab fa-linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/divyanshu-tewari',
    href:  'https://www.linkedin.com/in/divyanshu-tewari'
  },
  {
    icon: 'fab fa-github',
    label: 'GitHub',
    value: 'github.com/DivyanshuTewari',
    href:  'https://github.com/DivyanshuTewari'
  }
];

const Contact = () => {
  const [headRef, headVisible] = useIntersectionObserver();
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="contact-section chapter">
      <div className="container">
        <div ref={headRef} className={`chapter-header reveal ${headVisible ? 'visible' : ''}`}>
          <span className="chapter-label">CHAPTER 08 — CONTACT</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-body">
            Whether you have an opportunity, a question, or just want to say hello —
            my inbox is open. All contact submissions go directly to my Gmail.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Info */}
          <div className="contact-info-col">
            {contactInfo.map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="contact-info-card card">
                <span className="contact-info-icon">
                  <i className={item.icon} />
                </span>
                <div>
                  <span className="contact-info-label">{item.label}</span>
                  <span className="contact-info-value">{item.value}</span>
                </div>
                <i className="fas fa-arrow-right contact-arrow" />
              </a>
            ))}

            <div className="contact-socials">
              <a href="https://github.com/DivyanshuTewari" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                <i className="fab fa-github" />
              </a>
              <a href="https://www.linkedin.com/in/divyanshu-tewari" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                <i className="fab fa-linkedin" />
              </a>
              <a href="mailto:divyanshutiwari500@gmail.com" className="social-btn" aria-label="Email">
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <form className="contact-form card" onSubmit={handleSubmit} noValidate>
            <h3 className="form-heading">Send me a message</h3>

            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                id="name" name="name" type="text"
                className="form-input"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email" name="email" type="email"
                className="form-input"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message" name="message"
                className="form-input form-textarea"
                placeholder="Write your message here..."
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={`btn btn--primary form-submit ${status === 'sending' ? 'loading' : ''}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <><span className="spinner" /> Sending…</>
              ) : status === 'success' ? (
                <><i className="fas fa-check" /> Message Sent!</>
              ) : status === 'error' ? (
                <><i className="fas fa-exclamation-triangle" /> Failed — Try Again</>
              ) : (
                <><i className="fas fa-paper-plane" /> Send Message</>
              )}
            </button>

            {status === 'success' && (
              <p className="form-feedback success">
                <i className="fas fa-check-circle" /> Your message was saved to my inbox and I'll reply soon!
              </p>
            )}
            {status === 'error' && (
              <p className="form-feedback error">
                <i className="fas fa-times-circle" /> Something went wrong. Email me directly at divyanshutiwari500@gmail.com
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
