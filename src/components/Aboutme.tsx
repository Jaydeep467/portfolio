import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

// Sample Certifications - you can update these later
const certifications = [
  "Google - Operating Systems and You: Becoming a Power User",
  "Coursera - Python Data Structures",
  "Hackerrank - Problem Solving:Intermediate",
  "Coursera - Data Scientist's Toolbox"
];

function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-start bg-gray-50 px-6 py-20"
    >
      {/* About Me Heading */}
      <h2 className="text-5xl font-extrabold mb-4">About Me</h2>
      <p className="text-xl text-gray-700 mb-12 text-center max-w-4xl">
        Passionate software developer with experience in full-stack development, cloud services, and data-driven applications. I love building scalable and user-friendly solutions.
      </p>

      {/* Contact Card + Certifications */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mb-16">
        {/* Contact Card */}
        <div className="w-full md:w-3/5 bg-white shadow-lg rounded-2xl p-8 flex flex-col items-start">
          {/* Logo + Name */}
          <div className="flex items-center mb-4">
            <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold mr-4">
              JP
            </div>
            <h3 className="text-3xl font-bold">Jaydeep Patil</h3>
          </div>

          {/* Location & Experience */}
          <div className="flex justify-between w-full mb-2 text-gray-700 font-semibold">
            <span>Location: Tempe, Arizona, USA</span>
            <span>Email: patiljaydeep688@gmail.com</span>
          </div>

          {/* Phone & Email */}
          <div className="flex justify-between w-full mb-4 text-gray-700 font-semibold">
            <span>Phone: +1 480-273-9189</span>
            <span>Experience: 2+ years</span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4">
            <a
              href="mailto:patiljaydeep688@gmail.com?subject=Hello&body=I%20want%20to%20connect"
              className="flex items-center px-3 py-2 rounded-full border border-gray-800 text-gray-800 hover:bg-red-600 hover:text-white transition"
            >
              <FaEnvelope className="mr-2" /> Gmail
            </a>

            <a
              href="https://www.linkedin.com/in/jaydeep-patil-9b9813217/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-full border border-gray-800 text-gray-800 hover:bg-blue-800 hover:text-white transition"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>

            <a
              href="https://github.com/Jaydeep467"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-full border border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white transition"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>

            <a
              href="https://www.instagram.com/jaydeeep_09/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-full border border-gray-800 text-gray-800 hover:bg-pink-600 hover:text-white transition"
            >
              <FaInstagram className="mr-2" /> Instagram
            </a>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="w-full md:w-2/5 bg-white shadow-lg rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-bold mb-4">Certifications</h3>
          <p className="text-gray-600 mb-6">
            Some of my top certifications and achievements:
          </p>
          <ul className="flex flex-wrap gap-2">
            {certifications.map((cert, index) => (
              <li
                key={index}
                className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-gray-700 text-sm w-96 text-center"
              >
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>


      {/* Education Heading */}
      <h3 className="text-4xl font-extrabold mb-8">Education</h3>

      {/* Education Cards */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Master's */}
        <div className="flex-1 bg-white shadow-lg rounded-2xl p-6 flex flex-col">
          <h4 className="text-2xl font-bold mb-2">M.S. Computer Science</h4>
          <p className="text-gray-700 mb-2">Arizona State University, Tempe, AZ</p>
          <p className="text-gray-600 mb-6">Aug 2023 – May 2025 | GPA: 3.80</p>
          <p className="text-gray-700 font-semibold mb-2">Major Courses:</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1 text-gray-700 text-sm">
              Distributed Database Systems
            </span>
            <span className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1 text-gray-700 text-sm">
              Advanced Operating Systems
            </span>
            <span className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1 text-gray-700 text-sm">
              Data Mining
            </span>
            <span className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1 text-gray-700 text-sm">
              Data Visualisation
            </span>
            <span className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1 text-gray-700 text-sm">
              Statistical Machine Learning
            </span>
            <span className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1 text-gray-700 text-sm">
              Blockchain
            </span>
            <span className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1 text-gray-700 text-sm">
              Software Security
            </span>
            <span className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1 text-gray-700 text-sm">
              Digital Video Processing
            </span>
          </div>
        </div>

        {/* Bachelor's */}
        <div className="flex-1 bg-white shadow-lg rounded-2xl p-6 flex flex-col">
          <h4 className="text-2xl font-bold mb-2">B.E. Electronics & Computer Science</h4>
          <p className="text-gray-700 mb-2">Fr. Agnel Conceicao Rodrigues College of Engineering, Mumbai, India</p>
          <p className="text-gray-600 mb-6">Aug 2019 – May 2023 | GPA: 9.28</p>
          <p className="text-gray-700 font-semibold mb-2">Major Courses:</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1 text-gray-700 text-sm">
              Data Structures
            </span>
            <span className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1 text-gray-700 text-sm">
              Web Development
            </span>
            <span className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1 text-gray-700 text-sm">
              AI & ML
            </span>
            <span className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1 text-gray-700 text-sm">
              Database Systems
            </span>
            <span className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1 text-gray-700 text-sm">
              OOP
            </span>
            <span className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1 text-gray-700 text-sm">
              NLP
            </span>
            <span className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1 text-gray-700 text-sm">
              Cloud Computing
            </span>
            <span className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1 text-gray-700 text-sm">
              IOT
            </span>
            <span className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1 text-gray-700 text-sm">
              Big Data
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
