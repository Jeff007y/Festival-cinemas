
import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_DETAILS, ICON_MAP } from '../constants';
import { ExternalLink } from 'lucide-react';

const CompanyDetails: React.FC = () => {
  const MAP_URL = "https://maps.app.goo.gl/qGyKsyRWTRfHgw2r5";

  return (
    <section id="contact" className="py-12 md:py-24 bg-[#0a0a0a] overflow-hidden relative scroll-mt-20 md:scroll-mt-32">
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          >
            <h3 className="text-2xl md:text-4xl font-serif font-bold mb-8 md:mb-16 border-l-4 border-[#d4af37] pl-6 md:pl-8 tracking-tight text-white">
              Company Registry
            </h3>
            <div className="grid grid-cols-2 gap-4 md:gap-10">
              {COMPANY_DETAILS.map((detail, idx) => {
                const Icon = ICON_MAP[detail.icon];
                return (
                  <motion.div 
                    key={idx} 
                    className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-start group"
                  >
                    <div className="p-2 md:p-4 bg-white/5 rounded-full text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-500 shrink-0">
                      <Icon size={14} className="md:size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[7px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-white/20 mb-0.5 md:mb-2 font-bold">{detail.label}</p>
                      {detail.link ? (
                        <a 
                          href={detail.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[10px] md:text-lg text-white/80 hover:text-[#d4af37] transition-colors font-light break-all flex items-center gap-1 md:gap-2 group/link"
                        >
                          <span className="truncate sm:whitespace-normal">{detail.value}</span>
                          <ExternalLink size={10} className="opacity-0 group-hover/link:opacity-100 transition-opacity shrink-0" />
                        </a>
                      ) : (
                        <p className="text-[10px] md:text-lg text-white/80 font-light truncate sm:whitespace-normal">{detail.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
            className="h-full min-h-[300px] md:min-h-[400px] relative"
          >
            <div className="mb-6 md:mb-10">
              <h3 className="text-2xl md:text-4xl font-serif font-bold tracking-tight text-white">Our Location</h3>
            </div>

            <div className="block w-full h-[300px] md:h-[400px] rounded-sm overflow-hidden border border-white/10 shadow-2xl shadow-black relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.620177703358!2d76.29965931535263!3d9.982367992862892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514ab0aa97%3A0xbdc2ad1176e73c3b!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1689254394851!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) brightness(0.7)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                className="transition-all duration-700 group-hover:filter-none group-hover:brightness-90 group-hover:contrast-100"
              />
              
              {/* Centered Map Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.a 
                  whileHover={{ scale: 1.1, backgroundColor: '#d4af37', color: '#000' }}
                  whileTap={{ scale: 0.95 }}
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto bg-black/80 backdrop-blur-md px-6 py-4 md:px-8 md:py-5 rounded-full border border-[#d4af37]/40 text-[#d4af37] text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-bold flex items-center gap-3 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-solid"
                >
                  View on Google Maps <ExternalLink size={16} />
                </motion.a>
              </div>

              <div className="absolute inset-0 pointer-events-none border-[8px] md:border-[15px] border-black/50" />
              
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/5 transition-colors duration-500 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyDetails;
