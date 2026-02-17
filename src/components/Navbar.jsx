import image from "../assets/logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const navLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 z-50 flex justify-between items-center h-16 w-full bg-[#070a13]/90 backdrop-blur-lg text-white py-3 md:px-28 px-6">
      {/* logo container */}
      <div
        className=" h-full w-10 cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <img
          className="h-full w-full object-cover"
          src={image}
          alt="Portpolio logo"
        />
      </div>
      {/* navigation links */}
      <div
        className="hidden md:flex items-center gap-10 
       text-sm text-gray-400 tracking-wide"
      >
        <ul className="flex gap-6">
          {navLinks.map((link) => {
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="transition-colors duration-300 hover:text-[#20c9e0] hover:drop-shadow-[0_0_6px_#20c9e0]"
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-linear-to-r from-cyan-400 to-blue-500  rounded-lg text-black shadow-lg shadow-cyan-500/30 px-5 py-2 hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
        >
          Lets Talk
        </button>
      </div>
      <button
        className="md:hidden hover:scale-115 transition-transform ease-in-out duration-200 outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* mobile menu overlay */}
      {isOpen && (
        <div className="fixed top-17 left-0 w-full  bg-[#070a13]/95 backdrop-blur-lg items-start justify-center   z-50 flex flex-col gap-6 py-10 md:hidden border-t border-gray-800 px-6">
          {navLinks.map((link) => {
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-400  hover:text-[#20c9e0] transition-transform text-sm duration-150 ease-in-out hover:drop-shadow-[0px_0px_10px_#20c9e0]"
              >
                {link.name}
              </a>
            );
          })}
          <button  onClick=
            {() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
              setIsOpen(false);
            }} className="bg-linear-to-r from-cyan-400 to-blue-500  rounded-lg text-black shadow-lg shadow-cyan-500/30 px-5 py-1.25 hover:scale-105 transition-transform duration-200 ease-in-out w-full">
           
            Lets Talk
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
