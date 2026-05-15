import { motion } from 'framer-motion';

const skills = [
  '3ds Max', 'Corona Renderer', 'Blender', 'Unreal Engine 5', 'ZBrush', 'Photoshop', 'Substance Painter'
];

export default function About() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-5/12"
        >
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide text-gray-100 mb-8">
              Обо Мне
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Я специализируюсь на создании высокодетализированных 3D-визуализаций для архитектуры, интерьеров и предметного дизайна. Мой подход сочетает техническую точность с художественным видением света, материалов и композиции.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              Стремлюсь передать атмосферу и эмоции в каждом рендере, превращая концепции в фотореалистичные изображения, которые говорят сами за себя.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-7/12"
        >
          <div className="glass p-8 md:p-12 rounded-3xl relative">
            {/* Glow accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-neon-purple opacity-20 blur-2xl rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-neon-lilac opacity-10 blur-2xl rounded-full"></div>
            
            <h3 className="text-2xl font-semibold mb-8 text-white relative z-10">Инструментарий</h3>
            <div className="flex flex-wrap gap-4 relative z-10">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="px-6 py-3 rounded-full border border-gray-800 bg-black/40 text-gray-200 text-sm font-medium tracking-wide hover:border-neon-lilac hover:text-white hover:shadow-[0_0_15px_rgba(221,160,221,0.3)] transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
