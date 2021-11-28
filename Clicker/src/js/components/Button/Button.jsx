import React from 'react';
import classNames from 'classnames';

import './Button.scss';

const Button = ({ children, onClick, className, disabled, ...attrs }) => {

    const finaleClass = classNames('button', className);

    return (
        <button
            {...attrs}
            className={finaleClass}
            disabled={disabled}
            onClick={onClick}
        >{children}</button>
    );
};

export default Button;