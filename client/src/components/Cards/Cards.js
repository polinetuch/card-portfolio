import React from 'react';
import allImages from '../LandingPage/GridImages/Images/cardImages.json';
import './Cards.scss';

const Cards = () => {
    const showAllImages = allImages.map((imgElement, index) => {
        return (
            <img className='cards__image-element' src={imgElement.image} key={index} alt=''/>
        )
    })
    return (
        <div className='cards__container'>
            <h1 className='cards__title'>Cards</h1>
                {showAllImages}
        </div>
    )
};

export default Cards;