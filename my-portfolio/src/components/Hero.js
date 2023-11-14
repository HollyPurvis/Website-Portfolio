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
                    strings: ['Hello, I\'m Holly Purvis'],
                    autoStart: true,
                    loop: true,
                    }}
                />
                </h1>
                <div className="m-3">
                
                    <p>
                        A web developer with a strong background in web support and maintenance, 
                        who is passionate about creating innovative websites and learning about cloud computing. I'm highly motivated, adaptable, 
                        and always seeking opportunities to enhance my skills and knowledge.
                    </p>
                    <div className="icons">
                        <a href="" className="text-white"><i className="fa-regular fa-file"></i></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero