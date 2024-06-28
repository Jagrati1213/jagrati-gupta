import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';

export default function AboutMe() {

    //custom display typing..
    const about = useRef(null);

    useEffect(() => {
        const typed = new Typed(about.current, {
            strings: ["I love to fixing bugs. ", "I love to making websites ", "I love to solving complex problems. "],
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

    return (
        <div className="about-me lg:w-3/6 w-full mb-10 md:mb-0 lg:border-r-2 border-gray-500 pr-6">
            <h2 className='text-white text-xl md:text-2xl font-semibold mb-5'>Who Am I?</h2>
            <ol className='text-white text-sm md:text-[14px] ml-2 text-justify'>
                <li className='about-li' data-icon="🦄">I'm a front-end & React JS developer.</li>
                <li className='about-li'>Experienced with modern frameworks like React JS, Redux, and Redux Toolkit.</li>
                <li className='about-li'>Skilled in TypeScript for building scalable and robust applications.</li>
                <li className='about-li'>Familiar with data fetching and API integration using Axios.</li>
                <li className="about-li">Knowledgeable in MongoDB for database management.</li>
                <li className="about-li">Competent in server-side JavaScript with Node.js and Express.js.</li>
                <li className="about-li">Experienced in building applications with Remix JS and Next.js.</li>
                <li className="about-li">Proficient in UI frameworks such as Bootstrap, Tailwind CSS, Ant Design, and Polaris.</li>
                <li className='about-li' ref={about}></li>
            </ol>
        </div>
    )
}
