import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ 
  eyebrow, 
  title, 
  subtitle, 
  alignment = 'center', // center, left
  className = ''
}) => {
  return (
    <div className={`section-header header-${alignment} ${className}`}>
      {eyebrow && <h5 className="section-eyebrow">{eyebrow}</h5>}
      <h2 className="section-title">
        {title.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i !== title.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
