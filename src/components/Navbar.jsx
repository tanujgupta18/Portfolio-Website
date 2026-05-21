import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { assets } from "../assets/assets";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "education",
      "projects",
      "experience",
      "contact",
    ];

    const handleScroll = () => {
      let current = "Home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section && window.scrollY >= section.offsetTop - 150) {
          current = id.charAt(0).toUpperCase() + id.slice(1);
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between h-[6.5rem] px-[10%] bg-white shadow-[0_1px_4px_rgba(146,161,176,0.3)]">
      {/* Logo */}
      <a
        href="/"
        className="flex items-center gap-1 text-[2rem] font-extrabold text-[#0e2431] transition-all hover:text-[#fc8c05]"
      >
        <img
          src={assets.logo}
          alt="logo"
          className="w-[30px] h-[35px] object-contain"
        />

        <span>Tanuj</span>
      </a>
      {/* Desktop Navbar */}
      <nav className="hidden md:block">
        <ul className="flex items-center">
          {navItems.map((item) => (
            <li key={item.name} className="ml-10">
              <button
                onClick={() =>
                  document
                    .getElementById(item.href.replace("#", ""))
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className={`text-[1.6rem] font-semibold tracking-[0.04rem] cursor-pointer border-b-[3px] transition-[padding,color,border-color] duration-200 ease-out hover:text-[#011aff] hover:border-[#011aff] hover:pb-[5px] ${
                  activeSection === item.name
                    ? "text-[#011aff] border-[#011aff] pb-[5px]"
                    : "text-[#0e2431] border-transparent pb-0"
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <nav
        className={`absolute top-[6.5rem] left-0 w-full h-[calc(100vh-6.5rem)] bg-[#0e0f31] transition-all duration-300 md:hidden ${
          open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-start p-4 gap-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => {
                  document
                    .getElementById(item.href.replace("#", ""))
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });

                  setOpen(false);
                }}
                className={`block rounded-lg px-5 py-4 text-[2rem] cursor-pointer border-l-[5px] transition-[padding,color,border-color] duration-200 ease-out hover:text-[#011aff] hover:border-[#011aff] hover:pl-8 ${
                  activeSection === item.name
                    ? "text-[#011aff] border-[#011aff] pl-8"
                    : "text-white border-transparent pl-5"
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-[2.8rem] text-[#18023f] cursor-pointer"
      >
        {open ? <HiX /> : <HiMenu />}
      </button>
    </header>
  );
};

export default Navbar;
