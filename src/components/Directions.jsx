import { motion } from 'framer-motion';
import dir1 from '../assets/dir_1.jpg';
import dir2 from '../assets/dir_2.jpg';
import dir3 from '../assets/dir_3.jpg';
import dir4 from '../assets/dir_4.jpg';
import dir5 from '../assets/dir_5.jpg';

const items = [
  { title: 'Архитектурная среда', image: dir1 },
  { title: 'Ландшафт', image: dir2 },
  { title: 'Event & private events', image: dir3 },
  { title: 'Пространственные концепции', image: dir4 },
  { title: 'Визуальная подача проектов', image: dir5 }
];

export default function Directions() {
  return (
    <section className="py-40 px-8 md:px-16 bg-brand-bg/0">
      {/* Background is transparent to let global texture show through */}
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="w-10 h-[1px] bg-brand-accent mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-brand-primary">
            Направления
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative aspect-[16/10] overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0908] via-[#0B0908]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="w-8 h-[1px] bg-brand-accent mb-6 group-hover:w-16 transition-all duration-700"></div>
                <h3 className="text-2xl md:text-3xl font-serif font-light text-brand-primary group-hover:text-brand-accent transition-colors duration-500">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
