import React from "react";

const About = () => {
    return (
            <div id="About">
                    <div className="row card-deck global-padding justify-content-center">
                        <div className="col-12 mx-auto m-2">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title">About Me</h2>
                                    <p className="card-text px-3">
                                        Hello, I'm Holly Purvis, a web developer with a degree in Information Technology from the University of West Florida. I specialize in creating websites
                                        however, I am also passionate about expaning my knowledge on cloud technlogies and computing. In addition to my web development skills, I also have experience in website support and search engine 
                                        optimization (SEO). My goal is to develop user-friendly websites and to obtain my AWS Cloud Practicioner certification.
                                    </p>
                                </div>
                            </div>
                    </div>
                    <div className="col-12 mx-auto m-2">
                        <div className="card">
                            <div className="card-body ">
                                <h2 className="card-title">Education</h2>
                                <div className="px-3">
                                    <h4 className="card-text "><strong>BA Information Technology</strong></h4>
                                    <h5>The University of West Florida</h5>
                                    <h5 className="card-text">Pensacola, FL</h5>
                                    <p>2017 - 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mx-auto m-2">
                        <div className="card">
                            <div className="card-body ">
                                <h2 className="card-title">Skills</h2>
                                <ul className="skills list-style-position-inside">
                                    <li>HTML5</li>
                                    <li>CSS & SCSS</li>
                                    <li>JavaScript</li>
                                    <li>REST API</li>
                                    <li>SQL</li>
                                    <li>MySQL</li>
                                    <li>AWS</li>
                                    <li>Node.js</li>
                                    <li>JQuery</li>
                                    <li>PHP</li>                        
                                    <li>MongoDB</li>
                                    <li>Github</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About