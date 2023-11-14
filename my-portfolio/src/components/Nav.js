import React from 'react';

const Nav = () => {
    return (
        <div className="global-padding">
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand brands" href="">Holly Purvis</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                <a className="nav-link" href="#About">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#Experience">Experience</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#Contact">Contact</a>
                </li>
            </ul>
            </div>
        </nav>
        </div>
        
    )
}

export default Nav