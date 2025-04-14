import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

interface CircleIconProps {
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export const CircleIcon = ({ className, onClick, ariaLabel = "Scroll down" }: CircleIconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.button
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        "w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-lg cursor-pointer relative z-10",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      initial={{ y: 0 }}
      animate={{ 
        y: [0, -12, 0],
        boxShadow: isHovered ? "0 10px 25px rgba(148, 124, 77, 0.5)" : "0 4px 6px rgba(0, 0, 0, 0.1)"
      }}
      transition={{ 
        y: { 
          repeat: Infinity, 
          duration: 2.5, 
          ease: "easeInOut",
          times: [0, 0.5, 1] 
        },
        boxShadow: { duration: 0.3 }
      }}
    >
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.8, 
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
      >
        <ChevronDown className="w-6 h-6 text-white" />
      </motion.div>
      
      {/* Pulse animation ring */}
      <motion.div
        className="absolute w-full h-full rounded-full bg-secondary/30"
        animate={{ scale: [0.9, 1.3, 0.9], opacity: [0.6, 0, 0.6] }}
        transition={{ 
          repeat: Infinity, 
          duration: 2.5, 
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
      />
    </motion.button>
  );
};
