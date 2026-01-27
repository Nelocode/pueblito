"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ApartmentCarousel.module.css';

const ApartmentCarousel = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    if (!images || images.length === 0) return null;

    return (
        <div className={styles.carouselContainer}>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={styles.imageWrapper}
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`${title} - View ${currentIndex + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </motion.div>
            </AnimatePresence>

            {images.length > 1 && (
                <>
                    <button onClick={prevSlide} className={`${styles.navButton} ${styles.prev}`}>
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextSlide} className={`${styles.navButton} ${styles.next}`}>
                        <ChevronRight size={24} />
                    </button>
                    <div className={styles.dots}>
                        {images.map((_, idx) => (
                            <span
                                key={idx}
                                className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
                                onClick={() => setCurrentIndex(idx)}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ApartmentCarousel;
