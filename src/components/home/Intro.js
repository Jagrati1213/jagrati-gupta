import React, { useEffect, useRef } from 'react'
import profileImg from '../images/jagrati.jpeg';
import linkedinImg from '../images/linkedin.png'
import Typed from 'typed.js';

export default function Intro() {

    //scroll Up 
    const scrollDown = () => {
        window.scrollTo({
            left: 0,
            top: 950,
            behavior: 'smooth'
        });
    };

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

    return (
        <div className="z-10 flex flex-col justify-center items-center h-screen lg:w-auto w-11/12">

            {/* Profile-img */}
            <img src={profileImg}
                alt="profile-img"
                className='object-cover profile w-32 h-32 rounded-full border-green-600 border-4'
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
                <img src={linkedinImg}
                    alt="linkedin-link"
                    className='w-10 h-10 rounded my-10 cursor-pointer transition-all rotate-45 hover:rotate-0' />
            </a>
            {/* Scroll-down button */}
            <button onClick={scrollDown}
                className='intro-scroll'>
                <ion-icon name="caret-down-sharp"></ion-icon>
            </button>

        </div>
    )
}
