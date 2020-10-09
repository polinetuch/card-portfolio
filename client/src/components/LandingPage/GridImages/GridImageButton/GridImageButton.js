import React from 'react';
import './GridImageButton.scss';

const GridImageButton = () => {
    const handleClick = () => {
        console.log('clicked')
    }
    return (
        <div>
            <button onClick={() => handleClick()} className='grid__button'>Browse Cards</button>
        </div>
    )
};

export default GridImageButton;