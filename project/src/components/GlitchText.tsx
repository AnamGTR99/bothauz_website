import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchIntensity?: number;
}

const GlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  className = "", 
  glitchIntensity = 0.1 
}) => {
  const [glitchedText, setGlitchedText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < glitchIntensity) {
        setIsGlitching(true);
        
        // Create glitched version
        const chars = text.split('');
        const glitched = chars.map(char => {
          if (char === ' ') return char;
          return Math.random() < 0.3 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char;
        }).join('');
        
        setGlitchedText(glitched);
        
        // Reset after short duration
        setTimeout(() => {
          setGlitchedText(text);
          setIsGlitching(false);
        }, 100);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [text, glitchIntensity]);

  return (
    <motion.span
      className={`relative ${className}`}
      animate={isGlitching ? {
        x: [0, -2, 2, 0],
        textShadow: [
          '0 0 0 transparent',
          '2px 0 0 #ff0000, -2px 0 0 #00ffff',
          '0 0 0 transparent'
        ]
      } : {}}
      transition={{ duration: 0.1 }}
    >
      {glitchedText}
    </motion.span>
  );
};

export default GlitchText;