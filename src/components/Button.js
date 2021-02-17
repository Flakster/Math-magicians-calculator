import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { buttonName, wide, color } = props;
  const size = wide ? 'big' : 'small';
  const classes = `button-box ${color}-button ${size}-button`;
  return (
    <button type="button" className={classes}>
      { buttonName }
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
};
Button.defaultProps = {
  buttonName: '',
  wide: false,
  color: 'orange',
};

export default Button;
