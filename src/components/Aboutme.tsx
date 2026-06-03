import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const education = [
  {
    degree: "M.S. Computer Science",
    school: "Arizona State University",
    location: "Tempe, AZ",
    duration: "Aug 2023 – May 2025",
    gpa: "GPA: 3.80 / 4.0",
    courses: [
      "Distributed Database Systems",
      "Advanced Operating Systems",
      "Statistical Machine Learning",
      "Data Mining",
      "Blockchain",
      "Software Security",
      "Data Visualization",
      "Digital Video Processing",
    ],
  },
  {
    degree: "B.E. Electronics & Computer Science",
    school: "Fr. Agnel College of Engineering",
    location: "Mumbai, India",
    duration: "Aug 2019 – May 2023",
    gpa: "GPA: 9.28 / 10",
    courses: [
      "Data Structures & Algorithms",
      "OOP",
      "AI & Machine Learning",
      "Database Systems",
      "NLP",
      "Cloud Computing",
      "Big Data",
      "IoT",
    ],
  },
];

const certifications = [
  {
    name: "HackerRank — Problem Solving: Intermediate",
    link: "https://www.hackerrank.com/certificates/7a43c355bf00",
    issuer: "HackerRank",
  },
  {
    name: "Python Data Structures",
    link: "https://coursera.org/share/4ff73223410cc9503c4ecd35d9d2e91b",
    issuer: "Coursera / University of Michigan",
  },
  {
    name: "Data Scientist's Toolbox",
    link: "https://coursera.org/share/5210c8c183032d5818153e3bcb5b2da4",
    issuer: "Coursera / Johns Hopkins",
  },
];

function AboutMe() {
  return (
    <section id="about" className="relative w-full overflow-hidden py-28 px-6">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #f472b6, transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Who I am</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            About <span className="grad-text">Me</span>
          </h2>
        </motion.div>

        {/* Top: Profile + Quick info */}
        <motion.div
          className="glass-card p-8 mb-8 flex flex-col md:flex-row gap-8 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Avatar */}
          <div className="shrink-0">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#4f9eff] to-[#a78bfa] flex items-center justify-center text-2xl font-extrabold text-white shadow-[0_0_30px_rgba(79,158,255,0.3)]"
              style={{ fontFamily: "'Space Mono', monospace" }}>
              JP
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-1">Jaydeep Patil</h3>
            <p className="text-[#4f9eff] font-medium text-sm mb-4">Full Stack Software Engineer</p>

            <p className="text-white/55 leading-relaxed mb-6 max-w-2xl">
              Software engineer with a strong bias for shipping — I've built everything from real-time LLM
              inference systems to full e-commerce platforms from scratch. M.S. CS from ASU (3.80 GPA),
              currently engineering at Skyfarer Academy. I care deeply about performance, clean architecture,
              and code that actually matters in production.
            </p>

            {/* Meta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Location", value: "Tempe, AZ" },
                { label: "Experience", value: "2+ years" },
                { label: "Education", value: "M.S. CS, ASU" },
                { label: "Status", value: "Open to work" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-white/25 text-xs mb-1" style={{ fontFamily: "'Space Mono', monospace" }}>
                    {item.label.toUpperCase()}
                  </p>
                  <p className="text-white/80 text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Social buttons */}
            <div className="flex flex-wrap gap-3">
              <a href="mailto:patiljaydeep688@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-white/60 text-sm hover:border-[#4f9eff]/40 hover:text-white transition-all duration-200">
                <FaEnvelope /> patiljaydeep688@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/jaydeep-patil-9b9813217/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-white/60 text-sm hover:border-[#4f9eff]/40 hover:text-[#4f9eff] transition-all duration-200">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/Jaydeep467"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-white/60 text-sm hover:border-white/30 hover:text-white transition-all duration-200">
                <FaGithub /> Jaydeep467
              </a>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
            <span className="text-[#4f9eff]" style={{ fontFamily: "'Space Mono', monospace" }}>01.</span>
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-base font-bold text-white mb-1">{edu.degree}</h4>
                <p className="text-[#4f9eff] text-sm font-medium">{edu.school}</p>
                <p className="text-white/35 text-xs mt-0.5 mb-1" style={{ fontFamily: "'Space Mono', monospace" }}>
                  {edu.location}
                </p>
                <div className="flex gap-3 mt-2 mb-4">
                  <span className="tag text-[10px]">{edu.duration}</span>
                  <span className="tag text-[10px] border-[#4f9eff]/30 text-[#4f9eff]">{edu.gpa}</span>
                </div>
                <p className="text-white/30 text-xs mb-2" style={{ fontFamily: "'Space Mono', monospace" }}>
                  KEY COURSES
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.courses.map((c) => (
                    <span key={c} className="tag text-[10px]">{c}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
            <span className="text-[#4f9eff]" style={{ fontFamily: "'Space Mono', monospace" }}>02.</span>
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <motion.a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 flex flex-col gap-2 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-white/70 text-sm font-medium group-hover:text-white transition-colors leading-snug">
                  {cert.name}
                </p>
                <p className="text-white/30 text-xs" style={{ fontFamily: "'Space Mono', monospace" }}>
                  {cert.issuer}
                </p>
                <span className="text-[#4f9eff] text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  View certificate →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
