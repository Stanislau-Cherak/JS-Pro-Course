import React from "react";

import EmojiRow from '../EmojiRow/EmojiRow.jsx';

import './EmojiContainer.scss';

const EmojiContainer = ({ emoji, number }) => {
    return (
        <ul className='emoji-list'>
            {
                emoji.slice(0, number).map((emo) => {
                    return (
                        <EmojiRow key={emo.title} emo={emo} />
                    )
                })
            }
        </ul>
    )
}

export default EmojiContainer;
