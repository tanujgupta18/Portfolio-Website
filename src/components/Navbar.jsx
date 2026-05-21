import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { assets } from "../assets/assets";

const navItems = [
  { name: "Home", href: "/", route: true },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "/projects", route: true },
  { name: "Experience", href: "/experience", route: true },
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
              {item.route ? (
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `text-[1.6rem] font-semibold tracking-[0.04rem] ${isActive ? "text-[#011aff] border-b-[3px] border-[#011aff] pb-[5px]" : "text-[#0e2431]"}`
                  }
                >
                  {item.name}
                </NavLink>
              ) : (
                <a
                  href={item.href}
                  className="text-[1.6rem] font-semibold tracking-[0.04rem] text-[#0e2431] hover:text-[#011aff] hover:border-b-[3px] hover:border-[#011aff] hover:pb-[5px]"
                >
                  {item.name}
                </a>
              )}
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
              {item.route ? (
                <NavLink
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-5 py-4 text-[2rem] text-white"
                >
                  {item.name}
                </NavLink>
              ) : (
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-5 py-4 text-[2rem] text-white"
                >
                  {item.name}
                </a>
              )}
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
