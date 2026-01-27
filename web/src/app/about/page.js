import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Grupo Paseo del Sendero"
        subtitle="Visionarios del desarrollo inmobiliario en el Caribe."
        bgImage="/images/Acercade.jpg"
      />
      <section style={{ padding: '6rem 2rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: '#2C1B18', marginBottom: '2rem' }}>Nuestra Esencia</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555', marginBottom: '2rem' }}>
          Fundado en 2005 por el visionario <strong>Alberto Vásquez</strong>, <strong>Grupo Paseo del Sendero</strong> nació con una misión clara: trascender la construcción tradicional para crear comunidades vibrantes y destinos que dejen huella.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
          Como pioneros en el desarrollo de <strong>Vistacana</strong>, hemos redefinido el estándar inmobiliario en el Caribe, fusionando diseño temático, naturaleza y bienestar. Nuestra filosofía no es solo construir viviendas, sino tejer historias y conectar personas a través de espacios que inspiran vida. Desde desarrollos ecuestres hasta condohoteles de lujo, cada proyecto lleva el sello de innovación y compromiso social que nos caracteriza.
        </p>
      </section>

      {/* Projects Carousel */}
      <section style={{ padding: '6rem 2rem', backgroundColor: '#EFECE6' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', color: '#2C1B18', marginBottom: '1rem' }}>Trayectoria y Portafolio</h2>
          <p style={{ color: '#666', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            Más de 15 años creando destinos icónicos en República Dominicana y Panamá.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { title: "Pueblito Caribeño", year: "2024", img: "/images/projects/pueblito-caribeno.jpg", type: "Cultural & Residencial", desc: "La joya de Vistacana, donde el encanto colonial cobra vida." },
              { title: "Royal Gardens", year: "2020", img: "/images/projects/royal-gardens.jpg", type: "Residencial Moderno", desc: "Solares y viviendas unifamiliares con diseño de vanguardia." },
              { title: "KAU Panamá", year: "2018", img: "/images/projects/kau-panama.jpg", type: "Master Plan Internacional", desc: "Desarrollo mixto con vistas al mar en Panamá." },
              { title: "Chukum Lagoon", year: "2023", img: "/images/projects/chukum-lagoon.jpg", type: "Condohotel de Lujo", desc: "Servicios hoteleros frente a una laguna cristalina." },
              { title: "Poúra Vinta", year: "2022", img: "/images/projects/poura-vinta.jpg", type: "Comunidad Ecuestre", desc: "Un paraíso para los amantes de la naturaleza y los caballos." },
            ].map((project, i) => (
              <div key={i} style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '220px', position: 'relative' }}>
                  <img src={project.img} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    background: 'rgba(255, 255, 255, 0.9)', color: '#2C1B18',
                    padding: '0.3rem 0.8rem', borderRadius: '50px',
                    fontSize: '0.8rem', fontWeight: 'bold'
                  }}>
                    {project.year}
                  </span>
                </div>
                <div style={{ padding: '2rem', textAlign: 'left', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.75rem', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>{project.type}</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', color: '#2C1B18', fontSize: '1.6rem', margin: '0.5rem 0 1rem' }}>{project.title}</h3>
                  <p style={{ color: '#666', lineHeight: '1.5', fontSize: '0.95rem', flex: 1 }}>{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Responsibility Section */}
      <section style={{ padding: '6rem 2rem', backgroundColor: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: '#2C1B18', marginBottom: '1.5rem' }}>Fundación Paseo del Sendero</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '2rem' }}>
            Creemos en devolver a la comunidad lo que ella nos brinda. A través de nuestra fundación, impulsamos iniciativas de <strong>educación, medio ambiente y bienestar social</strong>, transformando vidas más allá de nuestros proyectos inmobiliarios.
          </p>
          <a href="https://paseodelsendero.com/fundacion/" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block',
            backgroundColor: '#2C1B18',
            color: '#fff',
            padding: '1rem 2rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            marginTop: '1rem',
            transition: 'background-color 0.3s ease'
          }}>
            Visitar Sitio Fundación
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
