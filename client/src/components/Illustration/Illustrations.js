import React from 'react';
import allImages from '../Cards/Images/cardImages.json';
import './Illustrations.scss';

const Cards = () => {
    const showAllImages = allImages.map((imgElement, index) => {
        return (
            <img className='cards__image-element' src={imgElement.image} key={index} alt=''/>
        )
    })
    return (
        <div className='cards__container'>
            <h1 className='cards__title'>Illustrations</h1>
                {showAllImages}
        </div>
    )
};

export default Cards;   