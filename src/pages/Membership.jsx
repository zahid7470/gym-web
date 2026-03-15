import { CTABanner } from '../components/ui/CTABanner';
import { PricingCard } from '../components/ui/PricingCard';
import SectionHeader from '../components/ui/SectionHeader';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import AnimatedSection from '../components/AnimatedSection';
import { PageTransition } from '../components/PageTransition';
import { Check, X } from 'lucide-react';
import './Membership.css';

const FAQ_DATA = [
  {
    question: "Is there a joining fee?",
    answer: "Starter members pay a one-time joining fee of ₹2,500. This is waived for Performance and Elite members."
  },
  {
    question: "Can I change my plan?",
    answer: "Yes, upgrades take effect immediately. Downgrades take effect at the next billing cycle."
  },
  {
    question: "Do you offer a trial?",
    answer: "We offer a complimentary performance assessment (90 min), during which you experience the FORGEHAUS method firsthand before committing."
  },
  {
    question: "Is nutrition coaching included?",
    answer: "Nutrition review is included in Performance and Elite plans. Standalone nutrition coaching is available at ₹3,500/month."
  },
  {
    question: "Do you offer corporate memberships?",
    answer: "Yes. Contact us at corporate@forgehaus.com for custom group pricing."
  },
  {
    question: "What's your cancellation policy?",
    answer: "Month-to-month plans may be cancelled with 15 days' notice. Minimum-contract plans may be paused (up to 30 days/year) but not cancelled early."
  }
];

const Membership = () => {
  return (
    <PageTransition>
      {/* SECTION 1: HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop" 
            alt="Dark gym atmosphere" 
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="container page-hero-content text-center">
          <AnimatedSection direction="up">
            <h5 className="section-eyebrow">MEMBERSHIP PLANS</h5>
            <h1 className="page-hero-title">CHOOSE YOUR COMMITMENT.</h1>
            <p className="hero-subtitle mx-auto mt-4">
              Your results are a function of your investment — in time, in effort, and in the system you choose. Choose accordingly.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2: PRICING CARDS */}
      <section className="section section-dark">
        <div className="container-wide">
          <div className="grid-3 pricing-margin-top">
            <AnimatedSection delay={0.1}>
              <PricingCard 
                title="Starter"
                price="₹5,999"
                features={[
                  'Full access to group classes (Strength, HIIT, Mobility)', 
                  '1 monthly coach check-in (30 min)', 
                  'Access to app-based training log', 
                  'Locker access', 
                  '3 guest passes per year',
                  'Access to FORGEHAUS community portal'
                ]}
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <PricingCard 
                isFeatured
                title="Performance"
                price="₹9,499"
                features={[
                  'Everything in Starter, plus:', 
                  '2 monthly 1:1 coach sessions (45 min each)', 
                  'Monthly body composition scan (DEXA-equivalent)', 
                  'Monthly nutrition review with Precision Nutrition coach', 
                  'Priority class booking (48-hr advance)',
                  '1 mobility recovery session/week (dedicated slot)',
                  'Annual fitness assessment report',
                  '6 guest passes per year'
                ]}
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <PricingCard 
                title="Elite"
                price="₹15,999"
                features={[
                  'Everything in Performance, plus:', 
                  '4 monthly 1:1 sessions (60 min each)', 
                  'Unlimited priority booking', 
                  'Monthly supplement & recovery protocol review', 
                  'Direct WhatsApp access to assigned coach (Mon–Sat)',
                  'Quarterly comprehensive performance testing',
                  'Annual professional progress photography session',
                  '12 guest passes per year',
                  'Founding member lock-in pricing guarantee'
                ]}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 3: COMPARISON TABLE */}
      <section className="section section-steel">
        <div className="container-wide">
          <AnimatedSection>
            <SectionHeader 
              title="PLAN COMPARISON"
              subtitle="Detailed breakdown of all membership benefits"
            />
          </AnimatedSection>
          
          <div className="table-responsive mt-8">
            <table className="comparison-table membership-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Starter</th>
                  <th className="highlight-col block-header">Performance</th>
                  <th>Elite</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Group class access</td>
                  <td>All classes</td>
                  <td className="highlight-col">All classes</td>
                  <td>All classes</td>
                </tr>
                <tr>
                  <td>1:1 Coach sessions</td>
                  <td>0</td>
                  <td className="highlight-col">2 / month</td>
                  <td>4 / month</td>
                </tr>
                <tr>
                  <td>Body composition scan</td>
                  <td><X size={18} className="text-gray" /></td>
                  <td className="highlight-col">Monthly</td>
                  <td>Monthly</td>
                </tr>
                <tr>
                  <td>Nutrition review</td>
                  <td><X size={18} className="text-gray" /></td>
                  <td className="highlight-col">Monthly</td>
                  <td>Monthly</td>
                </tr>
                <tr>
                  <td>Booking window</td>
                  <td>24hr advance</td>
                  <td className="highlight-col">48hr advance</td>
                  <td>Unlimited priority</td>
                </tr>
                <tr>
                  <td>Mobility recovery sessions</td>
                  <td><X size={18} className="text-gray" /></td>
                  <td className="highlight-col">1 / week</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Coach direct access</td>
                  <td><X size={18} className="text-gray" /></td>
                  <td className="highlight-col"><X size={18} className="text-forge opacity-50" /></td>
                  <td><Check size={18} className="text-amber" /></td>
                </tr>
                <tr>
                  <td>Guest passes/year</td>
                  <td>3</td>
                  <td className="highlight-col">6</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Joining fee</td>
                  <td>₹2,500</td>
                  <td className="highlight-col">Waived</td>
                  <td>Waived</td>
                </tr>
                <tr>
                  <td>Contract minimum</td>
                  <td>Month-to-month</td>
                  <td className="highlight-col">3 months</td>
                  <td>6 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4: FAQ */}
      <section className="section section-dark">
        <div className="container-wide">
          <AnimatedSection>
            <SectionHeader 
              title="FREQUENTLY ASKED QUESTIONS"
            />
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="mt-8">
            <FAQAccordion items={FAQ_DATA} />
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5: CTA BANNER */}
      <AnimatedSection>
        <CTABanner 
          title="START WITH A FREE ASSESSMENT."
          subtitle="Not sure which plan fits? Your first step is a no-commitment, 90-minute performance assessment with one of our lead coaches."
          primaryText="BOOK FREE ASSESSMENT"
        />
      </AnimatedSection>
    </PageTransition>
  );
};

export default Membership;
