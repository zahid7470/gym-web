import { Button } from './Button';
import './Cards.css';

export const ProgramCard = ({ title, category, description, imageUrl, linkTo }) => {
  return (
    <div className="card-program">
      <div className="program-image-wrap">
        <img src={imageUrl} alt={title} className="program-image" loading="lazy" />
        <div className="program-image-overlay" />
      </div>
      <h5 className="program-label">{category}</h5>
      <h3 className="program-title">{title}</h3>
      <p className="program-desc">{description}</p>
      <div className="program-action">
        <Button variant="text" to={linkTo || '/programs'}>Explore Program</Button>
      </div>
    </div>
  );
};
