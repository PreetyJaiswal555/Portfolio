import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const SectionHeader = ({ tag, title, highlight, subtitle }) => (
  <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        display: 'inline-block',
        padding: '4px 16px',
        borderRadius: '999px',
        background: 'rgba(6,182,212,0.1)',
        border: '1px solid rgba(6,182,212,0.25)',
        color: '#06b6d4',
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        fontFamily: 'Fira Code, monospace',
        marginBottom: '1rem',
      }}
    >
      {tag}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      style={{
        fontFamily: 'Outfit, sans-serif',
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        fontWeight: 800,
        color: '#f1f5f9',
        lineHeight: 1.2,
        marginBottom: subtitle ? '1rem' : 0,
      }}
    >
      {title}{' '}
      <span style={{
        background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        {highlight}
      </span>
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        style={{ color: '#64748b', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const StatCard = ({ stat, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.05, y: -5 }}
      style={{
        padding: '1.5rem',
        borderRadius: '16px',
        background: 'rgba(15, 23, 42, 0.7)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(6,182,212,0.12)',
        textAlign: 'center',
        cursor: 'default',
        transition: 'box-shadow 0.3s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 20px 40px rgba(6,182,212,0.15)'; e.currentTarget.style.borderColor = 'rgba(6,182,212,0.3)'; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(6,182,212,0.12)'; }}
    >
      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
      <div style={{
        fontFamily: 'Outfit, sans-serif',
        fontSize: '2.5rem',
        fontWeight: 800,
        background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        lineHeight: 1,
        marginBottom: '0.5rem',
      }}>
        {stat.value}{stat.suffix}
      </div>
      <div style={{ color: '#64748b', fontSize: '0.875rem', fontWeight: 500 }}>{stat.label}</div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" style={{ padding: '5rem 0', position: 'relative' }}>
      {/* Subtle bg */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(6,182,212,0.04) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          tag="// about me"
          title="Who I"
          highlight="Am"
          subtitle="Passionate developer crafting elegant solutions at the intersection of design and engineering."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}
          >
            {/* Avatar card */}
            <div style={{
              padding: '2.5rem',
              borderRadius: '24px',
              background: 'rgba(15,23,42,0.8)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(6,182,212,0.15)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Top gradient bar */}
              <div style={{
                height: '3px',
                background: 'linear-gradient(90deg, #06b6d4, #a855f7, #f0abfc)',
                marginBottom: '2rem',
                borderRadius: '2px',
              }} />

              {/* Avatar placeholder */}
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                fontWeight: 800,
                fontFamily: 'Outfit, sans-serif',
                color: 'white',
                marginBottom: '1.5rem',
                boxShadow: '0 0 30px rgba(6,182,212,0.3)',
              }}>
                PJ
              </div>

              <h3 style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#f1f5f9',
                marginBottom: '0.25rem',
              }}>
                Preety Jaiswal
              </h3>
              <p style={{ color: '#06b6d4', fontSize: '0.875rem', fontWeight: 500, marginBottom: '1.5rem' }}>
                Full Stack Developer & AI Enthusiast
              </p>

              {/* Tech badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.5rem' }}>
                {['React', 'Node.js', 'MongoDB', 'Python', 'AI/ML'].map(t => (
                  <span key={t} style={{
                    padding: '4px 12px',
                    borderRadius: '999px',
                    background: 'rgba(6,182,212,0.1)',
                    border: '1px solid rgba(6,182,212,0.2)',
                    color: '#06b6d4',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                  }}>{t}</span>
                ))}
              </div>

              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '0.875rem' }}>
                <span>📍</span> Coimbatore, India
              </div>

              {/* Floating decoration */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(168,85,247,0.2), transparent)',
                filter: 'blur(10px)',
              }} />
            </div>
          </motion.div>

          {/* Right: Text */}
          <div>
            {personalInfo.aboutDetails.map((detail, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  marginBottom: '1.25rem',
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(15,23,42,0.5)',
                  border: '1px solid rgba(6,182,212,0.08)',
                  transition: 'border-color 0.3s, background 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.25)'; e.currentTarget.style.background = 'rgba(6,182,212,0.05)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.08)'; e.currentTarget.style.background = 'rgba(15,23,42,0.5)'; }}
              >
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                  flexShrink: 0,
                  marginTop: '6px',
                }} />
                <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.95rem' }}>{detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1.5rem',
          marginTop: '4rem',
        }}>
          {personalInfo.stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { SectionHeader };
export default About;
