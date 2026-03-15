import { Link } from 'react-router-dom';
import { Instagram, Youtube, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-col footer-brand">
            <Link to="/" className="footer-logo">
              FORGE<span className="logo-haus">HAUS</span>
            </Link>
            <p className="footer-tagline">Where Discipline Becomes Identity.</p>
            <div className="footer-socials">
              <a href="#" className="footer-social-icon" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="footer-social-icon" aria-label="YouTube"><Youtube size={20} /></a>
              <a href="#" className="footer-social-icon" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <nav className="footer-nav">
              <Link to="/">Home</Link>
              <Link to="/programs">Programs</Link>
              <Link to="/trainers">Trainers</Link>
              <Link to="/membership">Membership</Link>
              <Link to="/about">About</Link>
              <Link to="/testimonials">Testimonials</Link>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact">
              <p>FORGEHAUS Studio</p>
              <p>Level 2, Indiabulls Finance Centre</p>
              <p>Senapati Bapat Marg, Lower Parel</p>
              <p>Mumbai — 400013</p>
              <br />
              <p><a href="mailto:info@forgehaus.com">info@forgehaus.com</a></p>
              <p><a href="tel:+919820045210">+91 98200 45210</a></p>
              <br />
              <p className="footer-hours">Mon–Sat: 6:00 AM – 10:00 PM</p>
              <p className="footer-hours">Sun: 8:00 AM – 4:00 PM</p>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col">
            <h4 className="footer-col-title">Join The Inner Circle</h4>
            <p className="footer-newsletter-text">Get exclusive training tips, member stories, and priority access to events.</p>
            <form className="footer-newsletter-form" onSubmit={handleSubmit}>
              <div className="footer-newsletter-input-wrap">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" aria-label="Subscribe">
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 FORGEHAUS. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
