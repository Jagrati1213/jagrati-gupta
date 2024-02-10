import React from 'react'

function ProgressBar({ ProgressText, progressClass }) {

  return (
    <>
      <div className="bg-[#3e4555] w-full h-8 flex my-2">
        <div className="progress-text ">
          {ProgressText}
        </div>
        <div data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="linear"
          className='bg-green-500'
          style={{ width: `${progressClass}%` }}></div>
      </div>
    </>
  )
}

export default ProgressBar;