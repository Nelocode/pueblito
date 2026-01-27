"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const FloatingDoodles = () => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 1,
      overflow: 'hidden'
    }}>
      {/* Logo Icon 1 - Top Right */}
      <motion.div
        style={{ position: 'absolute', top: '15%', right: '5%', opacity: 0.1, filter: 'sepia(1) saturate(5) hue-rotate(180deg)' }}
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, 10, 0] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/images/Objectpueblito.svg" alt="Pueblito Decoration" width={200} height={200} />
      </motion.div>

      {/* Logo Icon 2 - Bottom Left - Multiplied */}
      <motion.div
        style={{ position: 'absolute', bottom: '10%', left: '2%', opacity: 0.08, filter: 'grayscale(100%) brightness(50%) sepia(100%) hue-rotate(20deg) saturate(500%)' }} // Attempting Gold-ish tint via CSS filter
        animate={{ 
          y: [0, -40, 0],
          rotate: [0, -5, 0] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Image src="/images/Objectpueblito.svg" alt="Pueblito Decoration" width={300} height={300} />
      </motion.div>

       {/* Logo Icon 3 - Top Left - Small */}
       <motion.div
        style={{ position: 'absolute', top: '5%', left: '15%', opacity: 0.05 }}
        animate={{ 
          y: [0, 15, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
         <Image src="/images/Objectpueblito.svg" alt="Decoration" width={100} height={100} />
      </motion.div>
    </div>
  );
};

export default FloatingDoodles;
