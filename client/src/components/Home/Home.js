import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import Service from '../Service/Service';
import AllImageCategories from '../ImageCategories/AllImageCategories';
import Christmas from '../ImageCategories/Category/Christmas';
import Illustration from '../ImageCategories/Category/Illustrations'
import Contact from '../Footer/Footer';
import PrintedItems from '../ImageCategories/Category/PrintedItems';
import IllustratedCalligraphy from '../ImageCategories/Category/IllustratedCalligraphy';

const Home = () => {
    return (
        <div>
            <LandingPage/>
            <Service/>
            <AllImageCategories name='Christmas'>
                <Christmas/>
            </AllImageCategories>
            <AllImageCategories name='Illustrations'>
                <Illustration/>
            </AllImageCategories>
            <AllImageCategories>
                <IllustratedCalligraphy/>
            </AllImageCategories>
            <PrintedItems/>
            <Contact/>
        </div>
    )
}

export default Home;