"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './SalesSection.module.css';

const SalesSection = () => {
  return (
    <section className={styles.salesSection} id="comprar">
      <div className={styles.header}>
        <h2 className={styles.title}>Comprar Pueblito</h2>
        <p className={styles.subtitle}>Invierte en un patrimonio tangible en el corazón de Punta Cana.</p>
      </div>

      <div className={styles.categoryGrid}>
        {/* Card 1: Ready to Move In */}
        <div className={styles.categoryCard}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/APARTAMENTO-TIPICO-1.png"
              alt="Unidades Terminadas"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.cardOverlay}></div>
          </div>
          <div className={styles.cardContent}>
            <h3>Unidades Terminadas</h3>
            <p>Apartamentos listos para entrega inmediata. Empieza a vivir la experiencia hoy mismo.</p>
            <Link href="/invest" className={styles.link}>
              Ver Disponibilidad <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Card 2: Stage 2 / Pre-construction */}
        <div className={styles.categoryCard}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/segunda-etapa-cover.jpg"
              alt="Etapa 2"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.cardOverlay}></div>
          </div>
          <div className={styles.cardContent}>
            <h3>Segunda Etapa</h3>
            <p>Oportunidades de inversión en planos con planes de pago flexibles en nuestra nueva expansión.</p>
            <Link href="/invest" className={styles.link}>
              Conocer el Proyecto <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesSection;
