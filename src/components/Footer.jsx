import React from "react";
import image from "../assets/logo.png";
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-6 border-t border-gray-800 bg-opacity-50">
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <div className="w-10 h-10">
          <img
            className="h-full w-full object-cover rounded-full"
            src={image}
            alt="Logo"
          />
        </div>
        <span className="text-gray-400 text-sm font-mono">
          © {new Date().getFullYear()} Hithesh Amin
        </span>
      </div>

      <div className="flex gap-6">
        <a
          href="https://github.com/hitheshamin24"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>

        <a
          href="https://www.linkedin.com/in/hitheshamin/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hitheshamin423@gmail.com"
          className="text-gray-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
