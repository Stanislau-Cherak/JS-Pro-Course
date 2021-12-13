import React, { useState } from 'react';
import Button from '../Button/Button.jsx';

import './Clicker.scss';

const Clicker = () => {

    const [number, setNumber] = useState(0);

    return (
        <div className='clicker'>
            <div className='clicker-result'>{number}</div>
            <div className='clicker-buttons'>
                <Button className='increment-button' onClick={()=>setNumber(number+1)} />
                <Button className='reset-button' onClick={()=>setNumber(0)} />
                <Button className='decrement-button' onClick={()=>setNumber(number-1)} />
            </div>
        </div>
    );
};

export default Clicker;
