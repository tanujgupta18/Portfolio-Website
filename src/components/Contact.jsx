import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";

import { assets } from "../assets/assets";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    emailjs
      .sendForm(
        "service_xny2z6j",
        "template_gjppg59",
        form.current,
        "kj4A86eYx5r1BvimT",
      )
      .then(() => {
        setStatus({
          type: "success",
          message: "Message sent successfully.",
        });

        form.current.reset();
      })
      .catch((error) => {
        setStatus({
          type: "error",
          message: error?.text || "Failed to send message. Try again.",
        });
      });
  };

  return (
    <section id="contact" className="px-[6%] md:px-[10%] py-20 bg-[#fafbff]">
      <h2 className="flex items-center justify-center gap-3 text-[2.8rem] md:text-[4rem] font-bold">
        Contact
        <span className="text-[#7303a7]">Me</span>
      </h2>

      <p className="mt-5 text-center text-[1.4rem] md:text-[1.6rem] leading-[1.8] text-[#555]">
        Have an idea, project, or opportunity? Let’s build something together.
      </p>

      <div className="mt-16 grid gap-12 rounded-[2.5rem] bg-white p-8 md:p-12 shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)] lg:grid-cols-2">
        <div className="flex items-center justify-center order-1 lg:order-0">
          <img
            src={assets.contact}
            alt="contact"
            className="w-[60%] md:w-[80%] max-w-[360px] object-contain"
          />
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
          <div className="relative">
            <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-[#666]" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full rounded-[1.4rem] bg-[#edf0fa] py-5 pl-16 pr-5 text-[1.5rem] outline-none transition duration-300 focus:ring-2 focus:ring-[#2506ad]"
              required
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-[#666]" />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full rounded-[1.4rem] bg-[#edf0fa] py-5 pl-16 pr-5 text-[1.5rem] outline-none transition duration-300 focus:ring-2 focus:ring-[#2506ad]"
              required
            />
          </div>
          <div className="relative">
            <FaPhoneAlt className="absolute left-5 top-1/2 -translate-y-1/2 text-[#666]" />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full rounded-[1.4rem] bg-[#edf0fa] py-5 pl-16 pr-5 text-[1.5rem] outline-none transition duration-300 focus:ring-2 focus:ring-[#2506ad]"
              required
            />
          </div>
          <div className="relative">
            <FaCommentDots className="absolute left-5 top-8 text-[#666]" />

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              className="w-full rounded-[1.4rem] bg-[#edf0fa] pt-7 pb-5 pl-16 pr-5 text-[1.5rem] resize-none outline-none transition duration-300 focus:ring-2 focus:ring-[#2506ad]"
              required
            />
          </div>
          <button
            type="submit"
            className="group ml-auto inline-flex items-center gap-3 rounded-[1.2rem] bg-[#2506ad] px-10 py-4 text-[1.5rem] font-semibold text-white transition-all duration-300 hover:scale-[1.04]"
          >
            Submit
            <FaPaperPlane className="transition duration-300 group-hover:translate-x-1" />
          </button>
          {status.message && (
            <p
              className={`mt-2 text-right text-[1.4rem] font-medium ${
                status.type === "success" ? "text-[#0b8b2a]" : "text-red-500"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
