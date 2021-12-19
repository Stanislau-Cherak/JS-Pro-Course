import React, { useState } from 'react';
import Button from '../Button/Button.jsx';

import './Clicker.scss';

const Clicker = () => {

    const [number, setNumber] = useState(0);

    return (
        <div className='clicker'>
            <div className='clicker-result'>{number}</div>
            <div className='clicker-buttons'>
                <Button className='increment-button' disabled={false} onClick={()=>setNumber(number+1)}>+</Button>
                <Button className='reset-button' disabled={false} onClick={()=>setNumber(0)}>0</Button>
                <Button className='decrement-button' disabled={false} onClick={()=>setNumber(number-1)}>-</Button>
            </div>
        </div>
    );
};

export default Clicker;
