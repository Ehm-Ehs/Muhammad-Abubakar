import React from 'react';
import './Certifications.css';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export const Certifications: React.FC = () => {
  const certifications = [
    { title: 'Project Management Professional (PMP)', issuer: 'PMI', year: '2021' },
    { title: 'Certified ScrumMaster (CSM)', issuer: 'Scrum Alliance', year: '2022' },
    { title: 'Google Project Management Certificate', issuer: 'Google', year: '2022' },
    { title: 'Agile Product Owner', issuer: 'Scrum Alliance', year: '2023' },
    { title: 'Principles of Leadership', issuer: 'Harvard Business School', year: '2024' },
    { title: 'Introduction to SQL', issuer: 'Coursera', year: '2023' },
    { title: 'Negotiation Skills', issuer: 'Coursera', year: '2024' },
    { title: 'Advanced Excel', issuer: 'Coursera', year: '2023' },
  ];

  return (
    <section id="certifications" className="certs-section">
      <div className="container">
        <SectionHeader 
          title="Certifications & Training" 
          icon={<span>🏆</span>}
          subtitle="Accredited certifications, professional development courses, and validation"
        />
        <div className="certs-grid">
          {certifications.map((cert, index) => (
            <Card key={index} className="cert-card" hoverGlow={true}>
              <div className="cert-badge-icon">🎖️</div>
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer-year">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-dot">•</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
