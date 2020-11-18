import React, { useState } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import Service from '../Service/Service';
import Illustrations from '../ImageCategories/Illustrations';
import Christmas from '../ImageCategories/Christmas';
import HandDrawnCalligraphy from '../ImageCategories/HandDrawnCalligraphy';
import Contact from '../Footer/Footer';

const Home = () => {
    const [isCollapsed, setIsCollapsed] = useState(collapsed);

    return (
        <div>
            <LandingPage/>
            <Service/>
            <button onClick={() => setIsCollapsed(!collapsed)}>
                {isCollapsed ? 'Show' : 'Hide'}

            </button>
            <Christmas/>
            <Illustrations/>
            <HandDrawnCalligraphy/>
            <Contact/>
        </div>
    )
}

export default Home;