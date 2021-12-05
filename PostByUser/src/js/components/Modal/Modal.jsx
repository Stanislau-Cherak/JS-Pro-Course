import React from "react";
import Button from '../Button/Button.jsx';

import './Modal.scss';

const Modal = ({ user, isOpen, onClose }) => {
    return (
        <>
            {isOpen &&
                <div className='modal-wrapper'>
                    <div className='modal-window'>
                        <div className='modal-header'>
                            <div className='modal-title'>{user.name}</div>
                            <Button className='icon-button' onClick={onClose}>X</Button>
                        </div>
                        <div className='modal-body'>
                            <p className='modal-text'>Address: {user.address.city}, {user.address.street}, {user.address.suite}</p>
                            <p className='modal-text'>E-mail: <a href={`${user.email}`}>{user.email}</a></p>
                            <p className='modal-text'>Phone: {user.phone}</p>

                        </div>
                        <div className='modal-footer'>
                            <Button className='close-button' onClick={onClose}>Close</Button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal;
