import './button.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ primary, backgroundColor, color, size, shape, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const shapeMode = shape == 'circle' ? 'storybook-button--circle': '';
  return (
    <button
      type="button"
      className={[`storybook-button`, `storybook-button--${size}`, mode, shapeMode].join(' ')}
      style={(backgroundColor  && { backgroundColor, color })}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  shape: PropTypes.oneOf(['circle', 'squared']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  color: null,
  primary: false,
  size: 'medium',
  shape: 'circle',
  onClick: undefined,
};
