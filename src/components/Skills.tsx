import { motion } from "framer-motion";

const skillCategories = [
  { label: "Languages", icon: "⌨", skills: ["Python", "TypeScript", "JavaScript (ES6+)", "SQL", "Java", "C++", "Bash"] },
  { label: "Frontend", icon: "🖥", skills: ["React", "Next.js", "Tailwind CSS", "Redux Toolkit", "Zustand", "Chart.js", "Framer Motion"] },
  { label: "Backend & APIs", icon: "⚙", skills: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs", "GraphQL", "JWT", "OAuth 2.0"] },
  { label: "Databases", icon: "🗄", skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Query Optimization", "Schema Design"] },
  { label: "AI & ML", icon: "🤖", skills: ["PyTorch", "BERT", "Scikit-learn", "LLM Inference", "CUDA", "Prompt Engineering", "NLP", "Pandas"] },
  { label: "DevOps & Cloud", icon: "☁", skills: ["AWS (EC2, S3, Lambda)", "Docker", "GitHub Actions", "CI/CD", "Kafka", "Nginx", "Vercel"] },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

function Skills() {
  return (
    <section id="skills" className="relative w-full overflow-hidden py-28 px-6">
      <div className="absolute inset-0 pointer-events-none -z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent 70%)" }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div className="mb-16" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <span className="section-label">What I work with</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Technical <span className="grad-text">Skills</span>
          </h2>
          <p className="mt-4 text-white/45 max-w-xl">Battle-tested across production systems — full-stack, cloud infrastructure, and AI/ML pipelines.</p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          {skillCategories.map((cat) => (
            <motion.div key={cat.label} className="glass-card p-6 group" variants={cardVariants}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-sm font-semibold tracking-widest text-white/80 uppercase" style={{ fontFamily: "'Space Mono', monospace" }}>{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => <span key={skill} className="tag cursor-default">{skill}</span>)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;