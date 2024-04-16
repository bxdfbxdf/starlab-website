'use client'

import { useState, useEffect, useRef } from "react"

const HamburgerIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
)

const NavToggle = (props) => {
    const [navOpen, setNavOpen] = useState(false)
    const [isClient, setIsClient] = useState(false)
    const dropdownRef = useRef(0)
    
    function toggleNav(e){
        e.preventDefault()

        setNavOpen(!navOpen)
        console.log("nav button")
    }

    useEffect(() => {

        setIsClient(true)

        const handleClickOutside = (event) => {
          if (event.target !== dropdownRef.current) {
            console.log('click outside of nav menu')
            setNavOpen(false);
          }
        }
    
        document.addEventListener("click", handleClickOutside)
    
        return () => {
          document.removeEventListener("click", handleClickOutside)
        }
    }, [navOpen])

    //prevent SSR hydration error
    if(!isClient) {
        return null
    }

    return (
        <div 
            ref={dropdownRef} 
            onClick={toggleNav} 
            className={'nav-toggle-container ' + (navOpen ? 'open':'closed')}
        >
            <button type='button' className='nav-toggle' onClick={toggleNav}>
                {HamburgerIcon}
            </button>
            {props.children}
        </div>
    )
}

export default NavToggle