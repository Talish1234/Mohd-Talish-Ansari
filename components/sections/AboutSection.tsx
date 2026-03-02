"use client";

import { motion } from "framer-motion";
import { Reveal, Stagger, fadeUp, slideRight, scaleIn } from "@/components/MotionComponents";

const infoCards = [
  { icon: "⚡", label: "Real-Time Apps", desc: "Socket.io & WebRTC" },
  { icon: "🏗️", label: "Full Stack",     desc: "MERN Stack"         },
  { icon: "🎨", label: "UI/UX",          desc: "Tailwind & SCSS"    },
  { icon: "🛡️", label: "Auth",           desc: "JWT & Security"     },
  { icon: "📦", label: "State Management",     desc: "Redux Toolkit"      },
  { icon: "🔌", label: "APIs",           desc: "REST & Postman"     },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* ── Left ── */}
        <div>
          <Reveal variants={slideRight}>
            <p className="section-label mb-4">About Me</p>
          </Reveal>

          <Reveal variants={fadeUp} delay={0.05}>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-primary
                           leading-tight mb-6 tracking-tight">
              Building the web,<br />
              <span className="gradient-text">one line at a time.</span>
            </h2>
          </Reveal>

          <Reveal variants={fadeUp} delay={0.1}>
            <p className="text-secondary leading-relaxed mb-4 font-body">
              I&apos;m a Computer Science graduate from Guru Gobind Singh Indraprastha University
              with a 9.3 CGPA. I specialize in building full-stack web applications using the MERN stack.
            </p>
          </Reveal>

          <Reveal variants={fadeUp} delay={0.15}>
            <p className="text-secondary leading-relaxed mb-8 font-body">
              From real-time chat applications with WebRTC to real estate platforms with advanced
              search — I love solving complex problems and shipping polished, performant products.
            </p>
          </Reveal>

          {/* Education cards */}
          <Reveal variants={fadeUp} delay={0.2}>
            <motion.div whileHover={{ scale: 1.01, borderColor: "var(--accent-blue)" }}
              transition={{ duration: 0.2 }}
              className="info-card mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-body font-semibold text-primary text-[0.95rem]">
                    B.Tech — Computer Science &amp; Engineering
                  </p>
                  <p className="text-muted text-sm mt-1 font-body">
                    Guru Gobind Singh Indraprastha University
                  </p>
                </div>
                <span className="bg-sky-500/10 text-accent px-2.5 py-1 rounded-md
                                 text-xs font-mono whitespace-nowrap ml-3">
                  9.3 CGPA
                </span>
              </div>
              <p className="text-muted text-xs mt-2 font-mono">2021 — 2025</p>
            </motion.div>
          </Reveal>

          <Reveal variants={fadeUp} delay={0.25}>
            <motion.div whileHover={{ scale: 1.01, borderColor: "var(--accent-amber)" }}
              transition={{ duration: 0.2 }}
              className="info-card">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-body font-semibold text-primary text-[0.95rem]">Matriculation</p>
                  <p className="text-muted text-sm mt-1 font-body">Rukmini Devi Public School, New Delhi</p>
                </div>
                <span className="bg-amber-500/10 text-amber-500 px-2.5 py-1 rounded-md
                                 text-xs font-mono whitespace-nowrap ml-3">
                  81.6%
                </span>
              </div>
              <p className="text-muted text-xs mt-2 font-mono">2017 — 2018</p>
            </motion.div>
          </Reveal>
        </div>

        {/* ── Right: Cards ── */}
        <Stagger stagger={0.08} delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {infoCards.map((item) => (
              <motion.div
                key={item.label}
                variants={scaleIn}
                whileHover={{ y: -6, boxShadow: "0 12px 32px var(--glow)", borderColor: "var(--accent-blue)" }}
                transition={{ duration: 0.25 }}
                className="glass-card rounded-xl p-5 cursor-default"
              >
                <motion.span whileHover={{ rotate: 15, scale: 1.2 }} transition={{ duration: 0.2 }}
                  className="text-2xl mb-2 block">
                  {item.icon}
                </motion.span>
                <p className="font-semibold text-sm text-primary font-body">{item.label}</p>
                <p className="text-muted text-xs mt-1 font-mono">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
