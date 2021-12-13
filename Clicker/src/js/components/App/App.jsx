import React from 'react';
import Clicker from '../Clicker/Clicker.jsx';

import './App.scss';

const App = () => {

    return (
        <div className='clickers'>
            <Clicker />
            <Clicker />
            <Clicker />
            <Clicker />
            <Clicker />
        </div>
    );
};

export default App;