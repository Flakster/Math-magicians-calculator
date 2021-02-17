import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { buttonName, size, color } = props;
  const classes = `button-box ${color}-button ${size}-button`;
  return (
    <button type="button" className={classes}>
      { buttonName }
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};
Button.defaultProps = {
  buttonName: '',
  size: 'small',
  color: 'red',
};

export default Button;
