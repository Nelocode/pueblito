"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const questions = [
    {
        id: 'name',
        type: 'text',
        question: 'Para empezar, ¿Cuál es tu nombre?',
        placeholder: 'Escribe tu nombre...',
        buttonText: 'Siguiente'
    },
    {
        id: 'lastname',
        type: 'text',
        question: '¿Y tus apellidos?',
        placeholder: 'Escribe tus apellidos...',
        buttonText: 'Siguiente'
    },
    {
        id: 'phone',
        type: 'tel',
        question: 'Déjanos tu WhatsApp para contactarte.',
        placeholder: '+1 (123) 456-7890',
        buttonText: 'Siguiente'
    },
    {
        id: 'email',
        type: 'email',
        question: '¿Cuál es tu correo electrónico?',
        placeholder: 'ejemplo@correo.com',
        buttonText: 'Siguiente'
    },
    {
        id: 'country',
        type: 'text',
        question: '¿En qué país resides actualmente?',
        placeholder: 'Ej: República Dominicana, USA, España...',
        buttonText: 'Siguiente'
    },
    {
        id: 'interest',
        type: 'cselect',
        question: '¿Qué estás buscando en Pueblito Caribeño?',
        options: [
            "Compra por inversión",
            "Compra para vivienda primaria",
            "Compra para vivienda secundaria",
            "Operar como Broker",
            "Otro"
        ],
        buttonText: 'Siguiente'
    },
    {
        id: 'budget',
        type: 'cselect',
        question: '¿Cuál es tu rango de presupuesto aproximado?',
        options: [
            "Menos de USD$150.000",
            "Entre USD$150.000 - USD$199.999",
            "Entre USD$199.999 - USD$299.999",
            "Más de USD$ 300.000",
            "Ninguna."
        ],
        buttonText: 'Casi listo...'
    },
    {
        id: 'policy',
        type: 'checkbox',
        question: 'Por último, necesitamos tu consentimiento.',
        text: 'Acepto la política de tratamiento de datos personales y quiero recibir información sobre el proyecto.',
        buttonText: 'Enviar Solicitud'
    }
];

export default function ConversationalForm() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);

    const inputRef = useRef(null);

    useEffect(() => {
        if (questions[step].type === 'text' || questions[step].type === 'email' || questions[step].type === 'tel') {
            setTimeout(() => inputRef.current?.focus(), 500);
        }
        const existingValue = formData[questions[step].id];
        setInputValue(existingValue || "");
        setError("");
    }, [step]);

    const handleNext = () => {
        const currentQ = questions[step];

        if (currentQ.type !== 'checkbox' && !inputValue && currentQ.type !== 'cselect') {
            setError("Por favor completa este campo para continuar.");
            return;
        }

        if (currentQ.type === 'email' && !/\S+@\S+\.\S+/.test(inputValue)) {
            setError("Por favor ingresa un correo válido.");
            return;
        }

        if (currentQ.type === 'checkbox' && !inputValue) {
            setError("Debes aceptar la política para continuar.");
            return;
        }

        setFormData(prev => ({ ...prev, [currentQ.id]: inputValue }));

        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            handleSubmit();
        }
    };

    const handleSelectOption = (option) => {
        setInputValue(option);
        setFormData(prev => ({ ...prev, [questions[step].id]: option }));
        setTimeout(() => {
            if (step < questions.length - 1) {
                setStep(step + 1);
            }
        }, 300);
    };

    const handleSubmit = async () => {
        setIsCompleted(true);
        console.log("Form Data:", formData);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && questions[step].type !== 'cselect') {
            handleNext();
        }
    };

    if (isCompleted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                    width: '100%',
                    maxWidth: '500px',
                    margin: '0 auto',
                    backgroundColor: 'white',
                    padding: '3rem',
                    borderRadius: '20px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                }}
            >
                <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#7CBD9F',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto'
                }}>
                    <Check size={40} color="white" />
                </div>
                <h2 style={{ fontSize: '2rem', color: '#003B5C', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>¡Gracias!</h2>
                <p style={{ color: '#666', fontSize: '1.1rem' }}>
                    Hemos recibido tus datos correctamente. Uno de nuestros asesores se pondrá en contacto contigo muy pronto.
                </p>
            </motion.div>
        );
    }

    const currentQ = questions[step];

    return (
        <div style={{
            width: '100%',
            maxWidth: '700px',
            margin: '0 auto',
            minHeight: '500px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative'
        }}>

            {/* Progress Bar */}
            <div style={{
                width: '100%',
                height: '8px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                marginBottom: '3rem',
                overflow: 'hidden'
            }}>
                <motion.div
                    style={{
                        height: '100%',
                        backgroundColor: '#7CBD9F'
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                >
                    {/* Question Title - Using font-body for readability, bold for emphasis */}
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: '600',
                        color: '#003B5C',
                        lineHeight: '1.3',
                        fontFamily: 'var(--font-body, sans-serif)'
                    }}>
                        {currentQ.question}
                    </h2>

                    {/* Inputs */}
                    <div style={{ width: '100%' }}>
                        {(currentQ.type === 'text' || currentQ.type === 'email' || currentQ.type === 'tel') && (
                            <input
                                ref={inputRef}
                                type={currentQ.type}
                                value={inputValue}
                                onChange={(e) => {
                                    setInputValue(e.target.value);
                                    setError("");
                                }}
                                onKeyDown={handleKeyDown}
                                placeholder={currentQ.placeholder}
                                style={{
                                    width: '100%',
                                    background: 'transparent',
                                    border: 'none',
                                    borderBottom: '2px solid #ccc',
                                    padding: '1rem 0',
                                    fontSize: '1.5rem',
                                    color: '#333',
                                    outline: 'none',
                                    fontFamily: 'var(--font-body, sans-serif)',
                                    transition: 'border-color 0.3s'
                                }}
                                onFocus={(e) => e.target.style.borderBottomColor = '#7CBD9F'}
                                onBlur={(e) => e.target.style.borderBottomColor = '#ccc'}
                            />
                        )}

                        {currentQ.type === 'cselect' && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {currentQ.options.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSelectOption(opt)}
                                        className="hover-scale" // If class exists, or use inline
                                        style={{
                                            textAlign: 'left',
                                            padding: '1.2rem 1.5rem',
                                            borderRadius: '12px',
                                            border: inputValue === opt ? '2px solid #7CBD9F' : '1px solid #ddd',
                                            backgroundColor: inputValue === opt ? 'rgba(124, 189, 159, 0.1)' : 'white',
                                            color: inputValue === opt ? '#003B5C' : '#555',
                                            fontSize: '1.1rem',
                                            fontWeight: '500',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (inputValue !== opt) {
                                                e.target.style.borderColor = '#7CBD9F';
                                                e.target.style.transform = 'translateY(-2px)';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (inputValue !== opt) {
                                                e.target.style.borderColor = '#ddd';
                                                e.target.style.transform = 'translateY(0)';
                                            }
                                        }}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        )}

                        {currentQ.type === 'checkbox' && (
                            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginTop: '1rem', cursor: 'pointer' }}>
                                <div style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '4px',
                                    border: inputValue ? '2px solid #7CBD9F' : '2px solid #ccc',
                                    backgroundColor: inputValue ? '#7CBD9F' : 'transparent',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    transition: 'all 0.2s'
                                }}>
                                    {inputValue && <Check size={16} color="white" />}
                                </div>
                                <input
                                    type="checkbox"
                                    style={{ display: 'none' }}
                                    checked={!!inputValue}
                                    onChange={(e) => {
                                        setInputValue(e.target.checked);
                                        setError("");
                                    }}
                                />
                                <span style={{ fontSize: '1rem', color: '#666', lineHeight: '1.5' }}>{currentQ.text}</span>
                            </label>
                        )}

                        {error && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{ color: '#D64045', marginTop: '1rem', fontSize: '0.9rem', fontWeight: '500' }}
                            >
                                {error}
                            </motion.p>
                        )}
                    </div>

                    {/* Navigation */}
                    {currentQ.type !== 'cselect' && (
                        <div style={{ marginTop: '2rem' }}>
                            <button
                                onClick={handleNext}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.8rem',
                                    backgroundColor: '#003B5C',
                                    color: 'white',
                                    padding: '1rem 2.5rem',
                                    borderRadius: '50px',
                                    fontSize: '1.1rem',
                                    fontWeight: '700',
                                    border: 'none',
                                    cursor: 'pointer',
                                    boxShadow: '0 10px 20px rgba(0, 59, 92, 0.2)',
                                    transition: 'transform 0.2s, background-color 0.2s'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'scale(1.05)';
                                    e.target.style.backgroundColor = '#002a42';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                    e.target.style.backgroundColor = '#003B5C';
                                }}
                            >
                                {currentQ.buttonText}
                                <ArrowRight size={20} />
                            </button>

                            <p style={{ color: '#999', fontSize: '0.9rem', marginTop: '1.5rem' }}>
                                Presiona <strong>Enter ↵</strong> para continuar
                            </p>
                        </div>
                    )}

                </motion.div>
            </AnimatePresence>
        </div>
    );
}
