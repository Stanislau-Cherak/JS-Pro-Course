import { createSlice } from '@reduxjs/toolkit';

import { getUniqueId } from '../../functions/getUniqueId.js';

let localInitialState = [];

if ('ToDoStore' in localStorage) {
    localInitialState = JSON.parse(localStorage.getItem('ToDoStore'));
}

const toDoSlice = createSlice({
    name: 'TODO',
    initialState: localInitialState,
    reducers: {
        addToDo(state, action) {
            state.push({ ...action.payload, id: getUniqueId() });
            localStorage.setItem('ToDoStore', JSON.stringify(state));
        },
        deleteToDo(state, action) {
            const result = state.filter((item) => item.id !== action.payload)
            localStorage.setItem('ToDoStore', JSON.stringify(result));
            return result;
        },
        editToDo(state, action) {
            state.forEach((todo) => {
                if (todo.id === action.payload.id) {
                    todo.description = action.payload.description;
                    todo.date = action.payload.date;
                    todo.title = action.payload.title;
                }
            });
            localStorage.setItem('ToDoStore', JSON.stringify(state));
        },
        changeToDoStatus(state, action) {
            state.forEach((todo) => {
                if (todo.id === action.payload.id) {
                    todo.state = action.payload.state;
                }
            });
            localStorage.setItem('ToDoStore', JSON.stringify(state));
        }
    },
});

export const { addToDo, deleteToDo, editToDo, changeToDoStatus } = toDoSlice.actions;
export const { reducer: toDoReducer } = toDoSlice;
