import React from 'react';
import cardImages from './Images/cardImages.json';
import './Cards.scss';

const SampleGrid = () => {
    const showAllCards = cardImages.map((imgElement, index) => {
        return <img className='cards__images' key={index} src={imgElement.image} alt=''/>
    });

    return (
        <div className='cards__div'>
            <h1>Cards</h1>
            {showAllCards}
        </div>
    )
};

export default SampleGrid;