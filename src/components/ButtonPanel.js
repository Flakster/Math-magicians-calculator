import React from 'react';
import Button from './Button';

function ButtonPanel() {
  return (
    <>
      <div className="button-row">
        <Button buttonName="AC" color="grey" />
        <Button buttonName="+/-" color="grey" />
        <Button buttonName="%" color="grey" />
        <Button buttonName="÷" />
      </div>
      <div className="button-row">
        <Button buttonName="7" color="grey" />
        <Button buttonName="8" color="grey" />
        <Button buttonName="9" color="grey" />
        <Button buttonName="x" />
      </div>
      <div className="button-row">
        <Button buttonName="4" color="grey" />
        <Button buttonName="5" color="grey" />
        <Button buttonName="6" color="grey" />
        <Button buttonName="-" />
      </div>
      <div className="button-row">
        <Button buttonName="1" color="grey" />
        <Button buttonName="2" color="grey" />
        <Button buttonName="3" color="grey" />
        <Button buttonName="+" />
      </div>
      <div className="button-row">
        <Button buttonName="0" color="grey" wide="true" />
        <Button buttonName="." color="grey" />
        <Button buttonName="=" />
      </div>
    </>
  );
}
export default ButtonPanel;
