import React from 'react'

function FooterLink({link,iconName}) {
  return (
    <>
     <span className='text-3xl text-white lg:mx-12 mx-2 cursor-pointer hover:text-emerald-600'>
        <a href={link} target='_blank'><ion-icon name={iconName}></ion-icon></a>
    </span>
    </>
  )
}

export default FooterLink;