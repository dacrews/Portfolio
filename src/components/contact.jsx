import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const Contact = () => {
    return (
        <section id='contact'>
            <h1 className="pageTitle">Contact</h1>
            <h3>Feel free to reach out on LinkedIn!</h3>
            <div id='contactIcons'>
                <a href="https://www.linkedin.com/in/damariscrews/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin size={40} /></a>
            </div>
            <h3>Check out my Github!</h3>
            <div id='contactIcons'>
                <a href="https://github.com/dacrews" target="_blank" rel="noopener noreferrer"><AiFillGithub size={40} /></a>
            </div>
        </section>
    )
}

export default Contact