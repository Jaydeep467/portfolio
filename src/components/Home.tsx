import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden text-center">
      <div className="absolute inset-0 -z-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(79,158,255,0.08) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-1/4 right-1/4 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
      </div>

      {/* Profile image */}
      <motion.div className="relative mb-8 z-10"
        initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
        <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-2 ring-[#4f9eff]/30 shadow-[0_0_60px_rgba(79,158,255,0.2)]">
          <img src="/Resume_pic (1).png" alt="Jaydeep Patil" className="w-full h-full object-cover" />
        </div>
        <span className="absolute bottom-2 right-2 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-400 rounded-full ring-2 ring-[#080810] shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
      </motion.div>

      {/* Label */}
      <motion.span className="section-label z-10" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        Full Stack Software Engineer
      </motion.span>

      {/* Name */}
      <motion.h1
        className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight"
        style={{ fontFamily: "'Sora', sans-serif" }}
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
        <span className="text-white">Jaydeep</span> <span className="grad-text">Patil</span>
      </motion.h1>

      {/* Typewriter */}
      <motion.div className="relative z-10 text-white/50 mb-8 h-8"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <TypeAnimation
          sequence={["React + TypeScript Developer", 2000, "Node.js + PostgreSQL Engineer", 2000, "LLM & AI Tooling Builder", 2000, "AWS + Docker Practitioner", 2000]}
          wrapper="span" cursor={true} repeat={Infinity}
          style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(0.75rem, 2vw, 1rem)" }} />
      </motion.div>

      {/* Bio card */}
      <motion.div className="glass-card relative z-10 p-5 sm:p-8 w-full max-w-xl md:max-w-2xl mb-8 text-left"
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}>
        <div className="accent-line" />
        <p className="text-white/65 text-sm sm:text-base md:text-lg leading-relaxed">
          M.S. Computer Science from <span className="text-white font-medium">Arizona State University</span> (GPA 3.80).
          I build production-grade full-stack systems — from real-time LLM inference pipelines to e-commerce platforms at scale.
          Currently engineering at <span className="text-[#4f9eff] font-medium">Skyfarer Academy</span>, shipping features used by thousands of users.
        </p>
        <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
          {["React", "TypeScript", "Node.js", "PostgreSQL", "Python", "AWS", "Docker"].map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </motion.div>

      {/* CTA buttons */}
      <motion.div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-xs sm:max-w-none"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
        <a href="/Jaydeep%20Patil_Resume.pdf" download="Jaydeep-Patil-Resume.pdf"
          className="px-8 py-3 rounded-lg bg-[#4f9eff] text-[#080810] font-bold text-sm tracking-wide hover:bg-[#6fb0ff] transition-all duration-200 shadow-[0_0_20px_rgba(79,158,255,0.3)] hover:shadow-[0_0_30px_rgba(79,158,255,0.5)] text-center"
          style={{ fontFamily: "'Space Mono', monospace" }}>
          Download Resume
        </a>
        <a href="#projects"
          className="px-8 py-3 rounded-lg border border-white/15 text-white/80 font-medium text-sm hover:border-[#4f9eff]/50 hover:text-white transition-all duration-200 text-center"
          style={{ fontFamily: "'Space Mono', monospace" }}>
          View Projects →
        </a>
      </motion.div>

      {/* Socials */}
      <motion.div className="relative z-10 flex gap-6 mt-8 text-white/30"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
        <a href="https://github.com/Jaydeep467" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 text-xl p-2"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/jaydeep-patil-9b9813217/" target="_blank" rel="noopener noreferrer" className="hover:text-[#4f9eff] transition-colors duration-200 text-xl p-2"><FaLinkedin /></a>
        <a href="mailto:patiljaydeep688@gmail.com" className="hover:text-[#f472b6] transition-colors duration-200 text-xl p-2"><FaEnvelope /></a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
        animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <span className="text-xs" style={{ fontFamily: "'Space Mono', monospace", letterSpacing: "0.15em" }}>SCROLL</span>
        <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}

export default Home;