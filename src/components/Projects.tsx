// import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Distributed Event Logging System",
    duration: "Aug 2024 – Dec 2025",
    description: [
      "Built a fault-tolerant, scalable logging system with Apache Kafka, Logstash, Elasticsearch, and Kibana for real-time analytics.",
      "Implemented data partitioning, replication, and Dead Letter Queues to ensure zero log loss and quick recovery.",
      "Improved throughput and reduced query latency compared to traditional ELK setups, enabling faster troubleshooting.",
    ],
    github: "https://github.com/yourusername/event-logging-system",
  },
  {
    title: "Finance Management Web Application (FMWP)",
    duration: "May 2024 – Aug 2024",
    description: [
      "Built a React-based finance app for expense tracking, budgeting, and visualizing spending patterns via interactive charts.",
      "Reduced load times by 30% with lazy loading and code splitting.",
      "Deployed on AWS and Netlify for scalable and reliable access; integrated MongoDB and secure RESTful APIs.",
    ],
    github: "https://github.com/yourusername/fmwp",
  },
  {
    title: "Retail Sales Forecasting with AI Insights",
    duration: "Jan 2024 – Apr 2024",
    description: [
      "Designed a machine learning pipeline using Scikit-learn and TensorFlow for forecasting sales using historical, seasonal, and promotional data.",
      "Improved forecasting accuracy by 20% with LSTM-based models and optimized hyperparameters.",
      "Integrated a Tableau dashboard for visualizing sales trends, aiding inventory and marketing strategies.",
    ],
    github: "https://github.com/yourusername/sales-forecasting",
  },
  {
    title: "Customer Segmentation & Recommendation System",
    duration: "Jan 2023 – Apr 2023",
    description: [
      "Implemented SQL-based schema and Python pipelines to process transactional and demographic data.",
      "Used K-Means clustering for RFM-based customer segmentation and built a collaborative filtering recommendation model, increasing engagement by 25%.",
      "Queried and pre-processed data with Pandas and SQLAlchemy, integrating results into ML workflows.",
    ],
    github: "https://github.com/yourusername/customer-segmentation",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-start bg-gray-50 px-6 py-20"
    >
      {/* Section Heading */}
      <h2 className="text-5xl font-extrabold mb-4">Projects</h2>
      <p className="text-xl text-gray-600 mb-12">
        Some of the key projects I have worked on:
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block cursor-pointer"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white border rounded-xl p-6 shadow-md relative h-96 flex flex-col justify-between"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 25px rgba(59, 130, 246, 0.7)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* GitHub Icon */}
              <div className="absolute top-4 right-4 text-gray-700 text-2xl">
                <FaGithub />
              </div>

              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-500 mb-4">{project.duration}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          </motion.a>


        ))}
      </div>
    </section>
  );
}

export default Projects;
