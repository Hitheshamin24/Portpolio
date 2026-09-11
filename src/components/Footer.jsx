import image from "../assets/logo.png";
import { Mail, Github, Linkedin } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/hitheshamin24", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/hitheshamin/", label: "LinkedIn" },
  { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=hitheshamin423@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-[#23ddf6]/10 overflow-hidden">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#23ddf6]/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo + Copyright */}
        <div className="flex items-center gap-3 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="w-9 h-9 relative">
            <div className="absolute inset-0 rounded-full bg-[#23ddf6]/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              className="h-full w-full object-cover rounded-full relative z-10 transition-transform duration-300 group-hover:scale-110"
              src={image}
              alt="Logo"
            />
          </div>
          <span className="text-gray-500 text-sm font-mono group-hover:text-[#23ddf6] transition-colors duration-300">
            © {new Date().getFullYear()}{" "}
            <span className="text-gray-300">Hithesh Amin</span>
          </span>
        </div>

        {/* Center: Built with */}
        <p className="text-gray-600 text-xs font-mono hidden md:block">
          Built with{" "}
          <span className="text-[#23ddf6]">React</span> &{" "}
          <span className="text-[#7c6cff]">Tailwind CSS</span>
        </p>

        {/* Social icons */}
        <div className="flex gap-4">
          {socials.map(({ icon: Icon, href, label }, i) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-xl border border-[#23ddf6]/15
                flex items-center justify-center text-gray-500
                hover:text-[#23ddf6] hover:border-[#23ddf6]/50
                hover:shadow-[0_0_15px_rgba(35,221,246,0.3)]
                hover:-translate-y-1 hover:scale-110
                transition-all duration-300"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
