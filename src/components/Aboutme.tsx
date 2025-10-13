import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const certifications = [
  {
    name: "Google - Operating Systems and You: Becoming a Power User",
    link: "https://www.coursera.org/learn/os-power-user",
  },
  {
    name: "Coursera - Python Data Structures",
    link: "https://coursera.org/share/4ff73223410cc9503c4ecd35d9d2e91b",
  },
  {
    name: "Hackerrank - Problem Solving: Intermediate",
    link: "https://www.hackerrank.com/certificates/7a43c355bf00",
  },
  {
    name: "Coursera - Data Scientist's Toolbox",
    link: "https://coursera.org/share/5210c8c183032d5818153e3bcb5b2da4",
  },
];

function AboutMe() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col items-center justify-start px-6 py-20 overflow-hidden"
    >
      {/* 🔥 Animated Gradient Background (same as Projects) */}
      <motion.div
        className="absolute w-full inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 opacity-20 blur-3xl"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Heading */}
      <h2 className="relative text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        About Me
      </h2>
      <p className="relative text-xl text-gray-300 mb-12 text-center max-w-4xl">
        Passionate software developer with experience in full-stack development,
        cloud services, and data-driven applications. I love building scalable
        and user-friendly solutions.
      </p>

      {/* Contact + Certifications */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mb-16 relative z-10">
        {/* Contact Card */}
        <div className="w-full md:w-3/5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-8 flex flex-col items-start">
          <div className="flex items-center mb-4">
            <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold mr-4">
              JP
            </div>
            <h3 className="text-3xl font-bold text-white">Jaydeep Patil</h3>
          </div>

          <div className="flex justify-between w-full mb-2 text-gray-300 font-semibold">
            <span>Location: Tempe, Arizona, USA</span>
            <span>Email: patiljaydeep688@gmail.com</span>
          </div>
          <div className="flex justify-between w-full mb-4 text-gray-300 font-semibold">
            <span>Phone: +1 480-273-9189</span>
            <span>Experience: 2+ years</span>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href="mailto:patiljaydeep688@gmail.com?subject=Hello&body=I%20want%20to%20connect"
              className="flex items-center px-3 py-2 rounded-full border border-white/30 text-white hover:bg-red-600 hover:text-white cursor-pointer transition"
            >
              <FaEnvelope className="mr-2" /> Gmail
            </a>
            <a
              href="https://www.linkedin.com/in/jaydeep-patil-9b9813217/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-full border border-white/30 text-white hover:bg-blue-700 hover:text-white cursor-pointer transition"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a
              href="https://github.com/Jaydeep467"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-full border border-white/30 text-white hover:bg-gray-600 hover:text-white cursor-pointer transition"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="w-full md:w-2/5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-8 flex flex-col">
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
                className="block bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white text-sm text-center cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 30px rgba(59,130,246,0.7)",
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
      <h3 className="text-4xl font-extrabold mb-8 text-white relative z-10">
        Education
      </h3>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Master's */}
        <motion.div
          className="flex-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-6 flex flex-col"
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
                className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 hover:text-white transition cursor-pointer"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bachelor's */}
        <motion.div
          className="flex-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-6 flex flex-col"
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
                className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 hover:text-white transition cursor-pointer"
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
