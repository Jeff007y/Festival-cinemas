
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

const FeaturedFilm: React.FC = () => {
  const POSTER_URL = "https://lh3.googleusercontent.com/d/16j1UO142OLlddal0_4T9R--Ly83xZlfU";

  return (
    <section className="py-12 md:py-32 bg-black relative overflow-hidden flex flex-col items-center">
      {/* Dynamic Background Noise */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-20">
          
          {/* Poster Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="absolute -inset-10 bg-[#D4AF37]/5 blur-[80px] rounded-full group-hover:bg-[#D4AF37]/10 transition-colors" />
            <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <img src={POSTER_URL} alt="RONTH" className="w-full h-auto" />
              <div className="absolute top-4 left-4 md:top-6 md:left-6">
                <div className="px-3 py-1.5 md:px-4 md:py-2 bg-black/80 backdrop-blur-xl border border-white/20 rounded-full font-mono text-[8px] md:text-[9px] tracking-[0.2em] uppercase text-white/80">Original Feature</div>
              </div>
            </div>
          </motion.div>

          {/* Info Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left relative z-20">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-4 md:mb-8"
            >
              <div className="relative">
                <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-none text-white">
                  RONTH
                </h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-serif italic text-white/60 mb-6 md:mb-8 leading-tight">
                A Visionary Neo-Noir Masterpiece <br />
                <span className="text-white font-medium not-italic font-serif text-[10px] sm:text-sm md:text-base lg:text-lg opacity-80">By Shahi Kabir</span>
              </p>

              <p className="text-xs sm:text-base md:text-lg lg:text-xl font-light text-white/80 leading-relaxed mb-8 md:mb-12 max-w-2xl">
                A relentless psychological journey into the heart of justice. One of the most critically acclaimed cop-dramas of the decade.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-6">
                <MagneticButton 
                  href="https://www.hotstar.com/in/movies/ronth/1271435887?search_query=ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-[11px] md:text-[13px] py-3 md:py-4 px-8 md:px-12 bg-[#D4AF37] text-black rounded-sm"
                >
                  <Play size={16} fill="black" /> Watch Now
                </MagneticButton>
                <MagneticButton 
                  href="https://www.youtube.com/watch?v=6MavcbHkaFc" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style="outline"
                  className="w-full sm:w-auto text-[11px] md:text-[13px] py-3 md:py-4 px-8 md:px-12 border-white text-white font-medium rounded-sm"
                >
                  Watch Trailer
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFilm;