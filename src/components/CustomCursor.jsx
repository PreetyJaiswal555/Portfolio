import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
      setTimeout(() => {
        if (ringRef.current) {
          ringRef.current.style.left = `${e.clientX}px`;
          ringRef.current.style.top = `${e.clientY}px`;
        }
      }, 80);
    };

    const onEnter = (e) => {
      if (e.target.closest('a, button, [data-cursor]')) setIsHovering(true);
    };
    const onLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
    };
  }, []);

  // Hide on touch devices
  if (window.matchMedia('(hover: none)').matches) return null;

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: isHovering ? '40px' : '12px',
          height: isHovering ? '40px' : '12px',
          borderRadius: '50%',
          background: isHovering
            ? 'rgba(6,182,212,0.15)'
            : 'rgba(6,182,212,0.8)',
          border: isHovering ? '1px solid rgba(6,182,212,0.6)' : 'none',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease',
          mixBlendMode: 'screen',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: isHovering ? '60px' : '36px',
          height: isHovering ? '60px' : '36px',
          borderRadius: '50%',
          border: '1px solid rgba(6,182,212,0.3)',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s ease, height 0.3s ease',
        }}
      />
    </>
  );
};

export default CustomCursor;
