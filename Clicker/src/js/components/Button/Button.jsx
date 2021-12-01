import React from 'react';
import classNames from 'classnames';

import './Button.scss';

const Button = ({ onClick, className, disabled = false, ...attrs }) => {

    const finaleClass = classNames('button', className);

    return (
        <button
            {...attrs}
            className={finaleClass}
            disabled={disabled}
            onClick={onClick}>
        </button>
    );
};

export default Button;