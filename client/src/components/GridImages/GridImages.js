import React from 'react';
import cardImages from './Images/cardImages.json';
import './GridImages.scss';

const SampleGrid = () => {
    const showAllCards = cardImages.map((imgElement, index) => {
        return <img className='grid__images' key={index} src={imgElement.image} alt=''/>
    })

    const handleClick = () => {
        alert('clicked')
    }

    return (
        <div className='grid'>
            <div className='grid__all-images'>
                {showAllCards}
            </div>
            <div>
                <button className='grid__button' onClick={handleClick}>Browse Cards</button>
            </div>
        </div>
    )
};

export default SampleGrid;