import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Filter from '../Filter/Filter.jsx';
import ToDoArea from '../../features/ToDo/ToDoArea.jsx';

import './App.scss';

function App() {

    const [filter, setFilter] = useState('all');
    const todos = useSelector((state) => state.toDo);
    const numberAll = todos.length;
    const numberActive = todos.filter((todo) => todo.state === 'active').length;
    const numberDone = todos.filter((todo) => todo.state === 'done').length;

    const handlerFilterChange = (filter) => {
        setFilter(filter);
    }

    return (
        <div className='container'>
            <Filter filter={filter} numberAll={numberAll} numberActive={numberActive} numberDone={numberDone} onClick={handlerFilterChange} />
            <ToDoArea filter={filter}/>
        </div>
    );
}

export default App;
