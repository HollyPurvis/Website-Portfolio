import React from 'react';
import profile from '../imgs/profile.jpg';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <div>
            <div className="row m-3 global-padding hero">
                <div className="col-lg-6 col-md-6 col-12 mx-auto">
                <h1>
                    <Typewriter
                    options={{
                    strings: ['Hello, I\'m Holly Purvis', 'Web Developer'],
                    autoStart: true,
                    loop: true,
                    }}
                />
                </h1>
                    <p>
                        A Web Developer with a strong background in web support and maintenance, 
                        I am passionate about creating dynamic and innovative web solutions that enhance user experiences. 
                        With expertise in web development and a keen eye for detail, I am committed to producing clean, efficient, 
                        and maintainable code while adhering to industry standards and best practices. I am highly motivated, adaptable, 
                        and always seeking opportunities to enhance my skills and knowledge.
                    </p>
                    <div className="icons">
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-regular fa-file"></i>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 text-center ">
                    <div>
                    <img src={profile}  className="img-shadow" alt="profile" />
                        <p>photo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero