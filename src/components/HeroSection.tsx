/*
 * HeroSection — Hotel Condesa Palace Acapulco
 * Design: Full-screen hero with deep ocean overlay, editorial typography
 * Animation: Staggered fade-in from bottom with framer-motion
 * CTA: WhatsApp pulse button in gold
 */

import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663446829112/Zm6gCx7EqYxZPPtvKEXA4k/hero-hotel-acapulco-4B5DnzDLRWfeizS2siovj2.webp";

const WHATSAPP_URL =
  "https://wa.me/527444705130?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20habitaci%C3%B3n%20en%20el%20Hotel%20Condesa%20Palace%20Acapulco.";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.18 },
  }),
};

export default function HeroSection() {
  const scrollToRooms = () => {
    document.getElementById("habitaciones")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-3 mb-6"
          >
            <span className="gold-line" />
            <span className="section-label text-white/70">Renovado 2026 · Acapulco, México</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-white font-serif leading-[1.08] mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            Descubre la
            <br />
            <em className="not-italic" style={{ color: "oklch(0.82 0.07 75)" }}>
              Nueva Cara
            </em>
            <br />
            de Acapulco
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-white/80 leading-relaxed mb-10 max-w-xl"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              fontWeight: 300,
            }}
          >
            Hotel Condesa Palace: Renovado, a{" "}
            <strong className="text-white font-medium">2 minutos de La Costera</strong> y con
            todo lo que necesitas para tu descanso perfecto.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold btn-whatsapp inline-flex items-center gap-3 px-8 py-4 rounded-sm text-base font-semibold"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <MessageCircle size={20} />
              Reservar por WhatsApp
            </a>
            <button
              onClick={scrollToRooms}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-sm text-base font-medium text-white border border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Ver Habitaciones
            </button>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/15"
          >
            {[
              { value: "3", label: "Tipos de habitación" },
              { value: "2 min", label: "A la playa" },
              { value: "10+", label: "Servicios incluidos" },
              { value: "24/7", label: "Seguridad" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  className="text-2xl font-bold"
                  style={{
                    color: "oklch(0.82 0.07 75)",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-white/60 text-xs tracking-wide mt-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToRooms}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
