import { motion } from "framer-motion";

type Exp = { role: string; company: string; location: string; duration: string; type: string; bullets: string[]; tags: string[]; };

const experiences: Exp[] = [
  {
    role: "Software Engineer",
    company: "Skyfarer Academy",
    location: "San Diego, CA (Remote)",
    duration: "Apr 2025 – Present",
    type: "Full-time",
    bullets: [
      "Architected and shipped a buyer-pays-at-checkout shipping system — rebuilt the full payment + label-generation flow using Shippo API, replacing the legacy seller-pays model and automating label creation across all transactions.",
      "Engineered React/TypeScript UI features serving 200+ active marketplace users — built reusable component systems reducing per-feature dev time and maintaining zero critical regressions across 4 major releases.",
      "Designed and optimized PostgreSQL schemas and Node.js REST APIs for listing management, user auth, and order workflows — achieving sub-100ms p95 query performance under concurrent load.",
      "Owned CI/CD pipeline improvements using GitHub Actions and Docker — reduced deployment friction and enabled zero-downtime releases on a Sharetribe-based platform architecture.",
      "Drove PR reviews, identified and resolved edge-case bugs (including debounce fixes for checkout form race conditions), and maintained high code quality across an Agile team.",
    ],
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker", "Shippo API"],
  },
  {
    role: "Adobe Student Ambassador",
    company: "Arizona State University",
    location: "Tempe, AZ",
    duration: "Jan 2024 – May 2025",
    type: "Part-time",
    bullets: [
      "Represented Adobe on campus — organized and led workshops on Adobe Express and Creative Cloud tools, driving adoption among 100+ students across engineering and design programs.",
      "Partnered directly with Adobe representatives to design curriculum integrating visual design thinking into technical project workflows.",
    ],
    tags: ["Adobe Express", "Creative Cloud", "Workshop Facilitation"],
  },
  {
    role: "Software Developer",
    company: "Matroid - Contract work",
    location: "Tempe, USA",
    duration: "May 2024 – Jan 2025",
    type: "Contract",
    bullets: [
      "Designed and launched a React SPA serving 500+ concurrent users — real-time seat availability, dynamic registration flows, and role-gated dashboards; delivered with zero downtime on event day, supporting 3,000+ student registrations in a single session.",
      "Optimized MySQL queries cutting response time ~25% via execution plan profiling and schema indexing; built backend services with Java Spring Boot and owned end-to-end CI/CD across a 5-person team.",
      "Engineered 8+ Java Spring Boot REST API modules (enrollment, progress tracking, content delivery) with real-time data sync.",
      "Adopted GitHub Copilot during early availability to accelerate Java Spring Boot development — using AI-assisted code completion for boilerplate API modules and test case generation, cutting initial implementation time on repetitive CRUD endpoints.",
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "Spring Boot"],
  },
  {
    role: "Web Development Intern",
    company: "Blended Learning",
    location: "Pune, India",
    duration: "May 2021 – Jul 2021",
    type: "Internship",
    bullets: [
      "Developed and shipped responsive web features — improved page load performance and cross-browser accessibility for a platform with daily active users.",
      "Integrated RESTful APIs enabling real-time dynamic content updates, replacing static page refreshes and improving perceived UX.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "REST APIs"],
  },
];

function Experience() {
  return (
    <section id="experience" className="relative w-full overflow-hidden py-28 px-6">
      <div className="absolute inset-0 pointer-events-none -z-0">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #4f9eff, transparent 70%)" }} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div className="mb-16" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <span className="section-label">Where I've worked</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Work <span className="grad-text">Experience</span></h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-[#4f9eff]/40 via-[#a78bfa]/20 to-transparent hidden md:block" />
          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => (
              <motion.div key={idx} className="relative md:pl-12"
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }} viewport={{ once: true, margin: "-40px" }}>
                <div className="hidden md:flex absolute left-0 top-1 w-7 h-7 rounded-full items-center justify-center bg-[#080810] border border-[#4f9eff]/40 shadow-[0_0_12px_rgba(79,158,255,0.2)]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4f9eff]" />
                </div>
                <div className="glass-card p-7 hover:border-[#4f9eff]/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-[#4f9eff] font-medium mt-0.5">{exp.company}</p>
                      <p className="text-white/35 text-sm mt-0.5">{exp.location}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
                      <span className="text-xs px-3 py-1 rounded-full bg-[#4f9eff]/10 text-[#4f9eff] border border-[#4f9eff]/20" style={{ fontFamily: "'Space Mono', monospace" }}>{exp.duration}</span>
                      <span className="text-xs text-white/30" style={{ fontFamily: "'Space Mono', monospace" }}>{exp.type}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-5">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-white/60 text-sm leading-relaxed">
                        <span className="text-[#4f9eff] shrink-0 mt-0.5">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;