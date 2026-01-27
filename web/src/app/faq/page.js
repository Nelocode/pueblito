import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Preguntas Frecuentes | Pueblito Caribeño",
  description: "Respuestas sobre el modelo de gestión, rentas y convivencia.",
};

const faqs = [
  {
    q: "¿Puedo gestionar mi propiedad en Airbnb por mi cuenta?",
    a: "Para garantizar la calidad de la experiencia, la seguridad y la plusvalía de la comunidad, Pueblito Caribeño opera bajo un modelo de **Rental Pool** o gestión hotelera centralizada. No se permite la gestión individual de Airbnb. Esto asegura estándares hoteleros, mayor ocupación promedio y mantenimiento impecable de tu unidad."
  },
  {
    q: "¿Cuáles son los beneficios de vivir en Vistacana?",
    a: "Como propietario en Pueblito, tienes acceso a todas las amenidades de Vistacana: playa artificial, lago de pesca, campo de golf iluminado, sendero ecológico y complejos deportivos."
  },
  {
    q: "¿Cuándo se entrega la Etapa 2?",
    a: "La segunda etapa está programada para iniciar entregas en el último trimestre de 2027. Actualmente estamos en fase de preventa con precios preferenciales."
  }
];

export default function FAQPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Preguntas Frecuentes" 
        subtitle="Resolvemos tus dudas para que inviertas con total confianza."
        bgImage="/images/portadas/FAQ.jpg"
      />
      
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        {faqs.map((item, i) => (
          <div key={i} style={{ marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '2rem' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.4rem' }}>{item.q}</h3>
            <p style={{ lineHeight: '1.6', color: '#555' }}>{item.a}</p>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
