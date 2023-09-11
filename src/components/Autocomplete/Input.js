import React, { forwardRef } from 'react';
import styles from './Input.module.scss';

function Input({
    disabled,
    inputClassName,
    inputRef,
    inputValue,
    placeholder,
    ...props
}) {

    return (
        <input
            {...props}
            type='text'
            disabled={disabled}
            className={`${styles.inputStyles} ${inputClassName}`}
            ref={inputRef}
            value={inputValue}
            placeholder={placeholder}
        />
    );
}

const InputWithRef = forwardRef(function (props, ref) {
    return <Input {...props} inputRef={ref} />
})

export default InputWithRef;
