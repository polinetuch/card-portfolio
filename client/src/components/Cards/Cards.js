import React from 'react';
import cardImages from './Images/cardImages.json';
import './Cards.scss';

const SampleGrid = () => {
    const showAllCards = cardImages.map((imgElement, index) => {
        return ( 
            <figure key={index}>
                <img className='cards__images' src={imgElement.image} alt={imgElement.name}/>
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
            <img src='./logo512.png'/>
        </div>
    )
};

export default SampleGrid;