import React from 'react';

const Projects = () => {
    return (
        <div id="Projects" className="m-3 justify-content-center align-items-center global-padding">
        <div className="text-center">
        <h2 className="">Projects</h2>
        <hr></hr>
        </div>
        <div className="row card-deck global-padding justify-content-center">
        <div className="col-md-6 col-12 mx-auto m-2">
            <div className="card">
                <div className="card-body ">
                    <h2 className="card-title">Portfolio Website</h2>
                    
                    <div className="px-3">
                        <a href="https://github.com/HollyPurvis/Website-Portfolio" className="external" target="_blank" rel="noreferrer">Github</a>
                        <p>Skills: HTML, SCSS, Javascript, React, Node.Js, Bootstrap, and GitHub</p>
                        <p>This React App is hosted on AWS S3. The custom domain is registered with AWS Route 53.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6 col-12 mx-auto m-2">
            <div className="card">
                <div className="card-body ">
                    <h2 className="card-title">Travel Checklist</h2>

                    <p><a href="https://github.com/HollyPurvis/Website-Portfolio" className="external" target="_blank" rel="noreferrer">Github</a> | <a href="https://hollypurvis.github.io/travel-checklist/"  className="external" target="_blank" rel="noreferrer">https://hollypurvis.github.io/travel-checklist/</a></p>

                    
                    <p>Skills: HTML, CSS, JavaScript, Bootstrap, GitHub, and REST API</p>
                    <p>Having trouble keeping track of everything you need for vacation? Use this Travel Checklist to help keep track of 
                    everything you may need! Users can also learn more about the country they are visiting.</p>
                </div>
            </div>
        </div>

    </div>
           
        </div>
        
    )
}

export default Projects