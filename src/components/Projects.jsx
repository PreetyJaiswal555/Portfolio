import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiArrowRight } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import { SectionHeader } from './About';

const projectColors = {
  MERN: { from: '#10b981', to: '#059669', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)', glow: 'rgba(16,185,129,0.15)' },
  React: { from: '#06b6d4', to: '#0ea5e9', bg: 'rgba(6,182,212,0.08)', border: 'rgba(6,182,212,0.2)', glow: 'rgba(6,182,212,0.15)' },
  AI: { from: '#a855f7', to: '#7c3aed', bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.2)', glow: 'rgba(168,85,247,0.15)' },
};

const ProjectCard = ({ project, onClick }) => {
  const colors = projectColors[project.category] || projectColors.React;
  const gradients = {
    MERN: 'from-emerald-600 to-teal-700',
    React: 'from-cyan-600 to-blue-700',
    AI: 'from-purple-600 to-violet-700',
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8, boxShadow: `0 30px 60px ${colors.glow}` }}
      onClick={onClick}
      style={{
        borderRadius: '20px',
        background: 'rgba(15,23,42,0.8)',
        backdropFilter: 'blur(20px)',
        border: `1px solid ${colors.border}`,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* Project banner */}
      <div style={{
        height: '200px',
        background: `linear-gradient(135deg, ${colors.from}30, ${colors.to}15)`,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* Decorative */}
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.from}40, transparent)`,
          filter: 'blur(20px)',
          position: 'absolute',
        }} />
        <div style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: '3rem',
          fontWeight: 900,
          background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          position: 'relative',
          zIndex: 1,
          letterSpacing: '-2px',
        }}>
          {project.title.split(' ').map(w => w[0]).join('')}
        </div>

        {/* Top right badge */}
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          padding: '4px 10px',
          borderRadius: '999px',
          background: `${colors.from}25`,
          border: `1px solid ${colors.from}40`,
          color: colors.from,
          fontSize: '0.7rem',
          fontWeight: 700,
          fontFamily: 'Fira Code, monospace',
        }}>
          #{project.category}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: '1.25rem',
          fontWeight: 700,
          color: '#f1f5f9',
          marginBottom: '0.25rem',
        }}>{project.title}</h3>
        <p style={{ color: colors.from, fontSize: '0.825rem', fontWeight: 600, marginBottom: '0.75rem' }}>
          {project.subtitle}
        </p>
        <p style={{
          color: '#64748b',
          fontSize: '0.875rem',
          lineHeight: 1.65,
          marginBottom: '1.25rem',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.25rem' }}>
          {project.tech.map(t => (
            <span key={t} style={{
              padding: '3px 10px',
              borderRadius: '6px',
              background: `${colors.from}15`,
              border: `1px solid ${colors.from}25`,
              color: colors.from,
              fontSize: '0.72rem',
              fontWeight: 600,
            }}>{t}</span>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            style={{
              flex: 1,
              padding: '9px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              textDecoration: 'none',
              fontSize: '0.825rem',
              fontWeight: 500,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
          >
            <FiGithub size={15} /> Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            style={{
              flex: 1,
              padding: '9px',
              borderRadius: '10px',
              background: `linear-gradient(135deg, ${colors.from}20, ${colors.to}20)`,
              border: `1px solid ${colors.from}30`,
              color: colors.from,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              textDecoration: 'none',
              fontSize: '0.825rem',
              fontWeight: 500,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = `linear-gradient(135deg, ${colors.from}35, ${colors.to}35)`}
            onMouseLeave={e => e.currentTarget.style.background = `linear-gradient(135deg, ${colors.from}20, ${colors.to}20)`}
          >
            <FiExternalLink size={15} /> Live
          </a>
          <button
            onClick={onClick}
            style={{
              padding: '9px 14px',
              borderRadius: '10px',
              background: 'transparent',
              border: `1px solid ${colors.from}30`,
              color: colors.from,
              cursor: 'pointer',
              fontSize: '0.825rem',
              display: 'flex',
              alignItems: 'center',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = `${colors.from}10`}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <FiArrowRight size={15} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  const colors = projectColors[project.category] || projectColors.React;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        background: 'rgba(3,7,18,0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '600px',
          width: '100%',
          borderRadius: '24px',
          background: 'rgba(15,23,42,0.95)',
          backdropFilter: 'blur(24px)',
          border: `1px solid ${colors.border}`,
          overflow: 'hidden',
        }}
      >
        <div style={{
          height: '180px',
          background: `linear-gradient(135deg, ${colors.from}20, ${colors.to}10)`,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '4rem',
            fontWeight: 900,
            background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {project.title.split(' ').map(w => w[0]).join('')}
          </div>
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '1rem', right: '1rem',
              width: '36px', height: '36px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              border: 'none', color: '#e2e8f0',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <FiX size={18} />
          </button>
        </div>

        <div style={{ padding: '2rem' }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.6rem', fontWeight: 800, color: '#f1f5f9', marginBottom: '0.5rem' }}>
            {project.title}
          </h2>
          <p style={{ color: colors.from, fontWeight: 600, marginBottom: '1.25rem' }}>{project.subtitle}</p>
          <p style={{ color: '#94a3b8', lineHeight: 1.75, marginBottom: '1.5rem', fontSize: '0.925rem' }}>
            {project.longDescription}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.75rem' }}>
            {project.tech.map(t => (
              <span key={t} style={{
                padding: '5px 14px',
                borderRadius: '8px',
                background: `${colors.from}15`,
                border: `1px solid ${colors.from}30`,
                color: colors.from,
                fontSize: '0.8rem',
                fontWeight: 600,
              }}>{t}</span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
              flex: 1, padding: '12px', borderRadius: '12px',
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              color: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '8px', textDecoration: 'none', fontWeight: 600,
            }}>
              <FiGithub /> View Code
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" style={{
              flex: 1, padding: '12px', borderRadius: '12px',
              background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
              border: 'none', color: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '8px', textDecoration: 'none', fontWeight: 600,
            }}>
              <FiExternalLink /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const filters = ['All', 'MERN', 'React', 'AI'];

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ padding: '5rem 0', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 80% 50%, rgba(168,85,247,0.05) 0%, transparent 60%)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          tag="// projects"
          title="Featured"
          highlight="Work"
          subtitle="A curated selection of projects I've built with passion."
        />

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {filters.map(f => {
            const isActive = filter === f;
            return (
              <motion.button
                key={f}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(f)}
                style={{
                  padding: '8px 22px',
                  borderRadius: '999px',
                  border: isActive ? '1px solid #06b6d4' : '1px solid rgba(255,255,255,0.1)',
                  background: isActive ? 'rgba(6,182,212,0.15)' : 'transparent',
                  color: isActive ? '#06b6d4' : '#64748b',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 0 15px rgba(6,182,212,0.2)' : 'none',
                }}
              >
                {f}
              </motion.button>
            );
          })}
        </div>

        {/* Project grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))',
            gap: '1.75rem',
          }}
        >
          <AnimatePresence>
            {filtered.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelected(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
