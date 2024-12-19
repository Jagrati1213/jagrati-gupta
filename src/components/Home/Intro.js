import React, { useEffect, useRef } from "react";
import profileImg from "../../images/Jagrati.png";
import Resume from "../../images/Jagrati Gupta.pdf";
import Typed from "typed.js";
import { FaArrowDown, FaCloudDownloadAlt } from "react-icons/fa";

export default function Intro() {
  //scroll Up
  const scrollDown = () => {
    window.scrollTo({
      left: 0,
      top: 950,
      behavior: "smooth",
    });
  };

  // Custom display typing..
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "'m a frontend Developer",
        "'m a React Js Developer",
        "like to debugging",
        "love learn new techs",
      ],
      // Speed settings
      startDelay: 200,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="z-10 flex flex-col justify-center items-center h-screen lg:w-auto w-11/12">
      {/* Profile-img */}
      <img
        src={profileImg}
        alt="profile-img"
        className="object-cover profile w-32 h-32 lg:h-44 lg:w-44 rounded-full border-green-600 border-4"
        data-aos="fade-down"
        data-aos-duration="2000"
      />

      {/* Intro */}
      <h1
        className="font-semibold text-white lg:text-4xl text-[30px] mt-4"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        Hi, I'm
        <span className="my_name text-green-300"> Jagrati Gupta</span>
        <span className="animate-pulse absolute hidden lg:inline">👋🏽</span>
      </h1>

      {/* Auto typed-note */}
      <h3 className="auto_typed lg:text-3xl text-base text-center text-white mt-5">
        I <span ref={el}></span>
      </h3>

      {/*resume link */}
      <a
        href={Resume}
        download
        className="py-3 px-6 text-white bg-[#151c2c]  mt-7 rounded-full shadow shadow-[#151c2c] flex justify-center items-center gap-x-2 text-sm"
      >
        <FaCloudDownloadAlt className="text-lg" />
        <span>DownLoad CV</span>
      </a>


      {/* Scroll-down button */}
      <button onClick={scrollDown} className="intro-scroll">
        <FaArrowDown />
      </button>
    </div>
  );
}
