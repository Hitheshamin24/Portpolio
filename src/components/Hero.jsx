import Github from "lucide-react/dist/esm/icons/github";
import Linkedin from "lucide-react/dist/esm/icons/linkedin";
import Mail from "lucide-react/dist/esm/icons/mail";

import React from "react";

const Hero = () => {
  return (
    <div
      id="Hero"
      className="relative min-h-screen text-white flex flex-col justify-center items-center  px-6 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute  inset-0 bg-linear-to-br from-[#050b14]  via-[#070a13] to-[#0b0f1a] " />
      <div className="absolute w-120 h-120 bg-[#23ddf6]/20 rounded-full blur-2xl top-1/2 mt-6 -translate-y-1/2" />

      <div className="text-[#23ddf6] text-sm  tracking-[0.3em] uppercase mb-2 z-10 ">
        Hello , I'm
      </div>
      <h1 className="text-6xl md:text-7xl font-extrabold bg-linear-to-r from-[#23ddf6] via-[#4fdcff] to-[#7c6cff] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(35,221,246,0.35)]  z-10">
        Hithesh
      </h1>
      <div className="text-gray-400 text-lg mt-2 z-10">
        Aspiring{" "}
        <span className="font-semibold text-white "> Web Developer </span>
      </div>
      <div className="text-center text-gray-400 max-w-xl leading-relaxed mt-4 z-10">
        Currently a student passionate about crafting beautiful, user-friendly
        web experiences. Learning, building, and growing one project at a time.
      </div>
      <div className="flex gap-4 mt-6 ">
        <button
          onClick={() => {
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-7 py-3 bg-[#23ddf6] hover:bg-[#1db8cc] rounded-lg hover:scale-102 transition-all duration-200 ease-in-out text-black font-semibold  shadow-[0_0_30px_rgba(35,221,246,0.45)] text-sm z-10 cursor-pointer"
        >
          View My Work
        </button>
        <button
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-7 py-3  bg-transparent hover:bg-[#23ddf6]/10 hover:scale-102 transition-all duration-200 ease-in-out  rounded-lg  border border-[#23ddf6]/10 text-sm font-medium z-10 cursor-pointer"
        >
          Get In Touch
        </button>
      </div>

      <div className="z-10 mt-6 flex gap-4 items-center justify-center  text-black">
        <a
          href="https://github.com/hitheshamin24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-6 h-6 text-gray-300 hover:text-cyan-400 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/hitheshamin/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-6 h-6 text-gray-300 hover:text-cyan-400 transition" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hitheshamin423@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="w-6 h-6 text-gray-300 hover:text-cyan-400 transition" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
