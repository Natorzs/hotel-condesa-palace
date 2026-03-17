/*
 * Home — Hotel Condesa Palace Acapulco
 * Landing page: Hero → Rooms → Services → CTA → Location → Footer
 * Design: Lujo Costero Contemporáneo
 * Fonts: Playfair Display (serif) + DM Sans (sans)
 * Palette: Deep Ocean Blue + Pearl White + Gold Sand
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RoomsSection from "@/components/RoomsSection";
import ServicesSection from "@/components/ServicesSection";
import CtaBanner from "@/components/CtaBanner";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PromosBanner from "@/components/PromosBanner";

import PoliciesSection from "@/components/PoliciesSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/527444705130?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20habitaci%C3%B3n%20en%20el%20Hotel%20Condesa%20Palace%20Acapulco.";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.97 0.01 80)" }}>
      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <RoomsSection />
        <ServicesSection />
        <PromosBanner />
        <GallerySection />
        <TestimonialsSection />

        <PoliciesSection />
        <CtaBanner />
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 rounded-full shadow-2xl text-sm font-semibold transition-all duration-300 hover:scale-105"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          color: "white",
          fontFamily: "'DM Sans', sans-serif",
          boxShadow: "0 8px 32px rgba(37, 211, 102, 0.4)",
        }}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={20} />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
