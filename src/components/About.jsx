import { FaArrowRight } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section id="about" className="bg-white px-[10%] py-24">
      <h2 className="text-center text-[3.5rem] font-extrabold">
        About <span className="text-[#7303a7]">Me</span>
      </h2>

      <div className="mx-auto mt-16 max-w-[900px]">
        <h3 className="text-[2.8rem] font-bold text-[#1b1b1b]">
          I'm Tanuj Gupta
        </h3>

        <p className="mt-3 text-[1.8rem] font-semibold text-[#011aff]">
          Full Stack Developer
        </p>

        <p className="mt-8 text-[1.6rem] leading-loose text-[#444]">
          Passionate Full Stack Developer focused on building scalable web
          applications, automation workflows and modern user experiences.
        </p>

        <p className="mt-6 text-[1.6rem] leading-loose text-[#444]">
          Experienced with React.js, MERN Stack, Django and Chrome Extension
          Development. I enjoy creating products that combine clean UI with
          practical engineering.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          <p className="text-[1.6rem]">
            <span className="font-bold text-[#011aff]">Email :</span>{" "}
            tanujgupta1872003@gmail.com
          </p>

          <p className="text-[1.6rem]">
            <span className="font-bold text-[#011aff]">Place :</span> New Delhi,
            India
          </p>
        </div>

        <a
          href="https://drive.google.com/file/d/17RQKOoNQa-F0VWgrQB35QzsnnkmzGRQJ/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="group mt-12 inline-flex items-center gap-3 rounded-lg bg-[#2506ad] px-10 py-[1rem] text-white shadow-[0_5px_10px_rgba(48,68,247,0.5)] transition hover:bg-[#1a047e]"
        >
          <span className="text-[1.7rem] font-semibold">Resume</span>

          <HiArrowRight className="text-[2rem] transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};

export default About;
