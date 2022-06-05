import './dropdown.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Dropdown = ({id}) => {
    return (<select name="dropdown" id={id}>
        <option value="option1">Option1</option>
        <option value="option2">Option2</option>
        <option value="option3">Option2</option>
        <option value="option4">Option2</option>
    </select>);
};

Dropdown.propTypes = {};

Dropdown.defaultProps = {};
