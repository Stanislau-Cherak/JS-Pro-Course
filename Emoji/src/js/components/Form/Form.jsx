import React from 'react';

import './Form.scss';

const Form = ({ value, onChange }) => {

    const handlerInputChange = (event) => {
        onChange(event.target.value);
    }

    return (
        <div className='form'>
            <input
                type='text'
                placeholder='search emoji'
                className='search_input'
                value={value}
                onChange={handlerInputChange}
            />
        </div>
    )
}

export default Form;
