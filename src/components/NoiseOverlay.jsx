import React from 'react';
import noiseImage from '../assets/noise.png';

export default function NoiseOverlay() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay"
      style={{
        backgroundImage: `url(${noiseImage})`,
        backgroundRepeat: 'repeat',
        opacity: 0.8,
        transform: 'translate3d(0,0,0)',
        willChange: 'transform'
      }}
    />
  );
}
