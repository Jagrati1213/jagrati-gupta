import React, { useEffect, useRef, useState } from 'react'

export default function Header() {

    const [isSticky, setIsSticky] = useState(false);
    const [menu, setMenu] = useState(false);
    const navScrollRef = useRef(null);

    //Toggle menu 
    const menuToggle = () => {
        setMenu(!menu);
    }

    // Fixed navbar
    const handleScroll = () => {
        const navTop = navScrollRef.current.offsetTop;
        setIsSticky(window.scrollY > navTop);
    };

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`header ${isSticky ? 'fixed top-0' : ''}`}
            ref={navScrollRef}>
            <div className="nav-btn text-4xl text-white lg:hidden flex justify-end">
                <ion-icon name={!menu ? "menu" : "close"} onClick={menuToggle}></ion-icon>
            </div>
            <ul className={`${menu ? 'h-[31vh]' : 'h-0'} md:h-auto header-ul`}>

                <li className='header-li'
                    onClick={menuToggle} >
                    <a href="#home" name="Home">Home</a>
                </li>
                <li className='header-li'
                    onClick={menuToggle}>
                    <a href="#about" name="About">About</a>
                </li>
                <li className='header-li'
                    onClick={menuToggle}>
                    <a href="#experience" name="Experience">Experience</a>
                </li>
                <li className='header-li'
                    onClick={menuToggle}>
                    <a href="#project" name="Projects">Projects</a>
                </li>
            </ul>
        </div>
    )
}
