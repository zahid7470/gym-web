import { Instagram, Linkedin } from 'lucide-react';
import './Cards.css';

export const TrainerCard = ({ name, specialty, bio, certs, imageUrl, instagram, linkedin }) => {
  return (
    <div className="card-trainer">
      <div className="trainer-image-wrap">
        <img src={imageUrl} alt={name} className="trainer-image" loading="lazy" />
        <div className="trainer-image-overlay" />
      </div>
      <div className="trainer-info">
        <h3 className="trainer-name">{name}</h3>
        <h5 className="trainer-specialty">{specialty}</h5>
        <p className="trainer-bio">{bio}</p>
        <div className="trainer-certs">{certs}</div>
      </div>
    </div>
  );
};
