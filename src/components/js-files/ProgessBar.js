import React from 'react'

function ProgessBar({ProgrssText,progessName}) {
  return (
    <>
       <div className="cssProgress">
            <div className="progress4">{ProgrssText}</div>
            <div  data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear" className={progessName}></div>
        </div>
    </>
  )
}

export default ProgessBar;