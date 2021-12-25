import { createSlice } from '@reduxjs/toolkit';

import { getUniqueId } from '../../helpers/getUniqueId.js';

let localStoreInitialState = [];

const toDoSlice = createSlice({
    name: 'TODO',
    initialState: localStoreInitialState,
    reducers: {
        addToDo(state, action) {
            state.push({ ...action.payload, id: getUniqueId() });
        },
        deleteToDo(state, action) {
            return state.filter((item) => item.id !== action.payload)
        },
        editToDo(state, action) {
            state.forEach((todo) => {
                if (todo.id === action.payload.id) {
                    todo.description = action.payload.description;
                    todo.date = action.payload.date;
                    todo.title = action.payload.title;
                }
            });
        },
        changeToDoStatus(state, action) {
            state.forEach((todo) => {
                if (todo.id === action.payload.id) {
                    todo.state = action.payload.state;
                }
            });
        }
    },
});

export const { addToDo, deleteToDo, editToDo, changeToDoStatus } = toDoSlice.actions;
export const { reducer: toDoReducer } = toDoSlice;
