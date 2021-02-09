import React from 'react';
import PropTypes  from 'prop-types';

function Display(props){
  return (
    <div>{props.result || '0'}</div>
  )
}

Display.PropTypes = {
  result: PropTypes.string
}

export default Display;