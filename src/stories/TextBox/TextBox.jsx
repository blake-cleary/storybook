import './textBox.css'
import React from "react";
import PropTypes from 'prop-types';

export const TextBox = ({label, width, ...props}) => {
    return (
        <>
            <div className={['column']}>
                <label>{label}</label>
                <input type="text" style={width && {width}} {...props}></input>
            </div>
        </>
    );
};

TextBox.propTypes = {
    label: PropTypes.string,
    width: PropTypes.string,
};

TextBox.defaultProps = {
    label: '',
    width: '100px',
};
