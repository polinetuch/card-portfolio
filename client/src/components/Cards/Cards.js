import React from 'react';
import cardImages from './Images/cardImages.json';
import './Cards.scss';

const SampleGrid = () => {
    const showAllCards = cardImages.map((imgElement, index) => {
        return ( 
            <figure>
                <img className='cards__images' key={index} src={imgElement.image} alt=''/>
                <figcaption>{imgElement.name}</figcaption>
            </figure>
        )
    });

    return (
        <div className='cards__div' id='cards'>
            <h1>Cards</h1>
            <div className='cards__image-container'>
                {showAllCards}
            </div>
        </div>
    )
};

export default SampleGrid;