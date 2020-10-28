import React from 'react';
import allImages from '../Cards/Images/cardImages.json';
import './Illustrations.scss';

const Cards = () => {
    const showAllImages = allImages.map((imgElement, index) => {
        return (
            <figure key={index}>
                <img className='cards__image-element' src={imgElement.image} alt={imgElement.name}/>
                <figcaption>{imgElement.name}</figcaption>
            </figure>
            )
    })
    return (
        <div className='cards__container' id='illustrations'>
            <h1 className='cards__title'>Illustrations</h1>
            <div className='cards__all-images'>
                {showAllImages}
            </div>
        </div>
    )
};

export default Cards;   