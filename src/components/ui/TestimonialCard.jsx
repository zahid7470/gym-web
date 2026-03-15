import { Star } from 'lucide-react';
import './Cards.css';

export const TestimonialCard = ({ quote, authorName, authorPlan, avatarUrl, variant = 'light' }) => {
  return (
    <div className={`card-testimonial variant-${variant}`}>
      <div className="testim-stars">
        {[1, 2, 3, 4, 5].map(i => (
          <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <div className="testim-content">
        <span className="testim-quote-mark">“</span>
        <p className="testim-text">{quote}</p>
      </div>
      <div className="testim-author">
        <img src={avatarUrl} alt={authorName} className="testim-avatar" loading="lazy" />
        <div className="testim-author-info">
          <span className="testim-author-name">{authorName}</span>
          <span className="testim-author-plan">{authorPlan}</span>
        </div>
      </div>
    </div>
  );
};
