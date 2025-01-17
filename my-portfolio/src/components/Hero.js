import React from 'react';
import Typewriter from 'typewriter-effect';
import pdf from '../doc/HollyPurvis_Resume.pdf'

const Hero = () => {
    return (
        <div>
            <div className="row m-3 global-padding hero">
                <div className="col-lg-6 col-md-6 col-12 mx-auto">
                <h1>
                    <Typewriter
                    options={{
                    strings: ['Welcome To My Website', 'I\'m Holly Purvis'],
                    autoStart: true,
                    loop: true,
                    }}
                />
                </h1>
                <div className="m-3">
                
                    <p>
                        Hello! My name is Holly Purvis, I have 4+ years of web development and IT experience. I recently obtained my Data Science certificate from The University of West Florida and I'm excited to learn more about data analytics and data science. My goal is to continue to take informative data and transform it into easily digestible information via dashboards and data reports.
                    </p>
                    <p>
                        You may find my resume by clicking the icon below or going to the Contact section.
                    </p>
                    <div className="icons">
                        <a href={pdf} target="_blank" rel="noreferrer" className="text-white"><i className="fa-regular fa-file"></i></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero