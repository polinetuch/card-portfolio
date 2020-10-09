import React from 'react';
import './About.scss';

const About = () => {
    return (
        <div className='about__split about__left'>
            <div className='about__centered'>
                <h1 className='about__paragraph'>Ready to customise your own greeting cards? deboodle 
                    is here for you. Find out more.
                </h1>
                <button href="cards" className='about__button'>Browse cards</button>
            </div>
        </div>
    )
};

export default About;