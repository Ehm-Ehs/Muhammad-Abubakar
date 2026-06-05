import React from 'react';
import './Experience.css';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Community Manager',
      company: 'Konseye: The Mentorship Network • Remote',
      duration: 'June 2025 – Nov 2025',
      description: 'Global platform providing accessible, industry-wide mentorship.',
      bullets: [
        'Boosted mentor-mentee session quality and attendance by planning and managing the Mentorship Lifecycle Program bi-monthly.',
        'Increased program visibility by uploading session info via Wix, consistently generating positive reviews.',
        'Achieved a 40% increase in LinkedIn followers (700 to 1000+) through engaging graphics and discourse moderation.',
        'Enhanced team capability by mastering Discourse and training 5 team members to use platform features.',
      ],
    },
    {
      role: 'Community Manager',
      company: 'Edusproute • Remote',
      duration: 'Oct 2024 – Present',
      description: 'Ed-tech platform providing cohort-based education, mentorship & career growth.',
      bullets: [
        'Launched the "Sprouter of the Month" spotlight initiative to drive consistent community engagement.',
        'Strengthened event programming by sourcing ~10 external speakers for high-quality learning sessions.',
        'Managed and moderated bi-weekly cohort calls, designing educational topics to foster peer learning.',
        'Spearheaded the Campus Ambassadors Program, managing 14-15 student reps to boost localized brand presence.',
      ],
    },
    {
      role: 'Community Manager | Program Manager',
      company: 'Kuagi Resources • Kwara, Nigeria',
      duration: 'Aug 2023 – July 2025',
      description: 'Tech-hub and IT-services company offering co-working, training, and community-building.',
      bullets: [
        'Boosted overall community interaction by 45% through data-driven campaigns and event planning.',
        'Facilitated high physical event turnout by developing technical proficiency with AI tools, photography, and videography.',
        'Launched monthly hybrid workshops, enabling industry experts to provide hands-on knowledge.',
        'Implemented strategic community-building activities, increasing member engagement by 55% across subgroups.',
      ],
    },
  ];

  const briefCaseIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <SectionHeader
          title="Professional Experience"
          icon={briefCaseIcon}
        />
        <div className="timeline-container">
          <div className="timeline-center-line"></div>
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item-wrap ${index % 2 === 0 ? 'right-side' : 'left-side'}`}>
              <div className="timeline-badge-marker">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="timeline-content-card">
                <Card className="experience-details-card">
                  <div className="experience-card-top">
                    <h3 className="experience-role-title">{exp.role}</h3>
                    <span className="experience-date-badge">{exp.duration}</span>
                  </div>
                  <h4 className="experience-company-title">{exp.company}</h4>
                  <p className="experience-tagline">{exp.description}</p>
                  <ul className="experience-bullet-list">
                    {exp.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="experience-bullet-row">
                        <span className="bullet-chevron">&gt;</span>
                        <span className="bullet-text">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
