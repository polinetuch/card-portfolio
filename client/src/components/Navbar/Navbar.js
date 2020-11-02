import React from 'react';
import Hamburger from '../Hamburger/Hamburger';
import './Navbar.scss';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

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
                            src='/logo.jpg' 
                            alt='Deboole Logo'/>
                    </a>
                </div>
                <div className='navbar__spacer'/>
                <div className='navbar__navigation-items'>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/#service'>Service</a></li>
                        <li><a href='/#gallery'>View Gallery</a></li>
                        <li><Link to='/order-form'>Order</Link></li>
                        <li><a href='/#contact'>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Navbar;