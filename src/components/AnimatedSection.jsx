import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const directions = {
    up: { y: 24, x: 0 },
    left: { x: -16, y: 0 },
    right: { x: 16, y: 0 },
    none: { x: 0, y: 0 },
  };

  const d = directions[direction] || directions.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: d.x, y: d.y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: d.x, y: d.y }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
