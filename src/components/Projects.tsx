import React from "react";

const projects = [
  {
    title: "Distributed Event Logging System",
    description:
      "Built a fault-tolerant, scalable logging system with Apache Kafka, Logstash, Elasticsearch, and Kibana for real-time analytics. Implemented partitioning, replication, and Dead Letter Queues to ensure zero log loss and fast recovery.",
    tech: ["Kafka", "Logstash", "Elasticsearch", "Kibana", "Docker"],
    links: { github: "#" },
  },
  {
    title: "FMWP (Finance Management Web App)",
    description:
      "React-based finance app for expense tracking, budgeting, and visualization with interactive charts. Integrated MongoDB, secure REST APIs, and deployed on AWS & Netlify. Optimized load times with lazy loading and code splitting.",
    tech: ["React", "MongoDB", "Node.js", "AWS", "Netlify"],
    links: { live: "#", github: "#" },
  },
  {
    title: "Retail Sales Forecasting with AI",
    description:
      "Designed a machine learning pipeline with Scikit-learn & TensorFlow using LSTM-based models. Achieved 20% better accuracy for forecasting sales. Integrated Tableau dashboards for trend visualization.",
    tech: ["Python", "TensorFlow", "Scikit-learn", "Tableau"],
    links: { github: "#" },
  },
  {
    title: "Customer Segmentation & Recommendation System",
    description:
      "Implemented RFM-based segmentation with K-Means clustering and collaborative filtering recommendation system. Increased engagement by 25%. Built with SQL, Pandas, and ML workflows.",
    tech: ["Python", "SQL", "Pandas", "Scikit-learn"],
    links: { github: "#" },
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-50 px-6 py-20 flex flex-col items-center"
    >
      {/* Header */}
      <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
        Projects
      </h2>
      <p className="text-xl text-gray-600 mb-12 text-center">
        Some of my featured work
      </p>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 flex flex-col justify-between hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-6">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex space-x-4">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-900 transition"
                >
                  GitHub
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
