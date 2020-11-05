import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import Service from '../Service/Service';
import ImageCategories from '../ImageCategories/AllCategories/AllCategories';
import Contact from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <LandingPage/>
            <Service/>
            <ImageCategories/>
            <Contact/>
        </div>
    )
}

export default Home;