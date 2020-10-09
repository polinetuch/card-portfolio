import React from 'react';
import cardImages from './Images/cardImages.json';
import './GridImages.scss';

const SampleGrid = () => {
    const showAllCards = cardImages.map((imgElement, index) => {
        return <img className='grid__image' key={index} src={imgElement.image} alt=''/>
    })

    return (
        <div className='grid__split grid__right'>
            <div className='grid__centered'>
                {showAllCards}
                <button className='grid__button'>Browse Cards</button>
            </div>
        </div>
    )
};

export default SampleGrid;