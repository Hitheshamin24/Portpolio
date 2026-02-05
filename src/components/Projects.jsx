import {
  Github,
  ExternalLink,
  Folder,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { projects } from "./projectsData";
import { useState } from "react";

const ProjectSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0)
    return <div className="bg-zinc-800 w-full h-full" />;

  const prevSlide = (e) => {
    e.preventDefault();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = (e) => {
    e.preventDefault();
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className=" relative w-full h-full group:">
      <img
        src={images[currentIndex]}
        alt={`${title} slide ${currentIndex + 1}`}
        className="w-full h-full transition-transform duration-500"
      />
      {/* {navigation only showing if more than 1 image} */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full group-hover:opacity-100 transition-opacity hover:bg-cyan-500 "
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-cyan-500"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, slideIndex) => {
              return (
                <div
                  key={slideIndex}
                  onClick={() => setCurrentIndex(slideIndex)}
                  className={`w-1.5 h-1.5 rounded-full  cursor-pointer ${currentIndex === slideIndex ? "bg-cyan-400 " : "bg-white/50"}`}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-white">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-cyan-400 font-mono">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Things I’ve Built</h2>
          <div className="flex-1 h-px bg-zinc-800" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-28 mb-28">
          {featured.map((project, index) => (
            <div
              key={project.title}
              className="grid md:grid-cols-12 gap-8 items-center "
            >
              {/* Image */}
              <div
                className={`md:col-span-6 w-full  ${
                  index % 2 !== 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <div
                  className="relative aspect-video rounded-xl overflow-hidden
                border border-zinc-800 group
                hover:shadow-xl hover:shadow-cyan-500/30  transition"
                >
                 <ProjectSlider images={project.imgs} title={project.title} />
                </div>
              </div>

              {/* Content */}
              <div
                className={`md:col-span-6 flex flex-col justify-center ${
                  index % 2 !== 0
                    ? "md:order-1  md:text-left"
                    : "md:order-2 md:text-right"
                }`}
              >
                <p className="text-cyan-400 font-mono text-sm mb-2">
                  Featured Project
                </p>

                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <div
                  className={`bg-zinc-900/80 backdrop-blur-lg
                             border border-zinc-800
                             rounded-xl p-6 shadow-lg mb-4
                               w-full ${index % 2 == 0 ? `ml-auto` : `mr-auto`}`}
                >
                  <p className="text-zinc-400">{project.description}</p>
                </div>

                <div
                  className={`flex flex-wrap gap-3 mt-4 font-mono text-sm text-zinc-400 ${
                    index % 2 !== 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <div
                  className={`flex gap-4 mt-4 ${
                    index % 2 !== 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <a href={project.github} className="hover:text-cyan-400">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="hover:text-cyan-400">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-2xl font-bold text-center mb-10">
          Other Noteworthy Projects
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6
                         hover:-translate-y-2
                         hover:shadow-xl hover:shadow-cyan-500/20
                         transition-all duration-300 group"
            >
              <div
                className="relative aspect-video rounded-xl overflow-hidden
                border border-zinc-800 group
                hover:shadow-xl hover:shadow-cyan-500/30 transition"
              >
                <ProjectSlider images={project.imgs} title={project.title} />
              </div>

              <div className="flex justify-between items-center mb-6">
                <Folder size={40} className="text-cyan-400" />
                <div className="flex gap-4">
                  <a href={project.github} className="hover:text-cyan-400">
                    <Github size={18} />
                  </a>
                  <a href={project.live} className="hover:text-cyan-400">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <h4 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition">
                {project.title}
              </h4>

              <p className="text-zinc-400 text-sm mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 font-mono text-xs text-zinc-400">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
