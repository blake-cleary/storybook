import './checkbox.css'
import React from "react";
import PropTypes from 'prop-types';

export const Checkbox = ({checked, ...props}) => {
    return (
        <input type="checkbox" checked={checked} {...props}></input>
    );
};

Checkbox.propTypes = {
    checked: PropTypes.bool,
};

Checkbox.defaultProps = {
    checked: false,
};
