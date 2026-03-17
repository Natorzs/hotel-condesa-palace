/*
 * LocationSection — Hotel Condesa Palace Acapulco
 * Design: Split layout — text left, map right
 * Animation: Slide in from sides on scroll
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Waves, Car } from "lucide-react";

const highlights = [
  {
    icon: Clock,
    title: "2 minutos caminando",
    desc: "A la Costera y la playa",
  },
  {
    icon: Waves,
    title: "Acceso directo",
    desc: "A las mejores playas de Acapulco",
  },
  {
    icon: Car,
    title: "Estacionamiento gratuito",
    desc: "Para todos nuestros huéspedes",
  },
  {
    icon: MapPin,
    title: "Costera Vieja No. 5 y 6",
    desc: "Acapulco, Guerrero, México",
  },
];

export default function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="ubicacion"
      className="py-24"
      style={{ background: "oklch(0.97 0.01 80)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="gold-line" />
              <span className="section-label">Nuestra Ubicación</span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{
                color: "oklch(0.22 0.06 240)",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Ubicación
              <br />
              <em
                className="not-italic font-normal"
                style={{ color: "oklch(0.72 0.09 75)" }}
              >
                privilegiada
              </em>
            </h2>

            <p
              className="text-base leading-relaxed mb-8"
              style={{
                color: "oklch(0.45 0.04 240)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Costera Vieja No. 5 y 6.{" "}
              <strong style={{ color: "oklch(0.22 0.06 240)" }}>
                ¡A solo 2 minutos caminando de la costera y la playa!
              </strong>{" "}
              Estamos en el corazón de Acapulco, con acceso fácil a restaurantes, tiendas y
              todas las atracciones de la ciudad.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-sm"
                    style={{
                      background: "oklch(0.93 0.015 80)",
                      border: "1px solid oklch(0.88 0.025 80)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ background: "oklch(0.72 0.09 75 / 0.15)" }}
                    >
                      <Icon
                        size={18}
                        style={{ color: "oklch(0.65 0.09 75)" }}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <p
                        className="font-semibold text-sm"
                        style={{
                          color: "oklch(0.22 0.06 240)",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        {h.title}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{
                          color: "oklch(0.55 0.04 240)",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        {h.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Address badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="mt-8 flex items-center gap-3 p-4 rounded-sm"
              style={{
                background: "oklch(0.22 0.06 240)",
                color: "white",
              }}
            >
              <MapPin
                size={20}
                style={{ color: "oklch(0.82 0.07 75)", flexShrink: 0 }}
              />
              <div>
                <p
                  className="font-semibold text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Costera Vieja No. 5 y 6
                </p>
                <p
                  className="text-xs text-white/60 mt-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Acapulco de Juárez, Guerrero, México
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Map side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-sm overflow-hidden shadow-xl"
            style={{ height: "480px" }}
          >
            <iframe
              title="Ubicación Hotel Condesa Palace Acapulco"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.2!2d-99.8974!3d16.8531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca4b9b3c9b8c4b%3A0x0!2sCostera+Vieja%2C+Acapulco%2C+Guerrero!5e0!3m2!1ses!2smx!4v1710000000000!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
