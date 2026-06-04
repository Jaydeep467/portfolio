import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const SOCIAL_LINKS = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "patiljaydeep688@gmail.com",
    href: "mailto:patiljaydeep688@gmail.com",
    color: "hover:text-[#f472b6] hover:border-[#f472b6]/30",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "Jaydeep Patil",
    href: "https://www.linkedin.com/in/jaydeep-patil-9b9813217/",
    color: "hover:text-[#4f9eff] hover:border-[#4f9eff]/30",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "Jaydeep467",
    href: "https://github.com/Jaydeep467",
    color: "hover:text-white hover:border-white/30",
  },
];

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    emailjs
      .sendForm("service_xqoc0tn", "template_0dabxzu", formRef.current, "9bKlYLYi56tHhm3Fm")
      .then(
        () => { setLoading(false); setSent(true); formRef.current?.reset(); },
        () => { setLoading(false); alert("Failed to send. Please try again."); }
      );
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden py-28 px-6">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Get in touch</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Let's <span className="grad-text">Connect</span>
          </h2>
          <p className="mt-4 text-white/45 max-w-lg">
            Open to full-time SWE roles, collaboration, or just a good conversation about tech. Drop a message.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left: socials */}
          <motion.div
            className="md:col-span-2 flex flex-col gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`glass-card p-5 flex items-center gap-4 border border-white/6 text-white/40 transition-all duration-200 ${s.color}`}
              >
                <span className="text-xl">{s.icon}</span>
                <div>
                  <p className="text-xs text-white/25 mb-0.5" style={{ fontFamily: "'Space Mono', monospace" }}>
                    {s.label.toUpperCase()}
                  </p>
                  <p className="text-sm text-white/70 font-medium">{s.value}</p>
                </div>
                <span className="ml-auto text-xs opacity-0 group-hover:opacity-100">→</span>
              </a>
            ))}

            {/* Availability badge */}
            <div className="glass-card p-5 border border-emerald-500/20 mt-2">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] shrink-0" />
                <div>
                  <p className="text-emerald-400 text-sm font-medium">Available for opportunities</p>
                  <p className="text-white/30 text-xs mt-0.5">Open to full-time SWE roles</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8">
              {sent ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 gap-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-2xl">
                    ✓
                  </div>
                  <h4 className="text-white font-bold text-xl">Message sent!</h4>
                  <p className="text-white/40 text-center text-sm">I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-2 text-xs text-white/30 hover:text-white transition-colors"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    Send another →
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-white/30 mb-2" style={{ fontFamily: "'Space Mono', monospace" }}>
                        NAME *
                      </label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Your name"
                        required
                        className="w-full bg-white/3 border border-white/8 rounded-lg px-4 py-3 text-black placeholder-white/20 text-sm focus:outline-none focus:border-[#4f9eff]/50 focus:bg-white/5 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/30 mb-2" style={{ fontFamily: "'Space Mono', monospace" }}>
                        EMAIL *
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="w-full bg-white/3 border border-white/8 rounded-lg px-4 py-3 text-black placeholder-white/20 text-sm focus:outline-none focus:border-[#4f9eff]/50 focus:bg-white/5 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/30 mb-2" style={{ fontFamily: "'Space Mono', monospace" }}>
                      SUBJECT *
                    </label>
                    <input
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      required
                      className="w-full bg-white/3 border border-white/8 rounded-lg px-4 py-3 text-black placeholder-white/20 text-sm focus:outline-none focus:border-[#4f9eff]/50 focus:bg-white/5 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-white/30 mb-2" style={{ fontFamily: "'Space Mono', monospace" }}>
                      MESSAGE *
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell me about the opportunity or project..."
                      rows={5}
                      required
                      className="w-full bg-white/3 border border-white/8 rounded-lg px-4 py-3 text-black placeholder-white/20 text-sm focus:outline-none focus:border-[#4f9eff]/50 focus:bg-white/5 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-lg bg-[#4f9eff] text-[#080810] font-bold text-sm tracking-wide hover:bg-[#6fb0ff] transition-all duration-200 disabled:opacity-40 shadow-[0_0_20px_rgba(79,158,255,0.2)] hover:shadow-[0_0_30px_rgba(79,158,255,0.4)]"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    {loading ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
