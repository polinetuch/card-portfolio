import React from 'react';
import About from './About/About';
import SampleGrid from './SampleGrid/SampleGrid';
import './LandingPage.scss';

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <About className='landing-page__outer-about'/>
            <SampleGrid className='landing-page__outer-sample-grid'/>
        </div>
    )
};

export default LandingPage;