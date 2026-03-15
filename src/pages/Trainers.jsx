import { CTABanner } from '../components/ui/CTABanner';
import { TrainerCard } from '../components/ui/TrainerCard';
import AnimatedSection from '../components/AnimatedSection';
import { PageTransition } from '../components/PageTransition';

const Trainers = () => {
  return (
    <PageTransition>
      {/* SECTION 1: HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2940&auto=format&fit=crop" 
            alt="Coach adjusting form" 
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="container page-hero-content text-center">
          <AnimatedSection direction="up">
            <h5 className="section-eyebrow">OUR TRAINERS</h5>
            <h1 className="page-hero-title">THE COACHES BEHIND<br/>YOUR RESULTS.</h1>
            <p className="hero-subtitle mx-auto mt-4">
              Every FORGEHAUS coach holds at minimum one Level 3 or equivalent certification. We don't hire based on aesthetics — we hire based on outcomes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2: TRAINER GRID */}
      <section className="section section-dark pb-32">
        <div className="container-wide">
          <div className="grid-3">
            <AnimatedSection>
              <TrainerCard 
                name="Marcus Reeves"
                specialty="Head of Strength & Conditioning"
                bio="Former national-level powerlifter, 12 years coaching experience. Built strength programs for 3 national-level athletes. Specialist in powerlifting, barbell mechanics, and performance periodization."
                certs="NSCA-CSCS, NASM-CPT, USAW L2"
                imageUrl="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2940&auto=format&fit=crop"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <TrainerCard 
                name="Dr. Priya Menon"
                specialty="Rehabilitation & Movement Lead"
                bio="Exercise science researcher turned performance coach. Specializes in post-surgical rehabilitation, chronic pain management through movement, and biomechanical correction."
                certs="PhD Ex. Science, FMS L2, NASM-CES"
                imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <TrainerCard 
                name="Jordan Alves"
                specialty="Metabolic Performance Coach"
                bio="Former competitive sprinter. Specialist in body recomposition, metabolic conditioning, and sport-specific performance development."
                certs="ACE-CPT, Precision Nutrition L1"
                imageUrl="https://images.unsplash.com/photo-1583468982273-90d6eec4e1cc?q=80&w=2787&auto=format&fit=crop"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <TrainerCard 
                name="Aisha Khaled"
                specialty="Mobility & Mindful Performance"
                bio="10 years in movement arts and therapeutic yoga. Integrates breath, fascia release, and corrective exercise into performance recovery systems."
                certs="RYT-500, NASM-CES, FMS L1"
                imageUrl="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2940&auto=format&fit=crop"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <TrainerCard 
                name="Rohan Desai"
                specialty="Strength & Hypertrophy Coach"
                bio="Competitive natural bodybuilder, specialist in evidence-based hypertrophy, caloric periodization, and sustainable muscle development."
                certs="NASM-CPT, NASM-PES, ISSA Nutrition"
                imageUrl="https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=2873&auto=format&fit=crop"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.5}>
              <TrainerCard 
                name="Kavitha Nair"
                specialty="Group Performance & HIIT Coach"
                bio="Former dance athlete and competitive crossfit participant. Builds high-energy, structurally safe group training formats that drive measurable cardiovascular adaptations."
                certs="ACE Group Fitness, NASM-CPT"
                imageUrl="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 3: CTA BLOCK */}
      <section className="section-dark pb-32">
        <div className="container-wide">
          <AnimatedSection>
            <CTABanner 
              variant="inline"
              title="TRAIN WITH THE BEST."
              subtitle="Not sure which coach is right for you? Our performance assessment process matches you to the coach best aligned with your goals and training history."
              primaryText="Book My Assessment"
            />
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
};

export default Trainers;
