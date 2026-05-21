import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { assets } from "../assets/assets";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
              <NavLink
                to={item.href}
                className="text-[1.6rem] font-semibold tracking-[0.04rem] text-[#0e2431] transition-all duration-200 hover:text-[#011aff] hover:border-b-[3px] hover:border-[#011aff] hover:pb-1.25"
              >
                {item.name}
              </NavLink>
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
