import React, { useState } from 'react';
import './AboutMe.css';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export const AboutMe: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const email = 'muhammadmukhtar54@gmail.com';
  const phone = '+234 9162837626';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <SectionHeader 
          title="About Me" 
          icon={<span>👤</span>}
          subtitle="My background, approach, and how to get in touch"
        />
        <div className="about-grid">
          <div className="about-image-side">
            <div className="about-image-container">
              <img 
                src="/asset/lascotstudios-5.jpg" 
                alt="M. Abubakar Profile" 
                className="about-image"
              />
            </div>
          </div>
          <div className="about-info-side">
            <p className="about-text">
              With over <strong>3 years of dynamic experience</strong> in community and 
              program management, I specialize in building thriving ecosystems 
              where individuals and ideas can flourish.
            </p>
            <p className="about-text">
              My expertise spans mentorship program planning, hybrid event coordination, 
              and digital engagement strategies. By applying foundational product management 
              principles, I focus on delivering structured, scalable, and impactful 
              experiences for diverse global audiences.
            </p>
            <p className="about-text">
              From leading a 2-day global summit with participants from 10+ countries 
              to driving a <span className="highlight-text">450% community growth rate</span> through 
              structured engagement, my goal is always to cultivate meaningful 
              connections and measurable growth.
            </p>

            <Card className="contact-card" hoverGlow={false}>
              <div className="contact-row">
                <div className="contact-col" onClick={handleCopyEmail} title="Click to copy email">
                  <div className="contact-icon-circle">
                    {copiedEmail ? '✅' : '✉️'}
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">{email}</span>
                  </div>
                </div>
                
                <div className="contact-col" onClick={() => setShowPhone(!showPhone)} title="Click to show/hide phone">
                  <div className="contact-icon-circle">
                    📞
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">
                      {showPhone ? phone : '••••••••••••'}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
