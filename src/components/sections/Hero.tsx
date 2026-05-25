import React from 'react';
import './Hero.css';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const stats = [
    { value: '3+', label: 'YEARS EXP.' },
    { value: '450%', label: 'GROWTH DRIVEN' },
    { value: '10+', label: 'COUNTRIES' },
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Community & Program Manager
          </div>
          <h1 className="hero-title">
            Hi, I'm  Muhammad Abubakar

          </h1>
          <p className="hero-description">
            Driving growth, facilitating impactful mentorship, and designing
            memorable engagement experiences.
          </p>
          <div className="hero-actions">
            <a href="#projects">
              <Button variant="primary">View My Work ↓</Button>
            </a>
            <a href="#contact">
              <Button variant="outline">
                <span style={{ marginRight: '0.5rem' }}>✉️</span> Get in Touch
              </Button>
            </a>
          </div>
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-wrapper">
            <img
              src="/asset/lascotstudios.jpg"
              alt="M. Abubakar - Community & Program Manager"
              className="hero-image"
            />
            <div className="floating-badge badge-top-right">
              <div className="badge-icon-wrapper">🎙️</div>
              <div className="badge-text-wrapper">
                <span>Speaker &</span>
                <strong>Event Host</strong>
              </div>
            </div>
            <div className="floating-badge badge-bottom-left">
              <div className="badge-icon-wrapper">👥</div>
              <div className="badge-text-wrapper">
                <span>Community</span>
                <strong>Ecosystem Builder</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
