import React from 'react';
import './SideDrawer.scss';

const SideDrawer = () => {
    return (
        <nav className='side-drawer'>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/cards'>Cards</a></li>
                <li><a href='/illustrations'>Illustrations</a></li>
            </ul>
        </nav>
    )
};

export default SideDrawer;