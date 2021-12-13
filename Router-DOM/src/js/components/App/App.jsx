import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Homepage from '../Homepage/Homepage.jsx';
import Clickers from '../Clickers/Clickers/Clickers.jsx';
import Emoji from '../Emoji/Emoji/Emoji.jsx';
import PostByUser from '../PostByUser/PostByUser/PostByUser.jsx';
import Notfoundpage from '../NotFoundPage/NotFoundPage.jsx';

import './App.scss';

function App() {
    return (
        <>
            <header>
                <Link to='/'>Home</Link>
                <Link to='/Clickers/0'>Clickers</Link>
                <Link to='/Emoji'>Emoji</Link>
                <Link to='/PostByUser'>PostByUser</Link>
            </header>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/Clickers/:number' element={< Clickers />} />
                <Route path='/Emoji' element={<Emoji />} />
                <Route path='/PostByUser' element={<PostByUser />} />
                <Route path='*' element={<Notfoundpage />} />
            </Routes>
        </>
    );
}

export default App;
