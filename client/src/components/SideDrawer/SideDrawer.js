import React from 'react';
import './SideDrawer.scss';

const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer';

    if (props.showSideDrawer) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/#service'>Service</a></li>
                <li><a href='/#cards'>Cards</a></li>
                <li><a href='/#illustrations'>Illustrations</a></li>
                <li><a href='/#contact'>Contact</a></li>

            </ul>
        </nav>
    )
};

export default SideDrawer;