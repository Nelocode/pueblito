"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navigation, MapPin } from 'lucide-react';
import { useState } from "react";

export default function LivingPage() {
  const [isHovered, setIsHovered] = useState(false);

  const inspirationCities = [
    { name: "La Habana", country: "Cuba", img: "/images/Inspiracion1.jpg", color: "#F2A900" }, // Gold
    { name: "El Viejo San Juan", country: "Puerto Rico", img: "/images/Inspiracion2.jpg", color: "#D64045" }, // Red/Pink
    { name: "Cartagena", country: "Colombia", img: "/images/Inspiracion3.jpg", color: "#009B77" }, // Teal
    { name: "Santo Domingo", country: "República Dominicana", img: "/images/Inspiracion4.jpg", color: "#003087" }, // Royal Blue
    { name: "Granada", country: "Isla del Caribe", img: "/images/Inspiracion5.jpg", color: "#9C27B0" }, // Purple
    { name: "Portobelo", country: "Panamá", img: "/images/Inspiracion6.jpg", color: "#4CAF50" }, // Green
    { name: "Coro", country: "Venezuela", img: "/images/Inspiracion7.jpg", color: "#FF5722" }, // Deep Orange
    { name: "Antigua", country: "Guatemala", img: "/images/Inspiracion8_3.jpg", color: "#795548" }, // Brown
  ];

  // Colors to cycle through for icons - STRICT USE of approved palette
  const iconColors = [
    "#F2A900", // Gold
    "#D64045", // Red
    "#009B77", // Teal
    "#003087", // Navy
    "#C06C5D", // Terracotta
  ];

  const amenities = [
    { 
      title: "Plaza Comercial La Nube", 
      desc: "Ubicada sobre la avenida principal y en la entrada de Vistacana, tendrá más de 20.000 m2 de comercios y servicios, incluyendo la cadena de supermercados La Sirena, Starbucks y otras importantes marcas.", 
      img: "/images/amenities/plaza_la_nube.jpg",
      mapQuery: "Plaza La Nube Vistacana"
    },
    { 
      title: "Supermercado La Sirena", 
      desc: "Cadena de supermercados líder en República Dominicana, ofreciendo frescura, calidad y precios competitivos para toda la comunidad.", 
      img: "/images/amenities/supermercado_sirena.jpg",
      mapQuery: "Supermercado La Sirena Vistacana"
    },
    { 
      title: "Ashton School", 
      desc: "Institución educativa bilingüe de primer nivel, formando líderes con valores y excelencia académica dentro de un campus seguro.", 
      img: "/images/amenities/ashton_school.jpg",
      mapQuery: "Ashton School Vistacana"
    },
    { 
      title: "Campo de Golf", 
      desc: "Un recorrido iluminado de 9 hoyos diseñado para disfrutar del deporte en un entorno natural relajante, accesible día y noche.", 
      img: "/images/amenities/campo_golf.jpg",
      mapQuery: "Vistacana Golf Course"
    },
    { 
      title: "Restaurante Playa Vistacana", 
      desc: "Gastronomía exquisita frente al lago, ideal para compartir momentos inolvidables con vistas espectaculares.", 
      img: "/images/amenities/restaurante_vistacana.png",
      mapQuery: "Restaurante Playa Vistacana"
    },
    { 
      title: "La Isla", 
      desc: "Un oasis recreativo en el lago para practicar deportes acuáticos, pesca o simplemente desconectar en plena naturaleza.", 
      img: "/images/amenities/la_isla.jpg",
      mapQuery: "Vistacana Beach"
    },
    { 
      title: "Gold's Gym", 
      desc: "Gimnasio de clase mundial equipado con la última tecnología para mantener un estilo de vida activo y saludable.", 
      img: "/images/amenities/golds_gym.jpg",
      mapQuery: "Golds Gym Vistacana"
    },
    { 
      title: "Club Deportivo", 
      desc: "Espacio integral con canchas y áreas de entrenamiento para diversas disciplinas, fomentando el deporte y la convivencia.", 
      img: "/images/amenities/club_deportivo.jpg",
      mapQuery: "Vistacana Sports Club"
    },
     { 
      title: "Club House", 
      desc: "El punto de encuentro social por excelencia, con amenidades exclusivas para celebrar y compartir en comunidad.", 
      img: "/images/amenities/club_house.jpg",
      mapQuery: "Vistacana Club House"
    },
    { 
      title: "Parque Paseo del Sendero", 
      desc: "Áreas verdes diseñadas para el esparcimiento familiar, caminatas al aire libre y conexión con el entorno natural.", 
      img: "/images/amenities/parque_sendero.jpg",
      mapQuery: "Vistacana Paseo del Sendero"
    },
    { 
      title: "Bru Specialty Coffee", 
      desc: "El lugar perfecto para disfrutar de un café de especialidad y buena compañía en un ambiente acogedor.", 
      img: "/images/amenities/bru_coffee.jpg",
      mapQuery: "Bru Coffee Vistacana"
    },
    { 
      title: "Farmacia y Servicios", 
      desc: "Conveniencia total con farmacia, estación de servicio y comercios esenciales a solo pasos de tu hogar.", 
      img: "/images/amenities/farmacia_estacion.jpg",
      mapQuery: "Vistacana Farmacia"
    },
  ];

  return (
    <main style={{ backgroundColor: '#F9F7F2', overflowX: 'hidden' }}>
      <Navbar />
      <PageHeader 
        title="Vivir en Pueblito" 
        subtitle="Más que metros cuadrados, un estilo de vida incomparable."
        bgImage="/images/portadas/Vivir.png"
      />
      
      {/* 1. Intro Section */}
      <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', justifyContent: 'center' }}>
          
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             style={{ textAlign: 'left', flex: '0 0 auto' }}
          >
            <div style={{ position: 'relative', lineHeight: 0.8 }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '9rem', color: '#7CBD9F', display: 'block' }}>Vive</span>
              <span style={{ 
                fontFamily: 'var(--font-body)', 
                fontSize: '2.5rem', 
                color: '#7CBD9F', 
                fontWeight: '300', 
                display: 'block', 
                marginTop: '0.5rem', 
                marginLeft: '0.5rem',
                letterSpacing: '1px'
              }}>
                los colores<br/>del Caribe
              </span>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             style={{ fontSize: '1.05rem', lineHeight: '1.9', color: '#555', flex: '1', minWidth: '300px', maxWidth: '600px' }}
          >
            <p style={{ marginBottom: '1.5rem' }}>
              Pueblito Caribeño nace inspirado en las zonas coloniales más representativas del Caribe, lugares donde la historia se encuentra con la vida cotidiana y el colorido transforma cada rincón en una obra de arte viva. 
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Cada calle rinde homenaje a un tesoro colonial, invitando a residentes y visitantes a recorrer un mapa de memorias y sensaciones sin salir de Punta Cana.
            </p>
            <p>
              Aquí, las plazas son lugares de encuentro, los balcones cuentan historias y la naturaleza se integra armónicamente con la vida urbana. Un entorno con alma para vivir, disfrutar y compartir.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 2. Inspiration Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#EFECE6' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: '#555' }}>Nuestra inspiración</h2>
             <p style={{ color: '#777', marginTop: '0.5rem' }}>Cada calle está inspirada en icónicas zonas del Caribe</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {inspirationCities.map((city, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div style={{ position: 'relative', height: '300px', marginBottom: '1rem', borderRadius: '4px', overflow: 'hidden' }}>
                  <Image src={city.img} alt={city.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <h3 style={{ color: city.color, fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.2rem' }}>{city.name}</h3>
                <p style={{ color: '#666', fontSize: '1rem' }}>{city.country}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Location Section */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', color: '#7CBD9F', marginBottom: '2rem' }}>Ubicación</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto', color: '#666' }}>
          Estratégicamente ubicado en el corazón de Vistacana, el destino más vibrante de Punta Cana.
        </p>

        <div 
          style={{ 
            position: 'relative', 
            width: '100%', 
            maxWidth: '1200px', 
            height: '500px', 
            margin: '0 auto', 
            borderRadius: '20px', 
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
          }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15124.78657685601!2d-68.42152865!3d18.614602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea8eb66b1a03009%3A0xc6c4f8007e60b1e!2sVISTACANA!5e0!3m2!1sen!2sdo!4v1709240000000!5m2!1sen!2sdo" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* 4. Amenities Section + VIDEO Integrated */}
      <section style={{ padding: '6rem 2rem', backgroundColor: '#F9F7F2' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
           <h2 style={{ 
             fontFamily: 'var(--font-heading)', 
             fontSize: '4rem', 
             color: '#7CBD9F', 
             marginBottom: '1rem',
             textAlign: 'center' 
           }}>
             Vive cerca de todo
           </h2>
           <div style={{ width: '60px', height: '4px', background: 'var(--secondary)', margin: '0 auto 3rem auto' }}></div>
        </div>
      </section>

      {/* 5. Video Section - Full Width */}
      <section style={{ width: '100%', backgroundColor: '#F9F7F2', paddingBottom: '0' }}>
           {/* VIDEO PLACEMENT - AutoPlay & No Controls */}
           <div style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden' }}>
              <iframe 
                src="https://www.youtube.com/embed/Fad9JA7dtz8?autoplay=1&mute=1&controls=0&loop=1&playlist=Fad9JA7dtz8&rel=0" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                style={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  width: '100vw', 
                  height: '100vh', 
                  transform: 'translate(-50%, -50%) scale(1.3)', 
                  pointerEvents: 'none' 
                }} 
              ></iframe>
           </div>
      </section>

      {/* 6. Directory List - Full Width Split Screen */}
      <section style={{ width: '100%', backgroundColor: '#F9F7F2' }}>
           <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
             {amenities.map((item, index) => {
               // Cycle colors
               const iconColor = iconColors[index % iconColors.length];
               const isEven = index % 2 === 0;
               
               return (
               <div 
                 key={index}
                 style={{ 
                   display: 'grid', 
                   gridTemplateColumns: '1fr 1fr', 
                   width: '100%',
                   minHeight: '600px', // Tall sections
                 }}
               >
                 {/* Text Content Side */}
                 <motion.div 
                   initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, amount: 0.3 }}
                   transition={{ duration: 0.8 }}
                   style={{ 
                     order: isEven ? 1 : 2, 
                     backgroundColor: iconColor, 
                     color: 'white',
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     padding: '4rem 6rem',
                     textAlign: 'left',
                     position: 'relative'
                   }}
                 >
                   
                   {/* Icon - Simplified, No Circle */}
                   <div style={{ 
                     marginBottom: '2rem',
                     width: '60px',
                     height: '60px',
                     position: 'relative'
                   }}>
                      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <Image 
                          src="/images/amenities/amenity_icon.svg" 
                          alt="icon" 
                          fill 
                          style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} 
                        />
                      </div>
                   </div>

                   <h3 style={{ fontSize: '3.5rem', fontWeight: '400', fontFamily: 'var(--font-heading)', lineHeight: '1.2', marginBottom: '1.5rem', color: 'white' }}>{item.title}</h3>
                   <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)', marginBottom: '3rem', maxWidth: '500px' }}>{item.desc}</p>

                   {/* Action Buttons: White style */}
                   <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <a 
                        href={`https://waze.com/ul?q=${encodeURIComponent(item.mapQuery)}`} 
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ 
                          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                          background: 'white', color: iconColor, padding: '0.8rem 2rem', 
                          borderRadius: '50px', textDecoration: 'none', fontSize: '1rem', fontWeight: 'bold',
                          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                          transition: 'transform 0.2s',
                        }}
                      >
                         <Navigation size={18} />
                         Ir con Waze
                      </a>
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapQuery)}`} 
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ 
                          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                          background: 'transparent', color: 'white', padding: '0.8rem 2rem', 
                          border: '2px solid white',
                          borderRadius: '50px', textDecoration: 'none', fontSize: '1rem', fontWeight: 'bold',
                          transition: 'background 0.2s'
                        }}
                      >
                         <MapPin size={18} />
                         Ir con Maps
                      </a>
                   </div>
                 </motion.div>
                 
                 {/* Image Side - Full Cover */}
                 <div style={{ 
                   order: isEven ? 2 : 1, 
                   position: 'relative', 
                   height: '100%', 
                   minHeight: '600px'
                 }}>
                   <Image src={item.img} alt={item.title} fill style={{ objectFit: 'cover' }} />
                 </div>
               </div>
             )})}
           </div>
      </section>

      {/* 6. Owner Service Center Section */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Banner */}
        <div style={{ position: 'relative', width: '100%', height: '500px' }}>
          <Image 
            src="/images/centro_servicio_banner_v2.jpg" 
            alt="Centro de Servicio al Propietario" 
            fill 
            style={{ objectFit: 'cover', objectPosition: 'center' }} 
          />

          {/* Optional: If text is already in image, we don't need overlay. The user's image HAS text. */}
        </div>

        {/* Teal Info Strip */}
        <div style={{ backgroundColor: '#98cbb4', padding: '6rem 2rem', color: 'white', textAlign: 'center' }}>
           <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <p style={{ 
                fontSize: '1.25rem', 
                lineHeight: '1.8', 
                marginBottom: '5rem',
                fontWeight: '500' // slightly bolder for readability on color
              }}>
                En nuestro Centro de Servicio al Propietario acompañamos a nuestros propietarios y residentes en cada paso de su experiencia en Pueblito Caribeño. No se trata solo de adquirir una propiedad, sino de sentirte respaldado desde el primer día, con un equipo dispuesto a resolver tus dudas, atender tus solicitudes y guiarte en tu proceso de integración a la comunidad. Queremos que ocupes más que un espacio: queremos que vivas Pueblito con plenitud, tranquilidad y comodidad. Por eso, nuestro Centro de Servicio está diseñado para que disfrutes tu nuevo hogar sin preocupaciones y con la certeza de que siempre tendrás a alguien que te acompañe en cada detalle.
              </p>

              {/* Icons Grid */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem' }}>
                 {[
                   { icon: "🛎️", label: "Concierge" },
                   { icon: "🛠️", label: "Mantenimiento" },
                   { icon: "📦", label: "Recepción de\npaquetes" },
                   { icon: "📅", label: "Reservas" },
                   { icon: "🕒", label: "Servicio 24/7" },
                 ].map((service, i) => (
                   <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '140px' }}>
                      <div style={{ 
                        width: '80px', 
                        height: '80px', 
                        borderRadius: '50%', 
                        border: '3px solid white', 
                        display: 'grid', 
                        placeItems: 'center',
                        fontSize: '2.5rem',
                        background: 'rgba(255,255,255,0.1)'
                      }}>
                        {/* Using emoji as placeholders, but ideally SVGs. The user provided an image with specific icons. 
                            I will try to match them with emojis or simple SVGs if possible, or just circles for now. 
                            Let's use SVGs for a premium look if I can, or Emojis for speed and update later.
                            Given "WOW" factor required, emojis are risky. Let's use simple SVG paths.
                        */}
                        {i === 0 && <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>}
                        {i === 1 && <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>}
                        {i === 2 && <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>}
                        {i === 3 && <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>}
                        {i === 4 && <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>}
                      </div>
                      <span style={{ fontSize: '1.1rem', fontWeight: '500', whiteSpace: 'pre-line' }}>{service.label}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
