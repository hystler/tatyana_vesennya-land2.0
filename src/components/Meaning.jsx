import React from 'react';
import { motion } from 'framer-motion';

export default function Meaning() {
  return (
    <section className="py-40 px-8 md:px-16 max-w-6xl mx-auto text-left flex flex-col items-start justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <div className="w-10 h-[1px] bg-brand-accent mb-12" />
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-brand-primary leading-tight mb-10 max-w-4xl">
          Проект становится реальным ещё до реализации
        </h2>
        <p className="text-xl md:text-2xl text-brand-mineral font-serif font-light italic">
          Пространство, в котором хочется оказаться.
        </p>
      </motion.div>
    </section>
  );
}
