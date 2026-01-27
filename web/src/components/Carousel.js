"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Carousel.module.css';

// Prioritize "Lifestyle" & "People" images as requested
// Removed potential renders or generic shots
const originalImages = [
  '/images/Reloj_dance.jpg',      // Dancing/Activity
  '/images/Atencion_al_usuario.jpg', // People/Service
  '/images/Foto-Pueblito-Atarddecer.jpg', // Atmosphere
  '/images/foto-balcones-pueblito.jpg', // Real Architecture
  '/images/Calle-Pueblito-1.jpg',
  '/images/La-isla.jpg',
  '/images/PueblitoArt2-1.jpg',
];

// Create 3 sets for seamless looping (1 set visible, 1 buffering, 1 margin)
const images = [...originalImages, ...originalImages, ...originalImages];

const Carousel = () => {
  return (
    <section className={styles.carouselSection} id="pueblito-vivo">
      <h2 className={styles.title}>Pueblito está Vivo</h2>
      <p className={styles.subtitle}>Momentos reales de nuestra comunidad</p>
      
      {/* Gradient removed as Layout is now separated */}

      <div className={styles.carouselContainer}>
        {/* Row 1 */}
        <motion.div 
          className={styles.track}
          animate={{ x: ["0%", "-33.3333%"] }} // Move exactly one set width
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40, // Adjusted speed
              ease: "linear",
            },
          }}
        >
          {images.map((src, index) => (
            <div key={`r1-${index}`} className={styles.imageCard}>
              <Image 
                src={src} 
                alt="Pueblito Life" 
                fill 
                className={styles.image}
                sizes="50vw" 
                priority={index < 3}
              />
            </div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default Carousel;
