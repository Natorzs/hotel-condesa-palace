/*
 * TestimonialsSection — Hotel Condesa Palace Acapulco
 * Design: Infinite carousel con testimonio centrado y otros con menos brillo
 * Animación: Transiciones suaves y fluidas con easing personalizado
 */

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Viajera de Acapulco",
    rating: 5,
    text: "Excelente ubicación, a 2 minutos de la playa. Las habitaciones están renovadas y muy limpias. El personal fue muy atento. Definitivamente volvemos.",
    avatar: "MG",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Familia con niños",
    rating: 5,
    text: "La alberca es perfecta para los niños, el restaurante tiene buena comida y precios muy accesibles. Fue una experiencia increíble para toda la familia.",
    avatar: "CR",
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Pareja en viaje de luna de miel",
    rating: 5,
    text: "Hermosa vista al océano desde la habitación. El servicio fue impecable y la cena en el restaurante fue memorable. Recomendado 100%.",
    avatar: "AM",
  },
  {
    id: 4,
    name: "Juan Pérez",
    role: "Viajero frecuente",
    rating: 5,
    text: "Mejor relación precio-calidad en Acapulco. Renovación reciente se nota en cada detalle. Wi-Fi rápido, estacionamiento gratuito. Perfecto.",
    avatar: "JP",
  },
  {
    id: 5,
    name: "Sofía López",
    role: "Grupo de amigas",
    rating: 5,
    text: "Nos encantó todo. El salón de fiestas es hermoso, la ubicación es ideal para salir por la noche. ¡Volveremos pronto!",
    avatar: "SL",
  },
];

function TestimonialCard({
  testimonial,
  isCenter,
}: {
  testimonial: (typeof testimonials)[0];
  isCenter: boolean;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0.5, scale: 0.85 }}
      animate={isCenter ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 0.85 }}
      transition={{
        duration: 0.8,
        ease: [0.23, 1, 0.320, 1], // cubic-bezier smooth easing
      }}
      className="flex-shrink-0 w-full md:w-96 p-8 rounded-sm"
      style={{
        background: "oklch(0.97 0.01 80)",
        border: "1px solid oklch(0.88 0.025 80)",
      }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill="oklch(0.72 0.09 75)"
            style={{ color: "oklch(0.72 0.09 75)" }}
          />
        ))}
      </div>

      {/* Quote */}
      <p
        className="text-base leading-relaxed mb-6 italic"
        style={{
          color: "oklch(0.35 0.05 240)",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white"
          style={{ background: "oklch(0.22 0.06 240)" }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <p
            className="font-semibold text-sm"
            style={{
              color: "oklch(0.22 0.06 240)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {testimonial.name}
          </p>
          <p
            className="text-xs"
            style={{
              color: "oklch(0.60 0.04 240)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  // Crear array infinito para mostrar 3 testimonios (anterior, actual, siguiente)
  const getVisibleTestimonials = () => {
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const next = (currentIndex + 1) % testimonials.length;
    return [
      testimonials[prev],
      testimonials[currentIndex],
      testimonials[next],
    ];
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="py-24 section-dark">
      <div className="container">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 32 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="gold-line" />
            <span className="section-label">Lo que dicen nuestros huéspedes</span>
            <span className="gold-line" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Testimonios de
            <br />
            <em
              className="not-italic font-normal"
              style={{ color: "oklch(0.82 0.07 75)" }}
            >
              clientes satisfechos
            </em>
          </h2>
          <p
            className="text-base"
            style={{ color: "oklch(0.70 0.03 240)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Miles de huéspedes han disfrutado de su estancia en el Hotel Condesa Palace.
            Aquí están sus historias.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Testimonials container */}
          <div className="flex items-center justify-center gap-4 md:gap-6 overflow-hidden">
            {/* Left button */}
            <button
              onClick={handlePrev}
              className="flex-shrink-0 p-2 rounded-full transition-all duration-200 hover:scale-110 z-10"
              style={{ background: "oklch(0.72 0.09 75)" }}
              aria-label="Anterior"
            >
              <ChevronLeft size={20} style={{ color: "oklch(0.15 0.05 240)" }} />
            </button>

            {/* Testimonials */}
            <div className="flex gap-4 md:gap-6 justify-center flex-1 min-w-0">
              {visibleTestimonials.map((testimonial, i) => (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}`}
                  layout
                  className="flex-shrink-0 w-full md:w-96 transition-all"
                >
                  <TestimonialCard
                    testimonial={testimonial}
                    isCenter={i === 1}
                  />
                </motion.div>
              ))}
            </div>

            {/* Right button */}
            <button
              onClick={handleNext}
              className="flex-shrink-0 p-2 rounded-full transition-all duration-200 hover:scale-110 z-10"
              style={{ background: "oklch(0.72 0.09 75)" }}
              aria-label="Siguiente"
            >
              <ChevronRight size={20} style={{ color: "oklch(0.15 0.05 240)" }} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  setCurrentIndex(i);
                  setAutoPlay(false);
                  setTimeout(() => setAutoPlay(true), 10000);
                }}
                className="w-2 h-2 rounded-full transition-all duration-300"
                animate={{
                  background:
                    i === currentIndex ? "oklch(0.72 0.09 75)" : "oklch(0.50 0.03 240)",
                  width: i === currentIndex ? "24px" : "8px",
                }}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { value: "1000+", label: "Huéspedes satisfechos" },
            { value: "4.9★", label: "Calificación promedio" },
            { value: "2026", label: "Año de renovación" },
            { value: "100%", label: "Recomendación" },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className="text-2xl md:text-3xl font-bold mb-1"
                style={{
                  color: "oklch(0.82 0.07 75)",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs md:text-sm"
                style={{ color: "oklch(0.65 0.03 240)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
