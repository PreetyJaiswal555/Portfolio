import { useScrollProgress } from '../hooks/useScrollAnimation';

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #06b6d4, #a855f7, #f0abfc)',
        zIndex: 1001,
        transition: 'width 0.1s linear',
        boxShadow: '0 0 10px rgba(6,182,212,0.5)',
      }}
    />
  );
};

export default ScrollProgress;
