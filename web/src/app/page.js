import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import EventsSection from "@/components/EventsSection";
import SalesSection from "@/components/SalesSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Carousel />
      <EventsSection />
      <SalesSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
