
import React from 'react';
import { motion } from 'framer-motion';
import { MOVIES } from '../constants';

const MovieGrid: React.FC = () => {
  return (
    <section id="distribution" className="py-12 md:py-32 bg-black border-t border-white/10 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-6 md:gap-12">
          <div>
            <h2 className="text-[9px] md:text-[10px] font-mono tracking-[0.5em] text-[#D4AF37] uppercase mb-2 md:mb-4">Film Repertory</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-none text-white">Slate 2026</h3>
          </div>
          <p className="text-xs sm:text-base text-white/40 max-w-sm font-light italic font-serif text-left">
            Curating the future of <br /> South Indian narratives.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {MOVIES.map((movie, idx) => (
            <motion.div
              key={movie.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#111] border border-white/10 group-hover:border-[#D4AF37]/50 transition-all duration-700">
                <img 
                  src={movie.image} 
                  alt={movie.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Status Indicator */}
                <div className="absolute top-6 right-6">
                  <div className={`px-4 py-2 rounded-sm text-[9px] font-mono uppercase tracking-widest border transition-all ${
                    movie.status === 'Released' 
                      ? 'bg-[#D4AF37] text-black border-[#D4AF37]' 
                      : 'bg-black/60 text-white border-white/20 backdrop-blur-md'
                  }`}>
                    {movie.status}
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                   <span className="text-[#D4AF37] font-mono text-[8px] tracking-[0.3em] uppercase block mb-2">
                    {movie.category}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-white leading-none">
                    {movie.title}
                  </h4>
                </div>
              </div>

              {movie.director && (
                <div className="mt-6 flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-500">
                  <div className="h-[1px] w-8 bg-[#D4AF37]" />
                  <p className="text-lg text-white/60 font-serif italic font-light">Directed by {movie.director}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieGrid;