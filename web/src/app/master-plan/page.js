"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import PageHeader from "@/components/PageHeader";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MasterPlanPage() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = [
    {
      src: "/images/mapa_vistacana.png",
      alt: "Mapa Vistacana"
    },
    {
      src: "/images/portadas/Masterplan.png",
      alt: "Master Plan Pueblito Caribeño"
    }
  ];

  return (
    <main style={{ backgroundColor: '#E3D5C3', minHeight: '100vh' }}>
      <Navbar />

      {/* Subtle Header */}
      <PageHeader
        title="Master Plan"
        subtitle="Una visión integral de nuestra comunidad."
        bgImage="/images/Pueblito_planes.jpg"
      />

      <section style={{ padding: '4rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {images.map((img, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1200px',
              height: '600px',
              margin: '0 auto 3rem auto',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              cursor: 'zoom-in'
            }}
            onClick={() => setLightboxImage(img.src)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}

        {/* CTA Button */}
        <a
          href="/invertir"
          className="btn-primary"
        >
          Invertir ahora
        </a>
      </section>

      {/* LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.9)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              cursor: 'zoom-out'
            }}
          >
            <div style={{ position: 'relative', width: '90%', height: '90%' }}>
              <Image
                src={lightboxImage}
                alt="Vista ampliada"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <button
              onClick={() => setLightboxImage(null)}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'grid',
                placeItems: 'center',
                fontSize: '1.5rem',
                cursor: 'pointer',
                zIndex: 10000
              }}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
