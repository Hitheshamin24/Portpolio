import { useEffect, useRef } from "react";

const languages = [
  { name: "HTML", level: "Advanced", pct: 92, category: "Frontend" },
  { name: "CSS", level: "Advanced", pct: 88, category: "Frontend" },
  { name: "JavaScript", level: "Intermediate", pct: 68, category: "Frontend" },
  { name: "React", level: "Intermediate", pct: 65, category: "Frontend" },
  { name: "TypeScript", level: "Beginner", pct: 35, category: "Frontend" },
  { name: "Tailwind CSS", level: "Intermediate", pct: 72, category: "Frontend" },
  { name: "Git", level: "Intermediate", pct: 65, category: "Tools" },
  { name: "Node.js", level: "Beginner", pct: 30, category: "Backend" },
];

const levelConfig = {
  Beginner: {
    text: "text-yellow-400",
    badge: "bg-yellow-400/10 border border-yellow-400/30 text-yellow-400",
    bar: "bg-gradient-to-r from-yellow-500 to-yellow-400",
    glow: "shadow-[0_0_12px_rgba(234,179,8,0.4)]",
  },
  Intermediate: {
    text: "text-cyan-400",
    badge: "bg-cyan-400/10 border border-cyan-400/30 text-cyan-400",
    bar: "bg-gradient-to-r from-[#23ddf6] to-[#4fdcff]",
    glow: "shadow-[0_0_12px_rgba(35,221,246,0.4)]",
  },
  Advanced: {
    text: "text-emerald-400",
    badge: "bg-emerald-400/10 border border-emerald-400/30 text-emerald-400",
    bar: "bg-gradient-to-r from-emerald-500 to-emerald-400",
    glow: "shadow-[0_0_12px_rgba(52,211,153,0.4)]",
  },
};

const technologies = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "TypeScript", icon: "🔷" },
  { name: "React", icon: "⚛️" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Git", icon: "🔀" },
  { name: "GitHub", icon: "🐙" },
  { name: "VS Code", icon: "💻" },
  { name: "Figma", icon: "🎭" },
  { name: "Node.js", icon: "🟢" },
  { name: "REST APIs", icon: "🔗" },
  { name: "Responsive Design", icon: "📱" },
  { name: "UI/UX", icon: "✨" },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const barsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Trigger bar animation for skill bars
            const bars = entry.target.querySelectorAll("[data-bar-pct]");
            bars.forEach((bar) => {
              const pct = bar.dataset.barPct;
              bar.style.width = pct + "%";
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll(".reveal") || [];
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="text-white min-h-screen py-20 px-6 max-w-6xl mx-auto scroll-mt-16"
      id="skills"
    >
      {/* Section Header */}
      <div className="reveal flex gap-3 items-center mb-16">
        <span className="text-[#23ddf6] font-mono text-lg animate-glow-text">02.</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Skills & Technologies</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[#23ddf6]/30 to-transparent ml-4 hidden md:block" />
      </div>

      {/* Skill bars grid */}
      <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
        {languages.map((skill, index) => {
          const cfg = levelConfig[skill.level];
          return (
            <div
              key={index}
              className="glass glass-hover rounded-2xl p-5 border border-[#23ddf6]/10
                hover:border-[#23ddf6]/40 transition-all duration-300 group"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              {/* Header row */}
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-white">{skill.name}</span>
                  <span className="text-xs font-mono text-gray-500">{skill.category}</span>
                </div>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${cfg.badge}`}>
                  {skill.level}
                </span>
              </div>

              {/* Progress bar */}
              <div className="relative h-1.5 bg-[#1a2540] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${cfg.bar} transition-all duration-1000 ease-out`}
                  data-bar-pct={skill.pct}
                  style={{ width: "0%", transitionDelay: `${index * 0.1}s` }}
                />
                {/* Shimmer on bar */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Percentage */}
              <div className={`text-right text-xs font-mono mt-1 ${cfg.text} opacity-60`}>
                {skill.pct}%
              </div>
            </div>
          );
        })}
      </div>

      {/* Tech Tags */}
      <div className="reveal delay-200">
        <h3 className="text-center text-lg font-semibold text-gray-300 mb-8 tracking-wide">
          Technologies I Work With
        </h3>
        <div className="flex gap-3 flex-wrap justify-center">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="reveal px-4 py-2 glass rounded-xl text-sm font-medium cursor-default
                border border-[#23ddf6]/10
                hover:border-[#23ddf6]/60 hover:text-[#23ddf6]
                hover:shadow-[0_0_20px_rgba(35,221,246,0.2)]
                hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              style={{ transitionDelay: `${index * 0.04}s` }}
            >
              <span className="text-base">{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
