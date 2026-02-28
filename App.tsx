
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import ContentStudio from './components/ContentStudio';
import FeaturedFilm from './components/FeaturedFilm';
import MovieGrid from './components/MovieGrid';
import CompanyDetails from './components/CompanyDetails';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GrainOverlay from './components/GrainOverlay';
import { motion, AnimatePresence } from 'framer-motion';

export type PageView = 'home' | 'production' | 'distribution' | 'studio';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  // Ensure scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePageChange = (page: PageView, sectionId?: string) => {
    setCurrentPage(page);
    
    // If we're going to home and need to scroll to a section
    if (page === 'home' && sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen relative bg-[#0a0a0a] text-[#f5f5f5] overflow-x-hidden flex flex-col">
      <GrainOverlay />
      
      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />
      
      {/* Removed pt-16 md:pt-20 to allow Hero to be flush with top */}
      <main className="w-full flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <About />
              <CompanyDetails />
              <Contact />
            </motion.div>
          )}

          {currentPage === 'production' && (
            <motion.div
              key="production"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="pt-20 md:pt-32" // Reduced mobile padding
            >
              <FeaturedFilm />
            </motion.div>
          )}

          {currentPage === 'distribution' && (
            <motion.div
              key="distribution"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="pt-20 md:pt-32" // Reduced mobile padding
            >
              <MovieGrid />
            </motion.div>
          )}

          {currentPage === 'studio' && (
            <motion.div
              key="studio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="pt-20"
            >
              <Vision />
              <ContentStudio />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
