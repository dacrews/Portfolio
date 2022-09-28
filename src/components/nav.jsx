import React from 'react'
import {HiHome} from 'react-icons/hi'
import {BsFillFileEarmarkCodeFill} from 'react-icons/bs'
import {MdPermContactCalendar} from 'react-icons/md'
import {BsFillInfoSquareFill} from 'react-icons/bs'
import { useState } from 'react'

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#')

    return (
        <nav>
            <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><HiHome size={25} /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsFillInfoSquareFill size={25} /></a>
            <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><BsFillFileEarmarkCodeFill size={25} /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdPermContactCalendar size={25} /></a>
        </nav>
    )
}

export default Navbar