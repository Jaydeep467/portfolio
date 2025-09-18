import { motion } from "framer-motion";

function Home() {
  const name = "Jaydeep Patil".split("");

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-start bg-black px-6 py-40 overflow-hidden"
    >
      {/* 🔮 Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 bg-red-900 rounded-full filter blur-3xl opacity-10"
          animate={{
            x: [0, -120, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Top Section - Name/Intro + Photo */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-7xl gap-x-32 relative z-10">
        {/* Left Side: Name + Description */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Animated Name */}
          <h1 className="text-7xl md:text-9xl font-extrabold mb-6 flex flex-wrap">
            {name.map((char, index) => (
              <motion.span
                key={index}
                className="text-blue-500 drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.05,
                  delay: index * 0.1,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          {/* Description */}
          <motion.p
            className="text-2xl md:text-3xl text-gray-300 max-w-lg"
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
          transition={{ duration: 0.5, delay: 1 }}
        >
          <img
            src="/Resume_pic.png"
            alt="Profile"
            className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-[0_0_50px_#3B82F6]"
          />
        </motion.div>
      </div>

      {/* Resume Summary Box */}
      <motion.div
        className="mt-20 bg-gray-900/80 border border-gray-700 shadow-xl rounded-2xl p-10 max-w-3xl text-center backdrop-blur-sm relative z-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <p className="text-gray-300 text-xl mb-10 leading-relaxed">
          With hands-on experience in full-stack development, cloud services,
          and data-driven applications, I strive to deliver impactful solutions
          that bridge user needs with technology.
        </p>

        {/* Resume Button */}
        <a
          href="/Jaydeep Patil_Resume.pdf"
          download
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-lg shadow-md hover:opacity-90 transition text-lg font-semibold"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}

export default Home;
