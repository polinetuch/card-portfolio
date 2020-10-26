import React from 'react';
import './Service.scss';

const About = () => {
    return (
    <div className='about' id='service'>
        <div className='about__title'>
            <h1>Services:</h1>
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