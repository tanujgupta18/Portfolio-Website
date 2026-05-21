import { useEffect, useRef } from "react";
import Typed from "typed.js";
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
      className="relative min-h-screen flex flex-wrap items-center px-[10%]"
    >
      {/* Left */}
      <div className="flex-[1_1_40rem] z-10 flex flex-col items-start gap-8">
        <h2 className="text-[3.6rem] md:text-[5rem] font-extrabold text-[#002057] leading-tight">
          Hi There,
          <br />
          I'm Tanuj <span className="text-[#ff7b00]">Gupta</span>
        </h2>

        <p className="text-[2rem] md:text-[2.5rem] font-semibold">
          I Am Into <span ref={typedRef} className="text-[rgb(148,8,8)]" />
        </p>

        <a
          href="#about"
          className="inline-flex w-fit items-center gap-3 rounded-full text-white bg-[#2506ad] px-10 md:px-12 py-[1.3rem] md:py-[1.6rem]"
        >
          <span className="text-[1.5rem] md:text-[1.7rem] font-semibold">
            About Me
          </span>

          <FaArrowCircleDown className="text-[1.5rem]" />
        </a>

        {/* Social Links */}
        <div>
          <ul className="flex gap-3.5">
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
      </div>

      {/* Right */}
      <div className="flex-[1_1_40rem] z-10">
        <img
          src={assets.hero}
          alt="hero"
          draggable={false}
          className="mx-auto mt-10 w-[75%] md:ml-24 md:mt-0 md:w-[70%] rounded-full cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_5px_15px_rgba(0,0,0,0.5)] transition"
        />
      </div>
    </section>
  );
};

export default Hero;
