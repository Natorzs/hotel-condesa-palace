/*
 * Navbar — Hotel Condesa Palace Acapulco
 * Design: Transparent → Frosted navy on scroll
 * Typography: DM Sans 500
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Sparkles } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Habitaciones", href: "#habitaciones" },
  { label: "Servicios", href: "#servicios" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

const promoLink = { label: "Promociones", href: "#promociones" };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "navbar-scrolled py-3" : "py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
            className="flex flex-col leading-none group"
          >
            <span
              className="text-white font-serif text-xl font-semibold tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Condesa Palace
            </span>
            <span
              className="text-xs font-medium tracking-[0.18em] uppercase mt-0.5"
              style={{ color: "oklch(0.82 0.07 75)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Acapulco
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ background: "oklch(0.82 0.07 75)" }}
                  />
                </a>
              </li>
            ))}
            {/* Promo button with badge */}
            <li className="relative">
              <motion.div
                className="absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold"
                style={{
                  background: "oklch(0.577 0.245 27.325)",
                  color: "white",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ¡Oferta!
              </motion.div>
              <button
                onClick={() => handleNavClick(promoLink.href)}
                className="flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: "oklch(0.82 0.07 75)",
                  color: "oklch(0.15 0.05 240)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <Sparkles size={16} />
                Promociones
              </button>
            </li>
          </ul>

          {/* CTA Phone */}
          <a
            href="tel:+527444705130"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <Phone size={15} style={{ color: "oklch(0.82 0.07 75)" }} />
            <span>+52 744 470 5130</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-1"
            aria-label="Menú"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col pt-20"
            style={{ background: "oklch(0.12 0.06 240 / 0.97)", backdropFilter: "blur(12px)" }}
          >
            <ul className="flex flex-col items-center gap-6 mt-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-white text-2xl font-medium"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              {/* Mobile promo button with badge */}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
                className="relative"
              >
                <motion.div
                  className="absolute -top-3 -right-3 px-2 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: "oklch(0.577 0.245 27.325)",
                    color: "white",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ¡Oferta!
                </motion.div>
                <button
                  onClick={() => handleNavClick(promoLink.href)}
                  className="flex items-center gap-2 px-6 py-3 rounded-sm text-lg font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: "oklch(0.82 0.07 75)",
                    color: "oklch(0.15 0.05 240)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <Sparkles size={18} />
                  Promociones
                </button>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.07 }}
                className="mt-2"
              >
                <a
                  href="tel:+527444705130"
                  className="flex items-center gap-2 text-lg font-medium"
                  style={{ color: "oklch(0.82 0.07 75)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  <Phone size={18} />
                  +52 744 470 5130
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
