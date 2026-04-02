"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import styles from './ApartmentCarousel.module.css';

const ApartmentCarousel = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const nextSlide = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setIsLightboxOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    if (!images || images.length === 0) return null;

    return (
        <>
            <div className={styles.carouselContainer} onClick={() => setIsLightboxOpen(true)}>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
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
                        <button className={`${styles.navButton} ${styles.prev}`} onClick={prevSlide} aria-label="Previous image">
                            <ChevronLeft size={24} />
                        </button>
                        <button className={`${styles.navButton} ${styles.next}`} onClick={nextSlide} aria-label="Next image">
                            <ChevronRight size={24} />
                        </button>
                        <div className={styles.dots}>
                            {images.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
                                    onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.lightboxOverlay}
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <button className={styles.closeButton} onClick={() => setIsLightboxOpen(false)}>
                            <X size={32} />
                        </button>

                        <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                             <button className={`${styles.lightboxNav} ${styles.lightboxPrev}`} onClick={prevSlide}>
                                <ChevronLeft size={48} />
                            </button>

                            <div className={styles.lightboxImageWrapper}>
                                <Image 
                                    src={images[currentIndex]} 
                                    alt={title}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>

                             <button className={`${styles.lightboxNav} ${styles.lightboxNext}`} onClick={nextSlide}>
                                <ChevronRight size={48} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ApartmentCarousel;
