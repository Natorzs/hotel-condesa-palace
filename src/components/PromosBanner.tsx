/*
 * PromosBanner — Hotel Condesa Palace Acapulco
 * Design: Banner premium con promociones destacadas
 * Contenido: Semana de Oro 2026 con descuentos por noches
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, TrendingUp } from "lucide-react";

const promotions = [
  {
    nights: "1 NOCHE",
    discount: "26%",
    prices: {
      twoPersons: "$814.00",
      fourPersons: "$1,036.00",
      sixPersons: "$1,258.00",
    },
  },
  {
    nights: "2 NOCHES",
    discount: "30%",
    prices: {
      twoPersons: "$770.00",
      fourPersons: "$980.00",
      sixPersons: "$1,190.00",
    },
  },
  {
    nights: "3 NOCHES",
    discount: "40%",
    prices: {
      twoPersons: "$660.00",
      fourPersons: "$840.00",
      sixPersons: "$1,020.00",
    },
  },
];

export default function PromosBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="promociones"
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, oklch(0.22 0.06 240) 0%, oklch(0.30 0.07 240) 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "oklch(0.72 0.09 75)" }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10" style={{ background: "oklch(0.72 0.09 75)" }} />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles size={20} style={{ color: "oklch(0.82 0.07 75)" }} />
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{
                color: "oklch(0.82 0.07 75)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Super Promo 2026
            </span>
            <Sparkles size={20} style={{ color: "oklch(0.82 0.07 75)" }} />
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold mb-3 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Semana de
            <br />
            <em
              className="not-italic font-normal"
              style={{ color: "oklch(0.82 0.07 75)" }}
            >
              Oro
            </em>
          </h2>
          <p
            className="text-lg text-white max-w-2xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.85 0.03 240)" }}
          >
            Reserva tu próxima escapada y obtén descuentos exclusivos. Válido todo el año 2026.
          </p>
        </motion.div>

        {/* Promotions grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {promotions.map((promo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.15 }}
              className="relative rounded-sm overflow-hidden group"
              style={{
                background: "oklch(0.97 0.01 80)",
                border: "2px solid oklch(0.72 0.09 75 / 0.3)",
              }}
            >
              {/* Hover effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, oklch(0.72 0.09 75 / 0.1) 0%, transparent 100%)",
                }}
              />

              <div className="p-8 relative z-10">
                {/* Discount badge */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-sm mb-4"
                  style={{ background: "oklch(0.72 0.09 75 / 0.15)" }}
                >
                  <TrendingUp size={16} style={{ color: "oklch(0.72 0.09 75)" }} />
                  <span
                    className="font-bold text-lg"
                    style={{
                      color: "oklch(0.72 0.09 75)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {promo.discount}
                  </span>
                </div>

                {/* Nights */}
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{
                    color: "oklch(0.22 0.06 240)",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {promo.nights}
                </h3>

                {/* Price list */}
                <div className="space-y-3">
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest mb-1"
                      style={{
                        color: "oklch(0.60 0.04 240)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      2 Personas
                    </p>
                    <p
                      className="text-lg font-bold"
                      style={{
                        color: "oklch(0.22 0.06 240)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {promo.prices.twoPersons}
                      <span
                        className="text-xs ml-2"
                        style={{ color: "oklch(0.60 0.04 240)" }}
                      >
                        /noche
                      </span>
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-xs uppercase tracking-widest mb-1"
                      style={{
                        color: "oklch(0.60 0.04 240)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      4 Personas
                    </p>
                    <p
                      className="text-lg font-bold"
                      style={{
                        color: "oklch(0.22 0.06 240)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {promo.prices.fourPersons}
                      <span
                        className="text-xs ml-2"
                        style={{ color: "oklch(0.60 0.04 240)" }}
                      >
                        /noche
                      </span>
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-xs uppercase tracking-widest mb-1"
                      style={{
                        color: "oklch(0.60 0.04 240)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      6 Personas
                    </p>
                    <p
                      className="text-lg font-bold"
                      style={{
                        color: "oklch(0.22 0.06 240)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {promo.prices.sixPersons}
                      <span
                        className="text-xs ml-2"
                        style={{ color: "oklch(0.60 0.04 240)" }}
                      >
                        /noche
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terms and conditions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.45 }}
          className="text-center p-6 rounded-sm"
          style={{
            background: "oklch(0.97 0.01 80 / 0.1)",
            border: "1px solid oklch(0.72 0.09 75 / 0.2)",
          }}
        >
          <p
            className="text-sm"
            style={{
              color: "oklch(0.85 0.03 240)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <strong>Promoción válida todo el año 2026.</strong> Reserva entre semana (domingo a jueves) y obtén descuentos exclusivos. No aplica fines de semana, puentes, vacaciones y temporada alta.
            <br />
            <span className="text-xs mt-2 block">
              Contacta con nuestro equipo al{" "}
              <a
                href="tel:+527444705130"
                className="font-semibold"
                style={{ color: "oklch(0.82 0.07 75)" }}
              >
                +52 744 470 5130
              </a>{" "}
              para más detalles.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
