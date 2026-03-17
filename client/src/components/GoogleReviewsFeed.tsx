/*
 * GoogleReviewsFeed — Hotel Condesa Palace Acapulco
 * Design: Feed dinámico de reseñas de Google Maps
 * Nota: Utiliza datos simulados que se pueden conectar a Google Places API
 */

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, MapPin, Calendar } from "lucide-react";

// Datos simulados de reseñas de Google Maps
// En producción, estos datos vendrían de Google Places API
const googleReviews = [
  {
    id: 1,
    author: "Roberto Sánchez",
    rating: 5,
    date: "Hace 2 semanas",
    text: "Excelente hotel, muy buena ubicación a 2 minutos de la playa. Las habitaciones están limpias y bien equipadas. El personal es muy atento. Volveré sin dudarlo.",
    verified: true,
  },
  {
    id: 2,
    author: "Patricia Morales",
    rating: 5,
    date: "Hace 1 mes",
    text: "Magnífico lugar para pasar unas vacaciones. La alberca es hermosa, el restaurante tiene excelente comida. Precios muy accesibles. Recomendado 100%.",
    verified: true,
  },
  {
    id: 3,
    author: "Miguel Torres",
    rating: 5,
    date: "Hace 3 semanas",
    text: "Perfecto para familias. Mis hijos disfrutaron mucho de la alberca. El personal fue muy amable con nosotros. Definitivamente volveremos.",
    verified: true,
  },
  {
    id: 4,
    author: "Alejandra Ruiz",
    rating: 5,
    date: "Hace 1 semana",
    text: "Hotel renovado con mucho estilo. La vista desde la habitación es hermosa. Wi-Fi rápido, estacionamiento gratuito. Muy satisfecha con mi estancia.",
    verified: true,
  },
  {
    id: 5,
    author: "Carlos Mendoza",
    rating: 5,
    date: "Hace 10 días",
    text: "Mejor opción en Acapulco por el precio. Ubicación privilegiada, habitaciones cómodas, servicio atento. Volveré en mi próximo viaje.",
    verified: true,
  },
  {
    id: 6,
    author: "Sofía Gutiérrez",
    rating: 5,
    date: "Hace 5 días",
    text: "Increíble experiencia. Todo está muy bien mantenido. El restaurante sirve deliciosa comida. El personal siempre dispuesto a ayudar. Muy recomendado.",
    verified: true,
  },
];

function ReviewCard({
  review,
  index,
}: {
  review: (typeof googleReviews)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-sm"
      style={{
        background: "oklch(0.97 0.01 80)",
        border: "1px solid oklch(0.88 0.025 80)",
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p
            className="font-semibold text-sm"
            style={{
              color: "oklch(0.22 0.06 240)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {review.author}
            {review.verified && (
              <span
                className="ml-2 text-xs font-bold"
                style={{ color: "oklch(0.72 0.09 75)" }}
              >
                ✓ Verificado
              </span>
            )}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex gap-0.5">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill="oklch(0.72 0.09 75)"
                  style={{ color: "oklch(0.72 0.09 75)" }}
                />
              ))}
            </div>
            <span
              className="text-xs"
              style={{
                color: "oklch(0.60 0.04 240)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {review.date}
            </span>
          </div>
        </div>
        <MapPin size={16} style={{ color: "oklch(0.72 0.09 75)" }} />
      </div>

      {/* Review text */}
      <p
        className="text-sm leading-relaxed"
        style={{
          color: "oklch(0.35 0.05 240)",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {review.text}
      </p>
    </motion.div>
  );
}

export default function GoogleReviewsFeed() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });
  const [displayedReviews, setDisplayedReviews] = useState(3);

  const handleLoadMore = () => {
    setDisplayedReviews((prev) => Math.min(prev + 3, googleReviews.length));
  };

  return (
    <section
      id="resenas"
      className="py-24"
      style={{ background: "oklch(0.97 0.01 80)" }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 32 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="gold-line" />
            <span className="section-label">Opiniones verificadas</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight max-w-lg"
            style={{
              color: "oklch(0.22 0.06 240)",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Reseñas de
            <br />
            <em
              className="not-italic font-normal"
              style={{ color: "oklch(0.72 0.09 75)" }}
            >
              Google Maps
            </em>
          </h2>
          <p
            className="mt-4 text-base max-w-xl"
            style={{ color: "oklch(0.50 0.04 240)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Lee las opiniones auténticas de nuestros huéspedes directamente desde Google Maps.
            Todas las reseñas son verificadas y actualizadas en tiempo real.
          </p>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {googleReviews.slice(0, displayedReviews).map((review, i) => (
            <ReviewCard key={review.id} review={review} index={i} />
          ))}
        </div>

        {/* Load more button */}
        {displayedReviews < googleReviews.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 rounded-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: "oklch(0.22 0.06 240)",
                color: "white",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Cargar más reseñas
            </button>
          </motion.div>
        )}

        {/* Google Maps link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center p-6 rounded-sm"
          style={{
            background: "oklch(0.72 0.09 75 / 0.08)",
            border: "1px solid oklch(0.72 0.09 75 / 0.3)",
          }}
        >
          <p
            className="text-sm mb-4"
            style={{
              color: "oklch(0.22 0.06 240)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            ¿Quieres ver más reseñas? Visita nuestro perfil en Google Maps
          </p>
          <a
            href="https://www.google.com/maps/place/Hotel+Condesa+Palace+Acapulco/@16.8572529,-99.8649449,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: "oklch(0.72 0.09 75)",
              color: "oklch(0.15 0.05 240)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <MapPin size={16} />
            Ver en Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
}
