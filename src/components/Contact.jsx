import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide text-gray-100 mb-4">
          Связаться со Мной
        </h2>
        <p className="text-gray-400 font-light mb-8">Готовы обсудить ваш следующий проект?</p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-lg font-light mt-8">
          <motion.a 
            href="tel:+79857747972" 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-gray-300 transition-colors duration-300 hover:text-neon-lilac hover:drop-shadow-[0_0_8px_rgba(221,160,221,0.6)]"
          >
            <span>+7 (985) 774-7972</span>
          </motion.a>
          
          <motion.a 
            href="mailto:tvdecor18@gmail.com" 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-gray-300 transition-colors duration-300 hover:text-neon-lilac hover:drop-shadow-[0_0_8px_rgba(221,160,221,0.6)]"
          >
            <span>tvdecor18@gmail.com</span>
          </motion.a>
        </div>
      </motion.div>

      <motion.form 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group">
            <input 
              type="text" 
              id="name" 
              placeholder="Ваше Имя"
              className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-lilac transition-colors duration-300 peer"
              required
            />
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-neon-lilac scale-x-0 peer-focus:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
          
          <div className="relative group">
            <input 
              type="email" 
              id="email" 
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-lilac transition-colors duration-300 peer"
              required
            />
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-neon-lilac scale-x-0 peer-focus:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </div>

        <div className="relative group">
          <textarea 
            id="message" 
            placeholder="Опишите вашу задачу..."
            rows={4}
            className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-colors duration-300 peer resize-none"
            required
          ></textarea>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-neon-purple scale-x-0 peer-focus:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>

        <div className="flex justify-center pt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-12 py-4 rounded-full font-semibold text-white tracking-wide group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-lilac opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 mix-blend-overlay"></div>
            <span className="relative z-10 drop-shadow-md">Отправить Сообщение</span>
            
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(138,43,226,0.6)] group-hover:shadow-[0_0_30px_rgba(221,160,221,0.8)] transition-shadow duration-300 -z-10"></div>
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
}
