import React from 'react';
import images from '../json/christmas.json';
import './ImageCategories.scss';

const Christmas = () => {
    const showAllImages = images.map((element, index) => {
        return (
            <figure key={index}>
                <img className='illustration__images' src={element.image} alt={element.name}/>
            </figure>
        )
    })
    return (
        <div className='illustration__container'>
            <h1>Christmas</h1>
            <div className='illustration__image-container'>
                {showAllImages}
            </div>
        </div>
    )
};

export default Christmas;
