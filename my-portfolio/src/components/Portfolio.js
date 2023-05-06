import React from 'react';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Nav from './Nav'
import Projects from './Projects';

const Portfolio = () => {

    return (
        <div>
            <Nav />
            <Hero />
            <About />
            <Experience />
            <Projects />
        </div>
    )
}

export default Portfolio