import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Master Plan | Pueblito Caribeño",
  description: "Explora la distribución de nuestro proyecto y su ubicación en Vistacana.",
};

export default function MasterPlanPage() {
  return (
    <main style={{ backgroundColor: '#E3D5C3', minHeight: '100vh' }}>
      <Navbar />
      
      {/* Subtle Header */}
      <PageHeader 
        title="Master Plan" 
        subtitle="Una visión integral de nuestra comunidad."
        bgImage="/images/Pueblito_planes.jpg"
      />
      
      <section style={{ padding: '4rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', height: '600px', margin: '0 auto 3rem auto', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <Image 
              src="/images/portadas/Masterplan.png" 
              alt="Master Plan Pueblito Caribeño" 
              fill 
              style={{ objectFit: 'contain' }}
            />
         </div>

         {/* CTA Button */}
         <a 
           href="/invertir"
           className="btn-primary"
         >
           Invertir ahora
         </a>
      </section>

      <Footer />
    </main>
  );
}
