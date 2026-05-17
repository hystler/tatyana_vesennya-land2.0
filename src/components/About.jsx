import { motion } from 'framer-motion';
import tatyanaPhoto from '../assets/tatyana.jpg';

export default function About() {
  return (
    <section id="about" className="py-40 px-8 md:px-16 max-w-[1400px] mx-auto relative overflow-hidden">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20"
      >
        <div className="w-10 h-[1px] bg-brand-accent mb-8" />
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-wide text-brand-primary leading-tight">
          Обо мне
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Left Column - Portrait Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative group"
        >
          <div className="aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl border border-brand-card/60 bg-brand-card/30 relative">
            <img 
              src={tatyanaPhoto} 
              alt="Tatyana Vesennya" 
              className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Subtle inner shadow/gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0908]/40 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Right Column - Bio Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <div className="space-y-8 max-w-xl">
            <p className="text-brand-primary text-xl md:text-2xl leading-relaxed font-light">
              Опыт работы с пространством сформировался на пересечении ландшафтной архитектуры, флористики, декора и визуальной подачи.
            </p>
            <div className="w-12 h-[1px] bg-brand-accent/50" />
            <p className="text-brand-primary text-xl md:text-2xl leading-relaxed font-light">
              Это позволяет воспринимать пространство целостно — через образ, ощущение, детали и логику реализации.
            </p>
            <div className="w-12 h-[1px] bg-brand-accent/50" />
            <p className="text-brand-mineral text-xl md:text-2xl leading-relaxed font-light font-serif italic border-l-2 border-brand-accent/40 pl-6">
              Каждая концепция создаётся под характер проекта, его задачу и будущий сценарий восприятия.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
