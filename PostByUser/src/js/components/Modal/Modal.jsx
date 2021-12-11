import React from "react";
import Button from '../Button/Button.jsx';

import './Modal.scss';

const Modal = ({ user, onClose }) => {
    const { name, address, email, phone } = user;
    const { city, street, suite } = address;
    return (
        <div className='modal-wrapper'>
            <div className='modal-window'>
                <div className='modal-header'>
                    <div className='modal-title'>{name}</div>
                    <Button className='icon-button' onClick={onClose}>X</Button>
                </div>
                <div className='modal-body'>
                    <p className='modal-text'>Address: {city}, {street}, {suite}</p>
                    <p className='modal-text'>E-mail: <a href={`${email}`}>{email}</a></p>
                    <p className='modal-text'>Phone: {phone}</p>

                </div>
                <div className='modal-footer'>
                    <Button className='close-button' onClick={onClose}>Close</Button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
