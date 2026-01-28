"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import styles from './LocationAccordion.module.css';

export default function LocationAccordion() {
    const [activeId, setActiveId] = useState(null);

    const locations = [
        {
            id: "dr",
            title: "República Dominicana",
            image: "/images/mapa_republica.png",
            alt: "Mapa República Dominicana",
            description: "Ubicación estratégica en el Caribe"
        },
        {
            id: "vistacana",
            title: "Vistacana",
            image: "/images/mapa_vistacana.png",
            alt: "Mapa Vistacana",
            description: "En el corazón de la comunidad"
        },
        {
            id: "master-plan",
            title: "Master Plan",
            image: "/images/maps/planta_localizacion.png",
            alt: "Master Plan Pueblito Caribeño",
            description: "Distribución general del proyecto"
        }
    ];

    return (
        <div className={styles.container}>
            {locations.map((location) => {
                const isActive = activeId === location.id;

                return (
                    <motion.div
                        key={location.id}
                        layout
                        onMouseEnter={() => setActiveId(location.id)}
                        onMouseLeave={() => setActiveId(null)}
                        onClick={() => setActiveId(activeId === location.id ? null : location.id)}
                        initial={{ flex: 1 }}
                        animate={{
                            flex: activeId ? (isActive ? 3 : 1) : 1,
                            filter: activeId && !isActive ? "brightness(0.7)" : "brightness(1)"
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className={styles.panel}
                    >
                        <Image
                            src={location.image}
                            alt={location.alt}
                            fill
                            className={styles.image}
                        />

                        <div className={styles.overlay} />

                        <div className={styles.contentWrapper}>
                            <motion.div
                                initial={false}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={styles.header}>
                                    <div className={`${styles.iconWrapper} ${isActive ? styles.iconWrapperActive : ''}`}>
                                        <MapPin size={24} />
                                    </div>
                                    <h3 className={styles.title}>
                                        {location.title}
                                    </h3>
                                </div>

                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{
                                        opacity: isActive ? 1 : 0.7,
                                        height: isActive ? "auto" : 0
                                    }}
                                    className={styles.description}
                                >
                                    {location.description}
                                </motion.p>
                            </motion.div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
