"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import styles from './ApartmentCarousel.module.css';

const ApartmentCarousel = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setIsLightboxOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const nextSlide = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    if (!images || images.length === 0) return null;

    return (
        <div className={styles.carouselContainer}>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className={styles.imageWrapper}
                    onClick={() => setIsLightboxOpen(true)}
                    style={{ cursor: 'zoom-in' }}
                >
                    <Image 
                        src={images[currentIndex]} 
                        alt={`${title} - Vista ${currentIndex + 1}`} 
                        fill 
                        style={{ objectFit: 'cover' }}
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    />
                </motion.div>
            </AnimatePresence>

            {images.length > 1 && (
                <>
                    <button className={`${styles.navButton} ${styles.prev}`} onClick={prevSlide} aria-label="Imagen anterior">
                        <ChevronLeft size={24} />
                    </button>
                    <button className={`${styles.navButton} ${styles.next}`} onClick={nextSlide} aria-label="Siguiente imagen">
                        <ChevronRight size={24} />
                    </button>
                    <div className={styles.dots}>
                        {images.map((_, idx) => (
                            <span
                                key={idx}
                                className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex(idx);
                                }}
                            />
                        ))}
                    </div>
                </>
            )}

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.lightboxOverlay}
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <button className={styles.closeLightbox} onClick={() => setIsLightboxOpen(false)}>
                            <X size={32} />
                            <span>Cerrar</span>
                        </button>

                        <div className={styles.lightboxContent}>
                            <Image 
                                src={images[currentIndex]} 
                                alt={`${title} Full Overlay`} 
                                fill 
                                className={styles.lightboxImage}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ApartmentCarousel;
