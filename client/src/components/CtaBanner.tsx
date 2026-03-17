/*
 * CtaBanner — Hotel Condesa Palace Acapulco
 * Design: Full-width banner with dark overlay, centered CTA
 * Purpose: Conversion booster between sections
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/527444705130?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20habitaci%C3%B3n%20en%20el%20Hotel%20Condesa%20Palace%20Acapulco.";

export default function CtaBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, oklch(0.18 0.06 240) 0%, oklch(0.25 0.07 240) 100%)",
      }}
    >
      {/* Decorative gold line top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.09 75 / 0.5), transparent)",
        }}
      />

      {/* Decorative circles */}
      <div
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-5"
        style={{ background: "oklch(0.72 0.09 75)" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-5"
        style={{ background: "oklch(0.72 0.09 75)" }}
      />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <span
            className="section-label block mb-4"
            style={{ color: "oklch(0.72 0.09 75)" }}
          >
            ¿Listo para tu escapada?
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Reserva hoy y vive
            <br />
            <em
              className="not-italic"
              style={{ color: "oklch(0.82 0.07 75)" }}
            >
              el nuevo Acapulco
            </em>
          </h2>
          <p
            className="text-white/70 text-base mb-10 max-w-lg mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Habitaciones desde <strong className="text-white">$1,100 MXN/noche</strong>.
            Confirmación inmediata por WhatsApp. Sin complicaciones.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
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
            <a
              href="tel:+527444705130"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-sm text-base font-medium text-white border border-white/25 hover:border-white/50 hover:bg-white/10 transition-all duration-300"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <Phone size={18} />
              Llamar ahora
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative gold line bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.09 75 / 0.5), transparent)",
        }}
      />
    </section>
  );
}
