import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { threshold, once: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return { ref, controls, variants };
};

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setProgress(total > 0 ? (current / total) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};

export const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState('up');
  const [scrollY, setScrollY] = useState(0);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollDir(y > lastY.current ? 'down' : 'up');
      lastY.current = y;
      setScrollY(y);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollDir, scrollY };
};
