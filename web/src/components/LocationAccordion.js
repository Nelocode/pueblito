"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";

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
        }
    ];

    const containerStyle = {
        display: 'flex',
        width: '100%',
        maxWidth: '1200px',
        height: '600px', // Fixed height to prevent collapse
        margin: '0 auto',
        gap: '1rem',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        position: 'relative',
        backgroundColor: '#fff' // Fallback
    };

    return (
        <div style={containerStyle}>
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
                        style={{
                            position: 'relative',
                            height: '100%',
                            cursor: 'pointer',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            isolation: 'isolate' // Helps with Safari/stacking contexts
                        }}
                    >
                        <Image
                            src={location.image}
                            alt={location.alt}
                            fill
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                        />

                        {/* Gradient Overlay */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                                pointerEvents: 'none'
                            }}
                        />

                        {/* Content */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            padding: '2rem'
                        }}>
                            <motion.div
                                initial={false}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                                    <div style={{
                                        padding: '0.5rem',
                                        borderRadius: '50%',
                                        backgroundColor: isActive ? '#7CBD9F' : 'rgba(255,255,255,0.2)',
                                        color: 'white',
                                        backdropFilter: 'blur(4px)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'background-color 0.3s ease'
                                    }}>
                                        <MapPin size={24} />
                                    </div>
                                    <h3 style={{
                                        fontSize: '2rem',
                                        fontWeight: '700',
                                        color: 'white',
                                        fontFamily: 'var(--font-heading, serif)',
                                        lineHeight: 1,
                                        margin: 0
                                    }}>
                                        {location.title}
                                    </h3>
                                </div>

                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{
                                        opacity: isActive ? 1 : 0.7,
                                        height: isActive ? "auto" : 0
                                    }}
                                    style={{
                                        color: 'rgba(255,255,255,0.9)',
                                        fontSize: '1.1rem',
                                        fontWeight: '300',
                                        paddingLeft: '3.5rem', // Align with text
                                        margin: 0,
                                        overflow: 'hidden'
                                    }}
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
