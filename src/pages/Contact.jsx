import { Button } from '../components/ui/Button';
import { FormInput } from '../components/ui/FormInput';
import AnimatedSection from '../components/AnimatedSection';
import { PageTransition } from '../components/PageTransition';
import { Instagram, Youtube, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <PageTransition>
      {/* SECTION 1: HERO */}
      <section className="page-hero hero-contact">
        <div className="page-hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop" 
            alt="Gym atmosphere" 
          />
          <div className="page-hero-overlay opacity-heavy" />
        </div>
        <div className="container page-hero-content text-center">
          <AnimatedSection direction="up">
            <h5 className="section-eyebrow">GET IN TOUCH</h5>
            <h1 className="page-hero-title">LET'S TALK.</h1>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2: CONTACT SPLIT LAYOUT */}
      <section className="section section-dark">
        <div className="container-wide">
          <div className="contact-split">
            {/* Left: Form */}
            <AnimatedSection direction="left" className="contact-form-side">
              <h2 className="contact-heading">Send a Message</h2>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <FormInput label="Full Name" id="name" placeholder="John Doe" required />
                <FormInput label="Email Address" id="email" type="email" placeholder="john@example.com" required />
                <FormInput label="Phone Number" id="phone" type="tel" placeholder="+91 98765 43210" required />
                
                <FormInput label="Interest" id="interest" type="select" required>
                  <option value="">Select an option</option>
                  <option value="general">General Inquiry</option>
                  <option value="membership">Membership</option>
                  <option value="pt">Personal Training</option>
                  <option value="corporate">Corporate</option>
                  <option value="press">Press</option>
                </FormInput>
                
                <FormInput label="Message" id="message" type="textarea" placeholder="How can we help you?" required />
                
                <Button variant="primary" type="submit" className="w-full">
                  SEND MESSAGE
                </Button>
                
                <p className="privacy-note">Your details are never shared. We respond within 24 hours.</p>
              </form>
            </AnimatedSection>
            
            {/* Right: Info */}
            <AnimatedSection direction="right" className="contact-info-side">
              <div className="info-block">
                <h5 className="section-eyebrow">VISIT US</h5>
                <p className="info-text">
                  FORGEHAUS Studio<br/>
                  Level 2, Indiabulls Finance Centre<br/>
                  Senapati Bapat Marg, Lower Parel<br/>
                  Mumbai — 400013
                </p>
              </div>
              
              <div className="info-block">
                <h5 className="section-eyebrow">CONTACT</h5>
                <p className="info-text">
                  <a href="mailto:info@forgehaus.com" className="hover-amber">info@forgehaus.com</a><br/>
                  <a href="tel:+919820045210" className="hover-amber">+91 98200 45210</a>
                </p>
              </div>
              
              <div className="info-block">
                <h5 className="section-eyebrow">HOURS</h5>
                <p className="info-text">
                  <span className="mono-text">Monday – Friday:</span> 5:30 AM – 10:30 PM<br/>
                  <span className="mono-text">Saturday:</span> 6:00 AM – 8:00 PM<br/>
                  <span className="mono-text">Sunday:</span> 8:00 AM – 4:00 PM
                </p>
              </div>
              
              <div className="info-block">
                <h5 className="section-eyebrow">SOCIAL</h5>
                <div className="social-links">
                  <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
                  <a href="#" aria-label="YouTube"><Youtube size={24} /></a>
                  <a href="#" aria-label="LinkedIn"><Linkedin size={24} /></a>
                </div>
              </div>
              
              {/* Map embed simulation */}
              <div className="map-embed">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.669319385906!2d72.8315570752033!3d18.9902061822003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cef7149a4087%3A0xe5a363a033b006ef!2sIndiabulls%20Finance%20Centre!5e0!3m2!1sen!2sin!4v1709650000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(80%) hue-rotate(180deg)' }} 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 3: FAQ TEASER */}
      <section className="section section-steel">
        <div className="container-wide">
          <AnimatedSection className="faq-teaser-box">
            <h2 className="faq-teaser-heading">HAVE MORE QUESTIONS?</h2>
            <p className="faq-teaser-text">Most questions about membership, pricing, and programs are answered in our FAQ.</p>
            <div className="faq-teaser-links">
              <Link to="/membership" className="faq-teaser-card">
                <h3>Membership Types</h3>
                <ArrowRight size={20} className="text-amber" />
              </Link>
              <Link to="/membership" className="faq-teaser-card">
                <h3>Pricing & Contracts</h3>
                <ArrowRight size={20} className="text-amber" />
              </Link>
              <Link to="/membership" className="faq-teaser-card">
                <h3>Assessment Process</h3>
                <ArrowRight size={20} className="text-amber" />
              </Link>
            </div>
            <div className="text-center mt-8">
              <Button variant="text" to="/membership">See All FAQs</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
