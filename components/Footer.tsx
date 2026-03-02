"use client";

import { motion } from "framer-motion";

const links = [
  { href: "mailto:talishtarik1234@gmail.com", label: "Email"    },
  { href: "https://www.linkedin.com/in/mohd-talish-ansari-a8a05b234",              label: "LinkedIn" },
  { href: "https://github.com/Talish1234",                label: "GitHub"   },
  { href: "https://leetcode.com/u/Talish1234/",              label: "LeetCode" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-base mt-20 py-10 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">
        <motion.p whileHover={{ scale: 1.05 }}
          className="font-display text-2xl font-bold text-primary cursor-default">
          talish<span className="text-accent">.</span>
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6">
          {links.map((l) => (
            <motion.a
              key={l.label}
              href={l.href}
              target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -2, color: "var(--accent-blue)" }}
              transition={{ duration: 0.15 }}
              className="text-muted text-sm font-body no-underline
                         hover:text-accent transition-colors duration-200"
            >
              {l.label}
            </motion.a>
          ))}
        </div>

        <p className="text-muted text-xs font-mono">
          © {new Date().getFullYear()} Mohd Talish Ansari — Built with Next.js
        </p>
      </div>
    </motion.footer>
  );
}
