import { motion } from 'framer-motion';
import { FiCalendar, FiBriefcase } from 'react-icons/fi';
import { experience } from '../data/portfolioData';
import { SectionHeader } from './About';

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '5rem 0', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 20% 50%, rgba(6,182,212,0.04) 0%, transparent 60%)',
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          tag="// experience"
          title="Work"
          highlight="Experience"
          subtitle="Where I've had the opportunity to grow and contribute."
        />

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '26px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, #06b6d4, #a855f7, transparent)',
          }} />

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              style={{
                display: 'flex',
                gap: '2rem',
                marginBottom: '2rem',
                paddingLeft: '0',
              }}
            >
              {/* Timeline dot */}
              <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 25px rgba(6,182,212,0.4)',
                    zIndex: 2,
                    position: 'relative',
                  }}
                >
                  <FiBriefcase color="white" size={22} />
                </motion.div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.01, boxShadow: '0 25px 60px rgba(6,182,212,0.15)' }}
                style={{
                  flex: 1,
                  padding: '2rem',
                  borderRadius: '20px',
                  background: 'rgba(15,23,42,0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(6,182,212,0.15)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                {/* Top accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #06b6d4, #a855f7)',
                }} />

                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.25rem' }}>
                      <h3 style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        color: '#f1f5f9',
                      }}>
                        {exp.role}
                      </h3>
                      {exp.upcoming && (
                        <span style={{
                          padding: '2px 10px',
                          borderRadius: '999px',
                          background: 'rgba(16,185,129,0.1)',
                          border: '1px solid rgba(16,185,129,0.3)',
                          color: '#10b981',
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                        }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                          Upcoming
                        </span>
                      )}
                    </div>
                    <p style={{ color: '#06b6d4', fontWeight: 600, fontSize: '1rem' }}>
                      @ {exp.company}
                    </p>
                  </div>
                  <div style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    background: 'rgba(6,182,212,0.1)',
                    border: '1px solid rgba(6,182,212,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#06b6d4',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    height: 'fit-content',
                    fontFamily: 'Fira Code, monospace',
                  }}>
                    <FiCalendar size={13} /> {exp.duration}
                  </div>
                </div>

                {/* Responsibilities */}
                <ul style={{ marginBottom: '1.5rem', paddingLeft: 0, listStyle: 'none' }}>
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      style={{
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'flex-start',
                        padding: '6px 0',
                        color: '#94a3b8',
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                        flexShrink: 0,
                        marginTop: '7px',
                      }} />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '4px 12px',
                      borderRadius: '999px',
                      background: 'rgba(168,85,247,0.1)',
                      border: '1px solid rgba(168,85,247,0.25)',
                      color: '#a855f7',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bg glow */}
                <div style={{
                  position: 'absolute', bottom: 0, right: 0,
                  width: '120px', height: '120px',
                  background: 'radial-gradient(circle, rgba(168,85,247,0.1), transparent)',
                  filter: 'blur(30px)',
                }} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
