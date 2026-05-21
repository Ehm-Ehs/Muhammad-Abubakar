import React from 'react';
import './SectionHeader.css';

interface SectionHeaderProps {
  title: string;
  icon?: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  icon,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`section-header-container ${className}`}>
      <div className="section-title-wrapper">
        {icon && <span className="section-header-icon">{icon}</span>}
        <h2 className="section-title">{title}</h2>
      </div>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};
