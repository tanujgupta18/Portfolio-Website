import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaDev,
  FaArrowCircleDown,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/tanuj--gupta/",
    hover: "hover:bg-[#007bb6]",
  },

  {
    icon: FaGithub,
    link: "https://github.com/tanujgupta18",
    hover: "hover:bg-black",
  },

  {
    icon: FaTwitter,
    link: "https://twitter.com/tanuj_gupta_18",
    hover: "hover:bg-[#00aced]",
  },

  {
    icon: FaInstagram,
    link: "https://www.instagram.com/tanuj_gupta_18",
    hover: "hover:bg-[linear-gradient(45deg,#f58529,#dd2a7b,#8134af,#515bd4)]",
  },

  {
    icon: FaDev,
    link: "https://dev.to/tanujgupta18",
    hover: "hover:bg-black",
  },
];

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full-Stack Development",
        "MERN Stack Applications",
        "Chrome Extension Development",
        "Automation & Web Scraping",
        "Python & Django",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-wrap items-center px-[6%] md:px-[10%] pt-40 pb-16"
    >
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 flex flex-[1_1_40rem] flex-col items-center gap-8 text-center md:items-start md:text-left"
      >
        <h2 className="text-[3.6rem] md:text-[5rem] font-extrabold text-[#002057] leading-tight">
          Hi There,
          <br />
          I'm Tanuj <span className="text-[#ff7b00]">Gupta</span>
        </h2>

        <p className="text-[1.8rem] md:text-[2.5rem] font-semibold">
          I Am Into <span ref={typedRef} className="text-[rgb(148,8,8)]" />
        </p>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="inline-flex w-fit items-center gap-3 rounded-full bg-[#2506ad] px-8 md:px-10 py-[1.3rem] md:py-[1.4rem] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1c0488] cursor-pointer"
        >
          <span className="text-[1.5rem] md:text-[1.7rem] font-semibold">
            About Me
          </span>

          <FaArrowCircleDown className="text-[1.5rem]" />
        </motion.button>

        {/* Social Links */}
        <div>
          <ul className="flex flex-wrap justify-center gap-3.5 md:justify-start">
            {socialLinks.map(({ icon: Icon, link, hover }, index) => (
              <li key={index}>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-center w-[40px] h-[40px] md:w-[44px] md:h-[44px] rounded-full bg-[#09011b] text-[#00d9ff] text-[2rem] transition hover:text-white ${hover}`}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="flex-[1_1_40rem] z-10"
      >
        <img
          src={assets.hero}
          alt="hero"
          draggable={false}
          className="mx-auto mt-12 w-[75%] max-w-[340px] rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.25)] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)] md:ml-24 md:mt-0 md:w-[70%] md:max-w-[500px]"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
