import React from 'react';
import classNames from 'classnames';

import './Button.scss';

const Button = ({ onClick, className, disabled, ...attrs }) => {

    const finaleClass = classNames('clicker-button', className);

    return (
        <button
            {...attrs}
            className={finaleClass}
            disabled={disabled}
            onClick={onClick}
        ></button>
    );
};

export default Button;