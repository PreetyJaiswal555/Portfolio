import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { SectionHeader } from './About';

const categoryColors = {
  Languages: { from: '#f59e0b', to: '#ef4444', glow: 'rgba(245,158,11,0.3)' },
  Frontend: { from: '#06b6d4', to: '#0ea5e9', glow: 'rgba(6,182,212,0.3)' },
  Backend: { from: '#10b981', to: '#059669', glow: 'rgba(16,185,129,0.3)' },
  Databases: { from: '#8b5cf6', to: '#6d28d9', glow: 'rgba(139,92,246,0.3)' },
  Tools: { from: '#f472b6', to: '#ec4899', glow: 'rgba(244,114,182,0.3)' },
  Concepts: { from: '#a855f7', to: '#7c3aed', glow: 'rgba(168,85,247,0.3)' },
};

const SkillBar = ({ name, level, colors, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      style={{ marginBottom: '1.2rem' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ color: '#e2e8f0', fontWeight: 500, fontSize: '0.875rem' }}>{name}</span>
        <span style={{
          color: colors.from,
          fontSize: '0.75rem',
          fontFamily: 'Fira Code, monospace',
          fontWeight: 600,
        }}>{level}%</span>
      </div>
      <div style={{
        height: '6px',
        borderRadius: '3px',
        background: 'rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.08 + 0.3, ease: 'easeOut' }}
          style={{
            height: '100%',
            borderRadius: '3px',
            background: `linear-gradient(90deg, ${colors.from}, ${colors.to})`,
            boxShadow: `0 0 8px ${colors.glow}`,
            position: 'relative',
          }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...skills.map(s => s.category)];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" style={{ padding: '5rem 0', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'linear-gradient(180deg, transparent, rgba(168,85,247,0.03) 50%, transparent)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          tag="// skill set"
          title="Technical"
          highlight="Expertise"
          subtitle="Technologies and tools I use to bring ideas to life."
        />

        {/* Category Filter Tabs */}
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '3rem',
        }}>
          {categories.map(cat => {
            const isActive = activeCategory === cat;
            const colors = categoryColors[cat] || { from: '#06b6d4', to: '#a855f7' };
            return (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '999px',
                  border: isActive
                    ? `1px solid ${colors.from}`
                    : '1px solid rgba(255,255,255,0.1)',
                  background: isActive
                    ? `linear-gradient(135deg, ${colors.from}20, ${colors.to}20)`
                    : 'transparent',
                  color: isActive ? colors.from : '#64748b',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? `0 0 15px ${colors.glow || 'rgba(6,182,212,0.2)'}` : 'none',
                }}
              >
                {cat}
              </motion.button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
          gap: '1.5rem',
        }}>
          {filteredSkills.map((group, gi) => {
            const colors = categoryColors[group.category] || { from: '#06b6d4', to: '#a855f7', glow: 'rgba(6,182,212,0.2)' };
            return (
              <motion.div
                key={group.category}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: gi * 0.05 }}
                style={{
                  padding: '1.75rem',
                  borderRadius: '16px',
                  background: 'rgba(15,23,42,0.7)',
                  backdropFilter: 'blur(16px)',
                  border: `1px solid ${colors.from}20`,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.3s, border-color 0.3s',
                }}
                whileHover={{
                  boxShadow: `0 20px 50px ${colors.glow}`,
                  borderColor: `${colors.from}40`,
                }}
              >
                {/* Category header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '1.5rem',
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 0 15px ${colors.glow}`,
                  }}>
                    <span style={{ fontSize: '1rem' }}>
                      {group.category === 'Languages' ? '💻' :
                       group.category === 'Frontend' ? '🎨' :
                       group.category === 'Backend' ? '⚙️' :
                       group.category === 'Databases' ? '🗄️' :
                       group.category === 'Tools' ? '🔧' : '🧠'}
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#f1f5f9',
                  }}>{group.category}</h3>
                </div>

                {/* Skill bars */}
                {group.items.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    colors={colors}
                    index={si + gi * 3}
                  />
                ))}

                {/* Corner glow */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '80px',
                  height: '80px',
                  background: `radial-gradient(circle, ${colors.glow}, transparent)`,
                  filter: 'blur(20px)',
                }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
