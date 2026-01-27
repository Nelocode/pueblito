import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventsSection from "@/components/EventsSection";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Eventos y Cultura | Pueblito Caribeño",
  description: "Agenda cultural, festivales y vida comunitaria en Pueblito Caribeño.",
};

export default function EventsPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Vida Cultural" 
        subtitle="Cada semana una nueva historia que contar. Descubre la agenda de Pueblito."
        bgImage="/images/portadas/Eventos.png"
      />
      
      {/* We reuse the EventsSection as it already contains the full logic requested 
          but in a real scenario we might fetch more data here */}
      <EventsSection />

      <Footer />
    </main>
  );
}
