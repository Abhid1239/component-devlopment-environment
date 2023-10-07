import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

function Autocomplete({ data }) {
    return (
        <div>
            <input />
            <ul>
                <li></li>
            </ul>
        </div>
    );
}

Autocomplete.defaultProps = defaultProps;
Autocomplete.propTypes = propTypes;

export default Autocomplete;
