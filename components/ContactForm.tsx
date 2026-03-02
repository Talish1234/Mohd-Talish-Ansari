"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm]     = useState({ name:"", email:"", subject:"", message:"" });
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setErrorMsg("Please fill in all required fields."); setStatus("error"); return;
    }
    setStatus("loading"); setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus("success"); setForm({ name:"", email:"", subject:"", message:"" }); }
      else { const d = await res.json(); setErrorMsg(d.error || "Something went wrong."); setStatus("error"); }
    } catch { setErrorMsg("Network error. Please try again."); setStatus("error"); }
  };

  return (
    <div className="bg-card border border-base rounded-2xl p-8 md:p-10">
      <h2 className="font-display text-2xl font-bold text-primary mb-1 tracking-tight">
        Send a message
      </h2>
      <p className="text-muted text-sm font-body mb-8">I&apos;ll respond as soon as possible.</p>

      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block font-mono text-[0.72rem] text-muted mb-1.5 tracking-widest uppercase">
            Name *
          </label>
          <input type="text" name="name" value={form.name} onChange={onChange}
            placeholder="Mohd Talish" className="form-input" />
        </div>
        <div>
          <label className="block font-mono text-[0.72rem] text-muted mb-1.5 tracking-widest uppercase">
            Email *
          </label>
          <input type="email" name="email" value={form.email} onChange={onChange}
            placeholder="you@example.com" className="form-input" />
        </div>
      </div>

      {/* Subject */}
      <div className="mb-4">
        <label className="block font-mono text-[0.72rem] text-muted mb-1.5 tracking-widest uppercase">
          Subject
        </label>
        <input type="text" name="subject" value={form.subject} onChange={onChange}
          placeholder="Project Inquiry / Job Opportunity..." className="form-input" />
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className="block font-mono text-[0.72rem] text-muted mb-1.5 tracking-widest uppercase">
          Message *
        </label>
        <textarea name="message" value={form.message} onChange={onChange} rows={5}
          placeholder="Tell me about your project or opportunity..."
          className="form-input resize-y min-h-[120px]" />
      </div>

      {/* Status banners */}
      {status === "success" && (
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg
                        px-4 py-3 mb-4 text-emerald-500 text-sm font-body">
          ✓ Message sent! I&apos;ll get back to you within 24 hours.
        </div>
      )}
      {status === "error" && errorMsg && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg
                        px-4 py-3 mb-4 text-red-400 text-sm font-body">
          ✗ {errorMsg}
        </div>
      )}

      {/* Submit */}
      <motion.button
        onClick={handleSubmit}
        disabled={status === "loading"}
        whileHover={status !== "loading" ? { scale: 1.02, boxShadow: "0 8px 24px rgba(14,165,233,0.35)" } : {}}
        whileTap={status !== "loading" ? { scale: 0.98 } : {}}
        className={`w-full py-3.5 rounded-xl border-none font-body font-semibold text-base
                    text-white flex items-center justify-center gap-2 cursor-pointer
                    transition-all duration-200
                    ${status === "loading" ? "bg-muted cursor-not-allowed" : "shimmer-btn"}`}
      >
        {status === "loading" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white
                             rounded-full animate-spin inline-block" />
            Sending...
          </>
        ) : "Send Message →"}
      </motion.button>
    </div>
  );
}
