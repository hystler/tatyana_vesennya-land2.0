import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../contexts/CursorContext';

// Importing placeholder images from the assets folder.
import work1 from '../assets/work1.jpg';
import work2 from '../assets/work2.jpg';
import work3 from '../assets/work3.jpg';
import work4 from '../assets/work4.jpg';
import work5 from '../assets/work5.jpg';

const projects = [
  { id: 1, title: 'Архитектурная Визуализация', image: work1, span: 'col-span-12 md:col-span-8 row-span-2' },
  { id: 2, title: 'Интерьер', image: work2, span: 'col-span-12 md:col-span-4 row-span-1' },
  { id: 3, title: 'Предметный 3D', image: work3, span: 'col-span-12 md:col-span-4 row-span-1' },
  { id: 4, title: 'Анимация', image: work4, span: 'col-span-12 md:col-span-6 row-span-1' },
  { id: 5, title: 'Концепт', image: work5, span: 'col-span-12 md:col-span-6 row-span-1' },
];

export default function Portfolio() {
  const { setHover, setDefault } = useCursor();

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide text-gray-100 mb-12">
          Избранные Работы
        </h2>
      </motion.div>

      <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[250px]">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`relative rounded-2xl overflow-hidden group cursor-none glass ${project.span}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseEnter={setHover}
            onMouseLeave={setDefault}
          >
            {/* Project Image Background */}
            <div className="absolute inset-0 bg-neutral-950 transition-transform duration-700 ease-out group-hover:scale-105">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-opacity duration-500 ease-out opacity-90 group-hover:opacity-40" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none" />
            </div>
            
            <div className="absolute bottom-0 left-0 p-6 z-20 w-full pointer-events-none">
              <h3 className="text-xl font-semibold text-white tracking-wide transition-colors duration-300 group-hover:text-neon-purple">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
