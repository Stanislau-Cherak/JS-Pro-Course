import React, { useState } from 'react';
import Button from '../Button/Button.jsx';

import './Clicker.scss';

const Clicker = () => {

    const [number, setNumber] = useState(0);

    return (
        <div className='clicker'>
            <div className='clicker-result'>{number}</div>
            <div className='clicker-buttons'>
                <Button children='' className='increment-button' disabled={false} onClick={()=>setNumber(number+1)} />
                <Button children='' className='reset-button' disabled={false} onClick={()=>setNumber(0)} />
                <Button children='' className='decrement-button' disabled={false} onClick={()=>setNumber(number-1)} />
            </div>
        </div>
    );
};

export default Clicker;
