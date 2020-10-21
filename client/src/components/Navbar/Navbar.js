import React from 'react';
import Hamburger from '../Hamburger/Hamburger';
import './Navbar.scss';

const Navbar = (props) => {
    return (
        <header className='navbar'>
            <nav className='navbar__navigation'>
                <div className='navbar__toggle-hamburger'>
                    <Hamburger click={props.drawerClickHandler}/>
                </div>
                <div>
                    <a href='/' className='navbar__logo'>
                        <img 
                            className='navbar__logo-image   '
                            src='https://github.com/polinetuch/deboodle/blob/main/client/src/components/asset-images/deboodle_logo.jpg?raw=true' 
                            alt='Deboole Logo'/>
                    </a>
                </div>
                <div className='navbar__spacer'/>
                <div className='navbar__navigation-items'>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/#about'>About</a></li>
                        <li><a href='/#cards'>Cards</a></li>
                        <li><a href='/#illustrations'>Illustrations</a></li>
                        <li><a href='/#contact'>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Navbar;