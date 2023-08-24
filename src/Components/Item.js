import React from 'react';
import './Item.scss';

const Item = ({image, title, content}) => (
    <div className='column-posts'>
        <div className='post-image'>
            <img src={image} alt="Test Image"/>
        </div>
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
);

export default Item;