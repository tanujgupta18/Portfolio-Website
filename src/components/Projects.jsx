import projects from "../data/projects.json";
import { assets } from "../assets/assets";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";

const Projects = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="bg-[#000031] px-[10%] py-24">
      {/* Heading */}

      <h2 className="flex items-center justify-center gap-4 text-center text-[4rem] font-bold text-white">
        <FaCode />
        Projects
        <span className="text-[#ffe600]">Made</span>
      </h2>

      <p className="mt-5 text-center text-[1.6rem] text-[#d3d3d3]">
        Showcasing projects built with Full-Stack Development, Automation, and
        problem solving.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-3xl bg-[#09011b] shadow-[0_5px_20px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-3"
          >
            <img
              src={assets[project.image]}
              alt={project.title}
              className="h-[240px] w-full object-cover"
            />

            <div className="p-8">
              <h3 className="text-[2rem] font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-4 text-[1.5rem] leading-[1.8] text-[#d4d4d4]">
                {project.description}
              </p>

              <div className="mt-8 flex gap-4">
                {project.links.view && (
                  <a
                    href={project.links.view}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-[#2506ad] px-7 py-3 text-[1.4rem] font-semibold text-white hover:bg-[#1d0493]"
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
                    className="flex items-center gap-2 rounded-full border border-white px-7 py-3 text-[1.4rem] font-semibold text-white hover:bg-white hover:text-black"
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

      <div className="mt-20 flex justify-center">
        <a
          href="/projects"
          className="flex items-center gap-3 rounded-full bg-[#ffe600] px-12 py-5 text-[1.6rem] font-bold text-black transition duration-300 hover:scale-[1.05]"
        >
          View All
          <FaArrowRight className="text-[1.4rem]" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
