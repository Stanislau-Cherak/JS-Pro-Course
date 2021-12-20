import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { deleteToDo, editToDo, changeToDoStatus } from './ToDoSlice.js';
import Button from '../../components/Button/Button.jsx';
import Modal from '../../components/Modal/Modal.jsx';

import './ToDo.scss';

const ToDo = ({ title, date, description, state, id }) => {

    const [currentState, setCurrentState] = useState(state);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const finaleClassFace1 = classNames('face', 'face1', currentState);
    const finaleClassFace2 = classNames('face', 'face2', currentState);

    const dispatch = useDispatch();

    const onDelete = () => {
        dispatch(deleteToDo(id));
    };

    const onClose = () => {
        setIsModalOpen(false);
    }

    const onEdit = () => {
        setIsModalOpen(true);
    }

    const handleSave = ({ title, date, description }) => {
        dispatch(editToDo({ id, title: title, date: date, description: description }));
        setIsModalOpen(false);
    }

    const handeleChange = () => {
        let newState = 'active';
        if (currentState === 'active') {
            newState = 'done';
        }
        setCurrentState(newState);
        dispatch(changeToDoStatus({ id, state: newState }));
    }

    return (

        <>
            <li className='card'>
                <div className={finaleClassFace1} >
                    <div className='header'>
                        <p className='date'>{date}</p>
                        <Button className={'delete_button'} onClick={onDelete}>X</Button>
                    </div>
                    <div className='content'>
                        <h3>{title}</h3>
                    </div>
                </div>
                <div className={finaleClassFace2}>
                    <div className='content'>
                        <p>{description}</p>
                    </div>
                    <div className='footer'>
                        <Button className={'accept_button'} onClick={handeleChange}>
                            {currentState === 'active' ? 'done' : 'active'}
                        </Button>
                        <Button className={'edit_button'} onClick={onEdit}>
                            Edit
                        </Button>
                    </div>
                </div>
            </li>

            {isModalOpen && (<Modal title={title} date={date} description={description} id={id} onClose={onClose} onSave={handleSave} />)}
        </>
    )
}

export default ToDo;
