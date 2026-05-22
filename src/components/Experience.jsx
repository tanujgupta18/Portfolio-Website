import experience from "../data/experience.json";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-[6%] md:px-[10%] py-18 md:py-24 bg-[#edf0fa]"
    >
      <h2 className="flex items-center justify-center gap-3 text-[2.8rem] md:text-[4rem] font-bold">
        <FaBriefcase />
        Experience
      </h2>

      <p className="mt-5 text-center text-[1.4rem] md:text-[1.6rem] leading-[1.8] text-[#555]">
        Turning ideas into real products through internships and development.
      </p>

      <div className="mt-16 flex flex-col gap-10">
        {experience.slice(0, 2).map((exp, index) => (
          <div
            key={index}
            className="rounded-[2.5rem] bg-white p-7 md:p-10 shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
          >
            <h3 className="text-[1.8rem] md:text-[2.4rem] font-bold text-[#002057]">
              {exp.role}
            </h3>

            <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h4 className="text-[1.7rem] md:text-[1.9rem] text-[#2506ad]">
                {exp.company}
              </h4>

              <p className="text-[1.6rem] font-semibold text-[#0b8b2a]">
                {exp.duration}
              </p>
            </div>

            <p className="mt-2 flex items-center gap-2 text-[1.5rem] text-[#555]">
              <FaMapMarkerAlt />

              {exp.location}
            </p>

            <ul className="mt-6 space-y-3">
              {exp.description.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-[1.4rem] md:text-[1.6rem] leading-[1.9]"
                >
                  <span>•</span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              {exp.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-[#2506ad] px-4 md:px-5 py-2 text-[1.2rem] md:text-[1.4rem] text-white transition duration-300 hover:scale-[1.05]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {experience.length > 2 && (
        <div className="mt-20 flex justify-center">
          <a
            href="/experience"
            className="inline-flex items-center gap-3 rounded-full bg-[#2506ad] px-8 md:px-12 py-4 md:py-5 text-[1.4rem] md:text-[1.6rem] font-semibold text-white transition-all duration-300 hover:scale-[1.05] hover:bg-[#1b0480]"
          >
            View All →
          </a>
        </div>
      )}
    </section>
  );
};

export default Experience;
