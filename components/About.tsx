
import React from 'react';
import { motion } from 'framer-motion';
import { FOUNDERS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-56 bg-black relative border-t border-white/10 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Architectural Intro */}
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 mb-24 md:mb-48 items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12"
            >
              <div className="h-[1px] w-16 md:w-24 bg-[#D4AF37]" />
              <span className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase">Since 2022</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.1] text-white mb-6 md:mb-12"
            >
              Visionaries of <br />
              the <span className="italic">Unseen</span>.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-base sm:text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-white/80 max-w-4xl"
            >
              A collective dedicated to the absolute pinnacle of cinematic production. Led by <span className="text-[#D4AF37] font-medium">Rathish Ambat</span>, <span className="text-[#D4AF37] font-medium">Renjith Paul</span>, and <span className="text-[#D4AF37] font-medium">Jojo Jose</span>, we forge classics that bridge culture and innovation.
            </motion.p>
          </div>
          
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square bg-white/5 rounded-3xl border border-white/10 p-12 flex items-center justify-center group"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/17K8Z9uzn3ZUgjs5J4XrREWfFNeFrSzS_" 
                alt="Emblem"
                className="w-full h-full object-contain brightness-150 grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
          </div>
        </div>

        {/* Architect Grid */}
        <div className="border-t border-white/10 pt-12 md:pt-32">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 md:mb-24 gap-4 md:gap-8">
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white">The Architects</h3>
            <span className="font-mono text-[9px] md:text-[10px] text-white/20 tracking-[0.5em] uppercase">Core Collective</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {FOUNDERS.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group cursor-crosshair ${
                  founder.name === "Rathish Ambat" ? "lg:order-2 order-1" : 
                  founder.name === "Renjith Paul" ? "lg:order-1 order-2" : 
                  "lg:order-3 order-3"
                }`}
              >
                <div className="aspect-[3/4] max-w-[320px] mx-auto overflow-hidden rounded-2xl mb-8 bg-[#111] border border-white/10 group-hover:border-[#D4AF37] transition-all duration-500 relative">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h4 className="text-3xl font-serif font-bold text-white mb-2 leading-none">{founder.name}</h4>
                    <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">{founder.role}</p>
                  </div>
                </div>
                <p className="text-base text-white/60 leading-relaxed font-light px-4 italic">
                  {founder.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;