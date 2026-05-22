import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
    </div>
  );
};

export default Home;
