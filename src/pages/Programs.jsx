import { useState } from 'react';
import { Button } from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';
import { PageTransition } from '../components/PageTransition';
import { Check, X } from 'lucide-react';
import './Programs.css';

const TABS = [
  { id: 'strength', label: 'Strength & Conditioning' },
  { id: 'hiit', label: 'HIIT & Metabolic' },
  { id: 'mobility', label: 'Mobility & Recovery' },
  { id: 'pt', label: 'Personal Training' }
];

const PROGRAM_CONTENT = {
  strength: {
    title: 'Strength & Conditioning',
    desc: 'Build raw power and structural resilience with periodized strength protocols designed by elite S&C coaches.',
    schedule: 'Mon / Wed / Fri — 6:00 AM, 7:30 AM, 12:00 PM, 6:30 PM, 8:00 PM',
    duration: '60 minutes',
    level: 'Beginner to Advanced (streamed by assessment)',
    included: ['Movement screening', 'Periodized programming', 'Accessory work', 'Weekly check-ins'],
    coaches: 'Marcus Reeves (lead), Jordan Alves',
    maxSize: '10 members',
    img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2938&auto=format&fit=crop'
  },
  hiit: {
    title: 'HIIT & Metabolic',
    desc: 'High-intensity interval training engineered to torch fat, build endurance, and rewire your metabolism.',
    schedule: 'Tue / Thu / Sat — 6:00 AM, 8:00 AM, 5:30 PM, 7:30 PM',
    duration: '45 minutes',
    level: 'Intermediate to Advanced',
    included: ['Heart-rate zone training', 'Nutrition periodization alignment', 'Bi-weekly body composition scans'],
    coaches: 'Jordan Alves (lead), Aisha Khaled',
    maxSize: '12 members',
    img: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2825&auto=format&fit=crop'
  },
  mobility: {
    title: 'Mobility & Recovery',
    desc: 'Injury prevention, movement optimization, and deep tissue recovery — the work most athletes skip.',
    schedule: 'Mon / Wed / Fri / Sun — 7:00 AM, 6:00 PM',
    duration: '60 minutes',
    level: 'All levels (recommended add-on to primary program)',
    included: ['FMS assessment', 'Corrective exercise protocols', 'Deep tissue methodology', 'Breathwork integration'],
    coaches: 'Aisha Khaled (lead), Dr. Priya Menon',
    maxSize: '8 members',
    img: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2940&auto=format&fit=crop'
  },
  pt: {
    title: 'Personal Training',
    desc: 'Fully custom 1:1 or 2:1 training engineered specifically for your physiology and goals.',
    schedule: 'Flexible booking',
    duration: '60 - 90 minutes',
    level: 'All levels',
    included: ['90-minute performance assessment', 'Custom periodized programming', 'Daily check-ins', 'Nutrition management'],
    coaches: 'All coaches available based on specialty matching',
    maxSize: '1:1 or 2:1 only',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop'
  }
};

const Programs = () => {
  const [activeTab, setActiveTab] = useState('strength');
  const activeContent = PROGRAM_CONTENT[activeTab];

  return (
    <PageTransition>
      {/* SECTION 1: HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop" 
            alt="Training montage" 
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="container page-hero-content text-center">
          <AnimatedSection direction="up">
            <h5 className="section-eyebrow">WHAT WE OFFER</h5>
            <h1 className="page-hero-title">PROGRAMS DESIGNED TO PERFORM.</h1>
            <p className="hero-subtitle mx-auto mt-4">
              Every FORGEHAUS program is built from a periodized framework — structured progressions, outcome milestones, and coach-supervised execution.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2: PROGRAM TABS */}
      <section className="section section-dark pb-0">
        <div className="container-wide">
          <div className="tabs-nav">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="tab-content-wrapper section-steel">
          <div className="container-wide pt-12 pb-12">
            <AnimatedSection key={activeTab} direction="none" className="tab-grid">
              <div className="tab-info">
                <SectionHeader 
                  alignment="left"
                  title={activeContent.title}
                  subtitle={activeContent.desc}
                />
                
                <div className="program-details mt-8">
                  <div className="detail-row">
                    <span className="detail-label">Schedule </span>
                    <span className="detail-value">{activeContent.schedule}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Duration </span>
                    <span className="detail-value">{activeContent.duration}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Level </span>
                    <span className="detail-value">{activeContent.level}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Coaches </span>
                    <span className="detail-value">{activeContent.coaches}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Max Size </span>
                    <span className="detail-value">{activeContent.maxSize}</span>
                  </div>
                  
                  <div className="detail-included mt-6">
                    <h5 className="included-title">What's Included:</h5>
                    <ul className="included-list">
                      {activeContent.included.map((item, i) => (
                        <li key={i}><Check size={16} className="text-amber" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Button variant="primary" to="/contact" className="mt-8">Join This Program</Button>
              </div>
              
              <div className="tab-image-wrap">
                <img src={activeContent.img} alt={activeContent.title} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 3: COMPARISON TABLE */}
      <section className="section section-dark">
        <div className="container-wide">
          <AnimatedSection>
            <SectionHeader 
              title="PROGRAM COMPARISON"
            />
          </AnimatedSection>
          
          <div className="table-responsive mt-8">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Strength</th>
                  <th>HIIT</th>
                  <th>Mobility</th>
                  <th className="highlight-col">Personal Training</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Coach Ratio</td>
                  <td>1:10</td>
                  <td>1:12</td>
                  <td>1:8</td>
                  <td className="highlight-col">1:1 or 1:2</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>60 min</td>
                  <td>45 min</td>
                  <td>60 min</td>
                  <td className="highlight-col">60 - 90 min</td>
                </tr>
                <tr>
                  <td>Nutrition Support</td>
                  <td><X size={18} className="text-gray" /></td>
                  <td><Check size={18} className="text-amber" /></td>
                  <td><X size={18} className="text-gray" /></td>
                  <td className="highlight-col"><Check size={18} className="text-forge" /> Full Custom</td>
                </tr>
                <tr>
                  <td>Body Comp Scan</td>
                  <td><X size={18} className="text-gray" /></td>
                  <td>Bi-weekly</td>
                  <td><X size={18} className="text-gray" /></td>
                  <td className="highlight-col">Monthly</td>
                </tr>
                <tr>
                  <td>Recovery Sessions</td>
                  <td><X size={18} className="text-gray" /></td>
                  <td><X size={18} className="text-gray" /></td>
                  <td>Included</td>
                  <td className="highlight-col">Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Programs;
