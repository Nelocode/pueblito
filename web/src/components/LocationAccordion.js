"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

    return (
        <div className="w-full max-w-[1200px] h-[600px] mx-auto flex gap-4 overflow-hidden rounded-[20px] shadow-2xl relative">
            {locations.map((location) => {
                const isActive = activeId === location.id;
                // If no item is active (hovered), both share space equally. 
                // If one is active, it takes more space.
                // We can handle this with flex-grow or width.

                return (
                    <motion.div
                        key={location.id}
                        layout
                        onMouseEnter={() => setActiveId(location.id)}
                        onMouseLeave={() => setActiveId(null)}
                        onClick={() => setActiveId(activeId === location.id ? null : location.id)} // Mobile tap support
                        initial={{ flex: 1 }}
                        animate={{
                            flex: activeId ? (isActive ? 3 : 1) : 1,
                            filter: activeId && !isActive ? "brightness(0.7)" : "brightness(1)"
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="relative h-full cursor-pointer overflow-hidden rounded-[20px] bg-gray-100 group"
                    >
                        <Image
                            src={location.image}
                            alt={location.alt}
                            fill
                            className="object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <motion.div
                                initial={false}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className={`p-2 rounded-full ${isActive ? "bg-[#7CBD9F] text-white" : "bg-white/20 text-white backdrop-blur-sm"} transition-colors duration-300`}>
                                        <MapPin size={24} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white font-heading leading-none">
                                        {location.title}
                                    </h3>
                                </div>

                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{
                                        opacity: isActive ? 1 : 0.7,
                                        height: "auto"
                                    }}
                                    className="text-white/90 text-lg font-light pl-[3.25rem]"
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
