import React from 'react';
import './ResumeModal.css';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const resumeUrl = "/Data/Resume2025.pdf";

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="resume-modal-header">
          <div className="resume-modal-title">
            <i className="fas fa-file-pdf pdf-badge-icon"></i>
            <div>
              <h3>Divyanshu Tewari Resume</h3>
              <span className="resume-modal-subtitle">PDF Preview</span>
            </div>
          </div>

          <div className="resume-modal-actions">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--sm btn--outline"
              title="Open in new tab"
            >
              <i className="fas fa-external-link-alt"></i>
              <span className="btn-text">Open Tab</span>
            </a>
            <a
              href={resumeUrl}
              download="Divyanshu_Tewari_Resume.pdf"
              className="btn btn--sm btn--primary"
              title="Download PDF"
            >
              <i className="fas fa-download"></i>
              <span className="btn-text">Download</span>
            </a>
            <button
              className="resume-close-btn"
              onClick={onClose}
              aria-label="Close preview"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Body iframe / preview */}
        <div className="resume-modal-body">
          <iframe
            src={`${resumeUrl}#toolbar=0`}
            title="Divyanshu Tewari Resume Preview"
            className="resume-pdf-iframe"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
