import React, { useState } from 'react';

import Button from '../Button/Button.jsx';
import { getCurrentDate } from '../../functions/getCurrentDate.js';

import './Form.scss';

const Form = ({ onClick }) => {

    const currentDate = getCurrentDate();

    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [date, setDate] = useState('');

    const onAddClick = () => {
        onClick({
            title: titleValue,
            date: date,
            description: descriptionValue,
            state: 'active'
        })
    }

    return (
        <div className='form'>
            <h1 className='title'>My ToDO List</h1>

            <input
                id='toDo_title'
                type='text'
                placeholder='Enter new case'
                onChange={(event) => setTitleValue(event.target.value)}
            />

            <input
                id='date'
                type='date'
                min={currentDate}
                max='2121-01-01'
                required
                onChange={(event) => setDate(event.target.value)}
            />

            <textarea
                id='toDo_description'
                type='text'
                placeholder='Enter a description of the case'
                onChange={(event) => setDescriptionValue(event.target.value)}
            />

            <Button className='add-button' onClick={onAddClick}>Add</Button>
        </div>
    )
}

export default Form;


