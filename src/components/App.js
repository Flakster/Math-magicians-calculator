import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// import calculate from '../logic/calculate';
import '../css/style.css';

const App = () => (
  <div className="app-box">
    <Display />
    <ButtonPanel className="button-panel-box" />
  </div>
);

export default App;
