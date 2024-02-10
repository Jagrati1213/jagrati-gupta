import React, { useEffect } from 'react'
import workData from '../../data/works.json';

export default function Work() {

    return (
        <div className="md:w-3/6 w-full md:px-5 px-6 py-4 lg:pl-10 border-l-2 border-gray-500">

            <div className='flex items-center flex-row'>
                <span className='font-bold text-[#39b175] lg:text-3xl text-2xl'><ion-icon name="desktop"></ion-icon></span>
                <h3 className="experience-heading lg:order-2">Work Experience</h3>
            </div>

            {/* Put Work Details.. */}
            {
                workData.map((currWork, index) => {
                    return (
                        <div className="pb-3 my-4" key={index}>
                            <h5 className='text-xl text-white'>{currWork?.position} <span className="text-accent-4 font-bold">
                                {currWork?.company}</span>
                            </h5>
                            <p className="mb-0 py-1 italic text-white">{currWork?.time}</p>
                            <p className='text-gray-400'>{currWork?.des}</p>
                            {currWork?.workLink && <p className='my-2 pl-0 text-gray-400'>I’ve been working with:</p>}
                            <ul className='text-gray-400 my-3 px-3  work-link'>
                                {/* Put works Link */}
                                {
                                    currWork?.workLink?.map((currLink, index) => {
                                        return (
                                            <li key={index} className=' hover:text-white hover:underline cursor-pointer italic text-[#61a796]'>
                                                <a href={currLink?.link} target="_blank" rel="noopener noreferrer">{currLink?.projectName}</a>
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
    )
}
