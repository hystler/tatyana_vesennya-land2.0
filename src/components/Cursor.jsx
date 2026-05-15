import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../contexts/CursorContext';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const { cursorVariant } = useCursor();

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const sizeVariants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: 'transparent',
      border: '1.5px solid #8A2BE2',
      transition: { duration: 0.15, ease: 'easeOut' }
    },
    hover: {
      width: 64,
      height: 64,
      backgroundColor: 'rgba(138, 43, 226, 0.4)',
      border: '1.5px solid transparent',
      transition: { duration: 0.15, ease: 'easeOut' }
    }
  };

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
      }}
    >
      <motion.div
        variants={sizeVariants}
        animate={cursorVariant}
        className="flex items-center justify-center rounded-full backdrop-blur-sm -translate-x-1/2 -translate-y-1/2"
      >
        {cursorVariant === 'hover' && (
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.15 }}
            className="text-white text-[9px] font-sans tracking-widest font-bold"
          >
            EXPLORE
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
