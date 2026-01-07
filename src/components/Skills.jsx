import { GraduationCap, CodeXml, Rocket } from "lucide-react";
import React from "react";
const About = () => {
  const languages = [
    { name: "HTML", level: "Advanced", category: "Frontend" },
    { name: "CSS", level: "Advanced", category: "Frontend" },
    { name: "JavaScript", level: "Intermediate", category: "Frontend" },
    { name: "React", level: "Intermediate", category: "Frontend" },
    { name: "TypeScript", level: "Beginner", category: "Frontend" },
    { name: "Tailwind CSS", level: "Intermediate", category: "Frontend" },
    { name: "Git", level: "Intermediate", category: "Tools" },
    { name: "Node.js", level: "Beginner", category: "Backend" },
  ];
  const levelStyles = {
    Beginner: {
      text: "text-yellow-400",
      bg: "bg-yellow-400/10 border border-yellow-400/30",
    },
    Intermediate: {
      text: "text-cyan-400",
      bg: "bg-cyan-400/10 border border-cyan-400/30",
    },
    Advanced: {
      text: "text-emerald-400",
      bg: "bg-emerald-400/10 border border-emerald-400/30",
    },
  };
  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "VS Code",
    "Figma",
    "Node.js",
    "REST APIs",
    "Responsive Design",
    "UI/UX",
  ];

  return (
    <div
      className="text-white min-h-screen py-10 px-6 max-w-6xl mx-auto scroll-mt-16 "
      id="skills"
    >
      <div className="flex gap-2 items-center ml-5">
        <span className="text-cyan-400 font-mono">02.</span>
        <h1 className=" ml-3 text-5xl font-medium ">Skills & Technologies</h1>
      </div>
      <div className="px-10 mt-14 grid grid-cols-1 md:grid-cols-2 gap-5  w-full">
        {languages.map((items, index) => {
          const level = levelStyles[items.level];
          return (
            <div
              key={index}
              className="flex justify-between items-center  bg-[#0b1220] px-5 py-4 rounded-xl border border-[#1f2a44] hover:border-[#23ddf6]/70   hover:shadow-[0_0_20px_rgba(35,221,246,0.15)] hover:scale-103 transition-all duration-300 ease-in-out"
            >
              <h1 className="text-lg font-medium cursor-default">{items.name}</h1>
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${level.bg} ${level.text}  shadow-[0_0_12px_rgba(0,255,255,0.15)]`}
              >
                {items.level}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-10 ">
        <h3 className="text-xl font-semibold mb-6 text-foreground text-center">
          Technologies I work with
        </h3>
        <div className="flex gap-5 flex-wrap justify-center">
          {technologies.map((tech, index) => {
            return (
              <div
                className="px-4 py-2 bg-[#0b1220] border border-[#1f2a44] rounded-lg text-sm font-medium cursor-default hover:bg-[#10192d] hover:text-[#23ddf6] hover:border-[#23ddf6]/70   hover:shadow-[0_0_20px_rgba(35,221,246,0.15)] transition-all duration-300 ease-in-out"
                key={index}
              >
                {tech}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
