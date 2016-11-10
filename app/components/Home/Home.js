import React from 'react';
import cssModules from 'react-css-modules';
import Calculator from '../Calculator/Calculator';
import style from './home.css';

const Home = () => (
  <div styleName="calc-container">
    <Calculator />
  </div>
);

export default cssModules(Home, style);
