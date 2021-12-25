import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getState } from '../../helpers/getState.js';

import { addToDo } from './ToDoSlice.js';
import ToDo from './ToDo.jsx';
import Form from '../../components/Form/Form.jsx';

import './ToDoArea.scss';

const ToDoArea = ({ filter }) => {

    const todos = useSelector(getState);

    const preparedToDoS = (filter === 'all') ? todos : todos.filter((todo) => todo.state === filter);

    const dispatch = useDispatch();

    const handleAddToDo = (todo) => {
        dispatch(addToDo(todo));
    };

    return (
        <div>
            <Form onClick={handleAddToDo} />
            <ul className='cards'>
                {preparedToDoS.map((todo) => (
                    <ToDo key={todo.id} {...todo} />
                ))}
            </ul>
        </div>
    );
};

export default ToDoArea;
