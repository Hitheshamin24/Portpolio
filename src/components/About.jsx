import { useEffect, useRef } from "react";
import { GraduationCap, CodeXml, Rocket } from "lucide-react";

const aboutCards = [
  {
    icon: GraduationCap,
    title: "MCA Graduate",
    desc: "Completed MCA while building real-world projects",
    color: "from-[#23ddf6] to-[#4fdcff]",
    glow: "rgba(35,221,246,0.25)",
  },
  {
    icon: CodeXml,
    title: "Full Stack Developer",
    desc: "Experienced in frontend & backend development",
    color: "from-[#7c6cff] to-[#a78bfa]",
    glow: "rgba(124,108,255,0.25)",
  },
  {
    icon: Rocket,
    title: "Always Learning",
    desc: "Exploring modern tools, frameworks, and best practices",
    color: "from-[#4fdcff] to-[#23ddf6]",
    glow: "rgba(79,220,255,0.25)",
  },
];

const stats = [
  { label: "Projects Built", value: "5+" },
  { label: "Tech Stack", value: "10+" },
  { label: "GitHub Commits", value: "200+" },
];

const useReveal = (ref, options = {}) => {
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal") || [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, ...options }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const About = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <div
      ref={sectionRef}
      className="text-white min-h-screen py-20 px-6 max-w-6xl mx-auto scroll-mt-16"
      id="about"
    >
      {/* Section Header */}
      <div className="reveal flex gap-3 items-center mb-16">
        <span className="text-[#23ddf6] font-mono text-lg animate-glow-text">01.</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[#23ddf6]/30 to-transparent ml-4 hidden md:block" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Text + Stats */}
        <div className="flex flex-col gap-6">
          <div className="reveal reveal-left space-y-4 text-gray-300 leading-relaxed">
            <p>
            Hi! I'm{" "}
            <span className="text-[#23ddf6] font-semibold relative">
              Hithesh
              <span className="absolute -bottom-0.5 left-0 w-full h-px bg-[#23ddf6]/50" />
            </span>
            , a passionate full stack developer with a love for crafting beautiful,
            performant web experiences. My journey began with curiosity about how
            websites work, and it has grown into a genuine love for creating digital
            products from end to end.
          </p>
            <p>
              Currently, I'm focused on learning modern web technologies and
              building projects that challenge me to grow. I believe in writing
              clean, maintainable code and creating interfaces that users love to
              interact with.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source, or learning from the amazing developer
              community.
            </p>
          </div>

          {/* Stats Row */}
          <div className="reveal delay-200 grid grid-cols-3 gap-4 mt-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-xl p-4 text-center border border-[#23ddf6]/10
                  hover:border-[#23ddf6]/40 hover:shadow-[0_0_20px_rgba(35,221,246,0.1)]
                  transition-all duration-300"
              >
                <div className="text-2xl font-black text-[#23ddf6]">{s.value}</div>
                <div className="text-gray-400 text-xs mt-1 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Cards */}
        <div className="flex flex-col gap-4">
          {aboutCards.map((item, index) => (
            <div
              key={index}
              className={`reveal reveal-right delay-${(index + 1) * 200} glow-card group`}
            >
              <div
                className="glass glass-hover flex items-center gap-5 px-5 py-5 rounded-2xl
                  border border-[#23ddf6]/10 transition-all duration-400 cursor-default"
              >
                {/* Icon */}
                <div
                  className={`relative flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
                    bg-gradient-to-br ${item.color} bg-opacity-20 transition-all duration-300
                    group-hover:scale-110 group-hover:shadow-[0_0_20px_var(--glow)]`}
                  style={{ "--glow": item.glow }}
                >
                  <item.icon size={22} className="text-white" />
                </div>
                {/* Text */}
                <div>
                  <h3 className="font-semibold text-white text-base">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-0.5 tracking-wide">{item.desc}</p>
                </div>
                {/* Arrow indicator */}
                <div className="ml-auto opacity-0 group-hover:opacity-100 text-[#23ddf6] transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
