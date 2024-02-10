import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {

  AOS.init();

  return (
    <>
      <div className="py-16 px-2 w-full flex justify-center items-center flex-col" id='about'>

        <h1 className='heading'>01. ABOUT</h1>

        <div className="flex lg:w-[80%] px-2 lg:px-0 mt-11 mx-auto lg:flex-row flex-col">
          <AboutMe />
          <Skills />
        </div>
      </div>
    </>
  )
}
