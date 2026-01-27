import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from './InvestSection.module.css';
import Image from 'next/image';
import PageHeader from "@/components/PageHeader";
import ApartmentCarousel from "@/components/ApartmentCarousel";
import { Bed, Bath, ChefHat, Check, Zap, WashingMachine, Flame, Waves } from 'lucide-react';

export const metadata = {
  title: "Invertir | Pueblito Caribeño",
  description: "Oportunidades de inversión inmobiliaria en Punta Cana.",
};

const investmentOptions = [
  {
    title: "Apartamento 1er. Nivel",
    location: "Plaza Colón y Plaza de los Coches",
    area: "119 m²",
    rooms: "2+",
    baths: "2.5",
    features: [
      { icon: <ChefHat size={18} />, text: "Cocina modular equipada" },
      { icon: <Check size={18} />, text: "Línea blanca incluida (Nevera, Estufa, Horno)" },
      { icon: <Zap size={18} />, text: "Campana extractora" },
      { icon: <WashingMachine size={18} />, text: "Lavadora/secadora" },
      { icon: <Flame size={18} />, text: "Calentador" },
      { icon: <Waves size={18} />, text: "Jacuzzi" }
    ],
    // Correct Updated Image for Level 1
    images: ["/images/apto_nivel_1_new.jpg"],
    colorClass: styles.bgBurgundy
  },
  {
    title: "Apartamento 2do. Nivel",
    location: "Calle Cartagena, Santo Domingo, Granada y El Viejo San Juan",
    area: "106 – 114 m²",
    rooms: "2 + Salón + Rooftop",
    baths: "2.5",
    features: [
      { icon: <Check size={18} />, text: "Walk-in closet" },
      { icon: <ChefHat size={18} />, text: "Cocina modular equipada" },
      { icon: <Check size={18} />, text: "Línea blanca completa" },
      { icon: <Waves size={18} />, text: "Jacuzzi" }
    ],
    // Correct Updated Image for Level 2
    images: ["/images/apto_nivel_2_new.jpg"],
    colorClass: styles.bgNavy
  },
  {
    title: "Apto. Plaza Colón 2o. Nivel",
    location: "Plaza Colón y Plaza de los Coches",
    area: "63 – 68 m²",
    rooms: "1 + Salón + Rooftop",
    baths: "1",
    features: [
      { icon: <ChefHat size={18} />, text: "Cocina modular equipada" },
      { icon: <Check size={18} />, text: "Línea blanca completa" },
      { icon: <Check size={18} />, text: "Ideal para inversión" },
      { icon: <Waves size={18} />, text: "Jacuzzi" }
    ],
    // Correct Updated Image for Plaza Colon
    images: ["/images/apto_plaza_colon_rooftop.jpg"],
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
  deliveryDate: "Diciembre 2027",
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
          "Elige el espacio que se ajuste a tus necesidades"
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
                    <span className={styles.statLabel}>Área</span>
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

                <div className={styles.description}>
                  <p><strong>Ubicación:</strong> {option.location}</p>
                </div>

                <ul className={styles.featuresList}>
                  {option.features.map((feature, i) => (
                    <li key={i}>
                      <span className={styles.iconWrapper}>{feature.icon}</span>
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <button className={styles.ctaButton}>Más información</button>
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

            <div className={styles.deliveryInfo} style={{ gridColumn: '1 / -1' }}>
              <h3>Fecha estimada de entrega</h3>
              <span className={styles.deliveryDate}>{paymentPlan.deliveryDate}</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
