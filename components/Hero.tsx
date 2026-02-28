
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ChevronDown } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

const Hero: React.FC = () => {
  const LOGO_URL = "https://lh3.googleusercontent.com/d/17K8Z9uzn3ZUgjs5J4XrREWfFNeFrSzS_";
  const VIDEO_URL = "https://res.cloudinary.com/daaaokfw2/video/upload/v1767867055/ronth_trailer_for_web_ieuoor.mp4";
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col justify-center">
      {/* Background Video Frame */}
      <motion.div style={{ scale: videoScale }} className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-[0.6] contrast-[1.1]"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </motion.div>



      {/* Main Content */}
      <div className="container relative z-20 px-6 md:px-12 mt-12 md:mt-20">
        <motion.div style={{ y: textY }} className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 md:mb-12"
          >
            <img src={LOGO_URL} alt="Festival Cinemas" className="h-12 md:h-24 object-contain" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold tracking-tight leading-[1.1] text-white mb-6 md:mb-12"
          >
            Redefining <br />
            <span className="text-[#D4AF37] italic">Cinema</span>.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8"
          >
            <MagneticButton 
              href="#about" 
              className="w-full sm:w-auto text-[11px] md:text-[14px] py-3.5 md:py-5 px-8 md:px-12 bg-[#D4AF37] text-black hover:bg-white transition-all rounded-sm"
            >
              Explore Vision
            </MagneticButton>
            
            <a 
              href="https://www.youtube.com/watch?v=7BgNdP8eTkk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 group no-underline py-2"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <Play size={16} md:size={18} fill="currentColor" />
              </div>
              <span className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.3em] text-white/60 group-hover:text-white transition-colors">Watch Trailer</span>
            </a>
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
};

export default Hero;