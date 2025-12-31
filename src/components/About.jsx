import { GraduationCap, CodeXml, Rocket } from "lucide-react";
import React from "react";
const About = () => {
  const aboutCards = [
    {
      icon: GraduationCap,
      title: "Student",
      desc: "Pursuing MCA while building real-world projects",
    },
    {
      icon: CodeXml,
      title: "Web Developer",
      desc: "Focused on frontend and learning full-stack development",
    },
    {
      icon: Rocket,
      title: "Always Learning",
      desc: "Exploring modern tools, frameworks, and best practices",
    },
  ];

  return (
    <div
      className="text-white min-h-screen py-10 px-25 scroll-mt-15 "
      id="about"
    >
      <div className="flex gap-2 items-center ml-5">
        <span className="text-[#23ddf6] ">0.1</span>
        <h1 className="text-3xl font-medium ">About me</h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-1/2 p-3 flex flex-col gap-5 text-md">
          <p className=" p-2 rounded-lg ">
            Hi! I'm <span className="text-[#23ddf6]">Hithesh</span>, a
            passionate student diving deep into the world of web development. My
            journey began with curiosity about how websites work, and it has
            grown into a genuine love for creating digital experiences.
          </p>
          <p className="p-2 rounded-lg">
            Currently, I'm focused on learning modern web technologies and
            building projects that challenge me to grow. I believe in writing
            clean, maintainable code and creating interfaces that users love to
            interact with.
          </p>
          <p className="p-2 rounded-lg">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open source, or learning from the amazing developer
            community.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {aboutCards.map((item, index) => {
            return (
              <div
                key={index}
                className="group flex items-center gap-4 bg-[#0b111e] px-3 py-5 rounded-xl border border-transparent hover:border-[#23ddf6] hover:drop-shadow-2xl hover:scale-103 transition-all duration-200 ease-in-out cursor-pointer"
              >
                <div className=" bg-[#23ddf6]/10 group-hover:bg-[#23ddf6] group-hover:text-[#070a13] p-2 rounded-md transition-all duration-200 ease-in-out text-">
                  <item.icon />
                </div>
                <div>
                  <h3 className="font-semibold ">{item.title}</h3>
                  <p className="font-light tracking-wider text-gray-400 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
