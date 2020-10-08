import React from 'react';
import './About.scss';

const About = () => {
    return (
        <div className='landing-page__about'>
            <h1 className='landing-page__paragraph'>Ready to customise your own greeting cards? deboodle 
                is here for you. Find out more.
            </h1>
            <button href="cards" className='landing-page__btn'>Browse cards</button>
        </div>
    )
};

export default About;