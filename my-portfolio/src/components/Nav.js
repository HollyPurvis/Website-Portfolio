import React from 'react';

const Nav = () => {
    return (
        <div class="global-padding">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand brands" href="">Holly Purvis</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                <a class="nav-link" href="#About">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Experience</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Projects</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>
            </div>
        </nav>
        </div>
        
    )
}

export default Nav