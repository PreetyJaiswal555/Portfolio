import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 500);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#030712',
          }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background glow */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }} />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }} />
          </div>

          {/* Orbiting dots — centered */}
          <div style={{ position: 'relative', width: '120px', height: '120px', marginBottom: '2rem' }}>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: i % 2 === 0 ? '#06b6d4' : '#a855f7',
                  top: '50%',
                  left: '50%',
                  marginTop: '-4px',
                  marginLeft: '-4px',
                }}
                animate={{
                  x: Math.cos((i / 6) * Math.PI * 2) * 50,
                  y: Math.sin((i / 6) * Math.PI * 2) * 50,
                  scale: [1, 1.4, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: 'easeInOut',
                }}
              />
            ))}

            {/* Center PJ logo */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontFamily: 'Outfit, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              PJ
            </div>
          </div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ position: 'relative', zIndex: 10, textAlign: 'center', marginBottom: '2.5rem' }}
          >
            <p style={{
              color: '#94a3b8',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontFamily: 'Fira Code, monospace',
            }}>
              Preety Jaiswal
            </p>
          </motion.div>

          {/* Progress bar */}
          <div style={{ position: 'relative', zIndex: 10, width: '220px' }}>
            <div style={{
              width: '100%',
              height: '3px',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: '999px',
              overflow: 'hidden',
            }}>
              <motion.div
                style={{
                  height: '100%',
                  borderRadius: '999px',
                  background: 'linear-gradient(90deg, #06b6d4, #a855f7)',
                  width: `${progress}%`,
                  boxShadow: '0 0 10px rgba(6,182,212,0.5)',
                }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '10px',
            }}>
              <span style={{ color: '#475569', fontSize: '0.72rem', fontFamily: 'Fira Code, monospace' }}>
                Loading portfolio...
              </span>
              <span style={{ color: '#06b6d4', fontSize: '0.72rem', fontFamily: 'Fira Code, monospace' }}>
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
