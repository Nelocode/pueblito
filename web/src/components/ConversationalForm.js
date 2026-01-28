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
        type: 'cselect', // Custom select
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
            // Focus input on step change
            setTimeout(() => inputRef.current?.focus(), 500);
        }
        // Reset input value for new step if it's text-based
        const existingValue = formData[questions[step].id];
        setInputValue(existingValue || "");
        setError("");
    }, [step]);

    const handleNext = () => {
        // Basic validation
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

        // Save Data
        setFormData(prev => ({ ...prev, [currentQ.id]: inputValue }));

        // Move next or finish
        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            handleSubmit();
        }
    };

    const handleSelectOption = (option) => {
        setInputValue(option);
        // Auto advance for single select? 
        // Let's create a slight delay for better UX
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
        // Here we would typically send to an API
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
                className="w-full max-w-lg mx-auto bg-white p-12 rounded-[20px] shadow-xl text-center"
            >
                <div className="w-20 h-20 bg-[#7CBD9F] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={40} color="white" />
                </div>
                <h2 className="text-3xl font-heading text-[#003B5C] mb-4">¡Gracias!</h2>
                <p className="text-gray-600 text-lg">
                    Hemos recibido tus datos correctamente. Uno de nuestros asesores se pondrá en contacto contigo muy pronto.
                </p>
            </motion.div>
        );
    }

    const currentQ = questions[step];

    return (
        <div className="w-full max-w-2xl mx-auto min-h-[400px] flex flex-col justify-center">

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-200 rounded-full mb-12 overflow-hidden">
                <motion.div
                    className="h-full bg-[#7CBD9F]"
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
                    className="flex flex-col gap-6"
                >
                    <h2 className="text-3xl md:text-4xl font-heading text-[#003B5C] leading-tight">
                        {currentQ.question}
                    </h2>

                    {/* Inputs */}
                    <div className="w-full">
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
                                className="w-full bg-transparent border-b-2 border-gray-300 py-4 text-2xl text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#7CBD9F] transition-colors font-body"
                            />
                        )}

                        {currentQ.type === 'cselect' && (
                            <div className="flex flex-col gap-3 mt-4">
                                {currentQ.options.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSelectOption(opt)}
                                        className={`text-left p-4 rounded-xl border-2 transition-all text-lg font-medium
                      ${inputValue === opt
                                                ? 'border-[#7CBD9F] bg-[#7CBD9F]/10 text-[#003B5C]'
                                                : 'border-gray-200 hover:border-[#7CBD9F]/50 text-gray-600'
                                            }
                    `}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        )}

                        {currentQ.type === 'checkbox' && (
                            <label className="flex items-start gap-4 mt-4 cursor-pointer group">
                                <div className={`
                    w-6 h-6 rounded border-2 flex items-center justify-center shrink-0 mt-1 transition-colors
                    ${inputValue ? 'bg-[#7CBD9F] border-[#7CBD9F]' : 'border-gray-300 group-hover:border-[#7CBD9F]'}
                 `}>
                                    {inputValue && <Check size={16} color="white" />}
                                </div>
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={!!inputValue}
                                    onChange={(e) => {
                                        setInputValue(e.target.checked);
                                        setError("");
                                    }}
                                />
                                <span className="text-lg text-gray-600 leading-relaxed">{currentQ.text}</span>
                            </label>
                        )}

                        {error && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 mt-3 text-sm font-medium"
                            >
                                {error}
                            </motion.p>
                        )}
                    </div>

                    {/* Navigation */}
                    {currentQ.type !== 'cselect' && (
                        <div className="mt-8">
                            <button
                                onClick={handleNext}
                                className="
                   inline-flex items-center gap-2 
                   bg-[#003B5C] text-white px-8 py-4 rounded-full 
                   text-xl font-bold hover:bg-[#D4AF37] transition-colors
                   shadow-lg
                "
                            >
                                {currentQ.buttonText}
                                <ArrowRight size={20} />
                            </button>

                            <p className="text-gray-400 text-sm mt-4">
                                Presiona <strong>Enter ↵</strong> para continuar
                            </p>
                        </div>
                    )}

                    {currentQ.type === 'cselect' && (
                        <div className="h-4"></div> // Spacer
                    )}

                </motion.div>
            </AnimatePresence>
        </div>
    );
}
