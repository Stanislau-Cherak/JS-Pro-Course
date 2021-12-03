import React from "react";

import './Select.scss';

const Select = ({ title, options, onChange }) => {

    const handlerSelectChange = (event) => {
        onChange(Number(event.target.value));
    }

    return (
        <select className='select' value={title} onChange={handlerSelectChange}>
            <option defaultValue="10" disabled>{title}</option>
            {
                options.map((option, index) => {
                    return (
                        <option key={index}>{option}</option>
                    )
                })
            }
        </select>
    )
}

export default Select;
