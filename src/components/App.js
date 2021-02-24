import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../css/style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = ButtonName => {
    this.setState(
      prevState => calculate(prevState, ButtonName),
    );
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="app-box">
        <Display
          result={next || total}
          operation={operation}
        />
        <ButtonPanel classname="button-panel-box" clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
