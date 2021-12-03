import React from "react";

import EmojiRow from '../EmojiRow/EmojiRow.jsx';

import './EmojiContainer.scss';

const EmojiContainer = ({ emoji, number }) => {
    return (
        <ul className='emoji-list'>
            {
                emoji.map((emo, index) => {
                    if (index < number) {
                        return (
                            <EmojiRow key={emo.title} emo={emo} />
                        )
                    }
                })
            }
        </ul>
    )
}

export default EmojiContainer;

