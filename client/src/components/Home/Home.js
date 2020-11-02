import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import Service from '../Service/Service';
import Contact from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <LandingPage/>
            <Service/>
            <Contact/>
        </div>
    )
}

export default Home;