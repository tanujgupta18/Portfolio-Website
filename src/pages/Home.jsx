import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Experience from "../components/Experience";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Experience />
    </div>
  );
};

export default Home;
