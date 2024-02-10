import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Education from './Education';
import Work from './Work';

export default function Experience() {

    AOS.init();
    return (
        <>
            <div className="experience" id="experience" data-aos="fade-up" >
                <h1 className="heading mb-10">02. Experience</h1>
                <div className="flex lg:w-4/5 w-full lg:mt-10 md:flex-row flex-col">
                    <Education />
                    <Work />
                </div>
            </div>
        </>
    )
}
