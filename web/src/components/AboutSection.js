import Link from 'next/link';
import Image from 'next/image';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.logoWrapper} style={{ marginBottom: '2rem' }}>
          <Image 
            src="/images/Paseo_del_sendero-768x255.png" 
            alt="Grupo Paseo del Sendero" 
            width={400} 
            height={133}
            style={{ objectFit: 'contain' }}
          />
        </div>
        
        <p className={styles.text}>
          Somos los orgullosos fundadores de <span className={styles.highlight}>VistaCana</span> y desarrolladores visionarios detrás de proyectos emblemáticos como Pueblito Caribeño y CHUKUM. Nuestra misión es crear comunidades temáticas que no solo ofrecen un hogar, sino un estilo de vida inigualable lleno de arte, cultura y naturaleza.
        </p>

        <Link href="/about" className={styles.linkButton}>
          Conoce Más Sobre Nosotros
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
