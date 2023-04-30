import React from 'react';
import profile from '../imgs/profile.jpg';

const Hero = () => {
    return (
            <div class="row m-3 global-padding hero">
                <div class="col-lg-6 col-md-6 col-12">
                    <p class="txt-blue intro">Hello, I'm Holly Purvis</p>
                    <h1>Front End Web Developer</h1>
                    <p>
                        A Web Developer with a strong background in web support and maintenance, 
                        I am passionate about creating dynamic and innovative web solutions that enhance user experiences. 
                        With expertise in web development and a keen eye for detail, I am committed to producing clean, efficient, 
                        and maintainable code while adhering to industry standards and best practices. I am highly motivated, adaptable, 
                        and always seeking opportunities to enhance my skills and knowledge.
                    </p>
                    <i class="fa-regular fa-file"></i>
                </div>
                <div class="col-lg-6 col-md-6 col-12 text-center">
                    <img src={profile}  class="img-shadow" alt="profile" />
                </div>
            </div>
    )
}

export default Hero