import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { toDoReducer } from './features/ToDo/ToDoSlice.js';
import App from './components/App/App.jsx';

import '../scss/reset.scss';

const store = configureStore({
    reducer: {
        toDo: toDoReducer,
    },
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('App')
);