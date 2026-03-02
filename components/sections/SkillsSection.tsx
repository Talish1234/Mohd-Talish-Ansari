"use client";

import { motion } from "framer-motion";
import { Reveal, Stagger, fadeUp, scaleIn } from "@/components/MotionComponents";

const skillGroups = [
  { label: "Languages",     icon: "💬", skills: ["JavaScript","TypeScript","Python","C/C++","Java","HTML","CSS"] },
  { label: "Frontend",      icon: "🎨", skills: ["React.js","Redux Toolkit","React Router","Tailwind CSS","Bootstrap","SCSS"] },
  { label: "Backend",       icon: "⚙️", skills: ["Node.js","Express.js","Socket.io","JWT","REST APIs"] },
  { label: "Database & ORM",icon: "🗄️", skills: ["MongoDB","Mongoose","Prisma","SQL"] },
  { label: "Tools",         icon: "🛠️", skills: ["Git","GitHub","VS Code","Postman","Thunder Client","ESLint"] },
  { label: "Libraries",     icon: "📦", skills: ["Axios","React-Toastify","WebRTC","Fuse.js"] },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <Reveal variants={fadeUp}>
        <div className="mb-14">
          <p className="section-label mb-4">Skills</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-primary
                         leading-tight tracking-tight">
            My <span className="gradient-text">tech stack</span>
          </h2>
        </div>
      </Reveal>

      <Stagger stagger={0.08}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((g) => (
            <motion.div
              key={g.label}
              variants={scaleIn}
              whileHover={{ y: -6, boxShadow: "0 12px 32px var(--glow)", borderColor: "var(--accent-blue)" }}
              transition={{ duration: 0.25 }}
              className="glass-card rounded-2xl p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.span whileHover={{ rotate: 15, scale: 1.2 }} transition={{ duration: 0.2 }}
                  className="text-xl inline-block">
                  {g.icon}
                </motion.span>
                <h3 className="font-body font-semibold text-primary">{g.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <motion.span key={s} whileHover={{ scale: 1.08 }} className="tech-tag">{s}</motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Stagger>
    </section>
  );
}
