import React, { useEffect, useRef, useState } from 'react';
import Particle from './Particle';
import Typed from "typed.js";
import profileImg from '../images/WhatsApp Image 2023-04-17 at 5.51.51 PM.jpeg';
import linkedinImg from '../images/linkedin.png'
import homestyle from '../css-files/Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

  const [menu, setMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navScrollRef = useRef(null);

  //scroll Up 
  const scrollDown = () => {
    window.scrollTo({
      left: 0,
      top: 950,
      behavior: 'smooth'
    });
  };

  //Toggle menu 
  const menuToggle = () => {
    setMenu(!menu);
  }

  // Fixed navbar
  const handleScroll = () => {
    const navTop = navScrollRef.current.offsetTop;
    setIsSticky(window.scrollY > navTop);
  };

  useEffect(() => {

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Custom display typing..
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["'m a frontend Developer. ", "'m a React Js Developer. ", "like to debugging. ", "love learn new techs. "],
      // Speed settings
      startDelay: 200,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "<"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  AOS.init();
  return (
    <>
      <section className="homw-wrapper" id='home'>
        <div className="home relative bg-[#272b33] w-full flex justify-center items-center z-[1000] flex-col text-center">
          {/* Particles Js */}
          <Particle />

          {/* Greeting container */}
          <div className="greetings z-[1000] flex flex-col justify-center items-center my-auto">

            {/* Profile-img */}
            <img src={profileImg}
              alt="profile-img"
              className='object-cover profile w-32 h-32 rounded-full border-green-700 border-4'
              data-aos='fade-down'
              data-aos-duration="2000" />

            {/* Intro */}
            <h1 className='font-semibold text-white lg:text-4xl text-[30px] mt-4'
              data-aos='fade-down'
              data-aos-duration="2000">
              Hi, I'm
              <span className='my_name text-green-400'> Jagrati Gupta</span>.
              <span className='animate-bounce absolute'>👋🏽</span>
            </h1>

            {/* Auto typed-note */}
            <h3 className='auto_typed lg:text-3xl text-base text-center text-white mt-5'>
              I <span ref={el}></span>
            </h3>
            {/*Linkedin link */}
            <a href="https://www.linkedin.com/in/jagrati-gupta-abbb43217/" target="_blank" >
              <img src={linkedinImg} alt="linkedin-link" className='w-10 h-10 rounded my-10 cursor-pointer transition-all rotate-45	hover:rotate-0' />
            </a>
            {/* Scroll-down button */}
            <button onClick={scrollDown} className='flex items-center justify-center absolute bottom-40 text-xl rounded-full w-10 h-10 bg-white text-blue-900 hover:text-green-400'>
              <ion-icon name="caret-down-sharp"></ion-icon>
            </button>

          </div>

          {/* Navigation */}
          <div className={`navbar w-full py-5 bg-[#23252a] z-[1000] border-b-4 border-green-400 ${isSticky ? 'fixed top-0' : ''}`}
            ref={navScrollRef}>
            <div className="nav-btn text-4xl text-white lg:hidden flex justify-end">
              <ion-icon name={!menu ? "menu" : "close"} onClick={menuToggle}></ion-icon>
            </div>
            <ul className={`${menu ? 'h-[31vh]' : 'h-0'} w-full lg:flex block list justify-evenly items-center uppercase text-left lg:text-center bg-[#23252a] top-20 lg:top-0 left-0 overflow-y-hidden transition-all`}>

              <li className='text-base text-white font-semibold cursor-pointer lg:py-0 py-3 lg:pl-0 pl-10'
                onClick={menuToggle} >
                <a href="#home" name="Home">Home</a>
              </li>
              <li className='text-base text-white font-semibold cursor-pointer lg:py-0 py-3 lg:pl-0 pl-10'
                onClick={menuToggle}>
                <a href="#about" name="About">About</a>
              </li>
              <li className='text-base text-white font-semibold cursor-pointer lg:py-0 py-3 lg:pl-0 pl-10'
                onClick={menuToggle}>
                <a href="#experience" name="Experience">Experience</a>
              </li>
              <li className='text-base text-white font-semibold cursor-pointer lg:py-0 py-3 lg:pl-0 pl-10'
                onClick={menuToggle}>
                <a href="#project" name="Projects">Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
