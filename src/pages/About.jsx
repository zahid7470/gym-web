import { Button } from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';
import { TrainerCard } from '../components/ui/TrainerCard';
import { PageTransition } from '../components/PageTransition';
import './About.css';

const About = () => {
  return (
    <PageTransition>
      {/* SECTION 1: HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2940&auto=format&fit=crop" 
            alt="Gym interior dramatic lighting" 
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="container page-hero-content text-center">
          <AnimatedSection direction="up">
            <h5 className="section-eyebrow">OUR STORY</h5>
            <h1 className="page-hero-title">WE ARE FORGEHAUS.</h1>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2: ORIGIN STORY */}
      <section className="section section-dark">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeader 
              title="BUILT OUT OF FRUSTRATION.\nREFINED INTO PURPOSE."
            />
            <div className="story-text">
              <p>FORGEHAUS was founded in 2019 by Marcus Reeves and Dr. Priya Menon after years of working inside gyms that prioritized membership numbers over member results. The pair had trained elite athletes, rehabilitated post-surgical patients, and watched too many motivated people fail not because of lack of commitment — but because of lack of structure.</p>
              
              <p>They secured a 6,000 sq. ft. space in Lower Parel, Mumbai, and spent eight months building a facility that looked and functioned nothing like a conventional gym. Every piece of equipment was selected by function. Every square meter was assigned a purpose.</p>
              
              <p>FORGEHAUS opened its doors on March 15, 2019 with 40 founding members and a waiting list of 200. The method worked. The members stayed. The community grew.</p>
              
              <p>Today, FORGEHAUS serves over 1,400 members across three membership tiers, employs 12 full-time coaches, and has produced results that speak for themselves — including 3 national-level competitive athletes, over 400 documented body recomposition success stories, and a 94% annual membership retention rate.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3: MISSION & VISION */}
      <section className="section section-charcoal mission-vision">
        <div className="container-wide">
          <div className="mission-grid">
            <AnimatedSection direction="up" className="mission-card">
              <span className="mission-quote-mark">“</span>
              <h5 className="section-eyebrow">MISSION</h5>
              <p className="mission-text">
                Our mission is to deliver elite-level performance methodology to individuals who are serious about permanent transformation — without compromise, without shortcuts, and without wasted effort.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.2} className="mission-card">
              <span className="mission-quote-mark">”</span>
              <h5 className="section-eyebrow">VISION</h5>
              <p className="mission-text">
                We envision a world where premium fitness is defined not by the size of the equipment or the aesthetics of the facility — but by the measurable, sustainable results of every member who walks through the door.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE VALUES */}
      <section className="section section-steel">
        <div className="container-wide">
          <AnimatedSection>
            <SectionHeader 
              title="CORE VALUES"
            />
          </AnimatedSection>
          <div className="grid-4 mt-6">
            <div className="value-card">
              <h3 className="value-title">Methodology First</h3>
              <p className="value-desc">Every program is evidence-based. We don't follow trends. We follow science.</p>
            </div>
            <div className="value-card">
              <h3 className="value-title">Coach Accountability</h3>
              <p className="value-desc">Your coach is responsible for your progress. Not just your session.</p>
            </div>
            <div className="value-card">
              <h3 className="value-title">Community Without Compromise</h3>
              <p className="value-desc">We are a community of serious people. We welcome all levels — but we expect commitment.</p>
            </div>
            <div className="value-card">
              <h3 className="value-title">Results or We Adapt</h3>
              <p className="value-desc">If you're not progressing, we change the program. Not the goal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FACILITIES */}
      <section className="section section-dark">
        <div className="container-wide">
          <AnimatedSection>
            <SectionHeader 
              eyebrow="THE SPACE"
              title="ENGINEERED FOR PERFORMANCE."
            />
          </AnimatedSection>
          
          <div className="facilities-bento mt-12">
            <div className="facility-img bento-large">
              <img src="https://images.unsplash.com/photo-1570829460005-c840387bb1ea?q=80&w=2832&auto=format&fit=crop" alt="Main training floor" />
              <div className="facility-caption">MAIN TRAINING FLOOR</div>
            </div>
            <div className="facility-img">
              <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2938&auto=format&fit=crop" alt="Strength bay" />
              <div className="facility-caption">STRENGTH BAY</div>
            </div>
            <div className="facility-img">
              <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2938&auto=format&fit=crop" alt="Recovery room" />
              <div className="facility-caption">RECOVERY PODS</div>
            </div>
            <div className="facility-img bento-wide">
              <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2875&auto=format&fit=crop" alt="Locker rooms" />
              <div className="facility-caption">LOCKER ROOMS</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TEAM INTRODUCTION */}
      <section className="section section-dark pb-32">
        <div className="container-wide">
          <AnimatedSection>
            <SectionHeader 
              eyebrow="THE TEAM"
              title="MEET YOUR COACHES."
            />
          </AnimatedSection>
          <div className="grid-4 mt-12 mb-12">
            <TrainerCard 
              name="Marcus Reeves"
              specialty="Head of Strength & Conditioning"
              bio="Built strength programs for 3 national-level athletes."
              certs="NSCA-CSCS, NASM-CPT"
              imageUrl="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2940&auto=format&fit=crop"
            />
            <TrainerCard 
              name="Dr. Priya Menon"
              specialty="Movement & Rehabilitation"
              bio="Exercise science researcher turned performance coach."
              certs="PhD Exercise Science, FMS L2"
              imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop"
            />
            <TrainerCard 
              name="Jordan Alves"
              specialty="Metabolic Performance Coach"
              bio="Former competitive sprinter. Specialist in body recomposition."
              certs="ACE-CPT, Precision Nutrition L1"
              imageUrl="https://images.unsplash.com/photo-1583468982273-90d6eec4e1cc?q=80&w=2787&auto=format&fit=crop"
            />
            <TrainerCard 
              name="Aisha Khaled"
              specialty="Mobility & Yoga Integration"
              bio="10 years in movement arts. Integrates breath, fascia release."
              certs="RYT-500, NASM-CES"
              imageUrl="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2940&auto=format&fit=crop"
            />
          </div>
          <div className="text-center">
            <Button variant="primary" to="/trainers">Full Team →</Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
