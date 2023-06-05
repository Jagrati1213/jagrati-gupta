import React from 'react';
import '../css-files/Project.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectDetails from './ProjectDetails';
import { useState } from 'react';
import FooterLink from './FooterLink';

export default function Project() {


  const [data, setData] = useState(ProjectDetails);

  const showMore = () => {
    const btnName = document.querySelector('.showMore');
    const Divs = document.querySelectorAll('.show-more');

    if (btnName.textContent == 'Show More') {

      btnName.textContent = 'Show Less';
      Divs.forEach(function (item) {
        item.style.display = "block";

      })
    }
    else {
      btnName.textContent = 'Show More';
      Divs.forEach(function (item) {
        item.style.display = "none";

      })
    }
  }

  AOS.init();

  return (

    <>
      <section className='project-wrapper' id='project' data-aos="fade-up">
        <div className="container lg:w-[80%] w-full py-20 flex flex-col justify-center items-center m-auto">
          <h1 className='project-head text-center md:text-3xl text-[25px] text-white uppercase'>03. Worthy Projects</h1>

          <div className="proj-holder mt-20 lg:w-[80%] w-full m-auto lg:px-10 px-3" style={{ transition: 'all .3s cubic-bezier(0.175, 0.008,0.32,1.275)' }}>

            {
              // Put the projects..
              data.map((currEle, idx) => {
                return (
                  <div key={currEle.idx} className={currEle.class} style={{ backgroundColor: 'rgb(62 69 85 / 1)' }}>
                    <div className="card-body flex flex-col justify-evenly min-h-[30vh] px-2">
                      <div className="card-header">
                        <h5 className="card-title flex justify-between text-xl mb-10">
                          <span className='text-[#61a796] text-3xl'><ion-icon name="folder-outline"></ion-icon></span>
                          <span className='text-white'>
                            <a href={currEle.gitLink} target="_blank" ><ion-icon name="logo-github"></ion-icon> </a>
                            <a href={currEle.projectLink} target="_blank" ><ion-icon name="share-social-outline"></ion-icon></a>
                          </span>
                        </h5>
                        <h6 className="card-subtitle mb-2 text-[#dae1fa] text-2xl font-semibold">{currEle.title}</h6>
                        <p className="card-text text-gray-400">{currEle.des}</p>
                      </div>

                      <div className="card-footer">
                        <ul className="card-skills flex justify-between text-[#61a796]">
                          {
                            currEle.skill.map((currSkill, index) => {
                              return <li key={index} className='text-[13px]'>{currSkill}</li>
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <button onClick={showMore} className='showMore border-2 border-emerald-600 text-base text-emerald-600 p-3 rounded-sm my-20 transition-all hover:text-black hover:bg-emerald-500'>Show More</button>

          <div className="profile-links flex lg:w-[60%] w-[80%] justify-center">
            <FooterLink link='https://github.com/Jagrati1213' iconName='logo-github' />
            <FooterLink link='https://www.linkedin.com/in/jagrati-gupta-abbb43217/' iconName='logo-linkedin' />
            <FooterLink link='https://twitter.com/home' iconName='logo-twitter' />
          </div>
        </div>
      </section>
    </>
  )
}
