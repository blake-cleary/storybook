import './textbox.css'
import React from "react";
import PropTypes from 'prop-types';

export const Textbox = ({label, width, ...props}) => {
    return (
        <>
            <div className={['column']}>
                <label>{label}</label>
                <input type="text" style={width && {width}} {...props}></input>
            </div>
        </>
    );
};

Textbox.propTypes = {
    label: PropTypes.string,
    width: PropTypes.string,
};

Textbox.defaultProps = {
    label: '',
    width: '100px',
};
