/*
 * GallerySection — Hotel Condesa Palace Acapulco
 * Design: Grid gallery with lightbox modal, smooth transitions
 * Animation: Scroll-triggered stagger, hover zoom effect
 */

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663446829112/Zm6gCx7EqYxZPPtvKEXA4k/hero-hotel-acapulco-4B5DnzDLRWfeizS2siovj2.webp",
    alt: "Piscina con vista al océano",
    category: "Alberca",
  },
  {
    id: 2,
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663446829112/Zm6gCx7EqYxZPPtvKEXA4k/gallery-restaurant-ngyvKCnPGLMZjoH9wgBGeA.webp",
    alt: "Restaurante elegante con vista al atardecer",
    category: "Restaurante",
  },
  {
    id: 3,
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663446829112/Zm6gCx7EqYxZPPtvKEXA4k/gallery-lobby-WjM2aG4sUuvasN2kBmeg4r.webp",
    alt: "Lobby moderno con vista al mar",
    category: "Lobby",
  },
  {
    id: 4,
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663446829112/Zm6gCx7EqYxZPPtvKEXA4k/gallery-common-area-89RZJKGePANvvyf3uHQoFe.webp",
    alt: "Área común con vista panorámica",
    category: "Áreas Comunes",
  },
  {
    id: 5,
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663446829112/Zm6gCx7EqYxZPPtvKEXA4k/gallery-pool-day-29QvzTxCfcArMhUdCrdy3F.webp",
    alt: "Alberca diurna con palmeras",
    category: "Alberca",
  },
  {
    id: 6,
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663446829112/Zm6gCx7EqYxZPPtvKEXA4k/hotel-pool-night-GAgJYvFtVtBPX4xggr7fDx.webp",
    alt: "Alberca nocturna iluminada",
    category: "Alberca",
  },
];

function GalleryImage({
  image,
  index,
  onOpen,
}: {
  image: (typeof galleryImages)[0];
  index: number;
  onOpen: (id: number) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative rounded-sm overflow-hidden cursor-pointer group h-64"
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        style={{
          background: "oklch(0.12 0.06 240 / 0.80)",
        }}
      >
        <button
          onClick={() => onOpen(image.id)}
          className="px-6 py-2.5 rounded-sm text-sm font-semibold text-white transition-all duration-300"
          style={{
            background: "oklch(0.72 0.09 75)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Ver en grande
        </button>
      </div>
      {/* Category badge */}
      <div
        className="absolute top-3 left-3 px-3 py-1.5 rounded-sm text-xs font-medium"
        style={{
          background: "oklch(0.72 0.09 75)",
          color: "oklch(0.15 0.05 240)",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {image.category}
      </div>
    </motion.div>
  );
}

function Lightbox({
  image,
  onClose,
  onNext,
  onPrev,
}: {
  image: (typeof galleryImages)[0] | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "oklch(0 0 0 / 0.90)" }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-sm"
            />
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-sm transition-all duration-200"
              style={{ background: "oklch(0.12 0.06 240 / 0.80)" }}
              aria-label="Cerrar"
            >
              <X size={24} style={{ color: "white" }} />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-sm transition-all duration-200 hover:scale-110"
              style={{ background: "oklch(0.72 0.09 75)" }}
              aria-label="Anterior"
            >
              <ChevronLeft size={24} style={{ color: "oklch(0.15 0.05 240)" }} />
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-sm transition-all duration-200 hover:scale-110"
              style={{ background: "oklch(0.72 0.09 75)" }}
              aria-label="Siguiente"
            >
              <ChevronRight size={24} style={{ color: "oklch(0.15 0.05 240)" }} />
            </button>

            {/* Info */}
            <div
              className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"
              style={{
                background:
                  "linear-gradient(to top, oklch(0.12 0.06 240 / 0.95), transparent)",
              }}
            >
              <p className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {image.alt}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function GallerySection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedImage = galleryImages.find((img) => img.id === selectedId);
  const selectedIndex = galleryImages.findIndex((img) => img.id === selectedId);

  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % galleryImages.length;
    setSelectedId(galleryImages[nextIndex].id);
  };

  const handlePrev = () => {
    const prevIndex = (selectedIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedId(galleryImages[prevIndex].id);
  };

  return (
    <section
      id="galeria"
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
            <span className="section-label">Galería de Fotos</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight max-w-lg"
            style={{
              color: "oklch(0.22 0.06 240)",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Descubre nuestras
            <br />
            <em
              className="not-italic font-normal"
              style={{ color: "oklch(0.72 0.09 75)" }}
            >
              instalaciones
            </em>
          </h2>
          <p
            className="mt-4 text-base max-w-xl"
            style={{ color: "oklch(0.50 0.04 240)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Recorre virtualmente nuestras áreas comunes, alberca, restaurante y más. Haz clic en
            cualquier imagen para verla en grande.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, i) => (
            <GalleryImage
              key={image.id}
              image={image}
              index={i}
              onOpen={setSelectedId}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        image={selectedImage || null}
        onClose={() => setSelectedId(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
