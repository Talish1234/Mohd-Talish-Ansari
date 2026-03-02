"use client";

import { motion } from "framer-motion";
import { Reveal, Stagger, fadeUp } from "@/components/MotionComponents";
import Image from "next/image";

const projects = [
  {
    title: "Chatter Bird",
    subtitle: "Real-Time Chat & Video Calling App",
    description:
      "A highly responsive real-time messaging platform with instant delivery, typing indicators, live user presence detection, and one-to-one video calling powered by WebRTC.",
    stack: [
      "React.js","Node.js","Express.js","MongoDB","Socket.io",
      "WebRTC","Redux Toolkit","Tailwind CSS","Fuse.js",
    ],
    date: "September 2024",
    github: "https://github.com/Talish1234/ChatterBird",
    live: "https://chatter-bird-zeta.vercel.app",
    image: "/chatter-bird.png", // ← replace with your actual image path
    highlights: [
      "Real-time messaging with typing indicators",
      "WebRTC video calling — low latency",
      "Live user presence (online/offline/typing)",
    ],
    color: "#0ea5e9",
    colorRgb: "14,165,233",
    dotClass: "bg-sky-500",
  },
  {
    title: "Property Pulse",
    subtitle: "Real Estate Web Application",
    description:
      "A full-featured real estate platform with advanced property search, filtering by location/price/type, and an optimized backend handling high volumes of listing data.",
    stack: [
      "React.js","Node.js","Express.js","MongoDB","Prisma","SCSS","Socket.io",
    ],
    date: "August 2024",
    github: "https://github.com/Talish1234/mern-real-estate",
    live: "https://real-estate-frontend-woad.vercel.app",
    image: "/property-pulse.png", // ← replace with your actual image path
    highlights: [
      "Advanced search with Prisma & MongoDB",
      "Scalable backend for high data volumes",
      "Filter by location, price & type",
    ],
    color: "#10b981",
    colorRgb: "16,185,129",
    dotClass: "bg-emerald-500",
  },
  {
    title: "Blog Bytes",
    subtitle: "Blogging Platform",
    description:
      "A modern responsive blogging platform with rich text editing, user authentication with JWT, category tagging, and a clean editorial design.",
    stack: [
      "React.js","Node.js","Express.js","MongoDB","Mongoose",
      "JWT","Redux Toolkit","Tailwind CSS",
    ],
    date: "November 2023",
    github: "https://github.com/Talish1234/blogApp_frontend",
    live: "https://blogbytes-conq.onrender.com",
    image: "/blog-bytes.png", // ← replace with your actual image path
    highlights: [
      "Rich text editing & article management",
      "JWT-based authentication",
      "Category tagging for posts",
    ],
    color: "#f59e0b",
    colorRgb: "245,158,11",
    dotClass: "bg-amber-500",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">

        <Reveal variants={fadeUp}>
          <div className="mb-14">
            <p className="section-label mb-4">Projects</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-primary
                           leading-tight tracking-tight">
              Things I&apos;ve <span className="gradient-text">built</span>
            </h2>
          </div>
        </Reveal>

        <Stagger stagger={0.15}>
          <div className="flex flex-col gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  show: {
                    opacity: 1, y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ y: -4, boxShadow: `0 20px 48px rgba(${p.colorRgb},0.12)` }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-8 md:p-10 relative overflow-hidden"
              >
                {/* Watermark number */}
                <div
                  className="absolute -top-5 -right-2 font-display text-[8rem] font-black
                              leading-none select-none pointer-events-none"
                  style={{ color: `rgba(${p.colorRgb},0.04)` }}
                >
                  0{i + 1}
                </div>

                {/* Two-column layout: content left, image+buttons right */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start relative">

                  {/* ── Left: Content ── */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <motion.span
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                        className={`w-2.5 h-2.5 rounded-full ${p.dotClass} flex-shrink-0 inline-block`}
                      />
                      <p className="font-mono text-xs text-muted tracking-widest">{p.date}</p>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-primary mb-1 tracking-tight">
                      {p.title}
                    </h3>
                    <p className="font-body text-sm font-medium mb-4" style={{ color: p.color }}>
                      {p.subtitle}
                    </p>
                    <p className="text-secondary leading-relaxed mb-5 font-body max-w-xl">
                      {p.description}
                    </p>

                    <ul className="mb-5 space-y-1.5">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-secondary text-sm font-body">
                          <span className="flex-shrink-0 mt-0.5" style={{ color: p.color }}>▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((tech) => (
                        <motion.span key={tech} whileHover={{ scale: 1.05 }} className="tech-tag">
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* ── Right: Image + Buttons ── */}
                  <div className="flex flex-col gap-4 flex-shrink-0">

                    {/* Project screenshot */}
                    <motion.a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.25 }}
                      className="block relative rounded-xl overflow-hidden group"
                      style={{
                        boxShadow: `0 4px 24px rgba(${p.colorRgb},0.15)`,
                        border: `1px solid rgba(${p.colorRgb},0.2)`,
                      }}
                    >
                      {/* Colored top bar — mimics a browser chrome */}
                      <div
                        className="flex items-center gap-1.5 px-3 py-2"
                        style={{ background: `rgba(${p.colorRgb},0.12)` }}
                      >
                        <span className="w-2 h-2 rounded-full bg-red-400/70" />
                        <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
                        <span className="w-2 h-2 rounded-full bg-green-400/70" />
                        <span
                          className="ml-2 flex-1 text-[10px] font-mono truncate opacity-50"
                          style={{ color: p.color }}
                        >
                          {p.live.replace("https://", "")}
                        </span>
                      </div>

                      {/* Image */}
                      <div className="relative w-full aspect-[16/10] bg-black/10">
                        <Image
                          src={p.image}
                          alt={`${p.title} screenshot`}
                          fill
                          className="object-cover object-top transition-transform duration-500
                                     group-hover:scale-105 group-hover:object-center"
                          sizes="(max-width: 1024px) 100vw, 340px"
                        />

                        {/* Hover overlay */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100
                                     transition-opacity duration-300 flex items-center justify-center"
                          style={{ background: `rgba(${p.colorRgb},0.15)` }}
                        >
                          <span className="text-white text-xs font-semibold font-body
                                           bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                            View Live ↗
                          </span>
                        </div>
                      </div>
                    </motion.a>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <motion.a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, opacity: 0.9 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex-1 px-4 py-2.5 rounded-lg text-white text-sm font-semibold
                                   font-body no-underline text-center whitespace-nowrap"
                        style={{ background: p.color }}
                      >
                        Live Demo ↗
                      </motion.a>
                      <motion.a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, borderColor: p.color, color: p.color }}
                        whileTap={{ scale: 0.96 }}
                        className="flex-1 px-4 py-2.5 rounded-lg bg-transparent text-secondary
                                   text-sm font-medium font-body border border-base no-underline
                                   text-center whitespace-nowrap transition-colors duration-200"
                      >
                        GitHub
                      </motion.a>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
