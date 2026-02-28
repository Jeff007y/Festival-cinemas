
import React from 'react';
import { Instagram, Youtube, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  // Direct link to the brand logo
  const LOGO_URL = "https://lh3.googleusercontent.com/d/17K8Z9uzn3ZUgjs5J4XrREWfFNeFrSzS_";

  return (
    <footer className="py-16 md:py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-8 flex flex-col items-center text-center">
        <div className="mb-8 md:mb-10 flex flex-col items-center gap-3 md:gap-4">
          <div className="h-14 md:h-24">
            <img 
              src={LOGO_URL} 
              alt="Festival Cinemas Logo" 
              className="h-full w-auto object-contain opacity-90 filter drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              onError={(e) => {
                (e.target as any).style.display = 'none';
                const parent = (e.target as any).parentElement;
                if (parent) parent.innerHTML = '<div class="text-xl md:text-2xl font-serif font-bold tracking-tight text-[#d4af37]">FESTIVAL CINEMAS</div>';
              }}
            />
          </div>
          <div className="w-8 md:w-12 h-[1px] bg-[#d4af37]/40" />
        </div>
        
        <p className="text-white/30 italic font-serif mb-8 md:mb-12 max-w-xs md:max-w-sm text-base md:text-lg px-4">
          "Capturing human emotion through technical mastery."
        </p>

        <div className="flex gap-8 md:gap-10 mb-12 md:mb-16">
          {[
            { icon: <Instagram size={16} className="md:size-[18px]" />, label: 'Instagram', href: '#' },
            { icon: <Youtube size={16} className="md:size-[18px]" />, label: 'YouTube', href: 'https://www.youtube.com/@FestivalCinemas_IN' },
            { icon: <Facebook size={16} className="md:size-[18px]" />, label: 'Facebook', href: '#' }
          ].map((social) => (
            <a 
              key={social.label} 
              href={social.href} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#d4af37] transition-all duration-300 hover:-translate-y-1"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/20 font-bold">
          Festival Cinemas © 2026 • Kochi, Kerala
        </div>
      </div>
    </footer>
  );
};

export default Footer;