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
                        Logo
                    </a>
                </div>
                <div className='navbar__spacer'/>
                <div className='navbar__navigation-items'>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/#about'>About</a></li>
                        <li><a href='/#cards'>Cards</a></li>
                        <li><a href='/#illustrations'>Illustrations</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Navbar;