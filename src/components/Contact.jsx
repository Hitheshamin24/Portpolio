import React from "react";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 text-white max-w-4xl mx-auto px-6"
    >
      <div className="text-center mb-12">
        
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="font-mono text-cyan-400 text-lg">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
        </div>

        <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
          I'm currently looking for new opportunities and my inbox is always open.
          Whether you have a question, want to collaborate on a project, or just
          want to say hi, I'll do my best to get back to you!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 text-gray-300">
        <div className="flex items-center gap-2">
          <Mail className="text-cyan-400 w-5 h-5" />
          <span>hitheshamin423@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
           <MapPin className="text-cyan-400 w-5 h-5" />
           <span>India</span>
        </div>
      </div>

      {/* 4. Interactive Button with Hover Effect */}
      <div className="flex justify-center font-semibold">
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hitheshamin423@gmail.com" target="_blank"
          className="group flex items-center gap-2 px-8 py-3 bg-cyan-400  rounded-lg text-black shadow-lg shadow-cyan-500/30  hover:scale-105 transition-transform duration-200 ease-in-out"
        >
          Say Hello
          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Contact;