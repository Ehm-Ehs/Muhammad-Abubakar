import React from 'react';
import './Skills.css';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Community & Engagement',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      skills: [
        'Mentorship Program Planning',
        'Peer-to-Peer Learning',
        'Program Management',
        'Growth Strategy',
        'Session Moderation',
      ],
    },
    {
      title: 'Event Planning & Execution',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      skills: [
        'Workshop Coordination',
        'Physical & Virtual Events',
        'Speaker Sourcing',
        'Event Production',
      ],
    },
    {
      title: 'Digital & Technical',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="15" x2="23" y2="15" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="15" x2="4" y2="15" />
        </svg>
      ),
      skills: [
        'Social Media Management',
        'AI Content Tools',
        'Photography & Videography',
        'Content Creation',
      ],
    },
    {
      title: 'Leadership & Communication',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      skills: [
        'Team Training',
        'Cross-Timezone Coordination',
        'Feedback Analysis',
        'Stakeholder Management',
      ],
    },
  ];

  const toolsIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-45deg)' }}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <SectionHeader 
          title="Skills & Expertise" 
          icon={toolsIcon}
          subtitle=""
        />
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <Card key={index} className="skill-card">
              <div className="skill-category-header">
                <div className="skill-category-icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, sIndex) => (
                  <Badge key={sIndex} variant="outline" className="skill-badge">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
