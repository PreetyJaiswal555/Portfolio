import { motion } from 'framer-motion';
import { FiExternalLink, FiAward } from 'react-icons/fi';
import { certifications } from '../data/portfolioData';
import { SectionHeader } from './About';

const Certifications = () => {
  return (
    <section id="certifications" style={{ padding: '5rem 0', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, transparent, rgba(6,182,212,0.03) 50%, transparent)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          tag="// certifications"
          title="Oracle Cloud"
          highlight="Certifications"
          subtitle="Professional cloud certifications validating my expertise."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: '1.75rem',
        }}>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{
                scale: 1.03,
                boxShadow: `0 30px 60px ${cert.glowColor}`,
              }}
              style={{
                padding: '2rem',
                borderRadius: '20px',
                background: 'rgba(15,23,42,0.8)',
                backdropFilter: 'blur(20px)',
                border: `1px solid rgba(255,255,255,0.08)`,
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
                transition: 'box-shadow 0.3s ease',
              }}
            >
              {/* Gradient top accent */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '3px',
                background: `linear-gradient(90deg, ${cert.colorFrom}, ${cert.colorTo})`,
              }} />

              {/* Badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '18px',
                  background: `linear-gradient(135deg, ${cert.colorFrom}, ${cert.colorTo})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  marginBottom: '1.25rem',
                  boxShadow: `0 0 30px ${cert.glowColor}`,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {cert.badge}
              </motion.div>

              {/* Oracle badge */}
              <div style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                padding: '4px 10px',
                borderRadius: '999px',
                background: 'rgba(239,68,68,0.1)',
                border: '1px solid rgba(239,68,68,0.3)',
                color: '#ef4444',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}>
                <FiAward size={11} /> {cert.issuer}
              </div>

              <h3 style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#f1f5f9',
                marginBottom: '0.75rem',
                lineHeight: 1.3,
              }}>
                {cert.name}
              </h3>

              <p style={{
                color: '#64748b',
                fontSize: '0.85rem',
                lineHeight: 1.65,
                marginBottom: '1.5rem',
              }}>
                {cert.description}
              </p>

              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  background: `linear-gradient(135deg, ${cert.colorFrom}, ${cert.colorTo})`,
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  boxShadow: `0 0 20px ${cert.glowColor}`,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <FiExternalLink size={15} /> View Certificate
              </motion.a>

              {/* Bg glow */}
              <div style={{
                position: 'absolute', bottom: 0, right: 0,
                width: '100px', height: '100px',
                background: `radial-gradient(circle, ${cert.glowColor}, transparent)`,
                filter: 'blur(30px)',
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
