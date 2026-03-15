import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './StatCounter.css';

export const StatCounter = ({ endValue, label, duration = 1500, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (!inView) return;
    
    let startTime = null;
    const end = parseInt(endValue.replace(/,/g, ''), 10);
    
    // Fallback if not a number
    if (isNaN(end)) {
      setCount(endValue);
      return;
    }

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue); // Ensure we end on the exact string to keep formatting like commas
      }
    };
    
    window.requestAnimationFrame(step);
  }, [inView, endValue, duration]);

  return (
    <div className="stat-counter" ref={ref}>
      <div className="stat-number">
        {prefix}{count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};
