import React from "react";
import { motion } from "framer-motion";

type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  description: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer Intern",
    company: "Skyfarer Academy, San Diego CA",
    duration: "April 2025 – Present",
    description: [
      "Developed full-stack web applications in a cross-functional team, streamlining UI for 200+ active users using React.js, Node.js, and MongoDB",
      "Built and integrated RESTful APIs to enhance user management and data retrieval, ensuring adherence to design principles.",
      "Strengthened collaborative development by contributing in Agile ceremonies and optimizing GitHub workflows.",
      "Wrote clean, maintainable code following team standards, and improved code quality through peer reviews.",
      "Streamlined deployments by facilitating CI/CD pipelines using GitHub Actions and Docker, improving deployment efficiency.",
    ],
  },
  {
    role: "Adobe Student Ambassador",
    company: "Arizona State University, Tempe, Arizona",
    duration: "Aug 2024 – May 2025",
    description: [
      "Created and shared interactive digital content through Adobe Express, boosting student engagement and design thinking",
      "Organized and led campus workshops on Adobe tools, promoting the integration of visual design in technology projects in partnership with Adobe representatives",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "TEDx CRCE, Fr. Agnel Engineering College, Mumbai, India",
    duration: "March 2022 – April 2023",
    description: [
      "Engineered a web application to optimize student council operations, improving task tracking and communication efficiency by 25%. Enhanced UI/UX through iterative design improvements, increasing user satisfaction by 25%.",
      "Facilitated seamless data flow and improved data management using React, Node.js, Express, and MongoDB.",
      "Conducted backend performance optimizations, improving API response times by 20%.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Blended Learning, Pune, India",
    duration: "May 2021 – July 2021",
    description: [
      "Developed and maintained responsive web applications with HTML, CSS, and JavaScript, improving accessibility and load performance.",
      "Integrated RESTful APIs for dynamic content updates, providing real-time access to critical information for users.",
      "Improved code quality and reduced UI inconsistencies by approximately 20% through code reviews, cross-browser debugging, and Git-based collaboration.",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col items-center justify-start bg-gray-50 px-6 py-20"
    >
      {/* Section Title */}
      <h2 className="text-5xl font-bold mb-4 text-gray-900 text-center">
        Experience
      </h2>
      <p className="text-xl text-gray-600 mb-16 text-center max-w-2xl">
        My professional and internship experiences
      </p>

      {/* Experience Cards */}
      <div className="relative w-full max-w-7xl flex flex-col gap-20">
      {/* Timeline vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-black transform -translate-x-1/2" />

        {experiences.map((exp, idx) => {
          const isRight = idx % 2 === 1;

          return (
            <motion.div
              key={idx}
              className={`relative md:w-1/2 w-full bg-white border border-black shadow-lg p-8 ${
                isRight ? "md:ml-auto md:text-justify" : "md:mr-auto md:text-justify"
              }`}
              initial={{ opacity: 0, x: isRight ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Dot connecting to timeline */}
              <div
                className={`hidden md:block absolute top-10 w-5 h-5 bg-blue-500 rounded-full ${
                  isRight ? "-left-2.5" : "-right-2.5"
                }`}
              />

              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {exp.role}
              </h3>
              <p className="text-gray-700 mb-2">{exp.company}</p>
              <p className="text-gray-500 mb-4">{exp.duration}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
