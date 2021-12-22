import React, { useState } from "react";
import Button from '../Button/Button.jsx';

import { getCurrentDate } from '../../helpers/getCurrentDate.js';

import './Modal.scss';

const Modal = ({ title, date, description, onClose, onSave }) => {

    const [newTitle, setNewTitle]=useState(title);
    const [newDate, setNewDate]=useState(date);
    const [newDescription, setNewDescription]=useState(description);

    const onSaveClick=()=>{
        onSave({
            title: newTitle,
            date: newDate,
            description: newDescription,
        })
    }

    const currentDate = getCurrentDate();

    return (
        <div className='modal_wrapper'>
            <div className='modal_window'>
                <div className='modal_header'>
                    <Button className='close_button' onClick={onClose}>X</Button>
                </div>
                <div className='modal_body'>

                    <input
                        id='modal_title'
                        type='text'
                        value={newTitle}
                        onChange={(event) => setNewTitle(event.target.value)}
                    />

                    <input
                        id='modal_date'
                        type='date'
                        min={currentDate}
                        max='2121-01-01'
                        value={newDate}
                        required
                        onChange={(event) => setNewDate(event.target.value)}
                    />

                    <textarea
                        id='modal_description'
                        type='text'
                        value={newDescription}
                        onChange={(event) => setNewDescription(event.target.value)}
                    />

                </div>
                <div className='modal_footer'>
                    <Button className='save_button' onClick={onSaveClick}>Save</Button>
                    <Button className='cancel_button' onClick={onClose}>Cansel</Button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
