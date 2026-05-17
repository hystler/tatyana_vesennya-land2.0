import { motion } from 'framer-motion';
import fd1 from '../assets/fd_1.jpg';
import fd2 from '../assets/fd_2.jpg';
import fd3 from '../assets/fd_3.jpg';
import fd4 from '../assets/fd_4.jpg';
import fd5 from '../assets/fd_5.jpg';
import fd6 from '../assets/fd_6.jpg';
import fd7 from '../assets/fd_7.jpg';
import fd8 from '../assets/fd_8.jpg';

const items = [
  { title: 'Образ', aspect: 'aspect-square', image: fd1 },
  { title: 'Контекст', aspect: 'aspect-[3/4]', image: fd2 },
  { title: 'Масштаб', aspect: 'aspect-[4/3]', image: fd3 },
  { title: 'Ритм', aspect: 'aspect-[3/5]', image: fd4 },
  { title: 'Свет', aspect: 'aspect-video', image: fd5 },
  { title: 'Детали', aspect: 'aspect-square', image: fd6 },
  { title: 'Погружение', aspect: 'aspect-[4/5]', image: fd7 },
  { title: 'Логика реализации', aspect: 'aspect-square', image: fd8 }
];

export default function Foundation() {
  return (
    <section className="py-40 px-8 md:px-16 max-w-[1400px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="w-10 h-[1px] bg-brand-accent mb-8" />
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-brand-primary">
          Основа проекта
        </h2>
      </motion.div>

      <div className="columns-1 md:columns-3 lg:columns-4 gap-6 space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: (index % 4) * 0.1 }}
            className={`relative group overflow-hidden bg-brand-card/30 rounded-xl break-inside-avoid ${item.aspect}`}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0908]/90 via-[#0B0908]/20 to-transparent" />
            
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="text-xl md:text-2xl font-serif font-light text-brand-primary group-hover:text-brand-accent transition-colors duration-500 tracking-wider">
                {item.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
