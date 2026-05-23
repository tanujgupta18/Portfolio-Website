import experience from "../data/experience.json";
import { FaBriefcase, FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";

const ExperiencePage = () => {
  return (
    <section className="min-h-screen bg-[#e5ecfb] px-[6%] md:px-[10%] py-40">
      {/* Heading */}

      <div className="text-center">
        <h1 className="flex items-center justify-center gap-3 text-[2.8rem] md:text-[4.5rem] font-bold">
          <FaBriefcase />
          All
          <span className="text-[#7303a7]">Experience</span>
        </h1>

        <p className="mx-auto mt-5 max-w-[720px] text-[1.4rem] md:text-[1.6rem] leading-[1.9] text-[#555]">
          My professional journey through internships, development and
          real-world product experiences.
        </p>
      </div>

      {/* Cards */}

      <div className="mt-16 flex flex-col gap-8">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="rounded-4xl bg-white p-7 md:p-10 shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2"
          >
            <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-[#002057]">
              {exp.role}
            </h2>

            <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <h3 className="text-[1.7rem] md:text-[2rem] text-[#2506ad]">
                {exp.company}
              </h3>

              <p className="text-[1.5rem] md:text-[1.6rem] font-semibold text-[#0b8b2a]">
                {exp.duration}
              </p>
            </div>

            <p className="mt-3 flex items-center gap-2 text-[1.4rem] md:text-[1.5rem] text-[#555]">
              <FaMapMarkerAlt />

              {exp.location}
            </p>

            <ul className="mt-6 space-y-3">
              {exp.description.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-[1.4rem] md:text-[1.55rem] leading-[1.9]"
                >
                  <span>•</span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              {exp.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-[#2506ad] px-5 py-2 text-[1.25rem] md:text-[1.4rem] text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Back */}

      <div className="mt-20 flex justify-center">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-3 rounded-full bg-[#2506ad] px-10 py-5 text-[1.5rem] font-semibold text-white transition hover:scale-[1.05] cursor-pointer"
        >
          <FaArrowLeft />
          Back
        </button>
      </div>
    </section>
  );
};

export default ExperiencePage;
