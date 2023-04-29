import React from "react";

const About = () => {
    return (
            <div class="row m-3 justify-content-center align-items-center">
                <div class="col-lg-6 col-md-6 col-12">
                    <h2>About Me</h2>
                    <p>
                        Hello, I'm Holly Purvis, a web developer who holds a degree in Information Technology from the University of West Florida. I specialize in creating and maintaining websites
                        for clients that are visually appealing and easy to navigate. In addition to my web development skills, I also have experience in website support and search engine 
                        optimization (SEO). My goal is to ensure that my clients' websites are not only functional but also follow the reccomended SEO practices.
                    </p>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="p-3">
                        <h2>Education</h2>
                        <p><strong>BA Information Technology, 2021</strong></p>
                        <p>The University of West Florida, Pensacola, FL</p>
                    </div>
                    <div class="p-3">
                        <h2>Skills</h2>
                            <div class="d-flex"> 
                                <p>HTML5</p>
                                <p>CSS & SCSS</p>
                                <p>JavaScript</p>
                                <p>JQuery</p>
                                <p>React</p>
                                <p>Bootstrap</p>
                            </div>
                            <div class="d-flex"> 
                                <p>Redux</p>
                                <p>Node.js</p>
                                <p>PHP</p>
                                <p>MySQL</p>
                                <p>Firebase</p>
                            </div>
                            <div class="d-flex"> 
                                <p>MongoDB</p>
                                <p>Github</p>
                                <p>VS Code</p>
                                <p>Google Tag Manager</p>
                                <p>Google Analytics</p>
                                <p>Google Search Console</p>
                            </div>
                    </div>
                </div>
            </div>
    )
}

export default About