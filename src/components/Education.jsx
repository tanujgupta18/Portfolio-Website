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
    <section
      id="education"
      className="bg-[#e5ecfb] px-[6%] md:px-[10%] py-20 md:py-24"
    >
      <h2 className="flex items-center justify-center gap-3 text-center text-[2.8rem] md:text-[4rem] font-bold">
        <FaGraduationCap />
        My
        <span className="text-[#7303a7]">Education</span>
      </h2>
      <p className="mt-5 text-center text-[1.4rem] md:text-[1.6rem] italic leading-[1.8] text-[#555]">
        Education is not the learning of facts, but the training of the mind to
        think.
      </p>

      {/* Cards */}
      <div className="mt-14 flex flex-col gap-8">
        {education.map((item) => (
          <div
            key={item.degree}
            className="rounded-4xl bg-white p-7 md:p-10 shadow-[0_5px_18px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
          >
            <h3 className="text-[1.8rem] md:text-[2.4rem] font-bold text-[#012970] leading-[1.5]">
              {item.degree}
            </h3>

            <p className="mt-4 text-[1.5rem] md:text-[1.8rem] font-semibold text-[#444] leading-[1.7]">
              {item.institute}
            </p>

            <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-[1.5rem] md:text-[1.6rem] font-bold text-[#226d00]">
                {item.duration}
              </p>

              <span className="w-fit rounded-full bg-[#7303a7] px-5 py-2 text-[1.2rem] md:text-[1.3rem] font-semibold text-white">
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
