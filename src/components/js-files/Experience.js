import React from 'react'
import '../css-files/Experience.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';

export default function Experience() {

    const educationDetails =[
        {
            degree :'UG Degree',
            university:'IGNTU University',
            time:'2019 - 2022',
            course:'Bachelor of Computer Science'

        },
        {
            degree :'PG Degree',
            university:'TIT University',
            time:'2022 - 2024',
            course:'Master of Computer Science'
        }
    ];
    
    const workDetails =[
        {
            postion :'Wordpess dev',
            company:'WebnU',
            time:'Jan 2021 - May 2021',
            des:' Here, I learned how to customize WordPress pages & Elementor plugins.And also they taught me about Shopify liquid and sections type of things.',
            workLink:[
                {
                 link:'https://onzo.in/',
                 projectName:'Onzo'
                },
                {
                    link:'https://www.wholesalerkart.com/',
                    projectName:'Wholescart'
                }
            ]
        },
        {
            postion :'Frontend Developer',
            company:'FrintArt',
            time:'July 2022 - Nov 2022',
            des:'Here, I handle the UI design. And corporate with clients. And they taugth me about Angular JS.',
            workLink:[
                {
                 link:'https://frintart.com/',
                 projectName:'FrintArt'
                }
            ]
        }
    ]
    const [educationData, setEducationData ] = useState(educationDetails);
    const [workData, setWorkData ] = useState(workDetails);


    AOS.init();
  return (
    <>
      <section className="bg-[#272b33] py-10" id="experience" data-aos="fade-up">
        <div className="lg:w-[80%] w-full flex justify-center items-center flex-col mx-auto" >

            <h1 className="exper-head text-center py-3 lg:text-3xl text-[25px] text-white uppercase">02. Experience</h1>

            <div className="flex lg:w-[80%] w-full mt-10 md:flex-row flex-col">

                {/* Education */}
                <div className="md:w-3/6 w-full lg:px-5 px-6 py-4  lg:pr-10 md:pl-10 md:text-end">
                        <span  className='font-bold text-[#39b175] lg:text-3xl text-2xl'><ion-icon name="school"></ion-icon></span>
                    <h3 className="pl-2 py-2 font-semibold inline-block lg:text-3xl text-2xl text-[#39b175]">Education</h3>
                      
                      {/* Put Education Details.. */}
                     {
                        educationData.map((curredu,index)=>{
                             return(
                                <div key={index} className="pb-3 my-4">
                                    <h5 className='text-xl text-white'>{curredu.degree}, <span className="text-accent-4 font-bold">{curredu.university}</span></h5>
                                    <p className="mb-0 py-1 italic text-white md:text-end">{curredu.time}</p>
                                    <p className='text-gray-400 md:text-end'>{curredu.course}</p>
                                </div>
                             )
                        })
                     }
                </div>

                {/* Work experience */}
                <div className="md:w-3/6 w-full md:px-5 px-6 py-4 border-l-2 border-gray-500 md:pl-10">

                    <span className='font-bold text-[#39b175] lg:text-3xl text-2xl px-3 lg:hidden'><ion-icon name="desktop"></ion-icon></span>
                    <h3 className="pl-2 py-2 font-semibold inline-block lg:text-3xl text-2xl text-[#39b175]">Work Experience</h3>
                    <span className='font-bold text-[#39b175] lg:text-3xl text-2xl px-3 lg:inline hidden'><ion-icon name="desktop"></ion-icon></span>
                     
                     {/* Put Work Details.. */}
                     {
                       workData.map((currWork,index)=>{
                          return (       
                            <div className="pb-3 my-4" key={index}>
                                <h5 className='text-xl text-white'>{currWork.postion} <span className="text-accent-4 font-bold">- {currWork.company}</span></h5>
                                <p className="mb-0 py-1 italic text-white">{currWork.time}</p>
                                <p className='text-gray-400'>{currWork.des}</p>
                                <ul className='text-gray-400 my-3 px-3  work-link'>
                                    <p className='my-2'>I’ve been working with:</p>
                                      
                                      {/* Put works Link */}
                                      {
                                        currWork.workLink.map((currLink,index)=>{
                                            return(
                                                <li key ={index} className=' hover:text-white hover:underline cursor-pointer italic text-[#61a796]'>
                                                     <a href={currLink.link} target="_blank" rel="noopener noreferrer">{currLink.projectName}</a>
                                                 </li>
                                            )
                                        })
                                      }
                                 
                                </ul>
                            </div>
                          )
                       })
                     }
                </div>

            </div>
        </div>
    </section>
    </>
  )
}
