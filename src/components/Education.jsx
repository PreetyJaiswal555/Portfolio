import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';
import { SectionHeader } from './About';

const Education = () => {
  return (
    <section id="education" style={{ padding: '5rem 0', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 30% 70%, rgba(168,85,247,0.04) 0%, transparent 60%)',
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          tag="// education"
          title="Academic"
          highlight="Background"
          subtitle="My educational journey and academic achievements."
        />

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '26px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, #a855f7, #06b6d4, transparent)',
          }} />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}
            >
              {/* Timeline dot */}
              <div style={{ flexShrink: 0 }}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: index === 0
                      ? 'linear-gradient(135deg, #a855f7, #6d28d9)'
                      : 'linear-gradient(135deg, #06b6d4, #0ea5e9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    boxShadow: index === 0
                      ? '0 0 25px rgba(168,85,247,0.4)'
                      : '0 0 25px rgba(6,182,212,0.4)',
                    zIndex: 2,
                    position: 'relative',
                  }}
                >
                  {edu.icon}
                </motion.div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.01, boxShadow: '0 20px 50px rgba(168,85,247,0.12)' }}
                style={{
                  flex: 1,
                  padding: '2rem',
                  borderRadius: '20px',
                  background: 'rgba(15,23,42,0.8)',
                  backdropFilter: 'blur(20px)',
                  border: index === 0
                    ? '1px solid rgba(168,85,247,0.2)'
                    : '1px solid rgba(6,182,212,0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                {/* Top accent */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: index === 0
                    ? 'linear-gradient(90deg, #a855f7, #6d28d9)'
                    : 'linear-gradient(90deg, #06b6d4, #0ea5e9)',
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: '#f1f5f9',
                      marginBottom: '0.4rem',
                    }}>
                      {edu.institution}
                    </h3>
                    <p style={{
                      color: index === 0 ? '#a855f7' : '#06b6d4',
                      fontWeight: 600,
                      fontSize: '0.925rem',
                      marginBottom: '0.4rem',
                    }}>
                      {edu.degree}
                    </p>
                    <p style={{ color: '#64748b', fontSize: '0.85rem' }}>{edu.duration}</p>
                  </div>

                  <div style={{
                    padding: '10px 18px',
                    borderRadius: '12px',
                    background: index === 0 ? 'rgba(168,85,247,0.1)' : 'rgba(6,182,212,0.1)',
                    border: index === 0 ? '1px solid rgba(168,85,247,0.25)' : '1px solid rgba(6,182,212,0.25)',
                    textAlign: 'center',
                  }}>
                    <div style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '1.3rem',
                      fontWeight: 800,
                      background: index === 0
                        ? 'linear-gradient(135deg, #a855f7, #6d28d9)'
                        : 'linear-gradient(135deg, #06b6d4, #0ea5e9)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      {edu.score.split(': ')[1] || edu.score}
                    </div>
                    <div style={{ color: '#64748b', fontSize: '0.72rem', fontWeight: 500 }}>
                      {edu.score.startsWith('CGPA') ? 'CGPA' : 'Score'}
                    </div>
                  </div>
                </div>

                {/* Bg glow */}
                <div style={{
                  position: 'absolute', bottom: 0, right: 0,
                  width: '100px', height: '100px',
                  background: index === 0
                    ? 'radial-gradient(circle, rgba(168,85,247,0.08), transparent)'
                    : 'radial-gradient(circle, rgba(6,182,212,0.08), transparent)',
                  filter: 'blur(25px)',
                }} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
