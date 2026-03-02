"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dots: { x: number; y: number; vx: number; vy: number }[] = [];
    for (let i = 0; i < 60; i++) dots.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 });

    let raf: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot, i) => {
        dot.x += dot.vx; dot.y += dot.vy;
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
        ctx.beginPath(); ctx.arc(dot.x, dot.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(14,165,233,0.4)"; ctx.fill();
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[j].x - dot.x, dy = dots[j].y - dot.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath(); ctx.moveTo(dot.x, dot.y); ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(14,165,233,${0.1 * (1 - dist / 120)})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      });
      raf = requestAnimationFrame(animate);
    };
    animate();
    const onResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-60" />
      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 relative z-10 w-full">

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="available-badge mb-8 w-fit"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
          <span className="text-[0.8rem] text-emerald-500 font-mono tracking-widest">
            Available for opportunities
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp} initial="hidden" animate="show" custom={0.1}
          className="font-display text-[clamp(3rem,8vw,6rem)] font-black leading-[1.05]
                     text-primary mb-6 tracking-tight"
        >
          Mohd Talish<br />
          <span className="gradient-text">Ansari</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={fadeUp} initial="hidden" animate="show" custom={0.22}
          className="font-mono text-lg text-accent mb-5"
        >
          &gt; Full Stack Developer — MERN Stack
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeUp} initial="hidden" animate="show" custom={0.34}
          className="text-lg text-secondary max-w-xl leading-relaxed mb-10 font-body"
        >
          I craft real-time web applications and scalable backends with a focus on clean
          code and exceptional user experiences. B.Tech CSE graduate from GGSIPU with a 9.3 CGPA.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={0.46}
          className="flex flex-wrap gap-4"
        >
          <motion.a
            href="/#projects"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(14,165,233,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="shimmer-btn px-8 py-3.5 rounded-xl text-white font-body
                       font-semibold text-[0.95rem] no-underline inline-flex items-center gap-2"
          >
            View Projects →
          </motion.a>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-outline"
          >
            <Link href="/contact">
                        Let&apos;s Talk

            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={0.58}
          className="flex flex-wrap gap-10 mt-16"
        >
          {[
            { label: "CGPA",       value: "9.3"    },
            { label: "Projects",   value: "3+"      },
            { label: "Tech Stack", value: "MERN"    },
            { label: "Experience", value: "Fresher" },
          ].map((s) => (
            <motion.div key={s.label} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}
              className="stat-item">
              <p className="font-display text-[2rem] font-bold text-primary leading-none">{s.value}</p>
              <p className="text-[0.8rem] text-muted font-mono mt-1 tracking-widest">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
