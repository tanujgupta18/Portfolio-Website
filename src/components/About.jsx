import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: -80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="bg-[#e5ecfb] px-[6%] md:px-[10%] py-20 md:py-24"
    >
      <h2 className="text-center text-[2.8rem] md:text-[3.8rem] font-extrabold">
        About <span className="text-[#7303a7]">Me</span>
      </h2>

      <div className="mx-auto mt-14 max-w-[900px]">
        <h3 className="text-[2.2rem] md:text-[2.8rem] font-bold text-[#1b1b1b]">
          I'm Tanuj Gupta
        </h3>

        <p className="mt-3 text-[1.6rem] md:text-[1.8rem] font-semibold text-[#011aff]">
          Full Stack Developer
        </p>

        <p className="mt-8 text-[1.5rem] md:text-[1.6rem] leading-[2] text-[#444]">
          Passionate Full Stack Developer focused on building scalable web
          applications, automation workflows and modern user experiences.
        </p>

        <p className="mt-6 text-[1.5rem] md:text-[1.6rem] leading-[2] text-[#444]">
          Experienced with React.js, MERN Stack, Django and Chrome Extension
          Development. I enjoy creating products that combine clean UI with
          practical engineering.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          <p className="text-[1.5rem] md:text-[1.6rem]">
            <span className="font-bold text-[#011aff]">Email :</span>{" "}
            tanujgupta1872003@gmail.com
          </p>

          <p className="text-[1.5rem] md:text-[1.6rem]">
            <span className="font-bold text-[#011aff]">Place :</span> New Delhi,
            India
          </p>
        </div>

        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          href="https://drive.google.com/file/d/17RQKOoNQa-F0VWgrQB35QzsnnkmzGRQJ/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="group mt-12 inline-flex items-center gap-3 rounded-[1.2rem] bg-[#2506ad] px-8 md:px-10 py-4 text-white shadow-[0_8px_20px_rgba(48,68,247,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1a047e]"
        >
          <span className="text-[1.5rem] md:text-[1.7rem] font-semibold">
            Resume
          </span>

          <HiArrowRight className="text-[1.8rem] md:text-[2rem] transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>
      </div>
    </motion.section>
  );
};

export default About;
