/*
 * RoomsSection — Hotel Condesa Palace Acapulco
 * Design: Cards with image overlay, gold price badge, hover elevation
 * Animation: Scroll-triggered stagger with framer-motion
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, MessageCircle, Star } from "lucide-react";

const WHATSAPP_BASE =
  "https://wa.me/527444705130?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20disponibilidad%20para%20la%20habitaci%C3%B3n%20";

const rooms = [
  {
    id: "sencilla",
    name: "Habitación Sencilla",
    capacity: "2 Personas",
    price: "$1,100",
    period: "MXN / noche",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663446829112/Zm6gCx7EqYxZPPtvKEXA4k/room-sencilla-SNSJ8756dygqmzqCKUeuMH.webp",
    features: ["Cama King Size", "Vista al mar", "A/C incluido", "Wi-Fi gratis"],
    badge: "Ideal para parejas",
    waText: "Sencilla%20(2%20personas)%20-%20%241%2C100%20MXN%2Fnoche",
  },
  {
    id: "doble",
    name: "Habitación Doble",
    capacity: "4 Personas",
    price: "$1,400",
    period: "MXN / noche",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663446829112/Zm6gCx7EqYxZPPtvKEXA4k/room-doble-K2cmELNC2Xoe6BUDWG5gWS.webp",
    features: ["2 Camas Queen", "Balcón privado", "A/C incluido", "Wi-Fi gratis"],
    badge: "Más popular",
    highlight: true,
    waText: "Doble%20(4%20personas)%20-%20%241%2C400%20MXN%2Fnoche",
  },
  {
    id: "triple",
    name: "Habitación Triple",
    capacity: "6 Personas",
    price: "$1,700",
    period: "MXN / noche",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663446829112/Zm6gCx7EqYxZPPtvKEXA4k/room-triple-ApWxoJUJg7pDw5shrVoAWD.webp",
    features: ["3 Camas", "Vista panorámica", "A/C incluido", "Wi-Fi gratis"],
    badge: "Ideal para familias",
    waText: "Triple%20(6%20personas)%20-%20%241%2C700%20MXN%2Fnoche",
  },
];

function RoomCard({ room, index }: { room: (typeof rooms)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.15 }}
      className={`room-card relative rounded-sm overflow-hidden flex flex-col bg-white ${
        room.highlight ? "ring-2 ring-amber-400" : ""
      }`}
    >
      {/* Popular badge */}
      {room.highlight && (
        <div
          className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-semibold"
          style={{
            background: "oklch(0.72 0.09 75)",
            color: "oklch(0.15 0.05 240)",
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "0.06em",
          }}
        >
          <Star size={11} fill="currentColor" />
          MÁS POPULAR
        </div>
      )}

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, oklch(0.12 0.06 240 / 0.55) 0%, transparent 60%)",
          }}
        />
        {/* Capacity badge */}
        <div
          className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm font-medium"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <Users size={15} style={{ color: "oklch(0.82 0.07 75)" }} />
          {room.capacity}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Label */}
        <span
          className="text-xs font-medium tracking-widest uppercase mb-2"
          style={{ color: "oklch(0.72 0.09 75)", fontFamily: "'DM Sans', sans-serif" }}
        >
          {room.badge}
        </span>

        {/* Name */}
        <h3
          className="text-xl font-semibold mb-4"
          style={{
            color: "oklch(0.22 0.06 240)",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {room.name}
        </h3>

        {/* Features */}
        <ul className="flex flex-col gap-2 mb-6 flex-1">
          {room.features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2 text-sm"
              style={{ color: "oklch(0.45 0.04 240)", fontFamily: "'DM Sans', sans-serif" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "oklch(0.72 0.09 75)" }}
              />
              {f}
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div
          className="pt-5 border-t flex items-end justify-between gap-4"
          style={{ borderColor: "oklch(0.88 0.025 80)" }}
        >
          <div>
            <div
              className="text-3xl font-bold"
              style={{
                color: "oklch(0.22 0.06 240)",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {room.price}
            </div>
            <div
              className="text-xs mt-0.5"
              style={{ color: "oklch(0.55 0.04 240)", fontFamily: "'DM Sans', sans-serif" }}
            >
              {room.period}
            </div>
          </div>
          <a
            href={`${WHATSAPP_BASE}${room.waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-sm text-sm font-semibold transition-all duration-300"
            style={{
              background: room.highlight
                ? "oklch(0.72 0.09 75)"
                : "oklch(0.22 0.06 240)",
              color: room.highlight ? "oklch(0.15 0.05 240)" : "white",
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.85";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <MessageCircle size={15} />
            Ver disponibilidad
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function RoomsSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="habitaciones" className="py-24" style={{ background: "oklch(0.97 0.01 80)" }}>
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
            <span className="section-label">Nuestras Habitaciones</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight max-w-lg"
            style={{
              color: "oklch(0.22 0.06 240)",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Confort y elegancia
            <br />
            <em
              className="not-italic font-normal"
              style={{ color: "oklch(0.72 0.09 75)" }}
            >
              para cada viajero
            </em>
          </h2>
          <p
            className="mt-4 text-base max-w-xl"
            style={{ color: "oklch(0.50 0.04 240)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Todas nuestras habitaciones cuentan con aire acondicionado, Wi-Fi gratuito y
            acceso a la alberca. Precios por noche, impuestos incluidos.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={titleInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.65, delay: 0.6 }}
          className="text-center mt-10 text-sm"
          style={{ color: "oklch(0.60 0.04 240)", fontFamily: "'DM Sans', sans-serif" }}
        >
          ¿Tienes dudas? Escríbenos por WhatsApp y te respondemos de inmediato.
        </motion.p>
      </div>
    </section>
  );
}
