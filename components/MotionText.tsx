
import React from 'react';
import { motion } from 'framer-motion';

interface MotionTextProps {
  text: string;
  className?: string;
  type?: 'char' | 'word';
  delay?: number;
}

// Fix: Use a more specific type or any to avoid 'number[]' vs 'Easing' mismatch in Variants
const cinematicEase: any = [0.25, 1, 0.5, 1];

export const MotionText: React.FC<MotionTextProps> = ({ 
  text, 
  className = '',
  type = 'word',
  delay = 0
}) => {
  const items = type === 'char' ? text.split('') : text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: type === 'char' ? 0.03 : 0.08,
        delayChildren: delay,
      },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.02, staggerDirection: -1 }
    }
  };

  const child = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      filter: 'blur(10px)' 
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        ease: cinematicEase,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      filter: 'blur(5px)',
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.span
      className={`inline-block group/text ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.3 }}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          whileHover={{ 
            y: -5, 
            scale: 1.1, 
            color: '#d4af37',
            transition: { duration: 0.2, ease: "easeOut" } 
          }}
          className="inline-block cursor-default select-none"
          style={{ marginRight: type === 'char' ? '0' : '0.25em' }}
        >
          {item === ' ' ? '\u00A0' : item}
        </motion.span>
      ))}
    </motion.span>
  );
};
