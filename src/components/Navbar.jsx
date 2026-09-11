import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import image from "../assets/logo.png";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section tracker
      const sections = ["about", "skills", "projects", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href) => {
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-16 transition-all duration-500
          ${scrolled
            ? "bg-[#070a13]/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(35,221,246,0.08)] border-b border-[#23ddf6]/10"
            : "bg-transparent"
          }`}
        style={{ padding: "0 clamp(1.5rem, 5vw, 7rem)" }}
      >
        {/* Logo */}
        <div
          className="h-10 w-10 cursor-pointer relative group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="absolute inset-0 rounded-full bg-[#23ddf6]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img
            className="h-full w-full object-cover relative z-10 transition-transform duration-300 group-hover:scale-110"
            src={image}
            alt="Portfolio logo"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-7 items-center text-sm font-medium tracking-wide">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.name} style={{ animationDelay: `${i * 0.1}s` }}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className={`relative pb-1 transition-colors duration-300 group
                      ${isActive ? "text-[#23ddf6]" : "text-gray-400 hover:text-white"}`}
                  >
                    <span className="font-mono text-[#23ddf6] text-xs mr-1 opacity-60">{String(i + 1).padStart(2, "0")}.</span>
                    {link.name}
                    {/* Animated underline */}
                    <span className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-[#23ddf6] to-[#7c6cff]
                      transition-all duration-300 origin-left
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => scrollTo("#contact")}
            className="btn-shimmer relative px-5 py-2 rounded-lg text-sm font-semibold text-black
              bg-gradient-to-r from-[#23ddf6] to-[#7c6cff]
              shadow-[0_0_20px_rgba(35,221,246,0.4)]
              hover:shadow-[0_0_35px_rgba(35,221,246,0.7)]
              hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Let's Talk
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white hover:text-[#23ddf6] transition-colors duration-200 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="animate-slide-down fixed top-16 left-0 w-full bg-[#070a13]/96 backdrop-blur-xl
          z-50 flex flex-col gap-5 py-8 px-8 md:hidden
          border-b border-[#23ddf6]/15 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="flex items-center gap-3 text-gray-300 hover:text-[#23ddf6] transition-colors duration-200 text-sm font-medium"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="font-mono text-[#23ddf6]/60 text-xs">{String(i + 1).padStart(2, "0")}.</span>
              {link.name}
            </a>
          ))}
          <button
            onClick={() => { scrollTo("#contact"); setIsOpen(false); }}
            className="btn-shimmer mt-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-black
              bg-gradient-to-r from-[#23ddf6] to-[#7c6cff]
              shadow-[0_0_20px_rgba(35,221,246,0.3)] w-full cursor-pointer"
          >
            Let's Talk
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
