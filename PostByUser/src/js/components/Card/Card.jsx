import React from 'react';
import Button from '../Button/Button.jsx';
import Avatar from './profile.png';

import './Card.scss';

const Card = ({ userId, title, text, autor, onClick }) => {

    const handleClick = (userId) => {
        onClick(userId)
    }

    return (
        <div className='card'>
            <div className='card-img_top'>
            </div>
            <div className='card-body'>
                <h5 className='card_title'>{title}</h5>
                <p className='card_text'>{text}</p>
                <p className='card_autor'>Autor: <Button className='autor-link' onClick={() => handleClick(userId)}>{autor}</Button></p>
            </div>
        </div>
    )
}

export default Card;
