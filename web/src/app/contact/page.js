import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Contacto" 
        subtitle="Estamos listos para asesorarte en tu inversión de vida."
        bgImage="/images/Foto-Pueblito-Atarddecer.jpg"
      />
      <section style={{ padding: '4rem 2rem', maxWidth: '600px', margin: '0 auto' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <input type="text" placeholder="Nombre Completo" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ddd' }} />
          <input type="email" placeholder="Correo Electrónico" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ddd' }} />
          <textarea placeholder="Mensaje" rows="5" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ddd' }}></textarea>
          <button style={{ padding: '1rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}>Enviar Mensaje</button>
        </form>
      </section>
      <Footer />
    </main>
  );
}
