import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from './InvestSection.module.css';
import Image from 'next/image';
import PageHeader from "@/components/PageHeader";
import ApartmentCarousel from "@/components/ApartmentCarousel";
import { Bed, Bath } from 'lucide-react';

export const metadata = {
  title: "Invertir | Pueblito Caribeño",
  description: "Oportunidades de inversión inmobiliaria en Punta Cana.",
};

const investmentOptions = [
  {
    title: "Apartamento 1er. Nivel",
    area: "119 m²",
    rooms: "2+",
    baths: "2.5",
    images: ["1", "2", "3", "7", "8", "10", "11", "18", "26", "27"].map(id => `/images/apartments/apto1/${id}.jpg`),
    colorClass: styles.bgBurgundy
  },
  {
    title: "Apartamento 2do. Nivel",
    area: "106 – 114 m²",
    rooms: "2 + Salón + Rooftop",
    baths: "2.5",
    images: ["4", "5", "12", "13", "14", "19", "20", "28", "31"].map(id => `/images/apartments/apto2/${id}.jpg`),
    colorClass: styles.bgNavy
  },
  {
    title: "Apto. Plaza Colón 2o. Nivel",
    area: "63 – 68 m²",
    rooms: "1 + Salón + Rooftop",
    baths: "1",
    images: ["9", "6", "15", "16", "17", "21", "22", "23", "24", "25", "29", "30"].map(id => `/images/apartments/plaza/${id}.jpg`),
    colorClass: styles.bgOlive
  }
];

const paymentPlan = {
  title: "Plan de Pagos",
  description: "Un plan de pagos cómodo y sencillo diseñado para facilitar tu inversión.",
  steps: [
    { name: "Reserva", value: "USD $1,000" },
    { name: "Separación (15 días)", value: "20%" },
    { name: "Abonos durante obra", value: "30%" },
    { name: "Pago final (Contra entrega)", value: "50%" }
  ],
  deliveryDate: "",
  image: "/images/Casa-Amarilla-Acuarela-Manual-Uso-768x1152.png"
};

export default function InvestPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Invertir en Pueblito"
        subtitle="Un patrimonio seguro con alta plusvalía y rentabilidad en el destino #1 del Caribe."
        bgImage="/images/portadas/Invertir.jpg"
      />

      <section className={styles.contentSection}>
        <div className={styles.introMessage}>
          &quot;Elige el espacio que se ajuste a tus necesidades&quot;
        </div>

        {/* Apartments Container to isolate sibling counting */}
        <div className={styles.apartmentsContainer}>
          {investmentOptions.map((option, idx) => (
            <div key={idx} className={styles.splitSection}>
              <div className={`${styles.textContent} ${option.colorClass}`}>
                <h2 className={styles.title}>{option.title}</h2>

                <div className={styles.statsGrid}>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>{option.area}</span>
                    <span className={styles.statLabel}>Área Interior</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>{option.rooms}</span>
                    <span className={styles.statLabel}>Habitaciones</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>{option.baths}</span>
                    <span className={styles.statLabel}>Baños</span>
                  </div>
                </div>

                <a href="/contact" className={styles.ctaButton}>Más información</a>
              </div>

              <div className={styles.imageContent}>
                <ApartmentCarousel images={option.images} title={option.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Plan Section - Fresh Design (FIXED) */}
      <section className={styles.paymentSection}>
        <h2 className={styles.paymentTitle}>{paymentPlan.title}</h2>
        <p className={styles.paymentDesc}>{paymentPlan.description}</p>

        <div className={styles.paymentContentWrapper}>
          {/* Image Box */}
          <div className={styles.decoImageBox}>
            <Image
              src={paymentPlan.image}
              alt="Decoracion"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1000px) 100vw, 450px"
            />
          </div>

          {/* Grid of cards */}
          <div className={styles.paymentGrid}>
            {paymentPlan.steps.map((step, idx) => (
              <div key={idx} className={styles.paymentCard}>
                <span className={styles.stepNumber}>{idx + 1}</span>
                <span className={styles.stepName}>{step.name}</span>
                <span className={styles.stepValue}>{step.value}</span>
              </div>
            ))}

            {paymentPlan.deliveryDate && (
              <div className={styles.deliveryInfo} style={{ gridColumn: '1 / -1' }}>
                <h3>Fecha estimada de entrega</h3>
                <span className={styles.deliveryDate}>{paymentPlan.deliveryDate}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
