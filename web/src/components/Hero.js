"use client";

import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yVideo = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className={styles.hero} id="hero" ref={ref}>
      <motion.div style={{ y: yVideo }} className={styles.videoContainer}>
        <div className={styles.videoWrapper}>
          <iframe
            src="https://www.youtube.com/embed/6JTIDhkbC8A?autoplay=1&mute=1&controls=0&loop=1&playlist=6JTIDhkbC8A&showinfo=0&rel=0&iv_load_policy=3&disablekb=1"
            title="Pueblito Caribeño"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '100vh',
              transform: 'translate(-50%, -50%)',
              objectFit: 'cover',
              pointerEvents: 'none', // Prevents interaction
              // scale to ensure it covers screens
              minWidth: '177.77vh', // 16:9 aspect ratio
              minHeight: '56.25vw'
            }}
          />
        </div>
        <div className={styles.overlay}></div>
      </motion.div>


      <div className={styles.content}>
        <motion.h1
          style={{ y: yText }}
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Pueblito Caribeño
        </motion.h1>

        <motion.p
          style={{ y: yText }}
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Una comunidad que tiene mucho arte y cultura
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          translateX: '-50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
          zIndex: 10
        }}
        onClick={() => {
          const nextSection = document.getElementById('pueblito-vivo'); // Assuming next section has this ID or we scroll by window height
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
          }
        }}
      >
        <span style={{
          color: 'white',
          fontSize: '0.9rem',
          letterSpacing: '1px',
          fontWeight: '300',
          textTransform: 'uppercase',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          Descubre pueblito
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown color="white" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
