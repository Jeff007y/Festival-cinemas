
import React from 'react';
import { motion } from 'framer-motion';
import { VISION_CONTENT } from '../constants';

const Vision: React.FC = () => {
  return (
    <div id="vision" className="py-8 md:py-16 bg-[#0a0a0a] border-t border-white/5 scroll-mt-20 md:scroll-mt-32">
      <section className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-[#d4af37] mb-3 md:mb-4 font-bold"
          >
            Vision
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 md:mb-8 tracking-tight leading-[1.1] text-white"
          >
            {VISION_CONTENT.headline}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/40 font-light leading-relaxed italic font-serif px-2"
          >
            "{VISION_CONTENT.subheadline}"
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {VISION_CONTENT.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1 * idx, duration: 1 }}
              className="p-6 md:p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-700 group"
            >
              <h3 className="text-lg md:text-2xl font-serif font-bold mb-3 md:mb-4 text-white group-hover:text-[#d4af37] transition-colors">{pillar.title}</h3>
              <p className="text-white/40 font-light leading-relaxed text-sm md:text-base">
                {pillar.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Vision;
