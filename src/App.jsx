import React from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import { CursorProvider } from './contexts/CursorContext';

function App() {
  return (
    <CursorProvider>
      <Cursor />
      <main className="w-full min-h-screen bg-deep-black text-white font-sans selection:bg-neon-purple selection:text-white">
        {/* Hero Section */}
        <Hero />
        
        {/* Portfolio Section */}
        <div className="relative z-10 bg-deep-black border-t border-gray-900 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
          <Portfolio />
        </div>

        {/* About Section */}
        <div className="relative z-10 bg-[#080808]">
          <About />
        </div>

        {/* Contact Section */}
        <div className="relative z-10 bg-deep-black">
          <Contact />
        </div>
        
        {/* Footer */}
        <footer className="relative z-10 py-8 text-center text-gray-600 text-sm border-t border-gray-900 bg-deep-black">
          <p>&copy; {new Date().getFullYear()} Татьяна Весенняя. Все права защищены.</p>
        </footer>
      </main>
    </CursorProvider>
  );
}

export default App;
