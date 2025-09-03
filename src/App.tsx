import React from "react";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="w-full px-6 py-3 flex justify-between items-center">
          {/* Left side */}
          <div className="text-2xl font-bold pl-8">PORTFOLIO</div>

          {/* Right side */} 
          <div className="space-x-10 text-lg font-medium">
            <a href="#home" className="hover:text-blue-500">Home</a>
            <a href="#skills" className="hover:text-blue-500">Skills</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#experience" className="hover:text-blue-500">Experience</a>
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50">
        {/* <h1 className="text-4xl font-bold">About Me</h1> */}
        <Home />
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center bg-white">
        {/* <h1 className="text-4xl font-bold">Skills</h1> */}
        <Skills />
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-50">
        {/* <h1 className="text-4xl font-bold">Projects</h1> */}
        <Projects />
      </section>

      <section id="experience" className="min-h-screen flex items-center justify-center bg-white">
        {/* <h1 className="text-4xl font-bold">Experience</h1> */}
        <Experience />
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center bg-white">
        <h1 className="text-4xl font-bold">About</h1>
      </section>

      <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="text-4xl font-bold mb-6">Contact</h1>
        <form className="w-full max-w-md space-y-4">
          <input type="text" placeholder="Name" className="w-full border px-3 py-2 rounded"/>
          <input type="email" placeholder="Email" className="w-full border px-3 py-2 rounded"/>
          <textarea placeholder="Message" className="w-full border px-3 py-2 rounded"></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Send
          </button>
        </form>
        <div className="mt-6">
          <p>Email: youremail@example.com</p>
          <p>LinkedIn | GitHub</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-white shadow-inner">
        <p>Thanks for visiting! | Built with React & Tailwind</p>
        <p>© 2025 Your Name</p>
      </footer>
    </div>
  );
}

export default App;
