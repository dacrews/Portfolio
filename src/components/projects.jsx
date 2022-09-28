import React from 'react'
import Elasmo from '../img/elasmo_rp.PNG'
import PUT from '../img/parkTracker.PNG'
import BC from '../img/barberCave.PNG'
import Portfolio from '../img/portfolioSS.PNG'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Projects = () => {
    return (
        <section id='projects'>
            <h1 className="pageTitle">Projects</h1>
            <div className="flexCards">
                <Card className="cardContent" id="longCard">
                    <Card.Img variant="top" src={Elasmo} />
                    <Card.Body>
                        <Card.Title>Elasmo</Card.Title>
                        <Card.Text>
                        <p>Web application that features 6 pages, incoporates 3 web maps, and is fully responsive. Gives visitors a deeper understanding of sharks by providing resources and visualizing shark tagging data.</p>
                        <p>Technologies Used:</p>
                        <ul>
                            <li>Frameworks: Django, Bootstrap</li>
                            <li>Libraries: Leaflet, jQuery</li>
                            <li>Languages: HTML, CSS, JavaScript, Python</li>
                            <li>Database: SQLite3</li>
                            <li>Other: Wikipedia API</li>
                        </ul>
                        </Card.Text>
                        <div className="btnGroup">
                            <Button href="https://dacrews.pythonanywhere.com/index" target="_blank" variant="dark">Live Site</Button>
                            <Button href="https://github.com/dacrews/elasmo" target="_blank" variant="dark">GitHub</Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="cardContent">
                    <Card.Img className="img-fluid" variant="top" src={PUT} />
                    <Card.Body>
                        <Card.Title>Park & Trail Tracker</Card.Title>
                        <Card.Text>
                        <p>This Park & Trail usage tracker that gathers the location of park visitors and records how they spent their time while utilizing Raleigh city parks and greenway trails.</p>
                        <p>Technologies Used:</p>
                        <ul>
                            <li>Libraries: Leaflet, jQuery, Chart.js</li>
                            <li>Languages: HTML, CSS, JavaScript, PHP</li>
                            <li>Database: PostgreSQL</li>
                            <li>Other: FontAwesome</li>
                        </ul>
                        </Card.Text>
                        <div className="btnGroup">
                            <Button href="https://github.com/dacrews/ParkTrailUsageTracker" target="_blank" variant="dark">GitHub</Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="cardContent">
                    <Card.Img className="img-fluid" variant="top" src={BC} />
                    <Card.Body>
                        <Card.Title>Barber Cave</Card.Title>
                        <Card.Text>
                        <p>Responsive, five-page website built for a local barber business.</p>
                        <p>Technologies Used:</p>
                        <ul>
                            <li>Library: Bootstrap</li>
                            <li>Languages: HTML, CSS</li>
                        </ul>
                        </Card.Text>
                        <div className="btnGroup">
                            <Button href="https://barbercavenc.com/" target="_blank" variant="dark">Live Site</Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="cardContent">
                    <Card.Img className="img-fluid" variant="top" src={Portfolio} />
                    <Card.Body>
                        <Card.Title>Portfolio</Card.Title>
                        <Card.Text>
                        <p>Portfolio developed to display my skills and interests pertaining to software development.</p>
                        <p>Technologies Used:</p>
                        <ul>
                            <li>Frameworks: React, Bootstrap</li>
                            <li>Languages: HTML, CSS, JSX(JavaScript syntax extension)</li>
                        </ul>
                        </Card.Text>
                        <div className="btnGroup">
                            <Button href=".header" target="_blank" variant="dark">Live Site</Button>
                            <Button href="" target="_blank" variant="dark">GitHub</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </section>
    )
}

export default Projects