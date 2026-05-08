import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiGithub, FiLinkedin, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import { SectionHeader } from './About';

const FloatingInput = ({ label, name, type = 'text', value, onChange, isTextarea }) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value && value.length > 0;
  const isUp = focused || hasValue;

  const inputStyle = {
    width: '100%',
    padding: isUp ? '1.5rem 1rem 0.5rem' : '1rem',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${focused ? 'rgba(6,182,212,0.5)' : 'rgba(255,255,255,0.08)'}`,
    color: '#f1f5f9',
    fontSize: '0.95rem',
    outline: 'none',
    resize: isTextarea ? 'vertical' : undefined,
    minHeight: isTextarea ? '140px' : undefined,
    transition: 'border-color 0.25s ease, box-shadow 0.25s ease, padding 0.2s ease',
    boxShadow: focused ? '0 0 0 3px rgba(6,182,212,0.1)' : 'none',
    fontFamily: 'Inter, sans-serif',
    backgroundColor: 'transparent',
  };

  const labelStyle = {
    position: 'absolute',
    top: isUp ? '0.45rem' : '1rem',
    left: '1rem',
    fontSize: isUp ? '0.68rem' : '0.9rem',
    color: focused ? '#06b6d4' : '#64748b',
    transition: 'all 0.2s ease',
    pointerEvents: 'none',
    fontWeight: isUp ? 600 : 400,
    letterSpacing: isUp ? '0.04em' : 'normal',
    zIndex: 1,
  };

  return (
    <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
      <label style={labelStyle}>{label}</label>
      {isTextarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={inputStyle}
          required
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={inputStyle}
          required
        />
      )}
    </div>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');

    // Build mailto link as fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    const mailtoLink = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.open(mailtoLink, '_blank');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    }, 800);
  };

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#06b6d4' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'preety-jaiswal', href: personalInfo.linkedin, color: '#0ea5e9' },
    { icon: FiGithub, label: 'GitHub', value: 'PreetyJaiswal555', href: personalInfo.github, color: '#e2e8f0' },
    { icon: FiMapPin, label: 'Location', value: personalInfo.location, href: null, color: '#a855f7' },
  ];

  return (
    <section id="contact" style={{ padding: '5rem 0', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 100%, rgba(6,182,212,0.06) 0%, transparent 60%)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          tag="// contact"
          title="Let's"
          highlight="Connect"
          subtitle="Have a project in mind or just want to chat? I'm always open to new opportunities."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
          gap: '2.5rem',
          alignItems: 'start',
        }}>
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              padding: '2.5rem',
              borderRadius: '24px',
              background: 'rgba(15,23,42,0.8)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(6,182,212,0.15)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
              background: 'linear-gradient(90deg, #06b6d4, #a855f7, #f0abfc)',
            }} />

            <h3 style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#f1f5f9',
              marginBottom: '2rem',
            }}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit}>
              <FloatingInput
                label="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <FloatingInput
                label="Your Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
              />
              <FloatingInput
                label="Your Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                isTextarea
              />

              {/* Status feedback */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      padding: '12px 16px', borderRadius: '10px',
                      background: 'rgba(16,185,129,0.1)',
                      border: '1px solid rgba(16,185,129,0.3)',
                      color: '#10b981', marginBottom: '1rem',
                      fontSize: '0.875rem',
                    }}
                  >
                    <FiCheck size={16} /> Your email client has been opened with the message. Thank you!
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      padding: '12px 16px', borderRadius: '10px',
                      background: 'rgba(239,68,68,0.1)',
                      border: '1px solid rgba(239,68,68,0.3)',
                      color: '#ef4444', marginBottom: '1rem',
                      fontSize: '0.875rem',
                    }}
                  >
                    <FiAlertCircle size={16} /> Something went wrong. Please email me directly at {personalInfo.email}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(6,182,212,0.3)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '12px',
                  background: status === 'sending'
                    ? 'rgba(6,182,212,0.3)'
                    : 'linear-gradient(135deg, #06b6d4, #a855f7)',
                  border: 'none',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 700,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                {status === 'sending' ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      style={{ display: 'inline-block', width: '16px', height: '16px', border: '2px solid white', borderTopColor: 'transparent', borderRadius: '50%' }}
                    />
                    Opening email client...
                  </>
                ) : (
                  <><FiSend /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '1.75rem',
                fontWeight: 800,
                color: '#f1f5f9',
                marginBottom: '0.75rem',
              }}>
                Let's build something amazing together
              </h3>
              <p style={{ color: '#64748b', lineHeight: 1.75, fontSize: '0.95rem' }}>
                I'm currently looking for new opportunities. Whether you have a full-time role, freelance project, or just want to say hi — my inbox is always open!
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.02, x: 6 }}
                  onClick={href ? () => window.open(href, '_blank') : undefined}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}40`; e.currentTarget.style.boxShadow = `0 0 20px ${color}15`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.boxShadow = 'none'; }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    borderRadius: '14px',
                    background: 'rgba(15,23,42,0.7)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.2s',
                    cursor: href ? 'pointer' : 'default',
                  }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color,
                    flexShrink: 0,
                  }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <div style={{ color: '#64748b', fontSize: '0.75rem', fontWeight: 500, marginBottom: '2px' }}>{label}</div>
                    <div style={{ color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 600 }}>{value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Status tag */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              style={{
                marginTop: '2.5rem',
                padding: '1.25rem',
                borderRadius: '14px',
                background: 'rgba(16,185,129,0.06)',
                border: '1px solid rgba(16,185,129,0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b98160',
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ color: '#10b981', fontWeight: 600, fontSize: '0.875rem' }}>Available for Work</div>
                <div style={{ color: '#64748b', fontSize: '0.8rem' }}>Open to full-time roles & internships</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
