import React from "react";
import skills from "../data/skills.json";
import { FaLaptopCode } from "react-icons/fa";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-[#57059e] to-[#4a00e0] px-[10%] py-24"
    >
      {/* Heading */}

      <h2 className="flex items-center justify-center gap-4 text-center text-[4rem] font-extrabold text-white">
        <FaLaptopCode />
        Skills &<span className="text-[#ffe600]">Abilities</span>
      </h2>

      {/* Container */}

      <div className="mt-16 rounded-3xl bg-[rgba(0,0,22,0.35)] p-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-[1.4rem] bg-[#09011b] p-8 text-center transition-all duration-300 hover:scale-[1.05]"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="mx-auto h-[60px] w-[60px] object-contain"
              />

              <h3 className="mt-6 text-[2rem] font-medium text-white">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
