import { Button } from './Button';
import './CTABanner.css';

export const CTABanner = ({ 
  title, 
  subtitle, 
  primaryText = 'Book Free Assessment', 
  primaryTo = '/contact',
  secondaryText,
  secondaryTo,
  variant = 'full' // full, inline
}) => {
  if (variant === 'inline') {
    return (
      <div className="cta-inline">
        <div className="cta-inline-content">
          <h5 className="section-eyebrow">Take Action</h5>
          <h2 className="cta-inline-title">{title}</h2>
          <p className="cta-inline-subtitle">{subtitle}</p>
        </div>
        <div className="cta-inline-actions">
          <Button variant="primary" to={primaryTo}>{primaryText}</Button>
          {secondaryText && (
            <Button variant="ghost" to={secondaryTo}>{secondaryText}</Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <section className="cta-banner">
      <div className="cta-banner-bg" />
      <div className="container cta-banner-inner">
        <h2 className="cta-banner-title">{title}</h2>
        <p className="cta-banner-subtitle">{subtitle}</p>
        <div className="cta-banner-actions">
          <Button variant="ghost" className="dark-variant" to={primaryTo}>{primaryText}</Button>
        </div>
      </div>
    </section>
  );
};
