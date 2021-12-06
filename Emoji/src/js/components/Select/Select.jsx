import React from "react";

import './Select.scss';

const Select = ({ title, value, options, onChange }) => {

    const handlerSelectChange = (event) => {
        onChange(Number(event.target.value));
    }

    return (
        <div className='select'>
        <p className='select-title'>{title}</p>
        <select className='select-main' value={value} onChange={handlerSelectChange}>
            {
                options.map((option, index) => {
                    return (
                        <option key={index}>{option}</option>
                    )
                })
            }
        </select>
        </div>
    )
}

export default Select;
