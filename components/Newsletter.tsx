
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <section className="py-32 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-sm uppercase tracking-[0.5em] text-[#d4af37] mb-8 font-bold">Stay Updated</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white tracking-tight">Join the Collective.</h3>
          <p className="text-white/40 font-light mb-12 tracking-wide text-lg">
            Receive exclusive insights into our upcoming projects and industry news.
          </p>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="relative flex items-center"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-white/20 py-6 pr-14 text-xl font-light focus:outline-none focus:border-[#d4af37] transition-colors placeholder:text-white/10 text-white"
                />
                <button
                  type="submit"
                  className="absolute right-0 p-3 text-[#d4af37] hover:translate-x-2 transition-transform duration-500"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={28} strokeWidth={1.5} />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-6 py-6"
              >
                <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                  <Check size={28} />
                </div>
                <p className="text-[#d4af37] font-medium tracking-widest text-sm uppercase">Subscription Confirmed</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
