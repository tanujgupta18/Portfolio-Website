import projects from "../data/projects.json";
import { assets } from "../assets/assets";

import {
  FaCode,
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
} from "react-icons/fa";

const ProjectsPage = () => {
  return (
    <section className="relative min-h-screen bg-[#071a57] px-[6%] md:px-[10%] py-40">
      {/* Heading */}
      <div className="text-center">
        <h1 className="flex items-center justify-center gap-3 text-[2.8rem] md:text-[4.5rem] font-bold text-white">
          <FaCode />
          All
          <span className="text-[#ffe600]">Projects</span>
        </h1>

        <p className="mx-auto mt-5 max-w-[700px] text-[1.4rem] md:text-[1.6rem] leading-[1.9] text-[#d3d3d3]">
          A collection of projects focused on Full-Stack Development,
          Automation, Chrome Extensions and scalable web applications.
        </p>
      </div>
      {/* Grid */}
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-[1.8rem] bg-[#09011b] shadow-[0_8px_30px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
          >
            <img
              src={assets[project.image]}
              alt={project.title}
              className="h-[220px] md:h-[240px] w-full object-cover"
            />

            <div className="p-6 md:p-8">
              <h3 className="text-[1.8rem] md:text-[2rem] font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-4 text-[1.4rem] md:text-[1.5rem] leading-[1.9] text-[#d4d4d4]">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.links.view && (
                  <a
                    href={project.links.view}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#2506ad] px-6 py-3 text-[1.3rem] md:text-[1.4rem] font-semibold text-white transition duration-300 hover:bg-[#1d0493]"
                  >
                    View
                    <FaExternalLinkAlt />
                  </a>
                )}

                {project.links.code && (
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white px-6 py-3 text-[1.3rem] md:text-[1.4rem] font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
                  >
                    Code
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Back */}
      <div className="mt-20 flex justify-center">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-3 rounded-full bg-[#ffe600] px-10 py-5 text-[1.5rem] font-bold text-black transition-all duration-300 hover:scale-[1.05]"
        >
          <FaArrowLeft />
          Back
        </button>
        <div className="absolute bottom-0 left-0 h-[140px] w-full bg-gradient-to-b from-transparent to-[#000031]" />
      </div>
    </section>
  );
};

export default ProjectsPage;
