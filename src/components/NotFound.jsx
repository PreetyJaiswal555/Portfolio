import { motion } from 'framer-motion';
import { FiArrowLeft, FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#030712',
      padding: '1.5rem',
    }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(6rem, 20vw, 10rem)',
            fontWeight: 900,
            background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1,
            marginBottom: '0.75rem',
          }}
        >
          404
        </motion.div>

        <h1 style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: '1.75rem',
          fontWeight: 700,
          color: '#f1f5f9',
          marginBottom: '0.75rem',
        }}>
          Page Not Found
        </h1>
        <p style={{ color: '#64748b', marginBottom: '2.5rem', maxWidth: '400px' }}>
          Looks like you wandered into the void. Let's get you back to safety.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            style={{
              padding: '12px 24px',
              borderRadius: '12px',
              background: 'rgba(6,182,212,0.1)',
              border: '1px solid rgba(6,182,212,0.3)',
              color: '#06b6d4',
              cursor: 'pointer',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem',
            }}
          >
            <FiArrowLeft /> Go Back
          </motion.button>

          <Link to="/" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(6,182,212,0.3)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '12px 24px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.9rem',
              }}
            >
              <FiHome /> Home
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
