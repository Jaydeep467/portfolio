// import React from "react";
import { motion } from "framer-motion";

function Home() {
  const name = "Jaydeep Patil".split("");

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-start bg-gray-50 px-6 py-40"
    >
      {/* Top Section - Name/Intro + Photo */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-7xl gap-x-32">
        {/* Left Side: Name + Description */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Animated Name */}
          <h1 className="text-9xl font-extrabold mb-6 flex flex-wrap">
            {name.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.05,
                  delay: index * 0.1, // stagger effect
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          {/* Description with fade-in delay */}
          <motion.p
            className="text-3xl text-gray-700 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: name.length * 0.1 }}
          >
            Passionate software developer who loves solving complex problems
            and building scalable, user-friendly solutions.
          </motion.p>
        </div>

        {/* Right Side: Profile Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-between md:justify-end mt-10 md:mt-0 md:ml-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            src="picture/Resume_pic.png"
            alt="Profile"
            className="w-96 h-96 rounded-full object-cover shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Resume Summary Box */}
      <motion.div
        className="mt-20 bg-blue-50 border border-blue-200 shadow-lg rounded-2xl p-10 max-w-3xl text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <p className="text-gray-700 text-xl mb-10 leading-relaxed">
          With hands-on experience in full-stack development, cloud services,
          and data-driven applications, I strive to deliver impactful solutions
          that bridge user needs with technology.
        </p>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-blue-500 text-white px-12 py-5 rounded-lg shadow-md hover:bg-blue-600 transition text-lg font-semibold"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}

export default Home;
