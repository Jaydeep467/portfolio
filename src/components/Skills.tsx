// import React from "react";
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
  "Cloud Platforms": ["AWS", "AWS EC2", "AWS S3", "AWS Lambda", "Firebase", "GCP"],
};

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-start bg-white px-6 py-20"
    >
      {/* Section Title */}
      <motion.h2
        className="text-5xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>

      <motion.p
        className="text-xl text-gray-600 mb-16 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        A showcase of my technical expertise across programming, frameworks, and
        cloud platforms.
      </motion.p>

      {/* Skills Categories */}
      <div className="w-full max-w-6xl flex flex-col gap-12 items-center">
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div
            key={category}
            className="bg-gray-50 border border-gray-200 rounded-2xl shadow-lg p-8 w-full max-w-5xl flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              {category}
            </h3>

            {/* Skill Chips */}
            <div className="flex flex-wrap justify-center gap-4">
              {items.map((skill) => (
                <motion.span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-5 py-2 rounded-full text-lg font-medium shadow-sm hover:bg-blue-200 transition"
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
