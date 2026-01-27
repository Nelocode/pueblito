"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar } from 'lucide-react';
import styles from './EventsSection.module.css';

const events = [
  {
    id: 1,
    title: "Confluencias",
    date: "Enero 2026",
    category: "Música",
    img: "/images/events/Confluencias.jpg",
    description: "Una fusión de ritmos y expresiones artísticas al atardecer.",
  },
  {
    id: 2,
    title: "Selva Doméstica",
    date: "Febrero 2026",
    category: "Arte",
    img: "/images/events/Selva Domestica.jpg",
    description: "Explora la relación entre la naturaleza salvaje y el hogar.",
  },
  {
    id: 3,
    title: "Cacicazgo",
    date: "Marzo 2026",
    category: "Danza",
    img: "/images/events/Cacicazgo.jpg",
    description: "Honorando nuestras raíces taínas a través de la danza contemporánea.",
  },
  {
    id: 4,
    title: "Cine al Aire Libre",
    date: "Todos los Jueves",
    category: "Cine",
    img: "/images/events/Cine al Aire Libre.jpg",
    description: "Clásicos del cine bajo las estrellas en la Plaza Central.",
  },
  {
    id: 5,
    title: "Día de la Altagracia",
    date: "21 Enero",
    category: "Tradición",
    img: "/images/events/Altagracia.jpg",
    description: "Celebración de Nuestra Señora de la Altagracia.",
    isPast: true,
  },
  {
    id: 6,
    title: "Historia del Tiempo",
    date: "Evento Pasado",
    category: "Historia",
    img: "/images/events/HistoriaTiempo.jpg",
    description: "Celebramos la historia que marca el tiempo.",
    isPast: true,
  }
];

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filterMode, setFilterMode] = useState('all'); // 'all', 'upcoming', 'category'
  const [activeCategory, setActiveCategory] = useState(null);

  // Get unique categories
  const categories = [...new Set(events.filter(e => !e.isPast).map(e => e.category))];

  const filteredEvents = events.filter(event => {
    if (filterMode === 'all') return true;
    if (filterMode === 'upcoming') return !event.isPast;
    if (filterMode === 'category') return !event.isPast && event.category === activeCategory;
    return true;
  });

  return (
    <section className={styles.eventsSection} id="eventos">
      <h2 className={styles.title}>Eventos & Cultura</h2>
      <p className={styles.subtitle}>Una agenda viva de arte, música y comunidad.</p>

      {/* Filters */}
      <div className={styles.filterBar}>
        <button
          className={`${styles.filterButton} ${filterMode === 'all' ? styles.active : ''}`}
          onClick={() => { setFilterMode('all'); setActiveCategory(null); }}
        >
          Todos
        </button>
        <button
          className={`${styles.filterButton} ${filterMode === 'upcoming' ? styles.active : ''}`}
          onClick={() => { setFilterMode('upcoming'); setActiveCategory(null); }}
        >
          Próximos
        </button>

        <div className={styles.categoryWrapper}>
          <span className={styles.categoryLabel}>Categorías:</span>
          <div className={styles.categoryList}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.categoryPill} ${filterMode === 'category' && activeCategory === cat ? styles.activePill : ''}`}
                onClick={() => { setFilterMode('category'); setActiveCategory(cat); }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        <AnimatePresence mode='popLayout'>
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              className={`${styles.card} ${event.isPast ? styles.pastEvent : ''}`}
              layoutId={`card-${event.id}`}
              onClick={() => setSelectedEvent(event)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={styles.imageOverlay}>
                <span className={styles.dateBadge}>{event.date}</span>
                {event.category && <span className={styles.categoryBadge}>{event.category}</span>}
              </div>
              <Image
                src={event.img}
                alt={event.title}
                fill
                className={styles.image}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.cardFooter}>
                <h3>{event.title}</h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <div className={styles.modalOverlay} onClick={() => setSelectedEvent(null)}>
            <motion.div
              className={styles.modalContent}
              layoutId={`card-${selectedEvent.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={() => setSelectedEvent(null)}
              >
                <X size={24} />
              </button>

              <div className={styles.modalImageContainer}>
                <Image
                  src={selectedEvent.img}
                  alt={selectedEvent.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div className={styles.modalHeader}>
                <span className={styles.modalCategory}>{selectedEvent.category}</span>
                <h3 className={styles.modalTitle}>{selectedEvent.title}</h3>
              </div>

              <span className={styles.modalDate}>{selectedEvent.date}</span>
              <p className={styles.modalDescription}>{selectedEvent.description}</p>

              <div className={styles.modalActions}>
                <button className={styles.actionButton}>
                  <Calendar size={18} /> Agregar al Calendario
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventsSection;
