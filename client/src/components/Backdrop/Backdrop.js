import React from 'react';
import './Backdrop.scss';
const Backdrop = (props) => {
    return (
        <div className='backdrop' onClick={props.click}/>
    )
}

export default Backdrop;