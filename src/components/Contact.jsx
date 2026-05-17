import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-48 px-6 md:px-12 bg-brand-bg relative overflow-hidden">
      {/* Background Accent Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <p className="text-brand-accent font-serif text-sm tracking-[0.3em] uppercase mb-12">
            Связь
          </p>
          
          <a 
            href="https://t.me/Vesennya_Tata" 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
          >
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif font-normal text-brand-primary hover:text-brand-accent transition-colors duration-700 mb-12">
              Обсудить проект
            </h2>
            <div className="h-[2px] w-full bg-brand-card/60 relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-accent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
            </div>
          </a>

          <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-12 text-brand-secondary font-light tracking-wide">
            <motion.a 
              href="mailto:tvdecor18@gmail.com"
              whileHover={{ color: '#E7DFD2' }}
              className="transition-colors duration-500"
            >
              tvdecor18@gmail.com
            </motion.a>
            <div className="w-1 h-1 bg-brand-accent/40 rounded-full hidden md:block"></div>
            <motion.a 
              href="https://t.me/Vesennya_Tata"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ color: '#E7DFD2' }}
              className="transition-colors duration-500"
            >
              Telegram: @Vesennya_Tata
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

