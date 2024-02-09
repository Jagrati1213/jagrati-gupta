import React from 'react'

function ProgessBar({ ProgressText, progressClass }) {
  console.log(progressClass);
  return (
    <>
      <div className="bg-[#3e4555] w-full h-8 flex my-2">
        <div className="bg-green-600 text-white text-xs md:text-base flex items-center justify-center w-20 md:w-32">
          {ProgressText}
        </div>
        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear" className='bg-green-500' style={{ width: `${progressClass}%` }}></div>
      </div>
    </>
  )
}

export default ProgessBar;