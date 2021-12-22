import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { toDoReducer } from './features/ToDo/ToDoSlice.js';
import { localStorageMiddleWare } from './helpers/localStorageMiddleWare.js';
import { reHydrateStore } from './helpers/reHydrateStore.js';
import App from './components/App/App.jsx';

import '../scss/reset.scss';

const store = configureStore({
    reducer: {
        toDo: toDoReducer,
    },
    preloadedState: reHydrateStore(),
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(localStorageMiddleWare),
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('App')
);