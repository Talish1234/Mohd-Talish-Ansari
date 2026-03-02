import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Reveal, Stagger, fadeUp, scaleIn } from "@/components/MotionComponents";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mohd Talish Ansari — Full Stack Developer. Let's collaborate on your next project.",
  alternates: { canonical: "https://mohd-talish.dev/contact" },
};

const contactInfo = [
  { icon: "📧", label: "Email",    value: "talishtarik1234@gmail.com",    href: "mailto:talishtarik1234@gmail.com" },
  { icon: "📍", label: "Location", value: "New Delhi, India",              href: null },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/mohd-talish",   href: "https://www.linkedin.com/in/mohd-talish-ansari-a8a05b234" },
  { icon: "🐙", label: "GitHub",   value: "github.com/Talish1234",        href: "https://github.com/Talish1234" },
];

export default function ContactPage() {
  return (
    <section className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <Reveal variants={fadeUp}>
          <div className="mb-16">
            <p className="section-label mb-4">Contact</p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black text-primary
                           leading-[1.1] tracking-tight mb-5">
              Let&apos;s work{" "}
              <span className="gradient-text">together.</span>
            </h1>
            <p className="text-secondary text-lg max-w-xl leading-relaxed font-body">
              I&apos;m open to full-time roles, freelance projects, and collaboration.
              Send me a message and I&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-14 items-start">

          {/* Left — contact info */}
          <div>
            <p className="font-body font-semibold text-primary text-sm tracking-widest
                          uppercase mb-6">
              Reach me at
            </p>

            <Stagger stagger={0.08}>
              <div className="flex flex-col gap-3 mb-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-start gap-4 p-4 bg-secondary border border-base
                               rounded-xl"
                  >
                    <span className="text-xl mt-0.5 flex-shrink-0">{info.icon}</span>
                    <div>
                      <p className="font-mono text-[0.7rem] text-muted tracking-widest mb-0.5 uppercase">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a href={info.href} target="_blank" rel="noopener noreferrer"
                          className="text-accent no-underline text-sm font-body font-medium
                                     hover:underline">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-primary text-sm font-body font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Stagger>

            {/* Phone highlight */}
            <Reveal variants={fadeUp} delay={0.3}>
              <div className="p-5 bg-sky-500/5 border border-sky-500/20 rounded-xl">
                <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">Phone</p>
                <a href="tel:+918178849338"
                  className="font-display text-2xl font-bold text-primary no-underline
                             hover:text-accent transition-colors duration-200">
                  +91 81788 49338
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal variants={fadeUp} delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
