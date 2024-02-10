import React from 'react'
import ProgressBar from './ProgressBar';
import skillData from '../../data/skills.json';

export default function Skills() {
    return (
        <div className="flex justify-evenly flex-col lg:w-3/6 w-full">
            <h2 className='text-white text-2xl font-semibold'>Skills</h2>

            {
                skillData.map((skill, index) => {
                    return <ProgressBar key={index} ProgressText={skill.name} progressClass={skill.progress} />
                })
            }
        </div>
    )
}
