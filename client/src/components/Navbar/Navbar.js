import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            <p className='navbar__about'>About</p>
            <p className='navbar__cards'>Cards</p>
            <p className='navbar__illustrations'>Illustrations</p>
            <p className='navbar__place-order'>Place Order</p>
        </div>
    )
};

export default Navbar;