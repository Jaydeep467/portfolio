import { motion } from "framer-motion";

type SkillsMap = {
  [category: string]: string[];
};

const skills: SkillsMap = {
  "Programming Languages": ["Python", "Java", "C++", "SQL", "HTML", "C#"],
  "Frameworks & Libraries": [
    "React",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "Django",
    "Material UI",
    "Node.js",
    "Express.js",
    "Docker",
    "Git",
    "Tailwind CSS",
    "Next.js",
  ],
  "Cloud Platforms": [
    "AWS",
    "AWS EC2",
    "AWS S3",
    "AWS Lambda",
    "Firebase",
    "GCP",
  ],
};

function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-start px-6 py-20 overflow-hidden"
    >
      {/* 🔥 Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 opacity-30 blur-3xl"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Section Title */}
      <motion.h2
        className="relative text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>

      <motion.p
        className="relative text-xl text-gray-300 mb-16 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        A showcase of my technical expertise across programming, frameworks, and
        cloud platforms.
      </motion.p>

      {/* Skills Categories */}
      <div className="relative w-full max-w-6xl flex flex-col gap-12 items-center">
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div
            key={category}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 w-full max-w-5xl flex flex-col items-center text-center hover:shadow-blue-500/40 transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              {category}
            </h3>

            {/* Skill Chips */}
            <div className="flex flex-wrap justify-center gap-4">
              {items.map((skill) => (
                <motion.span
                  key={skill}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-full text-lg font-medium shadow-md hover:shadow-lg hover:from-purple-500 hover:to-pink-500 transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
