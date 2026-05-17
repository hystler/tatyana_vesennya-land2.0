import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '../contexts/CursorContext';

export default function Cursor() {
  const { cursorVariant } = useCursor();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [cursorX, cursorY]);

  const sizeVariants = {
    default: {
      width: 18,
      height: 18,
      backgroundColor: 'transparent',
      border: '1.5px solid #B79A6A',
      transition: { duration: 0.15, ease: 'easeOut' }
    },
    hover: {
      width: 56,
      height: 56,
      backgroundColor: 'rgba(183, 154, 106, 0.25)',
      border: '1.5px solid #B79A6A',
      transition: { duration: 0.15, ease: 'easeOut' }
    }
  };

  return (
    <motion.div 
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: smoothX,
        y: smoothY
      }}
    >
      <motion.div
        variants={sizeVariants}
        initial="default"
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
    </motion.div>
  );
}
