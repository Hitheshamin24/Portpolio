import React from "react";

const Hero = () => {
  return (
    <div
      id="Hero"
      className="relative min-h-screen text-white flex flex-col justify-center items-center  px-6 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-linear-to-br from-[#050b14] via-[#070a13] to-[#0b0f1a] "/>
      <div className="absolute w-130 h-130 bg-[#23ddf6]/20 rounded-full blur-2xl top-1/2 -translate-y-1/2"/> 

      
      <div className="text-[#23ddf6] text-sm  tracking-[0.3em] uppercase mb-2 z-10 ">Hello , I'm</div>
      <h1 className="text-6xl md:text-7xl font-extrabold bg-linear-to-r from-[#23ddf6] via-[#4fdcff] to-[#7c6cff] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(35,221,246,0.35)]  z-10">
        Hithesh
      </h1>
      <div className="text-gray-400 text-lg mt-2 z-10">
        Aspiring <span className="font-semibold text-white "> Web Developer </span>
      </div>
      <div className="text-center text-gray-400 max-w-xl leading-relaxed mt-4 z-10">
        Currently a student passionate about crafting beautiful, user-friendly
        web experiences. Learning, building, and growing one project at a time.
      </div>
      <div className="flex gap-4 mt-6 ">
        <button className="px-7 py-3 bg-[#23ddf6] hover:bg-[#1db8cc] rounded-lg hover:scale-102 transition-all duration-200 ease-in-out text-black font-semibold  shadow-[0_0_30px_rgba(35,221,246,0.45)] text-sm z-10">View My Work</button>
        <button className="px-7 py-3  bg-transparent hover:bg-[#23ddf6]/10 hover:scale-102 transition-all duration-200 ease-in-out  rounded-lg  border border-[#23ddf6]/10 text-sm font-medium z-10">Get In Touch</button>
      </div>
    </div>
  );
};

export default Hero;
