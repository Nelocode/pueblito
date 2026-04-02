"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Particle Component
const FloatingParticle = ({ delay, x, y }) => (
  <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{
      opacity: [0.1, 0.3, 0.1],
      y: [0, -20, 0],
      x: [0, 10, 0]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#D4AF37',
      pointerEvents: 'none'
    }}
  />
);

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2C1B18', color: '#EDE0D4', padding: '5rem 2rem 3rem 2rem', borderTop: '5px solid #D4AF37', position: 'relative', overflow: 'hidden' }}>

      {/* Floating Particles for "Magic" */}
      <FloatingParticle delay={0} x="10%" y="20%" />
      <FloatingParticle delay={2} x="80%" y="10%" />
      <FloatingParticle delay={1} x="50%" y="40%" />
      <FloatingParticle delay={3} x="90%" y="60%" />
      <FloatingParticle delay={1.5} x="20%" y="80%" />

      {/* Main Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', position: 'relative', zIndex: 1 }}>

        {/* Brand - Logo Replacement */}
        <div>
          <div style={{ position: 'relative', width: '200px', height: '80px', marginBottom: '1rem' }}>
            <Image
              src="/images/Logoblanco-300x112.png"
              alt="Pueblito Caribeño"
              fill
              style={{ objectFit: 'contain', objectPosition: 'left' }}
            />
          </div>
          <p style={{ lineHeight: '1.8', opacity: 0.8, fontSize: '1rem' }}>
            Arquitectura con alma, espacios con historia. Un estilo de vida donde la tradición abraza el confort moderno.
          </p>
        </div>

        {/* Navigation - Corrected Links */}
        <div style={{ paddingLeft: '2rem', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
          <h4 style={{ fontFamily: 'var(--font-body)', color: '#D4AF37', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: '700' }}>Navegación</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li><Link href="/" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s', fontSize: '1.05rem' }}>Inicio</Link></li>
            <li><Link href="/living-in-pueblito" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s', fontSize: '1.05rem' }}>Vivir en Pueblito</Link></li>
            <li><Link href="/events" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s', fontSize: '1.05rem' }}>Agenda Cultural</Link></li>
            <li><Link href="/invest" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s', fontSize: '1.05rem' }}>Oportunidades</Link></li>
            <li><Link href="/contact" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s', fontSize: '1.05rem' }}>Contacto</Link></li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-body)', color: '#D4AF37', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: '700' }}>Contacto</h4>
          <p style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#D4AF37' }}>📍</span> Punta Cana, República Dominicana
          </p>
          <p style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#D4AF37' }}>✉️</span> ventas@paseodelsendero.com
          </p>
          <p style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#D4AF37' }}>📞</span> +1 (829) 259-8948
          </p>

          <form style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            <input
              type="email"
              placeholder="Suscríbete al boletín"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '0.8rem',
                color: 'white',
                borderRadius: '4px',
                width: '100%'
              }}
            />
            <button style={{ background: '#D4AF37', color: '#2C1B18', border: 'none', padding: '0 1.5rem', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer' }}>OK</button>
          </form>
        </div>

      </div>

      {/* Copyright */}
      <div style={{ maxWidth: '1200px', margin: '4rem auto 0 auto', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', fontSize: '0.9rem', opacity: 0.5 }}>
        <p>© {new Date().getFullYear()} Pueblito Caribeño. Todos los derechos reservados.</p>
      </div>

      {/* Floating WhatsApp Widget */}
      <motion.a
        href="https://wa.me/18292598948"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          backgroundColor: '#25D366',
          color: 'white',
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          zIndex: 9999,
          textDecoration: 'none'
        }}
        aria-label="Contactar por WhatsApp"
      >
        <svg width="38" height="38" viewBox="0 0 448 512" fill="currentColor">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.8 69.4 27.2 106.2 27.2h.1c122.3 0 222-99.6 222-222 0-59.3-23-115.1-65.1-157.1zM223.9 446.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54 81.2 54 130.5 0 101.7-82.8 184.5-184.6 184.5zm101.1-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </motion.a>
    </footer>
  );
};

export default Footer;
