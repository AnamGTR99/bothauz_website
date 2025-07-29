import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from './GlitchText';
import GlowingOrb from './GlowingOrb';

const AnimatedLogo = ({ className = "" }) => {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* Background orb */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
        <GlowingOrb size={300} />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tight leading-none">
          <GlitchText 
            text="Bot" 
            className="text-gray-900"
            glitchIntensity={0.05}
          />
          <GlitchText 
            text="Hauz" 
            className="text-blue-700"
            glitchIntensity={0.05}
          />
        </h1>
      </motion.div>
      
      {/* Subtitle with tech effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 mt-4"
      >
        <div className="text-lg md:text-xl text-blue-600 font-mono tracking-wider">
          [ AI AUTOMATION SYSTEMS ]
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedLogo;