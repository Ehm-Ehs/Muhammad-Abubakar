import React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverGlow = true,
}) => {
  return (
    <div className={`card ${hoverGlow ? 'card-glow' : ''} ${className}`}>
      {children}
    </div>
  );
};
