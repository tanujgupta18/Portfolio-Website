import React from "react";
import skills from "../data/skills.json";
import { FaLaptopCode } from "react-icons/fa";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#07143f] px-[6%] md:px-[10%] py-20 md:py-24"
    >
      {/* Heading */}
      <h2 className="flex items-center justify-center gap-3 text-center text-[2.6rem] md:text-[4rem] font-bold text-white">
        <FaLaptopCode />
        Skills &<span className="text-[#ffe600]">Abilities</span>
      </h2>

      <p className="mt-5 text-center text-[1.4rem] md:text-[1.6rem] text-[#d4dbf5]">
        Technologies and tools I use to build scalable products.
      </p>

      {/* Container */}
      <div className="mt-16">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-4xl border border-[#2f4db5] bg-[#11256de3] p-8 text-center shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-2 hover:border-[#4c74ff] hover:bg-[#18338f] hover:shadow-[0_18px_45px_rgba(34,90,255,0.18)]"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="mx-auto h-[50px] w-[50px] md:h-[58px] md:w-[58px] object-contain"
              />

              <h3 className="mt-6 text-[1.7rem] font-medium text-white">
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
