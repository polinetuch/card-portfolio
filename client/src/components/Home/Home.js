import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import Service from '../Service/Service';
import Cards from '../Cards/Cards';
import Illustrations from '../Illustration/Illustrations';
import Contact from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <LandingPage/>
            <Service/>
            <Cards/>
            <Illustrations/>
            <Contact/>
        </div>
    )
}

export default Home;