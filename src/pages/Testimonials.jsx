import { CTABanner } from '../components/ui/CTABanner';
import SectionHeader from '../components/ui/SectionHeader';
import { TestimonialCard } from '../components/ui/TestimonialCard';
import { StatCounter } from '../components/ui/StatCounter';
import AnimatedSection from '../components/AnimatedSection';
import { PageTransition } from '../components/PageTransition';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <PageTransition>
      {/* SECTION 1: HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=2787&auto=format&fit=crop" 
            alt="Gym triumph" 
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="container page-hero-content text-center">
          <AnimatedSection direction="up">
            <h5 className="section-eyebrow">MEMBER STORIES</h5>
            <h1 className="page-hero-title">RESULTS DON'T LIE.</h1>
            <p className="hero-subtitle mx-auto mt-4">
              Over 400 documented transformation stories. Here are a few.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2: FEATURED SUCCESS STORY */}
      <section className="section section-dark">
        <div className="container-wide">
          <div className="featured-story">
            <AnimatedSection direction="left" className="featured-image-wrap">
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2940&auto=format&fit=crop" 
                alt="Rahul Sharma Transformation" 
              />
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="featured-content">
              <h5 className="section-eyebrow">FEATURED STORY</h5>
              <h2 className="featured-title">RAHUL SHARMA</h2>
              
              <div className="featured-quote">
                <span className="featured-quote-mark">“</span>
                <p>I had tried 4 gyms before FORGEHAUS. The difference isn't the equipment — it's that someone here actually cared whether I showed up. I dropped 18kg in 6 months without a single day of crash dieting. The program was so structured, I never had to guess.</p>
              </div>
              
              <div className="featured-stats mt-8">
                <div className="stat-box">
                  <div className="stat-val">102kg → 84kg</div>
                  <div className="stat-lbl">Body Weight</div>
                </div>
                <div className="stat-box">
                  <div className="stat-val">28% → 14%</div>
                  <div className="stat-lbl">Body Fat</div>
                </div>
                <div className="stat-box">
                  <div className="stat-val">8 Months</div>
                  <div className="stat-lbl">Timeline</div>
                </div>
                <div className="stat-box">
                  <div className="stat-val">Performance</div>
                  <div className="stat-lbl">Program</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 3: TESTIMONIAL GRID */}
      <section className="section section-steel">
        <div className="container-wide">
          <div className="masonry-grid">
            <AnimatedSection delay={0.1}>
              <TestimonialCard 
                quote="Post-breast cancer treatment, I needed a coach who understood my medical history. Dr. Priya built a program that felt protective, not punishing. I've never been stronger in my life."
                authorName="Meera Iyer"
                authorPlan="Elite Member, 11 months"
                avatarUrl="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2788&auto=format&fit=crop"
                variant="light"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <TestimonialCard 
                quote="I'm a software engineer. I need efficiency. FORGEHAUS gives me 60 minutes of structured work that actually compounds. No fluff, no downtime, no wasted sets."
                authorName="David Okafor"
                authorPlan="Performance Member, 6 months"
                avatarUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop"
                variant="dark"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <TestimonialCard 
                quote="I was intimidated walking in. Within a week, I realized everyone here was focused on their own work. No judgment. Just effort."
                authorName="Natasha Rai"
                authorPlan="Starter Member, 4 months"
                avatarUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"
                variant="light"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <TestimonialCard 
                quote="At 54, I was told I should 'take it easy.' Marcus built me a program that helped me deadlift 150kg at 55. FORGEHAUS doesn't accept excuses — not even age."
                authorName="Amitabh Joshi"
                authorPlan="Elite Member, 22 months"
                avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
                variant="dark"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.5}>
              <TestimonialCard 
                quote="The nutrition coaching alone was worth the membership upgrade. I lost 12kg without ever feeling deprived."
                authorName="Sofia Carvalho"
                authorPlan="Performance Member, 9 months"
                avatarUrl="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2864&auto=format&fit=crop"
                variant="light"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.6}>
              <TestimonialCard 
                quote="The app tracking, the coach check-ins, the class structure — everything is connected. You always know where you are and what's next."
                authorName="Karan Mehta"
                authorPlan="Starter Member, 7 months"
                avatarUrl="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2848&auto=format&fit=crop"
                variant="dark"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 4: STATS BAR */}
      <section className="section section-dark border-y-amber">
        <div className="container">
          <div className="stats-grid">
            <StatCounter endValue="400" suffix="+" label="Transformations" />
            <StatCounter endValue="18" suffix="kg" label="Avg Fat Loss" />
            <StatCounter endValue="94" suffix="%" label="Retention Rate" />
            <StatCounter endValue="4.9" suffix="/5" label="Average Rating" />
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA BANNER */}
      <AnimatedSection>
        <CTABanner 
          title="YOUR STORY STARTS HERE."
          subtitle="Are you ready to commit to the system that guarantees results?"
          primaryText="BOOK FREE ASSESSMENT"
        />
      </AnimatedSection>
    </PageTransition>
  );
};

export default Testimonials;
