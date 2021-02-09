import React from 'react';
import PropTypes  from 'prop-types';

function Button(props){
  return(
    <div>{props.buttonName}</div>
  )
}

Button.PropTypes = {
  buttonName: PropTypes.string
}

export default Button;