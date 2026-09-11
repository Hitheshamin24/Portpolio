import { useEffect, useRef } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "hitheshamin423@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=hitheshamin423@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India 🇮🇳",
    href: null,
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/hitheshamin24", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/hitheshamin/", label: "LinkedIn" },
  { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=hitheshamin423@gmail.com", label: "Email" },
];

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-28 text-white relative overflow-hidden"
    >
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[600px] h-[600px] bg-[#23ddf6]/6 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px]
          bg-[#7c6cff]/8 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal text-center mb-4">
          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="font-mono text-[#23ddf6] text-lg animate-glow-text">04.</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get In Touch</h2>
          </div>
          <p className="text-gray-400 leading-relaxed max-w-md mx-auto text-sm">
            I'm currently looking for new opportunities and my inbox is always open.
            Whether you have a question, want to collaborate, or just want to say hi —
            I'll get back to you!
          </p>
        </div>

        {/* Main card */}
        <div className="reveal delay-200 relative mt-12">
          {/* Glow border effect */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#23ddf6]/30 via-[#7c6cff]/20 to-[#23ddf6]/30
            animate-glow-pulse opacity-60" />

          <div className="relative glass rounded-3xl p-8 md:p-10 border border-[#23ddf6]/15">
            {/* Contact info rows */}
            <div className="space-y-4 mb-10">
              {contactLinks.map(({ icon: Icon, label, value, href }, i) => (
                <div
                  key={label}
                  className="reveal flex items-center gap-4 p-4 rounded-2xl
                    bg-[#0b111e]/60 border border-[#23ddf6]/10
                    hover:border-[#23ddf6]/40 hover:bg-[#0b111e]/80
                    transition-all duration-300 group"
                  style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#23ddf6]/10 border border-[#23ddf6]/20
                    flex items-center justify-center group-hover:bg-[#23ddf6]/20
                    group-hover:scale-110 transition-all duration-300">
                    <Icon size={18} className="text-[#23ddf6]" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs font-mono uppercase tracking-wider">{label}</div>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer"
                        className="text-white text-sm hover:text-[#23ddf6] transition-colors duration-200">
                        {value}
                      </a>
                    ) : (
                      <span className="text-white text-sm">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#23ddf6]/30 to-transparent mb-8" />

            {/* CTA Button */}
            <div className="flex justify-center mb-8">
              <a
                id="contact-say-hello-btn"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hitheshamin423@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer group flex items-center gap-3 px-10 py-4 rounded-2xl font-semibold
                  bg-gradient-to-r from-[#23ddf6] to-[#7c6cff] text-black text-sm
                  shadow-[0_0_30px_rgba(35,221,246,0.4)]
                  hover:shadow-[0_0_60px_rgba(35,221,246,0.7)]
                  hover:scale-105 transition-all duration-300"
              >
                Say Hello 👋
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>

            {/* Social icons */}
            <div className="flex justify-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-[#23ddf6]/20
                    flex items-center justify-center text-gray-400
                    hover:text-[#23ddf6] hover:border-[#23ddf6]/60
                    hover:shadow-[0_0_20px_rgba(35,221,246,0.3)]
                    hover:-translate-y-1 hover:scale-110
                    transition-all duration-300"
                  style={{ transitionDelay: `${i * 0.07}s` }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;