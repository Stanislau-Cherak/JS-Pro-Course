import React, { useState } from 'react';

import emoji from './emojiList.json';

import Form from '../Form/Form.jsx';
import Select from '../Select/Select.jsx';
import EmojiContainer from '../EmojiContainer/EmojiContainer.jsx';

import './Emoji.scss';

const App = () => {

    const [inputValue, setInputValue] = useState('');
    const [numberOfEmoji, setNumberOfEmoji] = useState(10);

    const handlerInputChange = (inputValue) => {
        setInputValue(inputValue);
    }

    const handlerSelectChange = (numberOfEmoji) => {
        setNumberOfEmoji(numberOfEmoji);
    }

    const filteredEmoji = emoji.filter((emo) => {
        return emo.title.toLowerCase().includes(inputValue.toLowerCase()) || emo.keywords.toLowerCase().includes(inputValue.toLowerCase())
    })

    return (
        <div className='wrapper'>
            <div className='input-section'>

                <Form value={inputValue} onChange={handlerInputChange} />
                <Select title={'Emojis on page'} value={numberOfEmoji} options={[10, 20, 50]} onChange={handlerSelectChange} />

            </div>

            <EmojiContainer emoji={filteredEmoji} number={numberOfEmoji} />

        </div>
    );
};

export default App;
