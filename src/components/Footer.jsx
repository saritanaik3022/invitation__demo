import React from 'react';
import inLogo from '../assets/in_logo.png';

export default function Footer() {
  return (
    <footer className="eng007-footer-section">
      <div className="nimbus-container">
        <div className="eng007-footer-content">
          <p className="eng007-footer-brand-title">
            Engagement Invitation website by <span className="eng007-footer-brand-highlight">INVITATION NATION</span>
          </p>

          <div className="eng007-footer-logo-wrapper">
            <img src={inLogo} alt="Invitation Nation" className="eng007-footer-logo" />
          </div>

          <div className="eng007-footer-links">
            <a href="#report" onClick={(e) => e.preventDefault()} className="eng007-footer-link">
              <span className="footer-icon">!</span> Report a Problem
            </a>
            <a href="#support" onClick={(e) => e.preventDefault()} className="eng007-footer-link">
              <span className="footer-icon">✉</span> Contact Support
            </a>
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="eng007-footer-link">
              <span className="footer-icon">🛡</span> Privacy Policy
            </a>
          </div>

          <p className="eng007-footer-powered">
            POWERED BY <span className="eng007-footer-powered-link">INVITATION NATION</span>
          </p>

          <p className="eng007-footer-copyright">
            © 2026 Invitation Nation. All rights reserved. Crafted with care for your forever.
          </p>
        </div>
      </div>
    </footer>
  );
}
