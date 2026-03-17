/*
 * Footer — Hotel Condesa Palace Acapulco
 * Design: Dark ocean background, gold accents, contact info
 * Includes: Phone, email, address, WhatsApp CTA, "Nueva Administración 2026"
 */

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/527444705130?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20habitaci%C3%B3n%20en%20el%20Hotel%20Condesa%20Palace%20Acapulco.";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Habitaciones", href: "#habitaciones" },
  { label: "Servicios", href: "#servicios" },
  { label: "Ubicación", href: "#ubicacion" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="contacto"
      style={{
        background: "linear-gradient(160deg, oklch(0.14 0.06 240) 0%, oklch(0.10 0.05 240) 100%)",
      }}
    >
      {/* Main footer content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-start gap-4">
              {/* Logo */}
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663446829112/Zm6gCx7EqYxZPPtvKEXA4k/logo-condesa-palace_7aabcded.png"
                alt="Condesa Palace Logo"
                className="w-16 h-16 flex-shrink-0"
              />
              <div>
                <h3
                  className="text-white text-2xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Condesa Palace
                </h3>
                <p
                  className="text-sm tracking-[0.18em] uppercase mt-1"
                  style={{ color: "oklch(0.72 0.09 75)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Acapulco · Nueva Administración 2026
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-6 max-w-sm"
              style={{ color: "oklch(0.65 0.03 240)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Renovado y listo para ofrecerte la mejor experiencia en Acapulco. A 2 minutos
              de La Costera y la playa, con todo lo que necesitas para un descanso perfecto.
            </p>
            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2.5 px-6 py-3 rounded-sm text-sm font-semibold"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <MessageCircle size={16} />
              Reservar por WhatsApp
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-white font-semibold text-sm tracking-widest uppercase mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "oklch(0.65 0.03 240)", fontFamily: "'DM Sans', sans-serif" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "oklch(0.82 0.07 75)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "oklch(0.65 0.03 240)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-semibold text-sm tracking-widest uppercase mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Contacto
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+527444705130"
                  className="flex items-start gap-3 group"
                >
                  <Phone
                    size={16}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(0.72 0.09 75)" }}
                  />
                  <div>
                    <p
                      className="text-xs uppercase tracking-wide mb-0.5"
                      style={{ color: "oklch(0.55 0.03 240)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Teléfono
                    </p>
                    <p
                      className="text-sm text-white group-hover:text-amber-300 transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      +52 744 470 5130
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:condesapalacereservasaca@gmail.com"
                  className="flex items-start gap-3 group"
                >
                  <Mail
                    size={16}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(0.72 0.09 75)" }}
                  />
                  <div>
                    <p
                      className="text-xs uppercase tracking-wide mb-0.5"
                      style={{ color: "oklch(0.55 0.03 240)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Correo
                    </p>
                    <p
                      className="text-sm text-white group-hover:text-amber-300 transition-colors break-all"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      condesapalacereservasaca@gmail.com
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(0.72 0.09 75)" }}
                  />
                  <div>
                    <p
                      className="text-xs uppercase tracking-wide mb-0.5"
                      style={{ color: "oklch(0.55 0.03 240)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Dirección
                    </p>
                    <p
                      className="text-sm text-white"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Costera Vieja No. 5 y 6
                      <br />
                      Acapulco, Guerrero, México
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "oklch(1 0 0 / 0.07)" }}
      >
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs"
            style={{ color: "oklch(0.50 0.03 240)", fontFamily: "'DM Sans', sans-serif" }}
          >
            © 2026 Hotel Condesa Palace Acapulco · Nueva Administración 2026
          </p>
          <p
            className="text-xs"
            style={{ color: "oklch(0.50 0.03 240)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
