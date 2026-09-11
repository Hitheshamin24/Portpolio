import {
  Github,
  ExternalLink,
  Folder,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { projects } from "./projectsData";
import { useState, useEffect, useRef, useCallback } from "react";

/* ── Image Slider ─────────────────────────────────── */
const ProjectSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0)
    return <div className="bg-[#0b111e] w-full h-full rounded-xl" />;

  return (
    <div className="relative w-full h-full group/slider">
      <div className="overflow-hidden w-full h-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="w-full h-full shrink-0 flex items-center justify-center bg-[#070a13]"
            >
              <img
                src={img}
                alt={`${title} slide ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
            }}
            className="absolute top-1/2 left-2 -translate-y-1/2
              bg-black/60 backdrop-blur-sm text-white p-1.5 rounded-full
              opacity-0 group-hover/slider:opacity-100 transition-all duration-200
              hover:bg-[#23ddf6] hover:text-black"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
            }}
            className="absolute top-1/2 right-2 -translate-y-1/2
              bg-black/60 backdrop-blur-sm text-white p-1.5 rounded-full
              opacity-0 group-hover/slider:opacity-100 transition-all duration-200
              hover:bg-[#23ddf6] hover:text-black"
          >
            <ChevronRight size={16} />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer
                  ${currentIndex === i
                    ? "w-5 h-1.5 bg-[#23ddf6] shadow-[0_0_8px_rgba(35,221,246,0.8)]"
                    : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
                  }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

/* ── Tilt Card Hook ───────────────────────────────── */
const useTilt = () => {
  const ref = useRef(null);
  const handleMouseMove = useCallback((e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -5;
    const rotateY = ((x - cx) / cx) * 5;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
  }, []);
  const handleMouseLeave = useCallback(() => {
    if (ref.current)
      ref.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  }, []);
  return { ref, handleMouseMove, handleMouseLeave };
};

/* ── Featured Project Card ────────────────────────── */
const FeaturedCard = ({ project, index }) => {
  const tilt = useTilt();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.handleMouseMove}
      onMouseLeave={tilt.handleMouseLeave}
      className="grid md:grid-cols-12 gap-8 items-center"
      style={{ transition: "transform 0.15s ease" }}
    >
      {/* Image */}
      <div className={`md:col-span-7 ${isEven ? "md:order-1" : "md:order-2"}`}>
        <div className="relative aspect-video rounded-2xl overflow-hidden
          border border-[#23ddf6]/15 group/img
          hover:border-[#23ddf6]/50 hover:shadow-[0_0_40px_rgba(35,221,246,0.2)]
          transition-all duration-500">
          <ProjectSlider images={project.imgs} title={project.title} />

          {/* Overlay links */}
          <div className="absolute inset-0 bg-[#070a13]/80 opacity-0 group-hover/img:opacity-100
            flex items-center justify-center gap-5 transition-all duration-300 backdrop-blur-sm">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-white/20
                hover:bg-[#23ddf6] hover:border-[#23ddf6] hover:text-black
                text-sm font-medium transition-all duration-200 hover:scale-105">
              <Github size={16} /> GitHub
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#23ddf6] border border-[#23ddf6] text-black
                hover:bg-white hover:border-white text-sm font-medium transition-all duration-200 hover:scale-105">
              <ExternalLink size={16} /> Live Demo
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`md:col-span-5 flex flex-col justify-center
        ${isEven ? "md:order-2 md:text-right md:items-end" : "md:order-1 md:text-left md:items-start"}`}>
        <p className="text-[#23ddf6] font-mono text-xs tracking-widest uppercase mb-2">
          ✦ Featured Project
        </p>
        <h3 className="text-2xl font-bold mb-4 leading-tight">{project.title}</h3>

        <div className="glass rounded-2xl p-5 border border-[#23ddf6]/10
          hover:border-[#23ddf6]/30 transition-all duration-300 mb-4 w-full">
          <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
        </div>

        {/* Tech stack */}
        <div className={`flex flex-wrap gap-2 mb-4 font-mono text-xs text-gray-400 ${isEven ? "justify-end" : "justify-start"}`}>
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-lg bg-[#0b111e] border border-[#1f2a44]
              hover:border-[#23ddf6]/50 hover:text-[#23ddf6] transition-all duration-200">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className={`flex gap-4 ${isEven ? "justify-end" : "justify-start"}`}>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#23ddf6] hover:scale-110 transition-all duration-200">
            <Github size={20} />
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#23ddf6] hover:scale-110 transition-all duration-200">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

/* ── Other Project Card ───────────────────────────── */
const OtherCard = ({ project, delay }) => (
  <div
    className="reveal glass glass-hover rounded-2xl border border-[#1f2a44] flex flex-col overflow-hidden
      hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(35,221,246,0.15)]
      transition-all duration-400 group"
    style={{ transitionDelay: `${delay}s` }}
  >
    {/* Image */}
    <div className="relative aspect-video overflow-hidden">
      <ProjectSlider images={project.imgs} title={project.title} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b111e]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-1">
      <div className="flex justify-between items-center mb-4">
        <div className="p-2 rounded-lg bg-[#23ddf6]/10 border border-[#23ddf6]/20 group-hover:bg-[#23ddf6]/20 transition-colors duration-300">
          <Folder size={22} className="text-[#23ddf6]" />
        </div>
        <div className="flex gap-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#23ddf6] hover:-translate-y-0.5 transition-all duration-200">
            <Github size={17} />
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#23ddf6] hover:-translate-y-0.5 transition-all duration-200">
            <ExternalLink size={17} />
          </a>
        </div>
      </div>

      <h4 className="text-lg font-semibold mb-2 group-hover:text-[#23ddf6] transition-colors duration-300 leading-tight">
        {project.title}
      </h4>
      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 font-mono text-xs text-gray-500">
        {project.tech.map((t) => (
          <span key={t} className="hover:text-[#23ddf6] transition-colors duration-200">{t}</span>
        ))}
      </div>
    </div>
  </div>
);

/* ── Projects Section ─────────────────────────────── */
const Projects = () => {
  const sectionRef = useRef(null);
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-grid">
      <div className="max-w-6xl mx-auto px-6 text-white">
        {/* Section header */}
        <div className="reveal flex items-center gap-4 mb-20">
          <span className="text-[#23ddf6] font-mono text-lg animate-glow-text">03.</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Things I've Built</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#23ddf6]/30 to-transparent ml-2 hidden md:block" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-28 mb-28">
          {featured.map((project, i) => (
            <div key={project.title} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <FeaturedCard project={project} index={i} />
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {others.length > 0 && (
          <>
            <div className="reveal text-center mb-12">
              <h3 className="text-2xl font-bold">
                Other Noteworthy{" "}
                <span className="text-[#23ddf6]">Projects</span>
              </h3>
              <p className="text-gray-500 text-sm mt-2 font-mono">— more things I've built —</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((project, i) => (
                <OtherCard key={project.title} project={project} delay={i * 0.1} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;