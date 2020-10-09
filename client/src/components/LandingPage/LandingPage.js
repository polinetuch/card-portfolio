import React from 'react';
import About from './About/About';
import GridImages from './GridImages/GridImages';
import './LandingPage.scss';

const LandingPage = () => {

    return (
        <div className='landing-page'>
            <About/>
            <GridImages/>
        </div>
    )
};

export default LandingPage;