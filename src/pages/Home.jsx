import { ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';
import { StatCounter } from '../components/ui/StatCounter';
import { ProgramCard } from '../components/ui/ProgramCard';
import { TrainerCard } from '../components/ui/TrainerCard';
import { PricingCard } from '../components/ui/PricingCard';
import { TestimonialCard } from '../components/ui/TestimonialCard';
import { CTABanner } from '../components/ui/CTABanner';
import { PageTransition } from '../components/PageTransition';

import './Home.css';

const Home = () => {
  return (
    <PageTransition>
      {/* SECTION 1: HERO */}
      <section className="hero">
        <div className="hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop" 
            alt="Athletes training" 
            className="hero-image"
          />
          <div className="hero-overlay" />
        </div>
        
        <div className="container-wide hero-content">
          <AnimatedSection direction="up" delay={0.2} className="hero-text-block">
            <h5 className="hero-eyebrow">EST. 2019 — MUMBAI, INDIA</h5>
            <h1 className="hero-title">
              FORGE YOUR <br />
              <span className="text-gradient">BEST SELF.</span>
            </h1>
            <p className="hero-subtitle">
              Elite performance training, engineered around your physiology. No templates. No shortcuts.
            </p>
            <div className="hero-actions">
              <Button variant="primary" to="/contact">Start Your Assessment</Button>
              <Button variant="ghost" to="/programs">Explore Programs</Button>
            </div>
          </AnimatedSection>
          
          <div className="hero-decorative-line" />
        </div>
        
        <div className="hero-scroll-indicator">
          <span className="hero-scroll-text">SCROLL</span>
          <ChevronDown size={20} className="hero-scroll-icon" />
        </div>
        
        <div className="hero-divider" />
      </section>

      {/* SECTION 2: STATS BAR */}
      <section className="stats-section section-steel">
        <div className="container">
          <div className="stats-grid">
            <StatCounter endValue="1400" suffix="+" label="Members" />
            <StatCounter endValue="12" label="Elite Coaches" />
            <StatCounter endValue="8" label="Specialized Programs" />
            <StatCounter endValue="94" suffix="%" label="Retention Rate" />
          </div>
        </div>
      </section>

      {/* SECTION 3: ABOUT TEASER */}
      <section className="about-teaser section-dark">
        <div className="container-wide">
          <div className="about-split">
            <AnimatedSection direction="left" className="about-image-wrap">
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2940&auto=format&fit=crop" 
                alt="Lone athlete in dramatic lighting" 
                className="about-image"
              />
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="about-content">
              <SectionHeader 
                alignment="left"
                eyebrow="WHO WE ARE"
                title="NOT ANOTHER GYM. A PERFORMANCE SYSTEM."
              />
              <div className="about-text">
                <p>FORGEHAUS was built on a single conviction: that most gyms waste your time. Generic programs. Unmotivated coaches. No accountability. We built something different.</p>
                <p>Every program at FORGEHAUS is built from a scientific foundation — periodized training, nutritional alignment, and recovery strategy — and delivered by coaches who treat your goals as their own.</p>
                <p>This is not a membership. It is a commitment to a method that works.</p>
              </div>
              <Button variant="text" to="/about" className="mt-6">Our Story</Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED PROGRAMS */}
      <section className="programs-section section-dark">
        <div className="container-wide">
          <AnimatedSection>
            <SectionHeader 
              eyebrow="OUR PROGRAMS"
              title="BUILT FOR RESULTS. DESIGNED FOR YOU."
            />
          </AnimatedSection>
          
          <div className="grid-3">
            <AnimatedSection delay={0.1}>
              <ProgramCard 
                category="STRENGTH TRAINING"
                title="Strength & Conditioning"
                description="Build raw power and structural resilience with periodized strength protocols designed by elite S&C coaches."
                imageUrl="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2938&auto=format&fit=crop"
                linkTo="/programs"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <ProgramCard 
                category="METABOLIC"
                title="HIIT & Metabolic"
                description="High-intensity interval training engineered to torch fat, build endurance, and rewire your metabolism."
                imageUrl="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2825&auto=format&fit=crop"
                linkTo="/programs"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <ProgramCard 
                category="RECOVERY"
                title="Mobility & Recovery"
                description="Injury prevention, movement optimization, and deep tissue recovery — the work most athletes skip."
                imageUrl="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2940&auto=format&fit=crop"
                linkTo="/programs"
              />
            </AnimatedSection>
          </div>
          
          <AnimatedSection direction="up" className="text-center mt-12">
            <Button variant="text" to="/programs">View All Programs</Button>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5: TRAINERS INLINE CTA & TRAINERS GRID */}
      <section className="trainers-section section-dark">
        <div className="container-wide">
          <AnimatedSection>
            <CTABanner 
              variant="inline"
              title="THE SCIENCE BEHIND YOUR RESULTS."
              subtitle="Our coaches hold Level 3 certifications and build your program around your physiology, not a template."
              primaryText="Meet the Full Team"
              primaryTo="/trainers"
            />
          </AnimatedSection>
          
          <div className="grid-4 mt-12">
            <AnimatedSection delay={0.1}>
              <TrainerCard 
                name="Marcus Reeves"
                specialty="Head of Strength & Conditioning"
                bio="Built strength programs for 3 national-level athletes. Specialist in powerlifting and barbell mechanics."
                certs="NSCA-CSCS, NASM-CPT"
                imageUrl="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2940&auto=format&fit=crop"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <TrainerCard 
                name="Dr. Priya Menon"
                specialty="Movement & Rehabilitation"
                bio="Exercise science researcher turned performance coach. Specializes in post-surgical rehabilitation."
                certs="PhD Exercise Science, FMS L2"
                imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <TrainerCard 
                name="Jordan Alves"
                specialty="Metabolic Performance Coach"
                bio="Former competitive sprinter. Specialist in body recomposition and metabolic conditioning."
                certs="ACE-CPT, Precision Nutrition L1"
                imageUrl="https://images.unsplash.com/photo-1583468982273-90d6eec4e1cc?q=80&w=2787&auto=format&fit=crop"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <TrainerCard 
                name="Aisha Khaled"
                specialty="Mobility & Yoga Integration"
                bio="10 years in movement arts. Integrates breath, fascia release, and corrective exercise."
                certs="RYT-500, NASM-CES"
                imageUrl="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2940&auto=format&fit=crop"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 6: PRICING PREVIEW */}
      <section className="pricing-section section-bone">
        <div className="container-wide">
          <AnimatedSection>
            <SectionHeader 
              eyebrow="MEMBERSHIP"
              title="INVEST IN YOUR PERFORMANCE."
            />
          </AnimatedSection>
          
          <div className="grid-3 pricing-preview-grid">
            <AnimatedSection delay={0.1}>
              <PricingCard 
                title="Starter"
                price="₹5,999"
                features={['Full access to group classes', '1 monthly coach check-in', 'Access to app tracking', 'Locker access', '3 guest passes per year']}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <PricingCard 
                isFeatured
                title="Performance"
                price="₹9,499"
                features={['Everything in Starter', '2 monthly 1:1 coach sessions', 'Monthly DEXA scan', 'Monthly nutrition review', '1 mobility session/week']}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <PricingCard 
                title="Elite"
                price="₹15,999"
                features={['Everything in Performance', '4 monthly 1:1 sessions', 'Unlimited priority booking', 'Direct WhatsApp access to coach', 'Quarterly performance testing']}
              />
            </AnimatedSection>
          </div>
          
          <AnimatedSection direction="up" className="text-center mt-12">
            <Button variant="text" to="/membership">See Full Comparison</Button>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS STRIP */}
      <section className="testimonials-section section-dark">
        <div className="container-wide">
          <AnimatedSection>
            <SectionHeader 
              eyebrow="MEMBERS SPEAK"
              title="THE RESULTS ARE REAL."
            />
          </AnimatedSection>
          
          <div className="grid-3">
            <AnimatedSection delay={0.1}>
              <TestimonialCard 
                quote="I dropped 18kg in 6 months without a single day of crash dieting. The program was so structured, I never had to guess."
                authorName="Rahul Sharma"
                authorPlan="Performance Member, 14 months"
                avatarUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop"
                variant="dark"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <TestimonialCard 
                quote="Coming in post-ACL surgery, I wasn't sure any gym would understand my limitations. Dr. Priya rebuilt me from the ground up."
                authorName="Sana Mirza"
                authorPlan="Elite Member, 8 months"
                avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop"
                variant="dark"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <TestimonialCard 
                quote="I've trained in London, Dubai, and Singapore. FORGEHAUS is the most scientific and committed gym experience I've encountered."
                authorName="James O'Brien"
                authorPlan="Starter Member, 5 months"
                avatarUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop"
                variant="dark"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA BANNER */}
      <AnimatedSection>
        <CTABanner 
          title="READY TO START BECOMING?"
          subtitle="Book your complimentary performance assessment and let's design your program."
          primaryText="BOOK FREE ASSESSMENT"
        />
      </AnimatedSection>
    </PageTransition>
  );
};

export default Home;
