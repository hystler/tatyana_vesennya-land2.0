import React from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import Meaning from './components/Meaning';
import Foundation from './components/Foundation';
import Directions from './components/Directions';
import Process from './components/Process';
import Header from './components/Header';
import NoiseOverlay from './components/NoiseOverlay';
import { CursorProvider } from './contexts/CursorContext';
import { ReactLenis } from '@studio-freight/react-lenis';

import bgTexture from './assets/bg_texture.jpg';

function App() {
  return (
    <ReactLenis root>
      <CursorProvider>
        <NoiseOverlay />
        <Cursor />
        <Header />
        
        {/* Global Background Structure */}
        {/* Base Color */}
        <div className="fixed inset-0 z-[-5] bg-[#13110E]" />

        {/* Layer 1: Main Texture + Lighting/Overlay */}
        <div 
          className="fixed inset-0 z-[-4] bg-cover bg-fixed bg-center opacity-80"
          style={{ 
            backgroundImage: `url(${bgTexture})`,
            filter: 'brightness(1.1) contrast(1.05) grayscale(0.2)',
            transform: 'translate3d(0,0,0)',
            willChange: 'transform'
          }}
        />
        <div className="fixed inset-0 z-[-3] bg-[#13110E]/50" />

        {/* Layer 2: Fluted / Linear Depth Pattern with slow parallax (fixed) */}
        <div 
          className="fixed inset-0 z-[-2] opacity-[0.02] bg-fixed mix-blend-overlay"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 40px, #E7DFD2 40px, #E7DFD2 42px), repeating-linear-gradient(0deg, transparent, transparent 40px, #E7DFD2 40px, #E7DFD2 42px)`,
            transform: 'translate3d(0,0,0)',
            willChange: 'transform'
          }}
        />

        {/* Layer 3: Vignette / Depth Pool */}
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,#13110E_100%)] opacity-80" />

        <main className="w-full min-h-screen text-brand-primary font-sans selection:bg-brand-accent selection:text-brand-bg relative z-0">
          {/* 01 — Hero Section */}
        <Hero />
        
        {/* 02 — Meaning Block */}
        <Meaning />

        {/* 03 — About Me */}
        <About />

        {/* 04 — Project Foundation */}
        <Foundation />

        {/* 05 — Directions */}
        <Directions />

        {/* 06 — Projects (Portfolio) */}
        <Portfolio />

        {/* 07 — Process */}
        <Process />

        {/* 08 — Final Block / Contact */}
        <Contact />
        
        {/* Footer */}
        <footer className="relative z-10 py-8 text-center text-brand-secondary text-sm border-t border-brand-card/30 bg-brand-bg">
          <p>&copy; {new Date().getFullYear()} TATYANA VESENNYA. Все права защищены.</p>
        </footer>
      </main>
    </CursorProvider>
    </ReactLenis>
  );
}


export default App;
