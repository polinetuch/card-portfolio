import React from 'react';
import './Navbar.scss';

const Navbar = (props) => {
    return (
        <header>
            <nav className='navbar'>
                <ul className='navbar__about'>{props.children}</ul>
            </nav>
        </header>
    )
};

export default Navbar;