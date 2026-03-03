"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Reveal, Stagger, fadeUp, scaleIn } from "@/components/MotionComponents";

const certs = [
  {
    title: "Full Stack Developer Bootcamp",
    issuer: "GeeksforGeeks",
    desc: "Master Frontend to Backend — Intensive course from basic to advanced in both frontend and backend development.",
    color: "#0ea5e9",
    border: "border-l-sky-500",
    image: "gfg.png",
  },
  {
    title: "React.js: Beginner to Advanced",
    issuer: "Great Learning",
    desc: "In-depth exploration of React.js, the popular JavaScript library for building user interfaces.",
    color: "#10b981",
    border: "border-l-emerald-500",
    image: "gl.png",
  },
  {
    title: "API Bootcamp: Summer Edition",
    issuer: "GeeksforGeeks × Postman",
    desc: "Focused learning program covering essentials of API development and usage, sponsored by Postman.",
    color: "#f59e0b",
    border: "border-l-amber-500",
    image: "gfgxpostman.png",
  },
];

// Tracks per-image load state
function CertImage({
  src,
  alt,
  className,
  onClick,
}: {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative w-full h-full ${onClick ? "cursor-pointer" : ""}`} onClick={onClick}>
      {/* Blur placeholder — visible until image loads */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            key="blur-placeholder"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Shimmer / blur skeleton */}
            <div
              className="w-full h-full rounded-lg"
              style={{
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.04) 100%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s infinite",
                filter: "blur(1px)",
              }}
            />
            {/* Blurred ghost of the image itself */}
            <img
              src={src}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-contain p-4 blur-xl scale-105 opacity-40 select-none pointer-events-none"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actual image */}
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className={className}
      />

      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}

export default function CertificationsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedCert, setSelectedCert] = useState<number>(0);

  const modal = (
    <AnimatePresence>
      {selectedCert > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999]"
          onClick={() => setSelectedCert(0)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              onClick={() => setSelectedCert(0)}
              className="absolute -top-10 right-0 text-2xl text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Close certificate view"
            >
              ✕
            </motion.button>

            {/* Modal image with blur-in loader */}
            <div className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl overflow-hidden">
              <CertImage
                src={certs[selectedCert - 1]?.image}
                alt="Selected certificate"
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <Reveal variants={fadeUp}>
          <div className="mb-12">
            <p className="section-label mb-4">Certifications</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-primary leading-tight tracking-tight">
              Learning &amp; <span className="gradient-text">growing</span>
            </h2>
          </div>
        </Reveal>

        <Stagger stagger={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certs.map((c, i) => (
              <motion.div
                key={c.title}
                variants={scaleIn}
                whileHover={{ y: -6, boxShadow: "0 12px 32px var(--glow)" }}
                transition={{ duration: 0.25 }}
                className={`glass-card rounded-2xl p-7 border-l-4 ${c.border} relative overflow-hidden cursor-pointer`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <p className="font-mono text-xs tracking-widest mb-2" style={{ color: c.color }}>
                  {c.issuer}
                </p>
                <h3 className="font-body font-bold text-primary mb-3 leading-snug">{c.title}</h3>
                <p className="text-secondary text-sm leading-relaxed font-body">{c.desc}</p>

                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div
                      key="cert-overlay"
                      initial={{ x: "-100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "-100%" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="absolute inset-0 rounded-2xl overflow-hidden z-10"
                    >
                      <div className="absolute inset-0 bg-black/5 backdrop-blur-sm" />
                      {/* Card overlay image with blur loader */}
                      <div className="absolute inset-0 p-4">
                        <CertImage
                          src={c.image}
                          alt={`${c.title} certificate`}
                          className="w-full h-full object-contain"
                          onClick={() => setSelectedCert(i + 1)}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </Stagger>
      </div>

      {typeof document !== "undefined" && createPortal(modal, document.body)}
    </section>
  );
}