import { Check } from 'lucide-react';
import { Button } from './Button';
import './Cards.css';

export const PricingCard = ({ 
  title, 
  price, 
  interval = '/month', 
  features = [], 
  isFeatured = false, 
  ctaText = 'Select Plan',
  linkTo
}) => {
  const variantClass = isFeatured ? 'variant-featured' : 'variant-standard';
  const btnVariant = isFeatured ? 'ghost' : 'primary';
  const btnClass = isFeatured ? 'dark-variant' : '';

  return (
    <div className={`card-pricing ${variantClass}`}>
      <div className="pricing-header">
        {isFeatured && <span className="featured-badge">Most Popular</span>}
        <h3 className="pricing-title">{title}</h3>
        <div className="pricing-price-wrap">
          <span className="pricing-amount">{price}</span>
          <span className="pricing-interval">{interval}</span>
        </div>
      </div>
      
      <ul className="pricing-features">
        {features.map((feature, i) => (
          <li key={i} className="pricing-feature">
            <Check size={18} className="pricing-icon" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="pricing-action">
        <Button 
          variant={btnVariant} 
          className={`w-full ${btnClass}`} 
          style={{ width: '100%' }}
          to={linkTo || '/contact'}
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};
