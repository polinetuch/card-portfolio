import React from 'react';
import './About.scss';

const About = () => {
    return (
    <div className='about' id='about'>
        <div className='about__title'>
            <h1>Our services:</h1>
            <ul className='about__lists'>
                <li>Personalised greeting cards of your choice</li>
                <li>Hand-drawn logos/signs</li>
                <li>Customised wall arts</li>
                <li>Invitation cards</li>
            </ul>
        </div>
    </div>
    )
};

export default About;