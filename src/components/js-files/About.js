import React,{ useEffect, useRef } from 'react';
import Typed from "typed.js";
import aboutstyle from '../css-files/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
                                <li data-icon="🦄"> I'm a frontend & wordpess developer.</li>
                                <li> I have done BCA, from IGNTU</li>
                                <li>I also worked on JavaScript, Jquery, Shopify, Wordpress.</li>
                                <li>You can contact me on <i>Linkdin</i>, if you want to create your own sites.</li>
                                <li ref={about}></li>
                            </ol>
                            <p className='text-md my-6 lg:pr-10 text-[#61a796]' >
                              Since 2019 - I've spent my time seeking and learning new technologies.
                               This has led to me working on some amazing world-class projects, worked at some 
                               amazing places like [ WebnU, FrintArt ], and worked with some great people.</p>
                        </div>

                        <div className="skills-wrapper lg:w-3/6 w-full">
                        <h2 className='text-white text-[25px] font-semibold'>Skills</h2>

                          <div className="cssProgress">
                            <div className="progress4">HTML</div>
                            <div  data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear" className="cssProgress-bar html"></div>
                          </div>

                          <div className="cssProgress">
                            <div className="progress4">CSS 3</div>
                            <div  data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear" className="cssProgress-bar css"></div>
                          </div>

                          <div className="cssProgress">
                            <div className="progress4">JavaScript</div>
                            <div  data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear" className="cssProgress-bar js"></div>
                          </div>

                          <div className="cssProgress">
                            <div className="progress4">Jquery</div>
                            <div  data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear" className="cssProgress-bar jq"></div>
                          </div>

                          <div className="cssProgress">
                            <div className="progress4">Bootstrap</div>
                            <div  data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear" className="cssProgress-bar boot"></div>
                          </div>

                          <div className="cssProgress">
                            <div className="progress4">React JS</div>
                            <div  data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear" className="cssProgress-bar react"></div>
                          </div>

                          <div className="cssProgress">
                            <div className="progress4">Tailwind</div>
                            <div  data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear" className="cssProgress-bar tail"></div>
                          </div>
                        </div>
                   </div>
             </div>
       </section>
    </>
  )
}
