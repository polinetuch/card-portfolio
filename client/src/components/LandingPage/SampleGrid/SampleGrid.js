import React from 'react';
import cardImages from './Images/cardImages.json';
import './SampleGrid.scss';

const SampleGrid = () => {
    const showAllCards = cardImages.map((imgElement, index) => {
        return <img className='landing-page__grid-image' key={index} src={imgElement.image} alt=''/>
    })

    return (
        <div className='landing-page__grid'>
            {showAllCards}
        </div>
    )
};

export default SampleGrid;