import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "Preguntas Frecuentes | Pueblito Caribeño",
  description: "Respuestas sobre el modelo de gestión, rentas y convivencia.",
};

const faqs = [
  {
    q: "¿Qué es Pueblito Caribeño y dónde está ubicado?",
    a: "Pueblito Caribeño es un proyecto residencial y comercial inspirado en la arquitectura colonial del Caribe. Está ubicado dentro de Vistacana, en Punta Cana, a solo minutos del aeropuerto internacional y de las playas más reconocidas del país."
  },
  {
    q: "¿Qué hace único a Pueblito Caribeño?",
    a: "Su encanto está en la mezcla entre historia y modernidad: calles adoquinadas, plazas coloridas, arte en cada rincón y un estilo de vida que combina cultura, naturaleza y comunidad."
  },
  {
    q: "¿Qué amenidades ofrece el proyecto?",
    a: "Los residentes disfrutan acceso a todas las amenidades de Vistacana® como playas artificiales, lagos de agua cristalina, campo de golf, senderos naturales, plaza comercial, restaurantes, colegio bilingüe, centro deportivo y seguridad 24/7, además del vibrante Art District, el Centro Cultural y comercios al interior de Pueblito Caribeño."
  },
  {
    q: "¿Puedo comprar si soy extranjero?",
    a: "¡Sí! La ley dominicana permite la compra de propiedades a extranjeros con los mismos derechos que un ciudadano local. Solo necesitas tu pasaporte vigente y cumplir con los pasos de compra establecidos."
  },
  {
    q: "¿Qué opciones de financiamiento existen?",
    a: "Ofrecemos facilidades de pago directo con el desarrollador (20-30-50%) y acceso a créditos hipotecarios con bancos dominicanos e internacionales aliados. Nuestro equipo puede asesorarte durante todo el proceso."
  },
  {
    q: "¿Cómo reservo un apartamento?",
    a: "Puedes reservar con un pequeño depósito inicial de solo USD $1.000 para asegurar la unidad que elijas. Luego se formaliza la promesa de venta con un 20% del valor de la propiedad, y se define el calendario de pagos según el plan de construcción."
  },
  {
    q: "¿Cuál es el potencial de inversión?",
    a: "Pueblito Caribeño ofrece alta plusvalía por su ubicación en Vistacana y su concepto único. Además, permite rentas vacacionales o de largo plazo, brindando atractivos retornos de inversión."
  },
  {
    q: "¿Puedo alquilar mi propiedad?",
    a: "Sí. Hay posibilidad de renta de largo plazo (mínimo 60 días) en la mayoría de las unidades, y en otras ubicadas en las plazas internas, puedes acceder a la gestión de renta corta hotelera, a través de nuestros aliados de administración y renta turística, que se encargan de todo: promoción, limpieza y atención a huéspedes."
  },
  {
    q: "¿Cuándo se entregan los apartamentos?",
    a: "La primera etapa se viene entregando desde el mes de agosto de 2025 hasta el primer trimestre de 2026. La Etapa 2 está en venta actualmente, con entregas estimadas para diciembre de 2027."
  },
  {
    q: "¿Qué incluye la cuota de mantenimiento?",
    a: "Incluye la seguridad 24/7, servicio de concierge, mantenimiento de zonas comunes, jardinería, iluminación, limpieza de calles y acceso a las amenidades del complejo."
  },
  {
    q: "¿De qué valor será la cuota de condominio o administración?",
    a: "Está previsto que dicha cuota esté alrededor de los 2.5 dólares por metro cuadrado. El monto final será definido en el último trimestre de 2025."
  },
  {
    q: "¿Qué actividades culturales se realizan?",
    a: "Pueblito Caribeño celebra la vida y la cultura con exposiciones de arte, activaciones de música en vivo, festivales, cine al aire libre, talleres de arte y ferias locales, todo dentro de su encantador entorno colonial."
  },
  {
    q: "¿Puedo obtener residencia si compro una propiedad?",
    a: "Sí. La República Dominicana ofrece programas de residencia por inversión (mínimo USD $200.000) inmobiliaria, una opción atractiva para quienes buscan establecerse o invertir a largo plazo en el país."
  },
  {
    q: "¿Con quién puedo hablar para más información?",
    a: "Puedes contactarnos directamente a través del enlace de Whatsapp en este sitio web o comunicarte con nuestros asesores para recibir atención personalizada y agendar tu visita a Pueblito Caribeño."
  },
  {
    q: "¿Qué distancia hay a la playa, al aeropuerto y a los principales puntos de Punta Cana?",
    a: "El aeropuerto internacional de Punta Cana, está a 25 minutos de Pueblito Caribeño. Las playas públicas de Punta Cana como El Cortecito o Jelly Fish, están a tan solo unos 15 minutos. El nuevo supermercado La Sirena, estará en La PLaza Comercial La Nube, en el acceso 1 de Vistacana, a tan solo 5 minutos de Pueblito. Y a menos de 10 minutos podrás estar en el Downtown de Punta Cana, con más opciones de comercio."
  },
  {
    q: "¿Hay disponibilidad de estacionamientos?",
    a: "Sí, Pueblito Caribeño cuenta con celdas de parqueo para propietarios/residentes y visitantes, así como espacios exclusivos para personas con movilidad reducida, carritos de golf bicicletas y coches eléctricos."
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

      <section style={{ padding: '6rem 2rem', backgroundColor: '#F9F7F2' }}>
        <FAQAccordion items={faqs} />
      </section>

      <Footer />
    </main>
  );
}
