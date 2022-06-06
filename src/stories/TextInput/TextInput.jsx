import './textInput.css'
import React from "react";
import PropTypes from 'prop-types';

export const TextInput = ({label, width, ...props}) => {
    return (
        <>
            <div className={['column']}>
                <label>{label}</label>
                <input type="text" style={width && {width}} {...props}></input>
            </div>
        </>
    );
};

TextInput.propTypes = {
    label: PropTypes.string,
    width: PropTypes.string,
};

TextInput.defaultProps = {
    label: '',
    width: '100px',
};
