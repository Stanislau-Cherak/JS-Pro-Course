import React from 'react';

import './Filter.scss';

const Filter = ({ filter, numberAll, numberActive, numberDone, onClick }) => {

    const onChange=(event)=>{
        onClick(event.target.value)
    }

    return (
        <div className='filter'>
            <div className='tabs'>
                <input type='radio' id='radio-1' name='tabs' value={'all'} defaultChecked={filter ==='all'} onChange={onChange}/>
                <label className='tab' htmlFor='radio-1'>All<span className='notification'>{numberAll}</span></label>
                <input type='radio' id='radio-2' name='tabs' value={'active'} defaultChecked={filter ==='active'} onChange={onChange} />
                <label className='tab' htmlFor='radio-2'>Active<span className='notification'>{numberActive}</span></label>
                <input type='radio' id='radio-3' name='tabs' value={'done'} defaultChecked={filter ==='done'} onChange={onChange} />
                <label className='tab' htmlFor='radio-3'>Done<span className='notification'>{numberDone}</span></label>
                <span className='glider'></span>
            </div>
        </div>
    )
}

export default Filter;
