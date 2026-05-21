import React from 'react';
import './ContactFooter.css';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="contact-footer-section">
      <div className="container">
        <Card className="cta-card" hoverGlow={true}>
          <div className="cta-badge">⚡ Let's Connect</div>
          <h2 className="cta-title">Let's Build Something Great</h2>
          <p className="cta-description">
            I'm currently open to new opportunities, partnerships, and collaborations. 
            Whether you want to discuss a project, need a strategist, or just want to say hi, 
            reach out!
          </p>
          <div className="cta-buttons">
            <a href="mailto:muhammadmukhtar54@gmail.com">
              <Button variant="primary" className="cta-btn">
                ✉️ Email Me
              </Button>
            </a>
            <a href="#resume" onClick={(e) => {
              e.preventDefault();
              alert('Resume download link placeholder');
            }}>
              <Button variant="outline" className="cta-btn">
                📄 View Resume
              </Button>
            </a>
          </div>
        </Card>

        <div className="footer-bottom">
          <div className="footer-brand">M. Abubakar</div>
          <div className="footer-links">
            <a href="#about" className="footer-link">About</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#experience" className="footer-link">Experience</a>
            <a href="#education" className="footer-link">Education</a>
            <a href="mailto:muhammadmukhtar54@gmail.com" className="footer-connect-btn">Let's Connect</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
