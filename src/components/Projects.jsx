import { Github, ExternalLink, Folder } from "lucide-react";
import dncr from "../assets/dncr.png";
const projects = [
  {
    title: "DNCR-Dance Studio Management ",
    description:
      "A complete management system for dance studios to handle student registrations, batch scheduling, fee tracking, instructor management, and attendance. Designed to streamline studio operations and improve administrative efficiency.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "#",
    live: "#",
    img: dncr,
    featured: true,
  },
  {
    title: "Paisafy – Personalized Investment Recommendation System",
    description:
      "An intelligent investment recommendation system that analyzes user profiles, risk appetite, and financial goals to suggest personalized investment options using data-driven logic.",
    tech: ["Python", "Machine Learning", "Flask", "Pandas"],
    github: "#",
    live: "#",
    img: "#",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application using OpenWeather API.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
    img: dncr,
    featured: false,
  },
  {
    title: "Quiz Application",
    description: "Interactive quiz app with timer and score tracking.",
    tech: ["React", "Tailwind"],
    github: "#",
    live: "#",
    img: dncr,
    featured: false,
  },
];

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
              className={`relative grid md:grid-cols-12 gap-6 items-center ${
                index % 2 !== 0 ? "md:text-right" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`md:col-span-7 ${
                  index % 2 !== 0 ? "md:col-start-6" : ""
                }`}
              >
                <div
                  className="relative aspect-video rounded-xl overflow-hidden
                border border-zinc-800 group
                hover:shadow-xl hover:shadow-cyan-500/30 transition"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full 
               group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 bg-black/40
                  opacity-0 group-hover:opacity-100
                  transition-opacity flex items-center justify-center"
                  >
                    <span className="text-cyan-400 font-mono text-sm">
                      View Project
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`md:col-span-6 md:absolute ${
                  index % 2 !== 0
                    ? "md:left-0 md:text-left"
                    : "md:right-0 md:text-right"
                }`}
              >
                <p className="text-cyan-400 font-mono text-sm mb-2">
                  Featured Project
                </p>

                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                <div
                  className="bg-zinc-900/80 backdrop-blur-lg
                             border border-zinc-800
                             rounded-xl p-6 shadow-lg"
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
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-fit bg-black/20
             group-hover:scale-105 transition-transform duration-500"
                />
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
