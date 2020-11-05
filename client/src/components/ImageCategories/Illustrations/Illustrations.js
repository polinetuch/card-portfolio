import React from 'react';
import images from '../json/illustration.json';

const illustrations = () => {
    const showAllImages = images.map((element, index) => {
        return (
            <figure key={index}>
                <img src={element.image} alt={element.name}/>
            </figure>
        )
    })
    return (
        <div className='illustration__container'>
            {showAllImages}
        </div>
    )
}

export default illustrations;
