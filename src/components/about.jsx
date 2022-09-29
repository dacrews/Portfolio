import React from 'react'
import TREE from '../img/liveOak.JPG'

const About = () => {
    return (
        <section id='about'>
            <h1 className="pageTitle">About Me</h1>
                <div className='aboutContent'>
                    <div id="imgDiv">
                        <img id='headerImg' src={TREE} fluid="true"/>
                    </div>
                    <div className='aboutCardContent'>
                        <p>My roots began in the Natural Resource Management industry. My first exposure to how beneficial software can be was while I worked for the National Park Service. As a Wildland Firefighter and an Exotic Plant Surveyor, I got to work with various GIS-related software programs which catapulted my interest in development.</p>
                        <p>Currently, I work full-time as a Geospatial Applications Developer with 1.5 years of experience and I contribute to various state and federal web applications and websites. As a fast learner and detail-oriented person, I've found myself to be successful in this field and will never look back!</p>
                        <h4><u>Skills</u></h4>
                        <p><b>Languages:</b> HTML, CSS, JavaScript, Python, PHP, C#, SQL</p>
                        <p><b>Frameworks:</b> Django, React, .NET, Bootstrap</p>
                        <p><b>Libraries:</b> Leaflet, jQuery, Chart.js</p>
                        <p><b>Other:</b> PostgreSQL, Git</p>
                    </div>
                </div>
        </section>
    )
}

export default About