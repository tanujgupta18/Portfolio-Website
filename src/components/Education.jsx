import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Technology in Computer Engineering",
    institute: "Bharati Vidyapeeth Deemed University, Pune",
    duration: "2022 - Present",
    status: "Pursuing",
  },

  {
    degree: "Higher Secondary Education (PCM)",
    institute: "Maharaja Agarsain Public School (CBSE)| New Delhi",
    duration: "2020 - 2022",
    status: "Completed",
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-[#e5ecfb] px-[10%] py-24">
      <h2 className="flex items-center justify-center gap-4 text-center text-[4rem] font-bold">
        <FaGraduationCap />
        My
        <span className="text-[#7303a7]">Education</span>
      </h2>
      <p className="mt-4 text-center text-[1.6rem] italic text-[#555]">
        Education is not the learning of facts, but the training of the mind to
        think.
      </p>

      {/* Cards */}

      <div className="mt-16 flex flex-col gap-8">
        {education.map((item) => (
          <div
            key={item.degree}
            className="rounded-[1.5rem] bg-white p-10 shadow-[0_5px_15px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-[1.02]"
          >
            <h3 className="text-[2.4rem] font-bold text-[#012970]">
              {item.degree}
            </h3>

            <p className="mt-4 text-[1.8rem] font-semibold text-[#444]">
              {item.institute}
            </p>

            <div className="mt-8 flex items-center justify-between">
              <p className="text-[1.6rem] text-[#226d00] font-bold">
                {item.duration}
              </p>

              <span className="rounded-full bg-[#7303a7] px-6 py-2 text-[1.3rem] font-semibold text-white">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
