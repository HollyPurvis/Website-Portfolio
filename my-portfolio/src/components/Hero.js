import React from 'react';
import profile from '../imgs/profile.jpg';
import Typewriter from 'typewriter-effect';
import pdf from '../doc/HollyPurvis_Resume2023.pdf'

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
                        Hello! My name is Holly Purvis, a passionate web developer with an interest in cloud technologies and computing. In this space you can find out more information about me
                        and my skills. This website was developed using React and incorporates AWS services such as AWS S3 and AWS Route 53 for web hosting infrastructure.
                    </p>
                    <p>
                    You can find my resume by clicking the icon below or going to the contact section.
                    </p>
                    <div className="icons">
                        <a href={pdf} target="_blank" className="text-white"><i className="fa-regular fa-file"></i></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero