import { useEffect, useRef, useState } from "react";
import Github from "lucide-react/dist/esm/icons/github";
import Linkedin from "lucide-react/dist/esm/icons/linkedin";
import Mail from "lucide-react/dist/esm/icons/mail";

/* Floating particle dot component */
const Particle = ({ style }) => (
  <div
    className="absolute rounded-full bg-[#23ddf6]/40 pointer-events-none"
    style={style}
  />
);

/* Typewriter hook */
const useTypewriter = (text, speed = 80, startDelay = 400) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayed, done };
};

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  left: `${Math.random() * 100}%`,
  animDuration: `${Math.random() * 10 + 8}s`,
  animDelay: `${Math.random() * 8}s`,
  opacity: Math.random() * 0.5 + 0.2,
}));

const Hero = () => {
  const { displayed: name, done: nameDone } = useTypewriter("Hithesh", 90, 300);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showDesc, setShowDesc] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showSocials, setShowSocials] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowSubtitle(true), 1100);
    const t2 = setTimeout(() => setShowDesc(true), 1500);
    const t3 = setTimeout(() => setShowButtons(true), 1900);
    const t4 = setTimeout(() => setShowSocials(true), 2300);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, []);

  return (
    <div
      id="Hero"
      className="relative min-h-screen text-white flex flex-col justify-center items-center px-6 overflow-hidden w-full bg-grid"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050b14] via-[#070a13] to-[#0b0f1a]" />

      {/* Animated glow orb */}
      <div className="absolute w-[500px] h-[500px] bg-[#23ddf6]/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-blob" />
      <div className="absolute w-[300px] h-[300px] bg-[#7c6cff]/10 rounded-full blur-3xl top-1/4 right-1/4 animate-blob" style={{ animationDelay: "3s" }} />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <Particle
          key={p.id}
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: "-10px",
            opacity: p.opacity,
            animation: `particle-float ${p.animDuration} ${p.animDelay} linear infinite`,
          }}
        />
      ))}

      {/* Decorative corner code snippets */}
      <div className="absolute top-28 left-8 md:left-20 opacity-10 font-mono text-xs text-[#23ddf6] leading-relaxed hidden md:block select-none">
        <div>const dev = {"{"}</div>
        <div className="ml-4">name: "Hithesh",</div>
        <div className="ml-4">role: "WebDev",</div>
        <div>{"};"}</div>
      </div>
      <div className="absolute bottom-28 right-8 md:right-20 opacity-10 font-mono text-xs text-[#7c6cff] leading-relaxed hidden md:block select-none text-right">
        <div>{"<Portfolio"}</div>
        <div className="ml-4">{"passion={true}"}</div>
        <div className="ml-4">{"learning={always}"}</div>
        <div>{"/>"}</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        {/* Hello label */}
        <div
          className="text-[#23ddf6] text-xs tracking-[0.4em] uppercase mb-4 font-mono animate-fade-in"
          style={{ opacity: 0, animation: "fade-in 0.6s ease 0.1s forwards" }}
        >
          &lt; Hello, World! I'm &gt;
        </div>

        {/* Name with typewriter */}
        <h1 className="text-7xl md:text-8xl font-black mb-2 relative">
          <span className="animate-shimmer">{name}</span>
          {/* blinking cursor while typing */}
          {!nameDone && (
            <span className="inline-block w-1 h-16 bg-[#23ddf6] ml-1 animate-pulse align-middle" />
          )}
          {/* Decorative underline */}
          {nameDone && (
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-0 bg-gradient-to-r from-[#23ddf6] to-[#7c6cff] rounded-full transition-all duration-700"
              style={{ width: "60%" }} />
          )}
        </h1>

        {/* Role subtitle */}
        <div
          className={`text-gray-300 text-xl mt-6 font-light tracking-wide transition-all duration-700
            ${showSubtitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="font-semibold text-white relative">
            Full Stack Developer
            <span className="absolute -bottom-0.5 left-0 w-full h-px bg-gradient-to-r from-[#23ddf6] to-transparent" />
          </span>
        </div>

        {/* Description */}
        <p
          className={`text-gray-400 max-w-xl leading-relaxed mt-5 transition-all duration-700 delay-100
            ${showDesc ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Currently a student passionate about crafting beautiful, user-friendly
          web experiences. Learning, building, and growing one project at a time.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex gap-4 mt-8 transition-all duration-700 delay-200
            ${showButtons ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <button
            id="hero-view-work-btn"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-shimmer px-8 py-3 rounded-xl font-semibold text-sm text-black
              bg-gradient-to-r from-[#23ddf6] to-[#4fdcff]
              shadow-[0_0_30px_rgba(35,221,246,0.5)]
              hover:shadow-[0_0_50px_rgba(35,221,246,0.8)]
              hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            View My Work
          </button>
          <button
            id="hero-contact-btn"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-xl font-semibold text-sm border border-[#23ddf6]/25
              hover:border-[#23ddf6]/70 hover:bg-[#23ddf6]/8
              hover:shadow-[0_0_20px_rgba(35,221,246,0.15)]
              hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-sm"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div
          className={`flex gap-6 mt-8 transition-all duration-700 delay-300
            ${showSocials ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {[
            { href: "https://github.com/hitheshamin24", Icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/hitheshamin/", Icon: Linkedin, label: "LinkedIn" },
            { href: "https://mail.google.com/mail/?view=cm&fs=1&to=hitheshamin423@gmail.com", Icon: Mail, label: "Email" },
          ].map(({ href, Icon, label }, i) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-[#23ddf6]/20 flex items-center justify-center
                text-gray-400 hover:text-[#23ddf6] hover:border-[#23ddf6]/60
                hover:shadow-[0_0_20px_rgba(35,221,246,0.3)] hover:scale-110 hover:-translate-y-1
                transition-all duration-300 backdrop-blur-sm"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs font-mono text-[#23ddf6] tracking-widest">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#23ddf6] to-transparent animate-scroll-bounce" />
      </div>
    </div>
  );
};

export default Hero;
