import React, { useRef, useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import PropTypes from 'prop-types';

import styles from './Autocomplete.module.scss';
import Input from './Input';
import Menu from './Menu';

function Autocomplete({
    options,
    className,
    disabled,
    inputClassName,
    inputPrefix,
    inputSuffix,
    isLoading,
    maxHeight,
    menuWrapperClassName,
    onChange,
    onClearClick,
    onResultClick,
    placeholder,
    showMenu,
    text,
}) {
    const [inputText, setInputText] = useState(text);
    const [shouldShowMenu, setShouldShowMenu] = useState(showMenu);
    const [filteredOption, setFilteredOptions] = useState(options);
    const [showLoader, setShowLoader] = useState(isLoading);

    const inputRef = useRef(null);

    useEffect(() => {
        setInputText(text);
    }, [text]);

    useEffect(() => {
        setShowLoader(isLoading);
    }, [isLoading]);

    useEffect(() => {
        setShouldShowMenu(showMenu);
    }, [showMenu]);

    useEffect(() => {
        const handleWindowClick = () => {
            if (shouldShowMenu) {
                setShouldShowMenu(false);
            }
        };
        window.addEventListener('click', handleWindowClick);

        return () => {
            window.removeEventListener('click', handleWindowClick);
        };
    }, [shouldShowMenu]);

    const filterData = inputText => {
        setFilteredOptions(options.filter(item =>
            item.label.toLowerCase().includes(inputText.toLowerCase())
        ));
        setShowLoader(false);
    };

    const debouncedInputChange = useDebouncedCallback(
        e => {
            filterData(e.target.value);
        },
        300
    );

    const handleInputChange = e => {
        const value = e.target.value;
        setInputText(value);
        setShowLoader(true);
        onChange(e, value);
        debouncedInputChange(e);
    };

    const handleInputClick = e => {
        setShouldShowMenu(true);
        e.stopPropagation();
    };

    const handleResultClick = e => {
        const value = e.target.textContent;
        setInputText(value);
        onResultClick(e);
        filterData(value);
    };

    const handleClearClick = e => {
        setInputText('');
        setShouldShowMenu(true);
        e.stopPropagation();
        filterData('');
        if(onClearClick) {
            onClearClick(e);
        }
    };

    return (
        <div className={`${styles.container} ${className}`}>
            <div className={styles.wrapper}>
                <div className={styles.prefixInputContainer}>
                    {inputPrefix}
                    <Input
                        disabled={disabled}
                        placeholder={placeholder}
                        className={`${styles.inputClasses} ${inputClassName}`}
                        inputValue={inputText}
                        onChange={handleInputChange}
                        onClick={handleInputClick}
                        ref={inputRef}
                    />
                </div>
                <div className={styles.loaderClearContainer}>
                    {
                        showLoader && <div className={styles.loader}></div>
                    }
                    <div onClick={(e) => handleClearClick(e)} className={styles.clearBtn} style={{ display: inputText ? 'block' : 'none' }}>
                        Clear
                    </div>
                    {inputSuffix}
                </div>
            </div>
            <Menu
                options={filteredOption}
                inputValue={inputText}
                shouldShowMenu={shouldShowMenu}
                onResultClick={handleResultClick}
                maxHeight={maxHeight}
                wrapperClassName={menuWrapperClassName}
            />
        </div>
    );
};

const propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, id: PropTypes.number })).isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    inputClassName: PropTypes.string,
    inputPrefix: PropTypes.node,
    inputSuffix: PropTypes.node,
    isLoading: PropTypes.bool,
    maxHeight: PropTypes.string,
    menuWrapperClassName: PropTypes.string,
    noOptionText: PropTypes.string,
    onChange: PropTypes.func,
    onClearClick: PropTypes.func,
    onResultClick: PropTypes.func,
    placeholder: PropTypes.string,
    showMenu: PropTypes.bool,
    text: PropTypes.string,
};

const defaultProps = {
    className: '',
    disabled: false,
    inputClassName: '',
    inputPrefix: null,
    inputSuffix: null,
    maxHeight: '244px',
    menuWrapperClassName: '',
    noOptionText: 'No result found!',
    onChange: () => {},
    onClearClick: () => {console.log('result')},
    onResultClick: () => {},
    placeholder: 'Enter text',
    showMenu: false,
    text: '',
};

Autocomplete.propTypes = propTypes;
Autocomplete.defaultProps = defaultProps;

export default Autocomplete;
