import React from 'react';
import { motion } from 'framer-motion';

const ConveyorText = () => {
  const text = ">>> CONVERSATIONAL AI • WORKFLOW AUTOMATION • VOICEFLOW BOTS • RETAINER SERVICES • NO-CODE SOLUTIONS • SCALE WITH AI • ";
  
  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 py-4 border-y border-blue-500/30 relative">
      {/* Animated background lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
      </div>
      
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        <span className="text-xl md:text-2xl font-mono font-medium text-blue-300 pr-8 tracking-wider">
          {text}
        </span>
        <span className="text-xl md:text-2xl font-mono font-medium text-blue-300 pr-8 tracking-wider">
          {text}
        </span>
        <span className="text-xl md:text-2xl font-mono font-medium text-blue-300 pr-8 tracking-wider">
          {text}
        </span>
      </motion.div>
    </div>
  );
};

export default ConveyorText;