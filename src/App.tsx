import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import AboutMe from "./components/Aboutme";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans text-white bg-black scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md shadow-md z-50">
        <div className="w-full px-6 py-3 flex justify-between items-center">
          {/* Left side */}
          <div className="text-2xl font-bold pl-8 text-blue-500">
            PORTFOLIO
          </div>

          {/* Right side */}
          <div className="space-x-10 text-lg font-medium">
            <a href="#home" className="hover:text-blue-400">Home</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#experience" className="hover:text-blue-400">Experience</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-black">
        <Home />
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center bg-black">
        <Skills />
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center bg-black">
        <Projects />
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center bg-black">
        <AboutMe />
      </section>

      <section id="experience" className="min-h-screen flex items-center justify-center bg-black">
        <Experience />
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-black">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-black border-t border-gray-800">
        <p className="text-gray-400">Thanks for visiting! | Built with React & Tailwind</p>
        <p className="text-gray-500">© 2025 Jaydeep Patil</p>
      </footer>
    </div>
  );
}

export default App;
