
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { PageView } from '../App';

interface NavbarProps {
  currentPage: PageView;
  onPageChange: (page: PageView, sectionId?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const LOGO_URL = "https://lh3.googleusercontent.com/d/17K8Z9uzn3ZUgjs5J4XrREWfFNeFrSzS_";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (currentPage === 'home') {
        const sections = ['home', 'about', 'contact'];
        const scrollPosition = window.scrollY + 100; 
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const top = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof NAV_ITEMS[0]) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const section = item.href.replace('#', '');
    if (['production', 'distribution', 'studio'].includes(section)) {
      onPageChange(section as PageView);
    } else {
      onPageChange('home', section);
    }
  };

  const getIsActive = (href: string) => {
    const section = href.replace('#', '');
    if (currentPage !== 'home') return currentPage === section;
    return activeSection === section;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`pointer-events-auto flex items-center gap-8 px-8 h-16 rounded-full border transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-xl border-white/20 shadow-2xl scale-95' 
            : 'bg-white/5 backdrop-blur-md border-white/10'
        }`}
      >
        {/* Brand Link */}
        <div 
          onClick={() => onPageChange('home')}
          className="cursor-pointer group flex items-center"
        >
          <img src={LOGO_URL} alt="Logo" className="h-6 object-contain" />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = getIsActive(item.href);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item)}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative ${
                  isActive ? 'text-white' : 'text-white/40 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div 
                    layoutId="navDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={20} />
        </button>
      </motion.div>

      {/* Fullscreen Mobile Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[100] flex flex-col pointer-events-auto"
          >
            <div className="p-8 flex justify-between items-center border-b border-white/10">
              <img src={LOGO_URL} alt="Logo" className="h-8" />
              <button onClick={() => setMobileMenuOpen(false)} className="p-4 bg-white/5 rounded-full">
                <X size={24} />
              </button>
            </div>
            <div className="flex-grow flex flex-col justify-center px-10 gap-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item)}
                  className="text-3xl font-black uppercase tracking-tighter hover:text-[#D4AF37] transition-colors flex items-center justify-between group"
                >
                  {item.label}
                  <span className="text-[10px] font-mono text-white/20 group-hover:text-[#D4AF37]/40 transition-colors">0{i+1}</span>
                </motion.a>
              ))}
            </div>
            <div className="p-8 border-t border-white/10 text-center">
              <p className="text-[9px] font-mono text-white/40 tracking-[0.3em] uppercase">Festival Cinemas | Kochi</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;