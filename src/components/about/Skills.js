import React from 'react'
import ProgressBar from './ProgressBar';
import skillData from '../../data/skills.json';

export default function Skills() {
    return (
        <div className="flex justify-evenly flex-col lg:w-3/6 w-full">
            <h2 className="text-white text-xl md:text-2xl font-semibold mb-5 text-start lg:text-end">Technical Skills</h2>
            <div className='flex items-center lg:justify-end flex-wrap gap-x-2 gap-y-3'>
                {
                    skillData.map((skill, index) => {
                        return <button key={index} className='bg-green-600 font-medium text-white py-1 md:py-2 px-4 md:px-4 rounded-md cursor-default'>{skill}</button>
                    })
                }</div>
        </div>
    )
}
