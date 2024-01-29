import React, { useEffect, useRef } from 'react';
import Typed from "typed.js";
import aboutstyle from '../css-files/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProgessBar from './ProgessBar';

export default function About() {

  //custom display typing..
  const about = useRef(null);

  useEffect(() => {
    const typed = new Typed(about.current, {
      strings: ["I love to fixing bugs. ", "I love to making websites ", "I love to solvings complex proplems. "],
      // Speed settings
      startDelay: 200,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  AOS.init();

  return (
    <>
      <section className="about-wrapper  bg-[#272b33] relative p-2" id='about'>
        <div className="about pt-16 flex justify-center items-center flex-col">
          <h1 className='about-head text-center md:text-3xl text-[25px] text-white'>01. ABOUT</h1>

          <div className="wrapper flex lg:w-[80%] lg:px-14 px-6 mt-11 lg:flex-row flex-col">

            <div className="about-me lg:w-3/6 w-full">
              <h2 className='text-white text-[25px] font-semibold'>Who Am I?</h2>
              <p className='text-white text-base my-5'>I'm Jagrati 🤓</p>
              <ol className='text-white text-md ml-2'>
                <li data-icon="🦄"> I'm a front-end & React JS developer.</li>
                <li> I Love to Learned new things, & create sites.</li>
                <li>I also worked on JavaScript, Jquery, Wordpress.</li>
                <li>You can contact me on <i>Linkdin</i>, if you want to create your own sites.</li>
                <li ref={about}></li>
              </ol>
              <p className='text-md my-6 lg:pr-10 text-[#61a796]' >
                Since 2019 - I've spent my time seeking and learning new technologies.
                This has led to me working on some amazing world-class projects, worked at some
                amazing places like [ WebnU, FrintArt, TopBar ], and worked with some great people.
                If you are looking for a dedicated front-end developer who is passionate about
                creating exceptional user experiences, please don't hesitate to get in touch.
              </p>
            </div>

            <div className="skills-wrapper lg:w-3/6 w-full">
              <h2 className='text-white text-[25px] font-semibold'>Skills</h2>

              <ProgessBar ProgrssText='Html' progessName='cssProgress-bar html' />
              <ProgessBar ProgrssText='CSS 3' progessName='cssProgress-bar css' />
              <ProgessBar ProgrssText='JavaScript' progessName='cssProgress-bar js' />
              <ProgessBar ProgrssText='React JS' progessName='cssProgress-bar react' />
              <ProgessBar ProgrssText='Jquery' progessName='cssProgress-bar jq' />
              <ProgessBar ProgrssText='Bootstrap' progessName='cssProgress-bar boot' />
              <ProgessBar ProgrssText='Tailwind' progessName='cssProgress-bar react' />
              <ProgessBar ProgrssText='Ant-Design' progessName='cssProgress-bar boot' />
              <ProgessBar ProgrssText='GitHub' progessName='cssProgress-bar js' />

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
