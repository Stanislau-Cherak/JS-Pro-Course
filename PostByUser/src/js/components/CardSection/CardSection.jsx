import React from 'react';
import Card from '../Card/Card.jsx';

import './CardSection.scss';

const CardSection = ({ users, posts, numberOfCards, onModalOpen }) => {
    return (
        <div className='card-section'>
            {
                posts.slice(0, numberOfCards).map((post) => {
                        return (<Card key={post.id} title={post.title} text={post.body} autor={users[post.userId].name} userId={post.userId} onClick={onModalOpen} />)
                })
            }
        </div>
    )
}

export default CardSection;
