import React from 'react';
import pdf from '../doc/HollyPurvis_Resume.pdf'

const Contact = () => {
    return (
        <div id="Contact" className="m-3 justify-content-center align-items-center global-padding">
        <div className="text-center m-5 p-3">
        <h2 className="">Contact</h2>
        <hr></hr>
        <div className="row m-5 p-3 justify-content-center align-items-center">
        <div className="col-12 col-md-4 ">
            <a href="mailto:holly.m.purvis1@gmail.com">
                <i className="fa-solid fa-envelope fa-2xl"></i>
                <h3 className="p-3">Email</h3>
            </a>   
            </div>
            <div className="col-12 col-md-4 ">
            <a href="tel:+1-707-239-4086">
                <i className="fa-solid fa-phone fa-2xl"></i>
                <h3 className="p-3">Call</h3>
               
            </a>   
            </div>
            <div className="col-12 col-md-4">
            <a href={pdf} target="_blank" rel="noreferrer" className="text-white">
                <i className="fa-regular fa-file fa-2xl"></i>
                <h3 className="p-3">Resume</h3>
            </a>    
            </div>
        </div>
        </div>
        </div>

    )
}

export default Contact