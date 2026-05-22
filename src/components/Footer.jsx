import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";
import { FaLinkedinIn, FaDev } from "react-icons/fa6";
import { assets } from "../assets/assets";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  const footerLinks = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Projects",
    "Experience",
    "Contact",
  ];

  const socialLinks = [
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/tanuj--gupta/",
    },

    {
      icon: FaGithub,
      link: "https://github.com/tanujgupta18",
    },

    {
      icon: FaTwitter,
      link: "https://twitter.com/tanuj_gupta_18",
    },

    {
      icon: FaInstagram,
      link: "https://www.instagram.com/tanuj_gupta_18",
    },

    {
      icon: FaDev,
      link: "https://dev.to/tanujgupta18",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-[#000031] px-[6%] md:px-[10%] py-16 text-white">
      <div className="grid gap-14 md:grid-cols-[1.2fr_1fr_1fr]">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src={assets.logo}
              alt="logo"
              className="w-[40px] brightness-0 invert opacity-95"
            />

            <h2 className="text-[2.4rem] font-bold">Tanuj</h2>
          </div>

          <p className="mt-6 max-w-[38rem] text-[1.5rem] leading-[1.9] text-[#b8bfd1]">
            Building modern web applications, automation tools, and meaningful
            digital experiences.
          </p>
        </div>
        {/* Links */}
        <div>
          <h3 className="text-[2rem] font-semibold">Quick Links</h3>

          <div className="mt-6 flex flex-col gap-4 text-[1.5rem]">
            {footerLinks.map((item) => (
              <button
                key={item}
                onClick={() =>
                  document.getElementById(item.toLowerCase())?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="w-fit text-left text-[#b8bfd1] transition duration-300 hover:translate-x-1 hover:text-white cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        {/* Contact */}
        <div className="md:justify-self-end">
          <h3 className="text-[2rem] font-semibold">Connect</h3>
          <div className="mt-6 flex flex-wrap gap-5">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;

              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[4.8rem] w-[4.8rem] items-center justify-center rounded-full bg-[#111944] text-[1.9rem] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2506ad]"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
          <p className="mt-8 text-[1.5rem] text-[#b8bfd1]">
            tanujgupta1872003@gmail.com
          </p>
        </div>
      </div>

      {showTop && (
        <button
          onClick={() =>
            document.getElementById("home")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="fixed bottom-8 right-8 flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-[#2506ad] text-[1.5rem] text-white shadow-[0_10px_30px_rgba(37,6,173,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.08] cursor-pointer"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
