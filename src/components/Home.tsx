import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Home() {
  const name = "Jaydeep Patil";

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-black px-6 pt-40 pb-20 overflow-hidden text-center"
    >
      {/* 🔮 Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-30"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 bg-red-900 rounded-full filter blur-3xl opacity-10"
          animate={{ x: [0, -120, 0], y: [0, -60, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-20"
          animate={{ x: [0, 80, 0], y: [0, -80, 0] }}
          transition={{ duration: 14, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      {/* Profile Image */}
      <motion.div
        className="flex justify-center mb-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/Resume_pic (1).png"
          alt="Profile"
          className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-[0_0_50px_#3B82F6]"
        />
      </motion.div>

      {/* Animated Name - Typewriter Effect */}
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 flex justify-center text-blue-500 drop-shadow-lg">
        <TypeAnimation
          sequence={[name, 2000]} // your name and wait 2s before repeating
          wrapper="span"
          cursor={true}          // blinking cursor
          speed={350 as any}            // typing speed in ms per character
          repeat={Infinity}      // loop indefinitely
          style={{ display: "inline-block" }}
        />
      </h1>

      {/* Short Intro */}
      <motion.p
        className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Passionate software developer who loves solving complex problems
        and building scalable, user-friendly solutions.
      </motion.p>

      {/* Resume Summary Box */}
      <motion.div
        className="bg-gray-900/80 border border-gray-700 shadow-xl rounded-2xl p-8 max-w-2xl backdrop-blur-sm"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
          With hands-on experience in full-stack development, cloud services,
          and data-driven applications, I strive to deliver impactful solutions
          that bridge user needs with technology.
        </p>
        <a
          href="/Jaydeep%20Patil_Resume.pdf"
          download="Jaydeep-Patil-Resume.pdf"
          className="relative z-10 inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-lg shadow-md hover:opacity-90 transition text-lg font-semibold"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}

export default Home;
