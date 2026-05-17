import { motion } from 'framer-motion';
import proc1 from '../assets/proc_1.jpg';
import proc2 from '../assets/proc_2.jpg';
import proc3 from '../assets/proc_3.jpg';
import proc4 from '../assets/proc_4.jpg';
import proc5 from '../assets/proc_5.jpg';

const steps = [
  { title: 'Анализ пространства', desc: 'Изучение контекста и потенциала территории', image: proc1 },
  { title: 'Образ и сценарий', desc: 'Формирование атмосферы и логики движения', image: proc2 },
  { title: 'Концепция', desc: 'Детализация идей в архитектурные формы', image: proc3 },
  { title: 'Визуальная подача', desc: 'Создание фотореалистичных образов будущего', image: proc4 },
  { title: 'Поддержка реализации', desc: 'Авторский надзор и консультирование', image: proc5 }
];

export default function Process() {
  return (
    <section className="py-40 px-8 md:px-16 max-w-[1400px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-32"
      >
        <div className="w-10 h-[1px] bg-brand-accent mb-8" />
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-brand-primary">
          Процесс работы
        </h2>
      </motion.div>

      <div className="space-y-40">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-32`}
          >
            {/* Image side */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl group">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-[#0B0908]/20 group-hover:bg-transparent transition-colors duration-700"></div>
                <div className="absolute top-8 left-8 w-12 h-12 bg-[#0B0908] rounded-full flex items-center justify-center border border-brand-accent/20">
                  <span className="text-brand-accent font-serif text-lg">0{index + 1}</span>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div className="w-full md:w-1/2 space-y-8">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-primary leading-tight">
                {step.title}
              </h3>
              <p className="text-brand-secondary font-light text-xl md:text-2xl leading-relaxed max-w-xl">
                {step.desc}
              </p>
              <div className="w-16 h-[1px] bg-brand-accent/40" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
