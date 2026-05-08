import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { useScrollDirection } from '../hooks/useScrollAnimation';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { scrollY } = useScrollDirection();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const isScrolled = scrollY > 50;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let s of [...sections].reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          padding: '0 1.5rem',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: isScrolled ? 'rgba(3, 7, 18, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled
            ? '1px solid rgba(6, 182, 212, 0.1)'
            : '1px solid transparent',
          transition: 'background 0.3s ease, border-color 0.3s ease',
        }}
      >
        {/* Logo */}
        <motion.a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          whileHover={{ scale: 1.05 }}
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '1.5rem',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          PJ
        </motion.a>

        {/* Desktop Nav Links */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    background: isActive ? 'rgba(6,182,212,0.1)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: isActive ? '#06b6d4' : '#94a3b8',
                    transition: 'color 0.2s ease, background 0.2s ease',
                    position: 'relative',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#06b6d4';
                    e.currentTarget.style.background = 'rgba(6,182,212,0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = isActive ? '#06b6d4' : '#94a3b8';
                    e.currentTarget.style.background = isActive ? 'rgba(6,182,212,0.1)' : 'transparent';
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(6,182,212,0.1)',
              border: '1px solid rgba(6,182,212,0.2)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#06b6d4',
            }}
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </motion.button>

          {/* Hamburger — only on mobile */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(6,182,212,0.1)',
                border: '1px solid rgba(6,182,212,0.2)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#06b6d4',
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          )}
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: '70px',
              left: 0,
              right: 0,
              zIndex: 998,
              background: 'rgba(3, 7, 18, 0.97)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(6,182,212,0.15)',
              padding: '1rem 1.5rem 1.5rem',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link.href)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  color: '#94a3b8',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  marginBottom: '4px',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(6,182,212,0.08)'; e.currentTarget.style.color = '#06b6d4'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
