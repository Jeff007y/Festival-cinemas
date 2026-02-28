
import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, ShoppingBag, Lightbulb } from 'lucide-react';
import { MotionText } from './MotionText';

const ContentStudio: React.FC = () => {
  const features = [
    { icon: <PenTool className="text-[#d4af37]" size={24} />, title: 'Storytelling', desc: 'Developing narratives that resonate globally.' },
    { icon: <ShoppingBag className="text-[#d4af37]" size={24} />, title: 'Sales', desc: 'Connecting visionaries with executed scripts.' },
    { icon: <Lightbulb className="text-[#d4af37]" size={24} />, title: 'Strategy', desc: 'Crafting content across languages and borders.' },
  ];

  return (
    <section id="studio" className="py-8 md:py-16 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5 scroll-mt-20 md:scroll-mt-32">
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
          <motion.h2 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-[#d4af37] mb-3 md:mb-4 font-bold"
          >
            Creative Hub
          </motion.h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 md:mb-6 tracking-tight text-white">The Content Studio</h3>
          <p className="text-base sm:text-lg md:text-xl text-white/40 leading-relaxed font-light italic font-serif max-w-2xl mx-auto px-4">
            "Festival Cinemas understands the significance of quality content. Our studio is dedicated to narratives for houses ready for execution."
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.2, duration: 1, ease: [0.25, 1, 0.5, 1] }}
              className="p-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-sm hover:bg-white/[0.05] hover:border-[#d4af37]/30 transition-all duration-700 group"
            >
              <div className="mb-4 md:mb-6 transform transition-transform group-hover:translate-x-2 duration-700">
                {feature.icon}
              </div>
              <h4 className="text-lg md:text-xl font-serif font-bold mb-2 md:mb-4 text-white group-hover:text-[#d4af37] transition-colors">{feature.title}</h4>
              <p className="text-white/30 font-light leading-relaxed text-sm md:text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentStudio;
