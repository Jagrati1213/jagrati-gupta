import React,{ useEffect, useRef } from 'react';
import Particle from './Particle';
import Typed from "typed.js";
import profileImg from '../images/profile5.jpeg';
import linkedinImg from '../images/linkedin.png'
import homestyle from '../css-files/Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

  //scroll the window 
  const scrollDown = ()=>{
         window.scrollTo({
          left:0, 
          top:950,
          behavior:'smooth'
        });
  };
  
  //Toggle menu btn 
  const menuToggle = (event)=>{
    
    const list = document.querySelector('.sub-list');
    let  menuName = event.target;
      if( menuName.name =='menu'){

          menuName.name = 'close';
          list.classList.add('h-[31vh]');
          list.classList.add('overflow-y-auto');
          list.classList.remove('h-0');
      }
      else{
          menuName.name = 'menu';
          list.classList.add('h-0');
          list.classList.remove('overflow-y-auto');
          list.classList.remove('h-[31vh]');
        }  
  }
  // stick on top after scroll
  window.addEventListener("scroll", ()=>{
    const nav = document.querySelector(".navbar");
    const NavTop = nav.offsetTop;
      nav.classList.toggle('sticky',window.scrollY > NavTop);
  });

  //Change title
  const titleName =(event)=>{
    const list = document.querySelector('.sub-list');
    const navBtn = document.querySelector('.nav-btn ion-icon');
    navBtn.name ='menu';

      list.classList.add('h-0');
      list.classList.remove('overflow-y-auto');
      list.classList.remove('h-[31vh]');

    if(event.target.name =='Home'){
         document.title = `Jagrati Gupta `
    }
    else{
         document.title = `Jagrati Gupta | ${event.target.name}`
    }
  }

  //custom display typing..
  const el = useRef(null);
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["'m a frontend dev. ", "love to coding. ", "like to design UI. ", "love meeting people. "],
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
                <Particle/>

                {/* Greeting container */}
                <div className="greetings z-[1000] flex flex-col justify-center items-center my-auto">
                       
                      {/* Profile-img */}
                        <img src={profileImg} alt="profile-img" className='object-cover profile w-[120px] h-[120px] rounded-full border-green-600 border-4'
                              data-aos='fade-down' data-aos-duration="2000" />
                       
                      {/* Intro */}
                        <h1 className='font-semibold text-white lg:text-4xl text-[30px] mt-4'  data-aos='fade-down' data-aos-duration="2000">
                             Hi, I'm 
                             <span className='my_name text-green-400'> Jagrati Gupta</span>.  
                             <span className='wave'>👋🏽</span>                            
                       </h1>
                       
                      {/* Auto typed-note */}
                       <h3 className='auto_typed lg:text-3xl text-base text-center text-white mt-5'>
                            I <span ref={el}></span>
                        </h3>
                      {/*Linkedin link */}
                        <a href="https://www.linkedin.com/in/jagrati-gupta-abbb43217/" target ="_blank" >
                        <img  src={linkedinImg} alt="linkedin-link" className='w-10 h-10 rounded my-10 cursor-pointer transition-all rotate-45	hover:rotate-0'/>
                        </a>
                      {/* Scroll-down button */}
                      <button  onClick={scrollDown} className='flex items-center justify-center absolute bottom-40 text-xl rounded-full w-10 h-10 bg-white text-blue-900 hover:text-green-400'>
                          <ion-icon name="caret-down-sharp"></ion-icon>
                      </button>
                       
                </div>

                {/* Navigation */}
                <div className="navbar w-full py-5 bg-[#23252a] z-[1000] border-b-4 border-green-400" id='navbar'>
                    <div className="nav-btn text-4xl text-white lg:hidden flex justify-end">
                        <ion-icon name="menu" onClick={menuToggle}></ion-icon>
                    </div>
                   <ul className='lg:flex hidden list justify-evenly items-center uppercase'>
                       <li className='text-base text-white font-semibold cursor-pointer lg:py-0 py-3 lg:pl-0 pl-10'> 
                            <a href="#home" onClick={titleName} name="Home">Home</a>
                        </li>
                        <li className='text-base text-white font-semibold cursor-pointer lg:py-0 py-3 lg:pl-0 pl-10'> 
                            <a href="#about" onClick={titleName} name="About">About</a>
                        </li>
                        <li className='text-base text-white font-semibold cursor-pointer lg:py-0 py-3 lg:pl-0 pl-10'> 
                            <a href="#experience" onClick={titleName} name="Experience">Experience</a>
                        </li>
                        <li className='text-base text-white font-semibold cursor-pointer lg:py-0 py-3 lg:pl-0 pl-10'> 
                            <a href="#project" onClick={titleName} name="Projects">Projects</a>
                        </li>
                   </ul>
                   <ul className='sub-list z-[1000]'>
                       <li className='text-base text-white font-semibold cursor-pointer lg:py-0 py-3 lg:pl-0 pl-10'> 
                            <a href="#home" onClick={titleName} name="Home">Home</a>
                        </li>
                        <li className='text-base text-white font-semibold cursor-pointer lg:py-0 py-3 lg:pl-0 pl-10'> 
                            <a href="#about" onClick={titleName} name="About">About</a>
                        </li>
                        <li className='text-base text-white font-semibold cursor-pointer lg:py-0 py-3 lg:pl-0 pl-10'> 
                            <a href="#experience" onClick={titleName} name="Experience">Experience</a>
                        </li>
                        <li className='text-base text-white font-semibold cursor-pointer lg:py-0 py-3 lg:pl-0 pl-10'> 
                            <a href="#project" onClick={titleName} name="Projects">Projects</a>
                        </li>
                   </ul>
                </div>
            </div>
       </section>
    </>
  )
}
