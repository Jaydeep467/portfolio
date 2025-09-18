import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const certifications = [
  {
    name: "Google - Operating Systems and You: Becoming a Power User",
    link: "https://coursera.org/account/accomplishments/some-cert-link1",
  },
  {
    name: "Coursera - Python Data Structures",
    link: "https://coursera.org/account/accomplishments/some-cert-link2",
  },
  {
    name: "Hackerrank - Problem Solving: Intermediate",
    link: "https://www.hackerrank.com/certificates/some-cert-link3",
  },
  {
    name: "Coursera - Data Scientist's Toolbox",
    link: "https://coursera.org/account/accomplishments/some-cert-link4",
  },
];

function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-start bg-gray-900 px-6 py-20"
    >
      {/* Heading */}
      <h2 className="text-5xl font-extrabold mb-4 text-white">About Me</h2>
      <p className="text-xl text-gray-300 mb-12 text-center max-w-4xl">
        Passionate software developer with experience in full-stack development,
        cloud services, and data-driven applications. I love building scalable
        and user-friendly solutions.
      </p>

      {/* Contact + Certifications */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mb-16">
        {/* Contact Card */}
        <div className="w-full md:w-3/5 bg-gray-800 shadow-lg rounded-2xl p-8 flex flex-col items-start">
          {/* Logo + Name */}
          <div className="flex items-center mb-4">
            <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold mr-4">
              JP
            </div>
            <h3 className="text-3xl font-bold text-white">Jaydeep Patil</h3>
          </div>

          {/* Info */}
          <div className="flex justify-between w-full mb-2 text-gray-300 font-semibold">
            <span>Location: Tempe, Arizona, USA</span>
            <span>Email: patiljaydeep688@gmail.com</span>
          </div>
          <div className="flex justify-between w-full mb-4 text-gray-300 font-semibold">
            <span>Phone: +1 480-273-9189</span>
            <span>Experience: 2+ years</span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href="mailto:patiljaydeep688@gmail.com?subject=Hello&body=I%20want%20to%20connect"
              className="flex items-center px-3 py-2 rounded-full border border-gray-500 text-gray-300 hover:bg-red-600 hover:text-white cursor-pointer relative z-10 transition"
            >
              <FaEnvelope className="mr-2" /> Gmail
            </a>
            <a
              href="https://www.linkedin.com/in/jaydeep-patil-9b9813217/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-full border border-gray-500 text-gray-300 hover:bg-blue-700 hover:text-white cursor-pointer relative z-10 transition"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a
              href="https://github.com/Jaydeep467"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-full border border-gray-500 text-gray-300 hover:bg-gray-600 hover:text-white cursor-pointer relative z-10 transition"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="w-full md:w-2/5 bg-gray-800 shadow-lg rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-bold mb-4 text-white">Certifications</h3>
          <p className="text-gray-300 mb-6">
            Some of my top certifications and achievements:
          </p>
          <ul className="flex flex-col gap-3">
            {certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-gray-300 text-sm text-center cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.7)",
                  color: "#3b82f6",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {cert.name}
              </motion.a>
            ))}
          </ul>
        </div>
      </div>

      {/* Education */}
      <h3 className="text-4xl font-extrabold mb-8 text-white">Education</h3>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Master's */}
        <motion.div
          className="flex-1 bg-gray-800 shadow-lg rounded-2xl p-6 flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-bold mb-2 text-white">
            M.S. Computer Science
          </h4>
          <p className="text-gray-300 mb-2">
            Arizona State University, Tempe, AZ
          </p>
          <p className="text-gray-400 mb-6">Aug 2023 – May 2025 | GPA: 3.80</p>
          <p className="text-gray-300 font-semibold mb-2">Major Courses:</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Distributed Database Systems",
              "Advanced Operating Systems",
              "Data Mining",
              "Data Visualisation",
              "Statistical Machine Learning",
              "Blockchain",
              "Software Security",
              "Digital Video Processing",
            ].map((course) => (
              <span
                key={course}
                className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-blue-700 hover:text-white transition cursor-pointer"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bachelor's */}
        <motion.div
          className="flex-1 bg-gray-800 shadow-lg rounded-2xl p-6 flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-bold mb-2 text-white">
            B.E. Electronics & Computer Science
          </h4>
          <p className="text-gray-300 mb-2">
            Fr. Agnel Conceicao Rodrigues College of Engineering, Mumbai, India
          </p>
          <p className="text-gray-400 mb-6">Aug 2019 – May 2023 | GPA: 9.28</p>
          <p className="text-gray-300 font-semibold mb-2">Major Courses:</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Data Structures",
              "Web Development",
              "AI & ML",
              "Database Systems",
              "OOP",
              "NLP",
              "Cloud Computing",
              "IOT",
              "Big Data",
            ].map((course) => (
              <span
                key={course}
                className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-blue-700 hover:text-white transition cursor-pointer"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;
