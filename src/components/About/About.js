import React from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  AOS.init();
  return (
    <div
      className="py-16 px-2 w-full flex justify-center items-center flex-col"
      id="about"
    >
      <h1 className="heading">01. ABOUT</h1>
      <div className="flex lg:w-[75%] px-6 lg:px-0 mt-11 mx-auto lg:flex-row flex-col items-start gap-x-3 gap-y-8">
        <AboutMe />
        <Skills />
      </div>
    </div>
  );
}
