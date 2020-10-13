import React from 'react';
import Hamburger from '../Hamburger/Hamburger';
import './Navbar.scss';

const Navbar = (props) => {
    return (
        <header className='navbar'>
            <nav className='navbar__navigation'>
                <div>
                    <Hamburger/>
                </div>
                <div>
                    <a href='/' className='navbar__logo'>
                        Logo{/* <img href='/' src='https://github.com/polinetuch/card-portfolio/blob/main/client/src/components/deboodle_logo.jpg?raw=true' alt='logo'/> */}
                    </a>
                </div>
                <div className='navbar__spacer'/>
                <div className='navbar__navigation-items'>
                    {/* <ul className='navbar__about'>{props.children}</ul> */}
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Cards</a></li>
                        <li><a href='/'>Illustrations</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Navbar;