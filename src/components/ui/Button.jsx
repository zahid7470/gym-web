import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Button.css';

export const Button = ({ 
  children, 
  variant = 'primary', // primary, ghost, text 
  to, 
  href, 
  onClick, 
  className = '', 
  disabled = false,
  type = 'button'
}) => {
  const baseClass = `btn btn-${variant} ${className}`;

  // Text variant includes arrow icon automatically per DRD
  const content = (
    <>
      {children}
      {variant === 'text' && <ArrowRight size={16} className="btn-icon-right" />}
    </>
  );

  if (to) {
    return <Link to={to} className={baseClass}>{content}</Link>;
  }

  if (href) {
    return <a href={href} className={baseClass} target="_blank" rel="noopener noreferrer">{content}</a>;
  }

  return (
    <button 
      type={type} 
      className={baseClass} 
      onClick={onClick} 
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export const IconButton = ({ icon: Icon, onClick, className = '', "aria-label": ariaLabel, to }) => {
  const baseClass = `btn-icon ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={baseClass} aria-label={ariaLabel}>
        <Icon size={20} />
      </Link>
    );
  }

  return (
    <button className={baseClass} onClick={onClick} aria-label={ariaLabel}>
      <Icon size={20} />
    </button>
  );
};
