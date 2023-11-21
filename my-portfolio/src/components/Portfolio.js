import React from 'react';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Nav from './Nav';
import Contact from './Contact';
import Projects from './Projects';

const Portfolio = () => {

    return (
        <div>
            <Nav />
            <Hero />
            <Experience />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

export default Portfolio