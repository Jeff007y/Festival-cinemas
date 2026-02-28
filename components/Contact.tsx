
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise(r => setTimeout(r, 2000));
    setStatus('success');
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-32 bg-[#0a0a0a] scroll-mt-24">
      <div className="container mx-auto px-6 md:px-8 max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold mb-4">Collaboration</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">Get In Touch.</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-2">
              <label className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest block">Your Name</label>
              <input 
                type="text" 
                required 
                className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-base text-white focus:outline-none focus:border-[#D4AF37] transition-all"
                placeholder="Name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest block">Email Address</label>
              <input 
                type="email" 
                required 
                className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-base text-white focus:outline-none focus:border-[#D4AF37] transition-all"
                placeholder="email@company.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest block">Your Message</label>
            <textarea 
              rows={4} 
              required 
              className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-base text-white focus:outline-none focus:border-[#D4AF37] transition-all resize-none"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <button 
            disabled={status !== 'idle'}
            className="w-full py-4 bg-[#D4AF37] text-black text-sm font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-white transition-all disabled:opacity-50"
          >
            <AnimatePresence mode="wait">
              {status === 'idle' && (
                <motion.div key="idle" className="flex items-center justify-center gap-2">
                  Send Message <Send size={16} />
                </motion.div>
              )}
              {status === 'loading' && (
                <motion.div key="loading" className="flex items-center justify-center gap-2">
                  Dispatching <Loader2 size={16} className="animate-spin" />
                </motion.div>
              )}
              {status === 'success' && (
                <motion.div key="success" className="flex items-center justify-center gap-2">
                  Received <Check size={16} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;