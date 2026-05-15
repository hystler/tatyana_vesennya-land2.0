import React, { useState, useRef, useEffect } from 'react';

export default function ImageSlider({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      className="relative w-full h-[500px] overflow-hidden rounded-2xl cursor-ew-resize select-none group"
      ref={containerRef}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="Final Render" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
      />

      {/* Before Image (Foreground, Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Wireframe" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-neon-lilac z-10 pointer-events-none shadow-[0_0_10px_rgba(221,160,221,0.8)]"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black border-2 border-neon-lilac rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(138,43,226,0.6)]">
          <div className="flex gap-1">
            <div className="w-[2px] h-3 bg-neon-lilac rounded-full"></div>
            <div className="w-[2px] h-3 bg-neon-lilac rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm text-xs font-semibold tracking-wider text-white rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        WIREFRAME
      </div>
      <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm text-xs font-semibold tracking-wider text-white rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        FINAL
      </div>
    </div>
  );
}
