/*
 * PoliciesSection — Hotel Condesa Palace Acapulco
 * Design: Accordion-style policies with icons and clear information
 * Content: Check-in/out, cancellation policy, pet policy
 */

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Clock, AlertCircle, PawPrint, ChevronDown } from "lucide-react";

const policies = [
  {
    id: "checkin",
    title: "Check-in y Check-out",
    icon: Clock,
    content: [
      {
        label: "Check-in",
        time: "15:00 (3:00 PM)",
        description: "A partir de las 3:00 PM. Check-in anticipado disponible sujeto a disponibilidad.",
      },
      {
        label: "Check-out",
        time: "11:00 (11:00 AM)",
        description: "Hasta las 11:00 AM. Late check-out disponible por costo adicional.",
      },
      {
        label: "Equipaje",
        description:
          "Disponemos de servicio de almacenamiento de equipaje antes del check-in y después del check-out.",
      },
    ],
  },
  {
    id: "cancellation",
    title: "Política de Cancelación",
    icon: AlertCircle,
    content: [
      {
        label: "Cancelación gratuita",
        description: "Cancelación gratuita hasta 7 días antes de la fecha de llegada.",
      },
      {
        label: "Cancelación con cargo",
        description:
          "Cancelaciones dentro de 7 días de la llegada serán cobradas como una noche completa.",
      },
      {
        label: "No-show",
        description:
          "Si no se presenta sin notificación previa, se cobrará el total de la reserva.",
      },
      {
        label: "Modificaciones",
        description:
          "Las modificaciones de fechas están sujetas a disponibilidad y pueden incurrir en cargos adicionales.",
      },
    ],
  },
  {
    id: "pets",
    title: "Política de Mascotas",
    icon: PawPrint,
    content: [
      {
        label: "Mascotas permitidas",
        description: "No se permiten mascotas en el hotel. Esto incluye perros, gatos y otras mascotas.",
      },
      {
        label: "Alternativas",
        description:
          "Si viajas con mascota, te recomendamos buscar servicios de cuidado de mascotas en Acapulco o hospedajes pet-friendly cercanos.",
      },
      {
        label: "Contacto",
        description:
          "Si tienes dudas o necesitas recomendaciones de servicios para mascotas, no dudes en contactarnos.",
      },
    ],
  },
];

function PolicyCard({ policy }: { policy: (typeof policies)[0] }) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = policy.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-sm overflow-hidden border"
      style={{ borderColor: "oklch(0.88 0.025 80)" }}
    >
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between transition-all duration-300"
        style={{
          background: isOpen ? "oklch(0.93 0.015 80)" : "oklch(0.97 0.01 80)",
        }}
      >
        <div className="flex items-center gap-4">
          <div
            className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
            style={{ background: "oklch(0.72 0.09 75 / 0.15)" }}
          >
            <Icon
              size={20}
              style={{ color: "oklch(0.72 0.09 75)" }}
              strokeWidth={1.5}
            />
          </div>
          <h3
            className="text-lg font-semibold text-left"
            style={{
              color: "oklch(0.22 0.06 240)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {policy.title}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown
            size={20}
            style={{ color: "oklch(0.72 0.09 75)" }}
            strokeWidth={1.5}
          />
        </motion.div>
      </button>

      {/* Content */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div
          className="px-6 py-5 border-t"
          style={{ borderColor: "oklch(0.88 0.025 80)" }}
        >
          <div className="space-y-4">
            {policy.content.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                  style={{ background: "oklch(0.72 0.09 75)" }}
                />
                <div>
                  {item.label && (
                    <p
                      className="font-semibold text-sm mb-1"
                      style={{
                        color: "oklch(0.22 0.06 240)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {item.label}
                      {item.time && (
                        <span
                          className="font-bold ml-2"
                          style={{ color: "oklch(0.72 0.09 75)" }}
                        >
                          {item.time}
                        </span>
                      )}
                    </p>
                  )}
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "oklch(0.50 0.04 240)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PoliciesSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section
      id="politicas"
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
            <span className="section-label">Información importante</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight max-w-lg"
            style={{
              color: "oklch(0.22 0.06 240)",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Políticas del
            <br />
            <em
              className="not-italic font-normal"
              style={{ color: "oklch(0.72 0.09 75)" }}
            >
              Hotel
            </em>
          </h2>
          <p
            className="mt-4 text-base max-w-xl"
            style={{ color: "oklch(0.50 0.04 240)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Conoce nuestras políticas de check-in/out, cancelación y mascotas. Si tienes
            preguntas, no dudes en contactarnos.
          </p>
        </motion.div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {policies.map((policy) => (
            <PolicyCard key={policy.id} policy={policy} />
          ))}
        </div>

        {/* Important note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-sm"
          style={{
            background: "oklch(0.72 0.09 75 / 0.08)",
            border: "1px solid oklch(0.72 0.09 75 / 0.3)",
          }}
        >
          <p
            className="text-sm leading-relaxed"
            style={{
              color: "oklch(0.22 0.06 240)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <strong>Nota importante:</strong> Estas políticas aplican para todas las reservas.
            Para casos especiales o excepciones, por favor contacta directamente con nuestro
            equipo al{" "}
            <a
              href="tel:+527444705130"
              className="font-semibold"
              style={{ color: "oklch(0.72 0.09 75)" }}
            >
              +52 744 470 5130
            </a>{" "}
            o por correo a{" "}
            <a
              href="mailto:condesapalacereservasaca@gmail.com"
              className="font-semibold"
              style={{ color: "oklch(0.72 0.09 75)" }}
            >
              condesapalacereservasaca@gmail.com
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
