import React from "react";

const About = () => {
    return (
            <div id="About" className="m-3 justify-content-center align-items-center global-padding">
                <h2 className="text-center">About</h2>
                <hr></hr>
                    <div className="row card-deck global-padding justify-content-center">
                    <div className="col-12 mx-auto m-2">
                        <div className="card">
                            <div className="card-body ">
                                <h2 className="card-title">Education</h2>
                                <div className="px-3">
                                    <h4 className="card-text "><strong>BA Information Technology</strong></h4>
                                    <h5>The University of West Florida</h5>
                                    <h5 className="card-text">Pensacola, FL</h5>
                                    <p>2017 - 2021</p>
                                    <p>Honor's List</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mx-auto m-2">
                    <div className="card">
                        <div className="card-body ">
                            <h2 className="card-title">Certifications</h2>
                            <div className="px-3">
                                <h4 className="card-text "><strong>Data Science</strong></h4>
                                <h5>The University of West Florida</h5>
                                <h5 className="card-text">Pensacola, FL</h5>
                                <p>2025</p>
                            </div>
                        </div>
                    </div>
                </div>                   
                    <div className="col-12 mx-auto m-2">
                        <div className="card">
                            <div className="card-body ">
                                <h2 className="card-title">Skills</h2>
                                <ul className="skills list-style-position-inside">
                                    <li>Python</li>
                                    <li>R</li>
                                    <li>PowerBI</li>
                                    <li>Tableau</li>
                                    <li>SQL</li>
                                    <li>MySQL</li>
                                    <li>SAS</li>
                                    <li>HTML5</li>
                                    <li>CSS & SCSS</li>
                                    <li>JavaScript</li>
                                    <li>AWS</li>
                                    <li>Node.js</li>
                                    <li>JQuery</li>
                                    <li>PHP</li>                        
                                    <li>Github</li>
                                    <li>Bootstrap</li>
                                    <li>Looker Studio</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mx-auto m-2">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">About Me</h2>
                            <p className="card-text px-3">
                                Hello! I'm Holly, an experienced Web Developer with over 4 years of web development and IT experience. I graduated Spring 2021 and obtained a Bachelor's degree in Information Technology. I first became interested in Data Analytics after creating dashboards for clients using Looker (formerly Google Data Studio). Ever since I have been working on improving not only my web development skills but data science/analytic skills aswell. I recently obtained my undergraduate Data Science certificate from The University of West Florida. Relevant courses that have helped me increase my knowledge of data science are Tools For Data Science, Data Warehousing, and Statistics For Data Science.  
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default About