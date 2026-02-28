
import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  // Fix: Update onClick to accept MouseEvent to match standard React event handlers
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  href?: string;
  style?: 'primary' | 'outline';
  target?: string;
  rel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  className = '', 
  onClick, 
  href, 
  style = 'primary',
  target,
  rel
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.35);
    y.set((clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isLink = !!href;
  const baseClasses = style === 'primary' 
    ? "bg-[#d4af37] text-black hover:bg-[#c4a030] shadow-xl shadow-[#d4af37]/10"
    : "border border-white/20 text-white hover:border-[#d4af37] hover:text-[#d4af37]";

  const content = (
    <motion.div
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full h-full"
    >
      <div className={`px-10 py-4 font-bold uppercase tracking-[0.25em] text-[10px] rounded-sm transition-all duration-500 flex items-center justify-center gap-3 w-full h-full ${baseClasses} ${className}`}>
        {children}
      </div>
    </motion.div>
  );

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block cursor-pointer"
    >
      {isLink ? (
        <a 
          href={href} 
          target={target} 
          rel={rel} 
          onClick={onClick as any}
          className="block no-underline"
        >
          {content}
        </a>
      ) : (
        <button 
          onClick={onClick as any}
          className="block w-full bg-transparent border-none p-0 m-0 cursor-pointer"
        >
          {content}
        </button>
      )}
    </div>
  );
};
