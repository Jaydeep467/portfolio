import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Project = { title: string; subtitle: string; duration: string; stack: string[]; bullets: string[]; github: string; featured?: boolean; };

const projects: Project[] = [
  {
    title: "LLM Inference Pipeline", subtitle: "Production-grade LLM serving system", duration: "Jan – Mar 2025",
    stack: ["Python", "PyTorch", "Flask", "GPT-2", "Streamlit", "Docker"],
    bullets: [
      "Built a production LLM serving system with async request batching, mixed-precision (FP16) inference, and kernel-level GPU optimizations — improving throughput and memory utilization under concurrent load.",
      "Exposed real-time observability via P50/P99 latency tracking and a live Streamlit dashboard; Flask REST API supports batch inference, prompt templates, and streaming output.",
      "Containerized with Docker for reproducible deployment; designed for horizontal scale — directly applicable to AI agent and LLM-native infrastructure.",
    ],
    github: "https://github.com/Jaydeep467/LLM-inference-pipeline", featured: true,
  },
  {
    title: "ShopFlow", subtitle: "Full-stack e-commerce platform", duration: "Aug – Sep 2024",
    stack: ["Angular 17", "NgRx", "Node.js", "PostgreSQL", "Redis", "Stripe", "Docker"],
    bullets: [
      "Architected a full e-commerce platform with Angular 17 + NgRx state management, Node.js REST APIs, and PostgreSQL — supporting 250+ users with JWT auth, role-based access, and Stripe checkout integration.",
      "Implemented Redis caching and optimistic locking for real-time inventory updates — eliminating oversell race conditions under concurrent purchase load.",
      "Achieved full test coverage with 30 passing Jest tests and Cypress E2E coverage across critical purchase flows.",
    ],
    github: "https://github.com/Jaydeep467/ShopFlow", featured: true,
  },
  {
    title: "Traitlytics", subtitle: "ML-powered personality analytics platform", duration: "Aug – Nov 2024",
    stack: ["Python", "BERT", "Scikit-learn", "Flask", "React", "ReportLab"],
    bullets: [
      "Built an end-to-end ML pipeline processing 1M+ data points — automated scraping, TF-IDF vectorization, cosine similarity scoring, and Big Five (OCEAN) personality trait prediction.",
      "Fine-tuned a BERT transformer model improving accuracy ~25% over baseline — benchmarked against LR, RF, SVR, and CNN; C++-integrated Python routines reduced runtime ~30%.",
      "React dashboard with radar/line/doughnut charts and one-click PDF export via ReportLab; seeded with 210 realistic user profiles across 9 personality archetypes.",
    ],
    github: "https://github.com/Jaydeep467/Traitlytics",
  },
  {
    title: "TweetSense", subtitle: "Real-time NLP sentiment analysis platform", duration: "Jan – Apr 2024",
    stack: ["Python", "BERT", "VADER", "Flask", "React", "PostgreSQL", "WebSocket"],
    bullets: [
      "Built a dual-model NLP pipeline combining VADER and fine-tuned BERT — classifying real-time tweet streams into emotion categories with ~90% classification accuracy.",
      "Designed a low-latency Flask API with WebSocket streaming for real-time inference on high-volume unstructured text; live trends visualized via React dashboards.",
      "Shipped 35 passing tests across unit, integration, and model validation layers.",
    ],
    github: "https://github.com/Jaydeep467/TweetSense",
  },
  {
    title: "DevPulse", subtitle: "GitHub analytics & developer productivity dashboard", duration: "Nov 2024 – Jan 2025",
    stack: ["React 18", "TypeScript", "Node.js", "PostgreSQL", "Chart.js", "Docker"],
    bullets: [
      "Engineered a real-time GitHub analytics dashboard — commit activity, PR data, and code review metrics aggregated in PostgreSQL, visualized via Chart.js with sub-200ms page loads under 50 concurrent users.",
      "Optimized PostgreSQL with 15+ composite indexes; processed 100K+ metrics monthly at 99.2% uptime.",
      "Fully TypeScript (strict mode) — 7 reusable React components, 7 RESTful endpoints, containerized with Docker.",
    ],
    github: "https://github.com/Jaydeep467/DevPulse",
  },
  {
    title: "FMWP", subtitle: "Finance Management Web Platform", duration: "May – Aug 2024",
    stack: ["FastAPI", "React 18", "PostgreSQL", "MongoDB", "JWT", "Docker", "AWS"],
    bullets: [
      "Built a full-stack finance platform with FastAPI + React 18 — expense tracking, ML-based anomaly detection (Isolation Forest), WebSocket streaming, and PDF/CSV report export with 17 passing tests.",
      "Reduced load times 30% via lazy loading and code splitting; deployed on AWS with MongoDB + PostgreSQL hybrid storage.",
      "Implemented JWT auth with refresh token rotation and role-based access control across all API endpoints.",
    ],
    github: "https://github.com/Jaydeep467/fmwp_application",
  },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardVariants = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

function Projects() {
  return (
    <section id="projects" className="relative w-full overflow-hidden py-28 px-6">
      <div className="absolute inset-0 pointer-events-none -z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.035]"
          style={{ background: "radial-gradient(circle, #f472b6, transparent 70%)" }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div className="mb-16" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <span className="section-label">What I've built</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Featured <span className="grad-text">Projects</span></h2>
          <p className="mt-4 text-white/45 max-w-xl">End-to-end systems built from scratch — full-stack platforms, ML pipelines, and AI infrastructure.</p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
          {projects.map((project) => (
            <motion.div key={project.title} className={`glass-card p-6 flex flex-col group relative overflow-hidden ${project.featured ? "border-[#4f9eff]/15" : ""}`} variants={cardVariants}>
              {project.featured && (
                <span className="absolute top-4 right-4 text-[10px] px-2 py-0.5 rounded-full bg-[#4f9eff]/10 text-[#4f9eff] border border-[#4f9eff]/20" style={{ fontFamily: "'Space Mono', monospace" }}>FEATURED</span>
              )}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white leading-snug pr-16">{project.title}</h3>
                <p className="text-white/40 text-sm mt-1">{project.subtitle}</p>
                <p className="text-white/25 text-xs mt-1" style={{ fontFamily: "'Space Mono', monospace" }}>{project.duration}</p>
              </div>
              <div className="accent-line" />
              <ul className="space-y-2.5 mb-5 flex-1">
                {project.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2.5 text-white/55 text-sm leading-relaxed">
                    <span className="text-[#4f9eff] shrink-0 mt-0.5 text-xs">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.stack.map((t) => <span key={t} className="tag text-[10px]">{t}</span>)}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/30 text-sm hover:text-white transition-colors duration-200 group/link mt-auto pt-4 border-t border-white/5"
                style={{ fontFamily: "'Space Mono', monospace" }}>
                <FaGithub className="text-base" />
                <span className="text-xs">View on GitHub</span>
                <FaExternalLinkAlt className="text-[10px] ml-auto opacity-0 group-hover/link:opacity-100 transition-opacity" />
              </a>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="mt-12 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
          <a href="https://github.com/Jaydeep467" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 rounded-lg text-white/50 text-sm hover:border-[#4f9eff]/40 hover:text-white transition-all duration-200"
            style={{ fontFamily: "'Space Mono', monospace" }}>
            <FaGithub /> View all repos on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;