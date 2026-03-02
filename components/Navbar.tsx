"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#about",    label: "About"    },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills",   label: "Skills"   },
  { href: "/contact",   label: "Contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const { theme, toggleTheme }    = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-primary/90 backdrop-blur-xl border-b border-base"
          : "bg-transparent border-b border-transparent"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="no-underline">
          <span className="font-display text-2xl font-bold text-primary tracking-tight">
            talish<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-base bg-secondary
                       flex items-center justify-center text-lg cursor-pointer
                       hover:border-accent transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </motion.button>

          {/* Resume */}
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex px-5 py-2 rounded-lg border border-accent
                       text-accent text-sm font-semibold no-underline
                       hover:bg-sky-500/10 transition-colors duration-200"
          >
            Resume
          </motion.a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden bg-transparent border-none cursor-pointer
                       text-primary text-2xl leading-none p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-card border-b border-base overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-secondary font-body text-[0.95rem] no-underline
                             border-b border-base last:border-0 hover:text-accent
                             transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="/resume.pdf"
                download
                className="mt-3 text-accent font-body text-[0.95rem] no-underline"
              >
                View Resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
