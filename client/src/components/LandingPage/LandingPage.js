import React from 'react';
import About from './About/About';
import SampleGrid from './GridImages/GridImages';
import './LandingPage.scss';

const LandingPage = () => {

    return (
        <div className='landing-page'>
            <About/>
            <SampleGrid/>
        </div>
    )
};

export default LandingPage;