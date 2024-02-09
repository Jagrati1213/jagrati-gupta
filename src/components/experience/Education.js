import React from 'react'
import educationData from '../../data/education.json';

export default function Education() {
    return (
        <div className="md:w-3/6 w-full lg:px-5 px-6 py-4 lg:pr-10 md:text-end">
            <span className='font-bold text-[#39b175] lg:text-3xl text-2xl'><ion-icon name="school"></ion-icon></span>
            <h3 className="experience-heading">Education</h3>

            {/* Put Education Details.. */}
            {
                educationData.map((curredu, index) => {
                    return (
                        <div key={index} className="pb-3 my-4">
                            <h5 className='text-xl text-white my-5'>{curredu?.degree}</h5>
                            <span className="text-accent-4 font-bold text-md text-white">{curredu?.university}</span>
                            <p className="mb-0 py-1 italic text-white md:text-end">{curredu?.time}</p>
                            <p className='text-gray-400 md:text-end'>{curredu?.course}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
