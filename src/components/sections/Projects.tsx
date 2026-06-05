import React from 'react';
import './Projects.css';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'OpenHall (formerly TechNest)',
      duration: '2025 – Present',
      description: 'Co-founded and structured a professional community of diverse industry participants, evolving from a prize-based program to an ongoing engagement platform. Leading the transition to an industry insight exchange centre and an annual achievement program.',
    },
    {
      title: 'Azooz & Friends Networking Group',
      duration: '2023 – Present',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
      description: 'Pilot affairs of the networking group to foster professional development and sharing of opportunities. Currently used as an avenue to share ads and promotions, with rebranding in the works for sustained relevance and scalability.',
    },
  ];

  const projectIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <SectionHeader
          title="Key Projects & Initiatives"
          icon={projectIcon}
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Card key={index} className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <span className="project-duration-badge">
                  {project.duration}
                </span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
