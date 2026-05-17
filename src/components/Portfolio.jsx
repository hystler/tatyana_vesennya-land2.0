import { motion } from 'framer-motion';
import proj1 from '../assets/proj_1.jpg';
import proj2 from '../assets/proj_2.jpg';
import proj3 from '../assets/proj_3.jpg';
import proj4 from '../assets/proj_4.jpg';

const projects = [
  { id: 1, title: 'Atmosphere I', category: 'Architecture', image: proj1 },
  { id: 2, title: 'Silence', category: 'Interior', image: proj2 },
  { id: 3, title: 'Context', category: 'Landscape', image: proj3 },
  { id: 4, title: 'The Light', category: 'Architecture', image: proj4 },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-40 px-8 md:px-16 bg-brand-bg/0">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12"
        >
          <div className="flex flex-col">
            <div className="w-10 h-[1px] bg-brand-accent mb-8" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-brand-primary">
              Проекты
            </h2>
          </div>
          <p className="text-brand-secondary text-lg font-light max-w-sm border-l border-brand-accent/30 pl-8">
            Фокус на ощущении среды. Пространства, которые говорят сами за себя.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className={`relative group cursor-pointer ${index % 2 !== 0 ? 'md:mt-40' : ''}`}
            >
              <div className="overflow-hidden bg-brand-card aspect-[3/4] relative rounded-2xl">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-[#0B0908]/30 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
              
              <div className="mt-10 flex justify-between items-baseline border-b border-brand-card pb-8">
                <div>
                  <h3 className="text-2xl font-serif text-brand-primary group-hover:text-brand-accent transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-brand-secondary text-sm uppercase tracking-[0.2em] mt-3 font-light">
                    {project.category}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border border-brand-accent/20 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-500">
                  <span className="text-brand-accent group-hover:text-brand-bg transition-colors duration-500">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
