import React from 'react';

import './EmojiRow.scss';

const EmojiRow = ({ emo }) => {
    const codePointHex=emo.symbol.codePointAt(0).toString(16);
    return (
        <li className='emoji-row'>
            <img className='emoji-row_img' src={`https://cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`}/>
            <p className='emoji-row_title'>{emo.title}</p>          
        </li>
    )
}

export default EmojiRow;
