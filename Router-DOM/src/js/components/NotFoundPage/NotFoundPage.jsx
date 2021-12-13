import React from 'react';
import { Link } from 'react-router-dom';

import './NotFoundPage.scss';

const Notfoundpage = () => {
    return (
        <div className='notfound_title'>
            This page doesn't exist. Go <Link to="/">home</Link>
        </div>
    )
}

export default Notfoundpage;
