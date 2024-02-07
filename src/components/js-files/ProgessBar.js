import React from 'react'

function ProgessBar({ ProgressText, progressClass }) {
  console.log(progressClass);
  return (
    <>
      <div className="bg-[#3e4555] w-full h-8 flex my-3">
        <div className="bg-green-600 text-white px-5 py-1 w-32">{ProgressText}</div>
        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear" className='bg-green-500' style={{ width: `${progressClass}%` }}></div>
      </div>
    </>
  )
}

export default ProgessBar;