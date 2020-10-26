import React from 'react';
import './LandingPage.scss';

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <div className='landing-page__div'>
                <h1>Welcome to deboodle.</h1>
                <button className='landing-page__button'>Browse Cards</button>
            </div>
        </div>
    )
};

export default LandingPage;