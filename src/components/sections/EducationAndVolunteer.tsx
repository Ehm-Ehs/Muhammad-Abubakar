import React from 'react';
import './EducationAndVolunteer.css';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export const EducationAndVolunteer: React.FC = () => {
  const volunteerItems = [
    'Core Team Member, StartupGrind, Ilorin (May 2024 – Feb 2025)',
    'Core Team Member, CMXconnect, Ilorin (Dec 2023 – Feb 2025)',
    'Co-Organiser, Global TechNest (May 2025)',
    'Organizer & Ushering Team, GDG Ilorin DevFest Student Edition (Dec 2023)',
    'Team Member, GDG Ilorin DevFest 2023 (Nov 2023)',
  ];

  const certifications = [
    { title: 'Developing Business Partnerships', provider: 'LinkedIn', year: '2026' },
    { title: 'The Essential Sales Tech Stack: Tools Every Seller Needs to Crush Quota', provider: 'LinkedIn', year: '2026' },
    { title: 'The Community MBA', provider: 'CMX Academy', year: '2025' },
    { title: 'Community Management Tutor (Premium Award)', provider: 'Nupe Tech Community Scholarship 4.0', year: '2024' },
    { title: 'Successful Community Management', provider: 'Feverbee', year: '2024' },
    { title: 'Google Project Management', provider: 'Coursera', year: '2024' },
    { title: 'Accelerated JobberMan Softskills Training', provider: 'JobberMan', year: '2024' },
    { title: 'Community Manager Core Skills', provider: 'Community Strategy Academy', year: '2024' },
    { title: 'Reviving a Dying Community', provider: 'Community Strategy Academy', year: '2024' },
    { title: 'Tech Program Frontend Development', provider: 'DevCareer', year: '2024' },
  ];

  const eduIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="section-blue-icon">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  );

  const volIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="section-blue-icon">
      <path d="M19 21l-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );

  const certIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="section-blue-icon">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 11 2 2 4-4" />
    </svg>
  );

  const checkIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="vol-check-svg">
      <circle cx="12" cy="12" r="10" fill="none" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );

  return (
    <section id="education" className="edu-vol-section">
      <div className="container edu-vol-grid">
        <div className="edu-column">
          <SectionHeader title="Education" icon={eduIcon} />
          <Card className="edu-card" hoverGlow={false}>
            <h3 className="degree-title">Bachelor of Science in Computer Science</h3>
            <p className="university-name">Al-Hikmah University</p>
            <span className="edu-class">Class of 2024</span>
          </Card>

          <div className="volunteer-wrapper">
            <SectionHeader title="Community Leadership (Volunteer)" icon={volIcon} />
            <div className="vol-card-navy">
              <ul className="vol-list">
                {volunteerItems.map((item, index) => (
                  <li key={index} className="vol-item">
                    {checkIcon}
                    <span className="vol-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="certs-column">
          <SectionHeader title="Certifications & Training" icon={certIcon} />
          <div className="certs-grid-container">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-item-card">
                <div className="cert-info">
                  <h4 className="cert-card-title">{cert.title}</h4>
                  <p className="cert-card-provider">{cert.provider}</p>
                </div>
                <span className="cert-card-year">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
