import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiMessageCircle } from 'react-icons/fi';
import ParticleBackground from './ParticleBackground';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #030712 0%, #0f0a1e 50%, #030712 100%)',
      }}
    >
      {/* Particles */}
      <ParticleBackground />

      {/* Background orbs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 1 }}>
        <div
          className="pulse-glow"
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="pulse-glow"
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '10%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animationDelay: '1.5s',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(240,171,252,0.04) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          backgroundImage: `
            linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 1.5rem',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '999px',
            background: 'rgba(6,182,212,0.1)',
            border: '1px solid rgba(6,182,212,0.3)',
            marginBottom: '2rem',
          }}
        >
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#06b6d4', display: 'inline-block', animation: 'pulse 2s infinite' }} />
          <span style={{ color: '#06b6d4', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Fira Code, monospace' }}>
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: '1rem',
            color: '#f1f5f9',
          }}
        >
          Hi, I'm{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #06b6d4, #a855f7, #f0abfc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Preety Jaiswal
          </span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            fontWeight: 600,
            color: '#94a3b8',
            marginBottom: '1.5rem',
            fontFamily: 'Outfit, sans-serif',
            height: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          <span style={{ color: '#06b6d4' }}>&gt;</span>
          <TypeAnimation
            sequence={[
              'Full Stack Developer', 2000,
              'MERN Stack Developer', 2000,
              'AI Enthusiast', 2000,
              'Software Engineer', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{ color: '#e2e8f0' }}
          />
          <span
            style={{
              width: '2px',
              height: '1.5rem',
              background: '#06b6d4',
              display: 'inline-block',
              animation: 'blink 1s step-end infinite',
            }}
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: '#64748b',
            lineHeight: 1.8,
            maxWidth: '620px',
            margin: '0 auto 2.5rem',
          }}
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6,182,212,0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('projects')}
            style={{
              padding: '14px 32px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
              border: 'none',
              color: 'white',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'box-shadow 0.3s ease',
            }}
          >
            View Projects <FiArrowRight />
          </motion.button>

          <motion.a
            href={personalInfo.resumeUrl}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '14px 32px',
              borderRadius: '12px',
              background: 'transparent',
              border: '1px solid rgba(6,182,212,0.4)',
              color: '#06b6d4',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(6,182,212,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            <FiDownload /> Resume
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('contact')}
            style={{
              padding: '14px 32px',
              borderRadius: '12px',
              background: 'rgba(168,85,247,0.1)',
              border: '1px solid rgba(168,85,247,0.3)',
              color: '#a855f7',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(168,85,247,0.15)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(168,85,247,0.1)'; }}
          >
            <FiMessageCircle /> Contact Me
          </motion.button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '2.5rem',
          }}
        >
          {[
            { icon: FiGithub, href: personalInfo.github, label: 'GitHub', color: '#e2e8f0' },
            { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: '#0ea5e9' },
            { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email', color: '#a855f7' },
          ].map(({ icon: Icon, href, label, color }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.9 }}
              aria-label={label}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color,
                textDecoration: 'none',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.boxShadow = `0 0 20px ${color}30`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '2rem',
          }}
        >
          {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Python', 'AI/ML'].map((tech) => (
            <span
              key={tech}
              style={{
                padding: '5px 14px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#64748b',
                fontSize: '0.78rem',
                fontWeight: 500,
                fontFamily: 'Fira Code, monospace',
                letterSpacing: '0.03em',
              }}
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Quick stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{
            display: 'flex',
            gap: '0',
            justifyContent: 'center',
            flexWrap: 'wrap',
            padding: '1rem 2rem',
            borderRadius: '16px',
            background: 'rgba(15,23,42,0.6)',
            border: '1px solid rgba(6,182,212,0.1)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          {[
            { value: '8.32', label: 'CGPA', suffix: '' },
            { value: '10', label: 'Projects', suffix: '+' },
            { value: '3', label: 'Certs', suffix: '' },
            { value: '1', label: 'Internship', suffix: '+' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              style={{
                textAlign: 'center',
                padding: '0.5rem 2rem',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              <div style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1.1,
              }}>
                {stat.value}{stat.suffix}
              </div>
              <div style={{ color: '#475569', fontSize: '0.72rem', fontWeight: 500, marginTop: '4px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{
              width: '24px',
              height: '40px',
              borderRadius: '12px',
              border: '2px solid rgba(6,182,212,0.3)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingTop: '6px',
              cursor: 'pointer',
            }}
            onClick={() => scrollTo('about')}
          >
            <div
              style={{
                width: '4px',
                height: '8px',
                borderRadius: '2px',
                background: '#06b6d4',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

