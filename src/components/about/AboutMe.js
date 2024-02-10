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
        <div className="about-me lg:w-3/6 w-full mb-10 md:mb-0">
            <h2 className='text-white text-xl font-semibold mb-5'>Who Am I?</h2>

            <ol className='text-white text-sm md:text-md ml-2'>
                <li className='about-li' data-icon="🦄">
                    I'm a front-end & React JS developer.
                </li>
                <li className='about-li'>
                    I Love to Learned new things, & create sites.
                </li>
                <li className='about-li'>
                    I also worked on JavaScript, Jquery, Typescript.
                </li>
                <li className='about-li'>
                    You can contact me on <i>Linkedin</i>, if you want to create your own sites.
                </li>
                <li className='about-li' ref={about}></li>
            </ol>

            <p className='text-xs md:text-md pt-4 lg:pr-10 text-[#61a796] text-justify' >
                Since 2019 - I've spent my time seeking and learning new technologies.
                This has led to me working on some amazing world-class projects, worked at some
                amazing places like [ WebnU, FrintArt, TopBar ], and worked with some great people.
                If you are looking for a dedicated front-end developer who is passionate about
                creating exceptional user experiences, please don't hesitate to get in touch.
            </p>
        </div>
    )
}
