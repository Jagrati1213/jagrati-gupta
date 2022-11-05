import React from 'react'
import experiencestyle from '../css-files/Experience.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Experience() {
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

                    <div className="pb-3 my-4">
                        <h5 className='text-xl text-white'>UG Degree, <span className="text-accent-4 font-bold">IGNTU University</span></h5>
                        <p className="mb-0 py-1 italic text-white md:text-end">2019 - 2022</p>
                        <p className='text-gray-400 md:text-end'>Bachelor of Computer Science</p>
                    </div>
                    <div className="pb-3 my-4">
                        <h5 className='text-xl text-white'>Master Degree, <span className="text-accent-4 font-bold">TIT University</span></h5>
                        <p className="mb-0 py-1 italic text-white md:text-end">2022 - 2024</p>
                        <p className='text-gray-400 md:text-end'>Master of Computer Application </p>
                    </div>
                </div>

                {/* Work experience */}
                <div className="md:w-3/6 w-full md:px-5 px-6 py-4 border-l-2 border-gray-500 md:pl-10">

                    <span className='font-bold text-[#39b175] lg:text-3xl text-2xl px-3 lg:hidden'><ion-icon name="desktop"></ion-icon></span>
                    <h3 className="pl-2 py-2 font-semibold inline-block lg:text-3xl text-2xl text-[#39b175]">Work Experience</h3>
                    <span className='font-bold text-[#39b175] lg:text-3xl text-2xl px-3 lg:inline hidden'><ion-icon name="desktop"></ion-icon></span>

                    <div className="pb-3 my-4">
                        <h5 className='text-xl text-white'>Wordpess dev<span className="text-accent-4 font-bold">- WebnU</span></h5>
                        <p className="mb-0 py-1 italic text-white">Jan 2021 - May 2021 </p>
                        <p className='text-gray-400'>
                                 Here, I learned how to customize WordPress pages & Elementor plugins.
                                 And also they taught me about Shopify's liquid and sections type of things. 
                        </p>
                        <ul className='text-gray-400 my-3 px-3  work-link'>
                            <p className='my-2'>I’ve been working with:</p>
                            <li className=' hover:text-white hover:underline cursor-pointer italic text-[#61a796]'>
                                <a href="https://onzo.in/" target="_blank" rel="noopener noreferrer">Onzo</a>
                            </li>
                            <li className=' hover:text-white hover:underline cursor-pointer italic text-[#61a796]'>
                                <a href="https://www.wholesalerkart.com/" target="_blank" rel="noopener noreferrer">Wholescart</a>
                            </li>
                        </ul>

                    </div>
                    <div className="pb-3 my-4">
                        <h5 className='text-xl text-white'>Frontend Developer <span className="text-accent-4 font-bold">- FrintArt</span></h5>
                        <p className="mb-0 py-1 italic text-white">July 2022 - Nov 2022</p>
                        <p className='text-gray-400'>Here, I handle the UI design. And corporate with client's. And they taugth me about Angular JS. </p>
                        <ul className='text-gray-400 my-3 px-3  work-link'>
                            <p className='my-2'>I’ve been working with:</p>
                            <li className=' hover:text-white hover:underline cursor-pointer italic text-[#61a796]'>
                                <a href="https://frintart.com/" target="_blank" rel="noopener noreferrer">FrintArt</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}
