import React from 'react';

let home = "/";
let about = "/#About";
let experience = "/#Experience";
let projects = "/#Projects";
let contact = "/#Contact";



const Nav = () => {
    return (
        <div className="global-padding">
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href={home}>Holly Purvis</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href={home}>Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link"  href={about}>About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href={experience}>Experience</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href={projects}>Projects</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href={contact}>Contact</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

        </div>
        
    )
}



export default Nav