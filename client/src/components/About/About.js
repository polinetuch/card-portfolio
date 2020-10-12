import React from 'react';
import './About.scss';

const About = () => {
    return (
    <div className='about'>
        <h1 className='about__paragraph'>Ready to customise your own greeting cards? 
            deboodle is here for you. Find out more.
        </h1>
        <h3>Our services: 
            <br/>
            <h4>Personalised greeting cards of your choice</h4>
            <h4>Illustrations</h4>
            <h4>Hand-drawn logo/signs</h4>
        </h3>
        <button href="cards" className='about__button'>Place Order</button>
    </div>
    )
};

export default About;