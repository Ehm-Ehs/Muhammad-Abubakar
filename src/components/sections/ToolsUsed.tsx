import React from 'react';
import './ToolsUsed.css';

export const ToolsUsed: React.FC = () => {
  const row1 = [
    'Google Workspace',
    'Discourse',
    'Discord',
    'Notion',
    'ClickUp',
    'Trello',
    'Slack',
    'WhatsApp'
  ];

  const row2 = ['Microsoft Office'];

  return (
    <section className="tools-section">
      <div className="container">
        <div className="tools-container-card">
          <h4 className="tools-title">Tools I Use Daily</h4>
          <div className="tools-rows-wrapper">
            <div className="tools-row">
              {row1.map((tool, index) => (
                <span key={index} className="tool-text-item">
                  {tool}
                </span>
              ))}
            </div>
            <div className="tools-row">
              {row2.map((tool, index) => (
                <span key={index} className="tool-text-item">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
