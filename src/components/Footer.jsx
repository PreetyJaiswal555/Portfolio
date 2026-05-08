import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUpRight } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid rgba(6,182,212,0.1)',
      padding: '4rem 1.5rem 2.5rem',
      background: 'rgba(3,7,18,0.9)',
      backdropFilter: 'blur(16px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '2.2rem',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '1rem',
                display: 'inline-block',
              }}
            >
              PJ
            </motion.div>
            <p style={{
              color: '#475569',
              fontSize: '0.875rem',
              lineHeight: 1.7,
              maxWidth: '220px',
            }}>
              Full Stack Developer & AI Enthusiast crafting beautiful, impactful web experiences.
            </p>

            {/* Social */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '1.5rem' }}>
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
                  whileHover={{ scale: 1.15, y: -3 }}
                  aria-label={label}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#64748b',
                    textDecoration: 'none',
                    transition: 'color 0.2s, border-color 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = color;
                    e.currentTarget.style.borderColor = `${color}50`;
                    e.currentTarget.style.boxShadow = `0 0 15px ${color}25`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#64748b';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: '#f1f5f9',
              marginBottom: '1.25rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#475569',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: 0,
                    transition: 'color 0.2s',
                    fontFamily: 'Inter, sans-serif',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#06b6d4'}
                  onMouseLeave={e => e.currentTarget.style.color = '#475569'}
                >
                  <span style={{ color: '#06b6d4', fontFamily: 'Fira Code, monospace', fontSize: '0.7rem' }}>//</span>
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: '#f1f5f9',
              marginBottom: '1.25rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              Get In Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  color: '#475569',
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#06b6d4'}
                onMouseLeave={e => e.currentTarget.style.color = '#475569'}
              >
                <FiMail size={14} /> {personalInfo.email}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#475569',
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#0ea5e9'}
                onMouseLeave={e => e.currentTarget.style.color = '#475569'}
              >
                <FiLinkedin size={14} /> linkedin.com/in/preety-jaiswal
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#475569',
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#e2e8f0'}
                onMouseLeave={e => e.currentTarget.style.color = '#475569'}
              >
                <FiGithub size={14} /> github.com/PreetyJaiswal555
              </a>
            </div>

            {/* Open to work badge */}
            <div style={{
              marginTop: '1.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: 'rgba(16,185,129,0.08)',
              border: '1px solid rgba(16,185,129,0.25)',
            }}>
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#10b981',
                  display: 'inline-block',
                }}
              />
              <span style={{ color: '#10b981', fontSize: '0.78rem', fontWeight: 600 }}>
                Open to opportunities
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <div style={{
            color: '#334155',
            fontSize: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            Built with <FiHeart size={13} style={{ color: '#ef4444', fill: '#ef4444' }} /> by{' '}
            <span style={{
              background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 600,
            }}>
              Preety Jaiswal
            </span>
            {' '}© {year}
          </div>
          <div style={{ color: '#334155', fontSize: '0.78rem', fontFamily: 'Fira Code, monospace' }}>
            React + Framer Motion + Vite
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
