import React from 'react';
import propTypes from 'prop-types';
import Button from './Button';

function ButtonPanel(props) {
  const { clickHandler } = props;
  return (
    <>
      <div className="button-row">
        <Button buttonName="AC" color="grey" handleClick={clickHandler} />
        <Button buttonName="+/-" color="grey" handleClick={clickHandler} />
        <Button buttonName="%" color="grey" handleClick={clickHandler} />
        <Button buttonName="÷" handleClick={clickHandler} />
      </div>
      <div className="button-row">
        <Button buttonName="7" color="grey" handleClick={clickHandler} />
        <Button buttonName="8" color="grey" handleClick={clickHandler} />
        <Button buttonName="9" color="grey" handleClick={clickHandler} />
        <Button buttonName="x" handleClick={clickHandler} />
      </div>
      <div className="button-row">
        <Button buttonName="4" color="grey" handleClick={clickHandler} />
        <Button buttonName="5" color="grey" handleClick={clickHandler} />
        <Button buttonName="6" color="grey" handleClick={clickHandler} />
        <Button buttonName="-" handleClick={clickHandler} />
      </div>
      <div className="button-row">
        <Button buttonName="1" color="grey" handleClick={clickHandler} />
        <Button buttonName="2" color="grey" handleClick={clickHandler} />
        <Button buttonName="3" color="grey" handleClick={clickHandler} />
        <Button buttonName="+" handleClick={clickHandler} />
      </div>
      <div className="button-row">
        <Button buttonName="0" color="grey" wide handleClick={clickHandler} />
        <Button buttonName="." color="grey" handleClick={clickHandler} />
        <Button buttonName="=" handleClick={clickHandler} />
      </div>
    </>
  );
}

ButtonPanel.propTypes = {
  clickHandler: propTypes.func.isRequired,
};

export default ButtonPanel;
