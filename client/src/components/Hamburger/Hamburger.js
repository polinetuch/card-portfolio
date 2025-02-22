import React from 'react';
import './Hamburger.scss';

const Hamburger = (props) => {
    return (
        <button className='toggle-button' onClick={props.click}>
            <div className='toggle-button__line'></div>
            <div className='toggle-button__line'></div>
            <div className='toggle-button__line'></div>
        </button>
    )
}

export default Hamburger