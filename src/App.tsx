import { useState, useEffect } from "react";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import AboutMe from "./components/Aboutme";
import Contact from "./components/Contact";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function App() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-sans text-white bg-[#080810] scroll-smooth">

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 w-full z-[999] bg-[#080810] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home"
            className="text-lg font-bold text-white/90 hover:text-[#4f9eff] transition-colors duration-300"
            style={{ fontFamily: "'Space Mono', monospace", letterSpacing: "0.2em" }}>
            JP<span className="text-[#4f9eff]">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace("#", "");
              return (
                <a key={id} href={href}
                  className={`text-sm font-medium tracking-wide transition-all duration-200 relative group ${
                    active === id ? "text-[#4f9eff]" : "text-white/60 hover:text-white"
                  }`}>
                  {label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-[#4f9eff] transition-all duration-300 ${
                    active === id ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </a>
              );
            })}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu">
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </button>
        </div>

        {/* Mobile dropdown — inside nav, solid background, covers page */}
        {menuOpen && (
          <div className="md:hidden fixed top-[57px] left-0 w-full h-screen bg-[#080810] border-t border-white/5 overflow-y-auto">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace("#", "");
              return (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-8 py-5 text-base border-b border-white/5 transition-all duration-200 ${
                    active === id ? "text-[#4f9eff] bg-white/3" : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {label}
                </a>
              );
            })}
          </div>
        )}
      </nav>

      {/* ── Sections ── */}
      <section id="home" className="min-h-screen"><Home /></section>
      <section id="skills" className="min-h-screen"><Skills /></section>
      <section id="experience" className="min-h-screen"><Experience /></section>
      <section id="projects" className="min-h-screen"><Projects /></section>
      <section id="about" className="min-h-screen"><AboutMe /></section>
      <section id="contact" className="min-h-screen"><Contact /></section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-8 bg-[#080810]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>© 2026 Jaydeep Patil</p>
          <p className="text-white/20 text-sm">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;