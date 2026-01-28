"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import styles from './ConversationalForm.module.css';

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
                className={styles.completedContainer}
            >
                <div className={styles.completedIconWrapper}>
                    <Check size={40} color="white" />
                </div>
                <h2 className={styles.completedTitle}>¡Gracias!</h2>
                <p className="text-gray-600 text-lg">
                    Hemos recibido tus datos correctamente. Uno de nuestros asesores se pondrá en contacto contigo muy pronto.
                </p>
            </motion.div>
        );
    }

    const currentQ = questions[step];

    return (
        <div className={styles.container}>

            {/* Progress Bar */}
            <div className={styles.progressBarTrack}>
                <motion.div
                    className={styles.progressBarFill}
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
                    className={styles.questionContainer}
                >
                    {/* Question Title */}
                    <h2 className={styles.questionTitle}>
                        {currentQ.question}
                    </h2>

                    {/* Inputs */}
                    <div className={styles.inputWrapper}>
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
                                className={styles.textInput}
                            />
                        )}

                        {currentQ.type === 'cselect' && (
                            <div className={styles.optionsContainer}>
                                {currentQ.options.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSelectOption(opt)}
                                        className={styles.optionButton}
                                        style={{
                                            border: inputValue === opt ? '2px solid #7CBD9F' : '1px solid #ddd',
                                            backgroundColor: inputValue === opt ? 'rgba(124, 189, 159, 0.1)' : 'white',
                                            color: inputValue === opt ? '#003B5C' : '#555',
                                        }}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        )}

                        {currentQ.type === 'checkbox' && (
                            <label className={styles.checkboxLabel}>
                                <div className={styles.checkboxBox} style={{
                                    border: inputValue ? '2px solid #7CBD9F' : '2px solid #ccc',
                                    backgroundColor: inputValue ? '#7CBD9F' : 'transparent',
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
                                className={styles.errorMsg}
                            >
                                {error}
                            </motion.p>
                        )}
                    </div>

                    {/* Navigation */}
                    {currentQ.type !== 'cselect' && (
                        <div className={styles.navContainer}>
                            <button
                                onClick={handleNext}
                                className={styles.nextButton}
                            >
                                {currentQ.buttonText}
                                <ArrowRight size={20} />
                            </button>

                            <p className={styles.hintText}>
                                Presiona <strong>Enter ↵</strong> para continuar
                            </p>
                        </div>
                    )}

                </motion.div>
            </AnimatePresence>
        </div>
    );
}
