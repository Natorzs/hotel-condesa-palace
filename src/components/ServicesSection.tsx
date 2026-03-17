/*
 * ServicesSection — Hotel Condesa Palace Acapulco
 * Design: Dark ocean background, gold icon grid, asymmetric layout
 * Animation: Stagger reveal on scroll
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Waves,
  Wind,
  Wifi,
  Tv,
  Car,
  UtensilsCrossed,
  PartyPopper,
  ShieldCheck,
  Lock,
  Music,
} from "lucide-react";

const services = [
  { icon: Waves, label: "Alberca", desc: "Disfruta del agua todo el día" },
  { icon: Wind, label: "Aire Acondicionado", desc: "Clima perfecto en tu habitación" },
  { icon: Wifi, label: "Wi-Fi Gratis", desc: "Conectividad de alta velocidad" },
  { icon: Tv, label: "Televisión", desc: "Entretenimiento en tu cuarto" },
  { icon: Car, label: "Estacionamiento", desc: "Gratuito para huéspedes" },
  { icon: UtensilsCrossed, label: "Restaurante", desc: "Gastronomía local y nacional" },
  { icon: PartyPopper, label: "Salón de Fiestas", desc: "Eventos y celebraciones" },
  { icon: Lock, label: "Caja de Seguridad", desc: "Tus pertenencias protegidas" },
  { icon: ShieldCheck, label: "Seguridad 24/7", desc: "Vigilancia permanente" },
  { icon: Music, label: "Shows en Vivo", desc: "Entretenimiento nocturno" },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className="service-card flex flex-col items-center text-center p-6 rounded-sm group"
      style={{
        background: "oklch(0.26 0.065 240 / 0.6)",
        border: "1px solid oklch(1 0 0 / 0.07)",
      }}
    >
      <div
        className="w-14 h-14 rounded-sm flex items-center justify-center mb-4 service-icon"
        style={{ background: "oklch(0.72 0.09 75 / 0.12)" }}
      >
        <Icon
          size={26}
          style={{ color: "oklch(0.82 0.07 75)" }}
          strokeWidth={1.5}
        />
      </div>
      <h3
        className="font-semibold text-white text-sm mb-1.5"
        style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.01em" }}
      >
        {service.label}
      </h3>
      <p
        className="text-xs leading-relaxed"
        style={{ color: "oklch(0.75 0.03 240)", fontFamily: "'DM Sans', sans-serif" }}
      >
        {service.desc}
      </p>
    </motion.div>
  );
}

export default function ServicesSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section
      id="servicios"
      className="py-24 section-dark"
    >
      <div className="container">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 32 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="gold-line" />
              <span className="section-label">Servicios e Instalaciones</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Todo lo que
              <br />
              <em
                className="not-italic font-normal"
                style={{ color: "oklch(0.82 0.07 75)" }}
              >
                necesitas aquí
              </em>
            </h2>
          </div>
          <p
            className="text-base max-w-sm md:text-right"
            style={{ color: "oklch(0.70 0.03 240)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Cada servicio pensado para que tu estancia sea cómoda, segura y memorable.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.label} service={service} index={i} />
          ))}
        </div>

        {/* Pool feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.5 }}
          className="mt-12 rounded-sm overflow-hidden relative"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663446829112/Zm6gCx7EqYxZPPtvKEXA4k/hotel-pool-night-GAgJYvFtVtBPX4xggr7fDx.webp"
            alt="Alberca nocturna Hotel Condesa Palace"
            className="w-full h-64 md:h-80 object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.12 0.06 240 / 0.75) 0%, oklch(0.18 0.06 240 / 0.45) 100%)",
            }}
          >
            <div className="text-center">
              <p
                className="text-white/70 text-sm tracking-widest uppercase mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Disfruta de noche
              </p>
              <h3
                className="text-white text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Alberca iluminada
                <br />
                <em
                  className="not-italic font-normal text-2xl md:text-3xl"
                  style={{ color: "oklch(0.82 0.07 75)" }}
                >
                  abierta todo el día
                </em>
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
