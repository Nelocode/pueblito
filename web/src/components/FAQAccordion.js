"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQAccordion({ items }) {
    // Allow multiple open items if needed, but standard accordion usually interacts one by one. 
    // User didn't specify, but screenshot looks like independent toggles.
    // Let's use independent state for each item (multiple can be open).
    // Actually, standard behavior is often one at a time for cleanliness. 
    // I'll make it independent for flexibility unless it gets too long.
    // Let's stick to independent state (multiple open allowed).

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '900px', margin: '0 auto' }}>
            {items.map((item, index) => (
                <FAQItem key={index} q={item.q} a={item.a} />
            ))}
        </div>
    );
}

function FAQItem({ q, a }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.2rem 1.5rem',
                    backgroundColor: '#98cbb4', // Teal color from screenshot/branding
                    color: '#003B5C', // Dark blue text for contrast/brand
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    borderRadius: '4px', // Slight rounding
                    transition: 'background-color 0.2s',
                    fontFamily: 'var(--font-body, "Montserrat", sans-serif)',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {isOpen ? <Minus size={20} color="#003B5C" /> : <Plus size={20} color="#003B5C" />}
                    <span>{q}</span>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{
                            padding: '1.5rem',
                            backgroundColor: 'rgba(152, 203, 180, 0.2)', // Light teal tint
                            borderLeft: '4px solid #98cbb4',
                            color: '#444',
                            lineHeight: '1.6',
                            fontFamily: 'var(--font-body, "Montserrat", sans-serif)',
                            fontSize: '1rem'
                        }}>
                            {a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
